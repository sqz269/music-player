import { c as createComponent, a as computed, b as h, v as hSlot, d as useDarkProps, aZ as useRouterLinkProps, j as useDark, a_ as useRouterLink, r as ref, g as getCurrentInstance, aA as isKeyCode, aa as stopAndPrevent, h as hUniqueSlot } from "./index.3b5072bf.js";
var QItemSection = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QItemLabel = createComponent({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));
    const classes = computed(
      () => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
    );
    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": parsedLines.value
      } : null;
    });
    return () => h("div", {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default));
  }
});
var QItem = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props.clickable === true || hasLink.value === true || props.tag === "label"
    );
    const isClickable = computed(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        navigateOnClick(e);
      }
    }
    function onKeyup(e) {
      if (isClickable.value === true && isKeyCode(e, [13, 32]) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: "listitem",
        onClick,
        onKeyup
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkAttrs.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
export { QItem as Q, QItemSection as a, QItemLabel as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUl0ZW0uYWFkMmQ4YzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaXRlbS9RSXRlbVNlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2l0ZW0vUUl0ZW1MYWJlbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaXRlbS9RSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUl0ZW1TZWN0aW9uJyxcblxuICBwcm9wczoge1xuICAgIGF2YXRhcjogQm9vbGVhbixcbiAgICB0aHVtYm5haWw6IEJvb2xlYW4sXG4gICAgc2lkZTogQm9vbGVhbixcbiAgICB0b3A6IEJvb2xlYW4sXG4gICAgbm9XcmFwOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWl0ZW1fX3NlY3Rpb24gY29sdW1uJ1xuICAgICAgKyBgIHEtaXRlbV9fc2VjdGlvbi0tJHsgcHJvcHMuYXZhdGFyID09PSB0cnVlIHx8IHByb3BzLnNpZGUgPT09IHRydWUgfHwgcHJvcHMudGh1bWJuYWlsID09PSB0cnVlID8gJ3NpZGUnIDogJ21haW4nIH1gXG4gICAgICArIChwcm9wcy50b3AgPT09IHRydWUgPyAnIHEtaXRlbV9fc2VjdGlvbi0tdG9wIGp1c3RpZnktc3RhcnQnIDogJyBqdXN0aWZ5LWNlbnRlcicpXG4gICAgICArIChwcm9wcy5hdmF0YXIgPT09IHRydWUgPyAnIHEtaXRlbV9fc2VjdGlvbi0tYXZhdGFyJyA6ICcnKVxuICAgICAgKyAocHJvcHMudGh1bWJuYWlsID09PSB0cnVlID8gJyBxLWl0ZW1fX3NlY3Rpb24tLXRodW1ibmFpbCcgOiAnJylcbiAgICAgICsgKHByb3BzLm5vV3JhcCA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19zZWN0aW9uLS1ub3dyYXAnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUl0ZW1MYWJlbCcsXG5cbiAgcHJvcHM6IHtcbiAgICBvdmVybGluZTogQm9vbGVhbixcbiAgICBjYXB0aW9uOiBCb29sZWFuLFxuICAgIGhlYWRlcjogQm9vbGVhbixcbiAgICBsaW5lczogWyBOdW1iZXIsIFN0cmluZyBdXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBwYXJzZWRMaW5lcyA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLmxpbmVzLCAxMCkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWl0ZW1fX2xhYmVsJ1xuICAgICAgKyAocHJvcHMub3ZlcmxpbmUgPT09IHRydWUgPyAnIHEtaXRlbV9fbGFiZWwtLW92ZXJsaW5lIHRleHQtb3ZlcmxpbmUnIDogJycpXG4gICAgICArIChwcm9wcy5jYXB0aW9uID09PSB0cnVlID8gJyBxLWl0ZW1fX2xhYmVsLS1jYXB0aW9uIHRleHQtY2FwdGlvbicgOiAnJylcbiAgICAgICsgKHByb3BzLmhlYWRlciA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19sYWJlbC0taGVhZGVyJyA6ICcnKVxuICAgICAgKyAocGFyc2VkTGluZXMudmFsdWUgPT09IDEgPyAnIGVsbGlwc2lzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmxpbmVzICE9PSB2b2lkIDAgJiYgcGFyc2VkTGluZXMudmFsdWUgPiAxXG4gICAgICAgID8ge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcbiAgICAgICAgICAgICctd2Via2l0LWJveC1vcmllbnQnOiAndmVydGljYWwnLFxuICAgICAgICAgICAgJy13ZWJraXQtbGluZS1jbGFtcCc6IHBhcnNlZExpbmVzLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGxcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoVW5pcXVlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUl0ZW0nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaW5zZXRMZXZlbDogTnVtYmVyLFxuXG4gICAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIGZvY3VzZWQ6IEJvb2xlYW4sXG4gICAgbWFudWFsRm9jdXM6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnY2xpY2snLCAna2V5dXAnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGhhc0xpbmssIGxpbmtBdHRycywgbGlua0NsYXNzLCBsaW5rVGFnLCBuYXZpZ2F0ZU9uQ2xpY2sgfSA9IHVzZVJvdXRlckxpbmsoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGlzQWN0aW9uYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5jbGlja2FibGUgPT09IHRydWVcbiAgICAgICAgfHwgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICB8fCBwcm9wcy50YWcgPT09ICdsYWJlbCdcbiAgICApXG5cbiAgICBjb25zdCBpc0NsaWNrYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaXRlbSBxLWl0ZW0tdHlwZSByb3cgbm8td3JhcCdcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWl0ZW0tLWRlbnNlJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWl0ZW0tLWRhcmsnIDogJycpXG4gICAgICArIChcbiAgICAgICAgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5hY3RpdmUgPT09IG51bGxcbiAgICAgICAgICA/IGxpbmtDbGFzcy52YWx1ZVxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IGAgcS1pdGVtLS1hY3RpdmUkeyBwcm9wcy5hY3RpdmVDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5hY3RpdmVDbGFzcyB9YCA6ICcnIH1gXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgICArIChcbiAgICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgcS1pdGVtLS1jbGlja2FibGUgcS1saW5rIGN1cnNvci1wb2ludGVyICdcbiAgICAgICAgICAgICsgKHByb3BzLm1hbnVhbEZvY3VzID09PSB0cnVlID8gJ3EtbWFudWFsLWZvY3VzYWJsZScgOiAncS1mb2N1c2FibGUgcS1ob3ZlcmFibGUnKVxuICAgICAgICAgICAgKyAocHJvcHMuZm9jdXNlZCA9PT0gdHJ1ZSA/ICcgcS1tYW51YWwtZm9jdXNhYmxlLS1mb2N1c2VkJyA6ICcnKVxuICAgICAgICAgIDogJydcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5pbnNldExldmVsID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbICdwYWRkaW5nJyArIGRpciBdOiAoMTYgKyBwcm9wcy5pbnNldExldmVsICogNTYpICsgJ3B4J1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoZS5xS2V5RXZlbnQgIT09IHRydWUgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICAgICAgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGJsdXJUYXJnZXRSZWYudmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3RSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5hdmlnYXRlT25DbGljayhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5dXAgKGUpIHtcbiAgICAgIGlmIChpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBpc0tleUNvZGUoZSwgWyAxMywgMzIgXSkgPT09IHRydWUpIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgICAgICAvLyBmb3IgcmlwcGxlXG4gICAgICAgIGUucUtleUV2ZW50ID0gdHJ1ZVxuXG4gICAgICAgIC8vIGZvciBjbGljayB0cmlnZ2VyXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIGUpXG4gICAgICAgIGV2dC5xS2V5RXZlbnQgPSB0cnVlXG4gICAgICAgIHJvb3RSZWYudmFsdWUuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2tleXVwJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlICYmIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWZvY3VzLWhlbHBlcicsIHRhYmluZGV4OiAtMSwgcmVmOiBibHVyVGFyZ2V0UmVmIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJvbGU6ICdsaXN0aXRlbScsXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIG9uS2V5dXBcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGRhdGEudGFiaW5kZXggPSBwcm9wcy50YWJpbmRleCB8fCAnMCdcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCBsaW5rQXR0cnMudmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YVsgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoXG4gICAgICAgIGxpbmtUYWcudmFsdWUsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGdldENvbnRlbnQoKVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBQSxlQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsMkNBQ3dCLE1BQU0sV0FBVyxRQUFRLE1BQU0sU0FBUyxRQUFRLE1BQU0sY0FBYyxPQUFPLFNBQVMsWUFDekcsTUFBTSxRQUFRLE9BQU8sd0NBQXdDLHNCQUM3RCxNQUFNLFdBQVcsT0FBTyw2QkFBNkIsT0FDckQsTUFBTSxjQUFjLE9BQU8sZ0NBQWdDLE9BQzNELE1BQU0sV0FBVyxPQUFPLDZCQUE2QjtBQUFBLElBQ3pEO0FBRUQsV0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sUUFBUSxNQUFLLEdBQUksTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQ3JFO0FBQ0gsQ0FBQztBQ3ZCRCxJQUFBLGFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsVUFBVTtBQUFBLElBQ1YsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsT0FBTyxDQUFFLFFBQVEsTUFBUTtBQUFBLEVBQzFCO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sY0FBYyxTQUFTLE1BQU0sU0FBUyxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBRTVELFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsbUJBQ0csTUFBTSxhQUFhLE9BQU8sMkNBQTJDLE9BQ3JFLE1BQU0sWUFBWSxPQUFPLHlDQUF5QyxPQUNsRSxNQUFNLFdBQVcsT0FBTywyQkFBMkIsT0FDbkQsWUFBWSxVQUFVLElBQUksY0FBYztBQUFBLElBQzVDO0FBRUQsVUFBTSxRQUFRLFNBQVMsTUFBTTtBQUMzQixhQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksUUFBUSxJQUNqRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLFFBQ1Qsc0JBQXNCO0FBQUEsUUFDdEIsc0JBQXNCLFlBQVk7QUFBQSxNQUNuQyxJQUNEO0FBQUEsSUFDVixDQUFLO0FBRUQsV0FBTyxNQUFNLEVBQUUsT0FBTztBQUFBLE1BQ3BCLE9BQU8sTUFBTTtBQUFBLE1BQ2IsT0FBTyxRQUFRO0FBQUEsSUFDckIsR0FBTyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDeEI7QUFDSCxDQUFDO0FDaENELElBQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFFSCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFdBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUVaLFVBQVUsQ0FBRSxRQUFRLE1BQVE7QUFBQSxJQUU1QixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZDtBQUFBLEVBRUQsT0FBTyxDQUFFLFNBQVMsT0FBUztBQUFBLEVBRTNCLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sRUFBRSxPQUFPLEVBQUUsR0FBSSxFQUFBLElBQUssbUJBQW9CO0FBRTlDLFVBQU0sU0FBUyxRQUFRLE9BQU8sRUFBRTtBQUNoQyxVQUFNLEVBQUUsU0FBUyxXQUFXLFdBQVcsU0FBUyxnQkFBaUIsSUFBRyxjQUFlO0FBRW5GLFVBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsVUFBTSxnQkFBZ0IsSUFBSSxJQUFJO0FBRTlCLFVBQU0sZUFBZTtBQUFBLE1BQVMsTUFDNUIsTUFBTSxjQUFjLFFBQ2YsUUFBUSxVQUFVLFFBQ2xCLE1BQU0sUUFBUTtBQUFBLElBQ3BCO0FBRUQsVUFBTSxjQUFjO0FBQUEsTUFBUyxNQUMzQixNQUFNLFlBQVksUUFBUSxhQUFhLFVBQVU7QUFBQSxJQUNsRDtBQUVELFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsb0NBQ0csTUFBTSxVQUFVLE9BQU8sbUJBQW1CLE9BQzFDLE9BQU8sVUFBVSxPQUFPLGtCQUFrQixPQUUzQyxRQUFRLFVBQVUsUUFBUSxNQUFNLFdBQVcsT0FDdkMsVUFBVSxRQUVSLE1BQU0sV0FBVyxPQUNiLGtCQUFtQixNQUFNLGdCQUFnQixTQUFTLElBQUssTUFBTSxnQkFBaUIsT0FDOUUsT0FHVCxNQUFNLFlBQVksT0FBTyxjQUFjLE9BRXhDLFlBQVksVUFBVSxPQUNsQiwrQ0FDRyxNQUFNLGdCQUFnQixPQUFPLHVCQUF1Qiw4QkFDcEQsTUFBTSxZQUFZLE9BQU8saUNBQWlDLE1BQzdEO0FBQUEsSUFFUDtBQUVELFVBQU0sUUFBUSxTQUFTLE1BQU07QUFDM0IsVUFBSSxNQUFNLGVBQWUsUUFBUTtBQUMvQixlQUFPO0FBQUEsTUFDUjtBQUVELFlBQU0sTUFBTSxHQUFHLEtBQUssUUFBUSxPQUFPLFVBQVU7QUFDN0MsYUFBTztBQUFBLFFBQ0wsQ0FBRSxZQUFZLE1BQVEsS0FBSyxNQUFNLGFBQWEsS0FBTTtBQUFBLE1BQ3JEO0FBQUEsSUFDUCxDQUFLO0FBRUQsYUFBUyxRQUFTLEdBQUc7QUFDbkIsVUFBSSxZQUFZLFVBQVUsTUFBTTtBQUM5QixZQUFJLGNBQWMsVUFBVSxNQUFNO0FBQ2hDLGNBQUksRUFBRSxjQUFjLFFBQVEsU0FBUyxrQkFBa0IsUUFBUSxPQUFPO0FBQ3BFLDBCQUFjLE1BQU0sTUFBTztBQUFBLFVBQzVCLFdBQ1EsU0FBUyxrQkFBa0IsY0FBYyxPQUFPO0FBQ3ZELG9CQUFRLE1BQU0sTUFBTztBQUFBLFVBQ3RCO0FBQUEsUUFDRjtBQUVELHdCQUFnQixDQUFDO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBRUQsYUFBUyxRQUFTLEdBQUc7QUFDbkIsVUFBSSxZQUFZLFVBQVUsUUFBUSxVQUFVLEdBQUcsQ0FBRSxJQUFJLEdBQUksTUFBTSxNQUFNO0FBQ25FLHVCQUFlLENBQUM7QUFHaEIsVUFBRSxZQUFZO0FBR2QsY0FBTSxNQUFNLElBQUksV0FBVyxTQUFTLENBQUM7QUFDckMsWUFBSSxZQUFZO0FBQ2hCLGdCQUFRLE1BQU0sY0FBYyxHQUFHO0FBQUEsTUFDaEM7QUFFRCxXQUFLLFNBQVMsQ0FBQztBQUFBLElBQ2hCO0FBRUQsYUFBUyxhQUFjO0FBQ3JCLFlBQU0sUUFBUSxZQUFZLE1BQU0sU0FBUyxDQUFBLENBQUU7QUFFM0Msa0JBQVksVUFBVSxRQUFRLE1BQU07QUFBQSxRQUNsQyxFQUFFLE9BQU8sRUFBRSxPQUFPLGtCQUFrQixVQUFVLElBQUksS0FBSyxlQUFlO0FBQUEsTUFDdkU7QUFFRCxhQUFPO0FBQUEsSUFDUjtBQUVELFdBQU8sTUFBTTtBQUNYLFlBQU0sT0FBTztBQUFBLFFBQ1gsS0FBSztBQUFBLFFBQ0wsT0FBTyxRQUFRO0FBQUEsUUFDZixPQUFPLE1BQU07QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFFRCxVQUFJLFlBQVksVUFBVSxNQUFNO0FBQzlCLGFBQUssV0FBVyxNQUFNLFlBQVk7QUFDbEMsZUFBTyxPQUFPLE1BQU0sVUFBVSxLQUFLO0FBQUEsTUFDcEMsV0FDUSxhQUFhLFVBQVUsTUFBTTtBQUNwQyxhQUFNLG1CQUFvQjtBQUFBLE1BQzNCO0FBRUQsYUFBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1I7QUFBQSxRQUNBLFdBQVk7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDSCxDQUFDOzsifQ==
