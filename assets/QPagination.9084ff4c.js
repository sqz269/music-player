import { c as createComponent, a as useDarkProps, bn as btnDesignOptions, d as useDark, g as computed, r as ref, w as watch, bo as btnPadding, bp as getBtnDesign, aD as isKeyCode, m as h, L as QInput, t as getCurrentInstance, N as QBtn } from "./index.61faeb9b.js";
import { b as between } from "./QSelect.3a992706.js";
const SortOrder = {
  Ascending: "Ascending",
  Descending: "Descending"
};
function getBool(val, otherwise) {
  return [true, false].includes(val) ? val : otherwise;
}
var QPagination = createComponent({
  name: "QPagination",
  props: {
    ...useDarkProps,
    modelValue: {
      type: Number,
      required: true
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      required: true
    },
    maxPages: {
      type: [Number, String],
      default: 0,
      validator: (v) => (typeof v === "string" ? parseInt(v, 10) : v) >= 0
    },
    inputStyle: [Array, String, Object],
    inputClass: [Array, String, Object],
    size: String,
    disable: Boolean,
    input: Boolean,
    iconPrev: String,
    iconNext: String,
    iconFirst: String,
    iconLast: String,
    toFn: Function,
    boundaryLinks: {
      type: Boolean,
      default: null
    },
    boundaryNumbers: {
      type: Boolean,
      default: null
    },
    directionLinks: {
      type: Boolean,
      default: null
    },
    ellipses: {
      type: Boolean,
      default: null
    },
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    round: Boolean,
    rounded: Boolean,
    flat: Boolean,
    outline: Boolean,
    unelevated: Boolean,
    push: Boolean,
    glossy: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    textColor: String,
    activeDesign: {
      type: String,
      default: "",
      values: (v) => v === "" || btnDesignOptions.includes(v)
    },
    activeColor: String,
    activeTextColor: String,
    gutter: String,
    padding: {
      type: String,
      default: "3px 2px"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const minProp = computed(() => parseInt(props.min, 10));
    const maxProp = computed(() => parseInt(props.max, 10));
    const maxPagesProp = computed(() => parseInt(props.maxPages, 10));
    const inputPlaceholder = computed(() => model.value + " / " + maxProp.value);
    const boundaryLinksProp = computed(() => getBool(props.boundaryLinks, props.input));
    const boundaryNumbersProp = computed(() => getBool(props.boundaryNumbers, !props.input));
    const directionLinksProp = computed(() => getBool(props.directionLinks, props.input));
    const ellipsesProp = computed(() => getBool(props.ellipses, !props.input));
    const newPage = ref(null);
    const model = computed({
      get: () => props.modelValue,
      set: (val) => {
        val = parseInt(val, 10);
        if (props.disable || isNaN(val)) {
          return;
        }
        const value = between(val, minProp.value, maxProp.value);
        if (props.modelValue !== value) {
          emit("update:modelValue", value);
        }
      }
    });
    watch(() => `${minProp.value}|${maxProp.value}`, () => {
      model.value = props.modelValue;
    });
    const classes = computed(
      () => "q-pagination row no-wrap items-center" + (props.disable === true ? " disabled" : "")
    );
    const gutterProp = computed(() => props.gutter in btnPadding ? `${btnPadding[props.gutter]}px` : props.gutter || null);
    const gutterStyle = computed(() => gutterProp.value !== null ? `--q-pagination-gutter-parent:-${gutterProp.value};--q-pagination-gutter-child:${gutterProp.value}` : null);
    const icons = computed(() => {
      const ico = [
        props.iconFirst || $q.iconSet.pagination.first,
        props.iconPrev || $q.iconSet.pagination.prev,
        props.iconNext || $q.iconSet.pagination.next,
        props.iconLast || $q.iconSet.pagination.last
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const attrs = computed(() => ({
      "aria-disabled": props.disable === true ? "true" : "false",
      role: "navigation"
    }));
    const btnDesignProp = computed(() => getBtnDesign(props, "flat"));
    const btnProps = computed(() => ({
      [btnDesignProp.value]: true,
      round: props.round,
      rounded: props.rounded,
      padding: props.padding,
      color: props.color,
      textColor: props.textColor,
      size: props.size,
      ripple: props.ripple !== null ? props.ripple : true
    }));
    const btnActiveDesignProp = computed(() => {
      const acc = { [btnDesignProp.value]: false };
      if (props.activeDesign !== "") {
        acc[props.activeDesign] = true;
      }
      return acc;
    });
    const activeBtnProps = computed(() => ({
      ...btnActiveDesignProp.value,
      color: props.activeColor || props.color,
      textColor: props.activeTextColor || props.textColor
    }));
    const btnConfig = computed(() => {
      let maxPages = Math.max(
        maxPagesProp.value,
        1 + (ellipsesProp.value ? 2 : 0) + (boundaryNumbersProp.value ? 2 : 0)
      );
      const acc = {
        pgFrom: minProp.value,
        pgTo: maxProp.value,
        ellipsesStart: false,
        ellipsesEnd: false,
        boundaryStart: false,
        boundaryEnd: false,
        marginalStyle: {
          minWidth: `${Math.max(2, String(maxProp.value).length)}em`
        }
      };
      if (maxPagesProp.value && maxPages < maxProp.value - minProp.value + 1) {
        maxPages = 1 + Math.floor(maxPages / 2) * 2;
        acc.pgFrom = Math.max(minProp.value, Math.min(maxProp.value - maxPages + 1, props.modelValue - Math.floor(maxPages / 2)));
        acc.pgTo = Math.min(maxProp.value, acc.pgFrom + maxPages - 1);
        if (boundaryNumbersProp.value) {
          acc.boundaryStart = true;
          acc.pgFrom++;
        }
        if (ellipsesProp.value && acc.pgFrom > minProp.value + (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesStart = true;
          acc.pgFrom++;
        }
        if (boundaryNumbersProp.value) {
          acc.boundaryEnd = true;
          acc.pgTo--;
        }
        if (ellipsesProp.value && acc.pgTo < maxProp.value - (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesEnd = true;
          acc.pgTo--;
        }
      }
      return acc;
    });
    function set(value) {
      model.value = value;
    }
    function setByOffset(offset) {
      model.value = model.value + offset;
    }
    const inputEvents = computed(() => {
      function updateModel() {
        model.value = newPage.value;
        newPage.value = null;
      }
      return {
        "onUpdate:modelValue": (val) => {
          newPage.value = val;
        },
        onKeyup: (e) => {
          isKeyCode(e, 13) === true && updateModel();
        },
        onBlur: updateModel
      };
    });
    function getBtn(cfg, page, active) {
      const data = {
        "aria-label": page,
        "aria-current": "false",
        ...btnProps.value,
        ...cfg
      };
      if (active === true) {
        Object.assign(data, {
          "aria-current": "true",
          ...activeBtnProps.value
        });
      }
      if (page !== void 0) {
        if (props.toFn !== void 0) {
          data.to = props.toFn(page);
        } else {
          data.onClick = () => {
            set(page);
          };
        }
      }
      return h(QBtn, data);
    }
    Object.assign(proxy, { set, setByOffset });
    return () => {
      const contentStart = [];
      const contentEnd = [];
      let contentMiddle;
      if (boundaryLinksProp.value === true) {
        contentStart.push(
          getBtn({
            key: "bls",
            disable: props.disable || props.modelValue <= minProp.value,
            icon: icons.value[0]
          }, minProp.value)
        );
        contentEnd.unshift(
          getBtn({
            key: "ble",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[3]
          }, maxProp.value)
        );
      }
      if (directionLinksProp.value === true) {
        contentStart.push(
          getBtn({
            key: "bdp",
            disable: props.disable || props.modelValue <= minProp.value,
            icon: icons.value[1]
          }, props.modelValue - 1)
        );
        contentEnd.unshift(
          getBtn({
            key: "bdn",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[2]
          }, props.modelValue + 1)
        );
      }
      if (props.input !== true) {
        contentMiddle = [];
        const { pgFrom, pgTo, marginalStyle: style } = btnConfig.value;
        if (btnConfig.value.boundaryStart === true) {
          const active = minProp.value === props.modelValue;
          contentStart.push(
            getBtn({
              key: "bns",
              style,
              disable: props.disable,
              label: minProp.value
            }, minProp.value, active)
          );
        }
        if (btnConfig.value.boundaryEnd === true) {
          const active = maxProp.value === props.modelValue;
          contentEnd.unshift(
            getBtn({
              key: "bne",
              style,
              disable: props.disable,
              label: maxProp.value
            }, maxProp.value, active)
          );
        }
        if (btnConfig.value.ellipsesStart === true) {
          contentStart.push(
            getBtn({
              key: "bes",
              style,
              disable: props.disable,
              label: "\u2026",
              ripple: false
            }, pgFrom - 1)
          );
        }
        if (btnConfig.value.ellipsesEnd === true) {
          contentEnd.unshift(
            getBtn({
              key: "bee",
              style,
              disable: props.disable,
              label: "\u2026",
              ripple: false
            }, pgTo + 1)
          );
        }
        for (let i = pgFrom; i <= pgTo; i++) {
          contentMiddle.push(
            getBtn({
              key: `bpg${i}`,
              style,
              disable: props.disable,
              label: i
            }, i, i === props.modelValue)
          );
        }
      }
      return h("div", {
        class: classes.value,
        ...attrs.value
      }, [
        h("div", {
          class: "q-pagination__content row no-wrap items-center",
          style: gutterStyle.value
        }, [
          ...contentStart,
          props.input === true ? h(QInput, {
            class: "inline",
            style: { width: `${inputPlaceholder.value.length / 1.5}em` },
            type: "number",
            dense: true,
            value: newPage.value,
            disable: props.disable,
            dark: isDark.value,
            borderless: true,
            inputClass: props.inputClass,
            inputStyle: props.inputStyle,
            placeholder: inputPlaceholder.value,
            min: minProp.value,
            max: maxProp.value,
            ...inputEvents.value
          }) : h("div", {
            class: "q-pagination__middle row justify-center"
          }, contentMiddle),
          ...contentEnd
        ])
      ]);
    };
  }
});
export { QPagination as Q, SortOrder as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVBhZ2luYXRpb24uOTA4NGZmNGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdC9lc20vbW9kZWxzL1NvcnRPcmRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9RUGFnaW5hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGxtY1BsYXllckJhY2tlbmRcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKlxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgU29ydE9yZGVyID0ge1xuICAgIEFzY2VuZGluZzogJ0FzY2VuZGluZycsXG4gICAgRGVzY2VuZGluZzogJ0Rlc2NlbmRpbmcnXG59O1xuZXhwb3J0IGZ1bmN0aW9uIFNvcnRPcmRlckZyb21KU09OKGpzb24pIHtcbiAgICByZXR1cm4gU29ydE9yZGVyRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gU29ydE9yZGVyRnJvbUpTT05UeXBlZChqc29uLCBpZ25vcmVEaXNjcmltaW5hdG9yKSB7XG4gICAgcmV0dXJuIGpzb247XG59XG5leHBvcnQgZnVuY3Rpb24gU29ydE9yZGVyVG9KU09OKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCB3YXRjaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5pbXBvcnQgUUlucHV0IGZyb20gJy4uL2lucHV0L1FJbnB1dC5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IGJ0bkRlc2lnbk9wdGlvbnMsIGJ0blBhZGRpbmcsIGdldEJ0bkRlc2lnbiB9IGZyb20gJy4uL2J0bi91c2UtYnRuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcblxuZnVuY3Rpb24gZ2V0Qm9vbCAodmFsLCBvdGhlcndpc2UpIHtcbiAgcmV0dXJuIFsgdHJ1ZSwgZmFsc2UgXS5pbmNsdWRlcyh2YWwpXG4gICAgPyB2YWxcbiAgICA6IG90aGVyd2lzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2luYXRpb24nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1pbjoge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogMVxuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbWF4UGFnZXM6IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gKFxuICAgICAgICAodHlwZW9mIHYgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodiwgMTApIDogdikgPj0gMFxuICAgICAgKVxuICAgIH0sXG5cbiAgICBpbnB1dFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGlucHV0Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBzaXplOiBTdHJpbmcsXG5cbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gICAgaW5wdXQ6IEJvb2xlYW4sXG5cbiAgICBpY29uUHJldjogU3RyaW5nLFxuICAgIGljb25OZXh0OiBTdHJpbmcsXG4gICAgaWNvbkZpcnN0OiBTdHJpbmcsXG4gICAgaWNvbkxhc3Q6IFN0cmluZyxcblxuICAgIHRvRm46IEZ1bmN0aW9uLFxuXG4gICAgYm91bmRhcnlMaW5rczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGJvdW5kYXJ5TnVtYmVyczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGRpcmVjdGlvbkxpbmtzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgZWxsaXBzZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgcm91bmQ6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgb3V0bGluZTogQm9vbGVhbixcbiAgICB1bmVsZXZhdGVkOiBCb29sZWFuLFxuICAgIHB1c2g6IEJvb2xlYW4sXG4gICAgZ2xvc3N5OiBCb29sZWFuLFxuXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5J1xuICAgIH0sXG4gICAgdGV4dENvbG9yOiBTdHJpbmcsXG5cbiAgICBhY3RpdmVEZXNpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgdmFsdWVzOiB2ID0+IHYgPT09ICcnIHx8IGJ0bkRlc2lnbk9wdGlvbnMuaW5jbHVkZXModilcbiAgICB9LFxuICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgYWN0aXZlVGV4dENvbG9yOiBTdHJpbmcsXG5cbiAgICBndXR0ZXI6IFN0cmluZyxcbiAgICBwYWRkaW5nOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnM3B4IDJweCdcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICAgIGNvbnN0IG1pblByb3AgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5taW4sIDEwKSlcbiAgICBjb25zdCBtYXhQcm9wID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWF4LCAxMCkpXG4gICAgY29uc3QgbWF4UGFnZXNQcm9wID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWF4UGFnZXMsIDEwKSlcblxuICAgIGNvbnN0IGlucHV0UGxhY2Vob2xkZXIgPSBjb21wdXRlZCgoKSA9PiBtb2RlbC52YWx1ZSArICcgLyAnICsgbWF4UHJvcC52YWx1ZSlcbiAgICBjb25zdCBib3VuZGFyeUxpbmtzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuYm91bmRhcnlMaW5rcywgcHJvcHMuaW5wdXQpKVxuICAgIGNvbnN0IGJvdW5kYXJ5TnVtYmVyc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmJvdW5kYXJ5TnVtYmVycywgIXByb3BzLmlucHV0KSlcbiAgICBjb25zdCBkaXJlY3Rpb25MaW5rc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmRpcmVjdGlvbkxpbmtzLCBwcm9wcy5pbnB1dCkpXG4gICAgY29uc3QgZWxsaXBzZXNQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5lbGxpcHNlcywgIXByb3BzLmlucHV0KSlcblxuICAgIGNvbnN0IG5ld1BhZ2UgPSByZWYobnVsbClcbiAgICBjb25zdCBtb2RlbCA9IGNvbXB1dGVkKHtcbiAgICAgIGdldDogKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSxcbiAgICAgIHNldDogdmFsID0+IHtcbiAgICAgICAgdmFsID0gcGFyc2VJbnQodmFsLCAxMClcbiAgICAgICAgaWYgKHByb3BzLmRpc2FibGUgfHwgaXNOYU4odmFsKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYmV0d2Vlbih2YWwsIG1pblByb3AudmFsdWUsIG1heFByb3AudmFsdWUpXG4gICAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gYCR7IG1pblByb3AudmFsdWUgfXwkeyBtYXhQcm9wLnZhbHVlIH1gLCAoKSA9PiB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHByb3BzLm1vZGVsVmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1wYWdpbmF0aW9uIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGd1dHRlclByb3AgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5ndXR0ZXIgaW4gYnRuUGFkZGluZ1xuICAgICAgICA/IGAkeyBidG5QYWRkaW5nWyBwcm9wcy5ndXR0ZXIgXSB9cHhgXG4gICAgICAgIDogcHJvcHMuZ3V0dGVyIHx8IG51bGxcbiAgICApKVxuICAgIGNvbnN0IGd1dHRlclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgZ3V0dGVyUHJvcC52YWx1ZSAhPT0gbnVsbFxuICAgICAgICA/IGAtLXEtcGFnaW5hdGlvbi1ndXR0ZXItcGFyZW50Oi0keyBndXR0ZXJQcm9wLnZhbHVlIH07LS1xLXBhZ2luYXRpb24tZ3V0dGVyLWNoaWxkOiR7IGd1dHRlclByb3AudmFsdWUgfWBcbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IGljb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgaWNvID0gW1xuICAgICAgICBwcm9wcy5pY29uRmlyc3QgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLmZpcnN0LFxuICAgICAgICBwcm9wcy5pY29uUHJldiB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24ucHJldixcbiAgICAgICAgcHJvcHMuaWNvbk5leHQgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLm5leHQsXG4gICAgICAgIHByb3BzLmljb25MYXN0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5sYXN0XG4gICAgICBdXG4gICAgICByZXR1cm4gJHEubGFuZy5ydGwgPT09IHRydWUgPyBpY28ucmV2ZXJzZSgpIDogaWNvXG4gICAgfSlcblxuICAgIGNvbnN0IGF0dHJzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgICdhcmlhLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICByb2xlOiAnbmF2aWdhdGlvbidcbiAgICB9KSlcblxuICAgIGNvbnN0IGJ0bkRlc2lnblByb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCdG5EZXNpZ24ocHJvcHMsICdmbGF0JykpXG4gICAgY29uc3QgYnRuUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgWyBidG5EZXNpZ25Qcm9wLnZhbHVlIF06IHRydWUsXG5cbiAgICAgIHJvdW5kOiBwcm9wcy5yb3VuZCxcbiAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG5cbiAgICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmcsXG5cbiAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgIHRleHRDb2xvcjogcHJvcHMudGV4dENvbG9yLFxuXG4gICAgICBzaXplOiBwcm9wcy5zaXplLFxuICAgICAgcmlwcGxlOiBwcm9wcy5yaXBwbGUgIT09IG51bGxcbiAgICAgICAgPyBwcm9wcy5yaXBwbGVcbiAgICAgICAgOiB0cnVlXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5BY3RpdmVEZXNpZ25Qcm9wID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gd2UgYWxzbyByZXNldCBub24tYWN0aXZlIGRlc2lnblxuICAgICAgY29uc3QgYWNjID0geyBbIGJ0bkRlc2lnblByb3AudmFsdWUgXTogZmFsc2UgfVxuICAgICAgaWYgKHByb3BzLmFjdGl2ZURlc2lnbiAhPT0gJycpIHtcbiAgICAgICAgYWNjWyBwcm9wcy5hY3RpdmVEZXNpZ24gXSA9IHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuICAgIGNvbnN0IGFjdGl2ZUJ0blByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLmJ0bkFjdGl2ZURlc2lnblByb3AudmFsdWUsXG4gICAgICBjb2xvcjogcHJvcHMuYWN0aXZlQ29sb3IgfHwgcHJvcHMuY29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHByb3BzLmFjdGl2ZVRleHRDb2xvciB8fCBwcm9wcy50ZXh0Q29sb3JcbiAgICB9KSlcblxuICAgIGNvbnN0IGJ0bkNvbmZpZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBtYXhQYWdlcyA9IE1hdGgubWF4KFxuICAgICAgICBtYXhQYWdlc1Byb3AudmFsdWUsXG4gICAgICAgIDEgKyAoZWxsaXBzZXNQcm9wLnZhbHVlID8gMiA6IDApICsgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUgPyAyIDogMClcbiAgICAgIClcblxuICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICBwZ0Zyb206IG1pblByb3AudmFsdWUsXG4gICAgICAgIHBnVG86IG1heFByb3AudmFsdWUsXG4gICAgICAgIGVsbGlwc2VzU3RhcnQ6IGZhbHNlLFxuICAgICAgICBlbGxpcHNlc0VuZDogZmFsc2UsXG4gICAgICAgIGJvdW5kYXJ5U3RhcnQ6IGZhbHNlLFxuICAgICAgICBib3VuZGFyeUVuZDogZmFsc2UsXG4gICAgICAgIG1hcmdpbmFsU3R5bGU6IHtcbiAgICAgICAgICBtaW5XaWR0aDogYCR7IE1hdGgubWF4KDIsIFN0cmluZyhtYXhQcm9wLnZhbHVlKS5sZW5ndGgpIH1lbWBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWF4UGFnZXNQcm9wLnZhbHVlICYmIG1heFBhZ2VzIDwgKG1heFByb3AudmFsdWUgLSBtaW5Qcm9wLnZhbHVlICsgMSkpIHtcbiAgICAgICAgbWF4UGFnZXMgPSAxICsgTWF0aC5mbG9vcihtYXhQYWdlcyAvIDIpICogMlxuICAgICAgICBhY2MucGdGcm9tID0gTWF0aC5tYXgobWluUHJvcC52YWx1ZSwgTWF0aC5taW4obWF4UHJvcC52YWx1ZSAtIG1heFBhZ2VzICsgMSwgcHJvcHMubW9kZWxWYWx1ZSAtIE1hdGguZmxvb3IobWF4UGFnZXMgLyAyKSkpXG4gICAgICAgIGFjYy5wZ1RvID0gTWF0aC5taW4obWF4UHJvcC52YWx1ZSwgYWNjLnBnRnJvbSArIG1heFBhZ2VzIC0gMSlcblxuICAgICAgICBpZiAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSkge1xuICAgICAgICAgIGFjYy5ib3VuZGFyeVN0YXJ0ID0gdHJ1ZVxuICAgICAgICAgIGFjYy5wZ0Zyb20rK1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsbGlwc2VzUHJvcC52YWx1ZSAmJiBhY2MucGdGcm9tID4gKG1pblByb3AudmFsdWUgKyAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSA/IDEgOiAwKSkpIHtcbiAgICAgICAgICBhY2MuZWxsaXBzZXNTdGFydCA9IHRydWVcbiAgICAgICAgICBhY2MucGdGcm9tKytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlKSB7XG4gICAgICAgICAgYWNjLmJvdW5kYXJ5RW5kID0gdHJ1ZVxuICAgICAgICAgIGFjYy5wZ1RvLS1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGxpcHNlc1Byb3AudmFsdWUgJiYgYWNjLnBnVG8gPCAobWF4UHJvcC52YWx1ZSAtIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlID8gMSA6IDApKSkge1xuICAgICAgICAgIGFjYy5lbGxpcHNlc0VuZCA9IHRydWVcbiAgICAgICAgICBhY2MucGdUby0tXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzZXQgKHZhbHVlKSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QnlPZmZzZXQgKG9mZnNldCkge1xuICAgICAgbW9kZWwudmFsdWUgPSBtb2RlbC52YWx1ZSArIG9mZnNldFxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgZnVuY3Rpb24gdXBkYXRlTW9kZWwgKCkge1xuICAgICAgICBtb2RlbC52YWx1ZSA9IG5ld1BhZ2UudmFsdWVcbiAgICAgICAgbmV3UGFnZS52YWx1ZSA9IG51bGxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiB2YWwgPT4geyBuZXdQYWdlLnZhbHVlID0gdmFsIH0sXG4gICAgICAgIG9uS2V5dXA6IGUgPT4geyBpc0tleUNvZGUoZSwgMTMpID09PSB0cnVlICYmIHVwZGF0ZU1vZGVsKCkgfSxcbiAgICAgICAgb25CbHVyOiB1cGRhdGVNb2RlbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRCdG4gKGNmZywgcGFnZSwgYWN0aXZlKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAnYXJpYS1sYWJlbCc6IHBhZ2UsXG4gICAgICAgICdhcmlhLWN1cnJlbnQnOiAnZmFsc2UnLFxuICAgICAgICAuLi5idG5Qcm9wcy52YWx1ZSxcbiAgICAgICAgLi4uY2ZnXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgJ2FyaWEtY3VycmVudCc6ICd0cnVlJyxcbiAgICAgICAgICAuLi5hY3RpdmVCdG5Qcm9wcy52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAocGFnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGlmIChwcm9wcy50b0ZuICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBkYXRhLnRvID0gcHJvcHMudG9GbihwYWdlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEub25DbGljayA9ICgpID0+IHsgc2V0KHBhZ2UpIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChRQnRuLCBkYXRhKVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHsgc2V0LCBzZXRCeU9mZnNldCB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRTdGFydCA9IFtdXG4gICAgICBjb25zdCBjb250ZW50RW5kID0gW11cbiAgICAgIGxldCBjb250ZW50TWlkZGxlXG5cbiAgICAgIGlmIChib3VuZGFyeUxpbmtzUHJvcC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250ZW50U3RhcnQucHVzaChcbiAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAga2V5OiAnYmxzJyxcbiAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgfHwgcHJvcHMubW9kZWxWYWx1ZSA8PSBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICAgICAgaWNvbjogaWNvbnMudmFsdWVbIDAgXVxuICAgICAgICAgIH0sIG1pblByb3AudmFsdWUpXG4gICAgICAgIClcblxuICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JsZScsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPj0gbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAzIF1cbiAgICAgICAgICB9LCBtYXhQcm9wLnZhbHVlKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb25MaW5rc1Byb3AudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JkcCcsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPD0gbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAxIF1cbiAgICAgICAgICB9LCBwcm9wcy5tb2RlbFZhbHVlIC0gMSlcbiAgICAgICAgKVxuXG4gICAgICAgIGNvbnRlbnRFbmQudW5zaGlmdChcbiAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAga2V5OiAnYmRuJyxcbiAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgfHwgcHJvcHMubW9kZWxWYWx1ZSA+PSBtYXhQcm9wLnZhbHVlLFxuICAgICAgICAgICAgaWNvbjogaWNvbnMudmFsdWVbIDIgXVxuICAgICAgICAgIH0sIHByb3BzLm1vZGVsVmFsdWUgKyAxKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5pbnB1dCAhPT0gdHJ1ZSkgeyAvLyBoYXMgYnV0dG9ucyBpbnN0ZWFkIG9mIGlucHV0Ym94XG4gICAgICAgIGNvbnRlbnRNaWRkbGUgPSBbXVxuICAgICAgICBjb25zdCB7IHBnRnJvbSwgcGdUbywgbWFyZ2luYWxTdHlsZTogc3R5bGUgfSA9IGJ0bkNvbmZpZy52YWx1ZVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuYm91bmRhcnlTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IG1pblByb3AudmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgICBjb250ZW50U3RhcnQucHVzaChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JucycsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogbWluUHJvcC52YWx1ZVxuICAgICAgICAgICAgfSwgbWluUHJvcC52YWx1ZSwgYWN0aXZlKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuYm91bmRhcnlFbmQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtYXhQcm9wLnZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYm5lJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiBtYXhQcm9wLnZhbHVlXG4gICAgICAgICAgICB9LCBtYXhQcm9wLnZhbHVlLCBhY3RpdmUpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ0bkNvbmZpZy52YWx1ZS5lbGxpcHNlc1N0YXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdiZXMnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6ICfigKYnLFxuICAgICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCBwZ0Zyb20gLSAxKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuZWxsaXBzZXNFbmQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdiZWUnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6ICfigKYnLFxuICAgICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCBwZ1RvICsgMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gcGdGcm9tOyBpIDw9IHBnVG87IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRNaWRkbGUucHVzaChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogYGJwZyR7IGkgfWAsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogaVxuICAgICAgICAgICAgfSwgaSwgaSA9PT0gcHJvcHMubW9kZWxWYWx1ZSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIC4uLmF0dHJzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtcGFnaW5hdGlvbl9fY29udGVudCByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInLFxuICAgICAgICAgIHN0eWxlOiBndXR0ZXJTdHlsZS52YWx1ZVxuICAgICAgICB9LCBbXG4gICAgICAgICAgLi4uY29udGVudFN0YXJ0LFxuXG4gICAgICAgICAgcHJvcHMuaW5wdXQgPT09IHRydWVcbiAgICAgICAgICAgID8gaChRSW5wdXQsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogYCR7IGlucHV0UGxhY2Vob2xkZXIudmFsdWUubGVuZ3RoIC8gMS41IH1lbWAgfSxcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogbmV3UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICBib3JkZXJsZXNzOiB0cnVlLFxuICAgICAgICAgICAgICBpbnB1dENsYXNzOiBwcm9wcy5pbnB1dENsYXNzLFxuICAgICAgICAgICAgICBpbnB1dFN0eWxlOiBwcm9wcy5pbnB1dFN0eWxlLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXRQbGFjZWhvbGRlci52YWx1ZSxcbiAgICAgICAgICAgICAgbWluOiBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICAgICAgICBtYXg6IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICAgIC4uLmlucHV0RXZlbnRzLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1wYWdpbmF0aW9uX19taWRkbGUgcm93IGp1c3RpZnktY2VudGVyJ1xuICAgICAgICAgICAgfSwgY29udGVudE1pZGRsZSksXG5cbiAgICAgICAgICAuLi5jb250ZW50RW5kXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWlCWSxNQUFDLFlBQVk7QUFBQSxFQUNyQixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQ2hCO0FDUkEsU0FBUyxRQUFTLEtBQUssV0FBVztBQUNoQyxTQUFPLENBQUUsTUFBTSxPQUFRLFNBQVMsR0FBRyxJQUMvQixNQUNBO0FBQ047QUFFQSxJQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNELEtBQUs7QUFBQSxNQUNILE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElB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
