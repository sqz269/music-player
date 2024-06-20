import { Q as QPage } from "./QPage.9f9ea5ae.js";
import { bn as useLoadableController, r as ref, w as watch, bw as CircleApi, bx as i18nIsoCountries, F as defineComponent, i as inject, G as openBlock, H as createBlock, I as withCtx, J as createVNode, K as QCardSection, N as QBtn, T as unref, W as createTextVNode, $ as toDisplayString, R as createBaseVNode, U as createElementBlock, a3 as createCommentVNode, Y as renderList, X as Fragment, V as QSeparator, O as QCard, _ as _export_sfc, S as useRouter, bi as Logger, a as computed, ac as onBeforeMount } from "./index.fa95aeae.js";
import { u as useAlbumListGridViewController, A as AlbumOrderOptions, a as AlbumListGridView } from "./AlbumListGridViewController.79325e91.js";
import { L as LoadableElement, Q as QSpinnerGears } from "./LoadableElement.347d15d8.js";
import { x as outlinedInfo, Q as QTooltip } from "./QTooltip.bab9534e.js";
import { l as QChip } from "./QSelect.3370147e.js";
import "./QImg.2554989d.js";
import "./QItem.fd05d79d.js";
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
                  var _a, _b, _c;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY2xlUGFnZS5mZWMxYmI3NC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvdW50cnktZmxhZy1pY29ucy9tb2R1bGVzL3VuaWNvZGUuanMiLCIuLi8uLi8uLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIudHMiLCIuLi8uLi8uLi9zcmMvdXRpbHMvVXJsVXRpbHMudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQ2lyY2xlUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZXMgVW5pY29kZSBmbGFnIGZyb20gYSB0d28tbGV0dGVyIElTTyBjb3VudHJ5IGNvZGUuXHJcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0MDUwNjcxL2hvdy10by1wdXQtamFwYW4tZmxhZy1jaGFyYWN0ZXItaW4tYS1zdHJpbmdcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb3VudHJ5IOKAlCBBIHR3by1sZXR0ZXIgSVNPIGNvdW50cnkgY29kZSAoY2FzZS1pbnNlbnNpdGl2ZSkuXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb3VudHJ5RmxhZyhjb3VudHJ5KSB7XG4gIHJldHVybiBnZXRSZWdpb25hbEluZGljYXRvclN5bWJvbChjb3VudHJ5WzBdKSArIGdldFJlZ2lvbmFsSW5kaWNhdG9yU3ltYm9sKGNvdW50cnlbMV0pO1xufVxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbGV0dGVyIHRvIGEgUmVnaW9uYWwgSW5kaWNhdG9yIFN5bWJvbC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBsZXR0ZXJcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVnaW9uYWxJbmRpY2F0b3JTeW1ib2wobGV0dGVyKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCgweDFGMUU2IC0gNjUgKyBsZXR0ZXIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaWNvZGUuanMubWFwIiwiZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBjb25zdHJ1Y3RHcmFtbWF0aWNhbExpc3RKb2luKGxpc3Q6IHN0cmluZ1tdLCBsb2dpY2FsQ29uanVuY3Rpb246ICdhbmQnIHwgJ29yJyA9ICdvcicpOiBzdHJpbmcge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGxpc3RbMF07XG4gICAgfVxuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gYCR7bGlzdFswXX0gJHtsb2dpY2FsQ29uanVuY3Rpb259ICR7bGlzdFsxXX1gO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtsaXN0LnNsaWNlKDAsIC0xKS5qb2luKCcsICcpfSwgJHtsb2dpY2FsQ29uanVuY3Rpb259ICR7bGlzdC5zbGljZSgtMSlbMF19YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2lyY2xlQXBpLCBDaXJjbGVSZWFkRHRvLCBDb25maWd1cmF0aW9uIH0gZnJvbSBcImFwcC9iYWNrZW5kLXNlcnZpY2UtYXBpXCI7XG5pbXBvcnQgZ2V0VW5pY29kZUZsYWdJY29uIGZyb20gXCJjb3VudHJ5LWZsYWctaWNvbnMvdW5pY29kZVwiO1xuaW1wb3J0IHsgYWxwaGEzVG9BbHBoYTIsIGdldE5hbWUgfSBmcm9tIFwiaTE4bi1pc28tY291bnRyaWVzXCI7XG5pbXBvcnQgeyBMb2FkYWJsZVN0YXRlLCB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tIFwic3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwic3JjL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5pbXBvcnQgeyByZWYsIFJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsIHtcbiAgY2lyY2xlSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVDb3VudHJ5SW5mbyB7XG4gIGlzbzI6IHN0cmluZztcbiAgaXNvMzogc3RyaW5nO1xuICBsb2NhbGl6ZWRDb3VudHJ5TmFtZTogc3RyaW5nO1xuICB1bmljb2RlRmxhZzogc3RyaW5nO1xuICBpbWFnZUZsYWdVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVXZWJzaXRlIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZUluZm9DYXJkVmlld01vZGVsIHtcbiAgSWQ6IHN0cmluZztcbiAgTmFtZTogc3RyaW5nO1xuICBBbGlhc2VzOiBzdHJpbmdbXTtcbiAgV2Vic2l0ZVVybDogQ2lyY2xlV2Vic2l0ZVtdO1xuICBDb3VudHJ5OiBDaXJjbGVDb3VudHJ5SW5mbyB8IG51bGw7XG4gIEVzdGFibGlzaGVkRGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgRGVzY3JpcHRpb25UZXh0OiBzdHJpbmcgfCBudWxsO1xuICBEYXRhU291cmNlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCB0eXBlIENpcmNsZUluZm9DYXJkQ29udHJvbGxlciA9IHtcbiAgdmlld01vZGVsQ29udHJvbGxlcjogTG9hZGFibGVTdGF0ZTxDaXJjbGVJbmZvQ2FyZFZpZXdNb2RlbD47XG4gIGlucHV0TW9kZWw6IFJlZjxDaXJjbGVJbmZvQ2FyZElucHV0TW9kZWw+O1xuXG4gIGxvYWQ6IChzdGF0ZTogQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VDaXJjbGVJZDogKGNpcmNsZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZUluZm9DYXJkQ29udHJvbGxlclBhcmFtcyB7XG4gIGluaXRpYWxJbnB1dFN0YXRlOiBDaXJjbGVJbmZvQ2FyZElucHV0TW9kZWw7XG4gIGFwaUNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNpcmNsZUluZm9DYXJkQ29udHJvbGxlcihcbiAgcGFyYW1ldGVyOiBDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXJQYXJhbXNcbik6IENpcmNsZUluZm9DYXJkQ29udHJvbGxlciB7XG4gIGNvbnN0IHZpZXdNb2RlbENvbnRyb2xsZXIgPSB1c2VMb2FkYWJsZUNvbnRyb2xsZXI8Q2lyY2xlSW5mb0NhcmRWaWV3TW9kZWw+KCk7XG4gIGNvbnN0IGlucHV0TW9kZWwgPSByZWYocGFyYW1ldGVyLmluaXRpYWxJbnB1dFN0YXRlKTtcblxuICBjb25zdCBfY29uc3RydWN0Q2lyY2xlRGVzY3JpcHRpb24gPSAoY2lyY2xlUmVhZER0bzogQ2lyY2xlUmVhZER0bywgY291bnRyeUluZm86IENpcmNsZUNvdW50cnlJbmZvIHwgbnVsbCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGNpcmNsZVJlYWREdG8uZGF0YVNvdXJjZT8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ05vIGRhdGEgZm9yIHRoaXMgY2lyY2xlJztcbiAgICB9XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBgJHtjaXJjbGVSZWFkRHRvLm5hbWV9YDtcblxuICAgIGlmIChjaXJjbGVSZWFkRHRvLmFsaWFzIS5sZW5ndGggPiAwKSB7XG4gICAgICBkZXNjcmlwdGlvbiArPSBgIChBbHNvIGtub3cgYXM6ICR7U3RyaW5nVXRpbHMuY29uc3RydWN0R3JhbW1hdGljYWxMaXN0Sm9pbihjaXJjbGVSZWFkRHRvLmFsaWFzISl9KWA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50cnlJbmZvKSB7XG4gICAgICBkZXNjcmlwdGlvbiArPSBgIGlzIGEgZG91amluIG11c2ljIGNpcmNsZSBmcm9tICR7Y291bnRyeUluZm8ubG9jYWxpemVkQ291bnRyeU5hbWV9LmA7XG4gICAgfVxuXG4gICAgaWYgKGNpcmNsZVJlYWREdG8uZXN0YWJsaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRhdGVZZWFyT25seSA9IGNpcmNsZVJlYWREdG8uZXN0YWJsaXNoZWQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGNpcmNsZVJlYWREdG8uc3RhdHVzID09PSB1bmRlZmluZWQgPyAnVW5rbm93bicgOiBjaXJjbGVSZWFkRHRvLnN0YXR1cztcbiAgICAgIGRlc2NyaXB0aW9uICs9IGAgVGhlIGNpcmNsZSB3YXMgZXN0YWJsaXNoZWQgaW4gJHtkYXRlWWVhck9ubHl9IGFuZCB0aGUgY3VycmVudCBzdGF0dXMgaXMgJHtzdGF0dXN9LmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgY29uc3QgX2NpcmNsZVJlYWREdG9Ub1ZpZXdNb2RlbCA9IChjaXJjbGVSZWFkRHRvOiBDaXJjbGVSZWFkRHRvKTogQ2lyY2xlSW5mb0NhcmRWaWV3TW9kZWwgPT4ge1xuICAgIGxldCBjb3VudHJ5SW5mbzogQ2lyY2xlQ291bnRyeUluZm8gfCBudWxsID0gbnVsbDtcblxuICAgIGlmIChjaXJjbGVSZWFkRHRvLmNvdW50cnkpIHtcbiAgICAgIGNvbnN0IGFscGhhMyA9IGNpcmNsZVJlYWREdG8uY291bnRyeS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY29uc3QgYWxwaGEyID0gYWxwaGEzVG9BbHBoYTIoYWxwaGEzKSE7XG4gICAgICBjb3VudHJ5SW5mbyA9IHtcbiAgICAgICAgaXNvMjogYWxwaGEyLFxuICAgICAgICBpc28zOiBhbHBoYTMsXG4gICAgICAgIGxvY2FsaXplZENvdW50cnlOYW1lOiBnZXROYW1lKGFscGhhMywgJ2VuJykhLFxuICAgICAgICB1bmljb2RlRmxhZzogZ2V0VW5pY29kZUZsYWdJY29uKGFscGhhMiksXG4gICAgICAgIGltYWdlRmxhZ1VybDogYGh0dHA6Ly9wdXJlY2F0YW1waGV0YW1pbmUuZ2l0aHViLmlvL2NvdW50cnktZmxhZy1pY29ucy8zeDIvJHthbHBoYTJ9LnN2Z2AsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHdlYnNpdGVVcmxzOiBDaXJjbGVXZWJzaXRlW10gPSBbXTtcbiAgICBpZiAoY2lyY2xlUmVhZER0by53ZWJzaXRlKSB7XG4gICAgICBmb3IgKGNvbnN0IHsgdXJsLCBpbnZhbGlkIH0gb2YgY2lyY2xlUmVhZER0by53ZWJzaXRlKSB7XG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHVybCEpLmhvc3RuYW1lO1xuICAgICAgICB3ZWJzaXRlVXJscy5wdXNoKHtcbiAgICAgICAgICB1cmw6IHVybCEsXG4gICAgICAgICAgZGlzcGxheVRleHQ6IGRvbWFpbixcbiAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIElkOiBjaXJjbGVSZWFkRHRvLmlkISxcbiAgICAgIE5hbWU6IGNpcmNsZVJlYWREdG8ubmFtZSEsXG4gICAgICBBbGlhc2VzOiBjaXJjbGVSZWFkRHRvLmFsaWFzISxcbiAgICAgIFdlYnNpdGVVcmw6IHdlYnNpdGVVcmxzLFxuICAgICAgQ291bnRyeTogY291bnRyeUluZm8sXG4gICAgICBFc3RhYmxpc2hlZERhdGU6IG51bGwsXG4gICAgICBEZXNjcmlwdGlvblRleHQ6IF9jb25zdHJ1Y3RDaXJjbGVEZXNjcmlwdGlvbihjaXJjbGVSZWFkRHRvLCBjb3VudHJ5SW5mbyksXG4gICAgICBEYXRhU291cmNlczogY2lyY2xlUmVhZER0by5kYXRhU291cmNlISxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbG9hZCA9IGFzeW5jIChzdGF0ZTogQ2lyY2xlSW5mb0NhcmRJbnB1dE1vZGVsKSA9PiB7XG4gICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNpcmNsZUFwaSA9IG5ldyBDaXJjbGVBcGkocGFyYW1ldGVyLmFwaUNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBjb25zdCBjaXJjbGVSZWFkRHRvID0gYXdhaXQgY2lyY2xlQXBpLmdldENpcmNsZUJ5SWQoe1xuICAgICAgICBpZDogc3RhdGUuY2lyY2xlSWQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgdmlld01vZGVsID0gX2NpcmNsZVJlYWREdG9Ub1ZpZXdNb2RlbChjaXJjbGVSZWFkRHRvKTtcblxuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRFcnJvcihlIGFzIEVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ2lyY2xlSWQgPSAoY2lyY2xlSWQ6IHN0cmluZykgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgY2lyY2xlSWQ6IGNpcmNsZUlkLFxuICAgIH07XG4gIH1cblxuICB3YXRjaChcbiAgICBpbnB1dE1vZGVsLFxuICAgIGFzeW5jIChuZXdJbnB1dE1vZGVsKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byBpbnB1dE1vZGVsIGNoYW5nZScpO1xuICAgICAgYXdhaXQgbG9hZChuZXdJbnB1dE1vZGVsKTtcbiAgICB9LCB7IGRlZXA6IHRydWUgfVxuICApXG5cbiAgbG9hZChpbnB1dE1vZGVsLnZhbHVlKTtcblxuICByZXR1cm4ge1xuICAgIHZpZXdNb2RlbENvbnRyb2xsZXIsXG4gICAgaW5wdXRNb2RlbCxcbiAgICBsb2FkLFxuICAgIGNoYW5nZUNpcmNsZUlkLFxuICB9O1xufVxuIiwiZXhwb3J0IGNsYXNzIFVybFV0aWxzIHtcbiAgc3RhdGljIG9wZW5VcmxJbk5ld1RhYih1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJwcm9wcy5jb250cm9sbGVyLnZpZXdNb2RlbENvbnRyb2xsZXJcIj5cbiAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICA8cS1zcGlubmVyLWdlYXJzIC8+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgZGF0YSB9XCI+XG4gICAgICA8cS1jYXJkIGNsYXNzPVwicS1tYS1tZFwiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBjbGFzcz1cImFsbC1wb2ludGVyLWV2ZW50cyBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkSW5mb1wiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS10b29sdGlwPlxuICAgICAgICAgICAgICBEYXRhIHByb3ZpZGVkIGJ5IHt7IGRhdGE/LkRhdGFTb3VyY2VzPy5qb2luKCcsICcpIH19XG4gICAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHYtaWY9XCJkYXRhPy5Db3VudHJ5Py5pbWFnZUZsYWdVcmxcIlxuICAgICAgICAgICAgICA6YWx0PVwiYCR7ZGF0YT8uQ291bnRyeT8ubG9jYWxpemVkQ291bnRyeU5hbWV9IGZsYWdgXCJcbiAgICAgICAgICAgICAgOnNyYz1cImRhdGE/LkNvdW50cnk/LmltYWdlRmxhZ1VybFwiXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDI1cHg7IGhlaWdodDogMTYuNjZweDsgYm9yZGVyOiAxcHggc29saWQgZ3JheVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3sgZGF0YT8uTmFtZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IGRhdGE/LkRlc2NyaXB0aW9uVGV4dCB9fTwvZGl2PlxuXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1tdC1zbSByb3dcIj5cbiAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgdi1mb3I9XCJ3ZWJzaXRlIGluIGRhdGE/LldlYnNpdGVVcmxcIlxuICAgICAgICAgICAgICA6a2V5PVwid2Vic2l0ZS51cmxcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW1yLXNtXCJcbiAgICAgICAgICAgICAgOmhyZWY9XCJ3ZWJzaXRlLnVybFwiXG4gICAgICAgICAgICAgIEBjbGljaz1cIlVybFV0aWxzLm9wZW5VcmxJbk5ld1RhYih3ZWJzaXRlLnVybClcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJ3ZWJzaXRlLmRpc3BsYXlUZXh0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IFJhZGlvXCJcbiAgICAgICAgICAgIEBjbGljaz1cInN0YXJ0UmFkaW9Gb3JDaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9Mb2FkYWJsZUVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyIH0gZnJvbSAnLi9DaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXInO1xuaW1wb3J0IExvYWRhYmxlRWxlbWVudCBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVFbGVtZW50LnZ1ZSc7XG5pbXBvcnQge1xuICBvdXRsaW5lZEluZm8sXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSAnc3JjL3V0aWxzL1VybFV0aWxzJztcbmltcG9ydCBSYWRpb1NlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9SYWRpb1NlcnZpY2UnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGNvbnRyb2xsZXI6IENpcmNsZUluZm9DYXJkQ29udHJvbGxlcjtcbn0+KCk7XG5cbi8vIEluamVjdCBzZXJ2aWNlc1xuY29uc3QgcmFkaW9TZXJ2aWNlID0gaW5qZWN0PFJhZGlvU2VydmljZT4oJ3JhZGlvU2VydmljZScpO1xuXG5jb25zdCBzdGFydFJhZGlvRm9yQ2lyY2xlID0gKCkgPT4ge1xuICByYWRpb1NlcnZpY2U/LnNldEZpbHRlcnMoe1xuICAgIHJlbGVhc2VEYXRlQmVnaW46IG51bGwsXG4gICAgcmVsZWFzZURhdGVFbmQ6IG51bGwsXG4gICAgY2lyY2xlczogW3Byb3BzLmNvbnRyb2xsZXIuaW5wdXRNb2RlbC52YWx1ZS5jaXJjbGVJZF0sXG4gICAgb3JpZ2luYWxBbGJ1bXM6IG51bGwsXG4gICAgb3JpZ2luYWxUcmFja3M6IG51bGwsXG4gIH0pO1xuXG4gIHJhZGlvU2VydmljZT8uYWN0aXZhdGUoKTtcbn1cblxucHJvcHMuY29udHJvbGxlci5sb2FkKHByb3BzLmNvbnRyb2xsZXIuaW5wdXRNb2RlbC52YWx1ZSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlPlxuICAgIDxDaXJjbGVJbmZvQ2FyZCA6Y29udHJvbGxlcj1cImNpcmNsZUluZm9Db250cm9sbGVyIVwiPiA8L0NpcmNsZUluZm9DYXJkPlxuICAgIDxBbGJ1bUxpc3RHcmlkVmlldyA6Y29udHJvbGxlcj1cImNpcmNsZUFsYnVtQ29udHJvbGxlciFcIj4gPC9BbGJ1bUxpc3RHcmlkVmlldz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgQ29uZmlndXJhdGlvbixcbiAgQWxidW1PcmRlck9wdGlvbnMsXG4gIENpcmNsZUFwaSxcbn0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3IGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtTGlzdEdyaWRWaWV3L0FsYnVtTGlzdEdyaWRWaWV3LnZ1ZSc7XG5pbXBvcnQgdXNlQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLCB7XG4gIEFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlcixcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyJztcbmltcG9ydCBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWwgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvbW9kZWxzL0FsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCc7XG5pbXBvcnQgQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvbW9kZWxzL0FsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsJztcbmltcG9ydCBBcGlDb25maWd1cmF0aW9uUHJvdmlkZXIgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9BcGlDb25maWd1cmF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IExvZ2dlciBmcm9tICdzcmMvdXRpbHMvTG9nZ2VyJztcbmltcG9ydCB7IGNvbXB1dGVkLCBpbmplY3QsIG9uQmVmb3JlTW91bnQsIFJlZiwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB1c2VDaXJjbGVJbmZvQ2FyZENvbnRyb2xsZXIsIHsgQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2lyY2xlSW5mb0NhcmQvQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyJztcbmltcG9ydCBDaXJjbGVJbmZvQ2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9DaXJjbGVJbmZvQ2FyZC9DaXJjbGVJbmZvQ2FyZC52dWUnO1xuXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBhcGlDb25maWdQcm92aWRlciA9XG4gIGluamVjdDxBcGlDb25maWd1cmF0aW9uUHJvdmlkZXI8Q29uZmlndXJhdGlvbj4+KCdhcGlDb25maWdQcm92aWRlcicpO1xuaWYgKCFhcGlDb25maWdQcm92aWRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBjb25maWd1cmF0aW9uIHByb3ZpZGVyIG5vdCBmb3VuZCcpO1xufVxuXG5jb25zdCBsb2dnZXIgPSBMb2dnZXIuZ2V0TG9nZ2VyKCdDaXJjbGUgUGFnZScpO1xuY29uc3QgY2lyY2xlSWQ6IFJlZjxzdHJpbmcgfCBudWxsPiA9IHJlZihudWxsKTtcblxubGV0IGNpcmNsZUFsYnVtQ29udHJvbGxlcjogQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyIHwgbnVsbCA9IG51bGw7XG5sZXQgY2lyY2xlSW5mb0NvbnRyb2xsZXI6IENpcmNsZUluZm9DYXJkQ29udHJvbGxlciB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBjaXJjbGVBbGJ1bUxvYWRGdW5jdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYExvYWRpbmcgcGFnZSAke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKTtcbiAgICBjb25zdCBjaXJjbGVBcGkgPSBuZXcgQ2lyY2xlQXBpKFxuICAgICAgYXBpQ29uZmlnUHJvdmlkZXIuZ2V0QXBpQ29uZmlndXJhdGlvbldpdGhBdXRoKClcbiAgICApO1xuXG4gICAgY29uc3QgYWxidW1zID0gYXdhaXQgY2lyY2xlQXBpLmdldENpcmNsZUFsYnVtc0J5SWQoe1xuICAgICAgaWQ6IGNpcmNsZUlkLnZhbHVlISxcbiAgICAgIHN0YXJ0OiAoc3RhdGUucGFnZSAtIDEpICogNTAsXG4gICAgICBsaW1pdDogNTAsXG4gICAgICBzb3J0T3JkZXI6IHN0YXRlLnNvcnRPcmRlcixcbiAgICAgIHNvcnQ6IHN0YXRlLnNvcnRGaWVsZCxcbiAgICB9KTtcblxuICAgIGlmIChhbGJ1bXMgPT09IHVuZGVmaW5lZCB8fCBhbGJ1bXMuYWxidW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWxidW1zIGZvdW5kJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRQYWdlOiBzdGF0ZS5wYWdlLFxuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKChhbGJ1bXM/LnRvdGFsIHx8IDEpIC8gNTApLFxuICAgICAgYWxidW1zOiBhbGJ1bXM/LmFsYnVtcyxcblxuICAgICAgc29ydEZpZWxkOiBzdGF0ZS5zb3J0RmllbGQsXG4gICAgICBzb3J0T3JkZXI6IHN0YXRlLnNvcnRPcmRlcixcbiAgICB9IGFzIEFsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsO1xuICB9O1xufSk7XG5cbm9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnb25CZWZvcmVNb3VudCcpO1xuXG4gIGNvbnN0IGNpcmNsZUlkUGFyYW0gPSAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuY2lyY2xlSWQ7XG4gIGlmIChjaXJjbGVJZFBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpcmNsZSBJRCBub3QgZm91bmQgaW4gcm91dGUnKTtcbiAgfVxuXG4gIGNvbnN0IHBhZ2VQYXJhbSA9ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlO1xuICBpZiAocGFnZVBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhZ2Ugbm90IGZvdW5kIGluIHJvdXRlJyk7XG4gIH1cblxuICBjaXJjbGVJZC52YWx1ZSA9IGNpcmNsZUlkUGFyYW0gYXMgc3RyaW5nO1xuICBjb25zb2xlLmxvZygnY2lyY2xlSWQnLCBjaXJjbGVJZC52YWx1ZSk7XG5cbiAgY2lyY2xlQWxidW1Db250cm9sbGVyID0gdXNlQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyKHtcbiAgICBsb2FkOiBjaXJjbGVBbGJ1bUxvYWRGdW5jdGlvbi52YWx1ZSxcbiAgICBpbml0aWFsSW5wdXRTdGF0ZToge1xuICAgICAgcGFnZTogcGFyc2VJbnQocGFnZVBhcmFtIGFzIHN0cmluZyksXG4gICAgICBzb3J0RmllbGQ6IEFsYnVtT3JkZXJPcHRpb25zLkRhdGUsXG4gICAgICBzb3J0T3JkZXI6ICdBc2NlbmRpbmcnLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNpcmNsZUluZm9Db250cm9sbGVyID0gdXNlQ2lyY2xlSW5mb0NhcmRDb250cm9sbGVyKHtcbiAgICBhcGlDb25maWd1cmF0aW9uOiBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKSxcbiAgICBpbml0aWFsSW5wdXRTdGF0ZToge1xuICAgICAgY2lyY2xlSWQ6IGNpcmNsZUlkLnZhbHVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIHdhdGNoKFxuICAgICgpID0+IGNpcmNsZUFsYnVtQ29udHJvbGxlciEudmlld01vZGVsQ29udHJvbGxlci5zdGF0ZS52YWx1ZT8uY3VycmVudFBhZ2UsXG4gICAgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgbG9nZ2VyLmluZm8oYFBhZ2UgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCk7XG4gICAgICAkcm91dGVyLnB1c2goe1xuICAgICAgICBuYW1lOiAnQ2lyY2xlQWxidW1zJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY2lyY2xlSWQ6IGNpcmNsZUlkLnZhbHVlLFxuICAgICAgICAgIHBhZ2U6IG5ld1ZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICApO1xuXG4gIHdhdGNoKFxuICAgICgpID0+ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlLFxuICAgIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKGBQYWdlIGNoYW5nZWQgZnJvbSAke29sZFZhbHVlfSB0byAke25ld1ZhbHVlfWApO1xuICAgICAgY2lyY2xlQWxidW1Db250cm9sbGVyPy5jaGFuZ2VQYWdlKHBhcnNlSW50KG5ld1ZhbHVlIGFzIHN0cmluZykpO1xuICAgIH1cbiAgKTtcblxuICB3YXRjaChcbiAgICAoKSA9PiAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuY2lyY2xlSWQsXG4gICAgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgbG9nZ2VyLmluZm8oYENpcmNsZSBJRCBjaGFuZ2VkIGZyb20gJHtvbGRWYWx1ZX0gdG8gJHtuZXdWYWx1ZX1gKTtcbiAgICAgIGNpcmNsZUlkLnZhbHVlID0gbmV3VmFsdWUgYXMgc3RyaW5nO1xuICAgICAgY2lyY2xlSW5mb0NvbnRyb2xsZXI/LmNoYW5nZUNpcmNsZUlkKGNpcmNsZUlkLnZhbHVlKTtcbiAgICB9XG4gICk7XG5cbiAgY2lyY2xlSWQudmFsdWUgPSBjaXJjbGVJZFBhcmFtIGFzIHN0cmluZztcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiYWxwaGEzVG9BbHBoYTIiLCJnZXROYW1lIiwiZ2V0VW5pY29kZUZsYWdJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1lLFNBQVMsZUFBZSxTQUFTO0FBQzlDLFNBQU8sMkJBQTJCLFFBQVEsRUFBRSxJQUFJLDJCQUEyQixRQUFRLEVBQUU7QUFDdkY7QUFPQSxTQUFTLDJCQUEyQixRQUFRO0FBQzFDLFNBQU8sT0FBTyxjQUFjLFNBQVUsS0FBSyxPQUFPLGNBQWMsV0FBVyxDQUFDLENBQUM7QUFDL0U7QUNqQk8sTUFBTSxZQUFZO0FBQUEsRUFDdkIsT0FBYyw2QkFBNkIsTUFBZ0IscUJBQW1DLE1BQWM7QUFDdEcsUUFBQSxLQUFLLFdBQVcsR0FBRztBQUNyQixhQUFPLEtBQUs7QUFBQSxJQUNkO0FBRUksUUFBQSxLQUFLLFdBQVcsR0FBRztBQUNyQixhQUFPLEdBQUcsS0FBSyxNQUFNLHNCQUFzQixLQUFLO0FBQUEsSUFDbEQ7QUFFQSxXQUFPLEdBQUcsS0FBSyxNQUFNLEdBQUcsRUFBRSxFQUFFLEtBQUssSUFBSSxNQUFNLHNCQUFzQixLQUFLLE1BQU0sRUFBRSxFQUFFO0FBQUEsRUFDbEY7QUFDRjtBQ3FDQSxTQUF3Qiw0QkFDdEIsV0FDMEI7QUFDMUIsUUFBTSxzQkFBc0I7QUFDdEIsUUFBQSxhQUFhLElBQUksVUFBVSxpQkFBaUI7QUFFNUMsUUFBQSw4QkFBOEIsQ0FBQyxlQUE4QixnQkFBa0Q7O0FBQy9HLFVBQUEsbUJBQWMsZUFBZCxtQkFBMEIsWUFBVyxHQUFHO0FBQ25DLGFBQUE7QUFBQSxJQUNUO0FBRUksUUFBQSxjQUFjLEdBQUcsY0FBYztBQUUvQixRQUFBLGNBQWMsTUFBTyxTQUFTLEdBQUc7QUFDbkMs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
