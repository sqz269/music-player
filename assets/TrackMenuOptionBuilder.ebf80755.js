var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Q as QList } from "./QList.0f274bb4.js";
import { a as QMenu } from "./QSelect.18cdb5c2.js";
import { E as defineComponent, l as withDirectives, G as openBlock, H as createBlock, I as withCtx, J as createVNode, b7 as QAvatar, W as createTextVNode, $ as toDisplayString, _ as _export_sfc, a0 as Ripple, U as createElementBlock, Y as renderList, X as Fragment, by as queueService, bx as QueueAddMode, S as useRouter } from "./index.ac9d5b0d.js";
import { Q as QItem, a as QItemSection } from "./QItem.023bb992.js";
import { C as ClosePopup } from "./ClosePopup.2909a8f7.js";
import { a as outlinedPlaylistPlay, u as outlinedQueueMusic, A as outlinedYoutubeSearchedFor, B as outlinedAlbum, C as outlinedPerson } from "./index.ce69cbf8.js";
import { U as UrlUtils } from "./UrlUtils.da180cca.js";
const _sfc_main$1 = defineComponent({
  __name: "TrackMenuOption",
  props: {
    option: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: _cache[0] || (_cache[0] = () => props.option.onClick())
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QAvatar, {
                icon: props.option.icon
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.option.label), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      })), [
        [ClosePopup],
        [Ripple]
      ]);
    };
  }
});
var TrackMenuOption = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "TrackMenuOption.vue"]]);
const _sfc_main = defineComponent({
  __name: "TrackMenu",
  props: {
    options: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QMenu, {
        "context-menu": "",
        fit: ""
      }, {
        default: withCtx(() => [
          createVNode(QList, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (option) => {
                return openBlock(), createBlock(TrackMenuOption, {
                  key: option.label,
                  option
                }, null, 8, ["option"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var TrackMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "TrackMenu.vue"]]);
class ITrackMenuOption {
}
class TrackMenuOptionPlayNext extends ITrackMenuOption {
  constructor(trackData, albumData) {
    super();
    __publicField(this, "label", "Play next");
    __publicField(this, "icon", outlinedPlaylistPlay);
    __publicField(this, "callbacks", []);
    this.trackData = trackData;
    this.albumData = albumData;
  }
  onClick() {
    queueService.addTrackById(this.trackData.id, QueueAddMode.APPEND_NEXT);
    this.callbacks.forEach((callback) => callback());
  }
  addCallback(callback) {
    this.callbacks.push(callback);
    return this;
  }
}
class TrackMenuOptionAddToQueue extends ITrackMenuOption {
  constructor(trackData, albumData) {
    super();
    __publicField(this, "label", "Add to queue");
    __publicField(this, "icon", outlinedQueueMusic);
    __publicField(this, "callbacks", []);
    this.trackData = trackData;
    this.albumData = albumData;
  }
  onClick() {
    queueService.addTrackById(this.trackData.id, QueueAddMode.APPEND_LAST);
    this.callbacks.forEach((callback) => callback());
  }
  addCallback(callback) {
    this.callbacks.push(callback);
    return this;
  }
}
class TrackMenuOptionSearchOnYoutube extends ITrackMenuOption {
  constructor(trackData, albumData) {
    super();
    __publicField(this, "label", "Search on YouTube");
    __publicField(this, "icon", outlinedYoutubeSearchedFor);
    __publicField(this, "callbacks", []);
    this.trackData = trackData;
    this.albumData = albumData;
  }
  onClick() {
    var _a, _b, _c;
    const circleName = this.albumData.albumArtist[0].name;
    UrlUtils.openUrlInNewTab(
      UrlUtils.constructYouTubeSearchQuery(
        `"${(_b = (_a = this.trackData) == null ? void 0 : _a.name) == null ? void 0 : _b._default}" ${(_c = this.albumData.name) == null ? void 0 : _c._default} ${circleName}`
      )
    );
    this.callbacks.forEach((callback) => callback());
  }
  addCallback(callback) {
    this.callbacks.push(callback);
    return this;
  }
}
class TrackMenuOptionViewAlbum extends ITrackMenuOption {
  constructor(trackData, albumData) {
    super();
    __publicField(this, "label", "View album");
    __publicField(this, "icon", outlinedAlbum);
    __publicField(this, "callbacks", []);
    __publicField(this, "$router", useRouter());
    this.trackData = trackData;
    this.albumData = albumData;
  }
  onClick() {
    this.$router.push({
      name: "Album",
      params: {
        albumId: this.albumData.id
      }
    });
  }
  addCallback(callback) {
    this.callbacks.push(callback);
    return this;
  }
}
class TrackMenuOptionViewCircle extends ITrackMenuOption {
  constructor(trackData, albumData) {
    super();
    __publicField(this, "label", "View artist");
    __publicField(this, "icon", outlinedPerson);
    __publicField(this, "callbacks", []);
    __publicField(this, "$router", useRouter());
    this.trackData = trackData;
    this.albumData = albumData;
  }
  onClick() {
    const circleId = this.albumData.albumArtist[0].id;
    this.$router.push({
      name: "CircleAlbums",
      params: {
        circleId,
        page: 1
      }
    });
  }
  addCallback(callback) {
    this.callbacks.push(callback);
    return this;
  }
}
class TrackMenuOptionsBuilder {
  constructor(trackData, albumData) {
    __publicField(this, "trackData");
    __publicField(this, "albumData");
    __publicField(this, "options");
    this.trackData = trackData;
    this.albumData = albumData;
    this.options = [];
  }
  addOption(option) {
    if (option) {
      this.options.push(option);
    }
    return this;
  }
  addPlayNextOption() {
    this.addOption(new TrackMenuOptionPlayNext(this.trackData, this.albumData));
    return this;
  }
  addAddToQueueOption() {
    this.addOption(new TrackMenuOptionAddToQueue(this.trackData, this.albumData));
    return this;
  }
  addViewAlbumOption() {
    this.addOption(new TrackMenuOptionViewAlbum(this.trackData, this.albumData));
    return this;
  }
  addViewCircleOption() {
    this.addOption(new TrackMenuOptionViewCircle(this.trackData, this.albumData));
    return this;
  }
  addSearchOnYoutubeOption() {
    this.addOption(new TrackMenuOptionSearchOnYoutube(this.trackData, this.albumData));
    return this;
  }
  withCallback(callback) {
    if (this.options.length > 0) {
      this.options[this.options.length - 1].addCallback(callback);
    }
    return this;
  }
  build() {
    return this.options;
  }
}
export { TrackMenu as T, TrackMenuOptionsBuilder as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tNZW51T3B0aW9uQnVpbGRlci5lYmY4MDc1NS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVudU9wdGlvbnMvVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIvVHJhY2tNZW51T3B0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lbnVPcHRpb25zL1RyYWNrTWVudU9wdGlvbnNCdWlsZGVyL1RyYWNrTWVudS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZW51T3B0aW9ucy9UcmFja01lbnVPcHRpb25zQnVpbGRlci9JVHJhY2tNZW51T3B0aW9uLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVudU9wdGlvbnMvVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIvVHJhY2tNZW51T3B0aW9ucy50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lbnVPcHRpb25zL1RyYWNrTWVudU9wdGlvbnNCdWlsZGVyL1RyYWNrTWVudU9wdGlvbkJ1aWxkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1pdGVtXG4gICAgdi1jbG9zZS1wb3B1cFxuICAgIHYtcmlwcGxlXG4gICAgY2xpY2thYmxlXG4gICAgQGNsaWNrPVwiKCkgPT4gcHJvcHMub3B0aW9uLm9uQ2xpY2soKVwiXG4gID5cbiAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgPHEtYXZhdGFyIDppY29uPVwicHJvcHMub3B0aW9uLmljb25cIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uPnt7IHByb3BzLm9wdGlvbi5sYWJlbCB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZVByb3BzIH0gZnJvbSAndnVlJztcbmltcG9ydCBJVHJhY2tNZW51T3B0aW9uIGZyb20gJ3NyYy9jb21wb25lbnRzL01lbnVPcHRpb25zL1RyYWNrTWVudU9wdGlvbnNCdWlsZGVyL0lUcmFja01lbnVPcHRpb24nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgb3B0aW9uOiBJVHJhY2tNZW51T3B0aW9uXG59PigpO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLW1lbnVcbiAgICBjb250ZXh0LW1lbnVcbiAgICBmaXRcbiAgPlxuICAgIDxxLWxpc3Q+XG4gICAgICA8VHJhY2tNZW51T3B0aW9uXG4gICAgICAgIHYtZm9yPVwib3B0aW9uIGluIHByb3BzLm9wdGlvbnNcIlxuICAgICAgICA6a2V5PVwib3B0aW9uLmxhYmVsXCJcbiAgICAgICAgOm9wdGlvbj1cIm9wdGlvblwiXG4gICAgICAvPlxuICAgIDwvcS1saXN0PlxuICA8L3EtbWVudT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgSVRyYWNrTWVudU9wdGlvbiBmcm9tICcuL0lUcmFja01lbnVPcHRpb24nO1xuaW1wb3J0IFRyYWNrTWVudU9wdGlvbiBmcm9tICcuL1RyYWNrTWVudU9wdGlvbi52dWUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgb3B0aW9uczogSVRyYWNrTWVudU9wdGlvbltdXG59PigpO1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9zcmMnO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBJVHJhY2tNZW51T3B0aW9uIHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcblxuICBhYnN0cmFjdCByZWFkb25seSB0cmFja0RhdGE6IFRyYWNrUmVhZER0bztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgYWxidW1EYXRhOiBUcmFja1JlYWREdG87XG5cbiAgcHVibGljIGFic3RyYWN0IG9uQ2xpY2soKTogdm9pZDtcblxuICBwdWJsaWMgYWJzdHJhY3QgYWRkQ2FsbGJhY2soY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBJVHJhY2tNZW51T3B0aW9uO1xufVxuIiwiaW1wb3J0IHsgVHJhY2tSZWFkRHRvLCBBbGJ1bVJlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcbmltcG9ydCBJVHJhY2tNZW51T3B0aW9uIGZyb20gJy4vSVRyYWNrTWVudU9wdGlvbic7XG5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheWxpc3RQbGF5LFxuICBvdXRsaW5lZFF1ZXVlTXVzaWMsXG4gIG91dGxpbmVkWW91dHViZVNlYXJjaGVkRm9yLFxuICBvdXRsaW5lZEFsYnVtLFxuICBvdXRsaW5lZFBlcnNvblxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyBxdWV1ZVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMvX3NlcnZpY2VzJztcbmltcG9ydCB7IFF1ZXVlQWRkTW9kZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUXVldWVTZXJ2aWNlJztcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSAnc3JjL3V0aWxzL1VybFV0aWxzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG4vLyBPcHRpb25zXG5leHBvcnQgY2xhc3MgVHJhY2tNZW51T3B0aW9uUGxheU5leHQgZXh0ZW5kcyBJVHJhY2tNZW51T3B0aW9uIHtcbiAgcHVibGljIHJlYWRvbmx5IGxhYmVsID0gJ1BsYXkgbmV4dCc7XG4gIHB1YmxpYyByZWFkb25seSBpY29uID0gb3V0bGluZWRQbGF5bGlzdFBsYXk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHRyYWNrRGF0YTogVHJhY2tSZWFkRHRvLFxuICAgIHB1YmxpYyByZWFkb25seSBhbGJ1bURhdGE6IEFsYnVtUmVhZER0bykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb25DbGljaygpIHtcbiAgICBxdWV1ZVNlcnZpY2UuYWRkVHJhY2tCeUlkKHRoaXMudHJhY2tEYXRhLmlkISwgUXVldWVBZGRNb2RlLkFQUEVORF9ORVhUKTtcblxuICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ2FsbGJhY2soY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja01lbnVPcHRpb25BZGRUb1F1ZXVlIGV4dGVuZHMgSVRyYWNrTWVudU9wdGlvbiB7XG4gIHB1YmxpYyByZWFkb25seSBsYWJlbCA9ICdBZGQgdG8gcXVldWUnO1xuICBwdWJsaWMgcmVhZG9ubHkgaWNvbiA9IG91dGxpbmVkUXVldWVNdXNpYztcblxuICBwcml2YXRlIHJlYWRvbmx5IGNhbGxiYWNrczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHJhY2tEYXRhOiBUcmFja1JlYWREdG8sXG4gICAgcHVibGljIHJlYWRvbmx5IGFsYnVtRGF0YTogQWxidW1SZWFkRHRvKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKCkge1xuICAgIHF1ZXVlU2VydmljZS5hZGRUcmFja0J5SWQodGhpcy50cmFja0RhdGEuaWQhLCBRdWV1ZUFkZE1vZGUuQVBQRU5EX0xBU1QpO1xuXG4gICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDYWxsYmFjayhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrTWVudU9wdGlvblNlYXJjaE9uWW91dHViZSBleHRlbmRzIElUcmFja01lbnVPcHRpb24ge1xuICBwdWJsaWMgcmVhZG9ubHkgbGFiZWwgPSAnU2VhcmNoIG9uIFlvdVR1YmUnO1xuICBwdWJsaWMgcmVhZG9ubHkgaWNvbiA9IG91dGxpbmVkWW91dHViZVNlYXJjaGVkRm9yO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FsbGJhY2tzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSB0cmFja0RhdGE6IFRyYWNrUmVhZER0byxcbiAgICBwdWJsaWMgcmVhZG9ubHkgYWxidW1EYXRhOiBBbGJ1bVJlYWREdG8pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soKSB7XG4gICAgY29uc3QgY2lyY2xlTmFtZSA9IHRoaXMuYWxidW1EYXRhLmFsYnVtQXJ0aXN0IVswXS5uYW1lO1xuXG4gICAgVXJsVXRpbHMub3BlblVybEluTmV3VGFiKFxuICAgICAgVXJsVXRpbHMuY29uc3RydWN0WW91VHViZVNlYXJjaFF1ZXJ5KFxuICAgICAgICBgXCIke3RoaXMudHJhY2tEYXRhPy5uYW1lPy5fZGVmYXVsdH1cIiAke3RoaXMuYWxidW1EYXRhLm5hbWU/Ll9kZWZhdWx0fSAke2NpcmNsZU5hbWV9YFxuICAgICAgKVxuICAgIClcblxuICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ2FsbGJhY2soY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja01lbnVPcHRpb25WaWV3QWxidW0gZXh0ZW5kcyBJVHJhY2tNZW51T3B0aW9uIHtcbiAgcHVibGljIHJlYWRvbmx5IGxhYmVsID0gJ1ZpZXcgYWxidW0nO1xuICBwdWJsaWMgcmVhZG9ubHkgaWNvbiA9IG91dGxpbmVkQWxidW07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHRyYWNrRGF0YTogVHJhY2tSZWFkRHRvLFxuICAgIHB1YmxpYyByZWFkb25seSBhbGJ1bURhdGE6IEFsYnVtUmVhZER0bykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb25DbGljaygpIHtcbiAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICBuYW1lOiAnQWxidW0nLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFsYnVtSWQ6IHRoaXMuYWxidW1EYXRhLmlkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ2FsbGJhY2soY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja01lbnVPcHRpb25WaWV3Q2lyY2xlIGV4dGVuZHMgSVRyYWNrTWVudU9wdGlvbiB7XG4gIHB1YmxpYyByZWFkb25seSBsYWJlbCA9ICdWaWV3IGFydGlzdCc7XG4gIHB1YmxpYyByZWFkb25seSBpY29uID0gb3V0bGluZWRQZXJzb247XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHRyYWNrRGF0YTogVHJhY2tSZWFkRHRvLFxuICAgIHB1YmxpYyByZWFkb25seSBhbGJ1bURhdGE6IEFsYnVtUmVhZER0bykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb25DbGljaygpIHtcbiAgICBjb25zdCBjaXJjbGVJZCA9IHRoaXMuYWxidW1EYXRhLmFsYnVtQXJ0aXN0IVswXS5pZDtcblxuICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgIG5hbWU6ICdDaXJjbGVBbGJ1bXMnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGNpcmNsZUlkOiBjaXJjbGVJZCxcbiAgICAgICAgcGFnZTogMVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFkZENhbGxiYWNrKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBUcmFja1JlYWREdG8sIEFsYnVtUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QnO1xuaW1wb3J0IElUcmFja01lbnVPcHRpb24gZnJvbSAnLi9JVHJhY2tNZW51T3B0aW9uJztcbmltcG9ydCB7IFRyYWNrTWVudU9wdGlvbkFkZFRvUXVldWUsIFRyYWNrTWVudU9wdGlvblBsYXlOZXh0LCBUcmFja01lbnVPcHRpb25TZWFyY2hPbllvdXR1YmUsIFRyYWNrTWVudU9wdGlvblZpZXdBbGJ1bSwgVHJhY2tNZW51T3B0aW9uVmlld0NpcmNsZSB9IGZyb20gJy4vVHJhY2tNZW51T3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrTWVudU9wdGlvbnNCdWlsZGVyIHtcbiAgdHJhY2tEYXRhOiBUcmFja1JlYWREdG87XG4gIGFsYnVtRGF0YTogQWxidW1SZWFkRHRvO1xuICBvcHRpb25zOiBJVHJhY2tNZW51T3B0aW9uW107XG5cbiAgY29uc3RydWN0b3IodHJhY2tEYXRhOiBUcmFja1JlYWREdG8sIGFsYnVtRGF0YTogQWxidW1SZWFkRHRvKSB7XG4gICAgdGhpcy50cmFja0RhdGEgPSB0cmFja0RhdGE7XG4gICAgdGhpcy5hbGJ1bURhdGEgPSBhbGJ1bURhdGE7XG4gICAgdGhpcy5vcHRpb25zID0gW107XG4gIH1cblxuICBhZGRPcHRpb24ob3B0aW9uOiBJVHJhY2tNZW51T3B0aW9uKSB7XG4gICAgaWYgKG9wdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRQbGF5TmV4dE9wdGlvbigpIHtcbiAgICB0aGlzLmFkZE9wdGlvbihuZXcgVHJhY2tNZW51T3B0aW9uUGxheU5leHQodGhpcy50cmFja0RhdGEsIHRoaXMuYWxidW1EYXRhKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRBZGRUb1F1ZXVlT3B0aW9uKCkge1xuICAgIHRoaXMuYWRkT3B0aW9uKG5ldyBUcmFja01lbnVPcHRpb25BZGRUb1F1ZXVlKHRoaXMudHJhY2tEYXRhLCB0aGlzLmFsYnVtRGF0YSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVmlld0FsYnVtT3B0aW9uKCkge1xuICAgIHRoaXMuYWRkT3B0aW9uKG5ldyBUcmFja01lbnVPcHRpb25WaWV3QWxidW0odGhpcy50cmFja0RhdGEsIHRoaXMuYWxidW1EYXRhKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRWaWV3Q2lyY2xlT3B0aW9uKCkge1xuICAgIHRoaXMuYWRkT3B0aW9uKG5ldyBUcmFja01lbnVPcHRpb25WaWV3Q2lyY2xlKHRoaXMudHJhY2tEYXRhLCB0aGlzLmFsYnVtRGF0YSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkU2VhcmNoT25Zb3V0dWJlT3B0aW9uKCkge1xuICAgIHRoaXMuYWRkT3B0aW9uKG5ldyBUcmFja01lbnVPcHRpb25TZWFyY2hPbllvdXR1YmUodGhpcy50cmFja0RhdGEsIHRoaXMuYWxidW1EYXRhKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3aXRoQ2FsbGJhY2soY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3B0aW9uc1t0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMV0uYWRkQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCk6IElUcmFja01lbnVPcHRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsVUFBTSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ2QsVUFBTSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJkLE1BQThCLGlCQUFpQjtBQVUvQztBQ0lPLE1BQU0sZ0NBQWdDLGlCQUFpQjtBQUFBLEVBTTVELFlBQ2tCLFdBQ0EsV0FBeUI7QUFDbkM7QUFSUSxpQ0FBUTtBQUNSLGdDQUFPO0FBRU4scUNBQTRCLENBQUE7QUFHM0IsU0FBQSxZQUFBO0FBQ0EsU0FBQSxZQUFBO0FBQUEsRUFFbEI7QUFBQSxFQUVPLFVBQVU7QUFDZixpQkFBYSxhQUFhLEtBQUssVUFBVSxJQUFLLGFBQWEsV0FBVztBQUV0RSxTQUFLLFVBQVUsUUFBUSxDQUFZLGFBQUEsU0FBVSxDQUFBO0FBQUEsRUFDL0M7QUFBQSxFQUVPLFlBQVksVUFBc0I7QUFDbEMsU0FBQSxVQUFVLEtBQUssUUFBUTtBQUVyQixXQUFBO0FBQUEsRUFDVDtBQUNGO0FBRU8sTUFBTSxrQ0FBa0MsaUJBQWlCO0FBQUEsRUFNOUQsWUFDa0IsV0FDQSxXQUF5QjtBQUNuQztBQVJRLGlDQUFRO0FBQ1IsZ0NBQU87QUFFTixxQ0FBNEIsQ0FBQTtBQUczQixTQUFBLFlBQUE7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
