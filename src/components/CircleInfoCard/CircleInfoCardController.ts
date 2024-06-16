import { CircleApi, CircleReadDto, Configuration } from "app/backend-service-api";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { alpha3ToAlpha2, getName } from "i18n-iso-countries";
import { LoadableState, useLoadableController } from "src/utils/Loadable/LoadableController";
import { StringUtils } from "src/utils/StringUtils";
import { ref, Ref, watch } from "vue";

export interface CircleInfoCardInputModel {
  circleId: string;
}

export interface CircleCountryInfo {
  iso2: string;
  iso3: string;
  localizedCountryName: string;
  unicodeFlag: string;
  imageFlagUrl: string;
}

export interface CircleWebsite {
  url: string;
  displayText: string;
  domain: string;
}

export interface CircleInfoCardViewModel {
  Id: string;
  Name: string;
  Aliases: string[];
  WebsiteUrl: CircleWebsite[];
  Country: CircleCountryInfo | null;
  EstablishedDate: string | null;
  DescriptionText: string | null;
  DataSources: string[];
}

export type CircleInfoCardController = {
  viewModelController: LoadableState<CircleInfoCardViewModel>;
  inputModel: Ref<CircleInfoCardInputModel>;

  load: (state: CircleInfoCardInputModel) => Promise<void>;
  changeCircleId: (circleId: string) => void;
};

export interface CircleInfoCardControllerParams {
  initialInputState: CircleInfoCardInputModel;
  apiConfiguration: Configuration;
}

export default function useCircleInfoCardController(
  parameter: CircleInfoCardControllerParams
): CircleInfoCardController {
  const viewModelController = useLoadableController<CircleInfoCardViewModel>();
  const inputModel = ref(parameter.initialInputState);

  const _constructCircleDescription = (circleReadDto: CircleReadDto, countryInfo: CircleCountryInfo | null): string => {
    if (circleReadDto.dataSource?.length === 0) {
      return 'No data for this circle';
    }

    let description = `${circleReadDto.name}`;

    if (circleReadDto.alias!.length > 0) {
      description += ` (Also know as: ${StringUtils.constructGrammaticalListJoin(circleReadDto.alias!)})`;
    }

    if (countryInfo) {
      description += ` is a doujin music circle from ${countryInfo.localizedCountryName}.`;
    }

    if (circleReadDto.established) {
      const dateYearOnly = circleReadDto.established.getFullYear();
      const status = circleReadDto.status === undefined ? 'Unknown' : circleReadDto.status;
      description += ` The circle was established in ${dateYearOnly} and the current status is ${status}.`;
    }

    return description;
  }

  const _circleReadDtoToViewModel = (circleReadDto: CircleReadDto): CircleInfoCardViewModel => {
    let countryInfo: CircleCountryInfo | null = null;

    if (circleReadDto.country) {
      const alpha3 = circleReadDto.country.toUpperCase();
      const alpha2 = alpha3ToAlpha2(alpha3)!;
      countryInfo = {
        iso2: alpha2,
        iso3: alpha3,
        localizedCountryName: getName(alpha3, 'en')!,
        unicodeFlag: getUnicodeFlagIcon(alpha2),
        imageFlagUrl: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${alpha2}.svg`,
      };
    }

    const websiteUrls: CircleWebsite[] = [];
    if (circleReadDto.website) {
      for (const { url, invalid } of circleReadDto.website) {
        if (invalid) {
          continue;
        }

        const domain = new URL(url!).hostname;
        websiteUrls.push({
          url: url!,
          displayText: domain,
          domain: domain,
        });
      }
    }

    return {
      Id: circleReadDto.id!,
      Name: circleReadDto.name!,
      Aliases: circleReadDto.alias!,
      WebsiteUrl: websiteUrls,
      Country: countryInfo,
      EstablishedDate: null,
      DescriptionText: _constructCircleDescription(circleReadDto, countryInfo),
      DataSources: circleReadDto.dataSource!,
    };
  }

  const load = async (state: CircleInfoCardInputModel) => {
    viewModelController.setLoading();
    try {
      const circleApi = new CircleApi(parameter.apiConfiguration);

      const circleReadDto = await circleApi.getCircleById({
        id: state.circleId,
      });

      const viewModel = _circleReadDtoToViewModel(circleReadDto);

      viewModelController.setSuccess(viewModel);
    } catch (e) {
      viewModelController.setError(e as Error);
    }
  };

  const changeCircleId = (circleId: string) => {
    inputModel.value = {
      ...inputModel.value,
      circleId: circleId,
    };
  }

  watch(
    inputModel,
    async (newInputModel) => {
      console.log('Controller Loading due to inputModel change');
      await load(newInputModel);
    }, { deep: true }
  )

  load(inputModel.value);

  return {
    viewModelController,
    inputModel,
    load,
    changeCircleId,
  };
}
