import { u as useLoadableController, Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.056bb601.js";
import { b as between, a as QImg, Q as QSelect } from "./QImg.8cb35c1c.js";
import { c as createComponent, d as useDarkProps, r as ref, j as useDark, a as computed, aO as debounce, w as watch, aP as onDeactivated, aQ as onActivated, o as onBeforeUnmount, b as h, B as hMergeSlot, s as withDirectives, g as getCurrentInstance, bo as setHorizontalScrollPosition, bp as setVerticalScrollPosition, bq as playlistService, b7 as AlbumApi, br as apiConfigurationProvider, a2 as TrackInfo, bs as PlaylistApi, _ as _export_sfc, F as defineComponent, P as PlaylistVisibility, S as useRouter, i as inject, ac as onBeforeMount, ae as resolveComponent, T as unref, G as openBlock, H as createBlock, I as withCtx, a3 as createCommentVNode, J as createVNode, R as createBaseVNode, O as QCard, K as QCardSection, W as createTextVNode, $ as toDisplayString, M as QCardActions, N as QBtn, U as createElementBlock, Y as renderList, b5 as QAvatar, X as Fragment, V as QSeparator, be as pushScopeId, bf as popScopeId } from "./index.3b5072bf.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.aad2d8c6.js";
import { Q as QList } from "./QList.e607c058.js";
import { Q as QResizeObserver, a as QScrollObserver, T as TouchPan } from "./QScrollObserver.9292a411.js";
import { Q as QPage } from "./QPage.47a2b48e.js";
const axisList = ["vertical", "horizontal"];
const dirProps = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
};
const panOpts = {
  prevent: true,
  mouse: true,
  mouseAllDir: true
};
const getMinThumbSize = (size) => size >= 250 ? 50 : Math.ceil(size / 5);
var QScrollArea = createComponent({
  name: "QScrollArea",
  props: {
    ...useDarkProps,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(props, { slots, emit }) {
    const tempShowing = ref(false);
    const panning = ref(false);
    const hover = ref(false);
    const container = {
      vertical: ref(0),
      horizontal: ref(0)
    };
    const scroll = {
      vertical: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      },
      horizontal: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      }
    };
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    let timer = null, panRefPos;
    const targetRef = ref(null);
    const classes = computed(
      () => "q-scrollarea" + (isDark.value === true ? " q-scrollarea--dark" : "")
    );
    scroll.vertical.percentage = computed(() => {
      const diff = scroll.vertical.size.value - container.vertical.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(scroll.vertical.position.value / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.vertical.thumbHidden = computed(
      () => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.vertical.size.value <= container.vertical.value + 1
    );
    scroll.vertical.thumbStart = computed(
      () => scroll.vertical.percentage.value * (container.vertical.value - scroll.vertical.thumbSize.value)
    );
    scroll.vertical.thumbSize = computed(
      () => Math.round(
        between(
          container.vertical.value * container.vertical.value / scroll.vertical.size.value,
          getMinThumbSize(container.vertical.value),
          container.vertical.value
        )
      )
    );
    scroll.vertical.style = computed(() => {
      return {
        ...props.thumbStyle,
        ...props.verticalThumbStyle,
        top: `${scroll.vertical.thumbStart.value}px`,
        height: `${scroll.vertical.thumbSize.value}px`
      };
    });
    scroll.vertical.thumbClass = computed(
      () => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")
    );
    scroll.vertical.barClass = computed(
      () => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")
    );
    scroll.horizontal.percentage = computed(() => {
      const diff = scroll.horizontal.size.value - container.horizontal.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(Math.abs(scroll.horizontal.position.value) / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.horizontal.thumbHidden = computed(
      () => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.horizontal.size.value <= container.horizontal.value + 1
    );
    scroll.horizontal.thumbStart = computed(
      () => scroll.horizontal.percentage.value * (container.horizontal.value - scroll.horizontal.thumbSize.value)
    );
    scroll.horizontal.thumbSize = computed(
      () => Math.round(
        between(
          container.horizontal.value * container.horizontal.value / scroll.horizontal.size.value,
          getMinThumbSize(container.horizontal.value),
          container.horizontal.value
        )
      )
    );
    scroll.horizontal.style = computed(() => {
      return {
        ...props.thumbStyle,
        ...props.horizontalThumbStyle,
        [proxy.$q.lang.rtl === true ? "right" : "left"]: `${scroll.horizontal.thumbStart.value}px`,
        width: `${scroll.horizontal.thumbSize.value}px`
      };
    });
    scroll.horizontal.thumbClass = computed(
      () => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")
    );
    scroll.horizontal.barClass = computed(
      () => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")
    );
    const mainStyle = computed(() => scroll.vertical.thumbHidden.value === true && scroll.horizontal.thumbHidden.value === true ? props.contentStyle : props.contentActiveStyle);
    const thumbVertDir = [[
      TouchPan,
      (e) => {
        onPanThumb(e, "vertical");
      },
      void 0,
      { vertical: true, ...panOpts }
    ]];
    const thumbHorizDir = [[
      TouchPan,
      (e) => {
        onPanThumb(e, "horizontal");
      },
      void 0,
      { horizontal: true, ...panOpts }
    ]];
    function getScroll() {
      const info = {};
      axisList.forEach((axis) => {
        const data = scroll[axis];
        info[axis + "Position"] = data.position.value;
        info[axis + "Percentage"] = data.percentage.value;
        info[axis + "Size"] = data.size.value;
        info[axis + "ContainerSize"] = container[axis].value;
      });
      return info;
    }
    const emitScroll = debounce(() => {
      const info = getScroll();
      info.ref = proxy;
      emit("scroll", info);
    }, 0);
    function localSetScrollPosition(axis, offset, duration) {
      if (axisList.includes(axis) === false) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      const fn = axis === "vertical" ? setVerticalScrollPosition : setHorizontalScrollPosition;
      fn(targetRef.value, offset, duration);
    }
    function updateContainer({ height, width }) {
      let change = false;
      if (container.vertical.value !== height) {
        container.vertical.value = height;
        change = true;
      }
      if (container.horizontal.value !== width) {
        container.horizontal.value = width;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScroll({ position }) {
      let change = false;
      if (scroll.vertical.position.value !== position.top) {
        scroll.vertical.position.value = position.top;
        change = true;
      }
      if (scroll.horizontal.position.value !== position.left) {
        scroll.horizontal.position.value = position.left;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScrollSize({ height, width }) {
      if (scroll.horizontal.size.value !== width) {
        scroll.horizontal.size.value = width;
        startTimer();
      }
      if (scroll.vertical.size.value !== height) {
        scroll.vertical.size.value = height;
        startTimer();
      }
    }
    function onPanThumb(e, axis) {
      const data = scroll[axis];
      if (e.isFirst === true) {
        if (data.thumbHidden.value === true) {
          return;
        }
        panRefPos = data.position.value;
        panning.value = true;
      } else if (panning.value !== true) {
        return;
      }
      if (e.isFinal === true) {
        panning.value = false;
      }
      const dProp = dirProps[axis];
      const containerSize = container[axis].value;
      const multiplier = (data.size.value - containerSize) / (containerSize - data.thumbSize.value);
      const distance = e.distance[dProp.dist];
      const pos = panRefPos + (e.direction === dProp.dir ? 1 : -1) * distance * multiplier;
      setScroll(pos, axis);
    }
    function onMousedown(evt, axis) {
      const data = scroll[axis];
      if (data.thumbHidden.value !== true) {
        const offset = evt[dirProps[axis].offset];
        if (offset < data.thumbStart.value || offset > data.thumbStart.value + data.thumbSize.value) {
          const pos = offset - data.thumbSize.value / 2;
          setScroll(pos / container[axis].value * data.size.value, axis);
        }
        if (data.ref.value !== null) {
          data.ref.value.dispatchEvent(new MouseEvent(evt.type, evt));
        }
      }
    }
    function onVerticalMousedown(evt) {
      onMousedown(evt, "vertical");
    }
    function onHorizontalMousedown(evt) {
      onMousedown(evt, "horizontal");
    }
    function startTimer() {
      tempShowing.value = true;
      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        tempShowing.value = false;
      }, props.delay);
      props.onScroll !== void 0 && emitScroll();
    }
    function setScroll(offset, axis) {
      targetRef.value[dirProps[axis].scroll] = offset;
    }
    let mouseEventTimer = null;
    function onMouseenter() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
      }
      mouseEventTimer = setTimeout(() => {
        mouseEventTimer = null;
        hover.value = true;
      }, proxy.$q.platform.is.ios ? 50 : 0);
    }
    function onMouseleave() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
        mouseEventTimer = null;
      }
      hover.value = false;
    }
    let scrollPosition = null;
    watch(() => proxy.$q.lang.rtl, (rtl) => {
      if (targetRef.value !== null) {
        setHorizontalScrollPosition(
          targetRef.value,
          Math.abs(scroll.horizontal.position.value) * (rtl === true ? -1 : 1)
        );
      }
    });
    onDeactivated(() => {
      scrollPosition = {
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      };
    });
    onActivated(() => {
      if (scrollPosition === null)
        return;
      const scrollTarget = targetRef.value;
      if (scrollTarget !== null) {
        setHorizontalScrollPosition(scrollTarget, scrollPosition.left);
        setVerticalScrollPosition(scrollTarget, scrollPosition.top);
      }
    });
    onBeforeUnmount(emitScroll.cancel);
    Object.assign(proxy, {
      getScrollTarget: () => targetRef.value,
      getScroll,
      getScrollPosition: () => ({
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: scroll.vertical.percentage.value,
        left: scroll.horizontal.percentage.value
      }),
      setScrollPosition: localSetScrollPosition,
      setScrollPercentage(axis, percentage, duration) {
        localSetScrollPosition(
          axis,
          percentage * (scroll[axis].size.value - container[axis].value) * (axis === "horizontal" && proxy.$q.lang.rtl === true ? -1 : 1),
          duration
        );
      }
    });
    return () => {
      return h("div", {
        class: classes.value,
        onMouseenter,
        onMouseleave
      }, [
        h("div", {
          ref: targetRef,
          class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
          tabindex: props.tabindex !== void 0 ? props.tabindex : void 0
        }, [
          h("div", {
            class: "q-scrollarea__content absolute",
            style: mainStyle.value
          }, hMergeSlot(slots.default, [
            h(QResizeObserver, {
              debounce: 0,
              onResize: updateScrollSize
            })
          ])),
          h(QScrollObserver, {
            axis: "both",
            onScroll: updateScroll
          })
        ]),
        h(QResizeObserver, {
          debounce: 0,
          onResize: updateContainer
        }),
        h("div", {
          class: scroll.vertical.barClass.value,
          style: [props.barStyle, props.verticalBarStyle],
          "aria-hidden": "true",
          onMousedown: onVerticalMousedown
        }),
        h("div", {
          class: scroll.horizontal.barClass.value,
          style: [props.barStyle, props.horizontalBarStyle],
          "aria-hidden": "true",
          onMousedown: onHorizontalMousedown
        }),
        withDirectives(
          h("div", {
            ref: scroll.vertical.ref,
            class: scroll.vertical.thumbClass.value,
            style: scroll.vertical.style.value,
            "aria-hidden": "true"
          }),
          thumbVertDir
        ),
        withDirectives(
          h("div", {
            ref: scroll.horizontal.ref,
            class: scroll.horizontal.thumbClass.value,
            style: scroll.horizontal.style.value,
            "aria-hidden": "true"
          }),
          thumbHorizDir
        )
      ]);
    };
  }
});
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new argument.constructor(+argument);
  } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
    return new Date(argument);
  } else {
    return new Date(NaN);
  }
}
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}
const minutesInMonth = 43200;
const minutesInDay = 1440;
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const diff = _dateLeft.getTime() - _dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
function constructNow(date) {
  return constructFrom(date, Date.now());
}
function differenceInCalendarMonths(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}
function differenceInMilliseconds(dateLeft, dateRight) {
  return +toDate(dateLeft) - +toDate(dateRight);
}
function endOfDay(date) {
  const _date = toDate(date);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfMonth(date) {
  const _date = toDate(date);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function isLastDayOfMonth(date) {
  const _date = toDate(date);
  return +endOfDay(_date) === +endOfMonth(_date);
}
function differenceInMonths(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const sign = compareAsc(_dateLeft, _dateRight);
  const difference = Math.abs(
    differenceInCalendarMonths(_dateLeft, _dateRight)
  );
  let result;
  if (difference < 1) {
    result = 0;
  } else {
    if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
      _dateLeft.setDate(30);
    }
    _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
    let isLastMonthNotFull = compareAsc(_dateLeft, _dateRight) === -sign;
    if (isLastDayOfMonth(toDate(dateLeft)) && difference === 1 && compareAsc(dateLeft, _dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }
  return result === 0 ? 0 : result;
}
function differenceInSeconds(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
  return getRoundingMethod(options == null ? void 0 : options.roundingMethod)(diff);
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance$1 = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options == null ? void 0 : options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : findKey(parsePatterns, (pattern) => pattern.test(matchedString));
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const enUS = {
  code: "en-US",
  formatDistance: formatDistance$1,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function formatDistance(date, baseDate, options) {
  var _a, _b;
  const defaultOptions2 = getDefaultOptions();
  const locale = (_b = (_a = options == null ? void 0 : options.locale) != null ? _a : defaultOptions2.locale) != null ? _b : enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(date, baseDate);
  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options == null ? void 0 : options.addSuffix,
    comparison
  });
  let dateLeft;
  let dateRight;
  if (comparison > 0) {
    dateLeft = toDate(baseDate);
    dateRight = toDate(date);
  } else {
    dateLeft = toDate(date);
    dateRight = toDate(baseDate);
  }
  const seconds = differenceInSeconds(dateRight, dateLeft);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options == null ? void 0 : options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(dateRight, dateLeft);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}
function formatDistanceToNow(date, options) {
  return formatDistance(date, constructNow(date), options);
}
const usePlaylistPageController = (initialState) => {
  console.log("Controller Instantiated");
  const controller = useLoadableController();
  const inputModel = ref(initialState);
  const load = async (state) => {
    var _a;
    console.log("Controller Loading due to load call");
    controller.setLoading();
    const blockSize = 50;
    try {
      const playlistInfo = await playlistService.getPlaylist(state.playlistId);
      if (!playlistInfo) {
        throw new Error("Playlist not found");
      }
      const allTrackIds = [];
      while (true) {
        const tracksIds = await playlistService.getPlaylistTracks(state.playlistId, allTrackIds.length, 50);
        if (tracksIds.length === 0) {
          break;
        }
        allTrackIds.push(...tracksIds);
      }
      const albumsApi = new AlbumApi((_a = apiConfigurationProvider) == null ? void 0 : _a.getApiConfiguration());
      const playlistTracks = [];
      for (let i = 0; i < allTrackIds.length; i += blockSize) {
        const block = allTrackIds.slice(i, i + blockSize);
        const tracks = await albumsApi.getTracks(
          {
            requestBody: block
          }
        );
        playlistTracks.push(...tracks.tracks);
      }
      const viewModel = {
        playlistId: state.playlistId,
        playlistInfo,
        playlistTotalTracks: allTrackIds.length,
        playlistTracks,
        playlistTracksTransformed: playlistTracks.map((track) => {
          return TrackInfo.fromTrackReadDto(track);
        })
      };
      controller.setSuccess(viewModel);
    } catch (e) {
      controller.setError(e);
    }
  };
  const changePlaylist = async (playlistId) => {
    inputModel.value = {
      ...inputModel.value,
      playlistId
    };
  };
  const changePlaylistName = async (name) => {
    var _a, _b;
    const playlistApi = new PlaylistApi((_a = apiConfigurationProvider) == null ? void 0 : _a.getApiConfiguration());
    await playlistApi.updatePlaylistInfo(
      {
        playlistId: inputModel.value.playlistId,
        playlistInfo: {
          name,
          visibility: (_b = controller.state.value) == null ? void 0 : _b.playlistInfo.visibility
        }
      }
    );
  };
  const changePlaylistVisibility = async (visibility) => {
    var _a, _b;
    const playlistApi = new PlaylistApi((_a = apiConfigurationProvider) == null ? void 0 : _a.getApiConfiguration());
    await playlistApi.updatePlaylistInfo(
      {
        playlistId: inputModel.value.playlistId,
        playlistInfo: {
          name: (_b = controller.state.value) == null ? void 0 : _b.playlistInfo.name,
          visibility
        }
      }
    );
  };
  watch(
    inputModel,
    async (newInputModel, oldInputModel) => {
      console.dir({ newInputModel, oldInputModel });
      await load(newInputModel);
    },
    {
      deep: true
    }
  );
  load(initialState);
  return {
    controller,
    inputModel,
    load,
    changePlaylist,
    changePlaylistName,
    changePlaylistVisibility
  };
};
var PlaylistPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-ff8c9fe0"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "row full-height",
  style: { "min-height": "inherit" }
};
const _hoisted_2 = {
  class: "col-3 col-lg-3 col-xl-2",
  style: { "min-height": "inherit" }
};
const _hoisted_3 = { class: "full-height" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, " \xB7 ", -1));
const _hoisted_5 = { class: "row flex" };
const _hoisted_6 = {
  class: "col-9",
  style: { "min-height": "inherit" }
};
const _hoisted_7 = ["src"];
const _sfc_main = defineComponent({
  __name: "PlaylistPage",
  setup(__props) {
    const playlistVisiblityDropdownOptions = [
      {
        label: "Public",
        value: PlaylistVisibility.Public
      },
      {
        label: "Private",
        value: PlaylistVisibility.Private
      },
      {
        label: "Unlisted",
        value: PlaylistVisibility.Unlisted
      }
    ];
    const playlistVisibility = ref(PlaylistVisibility.Public);
    const $router = useRouter();
    const playlistService2 = inject("playlistService");
    if (!playlistService2) {
      throw new Error("Playlist service not found");
    }
    const routeParams = {
      playlistId: computed(() => $router.currentRoute.value.params.playlistId)
    };
    let controller;
    onBeforeMount(() => {
      controller = usePlaylistPageController(
        {
          playlistId: routeParams.playlistId.value
        }
      );
    });
    watch(routeParams.playlistId, (newPlaylistId) => {
      if (controller) {
        controller.changePlaylist(newPlaylistId);
      }
    });
    return (_ctx, _cache) => {
      const QCard_title = resolveComponent("q-card-title");
      const QCard_main = resolveComponent("q-card-main");
      const _component_q_markup = resolveComponent("q-markup");
      return unref(controller) ? (openBlock(), createBlock(QPage, { key: 0 }, {
        default: withCtx(() => [
          createVNode(LoadableElement, {
            "state-controller": unref(controller).controller
          }, {
            loading: withCtx(() => [
              createVNode(QSpinnerGears, { size: "100px" })
            ]),
            default: withCtx(({ data }) => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(QCard, {
                      bordered: "",
                      class: "my-card q-ma-lg",
                      flat: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "q-pa-sm" }, {
                          default: withCtx(() => [
                            createVNode(QCardSection, {
                              horizontal: "",
                              class: "q-pa-md"
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(QImg, {
                                    class: "col",
                                    ratio: 1,
                                    src: (_a = data == null ? void 0 : data.playlistTracksTransformed[0].thumbnails) == null ? void 0 : _a.large
                                  }, null, 8, ["src"])
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(QCardSection, { class: "q-px-md q-py-none" }, {
                              default: withCtx(() => [
                                createVNode(QCard_title, { class: "text-h5" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data == null ? void 0 : data.playlistInfo.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QCardSection, { class: "q-px-md q-py-sm" }, {
                              default: withCtx(() => [
                                createVNode(QCard_title, { class: "text-subtitle2" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createTextVNode("By " + toDisplayString((_a = data == null ? void 0 : data.playlistInfo.owner) == null ? void 0 : _a.displayName), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QCardSection, { class: "q-px-md q-py-none" }, {
                              default: withCtx(() => [
                                createVNode(QCard_main, { class: "text-caption" })
                              ]),
                              _: 1
                            }),
                            createVNode(QCardSection, { class: "q-px-md q-py-none" }, {
                              default: withCtx(() => [
                                createVNode(QCard_main, { class: "text-caption" }, {
                                  default: withCtx(() => [
                                    createBaseVNode("span", null, toDisplayString(data == null ? void 0 : data.playlistTotalTracks) + " Songs ", 1),
                                    _hoisted_4,
                                    createBaseVNode("span", null, " Updated " + toDisplayString(unref(formatDistanceToNow)(data == null ? void 0 : data.playlistInfo.lastModified)) + " ago ", 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QCardSection, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_5, [
                                  createVNode(QSelect, {
                                    modelValue: playlistVisibility.value,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => playlistVisibility.value = $event),
                                    options: playlistVisiblityDropdownOptions,
                                    "emit-value": "",
                                    borderless: "",
                                    dense: ""
                                  }, null, 8, ["modelValue"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QCardActions, { align: "evenly" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              outline: "",
                              class: "col-5"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Play All ")
                              ]),
                              _: 1
                            }),
                            createVNode(QBtn, {
                              outline: "",
                              class: "col-5"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Shuffle ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(QScrollArea, { class: "fit" }, {
                    default: withCtx(() => [
                      (data == null ? void 0 : data.playlistTracksTransformed) ? (openBlock(), createBlock(QList, { key: 0 }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(data == null ? void 0 : data.playlistTracksTransformed, (track, index) => {
                            return openBlock(), createBlock(QItem, {
                              clickable: "",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, { side: "" }, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, { avatar: "" }, {
                                  default: withCtx(() => [
                                    createVNode(QAvatar, {
                                      rounded: "",
                                      size: "58px"
                                    }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createBaseVNode("img", {
                                            src: (_a = track.thumbnails) == null ? void 0 : _a.small
                                          }, null, 8, _hoisted_7)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, { class: "text-subtitle1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(track.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, {
                                      caption: "",
                                      lines: "1",
                                      class: "text-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(track.albumName), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, {
                                      caption: "",
                                      lines: "1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(track.circle.map((c) => c.name).join(", ")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            error: withCtx(({ error }) => [
              createVNode(QCard, {
                class: "q-ma-md",
                style: { "max-width": "400px" }
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(QCard_title, { class: "text-h6" }, {
                        default: withCtx(() => [
                          createTextVNode("Error")
                        ]),
                        _: 1
                      }),
                      createVNode(QCard_main, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_markup, {
                            value: error == null ? void 0 : error.message
                          }, null, 8, ["value"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QSeparator, { inset: "" }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(error == null ? void 0 : error.stack), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["state-controller"])
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var PlaylistPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff8c9fe0"], ["__file", "PlaylistPage.vue"]]);
export { PlaylistPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RQYWdlLmJiMGQ5ZTFiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Njcm9sbC1hcmVhL1FTY3JvbGxBcmVhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbXBhcmVBc2MubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdE5vdy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0Um91bmRpbmdNZXRob2QubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kT2ZEYXkubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZE9mTW9udGgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzTGFzdERheU9mTW9udGgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1vbnRocy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluU2Vjb25kcy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXREaXN0YW5jZS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vdy5tanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9QbGF5bGlzdFBhZ2UvUGxheWxpc3RQYWdlQ29udHJvbGxlci50cyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9QbGF5bGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCB3aXRoRGlyZWN0aXZlcywgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuXG5jb25zdCBheGlzTGlzdCA9IFsgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnIF1cbmNvbnN0IGRpclByb3BzID0ge1xuICB2ZXJ0aWNhbDogeyBvZmZzZXQ6ICdvZmZzZXRZJywgc2Nyb2xsOiAnc2Nyb2xsVG9wJywgZGlyOiAnZG93bicsIGRpc3Q6ICd5JyB9LFxuICBob3Jpem9udGFsOiB7IG9mZnNldDogJ29mZnNldFgnLCBzY3JvbGw6ICdzY3JvbGxMZWZ0JywgZGlyOiAncmlnaHQnLCBkaXN0OiAneCcgfVxufVxuY29uc3QgcGFuT3B0cyA9IHtcbiAgcHJldmVudDogdHJ1ZSxcbiAgbW91c2U6IHRydWUsXG4gIG1vdXNlQWxsRGlyOiB0cnVlXG59XG5cbmNvbnN0IGdldE1pblRodW1iU2l6ZSA9IHNpemUgPT4gKHNpemUgPj0gMjUwID8gNTAgOiBNYXRoLmNlaWwoc2l6ZSAvIDUpKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbEFyZWEnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgdGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIHZlcnRpY2FsVGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIGhvcml6b250YWxUaHVtYlN0eWxlOiBPYmplY3QsXG5cbiAgICBiYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICB2ZXJ0aWNhbEJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhvcml6b250YWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGNvbnRlbnRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50QWN0aXZlU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBkZWxheToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG5cbiAgICB2aXNpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgb25TY3JvbGw6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICAvLyBzdGF0ZSBtYW5hZ2VtZW50XG4gICAgY29uc3QgdGVtcFNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgcGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBob3ZlciA9IHJlZihmYWxzZSlcblxuICAgIC8vIG90aGVyLi4uXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgdmVydGljYWw6IHJlZigwKSxcbiAgICAgIGhvcml6b250YWw6IHJlZigwKVxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH0sXG5cbiAgICAgIGhvcml6b250YWw6IHtcbiAgICAgICAgcmVmOiByZWYobnVsbCksXG4gICAgICAgIHBvc2l0aW9uOiByZWYoMCksXG4gICAgICAgIHNpemU6IHJlZigwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcblxuICAgIGxldCB0aW1lciA9IG51bGwsIHBhblJlZlBvc1xuXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWEnXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYS0tZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBzY3JvbGwudmVydGljYWwucGVyY2VudGFnZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpZmYgPSBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSAtIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgLyBkaWZmLCAwLCAxKVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQocCAqIDEwMDAwKSAvIDEwMDAwXG4gICAgfSlcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgKFxuICAgICAgICAocHJvcHMudmlzaWJsZSA9PT0gbnVsbCA/IGhvdmVyLnZhbHVlIDogcHJvcHMudmlzaWJsZSkgIT09IHRydWVcbiAgICAgICAgJiYgdGVtcFNob3dpbmcudmFsdWUgPT09IGZhbHNlXG4gICAgICAgICYmIHBhbm5pbmcudmFsdWUgPT09IGZhbHNlXG4gICAgICApIHx8IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIDw9IGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSArIDFcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU3RhcnQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUgKiAoY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC0gc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZS52YWx1ZSlcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBNYXRoLnJvdW5kKFxuICAgICAgICBiZXR3ZWVuKFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAqIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAvIHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlLFxuICAgICAgICAgIGdldE1pblRodW1iU2l6ZShjb250YWluZXIudmVydGljYWwudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzLnRodW1iU3R5bGUsXG4gICAgICAgIC4uLnByb3BzLnZlcnRpY2FsVGh1bWJTdHlsZSxcbiAgICAgICAgdG9wOiBgJHsgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU3RhcnQudmFsdWUgfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHsgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZS52YWx1ZSB9cHhgXG4gICAgICB9XG4gICAgfSlcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhX190aHVtYiBxLXNjcm9sbGFyZWFfX3RodW1iLS12IGFic29sdXRlLXJpZ2h0J1xuICAgICAgKyAoc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX3RodW1iLS1pbnZpc2libGUnIDogJycpXG4gICAgKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC5iYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhX19iYXIgcS1zY3JvbGxhcmVhX19iYXItLXYgYWJzb2x1dGUtcmlnaHQnXG4gICAgICArIChzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fYmFyLS1pbnZpc2libGUnIDogJycpXG4gICAgKVxuXG4gICAgc2Nyb2xsLmhvcml6b250YWwucGVyY2VudGFnZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpZmYgPSBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLmhvcml6b250YWwudmFsdWVcbiAgICAgIGlmIChkaWZmIDw9IDApIHsgcmV0dXJuIDAgfVxuICAgICAgY29uc3QgcCA9IGJldHdlZW4oTWF0aC5hYnMoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUpIC8gZGlmZiwgMCwgMSlcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHAgKiAxMDAwMCkgLyAxMDAwMFxuICAgIH0pXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgKFxuICAgICAgICAocHJvcHMudmlzaWJsZSA9PT0gbnVsbCA/IGhvdmVyLnZhbHVlIDogcHJvcHMudmlzaWJsZSkgIT09IHRydWVcbiAgICAgICAgJiYgdGVtcFNob3dpbmcudmFsdWUgPT09IGZhbHNlXG4gICAgICAgICYmIHBhbm5pbmcudmFsdWUgPT09IGZhbHNlXG4gICAgICApIHx8IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgPD0gY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgKyAxXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU3RhcnQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgc2Nyb2xsLmhvcml6b250YWwucGVyY2VudGFnZS52YWx1ZSAqIChjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAtIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZS52YWx1ZSlcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIE1hdGgucm91bmQoXG4gICAgICAgIGJldHdlZW4oXG4gICAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgKiBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAvIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlKSxcbiAgICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcHMudGh1bWJTdHlsZSxcbiAgICAgICAgLi4ucHJvcHMuaG9yaXpvbnRhbFRodW1iU3R5bGUsXG4gICAgICAgIFsgcHJveHkuJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF06IGAkeyBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlN0YXJ0LnZhbHVlIH1weGAsXG4gICAgICAgIHdpZHRoOiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplLnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fdGh1bWIgcS1zY3JvbGxhcmVhX190aHVtYi0taCBhYnNvbHV0ZS1ib3R0b20nXG4gICAgICArIChzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX190aHVtYi0taW52aXNpYmxlJyA6ICcnKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhX19iYXIgcS1zY3JvbGxhcmVhX19iYXItLWggYWJzb2x1dGUtYm90dG9tJ1xuICAgICAgKyAoc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fYmFyLS1pbnZpc2libGUnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbWFpblN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlICYmIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29udGVudFN0eWxlXG4gICAgICAgIDogcHJvcHMuY29udGVudEFjdGl2ZVN0eWxlXG4gICAgKSlcblxuICAgIGNvbnN0IHRodW1iVmVydERpciA9IFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAndmVydGljYWwnKSB9LFxuICAgICAgdm9pZCAwLFxuICAgICAgeyB2ZXJ0aWNhbDogdHJ1ZSwgLi4ucGFuT3B0cyB9XG4gICAgXSBdXG5cbiAgICBjb25zdCB0aHVtYkhvcml6RGlyID0gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIGUgPT4geyBvblBhblRodW1iKGUsICdob3Jpem9udGFsJykgfSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHsgaG9yaXpvbnRhbDogdHJ1ZSwgLi4ucGFuT3B0cyB9XG4gICAgXSBdXG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwgKCkge1xuICAgICAgY29uc3QgaW5mbyA9IHt9XG5cbiAgICAgIGF4aXNMaXN0LmZvckVhY2goYXhpcyA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICAgIGluZm9bIGF4aXMgKyAnUG9zaXRpb24nIF0gPSBkYXRhLnBvc2l0aW9uLnZhbHVlXG4gICAgICAgIGluZm9bIGF4aXMgKyAnUGVyY2VudGFnZScgXSA9IGRhdGEucGVyY2VudGFnZS52YWx1ZVxuICAgICAgICBpbmZvWyBheGlzICsgJ1NpemUnIF0gPSBkYXRhLnNpemUudmFsdWVcbiAgICAgICAgaW5mb1sgYXhpcyArICdDb250YWluZXJTaXplJyBdID0gY29udGFpbmVyWyBheGlzIF0udmFsdWVcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBpbmZvXG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSBsb3RzIG9mIGxpc3RlbmVycywgc29cbiAgICAvLyBlbnN1cmUgd2UncmUgbm90IGVtaXR0aW5nIHNhbWUgaW5mb1xuICAgIC8vIG11bHRpcGxlIHRpbWVzXG4gICAgY29uc3QgZW1pdFNjcm9sbCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNvbnN0IGluZm8gPSBnZXRTY3JvbGwoKVxuICAgICAgaW5mby5yZWYgPSBwcm94eVxuICAgICAgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICB9LCAwKVxuXG4gICAgZnVuY3Rpb24gbG9jYWxTZXRTY3JvbGxQb3NpdGlvbiAoYXhpcywgb2Zmc2V0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGF4aXNMaXN0LmluY2x1ZGVzKGF4aXMpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbUVNjcm9sbEFyZWFdOiB3cm9uZyBmaXJzdCBwYXJhbSBvZiBzZXRTY3JvbGxQb3NpdGlvbiAodmVydGljYWwvaG9yaXpvbnRhbCknKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSBheGlzID09PSAndmVydGljYWwnXG4gICAgICAgID8gc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvblxuICAgICAgICA6IHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvblxuXG4gICAgICBmbih0YXJnZXRSZWYudmFsdWUsIG9mZnNldCwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyICh7IGhlaWdodCwgd2lkdGggfSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXG5cbiAgICAgIGlmIChjb250YWluZXIudmVydGljYWwudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBjb250YWluZXIudmVydGljYWwudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlID0gd2lkdGhcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgc3RhcnRUaW1lcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsICh7IHBvc2l0aW9uIH0pIHtcbiAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZVxuXG4gICAgICBpZiAoc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlICE9PSBwb3NpdGlvbi50b3ApIHtcbiAgICAgICAgc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb24udG9wXG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlICE9PSBwb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb24ubGVmdFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBzdGFydFRpbWVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxTaXplICh7IGhlaWdodCwgd2lkdGggfSkge1xuICAgICAgaWYgKHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgPSB3aWR0aFxuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgc3RhcnRUaW1lcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYW5UaHVtYiAoZSwgYXhpcykge1xuICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgIGlmIChlLmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGRhdGEudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHBhblJlZlBvcyA9IGRhdGEucG9zaXRpb24udmFsdWVcbiAgICAgICAgcGFubmluZy52YWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbm5pbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlLmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgcGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRQcm9wID0gZGlyUHJvcHNbIGF4aXMgXVxuICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlXG5cbiAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAoZGF0YS5zaXplLnZhbHVlIC0gY29udGFpbmVyU2l6ZSkgLyAoY29udGFpbmVyU2l6ZSAtIGRhdGEudGh1bWJTaXplLnZhbHVlKVxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBlLmRpc3RhbmNlWyBkUHJvcC5kaXN0IF1cbiAgICAgIGNvbnN0IHBvcyA9IHBhblJlZlBvcyArIChlLmRpcmVjdGlvbiA9PT0gZFByb3AuZGlyID8gMSA6IC0xKSAqIGRpc3RhbmNlICogbXVsdGlwbGllclxuXG4gICAgICBzZXRTY3JvbGwocG9zLCBheGlzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2Vkb3duIChldnQsIGF4aXMpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICBpZiAoZGF0YS50aHVtYkhpZGRlbi52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBldnRbIGRpclByb3BzWyBheGlzIF0ub2Zmc2V0IF1cbiAgICAgICAgaWYgKG9mZnNldCA8IGRhdGEudGh1bWJTdGFydC52YWx1ZSB8fCBvZmZzZXQgPiBkYXRhLnRodW1iU3RhcnQudmFsdWUgKyBkYXRhLnRodW1iU2l6ZS52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHBvcyA9IG9mZnNldCAtIGRhdGEudGh1bWJTaXplLnZhbHVlIC8gMlxuICAgICAgICAgIHNldFNjcm9sbChwb3MgLyBjb250YWluZXJbIGF4aXMgXS52YWx1ZSAqIGRhdGEuc2l6ZS52YWx1ZSwgYXhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjdGl2YXRlIHRodW1iIHBhblxuICAgICAgICBpZiAoZGF0YS5yZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBkYXRhLnJlZi52YWx1ZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KGV2dC50eXBlLCBldnQpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25WZXJ0aWNhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICBvbk1vdXNlZG93bihldnQsICd2ZXJ0aWNhbCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ib3Jpem9udGFsTW91c2Vkb3duIChldnQpIHtcbiAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ2hvcml6b250YWwnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIgKCkge1xuICAgICAgdGVtcFNob3dpbmcudmFsdWUgPSB0cnVlXG5cbiAgICAgIHRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICB0ZW1wU2hvd2luZy52YWx1ZSA9IGZhbHNlXG4gICAgICB9LCBwcm9wcy5kZWxheSlcblxuICAgICAgcHJvcHMub25TY3JvbGwgIT09IHZvaWQgMCAmJiBlbWl0U2Nyb2xsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGwgKG9mZnNldCwgYXhpcykge1xuICAgICAgdGFyZ2V0UmVmLnZhbHVlWyBkaXJQcm9wc1sgYXhpcyBdLnNjcm9sbCBdID0gb2Zmc2V0XG4gICAgfVxuXG4gICAgbGV0IG1vdXNlRXZlbnRUaW1lciA9IG51bGxcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VlbnRlciAoKSB7XG4gICAgICBpZiAobW91c2VFdmVudFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChtb3VzZUV2ZW50VGltZXIpXG4gICAgICB9XG5cbiAgICAgIC8vIHNldFRpbWVvdXQgbmVlZGVkIGZvciBpT1M7IHNlZSB0aWNrZXQgIzE2MjEwXG4gICAgICBtb3VzZUV2ZW50VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbW91c2VFdmVudFRpbWVyID0gbnVsbFxuICAgICAgICBob3Zlci52YWx1ZSA9IHRydWVcbiAgICAgIH0sIHByb3h5LiRxLnBsYXRmb3JtLmlzLmlvcyA/IDUwIDogMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlbGVhdmUgKCkge1xuICAgICAgaWYgKG1vdXNlRXZlbnRUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQobW91c2VFdmVudFRpbWVyKVxuICAgICAgICBtb3VzZUV2ZW50VGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGhvdmVyLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBudWxsXG5cbiAgICB3YXRjaCgoKSA9PiBwcm94eS4kcS5sYW5nLnJ0bCwgcnRsID0+IHtcbiAgICAgIGlmICh0YXJnZXRSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKFxuICAgICAgICAgIHRhcmdldFJlZi52YWx1ZSxcbiAgICAgICAgICBNYXRoLmFicyhzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSkgKiAocnRsID09PSB0cnVlID8gLTEgOiAxKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2Nyb2xsUG9zaXRpb24gPSB7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSB0YXJnZXRSZWYudmFsdWVcblxuICAgICAgaWYgKHNjcm9sbFRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24oc2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbi5sZWZ0KVxuICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zaXRpb24udG9wKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoZW1pdFNjcm9sbC5jYW5jZWwpXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBnZXRTY3JvbGxUYXJnZXQ6ICgpID0+IHRhcmdldFJlZi52YWx1ZSxcbiAgICAgIGdldFNjcm9sbCxcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uOiAoKSA9PiAoe1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH0pLFxuICAgICAgZ2V0U2Nyb2xsUGVyY2VudGFnZTogKCkgPT4gKHtcbiAgICAgICAgdG9wOiBzY3JvbGwudmVydGljYWwucGVyY2VudGFnZS52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucGVyY2VudGFnZS52YWx1ZVxuICAgICAgfSksXG4gICAgICBzZXRTY3JvbGxQb3NpdGlvbjogbG9jYWxTZXRTY3JvbGxQb3NpdGlvbixcbiAgICAgIHNldFNjcm9sbFBlcmNlbnRhZ2UgKGF4aXMsIHBlcmNlbnRhZ2UsIGR1cmF0aW9uKSB7XG4gICAgICAgIGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24oXG4gICAgICAgICAgYXhpcyxcbiAgICAgICAgICBwZXJjZW50YWdlXG4gICAgICAgICAgICAqIChzY3JvbGxbIGF4aXMgXS5zaXplLnZhbHVlIC0gY29udGFpbmVyWyBheGlzIF0udmFsdWUpXG4gICAgICAgICAgICAqIChheGlzID09PSAnaG9yaXpvbnRhbCcgJiYgcHJveHkuJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpLFxuICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBvbk1vdXNlZW50ZXIsXG4gICAgICAgIG9uTW91c2VsZWF2ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiB0YXJnZXRSZWYsXG4gICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRhaW5lciBzY3JvbGwgcmVsYXRpdmUtcG9zaXRpb24gZml0IGhpZGUtc2Nyb2xsYmFyJyxcbiAgICAgICAgICB0YWJpbmRleDogcHJvcHMudGFiaW5kZXggIT09IHZvaWQgMCA/IHByb3BzLnRhYmluZGV4IDogdm9pZCAwXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3Etc2Nyb2xsYXJlYV9fY29udGVudCBhYnNvbHV0ZScsXG4gICAgICAgICAgICBzdHlsZTogbWFpblN0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICAgICAgb25SZXNpemU6IHVwZGF0ZVNjcm9sbFNpemVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSkpLFxuXG4gICAgICAgICAgaChRU2Nyb2xsT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgIGF4aXM6ICdib3RoJyxcbiAgICAgICAgICAgIG9uU2Nyb2xsOiB1cGRhdGVTY3JvbGxcbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVDb250YWluZXJcbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBzY3JvbGwudmVydGljYWwuYmFyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLnZlcnRpY2FsQmFyU3R5bGUgXSxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgb25Nb3VzZWRvd246IG9uVmVydGljYWxNb3VzZWRvd25cbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBzY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogWyBwcm9wcy5iYXJTdHlsZSwgcHJvcHMuaG9yaXpvbnRhbEJhclN0eWxlIF0sXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgIG9uTW91c2Vkb3duOiBvbkhvcml6b250YWxNb3VzZWRvd25cbiAgICAgICAgfSksXG5cbiAgICAgICAgd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgcmVmOiBzY3JvbGwudmVydGljYWwucmVmLFxuICAgICAgICAgICAgY2xhc3M6IHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHNjcm9sbC52ZXJ0aWNhbC5zdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRodW1iVmVydERpclxuICAgICAgICApLFxuXG4gICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogc2Nyb2xsLmhvcml6b250YWwucmVmLFxuICAgICAgICAgICAgY2xhc3M6IHNjcm9sbC5ob3Jpem9udGFsLnRodW1iQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogc2Nyb2xsLmhvcml6b250YWwuc3R5bGUudmFsdWUsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aHVtYkhvcml6RGlyXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKlxuICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3QgZGlmZiA9IF9kYXRlTGVmdC5nZXRUaW1lKCkgLSBfZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVBc2M7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3ROb3dcbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBwYXNzZWQgdmFsdWUgY29uc3RydWN0b3IuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiB0aGUgcmVmZXJlbmNlIGRhdGUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGRhdGVcbiAqIGV4dGVuc2lvbnMgYW5kIHVzZSB0aGUgY3VycmVudCBkYXRlLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICpcbiAqIEByZXR1cm5zIEN1cnJlbnQgZGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBjb25zdHJ1Y3RvclxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3ROb3csIGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIGZ1bmN0aW9uIGlzVG9kYXk8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihcbiAqICAgZGF0ZTogRGF0ZVR5cGUgfCBudW1iZXIgfCBzdHJpbmcsXG4gKiApOiBib29sZWFuIHtcbiAqICAgLy8gSWYgd2Ugd2VyZSB0byB1c2UgYG5ldyBEYXRlKClgIGRpcmVjdGx5LCB0aGUgZnVuY3Rpb24gd291bGQgIGJlaGF2ZVxuICogICAvLyBkaWZmZXJlbnRseSBpbiBkaWZmZXJlbnQgdGltZXpvbmVzIGFuZCByZXR1cm4gZmFsc2UgZm9yIHRoZSBzYW1lIGRhdGUuXG4gKiAgIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgY29uc3RydWN0Tm93KGRhdGUpKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5vdyhkYXRlKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdE5vdztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3QgeWVhckRpZmYgPSBfZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIF9kYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGhEaWZmID0gX2RhdGVMZWZ0LmdldE1vbnRoKCkgLSBfZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG5cbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHM7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiAobnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgcm91bmQgPSBtZXRob2QgPyBNYXRoW21ldGhvZF0gOiBNYXRoLnRydW5jO1xuICAgIGNvbnN0IHJlc3VsdCA9IHJvdW5kKG51bWJlcik7XG4gICAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZUxlZnQpIC0gK3RvRGF0ZShkYXRlUmlnaHQpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZW5kIG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5kT2ZEYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZW5kIG9mIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IG1vbnRoID0gX2RhdGUuZ2V0TW9udGgoKTtcbiAgX2RhdGUuc2V0RnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgX2RhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuZE9mTW9udGg7XG4iLCJpbXBvcnQgeyBlbmRPZkRheSB9IGZyb20gXCIuL2VuZE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZW5kT2ZNb250aCB9IGZyb20gXCIuL2VuZE9mTW9udGgubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgcmV0dXJuICtlbmRPZkRheShfZGF0ZSkgPT09ICtlbmRPZk1vbnRoKF9kYXRlKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0xhc3REYXlPZk1vbnRoO1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYyB9IGZyb20gXCIuL2NvbXBhcmVBc2MubWpzXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzLm1qc1wiO1xuaW1wb3J0IHsgaXNMYXN0RGF5T2ZNb250aCB9IGZyb20gXCIuL2lzTGFzdERheU9mTW9udGgubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyB1c2luZyB0cnVuYyBhcyBhIGRlZmF1bHQgcm91bmRpbmcgbWV0aG9kLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBzaWduID0gY29tcGFyZUFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpO1xuICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoXG4gICAgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSxcbiAgKTtcbiAgbGV0IHJlc3VsdDtcblxuICAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKF9kYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIF9kYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgX2RhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cblxuICAgIF9kYXRlTGVmdC5zZXRNb250aChfZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTtcblxuICAgIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuICAgIGxldCBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkgPT09IC1zaWduO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG4gICAgaWYgKFxuICAgICAgaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGF0ZUxlZnQpKSAmJlxuICAgICAgZGlmZmVyZW5jZSA9PT0gMSAmJlxuICAgICAgY29tcGFyZUFzYyhkYXRlTGVmdCwgX2RhdGVSaWdodCkgPT09IDFcbiAgICApIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5Nb250aHM7XG4iLCJpbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuL19saWIvZ2V0Um91bmRpbmdNZXRob2QubWpzXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBkaWZmZXJlbmNlSW5TZWNvbmRzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zPy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluU2Vjb25kcztcbiIsImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tIFwiLi9jb21wYXJlQXNjLm1qc1wiO1xuaW1wb3J0IHsgbWludXRlc0luRGF5LCBtaW51dGVzSW5Nb250aCB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1vbnRocyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbk1vbnRocy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJblNlY29uZHMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5TZWNvbmRzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXREaXN0YW5jZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGVcbiAqIEBwYXJhbSBiYXNlRGF0ZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgbWludXRlc0luQWxtb3N0VHdvRGF5cyA9IDI1MjA7XG5cbiAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGF0ZSwgYmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgY29uc3QgbG9jYWxpemVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgIGFkZFN1ZmZpeDogb3B0aW9ucz8uYWRkU3VmZml4LFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb24sXG4gIH0pO1xuXG4gIGxldCBkYXRlTGVmdDtcbiAgbGV0IGRhdGVSaWdodDtcbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoYmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoYmFzZURhdGUpO1xuICB9XG5cbiAgY29uc3Qgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIGNvbnN0IG9mZnNldEluU2Vjb25kcyA9XG4gICAgKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtXG4gICAgICBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgL1xuICAgIDEwMDA7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgbGV0IG1vbnRocztcblxuICAvLyAwIHVwIHRvIDIgbWluc1xuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucz8uaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YU2Vjb25kc1wiLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImxlc3NUaGFuWFNlY29uZHNcIiwgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YU2Vjb25kc1wiLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJoYWxmQU1pbnV0ZVwiLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImxlc3NUaGFuWE1pbnV0ZXNcIiwgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJ4TWludXRlc1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwibGVzc1RoYW5YTWludXRlc1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNaW51dGVzXCIsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNaW51dGVzXCIsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcImFib3V0WEhvdXJzXCIsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBtaW51dGVzSW5EYXkpIHtcbiAgICBjb25zdCBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwiYWJvdXRYSG91cnNcIiwgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luQWxtb3N0VHdvRGF5cykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJ4RGF5c1wiLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luTW9udGgpIHtcbiAgICBjb25zdCBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gbWludXRlc0luRGF5KTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwieERheXNcIiwgZGF5cywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgbWludXRlc0luTW9udGggKiAyKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gbWludXRlc0luTW9udGgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhYm91dFhNb250aHNcIiwgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuXG4gIC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICBjb25zdCBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBtaW51dGVzSW5Nb250aCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcInhNb250aHNcIiwgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIGNvbnN0IHllYXJzID0gTWF0aC50cnVuYyhtb250aHMgLyAxMik7XG5cbiAgICAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoXCJhYm91dFhZZWFyc1wiLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgICAgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZShcIm92ZXJYWWVhcnNcIiwgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAgIC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKFwiYWxtb3N0WFllYXJzXCIsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdE5vdyB9IGZyb20gXCIuL2NvbnN0cnVjdE5vdy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXREaXN0YW5jZVRvTm93fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqIClcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiBub3cgaXMgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSAwMDowMDoxNSwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIHtpbmNsdWRlU2Vjb25kczogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE2LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiBhYm91dCAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBBdWd1c3QgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiBjb25zdCBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCA3LCAxKSxcbiAqICAge2xvY2FsZTogZW9Mb2NhbGV9XG4gKiApXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXREaXN0YW5jZShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSksIG9wdGlvbnMpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlVG9Ob3c7XG4iLCJpbXBvcnQgeyBQbGF5bGlzdFJlYWREdG8sIFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL3NyYyc7XG5pbXBvcnQgeyBUcmFja0luZm8gfSBmcm9tICdzcmMvbW9kZWxzL1RyYWNrSW5mbyc7XG5pbXBvcnQgeyBQbGF5bGlzdFBhZ2VJbnB1dE1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvUGxheWxpc3RQYWdlSW5wdXRNb2RlbCc7XG5pbXBvcnQgeyBMb2FkYWJsZVN0YXRlLCB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCB7IFBsYXlsaXN0UGFnZVZpZXdNb2RlbCB9IGZyb20gJy4vbW9kZWxzL1BsYXlsaXN0UGFnZVZpZXdNb2RlbCc7XG5pbXBvcnQgeyBSZWYsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IFBsYXlsaXN0U2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1BsYXlsaXN0U2VydmljZSc7XG5pbXBvcnQgeyBBbGJ1bUFwaSwgUGxheWxpc3RBcGksIFBsYXlsaXN0SXRlbXNBcGksIFBsYXlsaXN0VmlzaWJpbGl0eSB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCAqIGFzIHNlcnZpY2VzIGZyb20gJ3NyYy9zZXJ2aWNlcy9fc2VydmljZXMnO1xuaW1wb3J0IHsgcGxheWxpc3RTZXJ2aWNlIH0gZnJvbSAnc3JjL3NlcnZpY2VzL19zZXJ2aWNlcyc7XG5cbmV4cG9ydCB0eXBlIFBsYXlsaXN0Q29udHJvbGxlciA9IHtcbiAgY29udHJvbGxlcjogTG9hZGFibGVTdGF0ZTxQbGF5bGlzdFBhZ2VWaWV3TW9kZWw+O1xuICBpbnB1dE1vZGVsOiBSZWY8UGxheWxpc3RQYWdlSW5wdXRNb2RlbD47XG5cbiAgbG9hZDogKHN0YXRlOiBQbGF5bGlzdFBhZ2VJbnB1dE1vZGVsKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VQbGF5bGlzdDogKHBsYXlsaXN0SWQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPixcbiAgY2hhbmdlUGxheWxpc3ROYW1lOiAobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VQbGF5bGlzdFZpc2liaWxpdHk6ICh2aXNpYmlsaXR5OiBQbGF5bGlzdFZpc2liaWxpdHkpID0+IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5bGlzdFBhZ2VDb250cm9sbGVyID0gKFxuICBpbml0aWFsU3RhdGU6IFBsYXlsaXN0UGFnZUlucHV0TW9kZWwsXG4pID0+IHtcbiAgY29uc29sZS5sb2coJ0NvbnRyb2xsZXIgSW5zdGFudGlhdGVkJylcbiAgY29uc3QgY29udHJvbGxlciA9IHVzZUxvYWRhYmxlQ29udHJvbGxlcjxQbGF5bGlzdFBhZ2VWaWV3TW9kZWw+KCk7XG4gIGNvbnN0IGlucHV0TW9kZWwgPSByZWYoaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBsb2FkID0gYXN5bmMgKHN0YXRlOiBQbGF5bGlzdFBhZ2VJbnB1dE1vZGVsKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NvbnRyb2xsZXIgTG9hZGluZyBkdWUgdG8gbG9hZCBjYWxsJyk7XG4gICAgY29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gICAgY29uc3QgYmxvY2tTaXplID0gNTA7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBsYXlsaXN0SW5mbyA9IGF3YWl0IHBsYXlsaXN0U2VydmljZS5nZXRQbGF5bGlzdChzdGF0ZS5wbGF5bGlzdElkKTtcblxuICAgICAgaWYgKCFwbGF5bGlzdEluZm8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5bGlzdCBub3QgZm91bmQnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWxsVHJhY2tJZHM6IHN0cmluZ1tdID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB0cmFja3NJZHMgPSBhd2FpdCBwbGF5bGlzdFNlcnZpY2UuZ2V0UGxheWxpc3RUcmFja3Moc3RhdGUucGxheWxpc3RJZCwgYWxsVHJhY2tJZHMubGVuZ3RoLCA1MCk7XG4gICAgICAgIGlmICh0cmFja3NJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBhbGxUcmFja0lkcy5wdXNoKC4uLnRyYWNrc0lkcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZldGNoIGFjdHVhbCB0cmFjayBpbmZvcyBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICAvLyBCbG9jayBzaXplIGlzIDUwLCBzbyB3ZSBuZWVkIHRvIGZldGNoIGluIGJsb2Nrc1xuICAgICAgY29uc3QgYWxidW1zQXBpID0gbmV3IEFsYnVtQXBpKHNlcnZpY2VzLmFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcj8uZ2V0QXBpQ29uZmlndXJhdGlvbigpKTtcbiAgICAgIGNvbnN0IHBsYXlsaXN0VHJhY2tzOiBUcmFja1JlYWREdG9bXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUcmFja0lkcy5sZW5ndGg7IGkgKz0gYmxvY2tTaXplKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYWxsVHJhY2tJZHMuc2xpY2UoaSwgaSArIGJsb2NrU2l6ZSk7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IGF3YWl0IGFsYnVtc0FwaS5nZXRUcmFja3MoXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGJsb2NrXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHBsYXlsaXN0VHJhY2tzLnB1c2goLi4udHJhY2tzLnRyYWNrcyEpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2aWV3TW9kZWwgPSB7XG4gICAgICAgIHBsYXlsaXN0SWQ6IHN0YXRlLnBsYXlsaXN0SWQsXG4gICAgICAgIHBsYXlsaXN0SW5mbyxcbiAgICAgICAgcGxheWxpc3RUb3RhbFRyYWNrczogYWxsVHJhY2tJZHMubGVuZ3RoLFxuICAgICAgICBwbGF5bGlzdFRyYWNrcyxcbiAgICAgICAgcGxheWxpc3RUcmFja3NUcmFuc2Zvcm1lZDogcGxheWxpc3RUcmFja3MubWFwKCh0cmFjaykgPT4ge1xuICAgICAgICAgIHJldHVybiBUcmFja0luZm8uZnJvbVRyYWNrUmVhZER0byh0cmFjayk7XG4gICAgICAgIH0pLFxuICAgICAgfVxuXG4gICAgICBjb250cm9sbGVyLnNldFN1Y2Nlc3Modmlld01vZGVsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb250cm9sbGVyLnNldEVycm9yKGUgYXMgRXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoYW5nZVBsYXlsaXN0ID0gYXN5bmMgKHBsYXlsaXN0SWQ6IHN0cmluZykgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgcGxheWxpc3RJZCxcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGFuZ2VQbGF5bGlzdE5hbWUgPSBhc3luYyAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcGxheWxpc3RBcGkgPSBuZXcgUGxheWxpc3RBcGkoc2VydmljZXMuYXBpQ29uZmlndXJhdGlvblByb3ZpZGVyPy5nZXRBcGlDb25maWd1cmF0aW9uKCkpO1xuXG4gICAgYXdhaXQgcGxheWxpc3RBcGkudXBkYXRlUGxheWxpc3RJbmZvKFxuICAgICAge1xuICAgICAgICBwbGF5bGlzdElkOiBpbnB1dE1vZGVsLnZhbHVlLnBsYXlsaXN0SWQsXG4gICAgICAgIHBsYXlsaXN0SW5mbzoge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgdmlzaWJpbGl0eTogY29udHJvbGxlci5zdGF0ZS52YWx1ZT8ucGxheWxpc3RJbmZvLnZpc2liaWxpdHksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBjb25zdCBjaGFuZ2VQbGF5bGlzdFZpc2liaWxpdHkgPSBhc3luYyAodmlzaWJpbGl0eTogUGxheWxpc3RWaXNpYmlsaXR5KSA9PiB7XG4gICAgY29uc3QgcGxheWxpc3RBcGkgPSBuZXcgUGxheWxpc3RBcGkoc2VydmljZXMuYXBpQ29uZmlndXJhdGlvblByb3ZpZGVyPy5nZXRBcGlDb25maWd1cmF0aW9uKCkpO1xuXG4gICAgYXdhaXQgcGxheWxpc3RBcGkudXBkYXRlUGxheWxpc3RJbmZvKFxuICAgICAge1xuICAgICAgICBwbGF5bGlzdElkOiBpbnB1dE1vZGVsLnZhbHVlLnBsYXlsaXN0SWQsXG4gICAgICAgIHBsYXlsaXN0SW5mbzoge1xuICAgICAgICAgIG5hbWU6IGNvbnRyb2xsZXIuc3RhdGUudmFsdWU/LnBsYXlsaXN0SW5mby5uYW1lLFxuICAgICAgICAgIHZpc2liaWxpdHksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgd2F0Y2goXG4gICAgaW5wdXRNb2RlbCxcbiAgICBhc3luYyAobmV3SW5wdXRNb2RlbCwgb2xkSW5wdXRNb2RlbCkgPT4ge1xuICAgICAgY29uc29sZS5kaXIoeyBuZXdJbnB1dE1vZGVsLCBvbGRJbnB1dE1vZGVsIH0pO1xuICAgICAgYXdhaXQgbG9hZChuZXdJbnB1dE1vZGVsKTtcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIGxvYWQoaW5pdGlhbFN0YXRlKTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXIsXG4gICAgaW5wdXRNb2RlbCxcbiAgICBsb2FkLFxuICAgIGNoYW5nZVBsYXlsaXN0LFxuICAgIGNoYW5nZVBsYXlsaXN0TmFtZSxcbiAgICBjaGFuZ2VQbGF5bGlzdFZpc2liaWxpdHksXG4gIH0gYXMgUGxheWxpc3RDb250cm9sbGVyO1xufVxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIHYtaWY9XCJjb250cm9sbGVyXCI+XG4gICAgPExvYWRhYmxlRWxlbWVudCA6c3RhdGUtY29udHJvbGxlcj1cImNvbnRyb2xsZXIuY29udHJvbGxlclwiPlxuICAgICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICA8cS1zcGlubmVyLWdlYXJzIHNpemU9XCIxMDBweFwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGRhdGEgfVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJyb3cgZnVsbC1oZWlnaHRcIlxuICAgICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogaW5oZXJpdDtcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtMyBjb2wtbGctMyBjb2wteGwtMlwiXG4gICAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IGluaGVyaXQ7XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnVsbC1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJteS1jYXJkIHEtbWEtbGdcIlxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1wYS1tZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgICA6cmF0aW89XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiZGF0YT8ucGxheWxpc3RUcmFja3NUcmFuc2Zvcm1lZFswXS50aHVtYm5haWxzPy5sYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtdGl0bGUgY2xhc3M9XCJ0ZXh0LWg1XCI+e3sgZGF0YT8ucGxheWxpc3RJbmZvLm5hbWUgfX08L3EtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXRpdGxlIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTJcIj5CeSB7eyBkYXRhPy5wbGF5bGlzdEluZm8ub3duZXI/LmRpc3BsYXlOYW1lIH19PC9xLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHktbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLW1haW4gY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj5cblxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1tYWluPlxuICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtbWFpbiBjbGFzcz1cInRleHQtY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZGF0YT8ucGxheWxpc3RUb3RhbFRyYWNrcyB9fSBTb25nc1xuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgwrdcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZWQge3sgZm9ybWF0RGlzdGFuY2VUb05vdyhkYXRhPy5wbGF5bGlzdEluZm8ubGFzdE1vZGlmaWVkISkgfX0gYWdvXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1tYWluPlxuICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSByb3cgZmxleCBmb3JjZXMgdGhlIHEtc2VsZWN0J3Mgd2lkdGggdG8gYmUgY29sbGFwc2VkIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwbGF5bGlzdFZpc2liaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJwbGF5bGlzdFZpc2libGl0eURyb3Bkb3duT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJldmVubHlcIj5cblxuICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtNVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFBsYXkgQWxsXG4gICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC01XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2h1ZmZsZVxuICAgICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLTlcIlxuICAgICAgICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiBpbmhlcml0O1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJmaXRcIj5cbiAgICAgICAgICAgICAgPHEtbGlzdCB2LWlmPVwiZGF0YT8ucGxheWxpc3RUcmFja3NUcmFuc2Zvcm1lZFwiPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgdi1mb3I9XCIodHJhY2ssIGluZGV4KSBpbiBkYXRhPy5wbGF5bGlzdFRyYWNrc1RyYW5zZm9ybWVkXCJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaW5kZXggKyAxIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCI1OHB4XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInRyYWNrLnRodW1ibmFpbHM/LnNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyB0cmFjay5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgbGluZXM9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgID57eyB0cmFjay5hbGJ1bU5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICBsaW5lcz1cIjFcIlxuICAgICAgICAgICAgICAgICAgICA+e3sgdHJhY2suY2lyY2xlLm1hcChjID0+IGMubmFtZSkuam9pbignLCAnKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSAjZXJyb3I9XCJ7IGVycm9yIH1cIj5cbiAgICAgICAgPHEtY2FyZFxuICAgICAgICAgIGNsYXNzPVwicS1tYS1tZFwiXG4gICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDQwMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWNhcmQtdGl0bGUgY2xhc3M9XCJ0ZXh0LWg2XCI+RXJyb3I8L3EtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDxxLWNhcmQtbWFpbj5cbiAgICAgICAgICAgICAgPHEtbWFya3VwIDp2YWx1ZT1cImVycm9yPy5tZXNzYWdlXCIgLz5cbiAgICAgICAgICAgIDwvcS1jYXJkLW1haW4+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciBpbnNldCAvPlxuXG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAge3sgZXJyb3I/LnN0YWNrIH19XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBjb21wdXRlZCwgQ29tcHV0ZWRSZWYsIGluamVjdCwgb25CZWZvcmVNb3VudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgUGxheWxpc3RTZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUGxheWxpc3RTZXJ2aWNlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgVHJhY2tSZWFkRHRvLCBQbGF5bGlzdFJlYWREdG8sIENvbmZpZ3VyYXRpb24sIEFsYnVtQXBpLCBQbGF5bGlzdFZpc2liaWxpdHkgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCBMb2FkYWJsZUVsZW1lbnQgZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlRWxlbWVudC52dWUnO1xuaW1wb3J0IEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0FwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgeyBUcmFja0luZm8gfSBmcm9tICdzcmMvbW9kZWxzL1RyYWNrSW5mbyc7XG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgUGxheWxpc3RDb250cm9sbGVyIGFzIFBsYXlsaXN0UGFnZUNvbnRyb2xsZXIsIHVzZVBsYXlsaXN0UGFnZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9QbGF5bGlzdFBhZ2UvUGxheWxpc3RQYWdlQ29udHJvbGxlcic7XG5cbmNvbnN0IHBsYXlsaXN0VmlzaWJsaXR5RHJvcGRvd25PcHRpb25zID0gW1xuICB7XG4gICAgbGFiZWw6ICdQdWJsaWMnLFxuICAgIHZhbHVlOiBQbGF5bGlzdFZpc2liaWxpdHkuUHVibGljLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdQcml2YXRlJyxcbiAgICB2YWx1ZTogUGxheWxpc3RWaXNpYmlsaXR5LlByaXZhdGUsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1VubGlzdGVkJyxcbiAgICB2YWx1ZTogUGxheWxpc3RWaXNpYmlsaXR5LlVubGlzdGVkLFxuICB9LFxuXTtcblxuaW50ZXJmYWNlIFBsYXlsaXN0UGFnZVJvdXRlUGFyYW10ZXJzIHtcbiAgcGxheWxpc3RJZDogQ29tcHV0ZWRSZWY8c3RyaW5nPjtcbn1cblxuY29uc3QgcGxheWxpc3RWaXNpYmlsaXR5ID0gcmVmPFBsYXlsaXN0VmlzaWJpbGl0eT4oUGxheWxpc3RWaXNpYmlsaXR5LlB1YmxpYyk7XG5cbi8vIEluamVjdGVkIHNlcnZpY2VzXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBwbGF5bGlzdFNlcnZpY2UgPSBpbmplY3Q8UGxheWxpc3RTZXJ2aWNlPigncGxheWxpc3RTZXJ2aWNlJyk7XG5pZiAoIXBsYXlsaXN0U2VydmljZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsYXlsaXN0IHNlcnZpY2Ugbm90IGZvdW5kJyk7XG59XG5cbmNvbnN0IHJvdXRlUGFyYW1zOiBQbGF5bGlzdFBhZ2VSb3V0ZVBhcmFtdGVycyA9IHtcbiAgcGxheWxpc3RJZDogY29tcHV0ZWQoKCkgPT4gJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBsYXlsaXN0SWQgYXMgc3RyaW5nKSxcbn07XG5cbmxldCBjb250cm9sbGVyOiBQbGF5bGlzdFBhZ2VDb250cm9sbGVyIHwgbnVsbDtcbm9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICBjb250cm9sbGVyID0gdXNlUGxheWxpc3RQYWdlQ29udHJvbGxlcihcbiAgICB7XG4gICAgICBwbGF5bGlzdElkOiByb3V0ZVBhcmFtcy5wbGF5bGlzdElkLnZhbHVlLFxuICAgIH1cbiAgKTtcbn0pO1xuXG53YXRjaChyb3V0ZVBhcmFtcy5wbGF5bGlzdElkLCAobmV3UGxheWxpc3RJZCkgPT4ge1xuICBpZiAoY29udHJvbGxlcikge1xuICAgIGNvbnRyb2xsZXIuY2hhbmdlUGxheWxpc3QobmV3UGxheWxpc3RJZCk7XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uYmctZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyNmE2OWEsICM1MGM4NzgpO1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJmb3JtYXREaXN0YW5jZSIsImRlZmF1bHRPcHRpb25zIiwiZGVmYXVsdExvY2FsZSIsInNlcnZpY2VzLmFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciIsInBsYXlsaXN0U2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWVBLE1BQU0sV0FBVyxDQUFFLFlBQVksWUFBYztBQUM3QyxNQUFNLFdBQVc7QUFBQSxFQUNmLFVBQVUsRUFBRSxRQUFRLFdBQVcsUUFBUSxhQUFhLEtBQUssUUFBUSxNQUFNLElBQUs7QUFBQSxFQUM1RSxZQUFZLEVBQUUsUUFBUSxXQUFXLFFBQVEsY0FBYyxLQUFLLFNBQVMsTUFBTSxJQUFLO0FBQ2xGO0FBQ0EsTUFBTSxVQUFVO0FBQUEsRUFDZCxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQ2Y7QUFFQSxNQUFNLGtCQUFrQixVQUFTLFFBQVEsTUFBTSxLQUFLLEtBQUssS0FBSyxPQUFPLENBQUM7QUFFdEUsSUFBQSxjQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUVILFlBQVk7QUFBQSxJQUNaLG9CQUFvQjtBQUFBLElBQ3BCLHNCQUFzQjtBQUFBLElBRXRCLFVBQVUsQ0FBRSxPQUFPLFFBQVEsTUFBUTtBQUFBLElBQ25DLGtCQUFrQixDQUFFLE9BQU8sUUFBUSxNQUFRO0FBQUEsSUFDM0Msb0JBQW9CLENBQUUsT0FBTyxRQUFRLE1BQVE7QUFBQSxJQUU3QyxjQUFjLENBQUUsT0FBTyxRQUFRLE1BQVE7QUFBQSxJQUN2QyxvQkFBb0IsQ0FBRSxPQUFPLFFBQVEsTUFBUTtBQUFBLElBRTdDLE9BQU87QUFBQSxNQUNMLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFVBQVUsQ0FBRSxRQUFRLE1BQVE7QUFBQSxJQUU1QixVQUFVO0FBQUEsRUFDWDtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFFN0IsVUFBTSxjQUFjLElBQUksS0FBSztBQUM3QixVQUFNLFVBQVUsSUFBSSxLQUFLO0FBQ3pCLFVBQU0sUUFBUSxJQUFJLEtBQUs7QUFHdkIsVUFBTSxZQUFZO0FBQUEsTUFDaEIsVUFBVSxJQUFJLENBQUM7QUFBQSxNQUNmLFlBQVksSUFBSSxDQUFDO0FBQUEsSUFDbEI7QUFFRCxVQUFNLFNBQVM7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLEtBQUssSUFBSSxJQUFJO0FBQUEsUUFDYixVQUFVLElBQUksQ0FBQztBQUFBLFFBQ2YsTUFBTSxJQUFJLENBQUM7QUFBQSxNQUNaO0FBQUEsTUFFRCxZQUFZO0FBQUEsUUFDVixLQUFLLElBQUksSUFBSTtBQUFBLFFBQ2IsVUFBVSxJQUFJLENBQUM7QUFBQSxRQUNmLE1BQU0sSUFBSSxDQUFDO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFFRCxVQUFNLEVBQUUsTUFBTyxJQUFHLG1CQUFvQjtBQUV0QyxVQUFNLFNBQVMsUUFBUSxPQUFPLE1BQU0sRUFBRTtBQUV0QyxRQUFJLFFBQVEsTUFBTTtBQUVsQixVQUFNLFlBQVksSUFBSSxJQUFJO0FBRTFCLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsa0JBQ0csT0FBTyxVQUFVLE9BQU8sd0JBQXdCO0FBQUEsSUFDcEQ7QUFFRCxXQUFPLFNBQVMsYUFBYSxTQUFTLE1BQU07QUFDMUMsWUFBTSxPQUFPLE9BQU8sU0FBUyxLQUFLLFFBQVEsVUFBVSxTQUFTO0FBQzdELFVBQUksUUFBUSxHQUFHO0FBQUUsZUFBTztBQUFBLE1BQUc7QUFDM0IsWUFBTSxJQUFJLFFBQVEsT0FBTyxTQUFTLFNBQVMsUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUM3RCxhQUFPLEtBQUssTUFBTSxJQUFJLEdBQUssSUFBSTtBQUFBLElBQ3JDLENBQUs7QUFDRCxXQUFPLFNBQVMsY0FBYztBQUFBLE1BQVMsT0FFbEMsTUFBTSxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sYUFBYSxRQUN4RCxZQUFZLFVBQVUsU0FDdEIsUUFBUSxVQUFVLFNBQ2xCLE9BQU8sU0FBUyxLQUFLLFNBQVMsVUFBVSxTQUFTLFFBQVE7QUFBQSxJQUMvRDtBQUNELFdBQU8sU0FBUyxhQUFhO0FBQUEsTUFBUyxNQUNwQyxPQUFPLFNBQVMsV0FBVyxTQUFTLFVBQVUsU0FBUyxRQUFRLE9BQU8sU0FBUyxVQUFVO0FBQUEsSUFDMUY7QUFDRCxXQUFPLFNBQVMsWUFBWTtBQUFBLE1BQVMsTUFDbkMsS0FBSztBQUFBLFFBQ0g7QUFBQSxVQUNFLFVBQVUsU0FBUyxRQUFRLFVBQVUsU0FBUyxRQUFRLE9BQU8sU0FBUyxLQUFLO0FBQUEsVUFDM0UsZ0JBQWdCLFVBQVUsU0FBUyxLQUFLO0FBQUEsVUFDeEMsVUFBVSxTQUFTO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNELFdBQU8sU0FBUyxRQUFRLFNBQVMsTUFBTTtBQUNyQyxhQUFPO0FBQUEsUUFDTCxHQUFHLE1BQU07QUFBQSxRQUNULEdBQUcsTUFBTTtBQUFBLFFBQ1QsS0FBSyxHQUFJLE9BQU8sU0FBUyxXQUFXO0FBQUEsUUFDcEMsUUFBUSxHQUFJLE9BQU8sU0FBUyxVQUFVO0FBQUEsTUFDdkM7QUFBQSxJQUNQLENBQUs7QUFDRCxXQUFPLFNBQVMsYUFBYTtBQUFBLE1BQVMsTUFDcEMsK0RBQ0csT0FBTyxTQUFTLFlBQVksVUFBVSxPQUFPLG9DQUFvQztBQUFBLElBQ3JGO0FBQ0QsV0FBTyxTQUFTLFdBQVc7QUFBQSxNQUFTLE1BQ2xDLDJEQUNHLE9BQU8sU0FBUyxZQUFZLFVBQVUsT0FBTyxrQ0FBa0M7QUFBQSxJQUNuRjtBQUVELFdBQU8sV0FBVyxhQUFhLFNBQVMsTUFBTTtBQUM1QyxZQUFNLE9BQU8sT0FBTyxXQUFXLEtBQUssUUFBUSxVQUFVLFdBQVc7QUFDakUsVUFBSSxRQUFRLEdBQUc7QUFBRSxlQUFPO0FBQUEsTUFBRztBQUMzQixZQUFNLElBQUksUUFBUSxLQUFLLElBQUksT0FBTyxXQUFXLFNBQVMsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQ3pFLGFBQU8sS0FBSyxNQUFNLElBQUksR0FBSyxJQUFJO0FBQUEsSUFDckMsQ0FBSztBQUNELFdBQU8sV0FBVyxjQUFjO0FBQUEsTUFBUyxPQUVwQyxNQUFNLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxhQUFhLFFBQ3hELFlBQVksVUFBVSxTQUN0QixRQUFRLFVBQVUsU0FDbEIsT0FBTyxXQUFXLEtBQUssU0FBUyxVQUFVLFdBQVcsUUFBUTtBQUFBLElBQ25FO0FBQ0QsV0FBTyxXQUFXLGFBQWE7QUFBQSxNQUFTLE1BQ3RDLE9BQU8sV0FBVyxXQUFXLFNBQVMsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVU7QUFBQSxJQUNoRztBQUNELFdBQU8sV0FBVyxZQUFZO0FBQUEsTUFBUyxNQUNyQyxLQUFLO0FBQUEsUUFDSDtBQUFBLFVBQ0UsVUFBVSxXQUFXLFFBQVEsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLEtBQUs7QUFBQSxVQUNqRixnQkFBZ0IsVUFBVSxXQUFXLEtBQUs7QUFBQSxVQUMxQyxVQUFVLFdBQVc7QUFBQSxRQUN0QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0QsV0FBTyxXQUFXLFFBQVEsU0FBUyxNQUFNO0FBQ3ZDLGFBQU87QUFBQSxRQUNMLEdBQUcsTUFBTTtBQUFBLFFBQ1QsR0FBRyxNQUFNO0FBQUEsUUFDVCxDQUFFLE1BQU0sR0FBRyxLQUFLLFFBQVEsT0FBTyxVQUFVLFNBQVUsR0FBSSxPQUFPLFdBQVcsV0FBVztBQUFBLFFBQ3BGLE9BQU8sR0FBSSxPQUFPLFdBQVcsVUFBVTtBQUFBLE1BQ3hDO0FBQUEsSUFDUCxDQUFLO0FBQ0QsV0FBTyxXQUFXLGFBQWE7QUFBQSxNQUFTLE1BQ3RDLGdFQUNHLE9BQU8sV0FBVyxZQUFZLFVBQVUsT0FBTyxvQ0FBb0M7QUFBQSxJQUN2RjtBQUNELFdBQU8sV0FBVyxXQUFXO0FBQUEsTUFBUyxNQUNwQyw0REFDRyxPQUFPLFdBQVcsWUFBWSxVQUFVLE9BQU8sa0NBQWtDO0FBQUEsSUFDckY7QUFFRCxVQUFNLFlBQVksU0FBUyxNQUN6QixPQUFPLFNBQVMsWUFBWSxVQUFVLFFBQVEsT0FBTyxXQUFXLFlBQVksVUFBVSxPQUNsRixNQUFNLGVBQ04sTUFBTSxrQkFDWDtBQUVELFVBQU0sZUFBZSxDQUFFO0FBQUEsTUFDckI7QUFBQSxNQUNBLE9BQUs7QUFBRSxtQkFBVyxHQUFHLFVBQVU7QUFBQSxNQUFHO0FBQUEsTUFDbEM7QUFBQSxNQUNBLEVBQUUsVUFBVSxNQUFNLEdBQUcsUUFBUztBQUFBLElBQ3BDLENBQU87QUFFSCxVQUFNLGdCQUFnQixDQUFFO0FBQUEsTUFDdEI7QUFBQSxNQUNBLE9BQUs7QUFBRSxtQkFBVyxHQUFHLFlBQVk7QUFBQSxNQUFHO0FBQUEsTUFDcEM7QUFBQSxNQUNBLEVBQUUsWUFBWSxNQUFNLEdBQUcsUUFBUztBQUFBLElBQ3RDLENBQU87QUFFSCxhQUFTLFlBQWE7QUFDcEIsWUFBTSxPQUFPLENBQUU7QUFFZixlQUFTLFFBQVEsVUFBUTtBQUN2QixjQUFNLE9BQU8sT0FBUTtBQUVyQixhQUFNLE9BQU8sY0FBZSxLQUFLLFNBQVM7QUFDMUMsYUFBTSxPQUFPLGdCQUFpQixLQUFLLFdBQVc7QUFDOUMsYUFBTSxPQUFPLFVBQVcsS0FBSyxLQUFLO0FBQ2xDLGFBQU0sT0FBTyxtQkFBb0IsVUFBVyxNQUFPO0FBQUEsTUFDM0QsQ0FBTztBQUVELGFBQU87QUFBQSxJQUNSO0FBS0QsVUFBTSxhQUFhLFNBQVMsTUFBTTtBQUNoQyxZQUFNLE9BQU8sVUFBVztBQUN4QixXQUFLLE1BQU07QUFDWCxXQUFLLFVBQVUsSUFBSTtBQUFBLElBQ3BCLEdBQUUsQ0FBQztBQUVKLGFBQVMsdUJBQXdCLE1BQU0sUUFBUSxVQUFVO0FBQ3ZELFVBQUksU0FBUyxTQUFTLElBQUksTUFBTSxPQUFPO0FBQ3JDLGdCQUFRLE1BQU0sNkVBQTZFO0FBQzNGO0FBQUEsTUFDRDtBQUVELFlBQU0sS0FBSyxTQUFTLGFBQ2hCLDRCQUNBO0FBRUosU0FBRyxVQUFVLE9BQU8sUUFBUSxRQUFRO0FBQUEsSUFDckM7QUFFRCxhQUFTLGdCQUFpQixFQUFFLFFBQVEsU0FBUztBQUMzQyxVQUFJLFNBQVM7QUFFYixVQUFJLFVBQVUsU0FBUyxVQUFVLFFBQVE7QUFDdkMsa0JBQVUsU0FBUyxRQUFRO0FBQzNCLGlCQUFTO0FBQUEsTUFDVjtBQUVELFVBQUksVUFBVSxXQUFXLFVBQVUsT0FBTztBQUN4QyxrQkFBVSxXQUFXLFFBQVE7QUFDN0IsaUJBQVM7QUFBQSxNQUNWO0FBRUQsaUJBQVcsUUFBUSxXQUFZO0FBQUEsSUFDaEM7QUFFRCxhQUFTLGFBQWMsRUFBRSxZQUFZO0FBQ25DLFVBQUksU0FBUztBQUViLFVBQUksT0FBTyxTQUFTLFNBQVMsVUFBVSxTQUFTLEtBQUs7QUFDbkQsZUFBTyxTQUFTLFNBQVMsUUFBUSxTQUFTO0FBQzFDLGlCQUFTO0FBQUEsTUFDVjtBQUVELFVBQUksT0FBTyxXQUFXLFNBQVMsVUFBVSxTQUFTLE1BQU07QUFDdEQsZUFBTyxXQUFXLFNBQVMsUUFBUSxTQUFTO0FBQzVDLGlCQUFTO0FBQUEsTUFDVjtBQUVELGlCQUFXLFFBQVEsV0FBWTtBQUFBLElBQ2hDO0FBRUQsYUFBUyxpQkFBa0IsRUFBRSxRQUFRLFNBQVM7QUFDNUMsVUFBSSxPQUFPLFdBQVcsS0FBSyxVQUFVLE9BQU87QUFDMUMsZUFBTyxXQUFXLEtBQUssUUFBUTtBQUMvQixtQkFBWTtBQUFBLE1BQ2I7QUFFRCxVQUFJLE9BQU8sU0FBUyxLQUFLLFVBQVUsUUFBUTtBQUN6QyxlQUFPLFNBQVMsS0FBSyxRQUFRO0FBQzdCLG1CQUFZO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFFRCxhQUFTLFdBQVksR0FBRyxNQUFNO0FBQzVCLFlBQU0sT0FBTyxPQUFRO0FBRXJCLFVBQUksRUFBRSxZQUFZLE1BQU07QUFDdEIsWUFBSSxLQUFLLFlBQVksVUFBVSxNQUFNO0FBQ25DO0FBQUEsUUFDRDtBQUVELG9CQUFZLEtBQUssU0FBUztBQUMxQixnQkFBUSxRQUFRO0FBQUEsTUFDakIsV0FDUSxRQUFRLFVBQVUsTUFBTTtBQUMvQjtBQUFBLE1BQ0Q7QUFFRCxVQUFJLEVBQUUsWUFBWSxNQUFNO0FBQ3RCLGdCQUFRLFFBQVE7QUFBQSxNQUNqQjtBQUVELFlBQU0sUUFBUSxTQUFVO0FBQ3hCLFlBQU0sZ0JBQWdCLFVBQVcsTUFBTztBQUV4QyxZQUFNLGNBQWMsS0FBSyxLQUFLLFFBQVEsa0JBQWtCLGdCQUFnQixLQUFLLFVBQVU7QUFDdkYsWUFBTSxXQUFXLEVBQUUsU0FBVSxNQUFNO0FBQ25DLFlBQU0sTUFBTSxhQUFhLEVBQUUsY0FBYyxNQUFNLE1BQU0sSUFBSSxNQUFNLFdBQVc7QUFFMUUsZ0JBQVUsS0FBSyxJQUFJO0FBQUEsSUFDcEI7QUFFRCxhQUFTLFlBQWEsS0FBSyxNQUFNO0FBQy9CLFlBQU0sT0FBTyxPQUFRO0FBRXJCLFVBQUksS0FBSyxZQUFZLFVBQVUsTUFBTTtBQUNuQyxjQUFNLFNBQVMsSUFBSyxTQUFVLE1BQU87QUFDckMsWUFBSSxTQUFTLEtBQUssV0FBVyxTQUFTLFNBQVMsS0FBSyxXQUFXLFFBQVEsS0FBSyxVQUFVLE9BQU87QUFDM0YsZ0JBQU0sTUFBTSxTQUFTLEtBQUssVUFBVSxRQUFRO0FBQzVDLG9CQUFVLE1BQU0sVUFBVyxNQUFPLFFBQVEsS0FBSyxLQUFLLE9BQU8sSUFBSTtBQUFBLFFBQ2hFO0FBR0QsWUFBSSxLQUFLLElBQUksVUFBVSxNQUFNO0FBQzNCLGVBQUssSUFBSSxNQUFNLGNBQWMsSUFBSSxXQUFXLElBQUksTUFBTSxHQUFHLENBQUM7QUFBQSxRQUMzRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUQsYUFBUyxvQkFBcUIsS0FBSztBQUNqQyxrQkFBWSxLQUFLLFVBQVU7QUFBQSxJQUM1QjtBQUVELGFBQVMsc0JBQXVCLEtBQUs7QUFDbkMsa0JBQVksS0FBSyxZQUFZO0FBQUEsSUFDOUI7QUFFRCxhQUFTLGFBQWM7QUFDckIsa0JBQVksUUFBUTtBQUVwQixnQkFBVSxRQUFRLGFBQWEsS0FBSztBQUNwQyxjQUFRLFdBQVcsTUFBTTtBQUN2QixnQkFBUTtBQUNSLG9CQUFZLFFBQVE7QUFBQSxNQUM1QixHQUFTLE1BQU0sS0FBSztBQUVkLFlBQU0sYUFBYSxVQUFVLFdBQVk7QUFBQSxJQUMxQztBQUVELGFBQVMsVUFBVyxRQUFRLE1BQU07QUFDaEMsZ0JBQVUsTUFBTyxTQUFVLE1BQU8sVUFBVztBQUFBLElBQzlDO0FBRUQsUUFBSSxrQkFBa0I7QUFFdEIsYUFBUyxlQUFnQjtBQUN2QixVQUFJLG9CQUFvQixNQUFNO0FBQzVCLHFCQUFhLGVBQWU7QUFBQSxNQUM3QjtBQUdELHdCQUFrQixXQUFXLE1BQU07QUFDakMsMEJBQWtCO0FBQ2xCLGNBQU0sUUFBUTtBQUFBLE1BQ3RCLEdBQVMsTUFBTSxHQUFHLFNBQVMsR0FBRyxNQUFNLEtBQUssQ0FBQztBQUFBLElBQ3JDO0FBRUQsYUFBUyxlQUFnQjtBQUN2QixVQUFJLG9CQUFvQixNQUFNO0FBQzVCLHFCQUFhLGVBQWU7QUFDNUIsMEJBQWtCO0FBQUEsTUFDbkI7QUFFRCxZQUFNLFFBQVE7QUFBQSxJQUNmO0FBRUQsUUFBSSxpQkFBaUI7QUFFckIsVUFBTSxNQUFNLE1BQU0sR0FBRyxLQUFLLEtBQUssU0FBTztBQUNwQyxVQUFJLFVBQVUsVUFBVSxNQUFNO0FBQzVCO0FBQUEsVUFDRSxVQUFVO0FBQUEsVUFDVixLQUFLLElBQUksT0FBTyxXQUFXLFNBQVMsS0FBSyxLQUFLLFFBQVEsT0FBTyxLQUFLO0FBQUEsUUFDbkU7QUFBQSxNQUNGO0FBQUEsSUFDUCxDQUFLO0FBRUQsa0JBQWMsTUFBTTtBQUNsQix1QkFBaUI7QUFBQSxRQUNmLEtBQUssT0FBTyxTQUFTLFNBQVM7QUFBQSxRQUM5QixNQUFNLE9BQU8sV0FBVyxTQUFTO0FBQUEsTUFDbEM7QUFBQSxJQUNQLENBQUs7QUFFRCxnQkFBWSxNQUFNO0FBQ2hCLFVBQUksbUJBQW1CO0FBQU07QUFFN0IsWUFBTSxlQUFlLFVBQVU7QUFFL0IsVUFBSSxpQkFBaUIsTUFBTTtBQUN6QixvQ0FBNEIsY0FBYyxlQUFlLElBQUk7QUFDN0Qsa0NBQTBCLGNBQWMsZUFBZSxHQUFHO0FBQUEsTUFDM0Q7QUFBQSxJQUNQLENBQUs7QUFFRCxvQkFBZ0IsV0FBVyxNQUFNO0FBR2pDLFdBQU8sT0FBTyxPQUFPO0FBQUEsTUFDbkIsaUJBQWlCLE1BQU0sVUFBVTtBQUFBLE1BQ2pDO0FBQUEsTUFDQSxtQkFBbUIsT0FBTztBQUFBLFFBQ3hCLEtBQUssT0FBTyxTQUFTLFNBQVM7QUFBQSxRQUM5QixNQUFNLE9BQU8sV0FBVyxTQUFTO0FBQUEsTUFDekM7QUFBQSxNQUNNLHFCQUFxQixPQUFPO0FBQUEsUUFDMUIsS0FBSyxPQUFPLFNBQVMsV0FBVztBQUFBLFFBQ2hDLE1BQU0sT0FBTyxXQUFXLFdBQVc7QUFBQSxNQUMzQztBQUFBLE1BQ00sbUJBQW1CO0FBQUEsTUFDbkIsb0JBQXFCLE1BQU0sWUFBWSxVQUFVO0FBQy9DO0FBQUEsVUFDRTtBQUFBLFVBQ0EsY0FDSyxPQUFRLE1BQU8sS0FBSyxRQUFRLFVBQVcsTUFBTyxVQUM5QyxTQUFTLGdCQUFnQixNQUFNLEdBQUcsS0FBSyxRQUFRLE9BQU8sS0FBSztBQUFBLFVBQ2hFO0FBQUEsUUFDRDtBQUFBLE1BQ0Y7QUFBQSxJQUNQLENBQUs7QUFFRCxXQUFPLE1BQU07QUFDWCxhQUFPLEVBQUUsT0FBTztBQUFBLFFBQ2QsT0FBTyxRQUFRO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxNQUNSLEdBQVM7QUFBQSxRQUNELEVBQUUsT0FBTztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsVUFBVSxNQUFNLGFBQWEsU0FBUyxNQUFNLFdBQVc7QUFBQSxRQUNqRSxHQUFXO0FBQUEsVUFDRCxFQUFFLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLE9BQU8sVUFBVTtBQUFBLFVBQzdCLEdBQWEsV0FBVyxNQUFNLFNBQVM7QUFBQSxZQUMzQixFQUFFLGlCQUFpQjtBQUFBLGNBQ2pCLFVBQVU7QUFBQSxjQUNWLFVBQVU7QUFBQSxZQUN4QixDQUFhO0FBQUEsVUFDYixDQUFXLENBQUM7QUFBQSxVQUVGLEVBQUUsaUJBQWlCO0FBQUEsWUFDakIsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBLFVBQ3RCLENBQVc7QUFBQSxRQUNYLENBQVM7QUFBQSxRQUVELEVBQUUsaUJBQWlCO0FBQUEsVUFDakIsVUFBVTtBQUFBLFVBQ1YsVUFBVTtBQUFBLFFBQ3BCLENBQVM7QUFBQSxRQUVELEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTyxPQUFPLFNBQVMsU0FBUztBQUFBLFVBQ2hDLE9BQU8sQ0FBRSxNQUFNLFVBQVUsTUFBTSxnQkFBa0I7QUFBQSxVQUNqRCxlQUFlO0FBQUEsVUFDZixhQUFhO0FBQUEsUUFDdkIsQ0FBUztBQUFBLFFBRUQsRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPLE9BQU8sV0FBVyxTQUFTO0FBQUEsVUFDbEMsT0FBTyxDQUFFLE1BQU0sVUFBVSxNQUFNLGtCQUFvQjtBQUFBLFVBQ25ELGVBQWU7QUFBQSxVQUNmLGFBQWE7QUFBQSxRQUN2QixDQUFTO0FBQUEsUUFFRDtBQUFBLFVBQ0UsRUFBRSxPQUFPO0FBQUEsWUFDUCxLQUFLLE9BQU8sU0FBUztBQUFBLFlBQ3JCLE9BQU8sT0FBTyxTQUFTLFdBQVc7QUFBQSxZQUNsQyxPQUFPLE9BQU8sU0FBUyxNQUFNO0FBQUEsWUFDN0IsZUFBZTtBQUFBLFVBQzNCLENBQVc7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBRUQ7QUFBQSxVQUNFLEVBQUUsT0FBTztBQUFBLFlBQ1AsS0FBSyxPQUFPLFdBQVc7QUFBQSxZQUN2QixPQUFPLE9BQU8sV0FBVyxXQUFXO0FBQUEsWUFDcEMsT0FBTyxPQUFPLFdBQVcsTUFBTTtBQUFBLFlBQy9CLGVBQWU7QUFBQSxVQUMzQixDQUFXO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNULENBQU87QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNILENBQUM7QUNwZE0sU0FBUyxPQUFPLFVBQVU7QUFDL0IsUUFBTSxTQUFTLE9BQU8sVUFBVSxTQUFTLEtBQUssUUFBUTtBQUd0RCxNQUNFLG9CQUFvQixRQUNuQixPQUFPLGFBQWEsWUFBWSxXQUFXLGlCQUM1QztBQUVBLFdBQU8sSUFBSSxTQUFTLFlBQVksQ0FBQyxRQUFRO0FBQUEsRUFDN0MsV0FDSSxPQUFPLGFBQWEsWUFDcEIsV0FBVyxxQkFDWCxPQUFPLGFBQWEsWUFDcEIsV0FBVyxtQkFDWDtBQUVBLFdBQU8sSUFBSSxLQUFLLFFBQVE7QUFBQSxFQUM1QixPQUFTO0FBRUwsV0FBTyxJQUFJLEtBQUssR0FBRztBQUFBLEVBQ3BCO0FBQ0g7QUN4Qk8sU0FBUyxjQUFjLE1BQU0sT0FBTztBQUN6QyxNQUFJLGdCQUFnQixNQUFNO0FBQ3hCLFdBQU8sSUFBSSxLQUFLLFlBQVksS0FBSztBQUFBLEVBQ3JDLE9BQVM7QUFDTCxXQUFPLElBQUksS0FBSyxLQUFLO0FBQUEsRUFDdEI7QUFDSDtBQ2tGTyxNQUFNLGlCQUFpQjtBQU92QixNQUFNLGVBQWU7QUM3SDVCLElBQUksaUJBQWlCLENBQUE7QUFFZCxTQUFTLG9CQUFvQjtBQUNsQyxTQUFPO0FBQ1Q7QUNTTyxTQUFTLGdDQUFnQyxNQUFNO0FBQ3BELFFBQU0sUUFBUSxPQUFPLElBQUk7QUFDekIsUUFBTSxVQUFVLElBQUk7QUFBQSxJQUNsQixLQUFLO0FBQUEsTUFDSCxNQUFNLFlBQWE7QUFBQSxNQUNuQixNQUFNLFNBQVU7QUFBQSxNQUNoQixNQUFNLFFBQVM7QUFBQSxNQUNmLE1BQU0sU0FBVTtBQUFBLE1BQ2hCLE1BQU0sV0FBWTtBQUFBLE1BQ2xCLE1BQU0sV0FBWTtBQUFBLE1BQ2xCLE1BQU0sZ0JBQWlCO0FBQUEsSUFDeEI7QUFBQSxFQUNMO0FBQ0UsVUFBUSxlQUFlLE1BQU0sWUFBYSxDQUFBO0FBQzFDLFNBQU8sQ0FBQyxPQUFPLENBQUM7QUFDbEI7QUNRTyxTQUFTLFdBQVcsVUFBVSxXQUFXO0FBQzlDLFFBQU0sWUFBWSxPQUFPLFFBQVE7QUFDakMsUUFBTSxhQUFhLE9BQU8sU0FBUztBQUVuQyxRQUFNLE9BQU8sVUFBVSxRQUFTLElBQUcsV0FBVyxRQUFPO0FBRXJELE1BQUksT0FBTyxHQUFHO0FBQ1osV0FBTztBQUFBLEVBQ1gsV0FBYSxPQUFPLEdBQUc7QUFDbkIsV0FBTztBQUFBLEVBRVgsT0FBUztBQUNMLFdBQU87QUFBQSxFQUNSO0FBQ0g7QUNsQk8sU0FBUyxhQUFhLE1BQU07QUFDakMsU0FBTyxjQUFjLE1BQU0sS0FBSyxJQUFLLENBQUE7QUFDdkM7QUNUTyxTQUFTLDJCQUEyQixVQUFVLFdBQVc7QUFDOUQsUUFBTSxZQUFZLE9BQU8sUUFBUTtBQUNqQyxRQUFNLGFBQWEsT0FBTyxTQUFTO0FBRW5DLFFBQU0sV0FBVyxVQUFVLFlBQWEsSUFBRyxXQUFXLFlBQVc7QUFDakUsUUFBTSxZQUFZLFVBQVUsU0FBVSxJQUFHLFdBQVcsU0FBUTtBQUU1RCxTQUFPLFdBQVcsS0FBSztBQUN6QjtBQ2pDTyxTQUFTLGtCQUFrQixRQUFRO0FBQ3hDLFNBQU8sQ0FBQyxXQUFXO0FBQ2pCLFVBQU0sUUFBUSxTQUFTLEtBQUssVUFBVSxLQUFLO0FBQzNDLFVBQU0sU0FBUyxNQUFNLE1BQU07QUFFM0IsV0FBTyxXQUFXLElBQUksSUFBSTtBQUFBLEVBQzlCO0FBQ0E7QUNtQk8sU0FBUyx5QkFBeUIsVUFBVSxXQUFXO0FBQzVELFNBQU8sQ0FBQyxPQUFPLFFBQVEsSUFBSSxDQUFDLE9BQU8sU0FBUztBQUM5QztBQ05PLFNBQVMsU0FBUyxNQUFNO0FBQzdCLFFBQU0sUUFBUSxPQUFPLElBQUk7QUFDekIsUUFBTSxTQUFTLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDOUIsU0FBTztBQUNUO0FDSk8sU0FBUyxXQUFXLE1BQU07QUFDL0IsUUFBTSxRQUFRLE9BQU8sSUFBSTtBQUN6QixRQUFNLFFBQVEsTUFBTTtBQUNwQixRQUFNLFlBQVksTUFBTSxZQUFhLEdBQUUsUUFBUSxHQUFHLENBQUM7QUFDbkQsUUFBTSxTQUFTLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDOUIsU0FBTztBQUNUO0FDTE8sU0FBUyxpQkFBaUIsTUFBTTtBQUNyQyxRQUFNLFFBQVEsT0FBTyxJQUFJO0FBQ3pCLFNBQU8sQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLFdBQVcsS0FBSztBQUMvQztBQ0RPLFNBQVMsbUJBQW1CLFVBQVUsV0FBVztBQUN0RCxRQUFNLFlBQVksT0FBTyxRQUFRO0FBQ2pDLFFBQU0sYUFBYSxPQUFPLFNBQVM7QUFFbkMsUUFBTSxPQUFPLFdBQVcsV0FBVyxVQUFVO0FBQzdDLFFBQU0sYUFBYSxLQUFLO0FBQUEsSUFDdEIsMkJBQTJCLFdBQVcsVUFBVTtBQUFBLEVBQ3BEO0FBQ0UsTUFBSTtBQUdKLE1BQUksYUFBYSxHQUFHO0FBQ2xCLGFBQVM7QUFBQSxFQUNiLE9BQVM7QUFDTCxRQUFJLFVBQVUsZUFBZSxLQUFLLFVBQVUsUUFBUyxJQUFHLElBQUk7QUFHMUQsZ0JBQVUsUUFBUSxFQUFFO0FBQUEsSUFDckI7QUFFRCxjQUFVLFNBQVMsVUFBVSxTQUFRLElBQUssT0FBTyxVQUFVO0FBSTNELFFBQUkscUJBQXFCLFdBQVcsV0FBVyxVQUFVLE1BQU0sQ0FBQztBQUdoRSxRQUNFLGlCQUFpQixPQUFPLFFBQVEsQ0FBQyxLQUNqQyxlQUFlLEtBQ2YsV0FBVyxVQUFVLFVBQVUsTUFBTSxHQUNyQztBQUNBLDJCQUFxQjtBQUFBLElBQ3RCO0FBRUQsYUFBUyxRQUFRLGFBQWEsT0FBTyxrQkFBa0I7QUFBQSxFQUN4RDtBQUdELFNBQU8sV0FBVyxJQUFJLElBQUk7QUFDNUI7QUNqQ08sU0FBUyxvQkFBb0IsVUFBVSxXQUFXLFNBQVM7QUFDaEUsUUFBTSxPQUFPLHlCQUF5QixVQUFVLFNBQVMsSUFBSTtBQUM3RCxTQUFPLGtCQUFrQixtQ0FBUyxjQUFjLEVBQUUsSUFBSTtBQUN4RDtBQ25DQSxNQUFNLHVCQUF1QjtBQUFBLEVBQzNCLGtCQUFrQjtBQUFBLElBQ2hCLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxFQUNSO0FBQUEsRUFFRCxVQUFVO0FBQUEsSUFDUixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDUjtBQUFBLEVBRUQsYUFBYTtBQUFBLEVBRWIsa0JBQWtCO0FBQUEsSUFDaEIsS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUVELFVBQVU7QUFBQSxJQUNSLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxFQUNSO0FBQUEsRUFFRCxhQUFhO0FBQUEsSUFDWCxLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDUjtBQUFBLEVBRUQsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUVELE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxFQUNSO0FBQUEsRUFFRCxhQUFhO0FBQUEsSUFDWCxLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDUjtBQUFBLEVBRUQsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUVELGNBQWM7QUFBQSxJQUNaLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxFQUNSO0FBQUEsRUFFRCxTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDUjtBQUFBLEVBRUQsYUFBYTtBQUFBLElBQ1gsS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUVELFFBQVE7QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxFQUNSO0FBQUEsRUFFRCxZQUFZO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDUjtBQUFBLEVBRUQsY0FBYztBQUFBLElBQ1osS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1I7QUFDSDtBQUVPLE1BQU1BLG1CQUFpQixDQUFDLE9BQU8sT0FBTyxZQUFZO0FBQ3ZELE1BQUk7QUFFSixRQUFNLGFBQWEscUJBQXFCO0FBQ3hDLE1BQUksT0FBTyxlQUFlLFVBQVU7QUFDbEMsYUFBUztBQUFBLEVBQ2IsV0FBYSxVQUFVLEdBQUc7QUFDdEIsYUFBUyxXQUFXO0FBQUEsRUFDeEIsT0FBUztBQUNMLGFBQVMsV0FBVyxNQUFNLFFBQVEsYUFBYSxNQUFNLFNBQVEsQ0FBRTtBQUFBLEVBQ2hFO0FBRUQsTUFBSSxtQ0FBUyxXQUFXO0FBQ3RCLFFBQUksUUFBUSxjQUFjLFFBQVEsYUFBYSxHQUFHO0FBQ2hELGFBQU8sUUFBUTtBQUFBLElBQ3JCLE9BQVc7QUFDTCxhQUFPLFNBQVM7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFFRCxTQUFPO0FBQ1Q7QUNwR08sU0FBUyxrQkFBa0IsTUFBTTtBQUN0QyxTQUFPLENBQUMsVUFBVSxPQUFPO0FBRXZCLFVBQU0sUUFBUSxRQUFRLFFBQVEsT0FBTyxRQUFRLEtBQUssSUFBSSxLQUFLO0FBQzNELFVBQU0sU0FBUyxLQUFLLFFBQVEsVUFBVSxLQUFLLFFBQVEsS0FBSztBQUN4RCxXQUFPO0FBQUEsRUFDWDtBQUNBO0FDTEEsTUFBTSxjQUFjO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUNUO0FBRUEsTUFBTSxjQUFjO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUNUO0FBRUEsTUFBTSxrQkFBa0I7QUFBQSxFQUN0QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQ1Q7QUFFTyxNQUFNLGFBQWE7QUFBQSxFQUN4QixNQUFNLGtCQUFrQjtBQUFBLElBQ3RCLFNBQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxFQUNsQixDQUFHO0FBQUEsRUFFRCxNQUFNLGtCQUFrQjtBQUFBLElBQ3RCLFNBQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxFQUNsQixDQUFHO0FBQUEsRUFFRCxVQUFVLGtCQUFrQjtBQUFBLElBQzFCLFNBQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxFQUNsQixDQUFHO0FBQ0g7QUN0Q0EsTUFBTSx1QkFBdUI7QUFBQSxFQUMzQixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixPQUFPO0FBQ1Q7QUFFTyxNQUFNLGlCQUFpQixDQUFDLE9BQU8sT0FBTyxXQUFXLGFBQ3RELHFCQUFxQjtBQytCaEIsU0FBUyxnQkFBZ0IsTUFBTTtBQUNwQyxTQUFPLENBQUMsT0FBTyxZQUFZO0FBQ3pCLFVBQU0sV0FBVSxtQ0FBUyxXQUFVLE9BQU8sUUFBUSxPQUFPLElBQUk7QUFFN0QsUUFBSTtBQUNKLFFBQUksWUFBWSxnQkFBZ0IsS0FBSyxrQkFBa0I7QUFDckQsWUFBTSxlQUFlLEtBQUssMEJBQTBCLEtBQUs7QUFDekQsWUFBTSxTQUFRLG1DQUFTLFNBQVEsT0FBTyxRQUFRLEtBQUssSUFBSTtBQUV2RCxvQkFDRSxLQUFLLGlCQUFpQixVQUFVLEtBQUssaUJBQWlCO0FBQUEsSUFDOUQsT0FBVztBQUNMLFlBQU0sZUFBZSxLQUFLO0FBQzFCLFlBQU0sU0FBUSxtQ0FBUyxTQUFRLE9BQU8sUUFBUSxLQUFLLElBQUksS0FBSztBQUU1RCxvQkFBYyxLQUFLLE9BQU8sVUFBVSxLQUFLLE9BQU87QUFBQSxJQUNqRDtBQUNELFVBQU0sUUFBUSxLQUFLLG1CQUFtQixLQUFLLGlCQUFpQixLQUFLLElBQUk7QUFHckUsV0FBTyxZQUFZO0FBQUEsRUFDdkI7QUFDQTtBQzdEQSxNQUFNLFlBQVk7QUFBQSxFQUNoQixRQUFRLENBQUMsS0FBSyxHQUFHO0FBQUEsRUFDakIsYUFBYSxDQUFDLE1BQU0sSUFBSTtBQUFBLEVBQ3hCLE1BQU0sQ0FBQyxpQkFBaUIsYUFBYTtBQUN2QztBQUVBLE1BQU0sZ0JBQWdCO0FBQUEsRUFDcEIsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFBQSxFQUMzQixhQUFhLENBQUMsTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUFBLEVBQ3BDLE1BQU0sQ0FBQyxlQUFlLGVBQWUsZUFBZSxhQUFhO0FBQ25FO0FBTUEsTUFBTSxjQUFjO0FBQUEsRUFDbEIsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQUEsRUFDbkUsYUFBYTtBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUVELE1BQU07QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQ0g7QUFFQSxNQUFNLFlBQVk7QUFBQSxFQUNoQixRQUFRLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztBQUFBLEVBQzFDLE9BQU8sQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQUEsRUFDaEQsYUFBYSxDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFBQSxFQUM3RCxNQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFDSDtBQUVBLE1BQU0sa0JBQWtCO0FBQUEsRUFDdEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUNELGFBQWE7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxFQUNSO0FBQUEsRUFDRCxNQUFNO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsRUFDUjtBQUNIO0FBRUEsTUFBTSw0QkFBNEI7QUFBQSxFQUNoQyxRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsRUFDUjtBQUFBLEVBQ0QsYUFBYTtBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUNELE1BQU07QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxFQUNSO0FBQ0g7QUFFQSxNQUFNLGdCQUFnQixDQUFDLGFBQWEsYUFBYTtBQUMvQyxRQUFNLFNBQVMsT0FBTyxXQUFXO0FBU2pDLFFBQU0sU0FBUyxTQUFTO0FBQ3hCLE1BQUksU0FBUyxNQUFNLFNBQVMsSUFBSTtBQUM5QixZQUFRLFNBQVM7QUFBQSxXQUNWO0FBQ0gsZUFBTyxTQUFTO0FBQUEsV0FDYjtBQUNILGVBQU8sU0FBUztBQUFBLFdBQ2I7QUFDSCxlQUFPLFNBQVM7QUFBQTtBQUFBLEVBRXJCO0FBQ0QsU0FBTyxTQUFTO0FBQ2xCO0FBRU8sTUFBTSxXQUFXO0FBQUEsRUFDdEI7QUFBQSxFQUVBLEtBQUssZ0JBQWdCO0FBQUEsSUFDbkIsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2xCLENBQUc7QUFBQSxFQUVELFNBQVMsZ0JBQWdCO0FBQUEsSUFDdkIsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2Qsa0JBQWtCLENBQUMsWUFBWSxVQUFVO0FBQUEsRUFDN0MsQ0FBRztBQUFBLEVBRUQsT0FBTyxnQkFBZ0I7QUFBQSxJQUNyQixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsRUFDbEIsQ0FBRztBQUFBLEVBRUQsS0FBSyxnQkFBZ0I7QUFBQSxJQUNuQixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsRUFDbEIsQ0FBRztBQUFBLEVBRUQsV0FBVyxnQkFBZ0I7QUFBQSxJQUN6QixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxJQUNsQix3QkFBd0I7QUFBQSxFQUM1QixDQUFHO0FBQ0g7QUMxTE8sU0FBUyxhQUFhLE1BQU07QUFDakMsU0FBTyxDQUFDLFFBQVEsVUFBVSxPQUFPO0FBQy9CLFVBQU0sUUFBUSxRQUFRO0FBRXRCLFVBQU0sZUFDSCxTQUFTLEtBQUssY0FBYyxVQUM3QixLQUFLLGNBQWMsS0FBSztBQUMxQixVQUFNLGNBQWMsT0FBTyxNQUFNLFlBQVk7QUFFN0MsUUFBSSxDQUFDLGFBQWE7QUFDaEIsYUFBTztBQUFBLElBQ1I7QUFDRCxVQUFNLGdCQUFnQixZQUFZO0FBRWxDLFVBQU0sZ0JBQ0gsU0FBUyxLQUFLLGNBQWMsVUFDN0IsS0FBSyxjQUFjLEtBQUs7QUFFMUIsVUFBTSxNQUFNLE1BQU0sUUFBUSxhQUFhLElBQ25DLFVBQVUsZUFBZSxDQUFDLFlBQVksUUFBUSxLQUFLLGFBQWEsQ0FBQyxJQUVqRSxRQUFRLGVBQWUsQ0FBQyxZQUFZLFFBQVEsS0FBSyxhQUFhLENBQUM7QUFFbkUsUUFBSTtBQUVKLFlBQVEsS0FBSyxnQkFBZ0IsS0FBSyxjQUFjLEdBQUcsSUFBSTtBQUN2RCxZQUFRLFFBQVEsZ0JBRVosUUFBUSxjQUFjLEtBQUssSUFDM0I7QUFFSixVQUFNLE9BQU8sT0FBTyxNQUFNLGNBQWMsTUFBTTtBQUU5QyxXQUFPLEVBQUUsT0FBTztFQUNwQjtBQUNBO0FBRUEsU0FBUyxRQUFRLFFBQVEsV0FBVztBQUNsQyxhQUFXLE9BQU8sUUFBUTtBQUN4QixRQUNFLE9BQU8sVUFBVSxlQUFlLEtBQUssUUFBUSxHQUFHLEtBQ2hELFVBQVUsT0FBTyxJQUFJLEdBQ3JCO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0QsU0FBTztBQUNUO0FBRUEsU0FBUyxVQUFVLE9BQU8sV0FBVztBQUNuQyxXQUFTLE1BQU0sR0FBRyxNQUFNLE1BQU0sUUFBUSxPQUFPO0FBQzNDLFFBQUksVUFBVSxNQUFNLElBQUksR0FBRztBQUN6QixhQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRCxTQUFPO0FBQ1Q7QUN4RE8sU0FBUyxvQkFBb0IsTUFBTTtBQUN4QyxTQUFPLENBQUMsUUFBUSxVQUFVLE9BQU87QUFDL0IsVUFBTSxjQUFjLE9BQU8sTUFBTSxLQUFLLFlBQVk7QUFDbEQsUUFBSSxDQUFDO0FBQWEsYUFBTztBQUN6QixVQUFNLGdCQUFnQixZQUFZO0FBRWxDLFVBQU0sY0FBYyxPQUFPLE1BQU0sS0FBSyxZQUFZO0FBQ2xELFFBQUksQ0FBQztBQUFhLGFBQU87QUFDekIsUUFBSSxRQUFRLEtBQUssZ0JBQ2IsS0FBSyxjQUFjLFlBQVksRUFBRSxJQUNqQyxZQUFZO0FBR2hCLFlBQVEsUUFBUSxnQkFBZ0IsUUFBUSxjQUFjLEtBQUssSUFBSTtBQUUvRCxVQUFNLE9BQU8sT0FBTyxNQUFNLGNBQWMsTUFBTTtBQUU5QyxXQUFPLEVBQUUsT0FBTztFQUNwQjtBQUNBO0FDaEJBLE1BQU0sNEJBQTRCO0FBQ2xDLE1BQU0sNEJBQTRCO0FBRWxDLE1BQU0sbUJBQW1CO0FBQUEsRUFDdkIsUUFBUTtBQUFBLEVBQ1IsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUNSO0FBQ0EsTUFBTSxtQkFBbUI7QUFBQSxFQUN2QixLQUFLLENBQUMsT0FBTyxTQUFTO0FBQ3hCO0FBRUEsTUFBTSx1QkFBdUI7QUFBQSxFQUMzQixRQUFRO0FBQUEsRUFDUixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQ1I7QUFDQSxNQUFNLHVCQUF1QjtBQUFBLEVBQzNCLEtBQUssQ0FBQyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQzlCO0FBRUEsTUFBTSxxQkFBcUI7QUFBQSxFQUN6QixRQUFRO0FBQUEsRUFDUixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQ1I7QUFDQSxNQUFNLHFCQUFxQjtBQUFBLEVBQ3pCLFFBQVE7QUFBQSxJQUNOO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFFRCxLQUFLO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUNIO0FBRUEsTUFBTSxtQkFBbUI7QUFBQSxFQUN2QixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQ1I7QUFDQSxNQUFNLG1CQUFtQjtBQUFBLEVBQ3ZCLFFBQVEsQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBQUEsRUFDeEQsS0FBSyxDQUFDLFFBQVEsT0FBTyxRQUFRLE9BQU8sUUFBUSxPQUFPLE1BQU07QUFDM0Q7QUFFQSxNQUFNLHlCQUF5QjtBQUFBLEVBQzdCLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFDUDtBQUNBLE1BQU0seUJBQXlCO0FBQUEsRUFDN0IsS0FBSztBQUFBLElBQ0gsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLEVBQ1I7QUFDSDtBQUVPLE1BQU0sUUFBUTtBQUFBLEVBQ25CLGVBQWUsb0JBQW9CO0FBQUEsSUFDakMsY0FBYztBQUFBLElBQ2QsY0FBYztBQUFBLElBQ2QsZUFBZSxDQUFDLFVBQVUsU0FBUyxPQUFPLEVBQUU7QUFBQSxFQUNoRCxDQUFHO0FBQUEsRUFFRCxLQUFLLGFBQWE7QUFBQSxJQUNoQixlQUFlO0FBQUEsSUFDZixtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsSUFDZixtQkFBbUI7QUFBQSxFQUN2QixDQUFHO0FBQUEsRUFFRCxTQUFTLGFBQWE7QUFBQSxJQUNwQixlQUFlO0FBQUEsSUFDZixtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsSUFDZixtQkFBbUI7QUFBQSxJQUNuQixlQUFlLENBQUMsVUFBVSxRQUFRO0FBQUEsRUFDdEMsQ0FBRztBQUFBLEVBRUQsT0FBTyxhQUFhO0FBQUEsSUFDbEIsZUFBZTtBQUFBLElBQ2YsbUJBQW1CO0FBQUEsSUFDbkIsZUFBZTtBQUFBLElBQ2YsbUJBQW1CO0FBQUEsRUFDdkIsQ0FBRztBQUFBLEVBRUQsS0FBSyxhQUFhO0FBQUEsSUFDaEIsZUFBZTtBQUFBLElBQ2YsbUJBQW1CO0FBQUEsSUFDbkIsZUFBZTtBQUFBLElBQ2YsbUJBQW1CO0FBQUEsRUFDdkIsQ0FBRztBQUFBLEVBRUQsV0FBVyxhQUFhO0FBQUEsSUFDdEIsZUFBZTtBQUFBLElBQ2YsbUJBQW1CO0FBQUEsSUFDbkIsZUFBZTtBQUFBLElBQ2YsbUJBQW1CO0FBQUEsRUFDdkIsQ0FBRztBQUNIO0FDckhPLE1BQU0sT0FBTztBQUFBLEVBQ2xCLE1BQU07QUFBQSxFQUNOLGdCQUFnQkE7QUFBQUEsRUFDaEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLHVCQUF1QjtBQUFBLEVBQ3hCO0FBQ0g7QUNxRU8sU0FBUyxlQUFlLE1BQU0sVUFBVSxTQUFTOztBQUN0RCxRQUFNQyxrQkFBaUI7QUFDdkIsUUFBTSxVQUFTLDhDQUFTLFdBQVQsWUFBbUJBLGdCQUFlLFdBQWxDLFlBQTRDQztBQUMzRCxRQUFNLHlCQUF5QjtBQUUvQixRQUFNLGFBQWEsV0FBVyxNQUFNLFFBQVE7QUFFNUMsTUFBSSxNQUFNLFVBQVUsR0FBRztBQUNyQixVQUFNLElBQUksV0FBVyxvQkFBb0I7QUFBQSxFQUMxQztBQUVELFFBQU0sa0JBQWtCLE9BQU8sT0FBTyxDQUFBLEdBQUksU0FBUztBQUFBLElBQ2pELFdBQVcsbUNBQVM7QUFBQSxJQUNwQjtBQUFBLEVBQ0osQ0FBRztBQUVELE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSSxhQUFhLEdBQUc7QUFDbEIsZUFBVyxPQUFPLFFBQVE7QUFDMUIsZ0JBQVksT0FBTyxJQUFJO0FBQUEsRUFDM0IsT0FBUztBQUNMLGVBQVcsT0FBTyxJQUFJO0FBQ3RCLGdCQUFZLE9BQU8sUUFBUTtBQUFBLEVBQzVCO0FBRUQsUUFBTSxVQUFVLG9CQUFvQixXQUFXLFFBQVE7QUFDdkQsUUFBTSxtQkFDSCxnQ0FBZ0MsU0FBUyxJQUN4QyxnQ0FBZ0MsUUFBUSxLQUMxQztBQUNGLFFBQU0sVUFBVSxLQUFLLE9BQU8sVUFBVSxtQkFBbUIsRUFBRTtBQUMzRCxNQUFJO0FBR0osTUFBSSxVQUFVLEdBQUc7QUFDZixRQUFJLG1DQUFTLGdCQUFnQjtBQUMzQixVQUFJLFVBQVUsR0FBRztBQUNmLGVBQU8sT0FBTyxlQUFlLG9CQUFvQixHQUFHLGVBQWU7QUFBQSxNQUMzRSxXQUFpQixVQUFVLElBQUk7QUFDdkIsZUFBTyxPQUFPLGVBQWUsb0JBQW9CLElBQUksZUFBZTtBQUFBLE1BQzVFLFdBQWlCLFVBQVUsSUFBSTtBQUN2QixlQUFPLE9BQU8sZUFBZSxvQkFBb0IsSUFBSSxlQUFlO0FBQUEsTUFDNUUsV0FBaUIsVUFBVSxJQUFJO0FBQ3ZCLGVBQU8sT0FBTyxlQUFlLGVBQWUsR0FBRyxlQUFlO0FBQUEsTUFDdEUsV0FBaUIsVUFBVSxJQUFJO0FBQ3ZCLGVBQU8sT0FBTyxlQUFlLG9CQUFvQixHQUFHLGVBQWU7QUFBQSxNQUMzRSxPQUFhO0FBQ0wsZUFBTyxPQUFPLGVBQWUsWUFBWSxHQUFHLGVBQWU7QUFBQSxNQUM1RDtBQUFBLElBQ1AsT0FBVztBQUNMLFVBQUksWUFBWSxHQUFHO0FBQ2pCLGVBQU8sT0FBTyxlQUFlLG9CQUFvQixHQUFHLGVBQWU7QUFBQSxNQUMzRSxPQUFhO0FBQ0wsZUFBTyxPQUFPLGVBQWUsWUFBWSxTQUFTLGVBQWU7QUFBQSxNQUNsRTtBQUFBLElBQ0Y7QUFBQSxFQUdMLFdBQWEsVUFBVSxJQUFJO0FBQ3ZCLFdBQU8sT0FBTyxlQUFlLFlBQVksU0FBUyxlQUFlO0FBQUEsRUFHckUsV0FBYSxVQUFVLElBQUk7QUFDdkIsV0FBTyxPQUFPLGVBQWUsZUFBZSxHQUFHLGVBQWU7QUFBQSxFQUdsRSxXQUFhLFVBQVUsY0FBYztBQUNqQyxVQUFNLFFBQVEsS0FBSyxNQUFNLFVBQVUsRUFBRTtBQUNyQyxXQUFPLE9BQU8sZUFBZSxlQUFlLE9BQU8sZUFBZTtBQUFBLEVBR3RFLFdBQWEsVUFBVSx3QkFBd0I7QUFDM0MsV0FBTyxPQUFPLGVBQWUsU0FBUyxHQUFHLGVBQWU7QUFBQSxFQUc1RCxXQUFhLFVBQVUsZ0JBQWdCO0FBQ25DLFVBQU0sT0FBTyxLQUFLLE1BQU0sVUFBVSxZQUFZO0FBQzlDLFdBQU8sT0FBTyxlQUFlLFNBQVMsTUFBTSxlQUFlO0FBQUEsRUFHL0QsV0FBYSxVQUFVLGlCQUFpQixHQUFHO0FBQ3ZDLGFBQVMsS0FBSyxNQUFNLFVBQVUsY0FBYztBQUM1QyxXQUFPLE9BQU8sZUFBZSxnQkFBZ0IsUUFBUSxlQUFlO0FBQUEsRUFDckU7QUFFRCxXQUFTLG1CQUFtQixXQUFXLFFBQVE7QUFHL0MsTUFBSSxTQUFTLElBQUk7QUFDZixVQUFNLGVBQWUsS0FBSyxNQUFNLFVBQVUsY0FBYztBQUN4RCxXQUFPLE9BQU8sZUFBZSxXQUFXLGNBQWMsZUFBZTtBQUFBLEVBR3pFLE9BQVM7QUFDTCxVQUFNLHlCQUF5QixTQUFTO0FBQ3hDLFVBQU0sUUFBUSxLQUFLLE1BQU0sU0FBUyxFQUFFO0FBR3BDLFFBQUkseUJBQXlCLEdBQUc7QUFDOUIsYUFBTyxPQUFPLGVBQWUsZUFBZSxPQUFPLGVBQWU7QUFBQSxJQUd4RSxXQUFlLHlCQUF5QixHQUFHO0FBQ3JDLGFBQU8sT0FBTyxlQUFlLGNBQWMsT0FBTyxlQUFlO0FBQUEsSUFHdkUsT0FBVztBQUNMLGFBQU8sT0FBTyxlQUFlLGdCQUFnQixRQUFRLEdBQUcsZUFBZTtBQUFBLElBQ3hFO0FBQUEsRUFDRjtBQUNIO0FDbkhPLFNBQVMsb0JBQW9CLE1BQU0sU0FBUztBQUNqRCxTQUFPLGVBQWUsTUFBTSxhQUFhLElBQUksR0FBRyxPQUFPO0FBQ3pEO0FDdkVhLE1BQUEsNEJBQTRCLENBQ3ZDLGlCQUNHO0FBQ0gsVUFBUSxJQUFJLHlCQUF5QjtBQUNyQyxRQUFNLGFBQWE7QUFDYixRQUFBLGFBQWEsSUFBSSxZQUFZO0FBRTdCLFFBQUEsT0FBTyxPQUFPLFVBQWtDOztBQUNwRCxZQUFRLElBQUkscUNBQXFDO0FBQ2pELGVBQVcsV0FBVztBQUN0QixVQUFNLFlBQVk7QUFDZCxRQUFBO0FBQ0YsWUFBTSxlQUFlLE1BQU0sZ0JBQWdCLFlBQVksTUFBTSxVQUFVO0FBRXZFLFVBQUksQ0FBQyxjQUFjO0FBQ1gsY0FBQSxJQUFJLE1BQU0sb0JBQW9CO0FBQUEsTUFDdEM7QUFFQSxZQUFNLGNBQXdCLENBQUE7QUFDOUIsYUFBTyxNQUFNO0FBQ0wsY0FBQSxZQUFZLE1BQU0sZ0JBQWdCLGtCQUFrQixNQUFNLFlBQVksWUFBWSxRQUFRLEVBQUU7QUFDOUYsWUFBQSxVQUFVLFdBQVcsR0FBRztBQUMxQjtBQUFBLFFBQ0Y7QUFFWSxvQkFBQSxLQUFLLEdBQUcsU0FBUztBQUFBLE1BQy9CO0FBSUEsWUFBTSxZQUFZLElBQUksVUFBU0MscURBQW1DLHFCQUFxQjtBQUN2RixZQUFNLGlCQUFpQyxDQUFBO0FBQ3ZDLGVBQVMsSUFBSSxHQUFHLElBQUksWUFBWSxRQUFRLEtBQUssV0FBVztBQUN0RCxjQUFNLFFBQVEsWUFBWSxNQUFNLEdBQUcsSUFBSSxTQUFTO0FBQzFDLGNBQUEsU0FBUyxNQUFNLFVBQVU7QUFBQSxVQUM3QjtBQUFBLFlBQ0UsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxRQUFBO0FBRWEsdUJBQUEsS0FBSyxHQUFHLE9BQU8sTUFBTztBQUFBLE1BQ3ZDO0FBRUEsWUFBTSxZQUFZO0FBQUEsUUFDaEIsWUFBWSxNQUFNO0FBQUEsUUFDbEI7QUFBQSxRQUNBLHFCQUFxQixZQUFZO0FBQUEsUUFDakM7QUFBQSxRQUNBLDJCQUEyQixlQUFlLElBQUksQ0FBQyxVQUFVO0FBQ2hELGlCQUFBLFVBQVUsaUJBQWlCLEtBQUs7QUFBQSxRQUFBLENBQ3hDO0FBQUEsTUFBQTtBQUdILGlCQUFXLFdBQVcsU0FBUztBQUFBLGFBQ3hCO0FBQ1AsaUJBQVcsU0FBUyxDQUFVO0FBQUEsSUFDaEM7QUFBQSxFQUFBO0FBR0ksUUFBQSxpQkFBaUIsT0FBTyxlQUF1QjtBQUNuRCxlQUFXLFFBQVE7QUFBQSxNQUNqQixHQUFHLFdBQVc7QUFBQSxNQUNkO0FBQUEsSUFBQTtBQUFBLEVBQ0Y7QUFHSSxRQUFBLHFCQUFxQixPQUFPLFNBQWlCOztBQUNqRCxVQUFNLGNBQWMsSUFBSSxhQUFZQSxxREFBbUMscUJBQXFCO0FBRTVGLFVBQU0sWUFBWTtBQUFBLE1BQ2hCO0FBQUEsUUFDRSxZQUFZLFdBQVcsTUFBTTtBQUFBLFFBQzdCLGNBQWM7QUFBQSxVQUNaO0FBQUEsVUFDQSxhQUFZLGdCQUFXLE1BQU0sVUFBakIsbUJBQXdCLGFBQWE7QUFBQSxRQUNuRDtBQUFBLE1BQ0Y7QUFBQSxJQUFBO0FBQUEsRUFDRjtBQUdJLFFBQUEsMkJBQTJCLE9BQU8sZUFBbUM7O0FBQ3pFLFVBQU0sY0FBYyxJQUFJLGFBQVlBLHFEQUFtQyxxQkFBcUI7QUFFNUYsVUFBTSxZQUFZO0FBQUEsTUFDaEI7QUFBQSxRQUNFLFlBQVksV0FBVyxNQUFNO0FBQUEsUUFDN0IsY0FBYztBQUFBLFVBQ1osT0FBTSxnQkFBVyxNQUFNLFVBQWpCLG1CQUF3QixhQUFhO0FBQUEsVUFDM0M7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQUE7QUFBQSxFQUNGO0FBR0Y7QUFBQSxJQUNFO0FBQUEsSUFDQSxPQUFPLGVBQWUsa0JBQWtCO0FBQ3RDLGNBQVEsSUFBSSxFQUFFLGVBQWUsY0FBZSxDQUFBO0FBQzVDLFlBQU0sS0FBSyxhQUFhO0FBQUEsSUFDMUI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQUE7QUFHRixPQUFLLFlBQVk7QUFFVixTQUFBO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFBQTtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUNBLFVBQU0sbUNBQW1DO0FBQUEsTUFDdkM7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLE9BQU8sbUJBQW1CO0FBQUEsTUFDNUI7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPLG1CQUFtQjtBQUFBLE1BQzVCO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsT0FBTyxtQkFBbUI7QUFBQSxNQUM1QjtBQUFBLElBQUE7QUFPSSxVQUFBLHFCQUFxQixJQUF3QixtQkFBbUIsTUFBTTtBQUc1RSxVQUFNLFVBQVU7QUFDVixVQUFBQyxtQkFBa0IsT0FBd0IsaUJBQWlCO0FBQ2pFLFFBQUksQ0FBQ0Esa0JBQWlCO0FBQ2QsWUFBQSxJQUFJLE1BQU0sNEJBQTRCO0FBQUEsSUFDOUM7QUFFQSxVQUFNLGNBQTBDO0FBQUEsTUFDOUMsWUFBWSxTQUFTLE1BQU0sUUFBUSxhQUFhLE1BQU0sT0FBTyxVQUFvQjtBQUFBLElBQUE7QUFHL0UsUUFBQTtBQUNKLGtCQUFjLE1BQU07QUFDTCxtQkFBQTtBQUFBLFFBQ1g7QUFBQSxVQUNFLFlBQVksWUFBWSxXQUFXO0FBQUEsUUFDckM7QUFBQSxNQUFBO0FBQUEsSUFDRixDQUNEO0FBRUssVUFBQSxZQUFZLFlBQVksQ0FBQyxrQkFBa0I7QUFDL0MsVUFBSSxZQUFZO0FBQ2QsbUJBQVcsZUFBZSxhQUFhO0FBQUEsTUFDekM7QUFBQSxJQUFBLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
