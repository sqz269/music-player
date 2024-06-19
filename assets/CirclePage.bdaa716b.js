import { Q as QPage } from "./QPage.88cfc999.js";
import { bn as useLoadableController, r as ref, w as watch, bw as CircleApi, bx as i18nIsoCountries, F as defineComponent, i as inject, G as openBlock, H as createBlock, I as withCtx, J as createVNode, K as QCardSection, N as QBtn, T as unref, W as createTextVNode, $ as toDisplayString, R as createBaseVNode, U as createElementBlock, Y as renderList, X as Fragment, V as QSeparator, O as QCard, _ as _export_sfc, S as useRouter, bi as Logger, a as computed, ac as onBeforeMount } from "./index.fb76519e.js";
import { u as useAlbumListGridViewController, A as AlbumOrderOptions, a as AlbumListGridView } from "./AlbumListGridViewController.f57e0691.js";
import { L as LoadableElement, Q as QSpinnerGears } from "./LoadableElement.7c5a38ea.js";
import { x as outlinedInfo, Q as QTooltip } from "./QTooltip.99966658.js";
import { l as QChip } from "./QSelect.c93b6de8.js";
import "./QImg.cafdba49.js";
import "./QItem.e97d89d6.js";
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
class UrlUtils {
  static openUrlInNewTab(url) {
    window.open(url, "_blank");
  }
}
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
        releaseDateBegin: null,
        releaseDateEnd: null,
        circles: [props.controller.inputModel.value.circleId],
        originalAlbums: null,
        originalTracks: null
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
          createVNode(QCard, { class: "q-ma-md" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode(QBtn, {
                      class: "all-pointer-events float-right",
                      icon: unref(outlinedInfo),
                      flat: "",
                      round: "",
                      dense: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QTooltip, null, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(" Data provided by " + toDisplayString((_a2 = data == null ? void 0 : data.DataSources) == null ? void 0 : _a2.join(", ")), 1)
                            ];
                          }),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["icon"]),
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("img", {
                        alt: `${(_a = data == null ? void 0 : data.Country) == null ? void 0 : _a.localizedCountryName} flag`,
                        src: (_b = data == null ? void 0 : data.Country) == null ? void 0 : _b.imageFlagUrl,
                        style: { "width": "25px", "height": "16.66px", "border": "1px solid gray" }
                      }, null, 8, _hoisted_2),
                      createTextVNode(" " + toDisplayString(data == null ? void 0 : data.Name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_3, toDisplayString(data == null ? void 0 : data.DescriptionText), 1),
                    createBaseVNode("div", _hoisted_4, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(data == null ? void 0 : data.WebsiteUrl, (website) => {
                        return openBlock(), createBlock(QChip, {
                          key: website.url,
                          clickable: "",
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
var CircleInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "CircleInfoCard.vue"]]);
const _sfc_main = defineComponent({
  __name: "CirclePage",
  setup(__props) {
    const $router = useRouter();
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
    onBeforeMount(() => {
      console.log("onBeforeMount");
      const circleIdParam = $router.currentRoute.value.params.circleId;
      if (circleIdParam === void 0) {
        throw new Error("Circle ID not found in route");
      }
      const pageParam = $router.currentRoute.value.params.page;
      if (pageParam === void 0) {
        throw new Error("Page not found in route");
      }
      circleId.value = circleIdParam;
      console.log("circleId", circleId.value);
      circleAlbumController = useAlbumListGridViewController({
        load: circleAlbumLoadFunction.value,
        initialInputState: {
          page: parseInt(pageParam),
          sortField: AlbumOrderOptions.Date,
          sortOrder: "Ascending"
        }
      });
      circleInfoController = useCircleInfoCardController({
        apiConfiguration: apiConfigProvider.getApiConfigurationWithAuth(),
        initialInputState: {
          circleId: circleId.value
        }
      });
      watch(
        () => {
          var _a;
          return (_a = circleAlbumController.viewModelController.state.value) == null ? void 0 : _a.currentPage;
        },
        (newValue, oldValue) => {
          logger.info(`Page changed from ${oldValue} to ${newValue}`);
          $router.push({
            name: "CircleAlbums",
            params: {
              circleId: circleId.value,
              page: newValue
            }
          });
        }
      );
      watch(
        () => $router.currentRoute.value.params.page,
        (newValue, oldValue) => {
          logger.info(`Page changed from ${oldValue} to ${newValue}`);
          circleAlbumController == null ? void 0 : circleAlbumController.changePage(parseInt(newValue));
        }
      );
      watch(
        () => $router.currentRoute.value.params.circleId,
        (newValue, oldValue) => {
          logger.info(`Circle ID changed from ${oldValue} to ${newValue}`);
          circleId.value = newValue;
          circleInfoController == null ? void 0 : circleInfoController.changeCircleId(circleId.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY2xlUGFnZS5iZGFhNzE2Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvdW50cnktZmxhZy1pY29ucy9tb2R1bGVzL3VuaWNvZGUuanMiLCIuLi8uLi8uLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIudHMiLCIuLi8uLi8uLi9zcmMvdXRpbHMvVXJsVXRpbHMudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQ2lyY2xlUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZXMgVW5pY29kZSBmbGFnIGZyb20gYSB0d28tbGV0dGVyIElTTyBjb3VudHJ5IGNvZGUuXHJcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0MDUwNjcxL2hvdy10by1wdXQtamFwYW4tZmxhZy1jaGFyYWN0ZXItaW4tYS1zdHJpbmdcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb3VudHJ5IOKAlCBBIHR3by1sZXR0ZXIgSVNPIGNvdW50cnkgY29kZSAoY2FzZS1pbnNlbnNpdGl2ZSkuXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb3VudHJ5RmxhZyhjb3VudHJ5KSB7XG4gIHJldHVybiBnZXRSZWdpb25hbEluZGljYXRvclN5bWJvbChjb3VudHJ5WzBdKSArIGdldFJlZ2lvbmFsSW5kaWNhdG9yU3ltYm9sKGNvdW50cnlbMV0pO1xufVxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbGV0dGVyIHRvIGEgUmVnaW9uYWwgSW5kaWNhdG9yIFN5bWJvbC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBsZXR0ZXJcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVnaW9uYWxJbmRpY2F0b3JTeW1ib2wobGV0dGVyKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCgweDFGMUU2IC0gNjUgKyBsZXR0ZXIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaWNvZGUuanMubWFwIiwiZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBjb25zdHJ1Y3RHcmFtbWF0aWNhbExpc3RKb2luKGxpc3Q6IHN0cmluZ1tdLCBsb2dpY2FsQ29uanVuY3Rpb246ICdhbmQnIHwgJ29yJyA9ICdvcicpOiBzdHJpbmcge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGxpc3RbMF07XG4gICAgfVxuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gYCR7bGlzdFswXX0gJHtsb2dpY2FsQ29uanVuY3Rpb259ICR7bGlzdFsxXX1gO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtsaXN0LnNsaWNlKDAsIC0xKS5qb2luKCcsICcpfSwgJHtsb2dpY2FsQ29uanVuY3Rpb259ICR7bGlzdC5zbGljZSgtMSlbMF19YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2lyY2xlQXBpLCBDaXJjbGVSZWFkRHRvLCBDb25maWd1cmF0aW9uIH0gZnJvbSBcImFwcC9iYWNrZW5kLXNlcnZpY2UtYXBpXCI7XG5pbXBvcnQgZ2V0VW5pY29kZUZsYWdJY29uIGZyb20gXCJjb3VudHJ5LWZsYWctaWNvbnMvdW5pY29kZVwiO1xuaW1wb3J0IHsgYWxwaGEzVG9BbHBoYTIsIGdldE5hbWUgfSBmcm9tIFwiaTE4bi1pc28tY291bnRyaWVzXCI7XG5pbXBvcnQgeyBMb2FkYWJsZVN0YXRlLCB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tIFwic3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwic3JjL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5pbXBvcnQgeyByZWYsIFJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsIHtcbiAgY2lyY2xlSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVDb3VudHJ5SW5mbyB7XG4gIGlzbzI6IHN0cmluZztcbiAgaXNvMzogc3RyaW5nO1xuICBsb2NhbGl6ZWRDb3VudHJ5TmFtZTogc3RyaW5nO1xuICB1bmljb2RlRmxhZzogc3RyaW5nO1xuICBpbWFnZUZsYWdVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVXZWJzaXRlIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZUluZm9DYXJkVmlld01vZGVsIHtcbiAgSWQ6IHN0cmluZztcbiAgTmFtZTogc3RyaW5nO1xuICBBbGlhc2VzOiBzdHJpbmdbXTtcbiAgV2Vic2l0ZVVybDogQ2lyY2xlV2Vic2l0ZVtdO1xuICBDb3VudHJ5OiBDaXJjbGVDb3VudHJ5SW5mbyB8IG51bGw7XG4gIEVzdGFibGlzaGVkRGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgRGVzY3JpcHRpb25UZXh0OiBzdHJpbmcgfCBudWxsO1xuICBEYXRhU291cmNlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCB0eXBlIENpcmNsZUluZm9DYXJkQ29udHJvbGxlciA9IHtcbiAgdmlld01vZGVsQ29udHJvbGxlcjogTG9hZGFibGVTdGF0ZTxDaXJjbGVJbmZvQ2FyZFZpZXdNb2RlbD47XG4gIGlucHV0TW9kZWw6IFJlZjxDaXJjbGVJbmZvQ2FyZElucHV0TW9kZWw+O1xuXG4gIGxvYWQ6IChzdGF0ZTogQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VDaXJjbGVJZDogKGNpcmNsZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZUluZm9DYXJkQ29udHJvbGxlclBhcmFtcyB7XG4gIGluaXRpYWxJbnB1dFN0YXRlOiBDaXJjbGVJbmZvQ2FyZElucHV0TW9kZWw7XG4gIGFwaUNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNpcmNsZUluZm9DYXJkQ29udHJvbGxlcihcbiAgcGFyYW1ldGVyOiBDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXJQYXJhbXNcbik6IENpcmNsZUluZm9DYXJkQ29udHJvbGxlciB7XG4gIGNvbnN0IHZpZXdNb2RlbENvbnRyb2xsZXIgPSB1c2VMb2FkYWJsZUNvbnRyb2xsZXI8Q2lyY2xlSW5mb0NhcmRWaWV3TW9kZWw+KCk7XG4gIGNvbnN0IGlucHV0TW9kZWwgPSByZWYocGFyYW1ldGVyLmluaXRpYWxJbnB1dFN0YXRlKTtcblxuICBjb25zdCBfY29uc3RydWN0Q2lyY2xlRGVzY3JpcHRpb24gPSAoY2lyY2xlUmVhZER0bzogQ2lyY2xlUmVhZER0bywgY291bnRyeUluZm86IENpcmNsZUNvdW50cnlJbmZvIHwgbnVsbCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGNpcmNsZVJlYWREdG8uZGF0YVNvdXJjZT8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ05vIGRhdGEgZm9yIHRoaXMgY2lyY2xlJztcbiAgICB9XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBgJHtjaXJjbGVSZWFkRHRvLm5hbWV9YDtcblxuICAgIGlmIChjaXJjbGVSZWFkRHRvLmFsaWFzIS5sZW5ndGggPiAwKSB7XG4gICAgICBkZXNjcmlwdGlvbiArPSBgIChBbHNvIGtub3cgYXM6ICR7U3RyaW5nVXRpbHMuY29uc3RydWN0R3JhbW1hdGljYWxMaXN0Sm9pbihjaXJjbGVSZWFkRHRvLmFsaWFzISl9KWA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50cnlJbmZvKSB7XG4gICAgICBkZXNjcmlwdGlvbiArPSBgIGlzIGEgZG91amluIG11c2ljIGNpcmNsZSBmcm9tICR7Y291bnRyeUluZm8ubG9jYWxpemVkQ291bnRyeU5hbWV9LmA7XG4gICAgfVxuXG4gICAgaWYgKGNpcmNsZVJlYWREdG8uZXN0YWJsaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRhdGVZZWFyT25seSA9IGNpcmNsZVJlYWREdG8uZXN0YWJsaXNoZWQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGNpcmNsZVJlYWREdG8uc3RhdHVzID09PSB1bmRlZmluZWQgPyAnVW5rbm93bicgOiBjaXJjbGVSZWFkRHRvLnN0YXR1cztcbiAgICAgIGRlc2NyaXB0aW9uICs9IGAgVGhlIGNpcmNsZSB3YXMgZXN0YWJsaXNoZWQgaW4gJHtkYXRlWWVhck9ubHl9IGFuZCB0aGUgY3VycmVudCBzdGF0dXMgaXMgJHtzdGF0dXN9LmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgY29uc3QgX2NpcmNsZVJlYWREdG9Ub1ZpZXdNb2RlbCA9IChjaXJjbGVSZWFkRHRvOiBDaXJjbGVSZWFkRHRvKTogQ2lyY2xlSW5mb0NhcmRWaWV3TW9kZWwgPT4ge1xuICAgIGxldCBjb3VudHJ5SW5mbzogQ2lyY2xlQ291bnRyeUluZm8gfCBudWxsID0gbnVsbDtcblxuICAgIGlmIChjaXJjbGVSZWFkRHRvLmNvdW50cnkpIHtcbiAgICAgIGNvbnN0IGFscGhhMyA9IGNpcmNsZVJlYWREdG8uY291bnRyeS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY29uc3QgYWxwaGEyID0gYWxwaGEzVG9BbHBoYTIoYWxwaGEzKSE7XG4gICAgICBjb3VudHJ5SW5mbyA9IHtcbiAgICAgICAgaXNvMjogYWxwaGEyLFxuICAgICAgICBpc28zOiBhbHBoYTMsXG4gICAgICAgIGxvY2FsaXplZENvdW50cnlOYW1lOiBnZXROYW1lKGFscGhhMywgJ2VuJykhLFxuICAgICAgICB1bmljb2RlRmxhZzogZ2V0VW5pY29kZUZsYWdJY29uKGFscGhhMiksXG4gICAgICAgIGltYWdlRmxhZ1VybDogYGh0dHA6Ly9wdXJlY2F0YW1waGV0YW1pbmUuZ2l0aHViLmlvL2NvdW50cnktZmxhZy1pY29ucy8zeDIvJHthbHBoYTJ9LnN2Z2AsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHdlYnNpdGVVcmxzOiBDaXJjbGVXZWJzaXRlW10gPSBbXTtcbiAgICBpZiAoY2lyY2xlUmVhZER0by53ZWJzaXRlKSB7XG4gICAgICBmb3IgKGNvbnN0IHsgdXJsLCBpbnZhbGlkIH0gb2YgY2lyY2xlUmVhZER0by53ZWJzaXRlKSB7XG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHVybCEpLmhvc3RuYW1lO1xuICAgICAgICB3ZWJzaXRlVXJscy5wdXNoKHtcbiAgICAgICAgICB1cmw6IHVybCEsXG4gICAgICAgICAgZGlzcGxheVRleHQ6IGRvbWFpbixcbiAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIElkOiBjaXJjbGVSZWFkRHRvLmlkISxcbiAgICAgIE5hbWU6IGNpcmNsZVJlYWREdG8ubmFtZSEsXG4gICAgICBBbGlhc2VzOiBjaXJjbGVSZWFkRHRvLmFsaWFzISxcbiAgICAgIFdlYnNpdGVVcmw6IHdlYnNpdGVVcmxzLFxuICAgICAgQ291bnRyeTogY291bnRyeUluZm8sXG4gICAgICBFc3RhYmxpc2hlZERhdGU6IG51bGwsXG4gICAgICBEZXNjcmlwdGlvblRleHQ6IF9jb25zdHJ1Y3RDaXJjbGVEZXNjcmlwdGlvbihjaXJjbGVSZWFkRHRvLCBjb3VudHJ5SW5mbyksXG4gICAgICBEYXRhU291cmNlczogY2lyY2xlUmVhZER0by5kYXRhU291cmNlISxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbG9hZCA9IGFzeW5jIChzdGF0ZTogQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsKSA9PiB7XG4gICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNpcmNsZUFwaSA9IG5ldyBDaXJjbGVBcGkocGFyYW1ldGVyLmFwaUNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBjb25zdCBjaXJjbGVSZWFkRHRvID0gYXdhaXQgY2lyY2xlQXBpLmdldENpcmNsZUJ5SWQoe1xuICAgICAgICBpZDogc3RhdGUuY2lyY2xlSWQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgdmlld01vZGVsID0gX2NpcmNsZVJlYWREdG9Ub1ZpZXdNb2RlbChjaXJjbGVSZWFkRHRvKTtcblxuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRFcnJvcihlIGFzIEVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ2lyY2xlSWQgPSAoY2lyY2xlSWQ6IHN0cmluZykgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgY2lyY2xlSWQ6IGNpcmNsZUlkLFxuICAgIH07XG4gIH1cblxuICB3YXRjaChcbiAgICBpbnB1dE1vZGVsLFxuICAgIGFzeW5jIChuZXdJbnB1dE1vZGVsKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byBpbnB1dE1vZGVsIGNoYW5nZScpO1xuICAgICAgYXdhaXQgbG9hZChuZXdJbnB1dE1vZGVsKTtcbiAgICB9LCB7IGRlZXA6IHRydWUgfVxuICApXG5cbiAgbG9hZChpbnB1dE1vZGVsLnZhbHVlKTtcblxuICByZXR1cm4ge1xuICAgIHZpZXdNb2RlbENvbnRyb2xsZXIsXG4gICAgaW5wdXRNb2RlbCxcbiAgICBsb2FkLFxuICAgIGNoYW5nZUNpcmNsZUlkLFxuICB9O1xufVxuIiwiZXhwb3J0IGNsYXNzIFVybFV0aWxzIHtcbiAgc3RhdGljIG9wZW5VcmxJbk5ld1RhYih1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJwcm9wcy5jb250cm9sbGVyLnZpZXdNb2RlbENvbnRyb2xsZXJcIj5cbiAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICA8cS1zcGlubmVyLWdlYXJzIC8+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgZGF0YSB9XCI+XG4gICAgICA8cS1jYXJkIGNsYXNzPVwicS1tYS1tZFwiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBjbGFzcz1cImFsbC1wb2ludGVyLWV2ZW50cyBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkSW5mb1wiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS10b29sdGlwPlxuICAgICAgICAgICAgICBEYXRhIHByb3ZpZGVkIGJ5IHt7IGRhdGE/LkRhdGFTb3VyY2VzPy5qb2luKCcsICcpIH19XG4gICAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIDphbHQ9XCJgJHtkYXRhPy5Db3VudHJ5Py5sb2NhbGl6ZWRDb3VudHJ5TmFtZX0gZmxhZ2BcIlxuICAgICAgICAgICAgICA6c3JjPVwiZGF0YT8uQ291bnRyeT8uaW1hZ2VGbGFnVXJsXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMjVweDsgaGVpZ2h0OiAxNi42NnB4OyBib3JkZXI6IDFweCBzb2xpZCBncmF5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7eyBkYXRhPy5OYW1lIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgZGF0YT8uRGVzY3JpcHRpb25UZXh0IH19PC9kaXY+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLW10LXNtIHJvd1wiPlxuICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICB2LWZvcj1cIndlYnNpdGUgaW4gZGF0YT8uV2Vic2l0ZVVybFwiXG4gICAgICAgICAgICAgIDprZXk9XCJ3ZWJzaXRlLnVybFwiXG4gICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICAgICAgICA6aHJlZj1cIndlYnNpdGUudXJsXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiVXJsVXRpbHMub3BlblVybEluTmV3VGFiKHdlYnNpdGUudXJsKVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cIndlYnNpdGUuZGlzcGxheVRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgUmFkaW9cIlxuICAgICAgICAgICAgQGNsaWNrPVwic3RhcnRSYWRpb0ZvckNpcmNsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3RlbXBsYXRlPlxuICA8L0xvYWRhYmxlRWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIgfSBmcm9tICcuL0NpcmNsZUluZm9DYXJkQ29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7XG4gIG91dGxpbmVkSW5mbyxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tICdzcmMvdXRpbHMvVXJsVXRpbHMnO1xuaW1wb3J0IFJhZGlvU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1JhZGlvU2VydmljZSc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICd2dWUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgY29udHJvbGxlcjogQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyO1xufT4oKTtcblxuLy8gSW5qZWN0IHNlcnZpY2VzXG5jb25zdCByYWRpb1NlcnZpY2UgPSBpbmplY3Q8UmFkaW9TZXJ2aWNlPigncmFkaW9TZXJ2aWNlJyk7XG5cbmNvbnN0IHN0YXJ0UmFkaW9Gb3JDaXJjbGUgPSAoKSA9PiB7XG4gIHJhZGlvU2VydmljZT8uc2V0RmlsdGVycyh7XG4gICAgcmVsZWFzZURhdGVCZWdpbjogbnVsbCxcbiAgICByZWxlYXNlRGF0ZUVuZDogbnVsbCxcbiAgICBjaXJjbGVzOiBbcHJvcHMuY29udHJvbGxlci5pbnB1dE1vZGVsLnZhbHVlLmNpcmNsZUlkXSxcbiAgICBvcmlnaW5hbEFsYnVtczogbnVsbCxcbiAgICBvcmlnaW5hbFRyYWNrczogbnVsbCxcbiAgfSk7XG5cbiAgcmFkaW9TZXJ2aWNlPy5hY3RpdmF0ZSgpO1xufVxuXG5wcm9wcy5jb250cm9sbGVyLmxvYWQocHJvcHMuY29udHJvbGxlci5pbnB1dE1vZGVsLnZhbHVlKVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPENpcmNsZUluZm9DYXJkIDpjb250cm9sbGVyPVwiY2lyY2xlSW5mb0NvbnRyb2xsZXIhXCI+IDwvQ2lyY2xlSW5mb0NhcmQ+XG4gICAgPEFsYnVtTGlzdEdyaWRWaWV3IDpjb250cm9sbGVyPVwiY2lyY2xlQWxidW1Db250cm9sbGVyIVwiPiA8L0FsYnVtTGlzdEdyaWRWaWV3PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBDb25maWd1cmF0aW9uLFxuICBBbGJ1bU9yZGVyT3B0aW9ucyxcbiAgQ2lyY2xlQXBpLFxufSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQWxidW1MaXN0R3JpZFZpZXcgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXcudnVlJztcbmltcG9ydCB1c2VBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIsIHtcbiAgQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLFxufSBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9BbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsJztcbmltcG9ydCBBbGJ1bUxpc3RHcmlkVmlld1ZpZXdNb2RlbCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwnO1xuaW1wb3J0IEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0FwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJ3NyYy91dGlscy9Mb2dnZXInO1xuaW1wb3J0IHsgY29tcHV0ZWQsIGluamVjdCwgb25CZWZvcmVNb3VudCwgUmVmLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHVzZUNpcmNsZUluZm9DYXJkQ29udHJvbGxlciwgeyBDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXInO1xuaW1wb3J0IENpcmNsZUluZm9DYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL0NpcmNsZUluZm9DYXJkL0NpcmNsZUluZm9DYXJkLnZ1ZSc7XG5cbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IGFwaUNvbmZpZ1Byb3ZpZGVyID1cbiAgaW5qZWN0PEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcjxDb25maWd1cmF0aW9uPj4oJ2FwaUNvbmZpZ1Byb3ZpZGVyJyk7XG5pZiAoIWFwaUNvbmZpZ1Byb3ZpZGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcignQVBJIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIgbm90IGZvdW5kJyk7XG59XG5cbmNvbnN0IGxvZ2dlciA9IExvZ2dlci5nZXRMb2dnZXIoJ0NpcmNsZSBQYWdlJyk7XG5jb25zdCBjaXJjbGVJZDogUmVmPHN0cmluZyB8IG51bGw+ID0gcmVmKG51bGwpO1xuXG5sZXQgY2lyY2xlQWxidW1Db250cm9sbGVyOiBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIgfCBudWxsID0gbnVsbDtcbmxldCBjaXJjbGVJbmZvQ29udHJvbGxlcjogQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyIHwgbnVsbCA9IG51bGw7XG5cbmNvbnN0IGNpcmNsZUFsYnVtTG9hZEZ1bmN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYXN5bmMgKHN0YXRlOiBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWwpID0+IHtcbiAgICBsb2dnZXIuaW5mbyhgTG9hZGluZyBwYWdlICR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApO1xuICAgIGNvbnN0IGNpcmNsZUFwaSA9IG5ldyBDaXJjbGVBcGkoXG4gICAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICAgICk7XG5cbiAgICBjb25zdCBhbGJ1bXMgPSBhd2FpdCBjaXJjbGVBcGkuZ2V0Q2lyY2xlQWxidW1zQnlJZCh7XG4gICAgICBpZDogY2lyY2xlSWQudmFsdWUhLFxuICAgICAgc3RhcnQ6IChzdGF0ZS5wYWdlIC0gMSkgKiA1MCxcbiAgICAgIGxpbWl0OiA1MCxcbiAgICAgIHNvcnRPcmRlcjogc3RhdGUuc29ydE9yZGVyLFxuICAgICAgc29ydDogc3RhdGUuc29ydEZpZWxkLFxuICAgIH0pO1xuXG4gICAgaWYgKGFsYnVtcyA9PT0gdW5kZWZpbmVkIHx8IGFsYnVtcy5hbGJ1bXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhbGJ1bXMgZm91bmQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFBhZ2U6IHN0YXRlLnBhZ2UsXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoKGFsYnVtcz8udG90YWwgfHwgMSkgLyA1MCksXG4gICAgICBhbGJ1bXM6IGFsYnVtcz8uYWxidW1zLFxuXG4gICAgICBzb3J0RmllbGQ6IHN0YXRlLnNvcnRGaWVsZCxcbiAgICAgIHNvcnRPcmRlcjogc3RhdGUuc29ydE9yZGVyLFxuICAgIH0gYXMgQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWw7XG4gIH07XG59KTtcblxub25CZWZvcmVNb3VudCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdvbkJlZm9yZU1vdW50Jyk7XG5cbiAgY29uc3QgY2lyY2xlSWRQYXJhbSA9ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5jaXJjbGVJZDtcbiAgaWYgKGNpcmNsZUlkUGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2lyY2xlIElEIG5vdCBmb3VuZCBpbiByb3V0ZScpO1xuICB9XG5cbiAgY29uc3QgcGFnZVBhcmFtID0gJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBhZ2U7XG4gIGlmIChwYWdlUGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFnZSBub3QgZm91bmQgaW4gcm91dGUnKTtcbiAgfVxuXG4gIGNpcmNsZUlkLnZhbHVlID0gY2lyY2xlSWRQYXJhbSBhcyBzdHJpbmc7XG4gIGNvbnNvbGUubG9nKCdjaXJjbGVJZCcsIGNpcmNsZUlkLnZhbHVlKTtcblxuICBjaXJjbGVBbGJ1bUNvbnRyb2xsZXIgPSB1c2VBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIoe1xuICAgIGxvYWQ6IGNpcmNsZUFsYnVtTG9hZEZ1bmN0aW9uLnZhbHVlLFxuICAgIGluaXRpYWxJbnB1dFN0YXRlOiB7XG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlUGFyYW0gYXMgc3RyaW5nKSxcbiAgICAgIHNvcnRGaWVsZDogQWxidW1PcmRlck9wdGlvbnMuRGF0ZSxcbiAgICAgIHNvcnRPcmRlcjogJ0FzY2VuZGluZycsXG4gICAgfSxcbiAgfSk7XG5cbiAgY2lyY2xlSW5mb0NvbnRyb2xsZXIgPSB1c2VDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIoe1xuICAgIGFwaUNvbmZpZ3VyYXRpb246IGFwaUNvbmZpZ1Byb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb25XaXRoQXV0aCgpLFxuICAgIGluaXRpYWxJbnB1dFN0YXRlOiB7XG4gICAgICBjaXJjbGVJZDogY2lyY2xlSWQudmFsdWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gY2lyY2xlQWxidW1Db250cm9sbGVyIS52aWV3TW9kZWxDb250cm9sbGVyLnN0YXRlLnZhbHVlPy5jdXJyZW50UGFnZSxcbiAgICAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICBsb2dnZXIuaW5mbyhgUGFnZSBjaGFuZ2VkIGZyb20gJHtvbGRWYWx1ZX0gdG8gJHtuZXdWYWx1ZX1gKTtcbiAgICAgICRyb3V0ZXIucHVzaCh7XG4gICAgICAgIG5hbWU6ICdDaXJjbGVBbGJ1bXMnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjaXJjbGVJZDogY2lyY2xlSWQudmFsdWUsXG4gICAgICAgICAgcGFnZTogbmV3VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICk7XG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBhZ2UsXG4gICAgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgbG9nZ2VyLmluZm8oYFBhZ2UgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCk7XG4gICAgICBjaXJjbGVBbGJ1bUNvbnRyb2xsZXI/LmNoYW5nZVBhZ2UocGFyc2VJbnQobmV3VmFsdWUgYXMgc3RyaW5nKSk7XG4gICAgfVxuICApO1xuXG4gIHdhdGNoKFxuICAgICgpID0+ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5jaXJjbGVJZCxcbiAgICAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICBsb2dnZXIuaW5mbyhgQ2lyY2xlIElEIGNoYW5nZWQgZnJvbSAke29sZFZhbHVlfSB0byAke25ld1ZhbHVlfWApO1xuICAgICAgY2lyY2xlSWQudmFsdWUgPSBuZXdWYWx1ZSBhcyBzdHJpbmc7XG4gICAgICBjaXJjbGVJbmZvQ29udHJvbGxlcj8uY2hhbmdlQ2lyY2xlSWQoY2lyY2xlSWQudmFsdWUpO1xuICAgIH1cbiAgKTtcblxuICBjaXJjbGVJZC52YWx1ZSA9IGNpcmNsZUlkUGFyYW0gYXMgc3RyaW5nO1xufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJhbHBoYTNUb0FscGhhMiIsImdldE5hbWUiLCJnZXRVbmljb2RlRmxhZ0ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTWUsU0FBUyxlQUFlLFNBQVM7QUFDOUMsU0FBTywyQkFBMkIsUUFBUSxFQUFFLElBQUksMkJBQTJCLFFBQVEsRUFBRTtBQUN2RjtBQU9BLFNBQVMsMkJBQTJCLFFBQVE7QUFDMUMsU0FBTyxPQUFPLGNBQWMsU0FBVSxLQUFLLE9BQU8sY0FBYyxXQUFXLENBQUMsQ0FBQztBQUMvRTtBQ2pCTyxNQUFNLFlBQVk7QUFBQSxFQUN2QixPQUFjLDZCQUE2QixNQUFnQixxQkFBbUMsTUFBYztBQUN0RyxRQUFBLEtBQUssV0FBVyxHQUFHO0FBQ3JCLGFBQU8sS0FBSztBQUFBLElBQ2Q7QUFFSSxRQUFBLEtBQUssV0FBVyxHQUFHO0FBQ3JCLGFBQU8sR0FBRyxLQUFLLE1BQU0sc0JBQXNCLEtBQUs7QUFBQSxJQUNsRDtBQUVBLFdBQU8sR0FBRyxLQUFLLE1BQU0sR0FBRyxFQUFFLEVBQUUsS0FBSyxJQUFJLE1BQU0sc0JBQXNCLEtBQUssTUFBTSxFQUFFLEVBQUU7QUFBQSxFQUNsRjtBQUNGO0FDcUNBLFNBQXdCLDRCQUN0QixXQUMwQjtBQUMxQixRQUFNLHNCQUFzQjtBQUN0QixRQUFBLGFBQWEsSUFBSSxVQUFVLGlCQUFpQjtBQUU1QyxRQUFBLDhCQUE4QixDQUFDLGVBQThCLGdCQUFrRDs7QUFDL0csVUFBQSxtQkFBYyxlQUFkLG1CQUEwQixZQUFXLEdBQUc7QUFDbkMsYUFBQTtBQUFBLElBQ1Q7QUFFSSxRQUFBLGNBQWMsR0FBRyxjQUFjO0FBRS9CLFFBQUEsY0FBYyxNQUFPLFNBQVMsR0FBRztBQUNuQyxxQkFBZSxtQkFBbUIsWUFBWSw2QkFBNkIsY0FBYyxLQUFNO0FBQUEsSUFDakc7QUFFQSxR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
