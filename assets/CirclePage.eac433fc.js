import { Q as QPage } from "./QPage.8a45d096.js";
import { bm as useLoadableController, r as ref, w as watch, bD as CircleApi, bE as i18nIsoCountries, E as defineComponent, i as inject, G as openBlock, H as createBlock, I as withCtx, J as createVNode, K as QCardSection, R as createBaseVNode, U as createElementBlock, a5 as createCommentVNode, W as createTextVNode, $ as toDisplayString, Y as renderList, T as unref, X as Fragment, V as QSeparator, N as QBtn, O as QCard, _ as _export_sfc, S as useRouter, bi as useRoute, bj as Logger, g as computed, ae as onBeforeMount } from "./index.1f91f6c0.js";
import { A as AlbumOrderOptions, u as useAlbumListGridViewController, a as AlbumListGridView } from "./AlbumListGridViewController.1994b603.js";
import { L as LoadableElement, Q as QSpinnerGears } from "./LoadableElement.de9e08e7.js";
import { l as QChip } from "./QSelect.b14ee0f7.js";
import { U as UrlUtils } from "./UrlUtils.da180cca.js";
import { D as DataSourceButton } from "./DataSourceButton.5bac586c.js";
import "./QPagination.5b5c257e.js";
import "./QImg.6523eebf.js";
import "./QItem.84a0f26a.js";
import "./QTooltip.1559a8a4.js";
import "./index.ce69cbf8.js";
import "./QList.99e4aff1.js";
function getCountryFlag(country) {
  return getRegionalIndicatorSymbol(country[0]) + getRegionalIndicatorSymbol(country[1]);
}
function getRegionalIndicatorSymbol(letter) {
  return String.fromCodePoint(127462 - 65 + letter.toUpperCase().charCodeAt(0));
}
class StringUtils {
  static constructGrammaticalListJoin(list, logicalConjunction = "or") {
    if (list.length === 1) {
      return list[0];
    }
    if (list.length === 2) {
      return `${list[0]} ${logicalConjunction} ${list[1]}`;
    }
    return `${list.slice(0, -1).join(", ")}, ${logicalConjunction} ${list.slice(-1)[0]}`;
  }
}
function useCircleInfoCardController(parameter) {
  const viewModelController = useLoadableController();
  const inputModel = ref(parameter.initialInputState);
  const _constructCircleDescription = (circleReadDto, countryInfo) => {
    var _a;
    if (((_a = circleReadDto.dataSource) == null ? void 0 : _a.length) === 0) {
      return "No data for this circle";
    }
    let description = `${circleReadDto.name}`;
    if (circleReadDto.alias.length > 0) {
      description += ` (Also know as: ${StringUtils.constructGrammaticalListJoin(circleReadDto.alias)})`;
    }
    if (countryInfo) {
      description += ` is a doujin music circle from ${countryInfo.localizedCountryName}.`;
    }
    if (circleReadDto.established) {
      const dateYearOnly = circleReadDto.established.getFullYear();
      const status = circleReadDto.status === void 0 ? "Unknown" : circleReadDto.status;
      description += ` The circle was established in ${dateYearOnly} and the current status is ${status}.`;
    }
    return description;
  };
  const _circleReadDtoToViewModel = (circleReadDto) => {
    let countryInfo = null;
    if (circleReadDto.country) {
      const alpha3 = circleReadDto.country.toUpperCase();
      const alpha2 = i18nIsoCountries.alpha3ToAlpha2(alpha3);
      countryInfo = {
        iso2: alpha2,
        iso3: alpha3,
        localizedCountryName: i18nIsoCountries.getName(alpha3, "en"),
        unicodeFlag: getCountryFlag(alpha2),
        imageFlagUrl: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${alpha2}.svg`
      };
    }
    const websiteUrls = [];
    if (circleReadDto.website) {
      for (const { url, invalid } of circleReadDto.website) {
        if (invalid) {
          continue;
        }
        const domain = new URL(url).hostname;
        websiteUrls.push({
          url,
          displayText: domain,
          domain
        });
      }
    }
    return {
      Id: circleReadDto.id,
      Name: circleReadDto.name,
      Aliases: circleReadDto.alias,
      WebsiteUrl: websiteUrls,
      Country: countryInfo,
      EstablishedDate: null,
      DescriptionText: _constructCircleDescription(circleReadDto, countryInfo),
      DataSources: circleReadDto.dataSource
    };
  };
  const load = async (state) => {
    viewModelController.setLoading();
    try {
      const circleApi = new CircleApi(parameter.apiConfiguration);
      const circleReadDto = await circleApi.getCircleById({
        id: state.circleId
      });
      const viewModel = _circleReadDtoToViewModel(circleReadDto);
      viewModelController.setSuccess(viewModel);
    } catch (e) {
      viewModelController.setError(e);
    }
  };
  const changeCircleId = (circleId) => {
    inputModel.value = {
      ...inputModel.value,
      circleId
    };
  };
  watch(
    inputModel,
    async (newInputModel) => {
      console.log("Controller Loading due to inputModel change");
      await load(newInputModel);
    },
    { deep: true }
  );
  load(inputModel.value);
  return {
    viewModelController,
    inputModel,
    load,
    changeCircleId
  };
}
var CircleInfoCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = ["alt", "src"];
const _hoisted_3 = { class: "text-subtitle1" };
const _hoisted_4 = { class: "q-mt-sm row" };
const _sfc_main$1 = defineComponent({
  __name: "CircleInfoCard",
  props: {
    controller: {}
  },
  setup(__props) {
    const props = __props;
    const radioService = inject("radioService");
    const startRadioForCircle = () => {
      radioService == null ? void 0 : radioService.setFilters({
        circles: [props.controller.inputModel.value.circleId]
      });
      radioService == null ? void 0 : radioService.activate();
    };
    props.controller.load(props.controller.inputModel.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LoadableElement, {
        "state-controller": props.controller.viewModelController
      }, {
        loading: withCtx(() => [
          createVNode(QSpinnerGears)
        ]),
        default: withCtx(({ data }) => [
          createVNode(QCard, { class: "q-ma-md circle-info-card" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [
                    createVNode(DataSourceButton, {
                      "data-sources": data == null ? void 0 : data.DataSources
                    }, null, 8, ["data-sources"]),
                    createBaseVNode("div", _hoisted_1, [
                      ((_a = data == null ? void 0 : data.Country) == null ? void 0 : _a.imageFlagUrl) ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        alt: `${(_b = data == null ? void 0 : data.Country) == null ? void 0 : _b.localizedCountryName} flag`,
                        src: (_c = data == null ? void 0 : data.Country) == null ? void 0 : _c.imageFlagUrl,
                        style: { "width": "25px", "height": "16.66px", "border": "1px solid gray" }
                      }, null, 8, _hoisted_2)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(data == null ? void 0 : data.Name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_3, toDisplayString(data == null ? void 0 : data.DescriptionText), 1),
                    createBaseVNode("div", _hoisted_4, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(data == null ? void 0 : data.WebsiteUrl, (website) => {
                        return openBlock(), createBlock(QChip, {
                          key: website.url,
                          clickable: "",
                          color: "secondary",
                          class: "q-mr-sm",
                          href: website.url,
                          onClick: ($event) => unref(UrlUtils).openUrlInNewTab(website.url),
                          label: website.displayText
                        }, null, 8, ["href", "onClick", "label"]);
                      }), 128))
                    ])
                  ];
                }),
                _: 2
              }, 1024),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    color: "primary",
                    class: "rounded-borders",
                    label: "Start Radio",
                    onClick: startRadioForCircle
                  })
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["state-controller"]);
    };
  }
});
var CircleInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3729fae2"], ["__file", "CircleInfoCard.vue"]]);
const _sfc_main = defineComponent({
  __name: "CirclePage",
  setup(__props) {
    const $router = useRouter();
    const $route = useRoute();
    const apiConfigProvider = inject("apiConfigProvider");
    if (!apiConfigProvider) {
      throw new Error("API configuration provider not found");
    }
    const logger = Logger.getLogger("Circle Page");
    const circleId = ref(null);
    let circleAlbumController = null;
    let circleInfoController = null;
    const circleAlbumLoadFunction = computed(() => {
      return async (state) => {
        logger.info(`Loading page ${JSON.stringify(state)}`);
        const circleApi = new CircleApi(
          apiConfigProvider.getApiConfigurationWithAuth()
        );
        const albums = await circleApi.getCircleAlbumsById({
          id: circleId.value,
          start: (state.page - 1) * 50,
          limit: 50,
          sortOrder: state.sortOrder,
          sort: state.sortField
        });
        if (albums === void 0 || albums.albums === void 0) {
          throw new Error("No albums found");
        }
        return {
          currentPage: state.page,
          totalPages: Math.ceil(((albums == null ? void 0 : albums.total) || 1) / 50),
          albums: albums == null ? void 0 : albums.albums,
          sortField: state.sortField,
          sortOrder: state.sortOrder
        };
      };
    });
    const urlStateDecoder = computed(() => {
      const pageParam = $route.params.page;
      const page = pageParam ? parseInt(pageParam) : 1;
      const sortField = $route.query.sortField;
      const sortOrder = $route.query.sortOrder;
      console.log(`Decoded page: ${page}, sortField: ${sortField}, sortOrder: ${sortOrder}`);
      return {
        page,
        sortField: sortField || AlbumOrderOptions.Date,
        sortOrder: sortOrder || "Ascending"
      };
    });
    const urlStateEncoder = (state) => {
      $router.push({
        name: "CircleAlbums",
        params: {
          page: state.page
        },
        query: {
          sortField: state.sortField,
          sortOrder: state.sortOrder
        }
      });
    };
    onBeforeMount(() => {
      console.log("onBeforeMount");
      const circleIdParam = $router.currentRoute.value.params.circleId;
      if (circleIdParam === void 0) {
        throw new Error("Circle ID not found in route");
      }
      circleId.value = circleIdParam;
      console.log("circleId", circleId.value);
      circleAlbumController = useAlbumListGridViewController({
        load: circleAlbumLoadFunction.value,
        initialInputState: {
          page: 1,
          sortField: AlbumOrderOptions.Date,
          sortOrder: "Ascending"
        },
        urlStateDecoder,
        urlStateEncoder
      });
      circleInfoController = useCircleInfoCardController({
        apiConfiguration: apiConfigProvider.getApiConfigurationWithAuth(),
        initialInputState: {
          circleId: circleId.value
        }
      });
      watch(
        () => $router.currentRoute.value.params.circleId,
        (newValue, oldValue) => {
          logger.info(`Circle ID changed from ${oldValue} to ${newValue}`);
          if (newValue === void 0 || newValue === oldValue) {
            return;
          }
          circleId.value = newValue;
          circleInfoController == null ? void 0 : circleInfoController.changeCircleId(circleId.value);
          circleAlbumController == null ? void 0 : circleAlbumController.changePage(1);
        }
      );
      circleId.value = circleIdParam;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(CircleInfoCard, {
            controller: unref(circleInfoController)
          }, null, 8, ["controller"]),
          createVNode(AlbumListGridView, {
            controller: unref(circleAlbumController)
          }, null, 8, ["controller"])
        ]),
        _: 1
      });
    };
  }
});
var CirclePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "CirclePage.vue"]]);
export { CirclePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY2xlUGFnZS5lYWM0MzNmYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvdW50cnktZmxhZy1pY29ucy9tb2R1bGVzL3VuaWNvZGUuanMiLCIuLi8uLi8uLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQ2lyY2xlUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZXMgVW5pY29kZSBmbGFnIGZyb20gYSB0d28tbGV0dGVyIElTTyBjb3VudHJ5IGNvZGUuXHJcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0MDUwNjcxL2hvdy10by1wdXQtamFwYW4tZmxhZy1jaGFyYWN0ZXItaW4tYS1zdHJpbmdcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb3VudHJ5IOKAlCBBIHR3by1sZXR0ZXIgSVNPIGNvdW50cnkgY29kZSAoY2FzZS1pbnNlbnNpdGl2ZSkuXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb3VudHJ5RmxhZyhjb3VudHJ5KSB7XG4gIHJldHVybiBnZXRSZWdpb25hbEluZGljYXRvclN5bWJvbChjb3VudHJ5WzBdKSArIGdldFJlZ2lvbmFsSW5kaWNhdG9yU3ltYm9sKGNvdW50cnlbMV0pO1xufVxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbGV0dGVyIHRvIGEgUmVnaW9uYWwgSW5kaWNhdG9yIFN5bWJvbC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBsZXR0ZXJcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVnaW9uYWxJbmRpY2F0b3JTeW1ib2wobGV0dGVyKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCgweDFGMUU2IC0gNjUgKyBsZXR0ZXIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaWNvZGUuanMubWFwIiwiZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBjb25zdHJ1Y3RHcmFtbWF0aWNhbExpc3RKb2luKGxpc3Q6IHN0cmluZ1tdLCBsb2dpY2FsQ29uanVuY3Rpb246ICdhbmQnIHwgJ29yJyA9ICdvcicpOiBzdHJpbmcge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGxpc3RbMF07XG4gICAgfVxuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gYCR7bGlzdFswXX0gJHtsb2dpY2FsQ29uanVuY3Rpb259ICR7bGlzdFsxXX1gO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtsaXN0LnNsaWNlKDAsIC0xKS5qb2luKCcsICcpfSwgJHtsb2dpY2FsQ29uanVuY3Rpb259ICR7bGlzdC5zbGljZSgtMSlbMF19YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2lyY2xlQXBpLCBDaXJjbGVSZWFkRHRvLCBDb25maWd1cmF0aW9uIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IGdldFVuaWNvZGVGbGFnSWNvbiBmcm9tICdjb3VudHJ5LWZsYWctaWNvbnMvdW5pY29kZSc7XG5pbXBvcnQgeyBhbHBoYTNUb0FscGhhMiwgZ2V0TmFtZSB9IGZyb20gJ2kxOG4taXNvLWNvdW50cmllcyc7XG5pbXBvcnQgeyBMb2FkYWJsZVN0YXRlLCB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnc3JjL3V0aWxzL1N0cmluZ1V0aWxzJztcbmltcG9ydCB7IHJlZiwgUmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsIHtcbiAgY2lyY2xlSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVDb3VudHJ5SW5mbyB7XG4gIGlzbzI6IHN0cmluZztcbiAgaXNvMzogc3RyaW5nO1xuICBsb2NhbGl6ZWRDb3VudHJ5TmFtZTogc3RyaW5nO1xuICB1bmljb2RlRmxhZzogc3RyaW5nO1xuICBpbWFnZUZsYWdVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVXZWJzaXRlIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZUluZm9DYXJkVmlld01vZGVsIHtcbiAgSWQ6IHN0cmluZztcbiAgTmFtZTogc3RyaW5nO1xuICBBbGlhc2VzOiBzdHJpbmdbXTtcbiAgV2Vic2l0ZVVybDogQ2lyY2xlV2Vic2l0ZVtdO1xuICBDb3VudHJ5OiBDaXJjbGVDb3VudHJ5SW5mbyB8IG51bGw7XG4gIEVzdGFibGlzaGVkRGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgRGVzY3JpcHRpb25UZXh0OiBzdHJpbmcgfCBudWxsO1xuICBEYXRhU291cmNlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCB0eXBlIENpcmNsZUluZm9DYXJkQ29udHJvbGxlciA9IHtcbiAgdmlld01vZGVsQ29udHJvbGxlcjogTG9hZGFibGVTdGF0ZTxDaXJjbGVJbmZvQ2FyZFZpZXdNb2RlbD47XG4gIGlucHV0TW9kZWw6IFJlZjxDaXJjbGVJbmZvQ2FyZElucHV0TW9kZWw+O1xuXG4gIGxvYWQ6IChzdGF0ZTogQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VDaXJjbGVJZDogKGNpcmNsZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZUluZm9DYXJkQ29udHJvbGxlclBhcmFtcyB7XG4gIGluaXRpYWxJbnB1dFN0YXRlOiBDaXJjbGVJbmZvQ2FyZElucHV0TW9kZWw7XG4gIGFwaUNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNpcmNsZUluZm9DYXJkQ29udHJvbGxlcihcbiAgcGFyYW1ldGVyOiBDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXJQYXJhbXNcbik6IENpcmNsZUluZm9DYXJkQ29udHJvbGxlciB7XG4gIGNvbnN0IHZpZXdNb2RlbENvbnRyb2xsZXIgPSB1c2VMb2FkYWJsZUNvbnRyb2xsZXI8Q2lyY2xlSW5mb0NhcmRWaWV3TW9kZWw+KCk7XG4gIGNvbnN0IGlucHV0TW9kZWwgPSByZWYocGFyYW1ldGVyLmluaXRpYWxJbnB1dFN0YXRlKTtcblxuICBjb25zdCBfY29uc3RydWN0Q2lyY2xlRGVzY3JpcHRpb24gPSAoY2lyY2xlUmVhZER0bzogQ2lyY2xlUmVhZER0bywgY291bnRyeUluZm86IENpcmNsZUNvdW50cnlJbmZvIHwgbnVsbCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGNpcmNsZVJlYWREdG8uZGF0YVNvdXJjZT8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ05vIGRhdGEgZm9yIHRoaXMgY2lyY2xlJztcbiAgICB9XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBgJHtjaXJjbGVSZWFkRHRvLm5hbWV9YDtcblxuICAgIGlmIChjaXJjbGVSZWFkRHRvLmFsaWFzIS5sZW5ndGggPiAwKSB7XG4gICAgICBkZXNjcmlwdGlvbiArPSBgIChBbHNvIGtub3cgYXM6ICR7U3RyaW5nVXRpbHMuY29uc3RydWN0R3JhbW1hdGljYWxMaXN0Sm9pbihjaXJjbGVSZWFkRHRvLmFsaWFzISl9KWA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50cnlJbmZvKSB7XG4gICAgICBkZXNjcmlwdGlvbiArPSBgIGlzIGEgZG91amluIG11c2ljIGNpcmNsZSBmcm9tICR7Y291bnRyeUluZm8ubG9jYWxpemVkQ291bnRyeU5hbWV9LmA7XG4gICAgfVxuXG4gICAgaWYgKGNpcmNsZVJlYWREdG8uZXN0YWJsaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRhdGVZZWFyT25seSA9IGNpcmNsZVJlYWREdG8uZXN0YWJsaXNoZWQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGNpcmNsZVJlYWREdG8uc3RhdHVzID09PSB1bmRlZmluZWQgPyAnVW5rbm93bicgOiBjaXJjbGVSZWFkRHRvLnN0YXR1cztcbiAgICAgIGRlc2NyaXB0aW9uICs9IGAgVGhlIGNpcmNsZSB3YXMgZXN0YWJsaXNoZWQgaW4gJHtkYXRlWWVhck9ubHl9IGFuZCB0aGUgY3VycmVudCBzdGF0dXMgaXMgJHtzdGF0dXN9LmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgY29uc3QgX2NpcmNsZVJlYWREdG9Ub1ZpZXdNb2RlbCA9IChjaXJjbGVSZWFkRHRvOiBDaXJjbGVSZWFkRHRvKTogQ2lyY2xlSW5mb0NhcmRWaWV3TW9kZWwgPT4ge1xuICAgIGxldCBjb3VudHJ5SW5mbzogQ2lyY2xlQ291bnRyeUluZm8gfCBudWxsID0gbnVsbDtcblxuICAgIGlmIChjaXJjbGVSZWFkRHRvLmNvdW50cnkpIHtcbiAgICAgIGNvbnN0IGFscGhhMyA9IGNpcmNsZVJlYWREdG8uY291bnRyeS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY29uc3QgYWxwaGEyID0gYWxwaGEzVG9BbHBoYTIoYWxwaGEzKSE7XG4gICAgICBjb3VudHJ5SW5mbyA9IHtcbiAgICAgICAgaXNvMjogYWxwaGEyLFxuICAgICAgICBpc28zOiBhbHBoYTMsXG4gICAgICAgIGxvY2FsaXplZENvdW50cnlOYW1lOiBnZXROYW1lKGFscGhhMywgJ2VuJykhLFxuICAgICAgICB1bmljb2RlRmxhZzogZ2V0VW5pY29kZUZsYWdJY29uKGFscGhhMiksXG4gICAgICAgIGltYWdlRmxhZ1VybDogYGh0dHA6Ly9wdXJlY2F0YW1waGV0YW1pbmUuZ2l0aHViLmlvL2NvdW50cnktZmxhZy1pY29ucy8zeDIvJHthbHBoYTJ9LnN2Z2AsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHdlYnNpdGVVcmxzOiBDaXJjbGVXZWJzaXRlW10gPSBbXTtcbiAgICBpZiAoY2lyY2xlUmVhZER0by53ZWJzaXRlKSB7XG4gICAgICBmb3IgKGNvbnN0IHsgdXJsLCBpbnZhbGlkIH0gb2YgY2lyY2xlUmVhZER0by53ZWJzaXRlKSB7XG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHVybCEpLmhvc3RuYW1lO1xuICAgICAgICB3ZWJzaXRlVXJscy5wdXNoKHtcbiAgICAgICAgICB1cmw6IHVybCEsXG4gICAgICAgICAgZGlzcGxheVRleHQ6IGRvbWFpbixcbiAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIElkOiBjaXJjbGVSZWFkRHRvLmlkISxcbiAgICAgIE5hbWU6IGNpcmNsZVJlYWREdG8ubmFtZSEsXG4gICAgICBBbGlhc2VzOiBjaXJjbGVSZWFkRHRvLmFsaWFzISxcbiAgICAgIFdlYnNpdGVVcmw6IHdlYnNpdGVVcmxzLFxuICAgICAgQ291bnRyeTogY291bnRyeUluZm8sXG4gICAgICBFc3RhYmxpc2hlZERhdGU6IG51bGwsXG4gICAgICBEZXNjcmlwdGlvblRleHQ6IF9jb25zdHJ1Y3RDaXJjbGVEZXNjcmlwdGlvbihjaXJjbGVSZWFkRHRvLCBjb3VudHJ5SW5mbyksXG4gICAgICBEYXRhU291cmNlczogY2lyY2xlUmVhZER0by5kYXRhU291cmNlISxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbG9hZCA9IGFzeW5jIChzdGF0ZTogQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsKSA9PiB7XG4gICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNpcmNsZUFwaSA9IG5ldyBDaXJjbGVBcGkocGFyYW1ldGVyLmFwaUNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBjb25zdCBjaXJjbGVSZWFkRHRvID0gYXdhaXQgY2lyY2xlQXBpLmdldENpcmNsZUJ5SWQoe1xuICAgICAgICBpZDogc3RhdGUuY2lyY2xlSWQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgdmlld01vZGVsID0gX2NpcmNsZVJlYWREdG9Ub1ZpZXdNb2RlbChjaXJjbGVSZWFkRHRvKTtcblxuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRFcnJvcihlIGFzIEVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ2lyY2xlSWQgPSAoY2lyY2xlSWQ6IHN0cmluZykgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgY2lyY2xlSWQ6IGNpcmNsZUlkLFxuICAgIH07XG4gIH1cblxuICB3YXRjaChcbiAgICBpbnB1dE1vZGVsLFxuICAgIGFzeW5jIChuZXdJbnB1dE1vZGVsKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byBpbnB1dE1vZGVsIGNoYW5nZScpO1xuICAgICAgYXdhaXQgbG9hZChuZXdJbnB1dE1vZGVsKTtcbiAgICB9LCB7IGRlZXA6IHRydWUgfVxuICApXG5cbiAgbG9hZChpbnB1dE1vZGVsLnZhbHVlKTtcblxuICByZXR1cm4ge1xuICAgIHZpZXdNb2RlbENvbnRyb2xsZXIsXG4gICAgaW5wdXRNb2RlbCxcbiAgICBsb2FkLFxuICAgIGNoYW5nZUNpcmNsZUlkLFxuICB9O1xufVxuIiwiPHRlbXBsYXRlPlxuICA8TG9hZGFibGVFbGVtZW50IDpzdGF0ZS1jb250cm9sbGVyPVwicHJvcHMuY29udHJvbGxlci52aWV3TW9kZWxDb250cm9sbGVyXCI+XG4gICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgPHEtc3Bpbm5lci1nZWFycyAvPlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGRhdGEgfVwiPlxuICAgICAgPHEtY2FyZCBjbGFzcz1cInEtbWEtbWQgY2lyY2xlLWluZm8tY2FyZFwiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPERhdGFTb3VyY2VCdXR0b24gOmRhdGEtc291cmNlcz1cImRhdGE/LkRhdGFTb3VyY2VzXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICB2LWlmPVwiZGF0YT8uQ291bnRyeT8uaW1hZ2VGbGFnVXJsXCJcbiAgICAgICAgICAgICAgOmFsdD1cImAke2RhdGE/LkNvdW50cnk/LmxvY2FsaXplZENvdW50cnlOYW1lfSBmbGFnYFwiXG4gICAgICAgICAgICAgIDpzcmM9XCJkYXRhPy5Db3VudHJ5Py5pbWFnZUZsYWdVcmxcIlxuICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAyNXB4OyBoZWlnaHQ6IDE2LjY2cHg7IGJvcmRlcjogMXB4IHNvbGlkIGdyYXlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt7IGRhdGE/Lk5hbWUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBkYXRhPy5EZXNjcmlwdGlvblRleHQgfX08L2Rpdj5cblxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInEtbXQtc20gcm93XCI+XG4gICAgICAgICAgICA8cS1jaGlwXG4gICAgICAgICAgICAgIHYtZm9yPVwid2Vic2l0ZSBpbiBkYXRhPy5XZWJzaXRlVXJsXCJcbiAgICAgICAgICAgICAgOmtleT1cIndlYnNpdGUudXJsXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICAgICAgOmhyZWY9XCJ3ZWJzaXRlLnVybFwiXG4gICAgICAgICAgICAgIEBjbGljaz1cIlVybFV0aWxzLm9wZW5VcmxJbk5ld1RhYih3ZWJzaXRlLnVybClcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJ3ZWJzaXRlLmRpc3BsYXlUZXh0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IFJhZGlvXCJcbiAgICAgICAgICAgIEBjbGljaz1cInN0YXJ0UmFkaW9Gb3JDaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9Mb2FkYWJsZUVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyIH0gZnJvbSAnLi9DaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXInO1xuaW1wb3J0IExvYWRhYmxlRWxlbWVudCBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVFbGVtZW50LnZ1ZSc7XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gJ3NyYy91dGlscy9VcmxVdGlscyc7XG5pbXBvcnQgUmFkaW9TZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUmFkaW9TZXJ2aWNlJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgRGF0YVNvdXJjZUJ1dHRvbiBmcm9tICdzcmMvY29tcG9uZW50cy9EYXRhU291cmNlQnRuL0RhdGFTb3VyY2VCdXR0b24udnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGNvbnRyb2xsZXI6IENpcmNsZUluZm9DYXJkQ29udHJvbGxlcjtcbn0+KCk7XG5cbi8vIEluamVjdCBzZXJ2aWNlc1xuY29uc3QgcmFkaW9TZXJ2aWNlID0gaW5qZWN0PFJhZGlvU2VydmljZT4oJ3JhZGlvU2VydmljZScpO1xuXG5jb25zdCBzdGFydFJhZGlvRm9yQ2lyY2xlID0gKCkgPT4ge1xuICByYWRpb1NlcnZpY2U/LnNldEZpbHRlcnMoe1xuICAgIGNpcmNsZXM6IFtwcm9wcy5jb250cm9sbGVyLmlucHV0TW9kZWwudmFsdWUuY2lyY2xlSWRdLFxuICB9KTtcblxuICByYWRpb1NlcnZpY2U/LmFjdGl2YXRlKCk7XG59XG5cbnByb3BzLmNvbnRyb2xsZXIubG9hZChwcm9wcy5jb250cm9sbGVyLmlucHV0TW9kZWwudmFsdWUpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmJvZHktLWRhcmsgLmNpcmNsZS1pbmZvLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgMDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPENpcmNsZUluZm9DYXJkIDpjb250cm9sbGVyPVwiY2lyY2xlSW5mb0NvbnRyb2xsZXIhXCI+IDwvQ2lyY2xlSW5mb0NhcmQ+XG4gICAgPEFsYnVtTGlzdEdyaWRWaWV3IDpjb250cm9sbGVyPVwiY2lyY2xlQWxidW1Db250cm9sbGVyIVwiPiA8L0FsYnVtTGlzdEdyaWRWaWV3PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBDb25maWd1cmF0aW9uLFxuICBBbGJ1bU9yZGVyT3B0aW9ucyxcbiAgQ2lyY2xlQXBpLFxufSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQWxidW1MaXN0R3JpZFZpZXcgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXcudnVlJztcbmltcG9ydCB1c2VBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIsIHtcbiAgQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLFxufSBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9BbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsJztcbmltcG9ydCBBbGJ1bUxpc3RHcmlkVmlld1ZpZXdNb2RlbCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwnO1xuaW1wb3J0IEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0FwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJ3NyYy91dGlscy9Mb2dnZXInO1xuaW1wb3J0IHsgY29tcHV0ZWQsIGluamVjdCwgb25BY3RpdmF0ZWQsIG9uQmVmb3JlTW91bnQsIG9uRGVhY3RpdmF0ZWQsIFJlZiwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSwgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgdXNlQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyLCB7IENpcmNsZUluZm9DYXJkQ29udHJvbGxlciB9IGZyb20gJ3NyYy9jb21wb25lbnRzL0NpcmNsZUluZm9DYXJkL0NpcmNsZUluZm9DYXJkQ29udHJvbGxlcic7XG5pbXBvcnQgQ2lyY2xlSW5mb0NhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2lyY2xlSW5mb0NhcmQvQ2lyY2xlSW5mb0NhcmQudnVlJztcblxuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgJHJvdXRlID0gdXNlUm91dGUoKTtcbmNvbnN0IGFwaUNvbmZpZ1Byb3ZpZGVyID1cbiAgaW5qZWN0PEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcjxDb25maWd1cmF0aW9uPj4oJ2FwaUNvbmZpZ1Byb3ZpZGVyJyk7XG5pZiAoIWFwaUNvbmZpZ1Byb3ZpZGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcignQVBJIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIgbm90IGZvdW5kJyk7XG59XG5cbmNvbnN0IGxvZ2dlciA9IExvZ2dlci5nZXRMb2dnZXIoJ0NpcmNsZSBQYWdlJyk7XG5jb25zdCBjaXJjbGVJZDogUmVmPHN0cmluZyB8IG51bGw+ID0gcmVmKG51bGwpO1xuXG5sZXQgY2lyY2xlQWxidW1Db250cm9sbGVyOiBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIgfCBudWxsID0gbnVsbDtcbmxldCBjaXJjbGVJbmZvQ29udHJvbGxlcjogQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyIHwgbnVsbCA9IG51bGw7XG5cbmNvbnN0IGNpcmNsZUFsYnVtTG9hZEZ1bmN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYXN5bmMgKHN0YXRlOiBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWwpID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgTG9hZGluZyBwYWdlICR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApO1xuICAgIGNvbnN0IGNpcmNsZUFwaSA9IG5ldyBDaXJjbGVBcGkoXG4gICAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICAgICk7XG5cbiAgICBjb25zdCBhbGJ1bXMgPSBhd2FpdCBjaXJjbGVBcGkuZ2V0Q2lyY2xlQWxidW1zQnlJZCh7XG4gICAgICBpZDogY2lyY2xlSWQudmFsdWUhLFxuICAgICAgc3RhcnQ6IChzdGF0ZS5wYWdlIC0gMSkgKiA1MCxcbiAgICAgIGxpbWl0OiA1MCxcbiAgICAgIHNvcnRPcmRlcjogc3RhdGUuc29ydE9yZGVyLFxuICAgICAgc29ydDogc3RhdGUuc29ydEZpZWxkLFxuICAgIH0pO1xuXG4gICAgaWYgKGFsYnVtcyA9PT0gdW5kZWZpbmVkIHx8IGFsYnVtcy5hbGJ1bXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhbGJ1bXMgZm91bmQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFBhZ2U6IHN0YXRlLnBhZ2UsXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoKGFsYnVtcz8udG90YWwgfHwgMSkgLyA1MCksXG4gICAgICBhbGJ1bXM6IGFsYnVtcz8uYWxidW1zLFxuXG4gICAgICBzb3J0RmllbGQ6IHN0YXRlLnNvcnRGaWVsZCxcbiAgICAgIHNvcnRPcmRlcjogc3RhdGUuc29ydE9yZGVyLFxuICAgIH0gYXMgQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWw7XG4gIH07XG59KTtcblxuY29uc3QgdXJsU3RhdGVEZWNvZGVyID0gY29tcHV0ZWQoKCk6IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCA9PiB7XG4gIC8vIEVuc3VyZSAkcm91dGUgaXMgcmVmZXJlbmNlZCBpbnNpZGUgdGhlIGNvbXB1dGVkIGZ1bmN0aW9uXG4gIGNvbnN0IHBhZ2VQYXJhbSA9ICRyb3V0ZS5wYXJhbXMucGFnZTtcbiAgY29uc3QgcGFnZSA9IHBhZ2VQYXJhbSA/IHBhcnNlSW50KHBhZ2VQYXJhbSBhcyBzdHJpbmcpIDogMTtcblxuICBjb25zdCBzb3J0RmllbGQgPSAkcm91dGUucXVlcnkuc29ydEZpZWxkIGFzIEFsYnVtT3JkZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuICBjb25zdCBzb3J0T3JkZXIgPSAkcm91dGUucXVlcnkuc29ydE9yZGVyIGFzICdBc2NlbmRpbmcnIHwgJ0Rlc2NlbmRpbmcnIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnNvbGUubG9nKGBEZWNvZGVkIHBhZ2U6ICR7cGFnZX0sIHNvcnRGaWVsZDogJHtzb3J0RmllbGR9LCBzb3J0T3JkZXI6ICR7c29ydE9yZGVyfWApO1xuXG4gIHJldHVybiB7XG4gICAgcGFnZSxcbiAgICBzb3J0RmllbGQ6IHNvcnRGaWVsZCB8fCBBbGJ1bU9yZGVyT3B0aW9ucy5EYXRlLFxuICAgIHNvcnRPcmRlcjogc29ydE9yZGVyIHx8ICdBc2NlbmRpbmcnLFxuICB9O1xufSk7XG5cbmNvbnN0IHVybFN0YXRlRW5jb2RlciA9IChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiB7XG4gIC8vIFB1c2ggdGhlIHBhZ2UgdG8gdGhlIHBhdGggYW5kIHNvcnRpbmcgb3B0aW9ucyB0byBxdWVyeSBwYXJhbXNcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnQ2lyY2xlQWxidW1zJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UsXG4gICAgfSxcbiAgICBxdWVyeToge1xuICAgICAgc29ydEZpZWxkOiBzdGF0ZS5zb3J0RmllbGQsXG4gICAgICBzb3J0T3JkZXI6IHN0YXRlLnNvcnRPcmRlcixcbiAgICB9LFxuICB9KTtcbn1cblxub25CZWZvcmVNb3VudCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdvbkJlZm9yZU1vdW50Jyk7XG5cbiAgY29uc3QgY2lyY2xlSWRQYXJhbSA9ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5jaXJjbGVJZDtcbiAgaWYgKGNpcmNsZUlkUGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2lyY2xlIElEIG5vdCBmb3VuZCBpbiByb3V0ZScpO1xuICB9XG5cbiAgY2lyY2xlSWQudmFsdWUgPSBjaXJjbGVJZFBhcmFtIGFzIHN0cmluZztcbiAgY29uc29sZS5sb2coJ2NpcmNsZUlkJywgY2lyY2xlSWQudmFsdWUpO1xuXG4gIGNpcmNsZUFsYnVtQ29udHJvbGxlciA9IHVzZUFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlcih7XG4gICAgbG9hZDogY2lyY2xlQWxidW1Mb2FkRnVuY3Rpb24udmFsdWUsXG4gICAgaW5pdGlhbElucHV0U3RhdGU6IHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBzb3J0RmllbGQ6IEFsYnVtT3JkZXJPcHRpb25zLkRhdGUsXG4gICAgICBzb3J0T3JkZXI6ICdBc2NlbmRpbmcnLFxuICAgIH0sXG4gICAgdXJsU3RhdGVEZWNvZGVyLFxuICAgIHVybFN0YXRlRW5jb2RlcixcbiAgfSk7XG5cbiAgY2lyY2xlSW5mb0NvbnRyb2xsZXIgPSB1c2VDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIoe1xuICAgIGFwaUNvbmZpZ3VyYXRpb246IGFwaUNvbmZpZ1Byb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb25XaXRoQXV0aCgpLFxuICAgIGluaXRpYWxJbnB1dFN0YXRlOiB7XG4gICAgICBjaXJjbGVJZDogY2lyY2xlSWQudmFsdWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLmNpcmNsZUlkLFxuICAgIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKGBDaXJjbGUgSUQgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCk7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNpcmNsZUlkLnZhbHVlID0gbmV3VmFsdWUgYXMgc3RyaW5nO1xuICAgICAgY2lyY2xlSW5mb0NvbnRyb2xsZXI/LmNoYW5nZUNpcmNsZUlkKGNpcmNsZUlkLnZhbHVlKTtcbiAgICAgIGNpcmNsZUFsYnVtQ29udHJvbGxlcj8uY2hhbmdlUGFnZSgxKTtcbiAgICB9XG4gICk7XG5cbiAgY2lyY2xlSWQudmFsdWUgPSBjaXJjbGVJZFBhcmFtIGFzIHN0cmluZztcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiYWxwaGEzVG9BbHBoYTIiLCJnZXROYW1lIiwiZ2V0VW5pY29kZUZsYWdJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTWUsU0FBUyxlQUFlLFNBQVM7QUFDOUMsU0FBTywyQkFBMkIsUUFBUSxFQUFFLElBQUksMkJBQTJCLFFBQVEsRUFBRTtBQUN2RjtBQU9BLFNBQVMsMkJBQTJCLFFBQVE7QUFDMUMsU0FBTyxPQUFPLGNBQWMsU0FBVSxLQUFLLE9BQU8sY0FBYyxXQUFXLENBQUMsQ0FBQztBQUMvRTtBQ2pCTyxNQUFNLFlBQVk7QUFBQSxFQUN2QixPQUFjLDZCQUE2QixNQUFnQixxQkFBbUMsTUFBYztBQUN0RyxRQUFBLEtBQUssV0FBVyxHQUFHO0FBQ3JCLGFBQU8sS0FBSztBQUFBLElBQ2Q7QUFFSSxRQUFBLEtBQUssV0FBVyxHQUFHO0FBQ3JCLGFBQU8sR0FBRyxLQUFLLE1BQU0sc0JBQXNCLEtBQUs7QUFBQSxJQUNsRDtBQUVBLFdBQU8sR0FBRyxLQUFLLE1BQU0sR0FBRyxFQUFFLEVBQUUsS0FBSyxJQUFJLE1BQU0sc0JBQXNCLEtBQUssTUFBTSxFQUFFLEVBQUU7QUFBQSxFQUNsRjtBQUNGO0FDcUNBLFNBQXdCLDRCQUN0QixXQUMwQjtBQUMxQixRQUFNLHNCQUFzQjtBQUN0QixRQUFBLGFBQWEsSUFBSSxVQUFVLGlCQUFpQjtBQUU1QyxRQUFBLDhCQUE4QixDQUFDLGVBQThCLGdCQUFrRDs7QUFDL0csVUFBQSxtQkFBYyxlQUFkLG1CQUEwQixZQUFXLEdBQUc7QUFDbkMsYUFBQTtBQUFBLElB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
