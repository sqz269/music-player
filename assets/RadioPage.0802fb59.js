import { Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.9c12fe14.js";
import { g as computed, b9 as Plugin, ba as defaultLang, c as createComponent, ad as useFormProps, a as useDarkProps, d as useDark, ag as useFormAttrs, r as ref, ac as isObject, w as watch, m as h, aR as Transition, q as hSlot, t as getCurrentInstance, af as useFormInject, n as nextTick, N as QBtn, bb as injectProp, Q as QDialog, bc as LoadingStatus, _ as _export_sfc, G as openBlock, H as createBlock, I as withCtx, J as createVNode, O as QCard, K as QCardSection, V as QSeparator, R as createBaseVNode, W as createTextVNode, E as defineComponent, i as inject, F as useQuasar, C as reactive, o as onMounted, L as QInput, Z as QIcon, l as withDirectives, bd as normalizeProps, be as guardReactiveProps, $ as toDisplayString, T as unref, bf as toRaw } from "./index.404bd6b0.js";
import { h as pad, i as useAnchorProps, f as useAnchor, a as QMenu, Q as QSelect } from "./QSelect.b19868f7.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.7d4045e6.js";
import { Q as QPage } from "./QPage.dcbeaef3.js";
import { C as ClosePopup } from "./ClosePopup.c975f998.js";
function useRenderCache() {
  let cache = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (key, defaultValue) => cache[key] === void 0 ? cache[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue : cache[key],
    setCache(key, obj) {
      cache[key] = obj;
    },
    hasCache(key) {
      return Object.hasOwnProperty.call(cache, key);
    },
    clearCache(key) {
      if (key !== void 0) {
        delete cache[key];
      } else {
        cache = /* @__PURE__ */ Object.create(null);
      }
    }
  };
}
const breaks = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === "[object Date]") {
    gd = gy.getDate();
    gm = gy.getMonth() + 1;
    gy = gy.getFullYear();
  }
  return d2j(g2d(gy, gm, gd));
}
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6)
    return 31;
  if (jm <= 11)
    return 30;
  if (isLeapJalaaliYear(jy))
    return 30;
  return 29;
}
function jalCalLeap(jy) {
  const bl = breaks.length;
  let jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    jp = jm;
  }
  n = jy - jp;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return leap;
}
function jalCal(jy, withoutLeap) {
  const bl = breaks.length, gy = jy + 621;
  let leapJ = -14, jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  n = jy - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (!withoutLeap) {
    if (jump - n < 6) {
      n = n - jump + div(jump + 4, 33) * 33;
    }
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }
  }
  return {
    leap,
    gy,
    march
  };
}
function j2d(jy, jm, jd) {
  const r = jalCal(jy, true);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
function d2j(jdn) {
  const gy = d2g(jdn).gy;
  let jy = gy - 621, jd, jm, k;
  const r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march);
  k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return {
        jy,
        jm,
        jd
      };
    } else {
      k -= 186;
    }
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) {
      k += 1;
    }
  }
  jm = 7 + div(k, 30);
  jd = mod(k, 30) + 1;
  return {
    jy,
    jm,
    jd
  };
}
function g2d(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
function d2g(jdn) {
  let j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308, gd = div(mod(i, 153), 5) + 1, gm = mod(div(i, 153), 12) + 1, gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return {
    gy,
    gm,
    gd
  };
}
function div(a, b) {
  return ~~(a / b);
}
function mod(a, b) {
  return a - ~~(a / b) * b;
}
const calendars = ["gregorian", "persian"];
const useDatetimeProps = {
  mask: {
    type: String
  },
  locale: Object,
  calendar: {
    type: String,
    validator: (v) => calendars.includes(v),
    default: "gregorian"
  },
  landscape: Boolean,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  readonly: Boolean,
  disable: Boolean
};
const useDatetimeEmits = ["update:modelValue"];
function getDayHash(date) {
  return date.year + "/" + pad(date.month) + "/" + pad(date.day);
}
function useDatetime(props, $q) {
  const editable = computed(() => {
    return props.disable !== true && props.readonly !== true;
  });
  const tabindex = computed(() => {
    return editable.value === true ? 0 : -1;
  });
  const headerClass = computed(() => {
    const cls = [];
    props.color !== void 0 && cls.push(`bg-${props.color}`);
    props.textColor !== void 0 && cls.push(`text-${props.textColor}`);
    return cls.join(" ");
  });
  function getLocale() {
    return props.locale !== void 0 ? { ...$q.lang.date, ...props.locale } : $q.lang.date;
  }
  function getCurrentDate(dateOnly) {
    const d = new Date();
    const timeFill = dateOnly === true ? null : 0;
    if (props.calendar === "persian") {
      const jDate = toJalaali(d);
      return {
        year: jDate.jy,
        month: jDate.jm,
        day: jDate.jd
      };
    }
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      hour: timeFill,
      minute: timeFill,
      second: timeFill,
      millisecond: timeFill
    };
  }
  return {
    editable,
    tabindex,
    headerClass,
    getLocale,
    getCurrentDate
  };
}
const MILLISECONDS_IN_DAY = 864e5, MILLISECONDS_IN_HOUR = 36e5, MILLISECONDS_IN_MINUTE = 6e4, defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ", token = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, reverseToken = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, regexStore = {};
function getRegexData(mask, dateLocale) {
  const days = "(" + dateLocale.days.join("|") + ")", key = mask + days;
  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }
  const daysShort = "(" + dateLocale.daysShort.join("|") + ")", months = "(" + dateLocale.months.join("|") + ")", monthsShort = "(" + dateLocale.monthsShort.join("|") + ")";
  const map = {};
  let index = 0;
  const regexText = mask.replace(reverseToken, (match) => {
    index++;
    switch (match) {
      case "YY":
        map.YY = index;
        return "(-?\\d{1,2})";
      case "YYYY":
        map.YYYY = index;
        return "(-?\\d{1,4})";
      case "M":
        map.M = index;
        return "(\\d{1,2})";
      case "Mo":
        map.M = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        map.M = index;
        return "(\\d{2})";
      case "MMM":
        map.MMM = index;
        return monthsShort;
      case "MMMM":
        map.MMMM = index;
        return months;
      case "D":
        map.D = index;
        return "(\\d{1,2})";
      case "Do":
        map.D = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        map.D = index;
        return "(\\d{2})";
      case "H":
        map.H = index;
        return "(\\d{1,2})";
      case "HH":
        map.H = index;
        return "(\\d{2})";
      case "h":
        map.h = index;
        return "(\\d{1,2})";
      case "hh":
        map.h = index;
        return "(\\d{2})";
      case "m":
        map.m = index;
        return "(\\d{1,2})";
      case "mm":
        map.m = index;
        return "(\\d{2})";
      case "s":
        map.s = index;
        return "(\\d{1,2})";
      case "ss":
        map.s = index;
        return "(\\d{2})";
      case "S":
        map.S = index;
        return "(\\d{1})";
      case "SS":
        map.S = index;
        return "(\\d{2})";
      case "SSS":
        map.S = index;
        return "(\\d{3})";
      case "A":
        map.A = index;
        return "(AM|PM)";
      case "a":
        map.a = index;
        return "(am|pm)";
      case "aa":
        map.aa = index;
        return "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return daysShort;
      case "dddd":
        return days;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "do":
        index++;
        return "(\\d{1}(st|nd|rd|th))";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "DDDo":
        index++;
        return "(\\d{1,3}(st|nd|rd|th))";
      case "w":
        return "(\\d{1,2})";
      case "wo":
        index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "ww":
        return "(\\d{2})";
      case "Z":
        map.Z = index;
        return "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        map.ZZ = index;
        return "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        map.X = index;
        return "(-?\\d+)";
      case "x":
        map.x = index;
        return "(-?\\d{4,})";
      default:
        index--;
        if (match[0] === "[") {
          match = match.substring(1, match.length - 1);
        }
        return match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  });
  const res = { map, regex: new RegExp("^" + regexText) };
  regexStore[key] = res;
  return res;
}
function getDateLocale(paramDateLocale, langProps) {
  return paramDateLocale !== void 0 ? paramDateLocale : langProps !== void 0 ? langProps.date : defaultLang.date;
}
function formatTimezone(offset, delimeter = "") {
  const sign = offset > 0 ? "-" : "+", absOffset = Math.abs(offset), hours = Math.floor(absOffset / 60), minutes = absOffset % 60;
  return sign + pad(hours) + delimeter + pad(minutes);
}
function __splitDate(str, mask, dateLocale, calendar, defaultModel) {
  const date = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  defaultModel !== void 0 && Object.assign(date, defaultModel);
  if (str === void 0 || str === null || str === "" || typeof str !== "string") {
    return date;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const langOpts = getDateLocale(dateLocale, Plugin.props), months = langOpts.months, monthsShort = langOpts.monthsShort;
  const { regex, map } = getRegexData(mask, langOpts);
  const match = str.match(regex);
  if (match === null) {
    return date;
  }
  let tzString = "";
  if (map.X !== void 0 || map.x !== void 0) {
    const stamp = parseInt(match[map.X !== void 0 ? map.X : map.x], 10);
    if (isNaN(stamp) === true || stamp < 0) {
      return date;
    }
    const d = new Date(stamp * (map.X !== void 0 ? 1e3 : 1));
    date.year = d.getFullYear();
    date.month = d.getMonth() + 1;
    date.day = d.getDate();
    date.hour = d.getHours();
    date.minute = d.getMinutes();
    date.second = d.getSeconds();
    date.millisecond = d.getMilliseconds();
  } else {
    if (map.YYYY !== void 0) {
      date.year = parseInt(match[map.YYYY], 10);
    } else if (map.YY !== void 0) {
      const y = parseInt(match[map.YY], 10);
      date.year = y < 0 ? y : 2e3 + y;
    }
    if (map.M !== void 0) {
      date.month = parseInt(match[map.M], 10);
      if (date.month < 1 || date.month > 12) {
        return date;
      }
    } else if (map.MMM !== void 0) {
      date.month = monthsShort.indexOf(match[map.MMM]) + 1;
    } else if (map.MMMM !== void 0) {
      date.month = months.indexOf(match[map.MMMM]) + 1;
    }
    if (map.D !== void 0) {
      date.day = parseInt(match[map.D], 10);
      if (date.year === null || date.month === null || date.day < 1) {
        return date;
      }
      const maxDay = calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
      if (date.day > maxDay) {
        return date;
      }
    }
    if (map.H !== void 0) {
      date.hour = parseInt(match[map.H], 10) % 24;
    } else if (map.h !== void 0) {
      date.hour = parseInt(match[map.h], 10) % 12;
      if (map.A && match[map.A] === "PM" || map.a && match[map.a] === "pm" || map.aa && match[map.aa] === "p.m.") {
        date.hour += 12;
      }
      date.hour = date.hour % 24;
    }
    if (map.m !== void 0) {
      date.minute = parseInt(match[map.m], 10) % 60;
    }
    if (map.s !== void 0) {
      date.second = parseInt(match[map.s], 10) % 60;
    }
    if (map.S !== void 0) {
      date.millisecond = parseInt(match[map.S], 10) * 10 ** (3 - match[map.S].length);
    }
    if (map.Z !== void 0 || map.ZZ !== void 0) {
      tzString = map.Z !== void 0 ? match[map.Z].replace(":", "") : match[map.ZZ];
      date.timezoneOffset = (tzString[0] === "+" ? -1 : 1) * (60 * tzString.slice(1, 3) + 1 * tzString.slice(3, 5));
    }
  }
  date.dateHash = pad(date.year, 6) + "/" + pad(date.month) + "/" + pad(date.day);
  date.timeHash = pad(date.hour) + ":" + pad(date.minute) + ":" + pad(date.second) + tzString;
  return date;
}
function getWeekOfYear(date) {
  const thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  thursday.setDate(thursday.getDate() - (thursday.getDay() + 6) % 7 + 3);
  const firstThursday = new Date(thursday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  const ds = thursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  thursday.setHours(thursday.getHours() - ds);
  const weekDiff = (thursday - firstThursday) / (MILLISECONDS_IN_DAY * 7);
  return 1 + Math.floor(weekDiff);
}
function startOfDate(date, unit, utc) {
  const t = new Date(date), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](0);
    case "month":
    case "months":
      t[`${prefix}Date`](1);
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](0);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](0);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](0);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](0);
  }
  return t;
}
function getDiff(t, sub, interval) {
  return (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (sub.getTime() - sub.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / interval;
}
function getDateDiff(date, subtract, unit = "days") {
  const t = new Date(date), sub = new Date(subtract);
  switch (unit) {
    case "years":
    case "year":
      return t.getFullYear() - sub.getFullYear();
    case "months":
    case "month":
      return (t.getFullYear() - sub.getFullYear()) * 12 + t.getMonth() - sub.getMonth();
    case "days":
    case "day":
    case "date":
      return getDiff(startOfDate(t, "day"), startOfDate(sub, "day"), MILLISECONDS_IN_DAY);
    case "hours":
    case "hour":
      return getDiff(startOfDate(t, "hour"), startOfDate(sub, "hour"), MILLISECONDS_IN_HOUR);
    case "minutes":
    case "minute":
      return getDiff(startOfDate(t, "minute"), startOfDate(sub, "minute"), MILLISECONDS_IN_MINUTE);
    case "seconds":
    case "second":
      return getDiff(startOfDate(t, "second"), startOfDate(sub, "second"), 1e3);
  }
}
function getDayOfYear(date) {
  return getDateDiff(date, startOfDate(date, "year"), "days") + 1;
}
function getOrdinal(n) {
  if (n >= 11 && n <= 13) {
    return `${n}th`;
  }
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
  }
  return `${n}th`;
}
const formatter = {
  YY(date, dateLocale, forcedYear) {
    const y = this.YYYY(date, dateLocale, forcedYear) % 100;
    return y >= 0 ? pad(y) : "-" + pad(Math.abs(y));
  },
  YYYY(date, _dateLocale, forcedYear) {
    return forcedYear !== void 0 && forcedYear !== null ? forcedYear : date.getFullYear();
  },
  M(date) {
    return date.getMonth() + 1;
  },
  Mo(date) {
    return getOrdinal(date.getMonth() + 1);
  },
  MM(date) {
    return pad(date.getMonth() + 1);
  },
  MMM(date, dateLocale) {
    return dateLocale.monthsShort[date.getMonth()];
  },
  MMMM(date, dateLocale) {
    return dateLocale.months[date.getMonth()];
  },
  Q(date) {
    return Math.ceil((date.getMonth() + 1) / 3);
  },
  Qo(date) {
    return getOrdinal(this.Q(date));
  },
  D(date) {
    return date.getDate();
  },
  Do(date) {
    return getOrdinal(date.getDate());
  },
  DD(date) {
    return pad(date.getDate());
  },
  DDD(date) {
    return getDayOfYear(date);
  },
  DDDo(date) {
    return getOrdinal(getDayOfYear(date));
  },
  DDDD(date) {
    return pad(getDayOfYear(date), 3);
  },
  d(date) {
    return date.getDay();
  },
  do(date) {
    return getOrdinal(date.getDay());
  },
  dd(date, dateLocale) {
    return dateLocale.days[date.getDay()].slice(0, 2);
  },
  ddd(date, dateLocale) {
    return dateLocale.daysShort[date.getDay()];
  },
  dddd(date, dateLocale) {
    return dateLocale.days[date.getDay()];
  },
  E(date) {
    return date.getDay() || 7;
  },
  w(date) {
    return getWeekOfYear(date);
  },
  wo(date) {
    return getOrdinal(getWeekOfYear(date));
  },
  ww(date) {
    return pad(getWeekOfYear(date));
  },
  H(date) {
    return date.getHours();
  },
  HH(date) {
    return pad(date.getHours());
  },
  h(date) {
    const hours = date.getHours();
    return hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  },
  hh(date) {
    return pad(this.h(date));
  },
  m(date) {
    return date.getMinutes();
  },
  mm(date) {
    return pad(date.getMinutes());
  },
  s(date) {
    return date.getSeconds();
  },
  ss(date) {
    return pad(date.getSeconds());
  },
  S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10));
  },
  SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  A(date) {
    return date.getHours() < 12 ? "AM" : "PM";
  },
  a(date) {
    return date.getHours() < 12 ? "am" : "pm";
  },
  aa(date) {
    return date.getHours() < 12 ? "a.m." : "p.m.";
  },
  Z(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset, ":");
  },
  ZZ(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset);
  },
  X(date) {
    return Math.floor(date.getTime() / 1e3);
  },
  x(date) {
    return date.getTime();
  }
};
function formatDate(val, mask, dateLocale, __forcedYear, __forcedTimezoneOffset) {
  if (val !== 0 && !val || val === Infinity || val === -Infinity)
    return;
  const date = new Date(val);
  if (isNaN(date))
    return;
  if (mask === void 0) {
    mask = defaultMask;
  }
  const locale = getDateLocale(dateLocale, Plugin.props);
  return mask.replace(
    token,
    (match, text) => match in formatter ? formatter[match](date, locale, __forcedYear, __forcedTimezoneOffset) : text === void 0 ? match : text.split("\\]").join("]")
  );
}
const yearsInterval = 20;
const views = ["Calendar", "Years", "Months"];
const viewIsValid = (v) => views.includes(v);
const yearMonthValidator = (v) => /^-?[\d]+\/[0-1]\d$/.test(v);
const lineStr = " \u2014 ";
function getMonthHash(date) {
  return date.year + "/" + pad(date.month);
}
var QDate = createComponent({
  name: "QDate",
  props: {
    ...useDatetimeProps,
    ...useFormProps,
    ...useDarkProps,
    modelValue: {
      required: true,
      validator: (val) => typeof val === "string" || Array.isArray(val) === true || Object(val) === val || val === null
    },
    multiple: Boolean,
    range: Boolean,
    title: String,
    subtitle: String,
    mask: {
      ...useDatetimeProps.mask,
      default: "YYYY/MM/DD"
    },
    defaultYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    yearsInMonthView: Boolean,
    events: [Array, Function],
    eventColor: [String, Function],
    emitImmediately: Boolean,
    options: [Array, Function],
    navigationMinYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    navigationMaxYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    noUnset: Boolean,
    firstDayOfWeek: [String, Number],
    todayBtn: Boolean,
    minimal: Boolean,
    defaultView: {
      type: String,
      default: "Calendar",
      validator: viewIsValid
    }
  },
  emits: [
    ...useDatetimeEmits,
    "rangeStart",
    "rangeEnd",
    "navigation"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { getCache } = useRenderCache();
    const { tabindex, headerClass, getLocale, getCurrentDate } = useDatetime(props, $q);
    let lastEmitValue;
    const formAttrs = useFormAttrs(props);
    const injectFormInput = useFormInject(formAttrs);
    const blurTargetRef = ref(null);
    const innerMask = ref(getMask());
    const innerLocale = ref(getLocale());
    const mask = computed(() => getMask());
    const locale = computed(() => getLocale());
    const today = computed(() => getCurrentDate());
    const viewModel = ref(getViewModel(innerMask.value, innerLocale.value));
    const view = ref(props.defaultView);
    const direction = computed(() => $q.lang.rtl === true ? "right" : "left");
    const monthDirection = ref(direction.value);
    const yearDirection = ref(direction.value);
    const year = viewModel.value.year;
    const startYear = ref(year - year % yearsInterval - (year < 0 ? yearsInterval : 0));
    const editRange = ref(null);
    const classes = computed(() => {
      const type = props.landscape === true ? "landscape" : "portrait";
      return `q-date q-date--${type} q-date--${type}-${props.minimal === true ? "minimal" : "standard"}` + (isDark.value === true ? " q-date--dark q-dark" : "") + (props.bordered === true ? " q-date--bordered" : "") + (props.square === true ? " q-date--square no-border-radius" : "") + (props.flat === true ? " q-date--flat no-shadow" : "") + (props.disable === true ? " disabled" : props.readonly === true ? " q-date--readonly" : "");
    });
    const computedColor = computed(() => {
      return props.color || "primary";
    });
    const computedTextColor = computed(() => {
      return props.textColor || "white";
    });
    const isImmediate = computed(
      () => props.emitImmediately === true && props.multiple !== true && props.range !== true
    );
    const normalizedModel = computed(() => Array.isArray(props.modelValue) === true ? props.modelValue : props.modelValue !== null && props.modelValue !== void 0 ? [props.modelValue] : []);
    const daysModel = computed(
      () => normalizedModel.value.filter((date) => typeof date === "string").map((date) => decodeString(date, innerMask.value, innerLocale.value)).filter(
        (date) => date.dateHash !== null && date.day !== null && date.month !== null && date.year !== null
      )
    );
    const rangeModel = computed(() => {
      const fn = (date) => decodeString(date, innerMask.value, innerLocale.value);
      return normalizedModel.value.filter((date) => isObject(date) === true && date.from !== void 0 && date.to !== void 0).map((range) => ({ from: fn(range.from), to: fn(range.to) })).filter((range) => range.from.dateHash !== null && range.to.dateHash !== null && range.from.dateHash < range.to.dateHash);
    });
    const getNativeDateFn = computed(() => props.calendar !== "persian" ? (model) => new Date(model.year, model.month - 1, model.day) : (model) => {
      const gDate = toGregorian(model.year, model.month, model.day);
      return new Date(gDate.gy, gDate.gm - 1, gDate.gd);
    });
    const encodeObjectFn = computed(() => props.calendar === "persian" ? getDayHash : (date, mask2, locale2) => formatDate(
      new Date(
        date.year,
        date.month - 1,
        date.day,
        date.hour,
        date.minute,
        date.second,
        date.millisecond
      ),
      mask2 === void 0 ? innerMask.value : mask2,
      locale2 === void 0 ? innerLocale.value : locale2,
      date.year,
      date.timezoneOffset
    ));
    const daysInModel = computed(
      () => daysModel.value.length + rangeModel.value.reduce(
        (acc, range) => acc + 1 + getDateDiff(
          getNativeDateFn.value(range.to),
          getNativeDateFn.value(range.from)
        ),
        0
      )
    );
    const headerTitle = computed(() => {
      if (props.title !== void 0 && props.title !== null && props.title.length !== 0) {
        return props.title;
      }
      if (editRange.value !== null) {
        const model2 = editRange.value.init;
        const date2 = getNativeDateFn.value(model2);
        return innerLocale.value.daysShort[date2.getDay()] + ", " + innerLocale.value.monthsShort[model2.month - 1] + " " + model2.day + lineStr + "?";
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        return `${daysInModel.value} ${innerLocale.value.pluralDay}`;
      }
      const model = daysModel.value[0];
      const date = getNativeDateFn.value(model);
      if (isNaN(date.valueOf()) === true) {
        return lineStr;
      }
      if (innerLocale.value.headerTitle !== void 0) {
        return innerLocale.value.headerTitle(date, model);
      }
      return innerLocale.value.daysShort[date.getDay()] + ", " + innerLocale.value.monthsShort[model.month - 1] + " " + model.day;
    });
    const minSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.from)).sort((a, b) => a.year - b.year || a.month - b.month);
      return model[0];
    });
    const maxSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.to)).sort((a, b) => b.year - a.year || b.month - a.month);
      return model[0];
    });
    const headerSubtitle = computed(() => {
      if (props.subtitle !== void 0 && props.subtitle !== null && props.subtitle.length !== 0) {
        return props.subtitle;
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        const from = minSelectedModel.value;
        const to = maxSelectedModel.value;
        const month = innerLocale.value.monthsShort;
        return month[from.month - 1] + (from.year !== to.year ? " " + from.year + lineStr + month[to.month - 1] + " " : from.month !== to.month ? lineStr + month[to.month - 1] : "") + " " + to.year;
      }
      return daysModel.value[0].year;
    });
    const dateArrow = computed(() => {
      const val = [$q.iconSet.datetime.arrowLeft, $q.iconSet.datetime.arrowRight];
      return $q.lang.rtl === true ? val.reverse() : val;
    });
    const computedFirstDayOfWeek = computed(() => props.firstDayOfWeek !== void 0 ? Number(props.firstDayOfWeek) : innerLocale.value.firstDayOfWeek);
    const daysOfWeek = computed(() => {
      const days2 = innerLocale.value.daysShort, first = computedFirstDayOfWeek.value;
      return first > 0 ? days2.slice(first, 7).concat(days2.slice(0, first)) : days2;
    });
    const daysInMonth = computed(() => {
      const date = viewModel.value;
      return props.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
    });
    const evtColor = computed(() => typeof props.eventColor === "function" ? props.eventColor : () => props.eventColor);
    const minNav = computed(() => {
      if (props.navigationMinYearMonth === void 0) {
        return null;
      }
      const data = props.navigationMinYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const maxNav = computed(() => {
      if (props.navigationMaxYearMonth === void 0) {
        return null;
      }
      const data = props.navigationMaxYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const navBoundaries = computed(() => {
      const data = {
        month: { prev: true, next: true },
        year: { prev: true, next: true }
      };
      if (minNav.value !== null && minNav.value.year >= viewModel.value.year) {
        data.year.prev = false;
        if (minNav.value.year === viewModel.value.year && minNav.value.month >= viewModel.value.month) {
          data.month.prev = false;
        }
      }
      if (maxNav.value !== null && maxNav.value.year <= viewModel.value.year) {
        data.year.next = false;
        if (maxNav.value.year === viewModel.value.year && maxNav.value.month <= viewModel.value.month) {
          data.month.next = false;
        }
      }
      return data;
    });
    const daysMap = computed(() => {
      const map = {};
      daysModel.value.forEach((entry) => {
        const hash = getMonthHash(entry);
        if (map[hash] === void 0) {
          map[hash] = [];
        }
        map[hash].push(entry.day);
      });
      return map;
    });
    const rangeMap = computed(() => {
      const map = {};
      rangeModel.value.forEach((entry) => {
        const hashFrom = getMonthHash(entry.from);
        const hashTo = getMonthHash(entry.to);
        if (map[hashFrom] === void 0) {
          map[hashFrom] = [];
        }
        map[hashFrom].push({
          from: entry.from.day,
          to: hashFrom === hashTo ? entry.to.day : void 0,
          range: entry
        });
        if (hashFrom < hashTo) {
          let hash;
          const { year: year2, month } = entry.from;
          const cur = month < 12 ? { year: year2, month: month + 1 } : { year: year2 + 1, month: 1 };
          while ((hash = getMonthHash(cur)) <= hashTo) {
            if (map[hash] === void 0) {
              map[hash] = [];
            }
            map[hash].push({
              from: void 0,
              to: hash === hashTo ? entry.to.day : void 0,
              range: entry
            });
            cur.month++;
            if (cur.month > 12) {
              cur.year++;
              cur.month = 1;
            }
          }
        }
      });
      return map;
    });
    const rangeView = computed(() => {
      if (editRange.value === null)
        return;
      const { init, initHash, final, finalHash } = editRange.value;
      const [from, to] = initHash <= finalHash ? [init, final] : [final, init];
      const fromHash = getMonthHash(from);
      const toHash = getMonthHash(to);
      if (fromHash !== viewMonthHash.value && toHash !== viewMonthHash.value)
        return;
      const view2 = {};
      if (fromHash === viewMonthHash.value) {
        view2.from = from.day;
        view2.includeFrom = true;
      } else {
        view2.from = 1;
      }
      if (toHash === viewMonthHash.value) {
        view2.to = to.day;
        view2.includeTo = true;
      } else {
        view2.to = daysInMonth.value;
      }
      return view2;
    });
    const viewMonthHash = computed(() => getMonthHash(viewModel.value));
    const selectionDaysMap = computed(() => {
      const map = {};
      if (props.options === void 0) {
        for (let i = 1; i <= daysInMonth.value; i++) {
          map[i] = true;
        }
        return map;
      }
      const fn = typeof props.options === "function" ? props.options : (date) => props.options.includes(date);
      for (let i = 1; i <= daysInMonth.value; i++) {
        const dayHash = viewMonthHash.value + "/" + pad(i);
        map[i] = fn(dayHash);
      }
      return map;
    });
    const eventDaysMap = computed(() => {
      const map = {};
      if (props.events === void 0) {
        for (let i = 1; i <= daysInMonth.value; i++) {
          map[i] = false;
        }
      } else {
        const fn = typeof props.events === "function" ? props.events : (date) => props.events.includes(date);
        for (let i = 1; i <= daysInMonth.value; i++) {
          const dayHash = viewMonthHash.value + "/" + pad(i);
          map[i] = fn(dayHash) === true && evtColor.value(dayHash);
        }
      }
      return map;
    });
    const viewDays = computed(() => {
      let date, endDay;
      const { year: year2, month } = viewModel.value;
      if (props.calendar !== "persian") {
        date = new Date(year2, month - 1, 1);
        endDay = new Date(year2, month - 1, 0).getDate();
      } else {
        const gDate = toGregorian(year2, month, 1);
        date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
        let prevJM = month - 1;
        let prevJY = year2;
        if (prevJM === 0) {
          prevJM = 12;
          prevJY--;
        }
        endDay = jalaaliMonthLength(prevJY, prevJM);
      }
      return {
        days: date.getDay() - computedFirstDayOfWeek.value - 1,
        endDay
      };
    });
    const days = computed(() => {
      const res = [];
      const { days: days2, endDay } = viewDays.value;
      const len = days2 < 0 ? days2 + 7 : days2;
      if (len < 6) {
        for (let i = endDay - len; i <= endDay; i++) {
          res.push({ i, fill: true });
        }
      }
      const index = res.length;
      for (let i = 1; i <= daysInMonth.value; i++) {
        const day = { i, event: eventDaysMap.value[i], classes: [] };
        if (selectionDaysMap.value[i] === true) {
          day.in = true;
          day.flat = true;
        }
        res.push(day);
      }
      if (daysMap.value[viewMonthHash.value] !== void 0) {
        daysMap.value[viewMonthHash.value].forEach((day) => {
          const i = index + day - 1;
          Object.assign(res[i], {
            selected: true,
            unelevated: true,
            flat: false,
            color: computedColor.value,
            textColor: computedTextColor.value
          });
        });
      }
      if (rangeMap.value[viewMonthHash.value] !== void 0) {
        rangeMap.value[viewMonthHash.value].forEach((entry) => {
          if (entry.from !== void 0) {
            const from = index + entry.from - 1;
            const to = index + (entry.to || daysInMonth.value) - 1;
            for (let day = from; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[from], {
              rangeFrom: true,
              flat: false
            });
            entry.to !== void 0 && Object.assign(res[to], {
              rangeTo: true,
              flat: false
            });
          } else if (entry.to !== void 0) {
            const to = index + entry.to - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[to], {
              flat: false,
              rangeTo: true
            });
          } else {
            const to = index + daysInMonth.value - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
          }
        });
      }
      if (rangeView.value !== void 0) {
        const from = index + rangeView.value.from - 1;
        const to = index + rangeView.value.to - 1;
        for (let day = from; day <= to; day++) {
          res[day].color = computedColor.value;
          res[day].editRange = true;
        }
        if (rangeView.value.includeFrom === true) {
          res[from].editRangeFrom = true;
        }
        if (rangeView.value.includeTo === true) {
          res[to].editRangeTo = true;
        }
      }
      if (viewModel.value.year === today.value.year && viewModel.value.month === today.value.month) {
        res[index + today.value.day - 1].today = true;
      }
      const left = res.length % 7;
      if (left > 0) {
        const afterDays = 7 - left;
        for (let i = 1; i <= afterDays; i++) {
          res.push({ i, fill: true });
        }
      }
      res.forEach((day) => {
        let cls = "q-date__calendar-item ";
        if (day.fill === true) {
          cls += "q-date__calendar-item--fill";
        } else {
          cls += `q-date__calendar-item--${day.in === true ? "in" : "out"}`;
          if (day.range !== void 0) {
            cls += ` q-date__range${day.rangeTo === true ? "-to" : day.rangeFrom === true ? "-from" : ""}`;
          }
          if (day.editRange === true) {
            cls += ` q-date__edit-range${day.editRangeFrom === true ? "-from" : ""}${day.editRangeTo === true ? "-to" : ""}`;
          }
          if (day.range !== void 0 || day.editRange === true) {
            cls += ` text-${day.color}`;
          }
        }
        day.classes = cls;
      });
      return res;
    });
    const attributes = computed(() => props.disable === true ? { "aria-disabled": "true" } : {});
    watch(() => props.modelValue, (v) => {
      if (lastEmitValue === v) {
        lastEmitValue = 0;
      } else {
        const model = getViewModel(innerMask.value, innerLocale.value);
        updateViewModel(model.year, model.month, model);
      }
    });
    watch(view, () => {
      if (blurTargetRef.value !== null && proxy.$el.contains(document.activeElement) === true) {
        blurTargetRef.value.focus();
      }
    });
    watch(() => viewModel.value.year + "|" + viewModel.value.month, () => {
      emit("navigation", { year: viewModel.value.year, month: viewModel.value.month });
    });
    watch(mask, (val) => {
      updateValue(val, innerLocale.value, "mask");
      innerMask.value = val;
    });
    watch(locale, (val) => {
      updateValue(innerMask.value, val, "locale");
      innerLocale.value = val;
    });
    function setToday() {
      const { year: year2, month, day } = today.value;
      const date = {
        ...viewModel.value,
        year: year2,
        month,
        day
      };
      const monthMap = daysMap.value[getMonthHash(date)];
      if (monthMap === void 0 || monthMap.includes(date.day) === false) {
        addToModel(date);
      }
      setCalendarTo(date.year, date.month);
    }
    function setView(viewMode) {
      if (viewIsValid(viewMode) === true) {
        view.value = viewMode;
      }
    }
    function offsetCalendar(type, descending) {
      if (["month", "year"].includes(type)) {
        const fn = type === "month" ? goToMonth : goToYear;
        fn(descending === true ? -1 : 1);
      }
    }
    function setCalendarTo(year2, month) {
      view.value = "Calendar";
      updateViewModel(year2, month);
    }
    function setEditingRange(from, to) {
      if (props.range === false || !from) {
        editRange.value = null;
        return;
      }
      const init = Object.assign({ ...viewModel.value }, from);
      const final = to !== void 0 ? Object.assign({ ...viewModel.value }, to) : init;
      editRange.value = {
        init,
        initHash: getDayHash(init),
        final,
        finalHash: getDayHash(final)
      };
      setCalendarTo(init.year, init.month);
    }
    function getMask() {
      return props.calendar === "persian" ? "YYYY/MM/DD" : props.mask;
    }
    function decodeString(date, mask2, locale2) {
      return __splitDate(
        date,
        mask2,
        locale2,
        props.calendar,
        {
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        }
      );
    }
    function getViewModel(mask2, locale2) {
      const model = Array.isArray(props.modelValue) === true ? props.modelValue : props.modelValue ? [props.modelValue] : [];
      if (model.length === 0) {
        return getDefaultViewModel();
      }
      const target = model[model.length - 1];
      const decoded = decodeString(
        target.from !== void 0 ? target.from : target,
        mask2,
        locale2
      );
      return decoded.dateHash === null ? getDefaultViewModel() : decoded;
    }
    function getDefaultViewModel() {
      let year2, month;
      if (props.defaultYearMonth !== void 0) {
        const d = props.defaultYearMonth.split("/");
        year2 = parseInt(d[0], 10);
        month = parseInt(d[1], 10);
      } else {
        const d = today.value !== void 0 ? today.value : getCurrentDate();
        year2 = d.year;
        month = d.month;
      }
      return {
        year: year2,
        month,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        dateHash: year2 + "/" + pad(month) + "/01"
      };
    }
    function goToMonth(offset) {
      let year2 = viewModel.value.year;
      let month = Number(viewModel.value.month) + offset;
      if (month === 13) {
        month = 1;
        year2++;
      } else if (month === 0) {
        month = 12;
        year2--;
      }
      updateViewModel(year2, month);
      isImmediate.value === true && emitImmediately("month");
    }
    function goToYear(offset) {
      const year2 = Number(viewModel.value.year) + offset;
      updateViewModel(year2, viewModel.value.month);
      isImmediate.value === true && emitImmediately("year");
    }
    function setYear(year2) {
      updateViewModel(year2, viewModel.value.month);
      view.value = props.defaultView === "Years" ? "Months" : "Calendar";
      isImmediate.value === true && emitImmediately("year");
    }
    function setMonth(month) {
      updateViewModel(viewModel.value.year, month);
      view.value = "Calendar";
      isImmediate.value === true && emitImmediately("month");
    }
    function toggleDate(date, monthHash) {
      const month = daysMap.value[monthHash];
      const fn = month !== void 0 && month.includes(date.day) === true ? removeFromModel : addToModel;
      fn(date);
    }
    function getShortDate(date) {
      return { year: date.year, month: date.month, day: date.day };
    }
    function updateViewModel(year2, month, time) {
      if (minNav.value !== null && year2 <= minNav.value.year) {
        if (month < minNav.value.month || year2 < minNav.value.year) {
          month = minNav.value.month;
        }
        year2 = minNav.value.year;
      }
      if (maxNav.value !== null && year2 >= maxNav.value.year) {
        if (month > maxNav.value.month || year2 > maxNav.value.year) {
          month = maxNav.value.month;
        }
        year2 = maxNav.value.year;
      }
      if (time !== void 0) {
        const { hour, minute, second, millisecond, timezoneOffset, timeHash } = time;
        Object.assign(viewModel.value, { hour, minute, second, millisecond, timezoneOffset, timeHash });
      }
      const newHash = year2 + "/" + pad(month) + "/01";
      if (newHash !== viewModel.value.dateHash) {
        monthDirection.value = viewModel.value.dateHash < newHash === ($q.lang.rtl !== true) ? "left" : "right";
        if (year2 !== viewModel.value.year) {
          yearDirection.value = monthDirection.value;
        }
        nextTick(() => {
          startYear.value = year2 - year2 % yearsInterval - (year2 < 0 ? yearsInterval : 0);
          Object.assign(viewModel.value, {
            year: year2,
            month,
            day: 1,
            dateHash: newHash
          });
        });
      }
    }
    function emitValue(val, action, date) {
      const value = val !== null && val.length === 1 && props.multiple === false ? val[0] : val;
      lastEmitValue = value;
      const { reason, details } = getEmitParams(action, date);
      emit("update:modelValue", value, reason, details);
    }
    function emitImmediately(reason) {
      const date = daysModel.value[0] !== void 0 && daysModel.value[0].dateHash !== null ? { ...daysModel.value[0] } : { ...viewModel.value };
      nextTick(() => {
        date.year = viewModel.value.year;
        date.month = viewModel.value.month;
        const maxDay = props.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
        date.day = Math.min(Math.max(1, date.day), maxDay);
        const value = encodeEntry(date);
        lastEmitValue = value;
        const { details } = getEmitParams("", date);
        emit("update:modelValue", value, reason, details);
      });
    }
    function getEmitParams(action, date) {
      return date.from !== void 0 ? {
        reason: `${action}-range`,
        details: {
          ...getShortDate(date.target),
          from: getShortDate(date.from),
          to: getShortDate(date.to)
        }
      } : {
        reason: `${action}-day`,
        details: getShortDate(date)
      };
    }
    function encodeEntry(date, mask2, locale2) {
      return date.from !== void 0 ? { from: encodeObjectFn.value(date.from, mask2, locale2), to: encodeObjectFn.value(date.to, mask2, locale2) } : encodeObjectFn.value(date, mask2, locale2);
    }
    function addToModel(date) {
      let value;
      if (props.multiple === true) {
        if (date.from !== void 0) {
          const fromHash = getDayHash(date.from);
          const toHash = getDayHash(date.to);
          const days2 = daysModel.value.filter((day) => day.dateHash < fromHash || day.dateHash > toHash);
          const ranges = rangeModel.value.filter(({ from, to }) => to.dateHash < fromHash || from.dateHash > toHash);
          value = days2.concat(ranges).concat(date).map((entry) => encodeEntry(entry));
        } else {
          const model = normalizedModel.value.slice();
          model.push(encodeEntry(date));
          value = model;
        }
      } else {
        value = encodeEntry(date);
      }
      emitValue(value, "add", date);
    }
    function removeFromModel(date) {
      if (props.noUnset === true)
        return;
      let model = null;
      if (props.multiple === true && Array.isArray(props.modelValue) === true) {
        const val = encodeEntry(date);
        if (date.from !== void 0) {
          model = props.modelValue.filter(
            (date2) => date2.from !== void 0 ? date2.from !== val.from && date2.to !== val.to : true
          );
        } else {
          model = props.modelValue.filter((date2) => date2 !== val);
        }
        if (model.length === 0) {
          model = null;
        }
      }
      emitValue(model, "remove", date);
    }
    function updateValue(mask2, locale2, reason) {
      const model = daysModel.value.concat(rangeModel.value).map((entry) => encodeEntry(entry, mask2, locale2)).filter((entry) => {
        return entry.from !== void 0 ? entry.from.dateHash !== null && entry.to.dateHash !== null : entry.dateHash !== null;
      });
      emit("update:modelValue", (props.multiple === true ? model : model[0]) || null, reason);
    }
    function getHeader() {
      if (props.minimal === true)
        return;
      return h("div", {
        class: "q-date__header " + headerClass.value
      }, [
        h("div", {
          class: "relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, () => h("div", {
            key: "h-yr-" + headerSubtitle.value,
            class: "q-date__header-subtitle q-date__header-link " + (view.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            ...getCache("vY", {
              onClick() {
                view.value = "Years";
              },
              onKeyup(e) {
                e.keyCode === 13 && (view.value = "Years");
              }
            })
          }, [headerSubtitle.value]))
        ]),
        h("div", {
          class: "q-date__header-title relative-position flex no-wrap"
        }, [
          h("div", {
            class: "relative-position col"
          }, [
            h(Transition, {
              name: "q-transition--fade"
            }, () => h("div", {
              key: "h-sub" + headerTitle.value,
              class: "q-date__header-title-label q-date__header-link " + (view.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
              tabindex: tabindex.value,
              ...getCache("vC", {
                onClick() {
                  view.value = "Calendar";
                },
                onKeyup(e) {
                  e.keyCode === 13 && (view.value = "Calendar");
                }
              })
            }, [headerTitle.value]))
          ]),
          props.todayBtn === true ? h(QBtn, {
            class: "q-date__header-today self-start",
            icon: $q.iconSet.datetime.today,
            flat: true,
            size: "sm",
            round: true,
            tabindex: tabindex.value,
            onClick: setToday
          }) : null
        ])
      ]);
    }
    function getNavigation({ label, type, key, dir, goTo, boundaries, cls }) {
      return [
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[0],
            tabindex: tabindex.value,
            disable: boundaries.prev === false,
            ...getCache("go-#" + type, { onClick() {
              goTo(-1);
            } })
          })
        ]),
        h("div", {
          class: "relative-position overflow-hidden flex flex-center" + cls
        }, [
          h(Transition, {
            name: "q-transition--jump-" + dir
          }, () => h("div", { key }, [
            h(QBtn, {
              flat: true,
              dense: true,
              noCaps: true,
              label,
              tabindex: tabindex.value,
              ...getCache("view#" + type, { onClick: () => {
                view.value = type;
              } })
            })
          ]))
        ]),
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[1],
            tabindex: tabindex.value,
            disable: boundaries.next === false,
            ...getCache("go+#" + type, { onClick() {
              goTo(1);
            } })
          })
        ])
      ];
    }
    const renderViews = {
      Calendar: () => [
        h("div", {
          key: "calendar-view",
          class: "q-date__view q-date__calendar"
        }, [
          h("div", {
            class: "q-date__navigation row items-center no-wrap"
          }, getNavigation({
            label: innerLocale.value.months[viewModel.value.month - 1],
            type: "Months",
            key: viewModel.value.month,
            dir: monthDirection.value,
            goTo: goToMonth,
            boundaries: navBoundaries.value.month,
            cls: " col"
          }).concat(getNavigation({
            label: viewModel.value.year,
            type: "Years",
            key: viewModel.value.year,
            dir: yearDirection.value,
            goTo: goToYear,
            boundaries: navBoundaries.value.year,
            cls: ""
          }))),
          h("div", {
            class: "q-date__calendar-weekdays row items-center no-wrap"
          }, daysOfWeek.value.map((day) => h("div", { class: "q-date__calendar-item" }, [h("div", day)]))),
          h("div", {
            class: "q-date__calendar-days-container relative-position overflow-hidden"
          }, [
            h(Transition, {
              name: "q-transition--slide-" + monthDirection.value
            }, () => h("div", {
              key: viewMonthHash.value,
              class: "q-date__calendar-days fit"
            }, days.value.map((day) => h("div", { class: day.classes }, [
              day.in === true ? h(
                QBtn,
                {
                  class: day.today === true ? "q-date__today" : "",
                  dense: true,
                  flat: day.flat,
                  unelevated: day.unelevated,
                  color: day.color,
                  textColor: day.textColor,
                  label: day.i,
                  tabindex: tabindex.value,
                  ...getCache("day#" + day.i, {
                    onClick: () => {
                      onDayClick(day.i);
                    },
                    onMouseover: () => {
                      onDayMouseover(day.i);
                    }
                  })
                },
                day.event !== false ? () => h("div", { class: "q-date__event bg-" + day.event }) : null
              ) : h("div", "" + day.i)
            ]))))
          ])
        ])
      ],
      Months() {
        const currentYear = viewModel.value.year === today.value.year;
        const isDisabled = (month) => {
          return minNav.value !== null && viewModel.value.year === minNav.value.year && minNav.value.month > month || maxNav.value !== null && viewModel.value.year === maxNav.value.year && maxNav.value.month < month;
        };
        const content = innerLocale.value.monthsShort.map((month, i) => {
          const active = viewModel.value.month === i + 1;
          return h("div", {
            class: "q-date__months-item flex flex-center"
          }, [
            h(QBtn, {
              class: currentYear === true && today.value.month === i + 1 ? "q-date__today" : null,
              flat: active !== true,
              label: month,
              unelevated: active,
              color: active === true ? computedColor.value : null,
              textColor: active === true ? computedTextColor.value : null,
              tabindex: tabindex.value,
              disable: isDisabled(i + 1),
              ...getCache("month#" + i, { onClick: () => {
                setMonth(i + 1);
              } })
            })
          ]);
        });
        props.yearsInMonthView === true && content.unshift(
          h("div", { class: "row no-wrap full-width" }, [
            getNavigation({
              label: viewModel.value.year,
              type: "Years",
              key: viewModel.value.year,
              dir: yearDirection.value,
              goTo: goToYear,
              boundaries: navBoundaries.value.year,
              cls: " col"
            })
          ])
        );
        return h("div", {
          key: "months-view",
          class: "q-date__view q-date__months flex flex-center"
        }, content);
      },
      Years() {
        const start = startYear.value, stop = start + yearsInterval, years = [];
        const isDisabled = (year2) => {
          return minNav.value !== null && minNav.value.year > year2 || maxNav.value !== null && maxNav.value.year < year2;
        };
        for (let i = start; i <= stop; i++) {
          const active = viewModel.value.year === i;
          years.push(
            h("div", {
              class: "q-date__years-item flex flex-center"
            }, [
              h(QBtn, {
                key: "yr" + i,
                class: today.value.year === i ? "q-date__today" : null,
                flat: !active,
                label: i,
                dense: true,
                unelevated: active,
                color: active === true ? computedColor.value : null,
                textColor: active === true ? computedTextColor.value : null,
                tabindex: tabindex.value,
                disable: isDisabled(i),
                ...getCache("yr#" + i, { onClick: () => {
                  setYear(i);
                } })
              })
            ])
          );
        }
        return h("div", {
          class: "q-date__view q-date__years flex flex-center"
        }, [
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[0],
              tabindex: tabindex.value,
              disable: isDisabled(start),
              ...getCache("y-", { onClick: () => {
                startYear.value -= yearsInterval;
              } })
            })
          ]),
          h("div", {
            class: "q-date__years-content col self-stretch row items-center"
          }, years),
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[1],
              tabindex: tabindex.value,
              disable: isDisabled(stop),
              ...getCache("y+", { onClick: () => {
                startYear.value += yearsInterval;
              } })
            })
          ])
        ]);
      }
    };
    function onDayClick(dayIndex) {
      const day = { ...viewModel.value, day: dayIndex };
      if (props.range === false) {
        toggleDate(day, viewMonthHash.value);
        return;
      }
      if (editRange.value === null) {
        const dayProps = days.value.find((day2) => day2.fill !== true && day2.i === dayIndex);
        if (props.noUnset !== true && dayProps.range !== void 0) {
          removeFromModel({ target: day, from: dayProps.range.from, to: dayProps.range.to });
          return;
        }
        if (dayProps.selected === true) {
          removeFromModel(day);
          return;
        }
        const initHash = getDayHash(day);
        editRange.value = {
          init: day,
          initHash,
          final: day,
          finalHash: initHash
        };
        emit("rangeStart", getShortDate(day));
      } else {
        const initHash = editRange.value.initHash, finalHash = getDayHash(day), payload = initHash <= finalHash ? { from: editRange.value.init, to: day } : { from: day, to: editRange.value.init };
        editRange.value = null;
        addToModel(initHash === finalHash ? day : { target: day, ...payload });
        emit("rangeEnd", {
          from: getShortDate(payload.from),
          to: getShortDate(payload.to)
        });
      }
    }
    function onDayMouseover(dayIndex) {
      if (editRange.value !== null) {
        const final = { ...viewModel.value, day: dayIndex };
        Object.assign(editRange.value, {
          final,
          finalHash: getDayHash(final)
        });
      }
    }
    Object.assign(proxy, {
      setToday,
      setView,
      offsetCalendar,
      setCalendarTo,
      setEditingRange
    });
    return () => {
      const content = [
        h("div", {
          class: "q-date__content col relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, renderViews[view.value])
        ])
      ];
      const def = hSlot(slots.default);
      def !== void 0 && content.push(
        h("div", { class: "q-date__actions" }, def)
      );
      if (props.name !== void 0 && props.disable !== true) {
        injectFormInput(content, "push");
      }
      return h("div", {
        class: classes.value,
        ...attributes.value
      }, [
        getHeader(),
        h("div", {
          ref: blurTargetRef,
          class: "q-date__main col column",
          tabindex: -1
        }, content)
      ]);
    };
  }
});
var QPopupProxy = createComponent({
  name: "QPopupProxy",
  props: {
    ...useAnchorProps,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const showing = ref(false);
    const popupRef = ref(null);
    const breakpoint = computed(() => parseInt(props.breakpoint, 10));
    const { canShow } = useAnchor({ showing });
    function getType() {
      return $q.screen.width < breakpoint.value || $q.screen.height < breakpoint.value ? "dialog" : "menu";
    }
    const type = ref(getType());
    const popupProps = computed(
      () => type.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    watch(() => getType(), (val) => {
      if (showing.value !== true) {
        type.value = val;
      }
    });
    function onShow(evt) {
      showing.value = true;
      emit("show", evt);
    }
    function onHide(evt) {
      showing.value = false;
      type.value = getType();
      emit("hide", evt);
    }
    Object.assign(proxy, {
      show(evt) {
        canShow(evt) === true && popupRef.value.show(evt);
      },
      hide(evt) {
        popupRef.value.hide(evt);
      },
      toggle(evt) {
        popupRef.value.toggle(evt);
      }
    });
    injectProp(proxy, "currentComponent", () => ({
      type: type.value,
      ref: popupRef.value
    }));
    return () => {
      const data = {
        ref: popupRef,
        ...popupProps.value,
        ...attrs,
        onShow,
        onHide
      };
      let component;
      if (type.value === "dialog") {
        component = QDialog;
      } else {
        component = QMenu;
        Object.assign(data, {
          target: props.target,
          contextMenu: props.contextMenu,
          noParentEvent: true,
          separateClosePopup: true
        });
      }
      return h(component, data, slots.default);
    };
  }
});
function useCombinedLoadableAwaiter(...loadables) {
  const _status = ref(LoadingStatus.NotLoaded);
  const _state = ref(null);
  const _error = ref(null);
  function setStatus(status) {
    _status.value = status;
  }
  function setError(e) {
    _error.value = e;
    setStatus(LoadingStatus.Error);
  }
  function setSuccess() {
    setStatus(LoadingStatus.Success);
  }
  function setLoading() {
    setStatus(LoadingStatus.Loading);
  }
  watch(
    () => loadables.map((loadable) => loadable.status.value),
    (statuses) => {
      var _a;
      if (statuses.some((status) => status === LoadingStatus.Loading)) {
        setLoading();
      } else if (statuses.some((status) => status === LoadingStatus.Error)) {
        const error = (_a = loadables.find((loadable) => loadable.status.value === LoadingStatus.Error)) == null ? void 0 : _a.error.value;
        if (error) {
          setError(error);
        }
      } else if (statuses.every((status) => status === LoadingStatus.Success)) {
        setSuccess();
      } else {
        setStatus(LoadingStatus.NotLoaded);
      }
    },
    { immediate: true }
  );
  return {
    status: _status,
    state: _state,
    error: _error,
    setError,
    setSuccess,
    setLoading
  };
}
const TrackStratificationMode = {
  None: "None",
  Album: "Album",
  Circle: "Circle"
};
const _sfc_main$1 = {};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Stratification", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle2" }, " Select how tracks are grouped for random sampling. ", -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body1" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "What is Stratification?"),
    /* @__PURE__ */ createTextVNode(" Stratification is a method used to ensure that tracks are sampled evenly based on specific criteria. This prevents overrepresentation of certain groups such as albums, circles, or years. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "Album"),
    /* @__PURE__ */ createTextVNode(" - Ensures an equal number of tracks are selected from each album, regardless of the total number of tracks in the album. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "Circle"),
    /* @__PURE__ */ createTextVNode(" - Ensures an equal number of tracks are selected from each circle, preventing circles with more tracks from dominating. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "Year"),
    /* @__PURE__ */ createTextVNode(" - Ensures tracks are distributed evenly across release years, so tracks from all years are equally represented. ")
  ])
], -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body2 text-secondary" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "Note:"),
    /* @__PURE__ */ createTextVNode(" Stratification ensures a balanced selection but does not guarantee a noticeable difference in smaller datasets or if the distribution of tracks is already even. Additionally, some randomness is still present, so results may vary between sessions. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "Important:"),
    /* @__PURE__ */ createTextVNode(" Circles with smaller catalogs may have a higher probability of selecting the same track multiple times over a large sample size. This occurs because tracks are sampled from each circle independently, and smaller circles inherently have fewer unique options to choose from. ")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createBlock(QDialog, {
    position: "top",
    "backdrop-filter": "brightness(60%)"
  }, {
    default: withCtx(() => [
      createVNode(QCard, { style: { "width": "500px", "max-width": "40vw", "margin-top": "10vh", "border-radius": "5px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _hoisted_1$1,
              _hoisted_2$1,
              createVNode(QSeparator, { class: "q-my-md" }),
              _hoisted_3$1,
              createVNode(QSeparator, { class: "q-my-md" }),
              _hoisted_4$1
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var StratificationModeHelpDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "StratificationModeHelpDialog.vue"]]);
const _hoisted_1 = { class: "q-pa-md" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Radio Configuration", -1);
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "row items-center justify-end" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("hr", { class: "vertical-separator q-mx-md bg-transparent transparent" }, null, -1);
const _hoisted_6 = { class: "row items-center justify-end" };
const _hoisted_7 = { class: "row items-center" };
const _hoisted_8 = { class: "q-pa-sm" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Radio", -1);
const _sfc_main = defineComponent({
  __name: "RadioPage",
  setup(__props) {
    const radioService = inject("radioService");
    const staticData = inject("globalStaticDataProvider");
    const $q = useQuasar();
    const startRadio = () => {
      radioService == null ? void 0 : radioService.toggle();
    };
    const staticDataAwaiter = useCombinedLoadableAwaiter(
      staticData.circles,
      staticData.originalAlbums,
      staticData.originalTracks
    );
    const filters = reactive({
      releaseDateEnd: null,
      releaseDateBegin: null,
      circles: [],
      originalAlbums: [],
      originalTracks: [],
      stratificationMode: TrackStratificationMode.None
    });
    const toRadioFilters = () => {
      const raw = toRaw(filters);
      const releaseDateEnd = raw.releaseDateEnd ? new Date(raw.releaseDateEnd) : null;
      const releaseDateBegin = raw.releaseDateBegin ? new Date(raw.releaseDateBegin) : null;
      return {
        releaseDateEnd: releaseDateEnd || void 0,
        releaseDateBegin: releaseDateBegin || void 0,
        circles: raw.circles.map((c) => c.key),
        originalAlbums: raw.originalAlbums.map((oa) => oa.key),
        originalTracks: raw.originalTracks.flatMap((ot) => ot.aliasPks),
        stratificationMode: raw.stratificationMode
      };
    };
    const fromRadioFilters = (radioFilters) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const circles = (_b = (_a = radioFilters == null ? void 0 : radioFilters.circles) == null ? void 0 : _a.map((c) => circleOptions.value.find((o) => o.key === c))) != null ? _b : [];
      const originalAlbums = (_d = (_c = radioFilters == null ? void 0 : radioFilters.originalAlbums) == null ? void 0 : _c.map(
        (oa) => originalAlbumsOptions.value.find((o) => o.key === oa)
      )) != null ? _d : [];
      const originalTracks = (_f = (_e = radioFilters == null ? void 0 : radioFilters.originalTracks) == null ? void 0 : _e.map((ot) => {
        const found = originalTracksOptions.value.find((o) => ot in o.aliasPks);
        if (!found) {
          throw new Error("Original track not found");
        }
        return found;
      })) != null ? _f : [];
      return {
        releaseDateEnd: (_h = (_g = radioFilters.releaseDateEnd) == null ? void 0 : _g.toISOString()) != null ? _h : null,
        releaseDateBegin: (_j = (_i = radioFilters.releaseDateBegin) == null ? void 0 : _i.toISOString()) != null ? _j : null,
        circles,
        originalAlbums,
        originalTracks,
        stratificationMode: (_k = radioFilters.stratificationMode) != null ? _k : TrackStratificationMode.None
      };
    };
    const applyRadioSettings = () => {
      radioService == null ? void 0 : radioService.setFilters(toRadioFilters());
    };
    const showStratificationInfo = () => {
      $q.dialog({
        component: StratificationModeHelpDialog
      });
    };
    const stratificationOptions = [
      { label: "None", value: TrackStratificationMode.None, tooltip: "No stratification" },
      { label: "Album", value: TrackStratificationMode.Album, tooltip: "Equal number of tracks per album" },
      { label: "Circle", value: TrackStratificationMode.Circle, tooltip: "Equal number of tracks per circle" }
    ];
    const circleDtoToSelectOption = (dto) => ({
      key: dto.id,
      label: dto.name
    });
    const originalAlbumsDtoToSelectOption = (dto) => ({
      key: dto.id,
      label: dto.fullName.en
    });
    const originalTracksDtoToSelectOptions = (dtos) => {
      dtos.sort((a, b) => a.id.localeCompare(b.id));
      const map = /* @__PURE__ */ new Map();
      for (const dto of dtos) {
        const key = dto.title.en;
        if (map.has(key)) {
          const option = map.get(key);
          option.aliasPks.push(dto.id);
        } else {
          map.set(key, {
            key: dto.id,
            label: key,
            aliasPks: [dto.id],
            albumName: dto.album.shortName.en
          });
        }
      }
      return Array.from(map.values());
    };
    const circleOptions = ref([]);
    const originalAlbumsOptions = ref([]);
    const originalTracksOptions = ref([]);
    const restoreCurrentFilters = () => {
      const radioFilters = radioService == null ? void 0 : radioService.filters.value;
      if (radioFilters) {
        const existingFilters = fromRadioFilters(radioFilters);
        Object.assign(filters, existingFilters);
      }
    };
    const initializeOptions = () => {
      circleOptions.value = staticData.circles.state.value.map(
        (dto) => circleDtoToSelectOption(dto)
      );
      originalAlbumsOptions.value = staticData.originalAlbums.state.value.map(
        (dto) => originalAlbumsDtoToSelectOption(dto)
      );
      originalTracksOptions.value = originalTracksDtoToSelectOptions(
        staticData.originalTracks.state.value
      );
    };
    watch(staticDataAwaiter.status, (status) => {
      if (status === LoadingStatus.Success) {
        initializeOptions();
        restoreCurrentFilters();
      }
    });
    const circleFilterFn = (val, update) => {
      update(() => {
        const needle = val.toLowerCase();
        circleOptions.value = staticData.circles.state.value.filter((dto) => {
          return dto.name.toLowerCase().includes(needle);
        }).map(circleDtoToSelectOption);
      });
    };
    const originalAlbumsFilterFn = (val, update) => {
      update(() => {
        const needle = val.toLowerCase();
        originalAlbumsOptions.value = staticData.originalAlbums.state.value.filter((dto) => {
          return dto.fullName.en.toLowerCase().includes(needle);
        }).map(originalAlbumsDtoToSelectOption);
      });
    };
    const originalTracksFilterFn = (val, update) => {
      update(() => {
        const needle = val.toLowerCase();
        originalTracksOptions.value = originalTracksDtoToSelectOptions(
          staticData.originalTracks.state.value.filter((dto) => {
            return dto.title.en.toLowerCase().includes(needle);
          })
        );
      });
    };
    onMounted(() => {
      if (staticDataAwaiter.status.value === LoadingStatus.Success) {
        initializeOptions();
        restoreCurrentFilters();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(LoadableElement, { "state-controller": unref(staticDataAwaiter) }, {
            loading: withCtx(() => [
              createVNode(QSpinnerGears, { size: "100px" })
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(QCard, {
                  flat: "",
                  bordered: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        _hoisted_2
                      ]),
                      _: 1
                    }),
                    createVNode(QSeparator),
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "col-8" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_3, [
                              createVNode(QInput, {
                                class: "col",
                                filled: "",
                                label: "Release Date (After Date)",
                                modelValue: filters.releaseDateBegin,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filters.releaseDateBegin = $event),
                                mask: "date",
                                rules: ["date"]
                              }, {
                                append: withCtx(() => [
                                  createVNode(QIcon, {
                                    name: "event",
                                    class: "cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QPopupProxy, {
                                        cover: "",
                                        "transition-show": "scale",
                                        "transition-hide": "scale"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QDate, {
                                            modelValue: filters.releaseDateBegin,
                                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.releaseDateBegin = $event)
                                          }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_4, [
                                                withDirectives(createVNode(QBtn, {
                                                  label: "Close",
                                                  color: "primary",
                                                  flat: ""
                                                }, null, 512), [
                                                  [ClosePopup]
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue"]),
                              _hoisted_5,
                              createVNode(QInput, {
                                class: "col",
                                filled: "",
                                label: "Release Date (Before Date)",
                                modelValue: filters.releaseDateEnd,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filters.releaseDateEnd = $event),
                                mask: "date",
                                rules: ["date"]
                              }, {
                                append: withCtx(() => [
                                  createVNode(QIcon, {
                                    name: "event",
                                    class: "cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QPopupProxy, {
                                        cover: "",
                                        "transition-show": "scale",
                                        "transition-hide": "scale"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QDate, {
                                            modelValue: filters.releaseDateEnd,
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.releaseDateEnd = $event)
                                          }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_6, [
                                                withDirectives(createVNode(QBtn, {
                                                  label: "Close",
                                                  color: "primary",
                                                  flat: ""
                                                }, null, 512), [
                                                  [ClosePopup]
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue"])
                            ]),
                            createVNode(QSelect, {
                              label: "Circle Select",
                              filled: "",
                              behavior: "dialog",
                              modelValue: filters.circles,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => filters.circles = $event),
                              "use-input": "",
                              "use-chips": "",
                              multiple: "",
                              "input-debounce": "0",
                              options: circleOptions.value,
                              onFilter: circleFilterFn,
                              class: "q-mb-md"
                            }, {
                              "no-option": withCtx(() => [
                                createVNode(QItem, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" No results ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"]),
                            createVNode(QSelect, {
                              label: "Original Albums",
                              behavior: "dialog",
                              filled: "",
                              modelValue: filters.originalAlbums,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => filters.originalAlbums = $event),
                              "use-input": "",
                              "use-chips": "",
                              multiple: "",
                              "input-debounce": "0",
                              options: originalAlbumsOptions.value,
                              onFilter: originalAlbumsFilterFn,
                              class: "q-mb-md"
                            }, {
                              "no-option": withCtx(() => [
                                createVNode(QItem, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" No results ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"]),
                            createVNode(QSelect, {
                              label: "Original Tracks",
                              behavior: "dialog",
                              filled: "",
                              modelValue: filters.originalTracks,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => filters.originalTracks = $event),
                              "use-input": "",
                              "use-chips": "",
                              multiple: "",
                              "input-debounce": "0",
                              options: originalTracksOptions.value,
                              onFilter: originalTracksFilterFn,
                              class: "q-mb-md"
                            }, {
                              option: withCtx((scope) => [
                                createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createVNode(QItemLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(scope.opt.label), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemLabel, { caption: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(scope.opt.albumName), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              "no-option": withCtx(() => [
                                createVNode(QItem, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" No results ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"]),
                            createVNode(QSeparator, { class: "full-width q-ma-md" }),
                            createBaseVNode("div", _hoisted_7, [
                              createBaseVNode("div", _hoisted_8, [
                                createVNode(QBtn, {
                                  round: "",
                                  color: "primary",
                                  icon: "info",
                                  padding: "none",
                                  onClick: showStratificationInfo
                                })
                              ]),
                              createVNode(QSelect, {
                                class: "col",
                                label: "Stratification",
                                filled: "",
                                modelValue: filters.stratificationMode,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => filters.stratificationMode = $event),
                                options: stratificationOptions
                              }, {
                                option: withCtx((scope) => [
                                  createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(scope.opt.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(QItemSection, { side: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(scope.opt.tooltip), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 1
                              }, 8, ["modelValue"])
                            ]),
                            createVNode(QSeparator, { class: "full-width q-ma-md" }),
                            createVNode(QBtn, {
                              label: "Apply Radio Settings",
                              color: "primary",
                              class: "full-width",
                              size: "md",
                              onClick: applyRadioSettings
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCard, {
                  class: "q-mt-md",
                  flat: "",
                  bordered: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        _hoisted_9
                      ]),
                      _: 1
                    }),
                    createVNode(QSeparator),
                    createVNode(QCardSection, { class: "col-4 column" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          label: "Start/Stop Radio",
                          color: "primary",
                          class: "full-width q-mb-md",
                          onClick: startRadio
                        }),
                        createVNode(QBtn, {
                          label: "Clear Radio Tracks From Queue",
                          color: "primary",
                          class: "full-width q-mb-md"
                        }),
                        createVNode(QBtn, {
                          label: "Check Total Tracks Given Radio Settings",
                          color: "primary",
                          class: "full-width q-mb-md"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["state-controller"])
        ]),
        _: 1
      });
    };
  }
});
var RadioPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "RadioPage.vue"]]);
export { RadioPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9QYWdlLjA4MDJmYjU5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlL3VzZS1yZW5kZXItY2FjaGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9kYXRlL3ByaXZhdGUucGVyc2lhbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZGF0ZS91c2UtZGF0ZXRpbWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9kYXRlL2RhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2RhdGUvUURhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BvcHVwLXByb3h5L1FQb3B1cFByb3h5LmpzIiwiLi4vLi4vLi4vc3JjL3V0aWxzL0xvYWRhYmxlL0NvbWJpbmVkTG9hZGFibGVBd2FpdGVyLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9zcmMvbW9kZWxzL1RyYWNrU3RyYXRpZmljYXRpb25Nb2RlLnRzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL1JhZGlvUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRDYWNoZTogX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gICAgICA/IChfLCBkZWZhdWx0VmFsdWUpID0+IChcbiAgICAgICAgICB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZSgpXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZVxuICAgICAgICApXG4gICAgICA6IChrZXksIGRlZmF1bHRWYWx1ZSkgPT4gKFxuICAgICAgICAgIGNhY2hlWyBrZXkgXSA9PT0gdm9pZCAwXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICBjYWNoZVsga2V5IF0gPSAoXG4gICAgICAgICAgICAgICAgICB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlKClcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogY2FjaGVbIGtleSBdXG4gICAgICAgICksXG5cbiAgICBzZXRDYWNoZSAoa2V5LCBvYmopIHtcbiAgICAgIGNhY2hlWyBrZXkgXSA9IG9ialxuICAgIH0sXG5cbiAgICBoYXNDYWNoZSAoa2V5KSB7XG4gICAgICByZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGtleSlcbiAgICB9LFxuXG4gICAgY2xlYXJDYWNoZSAoa2V5KSB7XG4gICAgICBpZiAoa2V5ICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGVsZXRlIGNhY2hlWyBrZXkgXVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFsYWFsaS9qYWxhYWxpLWpzXG5cbi8qXG4gIEphbGFhbGkgeWVhcnMgc3RhcnRpbmcgdGhlIDMzLXllYXIgcnVsZS5cbiovXG5jb25zdCBicmVha3MgPSBbXG4gIC02MSwgOSwgMzgsIDE5OSwgNDI2LCA2ODYsIDc1NiwgODE4LCAxMTExLCAxMTgxLCAxMjEwLFxuICAxNjM1LCAyMDYwLCAyMDk3LCAyMTkyLCAyMjYyLCAyMzI0LCAyMzk0LCAyNDU2LCAzMTc4XG5dXG5cbi8qXG4gIENvbnZlcnRzIGEgR3JlZ29yaWFuIGRhdGUgdG8gSmFsYWFsaS5cbiovXG5leHBvcnQgZnVuY3Rpb24gdG9KYWxhYWxpIChneSwgZ20sIGdkKSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ3kpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICBnZCA9IGd5LmdldERhdGUoKVxuICAgIGdtID0gZ3kuZ2V0TW9udGgoKSArIDFcbiAgICBneSA9IGd5LmdldEZ1bGxZZWFyKClcbiAgfVxuICByZXR1cm4gZDJqKGcyZChneSwgZ20sIGdkKSlcbn1cblxuLypcbiAgQ29udmVydHMgYSBKYWxhYWxpIGRhdGUgdG8gR3JlZ29yaWFuLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0dyZWdvcmlhbiAoanksIGptLCBqZCkge1xuICByZXR1cm4gZDJnKGoyZChqeSwgam0sIGpkKSlcbn1cblxuLypcbiAgSXMgdGhpcyBhIGxlYXAgeWVhciBvciBub3Q/XG4qL1xuZnVuY3Rpb24gaXNMZWFwSmFsYWFsaVllYXIgKGp5KSB7XG4gIHJldHVybiBqYWxDYWxMZWFwKGp5KSA9PT0gMFxufVxuXG4vKlxuICBOdW1iZXIgb2YgZGF5cyBpbiBhIGdpdmVuIG1vbnRoIGluIGEgSmFsYWFsaSB5ZWFyLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBqYWxhYWxpTW9udGhMZW5ndGggKGp5LCBqbSkge1xuICBpZiAoam0gPD0gNikgcmV0dXJuIDMxXG4gIGlmIChqbSA8PSAxMSkgcmV0dXJuIDMwXG4gIGlmIChpc0xlYXBKYWxhYWxpWWVhcihqeSkpIHJldHVybiAzMFxuICByZXR1cm4gMjlcbn1cblxuLypcbiAgICBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIEphbGFhbGkgKFBlcnNpYW4pIHllYXIgaXNcbiAgICBsZWFwICgzNjYtZGF5IGxvbmcpIG9yIGlzIHRoZSBjb21tb24geWVhciAoMzY1IGRheXMpXG5cbiAgICBAcGFyYW0gankgSmFsYWFsaSBjYWxlbmRhciB5ZWFyICgtNjEgdG8gMzE3NylcbiAgICBAcmV0dXJucyBudW1iZXIgb2YgeWVhcnMgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyICgwIHRvIDQpXG4gKi9cbmZ1bmN0aW9uIGphbENhbExlYXAgKGp5KSB7XG4gIGNvbnN0IGJsID0gYnJlYWtzLmxlbmd0aFxuICBsZXRcbiAgICBqcCA9IGJyZWFrc1sgMCBdLFxuICAgIGptLFxuICAgIGp1bXAsXG4gICAgbGVhcCxcbiAgICBuLFxuICAgIGlcblxuICBpZiAoankgPCBqcCB8fCBqeSA+PSBicmVha3NbIGJsIC0gMSBdKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKYWxhYWxpIHllYXIgJyArIGp5KSB9XG5cbiAgZm9yIChpID0gMTsgaSA8IGJsOyBpICs9IDEpIHtcbiAgICBqbSA9IGJyZWFrc1sgaSBdXG4gICAganVtcCA9IGptIC0ganBcbiAgICBpZiAoankgPCBqbSkgeyBicmVhayB9XG4gICAganAgPSBqbVxuICB9XG4gIG4gPSBqeSAtIGpwXG5cbiAgaWYgKGp1bXAgLSBuIDwgNikgeyBuID0gbiAtIGp1bXAgKyBkaXYoanVtcCArIDQsIDMzKSAqIDMzIH1cbiAgbGVhcCA9IG1vZChtb2QobiArIDEsIDMzKSAtIDEsIDQpXG4gIGlmIChsZWFwID09PSAtMSkge1xuICAgIGxlYXAgPSA0XG4gIH1cblxuICByZXR1cm4gbGVhcFxufVxuXG4vKlxuICBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIEphbGFhbGkgKFBlcnNpYW4pIHllYXIgaXNcbiAgbGVhcCAoMzY2LWRheSBsb25nKSBvciBpcyB0aGUgY29tbW9uIHllYXIgKDM2NSBkYXlzKSwgYW5kXG4gIGZpbmRzIHRoZSBkYXkgaW4gTWFyY2ggKEdyZWdvcmlhbiBjYWxlbmRhcikgb2YgdGhlIGZpcnN0XG4gIGRheSBvZiB0aGUgSmFsYWFsaSB5ZWFyIChqeSkuXG5cbiAgQHBhcmFtIGp5IEphbGFhbGkgY2FsZW5kYXIgeWVhciAoLTYxIHRvIDMxNzcpXG4gIEBwYXJhbSB3aXRob3V0TGVhcCB3aGVuIGRvbid0IG5lZWQgbGVhcCAodHJ1ZSBvciBmYWxzZSkgZGVmYXVsdCBpcyBmYWxzZVxuICBAcmV0dXJuXG4gICAgbGVhcDogbnVtYmVyIG9mIHllYXJzIHNpbmNlIHRoZSBsYXN0IGxlYXAgeWVhciAoMCB0byA0KVxuICAgIGd5OiBHcmVnb3JpYW4geWVhciBvZiB0aGUgYmVnaW5uaW5nIG9mIEphbGFhbGkgeWVhclxuICAgIG1hcmNoOiB0aGUgTWFyY2ggZGF5IG9mIEZhcnZhcmRpbiB0aGUgMXN0ICgxc3QgZGF5IG9mIGp5KVxuICBAc2VlOiBodHRwOi8vd3d3LmFzdHJvLnVuaS50b3J1bi5wbC9+a2IvUGFwZXJzL0VNUC9QZXJzaWFuQy1FTVAuaHRtXG4gIEBzZWU6IGh0dHA6Ly93d3cuZm91cm1pbGFiLmNoL2RvY3VtZW50cy9jYWxlbmRhci9cbiovXG5mdW5jdGlvbiBqYWxDYWwgKGp5LCB3aXRob3V0TGVhcCkge1xuICBjb25zdFxuICAgIGJsID0gYnJlYWtzLmxlbmd0aCxcbiAgICBneSA9IGp5ICsgNjIxXG4gIGxldFxuICAgIGxlYXBKID0gLTE0LFxuICAgIGpwID0gYnJlYWtzWyAwIF0sXG4gICAgam0sXG4gICAganVtcCxcbiAgICBsZWFwLFxuICAgIG4sXG4gICAgaVxuXG4gIGlmIChqeSA8IGpwIHx8IGp5ID49IGJyZWFrc1sgYmwgLSAxIF0pIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEphbGFhbGkgeWVhciAnICsgankpIH1cblxuICAvLyBGaW5kIHRoZSBsaW1pdGluZyB5ZWFycyBmb3IgdGhlIEphbGFhbGkgeWVhciBqeS5cbiAgZm9yIChpID0gMTsgaSA8IGJsOyBpICs9IDEpIHtcbiAgICBqbSA9IGJyZWFrc1sgaSBdXG4gICAganVtcCA9IGptIC0ganBcbiAgICBpZiAoankgPCBqbSkgeyBicmVhayB9XG4gICAgbGVhcEogPSBsZWFwSiArIGRpdihqdW1wLCAzMykgKiA4ICsgZGl2KG1vZChqdW1wLCAzMyksIDQpXG4gICAganAgPSBqbVxuICB9XG4gIG4gPSBqeSAtIGpwXG5cbiAgLy8gRmluZCB0aGUgbnVtYmVyIG9mIGxlYXAgeWVhcnMgZnJvbSBBRCA2MjEgdG8gdGhlIGJlZ2lubmluZ1xuICAvLyBvZiB0aGUgY3VycmVudCBKYWxhYWxpIHllYXIgaW4gdGhlIFBlcnNpYW4gY2FsZW5kYXIuXG4gIGxlYXBKID0gbGVhcEogKyBkaXYobiwgMzMpICogOCArIGRpdihtb2QobiwgMzMpICsgMywgNClcbiAgaWYgKG1vZChqdW1wLCAzMykgPT09IDQgJiYganVtcCAtIG4gPT09IDQpIHsgbGVhcEogKz0gMSB9XG5cbiAgLy8gQW5kIHRoZSBzYW1lIGluIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIgKHVudGlsIHRoZSB5ZWFyIGd5KS5cbiAgY29uc3QgbGVhcEcgPSBkaXYoZ3ksIDQpIC0gZGl2KChkaXYoZ3ksIDEwMCkgKyAxKSAqIDMsIDQpIC0gMTUwXG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBHcmVnb3JpYW4gZGF0ZSBvZiBGYXJ2YXJkaW4gdGhlIDFzdC5cbiAgY29uc3QgbWFyY2ggPSAyMCArIGxlYXBKIC0gbGVhcEdcblxuICAvLyBGaW5kIGhvdyBtYW55IHllYXJzIGhhdmUgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGxlYXAgeWVhci5cbiAgaWYgKCF3aXRob3V0TGVhcCkge1xuICAgIGlmIChqdW1wIC0gbiA8IDYpIHsgbiA9IG4gLSBqdW1wICsgZGl2KGp1bXAgKyA0LCAzMykgKiAzMyB9XG4gICAgbGVhcCA9IG1vZChtb2QobiArIDEsIDMzKSAtIDEsIDQpXG4gICAgaWYgKGxlYXAgPT09IC0xKSB7XG4gICAgICBsZWFwID0gNFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVhcCxcbiAgICBneSxcbiAgICBtYXJjaFxuICB9XG59XG5cbi8qXG4gIENvbnZlcnRzIGEgZGF0ZSBvZiB0aGUgSmFsYWFsaSBjYWxlbmRhciB0byB0aGUgSnVsaWFuIERheSBudW1iZXIuXG5cbiAgQHBhcmFtIGp5IEphbGFhbGkgeWVhciAoMSB0byAzMTAwKVxuICBAcGFyYW0gam0gSmFsYWFsaSBtb250aCAoMSB0byAxMilcbiAgQHBhcmFtIGpkIEphbGFhbGkgZGF5ICgxIHRvIDI5LzMxKVxuICBAcmV0dXJuIEp1bGlhbiBEYXkgbnVtYmVyXG4qL1xuZnVuY3Rpb24gajJkIChqeSwgam0sIGpkKSB7XG4gIGNvbnN0IHIgPSBqYWxDYWwoanksIHRydWUpXG4gIHJldHVybiBnMmQoci5neSwgMywgci5tYXJjaCkgKyAoam0gLSAxKSAqIDMxIC0gZGl2KGptLCA3KSAqIChqbSAtIDcpICsgamQgLSAxXG59XG5cbi8qXG4gIENvbnZlcnRzIHRoZSBKdWxpYW4gRGF5IG51bWJlciB0byBhIGRhdGUgaW4gdGhlIEphbGFhbGkgY2FsZW5kYXIuXG5cbiAgQHBhcmFtIGpkbiBKdWxpYW4gRGF5IG51bWJlclxuICBAcmV0dXJuXG4gICAgank6IEphbGFhbGkgeWVhciAoMSB0byAzMTAwKVxuICAgIGptOiBKYWxhYWxpIG1vbnRoICgxIHRvIDEyKVxuICAgIGpkOiBKYWxhYWxpIGRheSAoMSB0byAyOS8zMSlcbiovXG5mdW5jdGlvbiBkMmogKGpkbikge1xuICBjb25zdCBneSA9IGQyZyhqZG4pLmd5IC8vIENhbGN1bGF0ZSBHcmVnb3JpYW4geWVhciAoZ3kpLlxuICBsZXRcbiAgICBqeSA9IGd5IC0gNjIxLFxuICAgIGpkLFxuICAgIGptLFxuICAgIGtcbiAgY29uc3RcbiAgICByID0gamFsQ2FsKGp5LCBmYWxzZSksXG4gICAgamRuMWYgPSBnMmQoZ3ksIDMsIHIubWFyY2gpXG5cbiAgLy8gRmluZCBudW1iZXIgb2YgZGF5cyB0aGF0IHBhc3NlZCBzaW5jZSAxIEZhcnZhcmRpbi5cbiAgayA9IGpkbiAtIGpkbjFmXG4gIGlmIChrID49IDApIHtcbiAgICBpZiAoayA8PSAxODUpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCA2IG1vbnRocy5cbiAgICAgIGptID0gMSArIGRpdihrLCAzMSlcbiAgICAgIGpkID0gbW9kKGssIDMxKSArIDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGp5LFxuICAgICAgICBqbSxcbiAgICAgICAgamRcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBUaGUgcmVtYWluaW5nIG1vbnRocy5cbiAgICAgIGsgLT0gMTg2XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIFByZXZpb3VzIEphbGFhbGkgeWVhci5cbiAgICBqeSAtPSAxXG4gICAgayArPSAxNzlcbiAgICBpZiAoci5sZWFwID09PSAxKSB7IGsgKz0gMSB9XG4gIH1cbiAgam0gPSA3ICsgZGl2KGssIDMwKVxuICBqZCA9IG1vZChrLCAzMCkgKyAxXG4gIHJldHVybiB7XG4gICAganksXG4gICAgam0sXG4gICAgamRcbiAgfVxufVxuXG4vKlxuICBDYWxjdWxhdGVzIHRoZSBKdWxpYW4gRGF5IG51bWJlciBmcm9tIEdyZWdvcmlhbiBvciBKdWxpYW5cbiAgY2FsZW5kYXIgZGF0ZXMuIFRoaXMgaW50ZWdlciBudW1iZXIgY29ycmVzcG9uZHMgdG8gdGhlIG5vb24gb2ZcbiAgdGhlIGRhdGUgKGkuZS4gMTIgaG91cnMgb2YgVW5pdmVyc2FsIFRpbWUpLlxuICBUaGUgcHJvY2VkdXJlIHdhcyB0ZXN0ZWQgdG8gYmUgZ29vZCBzaW5jZSAxIE1hcmNoLCAtMTAwMTAwIChvZiBib3RoXG4gIGNhbGVuZGFycykgdXAgdG8gYSBmZXcgbWlsbGlvbiB5ZWFycyBpbnRvIHRoZSBmdXR1cmUuXG5cbiAgQHBhcmFtIGd5IENhbGVuZGFyIHllYXIgKHllYXJzIEJDIG51bWJlcmVkIDAsIC0xLCAtMiwgLi4uKVxuICBAcGFyYW0gZ20gQ2FsZW5kYXIgbW9udGggKDEgdG8gMTIpXG4gIEBwYXJhbSBnZCBDYWxlbmRhciBkYXkgb2YgdGhlIG1vbnRoICgxIHRvIDI4LzI5LzMwLzMxKVxuICBAcmV0dXJuIEp1bGlhbiBEYXkgbnVtYmVyXG4qL1xuZnVuY3Rpb24gZzJkIChneSwgZ20sIGdkKSB7XG4gIGxldCBkID0gZGl2KChneSArIGRpdihnbSAtIDgsIDYpICsgMTAwMTAwKSAqIDE0NjEsIDQpXG4gICAgICArIGRpdigxNTMgKiBtb2QoZ20gKyA5LCAxMikgKyAyLCA1KVxuICAgICAgKyBnZCAtIDM0ODQwNDA4XG4gIGQgPSBkIC0gZGl2KGRpdihneSArIDEwMDEwMCArIGRpdihnbSAtIDgsIDYpLCAxMDApICogMywgNCkgKyA3NTJcbiAgcmV0dXJuIGRcbn1cblxuLypcbiAgQ2FsY3VsYXRlcyBHcmVnb3JpYW4gYW5kIEp1bGlhbiBjYWxlbmRhciBkYXRlcyBmcm9tIHRoZSBKdWxpYW4gRGF5IG51bWJlclxuICAoamRuKSBmb3IgdGhlIHBlcmlvZCBzaW5jZSBqZG49LTM0ODM5NjU1IChpLmUuIHRoZSB5ZWFyIC0xMDAxMDAgb2YgYm90aFxuICBjYWxlbmRhcnMpIHRvIHNvbWUgbWlsbGlvbnMgeWVhcnMgYWhlYWQgb2YgdGhlIHByZXNlbnQuXG5cbiAgQHBhcmFtIGpkbiBKdWxpYW4gRGF5IG51bWJlclxuICBAcmV0dXJuXG4gICAgZ3k6IENhbGVuZGFyIHllYXIgKHllYXJzIEJDIG51bWJlcmVkIDAsIC0xLCAtMiwgLi4uKVxuICAgIGdtOiBDYWxlbmRhciBtb250aCAoMSB0byAxMilcbiAgICBnZDogQ2FsZW5kYXIgZGF5IG9mIHRoZSBtb250aCBNICgxIHRvIDI4LzI5LzMwLzMxKVxuKi9cbmZ1bmN0aW9uIGQyZyAoamRuKSB7XG4gIGxldCBqID0gNCAqIGpkbiArIDEzOTM2MTYzMVxuICBqID0gaiArIGRpdihkaXYoNCAqIGpkbiArIDE4MzE4NzcyMCwgMTQ2MDk3KSAqIDMsIDQpICogNCAtIDM5MDhcbiAgY29uc3RcbiAgICBpID0gZGl2KG1vZChqLCAxNDYxKSwgNCkgKiA1ICsgMzA4LFxuICAgIGdkID0gZGl2KG1vZChpLCAxNTMpLCA1KSArIDEsXG4gICAgZ20gPSBtb2QoZGl2KGksIDE1MyksIDEyKSArIDEsXG4gICAgZ3kgPSBkaXYoaiwgMTQ2MSkgLSAxMDAxMDAgKyBkaXYoOCAtIGdtLCA2KVxuICByZXR1cm4ge1xuICAgIGd5LFxuICAgIGdtLFxuICAgIGdkXG4gIH1cbn1cblxuLypcbiAgVXRpbGl0eSBoZWxwZXIgZnVuY3Rpb25zLlxuKi9cblxuZnVuY3Rpb24gZGl2IChhLCBiKSB7XG4gIHJldHVybiB+fihhIC8gYilcbn1cblxuZnVuY3Rpb24gbW9kIChhLCBiKSB7XG4gIHJldHVybiBhIC0gfn4oYSAvIGIpICogYlxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHRvSmFsYWFsaSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUvcHJpdmF0ZS5wZXJzaWFuLmpzJ1xuaW1wb3J0IHsgcGFkIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0L2Zvcm1hdC5qcydcblxuY29uc3QgY2FsZW5kYXJzID0gWyAnZ3JlZ29yaWFuJywgJ3BlcnNpYW4nIF1cblxuZXhwb3J0IGNvbnN0IHVzZURhdGV0aW1lUHJvcHMgPSB7XG4gIC8vIHNob3VsZCBkZWZpbmUgbW9kZWxWYWx1ZSBpbiB0aGUgdGFyZ2V0IGNvbXBvbmVudFxuXG4gIG1hc2s6IHtcbiAgICB0eXBlOiBTdHJpbmdcbiAgfSxcbiAgbG9jYWxlOiBPYmplY3QsXG5cbiAgY2FsZW5kYXI6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiB2ID0+IGNhbGVuZGFycy5pbmNsdWRlcyh2KSxcbiAgICBkZWZhdWx0OiAnZ3JlZ29yaWFuJ1xuICB9LFxuXG4gIGxhbmRzY2FwZTogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICBzcXVhcmU6IEJvb2xlYW4sXG4gIGZsYXQ6IEJvb2xlYW4sXG4gIGJvcmRlcmVkOiBCb29sZWFuLFxuXG4gIHJlYWRvbmx5OiBCb29sZWFuLFxuICBkaXNhYmxlOiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VEYXRldGltZUVtaXRzID0gWyAndXBkYXRlOm1vZGVsVmFsdWUnIF1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheUhhc2ggKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUueWVhciArICcvJyArIHBhZChkYXRlLm1vbnRoKSArICcvJyArIHBhZChkYXRlLmRheSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCAkcSkge1xuICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZVxuICB9KVxuXG4gIGNvbnN0IHRhYmluZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiAtMVxuICB9KVxuXG4gIGNvbnN0IGhlYWRlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGNscyA9IFtdXG4gICAgcHJvcHMuY29sb3IgIT09IHZvaWQgMCAmJiBjbHMucHVzaChgYmctJHsgcHJvcHMuY29sb3IgfWApXG4gICAgcHJvcHMudGV4dENvbG9yICE9PSB2b2lkIDAgJiYgY2xzLnB1c2goYHRleHQtJHsgcHJvcHMudGV4dENvbG9yIH1gKVxuICAgIHJldHVybiBjbHMuam9pbignICcpXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TG9jYWxlICgpIHtcbiAgICByZXR1cm4gcHJvcHMubG9jYWxlICE9PSB2b2lkIDBcbiAgICAgID8geyAuLi4kcS5sYW5nLmRhdGUsIC4uLnByb3BzLmxvY2FsZSB9XG4gICAgICA6ICRxLmxhbmcuZGF0ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUgKGRhdGVPbmx5KSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0aW1lRmlsbCA9IGRhdGVPbmx5ID09PSB0cnVlID8gbnVsbCA6IDBcblxuICAgIGlmIChwcm9wcy5jYWxlbmRhciA9PT0gJ3BlcnNpYW4nKSB7XG4gICAgICBjb25zdCBqRGF0ZSA9IHRvSmFsYWFsaShkKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogakRhdGUuanksXG4gICAgICAgIG1vbnRoOiBqRGF0ZS5qbSxcbiAgICAgICAgZGF5OiBqRGF0ZS5qZFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiBkLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aDogZC5nZXRNb250aCgpICsgMSxcbiAgICAgIGRheTogZC5nZXREYXRlKCksXG4gICAgICBob3VyOiB0aW1lRmlsbCxcbiAgICAgIG1pbnV0ZTogdGltZUZpbGwsXG4gICAgICBzZWNvbmQ6IHRpbWVGaWxsLFxuICAgICAgbWlsbGlzZWNvbmQ6IHRpbWVGaWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlZGl0YWJsZSxcbiAgICB0YWJpbmRleCxcbiAgICBoZWFkZXJDbGFzcyxcblxuICAgIGdldExvY2FsZSxcbiAgICBnZXRDdXJyZW50RGF0ZVxuICB9XG59XG4iLCIvKiBlc2xpbnQgbm8tZmFsbHRocm91Z2g6IDAgKi9cblxuaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSAnLi4vaXMvaXMuanMnXG5pbXBvcnQgeyBwYWQsIGNhcGl0YWxpemUgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgamFsYWFsaU1vbnRoTGVuZ3RoIH0gZnJvbSAnLi9wcml2YXRlLnBlcnNpYW4uanMnXG5pbXBvcnQgTGFuZywgeyBkZWZhdWx0TGFuZyB9IGZyb20gJy4uLy4uL3BsdWdpbnMvbGFuZy9MYW5nLmpzJ1xuXG5jb25zdFxuICBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDAsXG4gIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMCxcbiAgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwLFxuICBkZWZhdWx0TWFzayA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onLFxuICB0b2tlbiA9IC9cXFsoKD86W15cXF1cXFxcXXxcXFxcXXxcXFxcKSopXFxdfGRvfGR7MSw0fXxNb3xNezEsNH18bXsxLDJ9fHdvfHd7MSwyfXxRb3xEb3xERERvfER7MSw0fXxZWSg/OllZKT98SHsxLDJ9fGh7MSwyfXxzezEsMn18U3sxLDN9fFp7MSwyfXxhezEsMn18W0FRRXhYXS9nLFxuICByZXZlcnNlVG9rZW4gPSAvKFxcW1teXFxdXSpcXF0pfGRvfGR7MSw0fXxNb3xNezEsNH18bXsxLDJ9fHdvfHd7MSwyfXxRb3xEb3xERERvfER7MSw0fXxZWSg/OllZKT98SHsxLDJ9fGh7MSwyfXxzezEsMn18U3sxLDN9fFp7MSwyfXxhezEsMn18W0FRRXhYXXwoWy4qKzo/XixcXHMke30oKXxcXFxcXSspL2csXG4gIHJlZ2V4U3RvcmUgPSB7fVxuXG5mdW5jdGlvbiBnZXRSZWdleERhdGEgKG1hc2ssIGRhdGVMb2NhbGUpIHtcbiAgY29uc3RcbiAgICBkYXlzID0gJygnICsgZGF0ZUxvY2FsZS5kYXlzLmpvaW4oJ3wnKSArICcpJyxcbiAgICBrZXkgPSBtYXNrICsgZGF5c1xuXG4gIGlmIChyZWdleFN0b3JlWyBrZXkgXSAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHJlZ2V4U3RvcmVbIGtleSBdXG4gIH1cblxuICBjb25zdFxuICAgIGRheXNTaG9ydCA9ICcoJyArIGRhdGVMb2NhbGUuZGF5c1Nob3J0LmpvaW4oJ3wnKSArICcpJyxcbiAgICBtb250aHMgPSAnKCcgKyBkYXRlTG9jYWxlLm1vbnRocy5qb2luKCd8JykgKyAnKScsXG4gICAgbW9udGhzU2hvcnQgPSAnKCcgKyBkYXRlTG9jYWxlLm1vbnRoc1Nob3J0LmpvaW4oJ3wnKSArICcpJ1xuXG4gIGNvbnN0IG1hcCA9IHt9XG4gIGxldCBpbmRleCA9IDBcblxuICBjb25zdCByZWdleFRleHQgPSBtYXNrLnJlcGxhY2UocmV2ZXJzZVRva2VuLCBtYXRjaCA9PiB7XG4gICAgaW5kZXgrK1xuICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgIGNhc2UgJ1lZJzpcbiAgICAgICAgbWFwLllZID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ1lZWVknOlxuICAgICAgICBtYXAuWVlZWSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGR7MSw0fSknXG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgbWFwLk0gPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgbWFwLk0gPSBpbmRleCsrIC8vIGJ1bXBpbmcgdG8gTVxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KHN0fG5kfHJkfHRoKSknXG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIG1hcC5NID0gaW5kZXggLy8gYnVtcGluZyB0byBNXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIG1hcC5NTU0gPSBpbmRleFxuICAgICAgICByZXR1cm4gbW9udGhzU2hvcnRcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgICBtYXAuTU1NTSA9IGluZGV4XG4gICAgICAgIHJldHVybiBtb250aHNcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgICBtYXAuRCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnRG8nOlxuICAgICAgICBtYXAuRCA9IGluZGV4KysgLy8gYnVtcGluZyB0byBEXG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0oc3R8bmR8cmR8dGgpKSdcbiAgICAgIGNhc2UgJ0REJzpcbiAgICAgICAgbWFwLkQgPSBpbmRleCAvLyBidW1waW5nIHRvIERcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnSCc6XG4gICAgICAgIG1hcC5IID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdISCc6XG4gICAgICAgIG1hcC5IID0gaW5kZXggLy8gYnVtcGluZyB0byBIXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBtYXAuaCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnaGgnOlxuICAgICAgICBtYXAuaCA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gaFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdtJzpcbiAgICAgICAgbWFwLm0gPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ21tJzpcbiAgICAgICAgbWFwLm0gPSBpbmRleCAvLyBidW1waW5nIHRvIG1cbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIG1hcC5zID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdzcyc6XG4gICAgICAgIG1hcC5zID0gaW5kZXggLy8gYnVtcGluZyB0byBzXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ1MnOlxuICAgICAgICBtYXAuUyA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezF9KSdcbiAgICAgIGNhc2UgJ1NTJzpcbiAgICAgICAgbWFwLlMgPSBpbmRleCAvLyBidW1wIHRvIFNcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnU1NTJzpcbiAgICAgICAgbWFwLlMgPSBpbmRleCAvLyBidW1wIHRvIFNcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7M30pJ1xuICAgICAgY2FzZSAnQSc6XG4gICAgICAgIG1hcC5BID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoQU18UE0pJ1xuICAgICAgY2FzZSAnYSc6XG4gICAgICAgIG1hcC5hID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoYW18cG0pJ1xuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICBtYXAuYWEgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwuKSdcblxuICAgICAgY2FzZSAnZGRkJzpcbiAgICAgICAgcmV0dXJuIGRheXNTaG9ydFxuICAgICAgY2FzZSAnZGRkZCc6XG4gICAgICAgIHJldHVybiBkYXlzXG4gICAgICBjYXNlICdRJzpcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRSc6XG4gICAgICAgIHJldHVybiAnKFxcXFxkezF9KSdcbiAgICAgIGNhc2UgJ2RvJzpcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICByZXR1cm4gJyhcXFxcZHsxfShzdHxuZHxyZHx0aCkpJ1xuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gJygxc3R8Mm5kfDNyZHw0dGgpJ1xuICAgICAgY2FzZSAnREREJzpcbiAgICAgIGNhc2UgJ0REREQnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDN9KSdcbiAgICAgIGNhc2UgJ0RERG8nOlxuICAgICAgICBpbmRleCsrXG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsM30oc3R8bmR8cmR8dGgpKSdcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ3dvJzpcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KHN0fG5kfHJkfHRoKSknXG4gICAgICBjYXNlICd3dyc6XG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcblxuICAgICAgY2FzZSAnWic6IC8vIHRvIHNwbGl0OiAoPzooWikoKSgpfChbKy1dKT8oXFxcXGR7Mn0pOj8oXFxcXGR7Mn0pKVxuICAgICAgICBtYXAuWiA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFp8WystXVxcXFxkezJ9OlxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ1paJzpcbiAgICAgICAgbWFwLlpaID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoWnxbKy1dXFxcXGR7Mn1cXFxcZHsyfSknXG5cbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICBtYXAuWCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGQrKSdcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICBtYXAueCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGR7NCx9KSdcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW5kZXgtLVxuICAgICAgICBpZiAobWF0Y2hbIDAgXSA9PT0gJ1snKSB7XG4gICAgICAgICAgbWF0Y2ggPSBtYXRjaC5zdWJzdHJpbmcoMSwgbWF0Y2gubGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXMgPSB7IG1hcCwgcmVnZXg6IG5ldyBSZWdFeHAoJ14nICsgcmVnZXhUZXh0KSB9XG4gIHJlZ2V4U3RvcmVbIGtleSBdID0gcmVzXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXREYXRlTG9jYWxlIChwYXJhbURhdGVMb2NhbGUsIGxhbmdQcm9wcykge1xuICByZXR1cm4gcGFyYW1EYXRlTG9jYWxlICE9PSB2b2lkIDBcbiAgICA/IHBhcmFtRGF0ZUxvY2FsZVxuICAgIDogKFxuICAgICAgICBsYW5nUHJvcHMgIT09IHZvaWQgMFxuICAgICAgICAgID8gbGFuZ1Byb3BzLmRhdGVcbiAgICAgICAgICA6IGRlZmF1bHRMYW5nLmRhdGVcbiAgICAgIClcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUgKG9mZnNldCwgZGVsaW1ldGVyID0gJycpIHtcbiAgY29uc3RcbiAgICBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJyxcbiAgICBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpLFxuICAgIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksXG4gICAgbWludXRlcyA9IGFic09mZnNldCAlIDYwXG5cbiAgcmV0dXJuIHNpZ24gKyBwYWQoaG91cnMpICsgZGVsaW1ldGVyICsgcGFkKG1pbnV0ZXMpXG59XG5cbmZ1bmN0aW9uIGFwcGx5WWVhck1vbnRoRGF5Q2hhbmdlIChkYXRlLCBtb2QsIHNpZ24pIHtcbiAgbGV0XG4gICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKVxuXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG5cbiAgaWYgKG1vZC55ZWFyICE9PSB2b2lkIDApIHtcbiAgICB5ZWFyICs9IHNpZ24gKiBtb2QueWVhclxuICAgIGRlbGV0ZSBtb2QueWVhclxuICB9XG5cbiAgaWYgKG1vZC5tb250aCAhPT0gdm9pZCAwKSB7XG4gICAgbW9udGggKz0gc2lnbiAqIG1vZC5tb250aFxuICAgIGRlbGV0ZSBtb2QubW9udGhcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZSgxKVxuICBkYXRlLnNldE1vbnRoKDIpXG5cbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKVxuICBkYXRlLnNldE1vbnRoKG1vbnRoKVxuICBkYXRlLnNldERhdGUoTWF0aC5taW4oZGF5LCBkYXlzSW5Nb250aChkYXRlKSkpXG5cbiAgaWYgKG1vZC5kYXRlICE9PSB2b2lkIDApIHtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBzaWduICogbW9kLmRhdGUpXG4gICAgZGVsZXRlIG1vZC5kYXRlXG4gIH1cblxuICByZXR1cm4gZGF0ZVxufVxuXG5mdW5jdGlvbiBhcHBseVllYXJNb250aERheSAoZGF0ZSwgbW9kLCBtaWRkbGUpIHtcbiAgY29uc3RcbiAgICB5ZWFyID0gbW9kLnllYXIgIT09IHZvaWQgMCA/IG1vZC55ZWFyIDogZGF0ZVsgYGdldCR7IG1pZGRsZSB9RnVsbFllYXJgIF0oKSxcbiAgICBtb250aCA9IG1vZC5tb250aCAhPT0gdm9pZCAwID8gbW9kLm1vbnRoIC0gMSA6IGRhdGVbIGBnZXQkeyBtaWRkbGUgfU1vbnRoYCBdKCksXG4gICAgbWF4RGF5ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkpLmdldERhdGUoKSxcbiAgICBkYXkgPSBNYXRoLm1pbihtYXhEYXksIG1vZC5kYXRlICE9PSB2b2lkIDAgPyBtb2QuZGF0ZSA6IGRhdGVbIGBnZXQkeyBtaWRkbGUgfURhdGVgIF0oKSlcblxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1EYXRlYCBdKDEpXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfU1vbnRoYCBdKDIpXG5cbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9RnVsbFllYXJgIF0oeWVhcilcbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9TW9udGhgIF0obW9udGgpXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfURhdGVgIF0oZGF5KVxuXG4gIGRlbGV0ZSBtb2QueWVhclxuICBkZWxldGUgbW9kLm1vbnRoXG4gIGRlbGV0ZSBtb2QuZGF0ZVxuXG4gIHJldHVybiBkYXRlXG59XG5cbmZ1bmN0aW9uIGdldENoYW5nZSAoZGF0ZSwgcmF3TW9kLCBzaWduKSB7XG4gIGNvbnN0XG4gICAgbW9kID0gbm9ybWFsaXplTW9kKHJhd01vZCksXG4gICAgZCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHQgPSBtb2QueWVhciAhPT0gdm9pZCAwIHx8IG1vZC5tb250aCAhPT0gdm9pZCAwIHx8IG1vZC5kYXRlICE9PSB2b2lkIDBcbiAgICAgID8gYXBwbHlZZWFyTW9udGhEYXlDaGFuZ2UoZCwgbW9kLCBzaWduKSAvLyByZW1vdmVzIHllYXIvbW9udGgvZGF5XG4gICAgICA6IGRcblxuICBmb3IgKGNvbnN0IGtleSBpbiBtb2QpIHtcbiAgICBjb25zdCBvcCA9IGNhcGl0YWxpemUoa2V5KVxuICAgIHRbIGBzZXQkeyBvcCB9YCBdKHRbIGBnZXQkeyBvcCB9YCBdKCkgKyBzaWduICogbW9kWyBrZXkgXSlcbiAgfVxuXG4gIHJldHVybiB0XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZCAobW9kKSB7XG4gIGNvbnN0IGFjYyA9IHsgLi4ubW9kIH1cblxuICBpZiAobW9kLnllYXJzICE9PSB2b2lkIDApIHtcbiAgICBhY2MueWVhciA9IG1vZC55ZWFyc1xuICAgIGRlbGV0ZSBhY2MueWVhcnNcbiAgfVxuXG4gIGlmIChtb2QubW9udGhzICE9PSB2b2lkIDApIHtcbiAgICBhY2MubW9udGggPSBtb2QubW9udGhzXG4gICAgZGVsZXRlIGFjYy5tb250aHNcbiAgfVxuXG4gIGlmIChtb2QuZGF5cyAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLmRhdGUgPSBtb2QuZGF5c1xuICAgIGRlbGV0ZSBhY2MuZGF5c1xuICB9XG4gIGlmIChtb2QuZGF5ICE9PSB2b2lkIDApIHtcbiAgICBhY2MuZGF0ZSA9IG1vZC5kYXlcbiAgICBkZWxldGUgYWNjLmRheVxuICB9XG5cbiAgaWYgKG1vZC5ob3VyICE9PSB2b2lkIDApIHtcbiAgICBhY2MuaG91cnMgPSBtb2QuaG91clxuICAgIGRlbGV0ZSBhY2MuaG91clxuICB9XG5cbiAgaWYgKG1vZC5taW51dGUgIT09IHZvaWQgMCkge1xuICAgIGFjYy5taW51dGVzID0gbW9kLm1pbnV0ZVxuICAgIGRlbGV0ZSBhY2MubWludXRlXG4gIH1cblxuICBpZiAobW9kLnNlY29uZCAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLnNlY29uZHMgPSBtb2Quc2Vjb25kXG4gICAgZGVsZXRlIGFjYy5zZWNvbmRcbiAgfVxuXG4gIGlmIChtb2QubWlsbGlzZWNvbmQgIT09IHZvaWQgMCkge1xuICAgIGFjYy5taWxsaXNlY29uZHMgPSBtb2QubWlsbGlzZWNvbmRcbiAgICBkZWxldGUgYWNjLm1pbGxpc2Vjb25kXG4gIH1cblxuICByZXR1cm4gYWNjXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3REYXRlIChkYXRlLCByYXdNb2QsIHV0Yykge1xuICBjb25zdFxuICAgIG1vZCA9IG5vcm1hbGl6ZU1vZChyYXdNb2QpLFxuICAgIG1pZGRsZSA9IHV0YyA9PT0gdHJ1ZSA/ICdVVEMnIDogJycsXG4gICAgZCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHQgPSBtb2QueWVhciAhPT0gdm9pZCAwIHx8IG1vZC5tb250aCAhPT0gdm9pZCAwIHx8IG1vZC5kYXRlICE9PSB2b2lkIDBcbiAgICAgID8gYXBwbHlZZWFyTW9udGhEYXkoZCwgbW9kLCBtaWRkbGUpIC8vIHJlbW92ZXMgeWVhci9tb250aC9kYXlcbiAgICAgIDogZFxuXG4gIGZvciAoY29uc3Qga2V5IGluIG1vZCkge1xuICAgIGNvbnN0IG9wID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpXG4gICAgdFsgYHNldCR7IG1pZGRsZSB9JHsgb3AgfWAgXShtb2RbIGtleSBdKVxuICB9XG5cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REYXRlIChzdHIsIG1hc2ssIGRhdGVMb2NhbGUpIHtcbiAgY29uc3QgZCA9IF9fc3BsaXREYXRlKHN0ciwgbWFzaywgZGF0ZUxvY2FsZSlcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoXG4gICAgZC55ZWFyLFxuICAgIGQubW9udGggPT09IG51bGwgPyBudWxsIDogZC5tb250aCAtIDEsXG4gICAgZC5kYXkgPT09IG51bGwgPyAxIDogZC5kYXksXG4gICAgZC5ob3VyLFxuICAgIGQubWludXRlLFxuICAgIGQuc2Vjb25kLFxuICAgIGQubWlsbGlzZWNvbmRcbiAgKVxuXG4gIGNvbnN0IHR6T2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG5cbiAgcmV0dXJuIGQudGltZXpvbmVPZmZzZXQgPT09IG51bGwgfHwgZC50aW1lem9uZU9mZnNldCA9PT0gdHpPZmZzZXRcbiAgICA/IGRhdGVcbiAgICA6IGdldENoYW5nZShkYXRlLCB7IG1pbnV0ZXM6IGQudGltZXpvbmVPZmZzZXQgLSB0ek9mZnNldCB9LCAxKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcGxpdERhdGUgKHN0ciwgbWFzaywgZGF0ZUxvY2FsZSwgY2FsZW5kYXIsIGRlZmF1bHRNb2RlbCkge1xuICBjb25zdCBkYXRlID0ge1xuICAgIHllYXI6IG51bGwsXG4gICAgbW9udGg6IG51bGwsXG4gICAgZGF5OiBudWxsLFxuICAgIGhvdXI6IG51bGwsXG4gICAgbWludXRlOiBudWxsLFxuICAgIHNlY29uZDogbnVsbCxcbiAgICBtaWxsaXNlY29uZDogbnVsbCxcbiAgICB0aW1lem9uZU9mZnNldDogbnVsbCxcbiAgICBkYXRlSGFzaDogbnVsbCxcbiAgICB0aW1lSGFzaDogbnVsbFxuICB9XG5cbiAgZGVmYXVsdE1vZGVsICE9PSB2b2lkIDAgJiYgT2JqZWN0LmFzc2lnbihkYXRlLCBkZWZhdWx0TW9kZWwpXG5cbiAgaWYgKFxuICAgIHN0ciA9PT0gdm9pZCAwXG4gICAgfHwgc3RyID09PSBudWxsXG4gICAgfHwgc3RyID09PSAnJ1xuICAgIHx8IHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICBpZiAobWFzayA9PT0gdm9pZCAwKSB7XG4gICAgbWFzayA9IGRlZmF1bHRNYXNrXG4gIH1cblxuICBjb25zdFxuICAgIGxhbmdPcHRzID0gZ2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlLCBMYW5nLnByb3BzKSxcbiAgICBtb250aHMgPSBsYW5nT3B0cy5tb250aHMsXG4gICAgbW9udGhzU2hvcnQgPSBsYW5nT3B0cy5tb250aHNTaG9ydFxuXG4gIGNvbnN0IHsgcmVnZXgsIG1hcCB9ID0gZ2V0UmVnZXhEYXRhKG1hc2ssIGxhbmdPcHRzKVxuXG4gIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKHJlZ2V4KVxuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICBsZXQgdHpTdHJpbmcgPSAnJ1xuXG4gIGlmIChtYXAuWCAhPT0gdm9pZCAwIHx8IG1hcC54ICE9PSB2b2lkIDApIHtcbiAgICBjb25zdCBzdGFtcCA9IHBhcnNlSW50KG1hdGNoWyBtYXAuWCAhPT0gdm9pZCAwID8gbWFwLlggOiBtYXAueCBdLCAxMClcblxuICAgIGlmIChpc05hTihzdGFtcCkgPT09IHRydWUgfHwgc3RhbXAgPCAwKSB7XG4gICAgICByZXR1cm4gZGF0ZVxuICAgIH1cblxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzdGFtcCAqIChtYXAuWCAhPT0gdm9pZCAwID8gMTAwMCA6IDEpKVxuXG4gICAgZGF0ZS55ZWFyID0gZC5nZXRGdWxsWWVhcigpXG4gICAgZGF0ZS5tb250aCA9IGQuZ2V0TW9udGgoKSArIDFcbiAgICBkYXRlLmRheSA9IGQuZ2V0RGF0ZSgpXG4gICAgZGF0ZS5ob3VyID0gZC5nZXRIb3VycygpXG4gICAgZGF0ZS5taW51dGUgPSBkLmdldE1pbnV0ZXMoKVxuICAgIGRhdGUuc2Vjb25kID0gZC5nZXRTZWNvbmRzKClcbiAgICBkYXRlLm1pbGxpc2Vjb25kID0gZC5nZXRNaWxsaXNlY29uZHMoKVxuICB9XG4gIGVsc2Uge1xuICAgIGlmIChtYXAuWVlZWSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLnllYXIgPSBwYXJzZUludChtYXRjaFsgbWFwLllZWVkgXSwgMTApXG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5ZWSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5ZWSBdLCAxMClcbiAgICAgIGRhdGUueWVhciA9IHkgPCAwID8geSA6IDIwMDAgKyB5XG4gICAgfVxuXG4gICAgaWYgKG1hcC5NICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubW9udGggPSBwYXJzZUludChtYXRjaFsgbWFwLk0gXSwgMTApXG4gICAgICBpZiAoZGF0ZS5tb250aCA8IDEgfHwgZGF0ZS5tb250aCA+IDEyKSB7XG4gICAgICAgIHJldHVybiBkYXRlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5NTU0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5tb250aCA9IG1vbnRoc1Nob3J0LmluZGV4T2YobWF0Y2hbIG1hcC5NTU0gXSkgKyAxXG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5NTU1NICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubW9udGggPSBtb250aHMuaW5kZXhPZihtYXRjaFsgbWFwLk1NTU0gXSkgKyAxXG4gICAgfVxuXG4gICAgaWYgKG1hcC5EICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuZGF5ID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5EIF0sIDEwKVxuXG4gICAgICBpZiAoZGF0ZS55ZWFyID09PSBudWxsIHx8IGRhdGUubW9udGggPT09IG51bGwgfHwgZGF0ZS5kYXkgPCAxKSB7XG4gICAgICAgIHJldHVybiBkYXRlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1heERheSA9IGNhbGVuZGFyICE9PSAncGVyc2lhbidcbiAgICAgICAgPyAobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCAwKSkuZ2V0RGF0ZSgpXG4gICAgICAgIDogamFsYWFsaU1vbnRoTGVuZ3RoKGRhdGUueWVhciwgZGF0ZS5tb250aClcblxuICAgICAgaWYgKGRhdGUuZGF5ID4gbWF4RGF5KSB7XG4gICAgICAgIHJldHVybiBkYXRlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcC5IICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuaG91ciA9IHBhcnNlSW50KG1hdGNoWyBtYXAuSCBdLCAxMCkgJSAyNFxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuaCAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLmhvdXIgPSBwYXJzZUludChtYXRjaFsgbWFwLmggXSwgMTApICUgMTJcbiAgICAgIGlmIChcbiAgICAgICAgKG1hcC5BICYmIG1hdGNoWyBtYXAuQSBdID09PSAnUE0nKVxuICAgICAgICB8fCAobWFwLmEgJiYgbWF0Y2hbIG1hcC5hIF0gPT09ICdwbScpXG4gICAgICAgIHx8IChtYXAuYWEgJiYgbWF0Y2hbIG1hcC5hYSBdID09PSAncC5tLicpXG4gICAgICApIHtcbiAgICAgICAgZGF0ZS5ob3VyICs9IDEyXG4gICAgICB9XG4gICAgICBkYXRlLmhvdXIgPSBkYXRlLmhvdXIgJSAyNFxuICAgIH1cblxuICAgIGlmIChtYXAubSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoWyBtYXAubSBdLCAxMCkgJSA2MFxuICAgIH1cblxuICAgIGlmIChtYXAucyAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLnNlY29uZCA9IHBhcnNlSW50KG1hdGNoWyBtYXAucyBdLCAxMCkgJSA2MFxuICAgIH1cblxuICAgIGlmIChtYXAuUyAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5TIF0sIDEwKSAqIDEwICoqICgzIC0gbWF0Y2hbIG1hcC5TIF0ubGVuZ3RoKVxuICAgIH1cblxuICAgIGlmIChtYXAuWiAhPT0gdm9pZCAwIHx8IG1hcC5aWiAhPT0gdm9pZCAwKSB7XG4gICAgICB0elN0cmluZyA9IChtYXAuWiAhPT0gdm9pZCAwID8gbWF0Y2hbIG1hcC5aIF0ucmVwbGFjZSgnOicsICcnKSA6IG1hdGNoWyBtYXAuWlogXSlcbiAgICAgIGRhdGUudGltZXpvbmVPZmZzZXQgPSAodHpTdHJpbmdbIDAgXSA9PT0gJysnID8gLTEgOiAxKSAqICg2MCAqIHR6U3RyaW5nLnNsaWNlKDEsIDMpICsgMSAqIHR6U3RyaW5nLnNsaWNlKDMsIDUpKVxuICAgIH1cbiAgfVxuXG4gIGRhdGUuZGF0ZUhhc2ggPSBwYWQoZGF0ZS55ZWFyLCA2KSArICcvJyArIHBhZChkYXRlLm1vbnRoKSArICcvJyArIHBhZChkYXRlLmRheSlcbiAgZGF0ZS50aW1lSGFzaCA9IHBhZChkYXRlLmhvdXIpICsgJzonICsgcGFkKGRhdGUubWludXRlKSArICc6JyArIHBhZChkYXRlLnNlY29uZCkgKyB0elN0cmluZ1xuXG4gIHJldHVybiBkYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkIChkYXRlKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcidcbiAgICA/IHRydWVcbiAgICA6IGlzTmFOKERhdGUucGFyc2UoZGF0ZSkpID09PSBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGREYXRlIChtb2QsIHV0Yykge1xuICByZXR1cm4gYWRqdXN0RGF0ZShuZXcgRGF0ZSgpLCBtb2QsIHV0Yylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mV2VlayAoZGF0ZSkge1xuICBjb25zdCBkb3cgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXkoKVxuICByZXR1cm4gZG93ID09PSAwID8gNyA6IGRvd1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla09mWWVhciAoZGF0ZSkge1xuICAvLyBSZW1vdmUgdGltZSBjb21wb25lbnRzIG9mIGRhdGVcbiAgY29uc3QgdGh1cnNkYXkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpXG5cbiAgLy8gQ2hhbmdlIGRhdGUgdG8gVGh1cnNkYXkgc2FtZSB3ZWVrXG4gIHRodXJzZGF5LnNldERhdGUodGh1cnNkYXkuZ2V0RGF0ZSgpIC0gKCh0aHVyc2RheS5nZXREYXkoKSArIDYpICUgNykgKyAzKVxuXG4gIC8vIFRha2UgSmFudWFyeSA0dGggYXMgaXQgaXMgYWx3YXlzIGluIHdlZWsgMSAoc2VlIElTTyA4NjAxKVxuICBjb25zdCBmaXJzdFRodXJzZGF5ID0gbmV3IERhdGUodGh1cnNkYXkuZ2V0RnVsbFllYXIoKSwgMCwgNClcblxuICAvLyBDaGFuZ2UgZGF0ZSB0byBUaHVyc2RheSBzYW1lIHdlZWtcbiAgZmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpIC0gKChmaXJzdFRodXJzZGF5LmdldERheSgpICsgNikgJSA3KSArIDMpXG5cbiAgLy8gQ2hlY2sgaWYgZGF5bGlnaHQtc2F2aW5nLXRpbWUtc3dpdGNoIG9jY3VycmVkIGFuZCBjb3JyZWN0IGZvciBpdFxuICBjb25zdCBkcyA9IHRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCkgLSBmaXJzdFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgdGh1cnNkYXkuc2V0SG91cnModGh1cnNkYXkuZ2V0SG91cnMoKSAtIGRzKVxuXG4gIC8vIE51bWJlciBvZiB3ZWVrcyBiZXR3ZWVuIHRhcmdldCBUaHVyc2RheSBhbmQgZmlyc3QgVGh1cnNkYXlcbiAgY29uc3Qgd2Vla0RpZmYgPSAodGh1cnNkYXkgLSBmaXJzdFRodXJzZGF5KSAvIChNSUxMSVNFQ09ORFNfSU5fREFZICogNylcbiAgcmV0dXJuIDEgKyBNYXRoLmZsb29yKHdlZWtEaWZmKVxufVxuXG5mdW5jdGlvbiBnZXREYXlJZGVudGlmaWVyIChkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKiAxMDAwMCArIGRhdGUuZ2V0TW9udGgoKSAqIDEwMCArIGRhdGUuZ2V0RGF0ZSgpXG59XG5cbmZ1bmN0aW9uIGdldERhdGVJZGVudGlmaWVyIChkYXRlLCBvbmx5RGF0ZSAvKiA9IGZhbHNlICovKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKVxuICByZXR1cm4gb25seURhdGUgPT09IHRydWUgPyBnZXREYXlJZGVudGlmaWVyKGQpIDogZC5nZXRUaW1lKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2VlbkRhdGVzIChkYXRlLCBmcm9tLCB0bywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0XG4gICAgZDEgPSBnZXREYXRlSWRlbnRpZmllcihmcm9tLCBvcHRzLm9ubHlEYXRlKSxcbiAgICBkMiA9IGdldERhdGVJZGVudGlmaWVyKHRvLCBvcHRzLm9ubHlEYXRlKSxcbiAgICBjdXIgPSBnZXREYXRlSWRlbnRpZmllcihkYXRlLCBvcHRzLm9ubHlEYXRlKVxuXG4gIHJldHVybiAoY3VyID4gZDEgfHwgKG9wdHMuaW5jbHVzaXZlRnJvbSA9PT0gdHJ1ZSAmJiBjdXIgPT09IGQxKSlcbiAgICAmJiAoY3VyIDwgZDIgfHwgKG9wdHMuaW5jbHVzaXZlVG8gPT09IHRydWUgJiYgY3VyID09PSBkMikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RhdGUgKGRhdGUsIG1vZCkge1xuICByZXR1cm4gZ2V0Q2hhbmdlKGRhdGUsIG1vZCwgMSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdEZyb21EYXRlIChkYXRlLCBtb2QpIHtcbiAgcmV0dXJuIGdldENoYW5nZShkYXRlLCBtb2QsIC0xKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRhdGUgKGRhdGUsIHVuaXQsIHV0Yykge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBwcmVmaXggPSBgc2V0JHsgdXRjID09PSB0cnVlID8gJ1VUQycgOiAnJyB9YFxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1vbnRoYCBdKDApXG4gICAgY2FzZSAnbW9udGgnOlxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1EYXRlYCBdKDEpXG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfUhvdXJzYCBdKDApXG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWludXRlc2AgXSgwKVxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1TZWNvbmRzYCBdKDApXG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbGxpc2Vjb25kc2AgXSgwKVxuICB9XG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZkRhdGUgKGRhdGUsIHVuaXQsIHV0Yykge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBwcmVmaXggPSBgc2V0JHsgdXRjID09PSB0cnVlID8gJ1VUQycgOiAnJyB9YFxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1vbnRoYCBdKDExKVxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICBjYXNlICdtb250aHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9RGF0ZWAgXShkYXlzSW5Nb250aCh0KSlcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9SG91cnNgIF0oMjMpXG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWludXRlc2AgXSg1OSlcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9U2Vjb25kc2AgXSg1OSlcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWlsbGlzZWNvbmRzYCBdKDk5OSlcbiAgfVxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4RGF0ZSAoZGF0ZSAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgbGV0IHQgPSBuZXcgRGF0ZShkYXRlKVxuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmZvckVhY2goZCA9PiB7XG4gICAgdCA9IE1hdGgubWF4KHQsIG5ldyBEYXRlKGQpKVxuICB9KVxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluRGF0ZSAoZGF0ZSAvKiwgLi4uYXJncyAqLykge1xuICBsZXQgdCA9IG5ldyBEYXRlKGRhdGUpXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaChkID0+IHtcbiAgICB0ID0gTWF0aC5taW4odCwgbmV3IERhdGUoZCkpXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbmZ1bmN0aW9uIGdldERpZmYgKHQsIHN1YiwgaW50ZXJ2YWwpIHtcbiAgcmV0dXJuIChcbiAgICAodC5nZXRUaW1lKCkgLSB0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKVxuICAgIC0gKHN1Yi5nZXRUaW1lKCkgLSBzdWIuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpXG4gICkgLyBpbnRlcnZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZURpZmYgKGRhdGUsIHN1YnRyYWN0LCB1bml0ID0gJ2RheXMnKSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHN1YiA9IG5ldyBEYXRlKHN1YnRyYWN0KVxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiAodC5nZXRGdWxsWWVhcigpIC0gc3ViLmdldEZ1bGxZZWFyKCkpXG5cbiAgICBjYXNlICdtb250aHMnOlxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiAodC5nZXRGdWxsWWVhcigpIC0gc3ViLmdldEZ1bGxZZWFyKCkpICogMTIgKyB0LmdldE1vbnRoKCkgLSBzdWIuZ2V0TW9udGgoKVxuXG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdkYXknKSwgc3RhcnRPZkRhdGUoc3ViLCAnZGF5JyksIE1JTExJU0VDT05EU19JTl9EQVkpXG5cbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnaG91cicpLCBzdGFydE9mRGF0ZShzdWIsICdob3VyJyksIE1JTExJU0VDT05EU19JTl9IT1VSKVxuXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdtaW51dGUnKSwgc3RhcnRPZkRhdGUoc3ViLCAnbWludXRlJyksIE1JTExJU0VDT05EU19JTl9NSU5VVEUpXG5cbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ3NlY29uZCcpLCBzdGFydE9mRGF0ZShzdWIsICdzZWNvbmQnKSwgMTAwMClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyIChkYXRlKSB7XG4gIHJldHVybiBnZXREYXRlRGlmZihkYXRlLCBzdGFydE9mRGF0ZShkYXRlLCAneWVhcicpLCAnZGF5cycpICsgMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5mZXJEYXRlRm9ybWF0IChkYXRlKSB7XG4gIHJldHVybiBpc0RhdGUoZGF0ZSkgPT09IHRydWVcbiAgICA/ICdkYXRlJ1xuICAgIDogKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJyA/ICdudW1iZXInIDogJ3N0cmluZycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlQmV0d2VlbiAoZGF0ZSwgbWluLCBtYXgpIHtcbiAgY29uc3QgdCA9IG5ldyBEYXRlKGRhdGUpXG5cbiAgaWYgKG1pbikge1xuICAgIGNvbnN0IGxvdyA9IG5ldyBEYXRlKG1pbilcbiAgICBpZiAodCA8IGxvdykge1xuICAgICAgcmV0dXJuIGxvd1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXgpIHtcbiAgICBjb25zdCBoaWdoID0gbmV3IERhdGUobWF4KVxuICAgIGlmICh0ID4gaGlnaCkge1xuICAgICAgcmV0dXJuIGhpZ2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF0ZSAoZGF0ZSwgZGF0ZTIsIHVuaXQpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgZCA9IG5ldyBEYXRlKGRhdGUyKVxuXG4gIGlmICh1bml0ID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gdC5nZXRUaW1lKCkgPT09IGQuZ2V0VGltZSgpXG4gIH1cblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgaWYgKHQuZ2V0U2Vjb25kcygpICE9PSBkLmdldFNlY29uZHMoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdtaW51dGUnOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIGlmICh0LmdldE1pbnV0ZXMoKSAhPT0gZC5nZXRNaW51dGVzKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnaG91cic6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIGlmICh0LmdldEhvdXJzKCkgIT09IGQuZ2V0SG91cnMoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdkYXknOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIGlmICh0LmdldERhdGUoKSAhPT0gZC5nZXREYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnbW9udGgnOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdtb250aHMnOlxuICAgICAgaWYgKHQuZ2V0TW9udGgoKSAhPT0gZC5nZXRNb250aCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ3llYXInOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgICBpZiAodC5nZXRGdWxsWWVhcigpICE9PSBkLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGUgaXNTYW1lRGF0ZSB1bmtub3duIHVuaXQgJHsgdW5pdCB9YClcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCAoZGF0ZSkge1xuICByZXR1cm4gKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkpLmdldERhdGUoKVxufVxuXG5mdW5jdGlvbiBnZXRPcmRpbmFsIChuKSB7XG4gIGlmIChuID49IDExICYmIG4gPD0gMTMpIHtcbiAgICByZXR1cm4gYCR7IG4gfXRoYFxuICB9XG4gIHN3aXRjaCAobiAlIDEwKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gYCR7IG4gfXN0YFxuICAgIGNhc2UgMjogcmV0dXJuIGAkeyBuIH1uZGBcbiAgICBjYXNlIDM6IHJldHVybiBgJHsgbiB9cmRgXG4gIH1cbiAgcmV0dXJuIGAkeyBuIH10aGBcbn1cblxuY29uc3QgZm9ybWF0dGVyID0ge1xuICAvLyBZZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgWVkgKGRhdGUsIGRhdGVMb2NhbGUsIGZvcmNlZFllYXIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciA8IDE5MDAgd2l0aCBuZXcgRGF0ZSgpXG4gICAgY29uc3QgeSA9IHRoaXMuWVlZWShkYXRlLCBkYXRlTG9jYWxlLCBmb3JjZWRZZWFyKSAlIDEwMFxuICAgIHJldHVybiB5ID49IDBcbiAgICAgID8gcGFkKHkpXG4gICAgICA6ICctJyArIHBhZChNYXRoLmFicyh5KSlcbiAgfSxcblxuICAvLyBZZWFyOiAxOTAwLCAxOTAxLCAuLi4sIDIwOTlcbiAgWVlZWSAoZGF0ZSwgX2RhdGVMb2NhbGUsIGZvcmNlZFllYXIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciA8IDE5MDAgd2l0aCBuZXcgRGF0ZSgpXG4gICAgcmV0dXJuIGZvcmNlZFllYXIgIT09IHZvaWQgMCAmJiBmb3JjZWRZZWFyICE9PSBudWxsXG4gICAgICA/IGZvcmNlZFllYXJcbiAgICAgIDogZGF0ZS5nZXRGdWxsWWVhcigpXG4gIH0sXG5cbiAgLy8gTW9udGg6IDEsIDIsIC4uLiwgMTJcbiAgTSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIH0sXG5cbiAgLy8gTW9udGg6IDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgTW8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbChkYXRlLmdldE1vbnRoKCkgKyAxKVxuICB9LFxuXG4gIC8vIE1vbnRoOiAwMSwgMDIsIC4uLiwgMTJcbiAgTU0gKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpXG4gIH0sXG5cbiAgLy8gTW9udGggU2hvcnQgTmFtZTogSmFuLCBGZWIsIC4uLlxuICBNTU0gKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5tb250aHNTaG9ydFsgZGF0ZS5nZXRNb250aCgpIF1cbiAgfSxcblxuICAvLyBNb250aCBOYW1lOiBKYW51YXJ5LCBGZWJydWFyeSwgLi4uXG4gIE1NTU0gKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5tb250aHNbIGRhdGUuZ2V0TW9udGgoKSBdXG4gIH0sXG5cbiAgLy8gUXVhcnRlcjogMSwgMiwgMywgNFxuICBRIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDFzdCwgMm5kLCAzcmQsIDR0aFxuICBRbyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRPcmRpbmFsKHRoaXMuUShkYXRlKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDEsIDIsIC4uLiwgMzFcbiAgRCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERhdGUoKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMXN0LCAybmQsIC4uLiwgMzFzdFxuICBEbyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRPcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMDEsIDAyLCAuLi4sIDMxXG4gIEREIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMSwgMiwgLi4uLCAzNjZcbiAgREREIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAxc3QsIDJuZCwgLi4uLCAzNjZ0aFxuICBERERvIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldE9yZGluYWwoZ2V0RGF5T2ZZZWFyKGRhdGUpKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAwMDEsIDAwMiwgLi4uLCAzNjZcbiAgRERERCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZ2V0RGF5T2ZZZWFyKGRhdGUpLCAzKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiAwLCAxLCAuLi4sIDZcbiAgZCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERheSgpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IDB0aCwgMXN0LCAuLi4sIDZ0aFxuICBkbyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRPcmRpbmFsKGRhdGUuZ2V0RGF5KCkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1LCBNbywgLi4uXG4gIGRkIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIChkYXRlTG9jYWxlLmRheXNbIGRhdGUuZ2V0RGF5KCkgXSkuc2xpY2UoMCwgMilcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuLCBNb24sIC4uLlxuICBkZGQgKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5kYXlzU2hvcnRbIGRhdGUuZ2V0RGF5KCkgXVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW5kYXksIE1vbmRheSwgLi4uXG4gIGRkZGQgKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5kYXlzWyBkYXRlLmdldERheSgpIF1cbiAgfSxcblxuICAvLyBEYXkgb2YgSVNPIHdlZWs6IDEsIDIsIC4uLiwgN1xuICBFIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgfHwgN1xuICB9LFxuXG4gIC8vIFdlZWsgb2YgWWVhcjogMSAyIC4uLiA1MiA1M1xuICB3IChkYXRlKSB7XG4gICAgcmV0dXJuIGdldFdlZWtPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBXZWVrIG9mIFllYXI6IDFzdCAybmQgLi4uIDUybmQgNTNyZFxuICB3byAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRPcmRpbmFsKGdldFdlZWtPZlllYXIoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gV2VlayBvZiBZZWFyOiAwMSAwMiAuLi4gNTIgNTNcbiAgd3cgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGdldFdlZWtPZlllYXIoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gSG91cjogMCwgMSwgLi4uIDIzXG4gIEggKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpXG4gIH0sXG5cbiAgLy8gSG91cjogMDAsIDAxLCAuLi4sIDIzXG4gIEhIIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpXG4gIH0sXG5cbiAgLy8gSG91cjogMSwgMiwgLi4uLCAxMlxuICBoIChkYXRlKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgICByZXR1cm4gaG91cnMgPT09IDBcbiAgICAgID8gMTJcbiAgICAgIDogKGhvdXJzID4gMTIgPyBob3VycyAlIDEyIDogaG91cnMpXG4gIH0sXG5cbiAgLy8gSG91cjogMDEsIDAyLCAuLi4sIDEyXG4gIGhoIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZCh0aGlzLmgoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwLCAxLCAuLi4sIDU5XG4gIG0gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKClcbiAgfSxcblxuICAvLyBNaW51dGU6IDAwLCAwMSwgLi4uLCA1OVxuICBtbSAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwLCAxLCAuLi4sIDU5XG4gIHMgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKClcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAwLCAwMSwgLi4uLCA1OVxuICBzcyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpXG4gIH0sXG5cbiAgLy8gMS8xMCBvZiBzZWNvbmQ6IDAsIDEsIC4uLiwgOVxuICBTIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMClcbiAgfSxcblxuICAvLyAxLzEwMCBvZiBzZWNvbmQ6IDAwLCAwMSwgLi4uLCA5OVxuICBTUyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoTWF0aC5mbG9vcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTApKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kOiAwMDAsIDAwMSwgLi4uLCA5OTlcbiAgU1NTIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKVxuICB9LFxuXG4gIC8vIE1lcmlkaWVtOiBBTSwgUE1cbiAgQSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCkgPCAxMiA/ICdBTScgOiAnUE0nXG4gIH0sXG5cbiAgLy8gTWVyaWRpZW06IGFtLCBwbVxuICBhIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKSA8IDEyID8gJ2FtJyA6ICdwbSdcbiAgfSxcblxuICAvLyBNZXJpZGllbTogYS5tLiwgcC5tLlxuICBhYSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCkgPCAxMiA/ICdhLm0uJyA6ICdwLm0uJ1xuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMFxuICBaIChkYXRlLCBfZGF0ZUxvY2FsZSwgX2ZvcmNlZFllYXIsIGZvcmNlZFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgY29uc3QgdHpPZmZzZXQgPSBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gdm9pZCAwIHx8IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSBudWxsXG4gICAgICA/IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgOiBmb3JjZWRUaW1lem9uZU9mZnNldFxuXG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHR6T2Zmc2V0LCAnOicpXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTAwLCArMDAwMCwgLi4uICsxMjAwXG4gIFpaIChkYXRlLCBfZGF0ZUxvY2FsZSwgX2ZvcmNlZFllYXIsIGZvcmNlZFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgY29uc3QgdHpPZmZzZXQgPSBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gdm9pZCAwIHx8IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSBudWxsXG4gICAgICA/IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgOiBmb3JjZWRUaW1lem9uZU9mZnNldFxuXG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHR6T2Zmc2V0KVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjBcbiAgWCAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMClcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjA5MDBcbiAgeCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFRpbWUoKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlICh2YWwsIG1hc2ssIGRhdGVMb2NhbGUsIF9fZm9yY2VkWWVhciwgX19mb3JjZWRUaW1lem9uZU9mZnNldCkge1xuICBpZiAoXG4gICAgKHZhbCAhPT0gMCAmJiAhdmFsKVxuICAgIHx8IHZhbCA9PT0gSW5maW5pdHlcbiAgICB8fCB2YWwgPT09IC1JbmZpbml0eVxuICApIHJldHVyblxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWwpXG5cbiAgaWYgKGlzTmFOKGRhdGUpKSByZXR1cm5cblxuICBpZiAobWFzayA9PT0gdm9pZCAwKSB7XG4gICAgbWFzayA9IGRlZmF1bHRNYXNrXG4gIH1cblxuICBjb25zdCBsb2NhbGUgPSBnZXREYXRlTG9jYWxlKGRhdGVMb2NhbGUsIExhbmcucHJvcHMpXG5cbiAgcmV0dXJuIG1hc2sucmVwbGFjZShcbiAgICB0b2tlbixcbiAgICAobWF0Y2gsIHRleHQpID0+IChcbiAgICAgIG1hdGNoIGluIGZvcm1hdHRlclxuICAgICAgICA/IGZvcm1hdHRlclsgbWF0Y2ggXShkYXRlLCBsb2NhbGUsIF9fZm9yY2VkWWVhciwgX19mb3JjZWRUaW1lem9uZU9mZnNldClcbiAgICAgICAgOiAodGV4dCA9PT0gdm9pZCAwID8gbWF0Y2ggOiB0ZXh0LnNwbGl0KCdcXFxcXScpLmpvaW4oJ10nKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lIChkYXRlKSB7XG4gIHJldHVybiBpc0RhdGUoZGF0ZSkgPT09IHRydWVcbiAgICA/IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKVxuICAgIDogZGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzVmFsaWQsXG4gIGV4dHJhY3REYXRlLFxuICBidWlsZERhdGUsXG4gIGdldERheU9mV2VlayxcbiAgZ2V0V2Vla09mWWVhcixcbiAgaXNCZXR3ZWVuRGF0ZXMsXG4gIGFkZFRvRGF0ZSxcbiAgc3VidHJhY3RGcm9tRGF0ZSxcbiAgYWRqdXN0RGF0ZSxcbiAgc3RhcnRPZkRhdGUsXG4gIGVuZE9mRGF0ZSxcbiAgZ2V0TWF4RGF0ZSxcbiAgZ2V0TWluRGF0ZSxcbiAgZ2V0RGF0ZURpZmYsXG4gIGdldERheU9mWWVhcixcbiAgaW5mZXJEYXRlRm9ybWF0LFxuICBnZXREYXRlQmV0d2VlbixcbiAgaXNTYW1lRGF0ZSxcbiAgZGF5c0luTW9udGgsXG4gIGZvcm1hdERhdGUsXG4gIGNsb25lXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgVHJhbnNpdGlvbiwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUmVuZGVyQ2FjaGUgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXJlbmRlci1jYWNoZS91c2UtcmVuZGVyLWNhY2hlLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtQXR0cnMsIHVzZUZvcm1JbmplY3QgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtZm9ybS9wcml2YXRlLnVzZS1mb3JtLmpzJ1xuaW1wb3J0IHVzZURhdGV0aW1lLCB7IHVzZURhdGV0aW1lUHJvcHMsIHVzZURhdGV0aW1lRW1pdHMsIGdldERheUhhc2ggfSBmcm9tICcuL3VzZS1kYXRldGltZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBfX3NwbGl0RGF0ZSwgZ2V0RGF0ZURpZmYgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlL2RhdGUuanMnXG5pbXBvcnQgeyBwYWQgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgamFsYWFsaU1vbnRoTGVuZ3RoLCB0b0dyZWdvcmlhbiB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUvcHJpdmF0ZS5wZXJzaWFuLmpzJ1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy9pcy9pcy5qcydcblxuY29uc3QgeWVhcnNJbnRlcnZhbCA9IDIwXG5jb25zdCB2aWV3cyA9IFsgJ0NhbGVuZGFyJywgJ1llYXJzJywgJ01vbnRocycgXVxuY29uc3Qgdmlld0lzVmFsaWQgPSB2ID0+IHZpZXdzLmluY2x1ZGVzKHYpXG5jb25zdCB5ZWFyTW9udGhWYWxpZGF0b3IgPSB2ID0+IC9eLT9bXFxkXStcXC9bMC0xXVxcZCQvLnRlc3QodilcbmNvbnN0IGxpbmVTdHIgPSAnIFxcdTIwMTQgJ1xuXG5mdW5jdGlvbiBnZXRNb250aEhhc2ggKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUueWVhciArICcvJyArIHBhZChkYXRlLm1vbnRoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUURhdGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGF0ZXRpbWVQcm9wcyxcbiAgICAuLi51c2VGb3JtUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHZhbCA9PiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheSh2YWwpID09PSB0cnVlIHx8IE9iamVjdCh2YWwpID09PSB2YWwgfHwgdmFsID09PSBudWxsKVxuICAgIH0sXG5cbiAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICByYW5nZTogQm9vbGVhbixcblxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgc3VidGl0bGU6IFN0cmluZyxcblxuICAgIG1hc2s6IHtcbiAgICAgIC4uLnVzZURhdGV0aW1lUHJvcHMubWFzayxcbiAgICAgIC8vIHRoaXMgbWFzayBpcyBmb3JjZWRcbiAgICAgIC8vIHdoZW4gdXNpbmcgcGVyc2lhbiBjYWxlbmRhclxuICAgICAgZGVmYXVsdDogJ1lZWVkvTU0vREQnXG4gICAgfSxcblxuICAgIGRlZmF1bHRZZWFyTW9udGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogeWVhck1vbnRoVmFsaWRhdG9yXG4gICAgfSxcblxuICAgIHllYXJzSW5Nb250aFZpZXc6IEJvb2xlYW4sXG5cbiAgICBldmVudHM6IFsgQXJyYXksIEZ1bmN0aW9uIF0sXG4gICAgZXZlbnRDb2xvcjogWyBTdHJpbmcsIEZ1bmN0aW9uIF0sXG5cbiAgICBlbWl0SW1tZWRpYXRlbHk6IEJvb2xlYW4sXG5cbiAgICBvcHRpb25zOiBbIEFycmF5LCBGdW5jdGlvbiBdLFxuXG4gICAgbmF2aWdhdGlvbk1pblllYXJNb250aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB5ZWFyTW9udGhWYWxpZGF0b3JcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbk1heFllYXJNb250aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB5ZWFyTW9udGhWYWxpZGF0b3JcbiAgICB9LFxuXG4gICAgbm9VbnNldDogQm9vbGVhbixcblxuICAgIGZpcnN0RGF5T2ZXZWVrOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgdG9kYXlCdG46IEJvb2xlYW4sXG4gICAgbWluaW1hbDogQm9vbGVhbixcbiAgICBkZWZhdWx0Vmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ0NhbGVuZGFyJyxcbiAgICAgIHZhbGlkYXRvcjogdmlld0lzVmFsaWRcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VEYXRldGltZUVtaXRzLFxuICAgICdyYW5nZVN0YXJ0JywgJ3JhbmdlRW5kJywgJ25hdmlnYXRpb24nXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGdldENhY2hlIH0gPSB1c2VSZW5kZXJDYWNoZSgpXG4gICAgY29uc3QgeyB0YWJpbmRleCwgaGVhZGVyQ2xhc3MsIGdldExvY2FsZSwgZ2V0Q3VycmVudERhdGUgfSA9IHVzZURhdGV0aW1lKHByb3BzLCAkcSlcblxuICAgIGxldCBsYXN0RW1pdFZhbHVlXG5cbiAgICBjb25zdCBmb3JtQXR0cnMgPSB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgaW5uZXJNYXNrID0gcmVmKGdldE1hc2soKSlcbiAgICBjb25zdCBpbm5lckxvY2FsZSA9IHJlZihnZXRMb2NhbGUoKSlcblxuICAgIGNvbnN0IG1hc2sgPSBjb21wdXRlZCgoKSA9PiBnZXRNYXNrKCkpXG4gICAgY29uc3QgbG9jYWxlID0gY29tcHV0ZWQoKCkgPT4gZ2V0TG9jYWxlKCkpXG5cbiAgICBjb25zdCB0b2RheSA9IGNvbXB1dGVkKCgpID0+IGdldEN1cnJlbnREYXRlKCkpXG5cbiAgICAvLyBtb2RlbCBvZiBjdXJyZW50IGNhbGVuZGFyIHZpZXc6XG4gICAgY29uc3Qgdmlld01vZGVsID0gcmVmKGdldFZpZXdNb2RlbChpbm5lck1hc2sudmFsdWUsIGlubmVyTG9jYWxlLnZhbHVlKSlcblxuICAgIGNvbnN0IHZpZXcgPSByZWYocHJvcHMuZGVmYXVsdFZpZXcpXG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiAoJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnKSlcbiAgICBjb25zdCBtb250aERpcmVjdGlvbiA9IHJlZihkaXJlY3Rpb24udmFsdWUpXG4gICAgY29uc3QgeWVhckRpcmVjdGlvbiA9IHJlZihkaXJlY3Rpb24udmFsdWUpXG5cbiAgICBjb25zdCB5ZWFyID0gdmlld01vZGVsLnZhbHVlLnllYXJcbiAgICBjb25zdCBzdGFydFllYXIgPSByZWYoeWVhciAtICh5ZWFyICUgeWVhcnNJbnRlcnZhbCkgLSAoeWVhciA8IDAgPyB5ZWFyc0ludGVydmFsIDogMCkpXG4gICAgY29uc3QgZWRpdFJhbmdlID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IHByb3BzLmxhbmRzY2FwZSA9PT0gdHJ1ZSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0J1xuICAgICAgcmV0dXJuIGBxLWRhdGUgcS1kYXRlLS0keyB0eXBlIH0gcS1kYXRlLS0keyB0eXBlIH0tJHsgcHJvcHMubWluaW1hbCA9PT0gdHJ1ZSA/ICdtaW5pbWFsJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWRhdGUtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1kYXRlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWRhdGUtLXNxdWFyZSBuby1ib3JkZXItcmFkaXVzJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLWRhdGUtLWZsYXQgbm8tc2hhZG93JyA6ICcnKVxuICAgICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUgPyAnIHEtZGF0ZS0tcmVhZG9ubHknIDogJycpKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wdXRlZENvbG9yID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmNvbG9yIHx8ICdwcmltYXJ5J1xuICAgIH0pXG5cbiAgICBjb25zdCBjb21wdXRlZFRleHRDb2xvciA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy50ZXh0Q29sb3IgfHwgJ3doaXRlJ1xuICAgIH0pXG5cbiAgICBjb25zdCBpc0ltbWVkaWF0ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5lbWl0SW1tZWRpYXRlbHkgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm11bHRpcGxlICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5yYW5nZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRNb2RlbCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgIDogKHByb3BzLm1vZGVsVmFsdWUgIT09IG51bGwgJiYgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdm9pZCAwID8gWyBwcm9wcy5tb2RlbFZhbHVlIF0gOiBbXSlcbiAgICApKVxuXG4gICAgY29uc3QgZGF5c01vZGVsID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIG5vcm1hbGl6ZWRNb2RlbC52YWx1ZVxuICAgICAgICAuZmlsdGVyKGRhdGUgPT4gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAubWFwKGRhdGUgPT4gZGVjb2RlU3RyaW5nKGRhdGUsIGlubmVyTWFzay52YWx1ZSwgaW5uZXJMb2NhbGUudmFsdWUpKVxuICAgICAgICAuZmlsdGVyKGRhdGUgPT5cbiAgICAgICAgICBkYXRlLmRhdGVIYXNoICE9PSBudWxsXG4gICAgICAgICAgJiYgZGF0ZS5kYXkgIT09IG51bGxcbiAgICAgICAgICAmJiBkYXRlLm1vbnRoICE9PSBudWxsXG4gICAgICAgICAgJiYgZGF0ZS55ZWFyICE9PSBudWxsXG4gICAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCByYW5nZU1vZGVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZm4gPSBkYXRlID0+IGRlY29kZVN0cmluZyhkYXRlLCBpbm5lck1hc2sudmFsdWUsIGlubmVyTG9jYWxlLnZhbHVlKVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRNb2RlbC52YWx1ZVxuICAgICAgICAuZmlsdGVyKGRhdGUgPT4gaXNPYmplY3QoZGF0ZSkgPT09IHRydWUgJiYgZGF0ZS5mcm9tICE9PSB2b2lkIDAgJiYgZGF0ZS50byAhPT0gdm9pZCAwKVxuICAgICAgICAubWFwKHJhbmdlID0+ICh7IGZyb206IGZuKHJhbmdlLmZyb20pLCB0bzogZm4ocmFuZ2UudG8pIH0pKVxuICAgICAgICAuZmlsdGVyKHJhbmdlID0+IHJhbmdlLmZyb20uZGF0ZUhhc2ggIT09IG51bGwgJiYgcmFuZ2UudG8uZGF0ZUhhc2ggIT09IG51bGwgJiYgcmFuZ2UuZnJvbS5kYXRlSGFzaCA8IHJhbmdlLnRvLmRhdGVIYXNoKVxuICAgIH0pXG5cbiAgICBjb25zdCBnZXROYXRpdmVEYXRlRm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jYWxlbmRhciAhPT0gJ3BlcnNpYW4nXG4gICAgICAgID8gbW9kZWwgPT4gbmV3IERhdGUobW9kZWwueWVhciwgbW9kZWwubW9udGggLSAxLCBtb2RlbC5kYXkpXG4gICAgICAgIDogbW9kZWwgPT4ge1xuICAgICAgICAgIGNvbnN0IGdEYXRlID0gdG9HcmVnb3JpYW4obW9kZWwueWVhciwgbW9kZWwubW9udGgsIG1vZGVsLmRheSlcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZ0RhdGUuZ3ksIGdEYXRlLmdtIC0gMSwgZ0RhdGUuZ2QpXG4gICAgICAgIH1cbiAgICApKVxuXG4gICAgY29uc3QgZW5jb2RlT2JqZWN0Rm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jYWxlbmRhciA9PT0gJ3BlcnNpYW4nXG4gICAgICAgID8gZ2V0RGF5SGFzaFxuICAgICAgICA6IChkYXRlLCBtYXNrLCBsb2NhbGUpID0+IGZvcm1hdERhdGUoXG4gICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgZGF0ZS55ZWFyLFxuICAgICAgICAgICAgICBkYXRlLm1vbnRoIC0gMSxcbiAgICAgICAgICAgICAgZGF0ZS5kYXksXG4gICAgICAgICAgICAgIGRhdGUuaG91cixcbiAgICAgICAgICAgICAgZGF0ZS5taW51dGUsXG4gICAgICAgICAgICAgIGRhdGUuc2Vjb25kLFxuICAgICAgICAgICAgICBkYXRlLm1pbGxpc2Vjb25kXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFzayA9PT0gdm9pZCAwID8gaW5uZXJNYXNrLnZhbHVlIDogbWFzayxcbiAgICAgICAgICAgIGxvY2FsZSA9PT0gdm9pZCAwID8gaW5uZXJMb2NhbGUudmFsdWUgOiBsb2NhbGUsXG4gICAgICAgICAgICBkYXRlLnllYXIsXG4gICAgICAgICAgICBkYXRlLnRpbWV6b25lT2Zmc2V0XG4gICAgICAgICAgKVxuICAgICkpXG5cbiAgICBjb25zdCBkYXlzSW5Nb2RlbCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBkYXlzTW9kZWwudmFsdWUubGVuZ3RoICsgcmFuZ2VNb2RlbC52YWx1ZS5yZWR1Y2UoXG4gICAgICAgIChhY2MsIHJhbmdlKSA9PiBhY2MgKyAxICsgZ2V0RGF0ZURpZmYoXG4gICAgICAgICAgZ2V0TmF0aXZlRGF0ZUZuLnZhbHVlKHJhbmdlLnRvKSxcbiAgICAgICAgICBnZXROYXRpdmVEYXRlRm4udmFsdWUocmFuZ2UuZnJvbSlcbiAgICAgICAgKSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnRpdGxlICE9PSB2b2lkIDAgJiYgcHJvcHMudGl0bGUgIT09IG51bGwgJiYgcHJvcHMudGl0bGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy50aXRsZVxuICAgICAgfVxuXG4gICAgICBpZiAoZWRpdFJhbmdlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZWRpdFJhbmdlLnZhbHVlLmluaXRcbiAgICAgICAgY29uc3QgZGF0ZSA9IGdldE5hdGl2ZURhdGVGbi52YWx1ZShtb2RlbClcblxuICAgICAgICByZXR1cm4gaW5uZXJMb2NhbGUudmFsdWUuZGF5c1Nob3J0WyBkYXRlLmdldERheSgpIF0gKyAnLCAnXG4gICAgICAgICAgKyBpbm5lckxvY2FsZS52YWx1ZS5tb250aHNTaG9ydFsgbW9kZWwubW9udGggLSAxIF0gKyAnICdcbiAgICAgICAgICArIG1vZGVsLmRheSArIGxpbmVTdHIgKyAnPydcbiAgICAgIH1cblxuICAgICAgaWYgKGRheXNJbk1vZGVsLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsaW5lU3RyXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXlzSW5Nb2RlbC52YWx1ZSA+IDEpIHtcbiAgICAgICAgcmV0dXJuIGAkeyBkYXlzSW5Nb2RlbC52YWx1ZSB9ICR7IGlubmVyTG9jYWxlLnZhbHVlLnBsdXJhbERheSB9YFxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2RlbCA9IGRheXNNb2RlbC52YWx1ZVsgMCBdXG4gICAgICBjb25zdCBkYXRlID0gZ2V0TmF0aXZlRGF0ZUZuLnZhbHVlKG1vZGVsKVxuXG4gICAgICBpZiAoaXNOYU4oZGF0ZS52YWx1ZU9mKCkpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBsaW5lU3RyXG4gICAgICB9XG5cbiAgICAgIGlmIChpbm5lckxvY2FsZS52YWx1ZS5oZWFkZXJUaXRsZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBpbm5lckxvY2FsZS52YWx1ZS5oZWFkZXJUaXRsZShkYXRlLCBtb2RlbClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlubmVyTG9jYWxlLnZhbHVlLmRheXNTaG9ydFsgZGF0ZS5nZXREYXkoKSBdICsgJywgJ1xuICAgICAgICArIGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0WyBtb2RlbC5tb250aCAtIDEgXSArICcgJ1xuICAgICAgICArIG1vZGVsLmRheVxuICAgIH0pXG5cbiAgICBjb25zdCBtaW5TZWxlY3RlZE1vZGVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbW9kZWwgPSBkYXlzTW9kZWwudmFsdWUuY29uY2F0KHJhbmdlTW9kZWwudmFsdWUubWFwKHJhbmdlID0+IHJhbmdlLmZyb20pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyIHx8IGEubW9udGggLSBiLm1vbnRoKVxuXG4gICAgICByZXR1cm4gbW9kZWxbIDAgXVxuICAgIH0pXG5cbiAgICBjb25zdCBtYXhTZWxlY3RlZE1vZGVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbW9kZWwgPSBkYXlzTW9kZWwudmFsdWUuY29uY2F0KHJhbmdlTW9kZWwudmFsdWUubWFwKHJhbmdlID0+IHJhbmdlLnRvKSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIueWVhciAtIGEueWVhciB8fCBiLm1vbnRoIC0gYS5tb250aClcblxuICAgICAgcmV0dXJuIG1vZGVsWyAwIF1cbiAgICB9KVxuXG4gICAgY29uc3QgaGVhZGVyU3VidGl0bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuc3VidGl0bGUgIT09IHZvaWQgMCAmJiBwcm9wcy5zdWJ0aXRsZSAhPT0gbnVsbCAmJiBwcm9wcy5zdWJ0aXRsZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnN1YnRpdGxlXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXlzSW5Nb2RlbC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbGluZVN0clxuICAgICAgfVxuXG4gICAgICBpZiAoZGF5c0luTW9kZWwudmFsdWUgPiAxKSB7XG4gICAgICAgIGNvbnN0IGZyb20gPSBtaW5TZWxlY3RlZE1vZGVsLnZhbHVlXG4gICAgICAgIGNvbnN0IHRvID0gbWF4U2VsZWN0ZWRNb2RlbC52YWx1ZVxuICAgICAgICBjb25zdCBtb250aCA9IGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0XG5cbiAgICAgICAgcmV0dXJuIG1vbnRoWyBmcm9tLm1vbnRoIC0gMSBdICsgKFxuICAgICAgICAgIGZyb20ueWVhciAhPT0gdG8ueWVhclxuICAgICAgICAgICAgPyAnICcgKyBmcm9tLnllYXIgKyBsaW5lU3RyICsgbW9udGhbIHRvLm1vbnRoIC0gMSBdICsgJyAnXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICBmcm9tLm1vbnRoICE9PSB0by5tb250aFxuICAgICAgICAgICAgICAgICAgPyBsaW5lU3RyICsgbW9udGhbIHRvLm1vbnRoIC0gMSBdXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgKSArICcgJyArIHRvLnllYXJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRheXNNb2RlbC52YWx1ZVsgMCBdLnllYXJcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0ZUFycm93ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWyAkcS5pY29uU2V0LmRhdGV0aW1lLmFycm93TGVmdCwgJHEuaWNvblNldC5kYXRldGltZS5hcnJvd1JpZ2h0IF1cbiAgICAgIHJldHVybiAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHZhbC5yZXZlcnNlKCkgOiB2YWxcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcHV0ZWRGaXJzdERheU9mV2VlayA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmZpcnN0RGF5T2ZXZWVrICE9PSB2b2lkIDBcbiAgICAgICAgPyBOdW1iZXIocHJvcHMuZmlyc3REYXlPZldlZWspXG4gICAgICAgIDogaW5uZXJMb2NhbGUudmFsdWUuZmlyc3REYXlPZldlZWtcbiAgICApKVxuXG4gICAgY29uc3QgZGF5c09mV2VlayA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGRheXMgPSBpbm5lckxvY2FsZS52YWx1ZS5kYXlzU2hvcnQsXG4gICAgICAgIGZpcnN0ID0gY29tcHV0ZWRGaXJzdERheU9mV2Vlay52YWx1ZVxuXG4gICAgICByZXR1cm4gZmlyc3QgPiAwXG4gICAgICAgID8gZGF5cy5zbGljZShmaXJzdCwgNykuY29uY2F0KGRheXMuc2xpY2UoMCwgZmlyc3QpKVxuICAgICAgICA6IGRheXNcbiAgICB9KVxuXG4gICAgY29uc3QgZGF5c0luTW9udGggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gdmlld01vZGVsLnZhbHVlXG4gICAgICByZXR1cm4gcHJvcHMuY2FsZW5kYXIgIT09ICdwZXJzaWFuJ1xuICAgICAgICA/IChuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDApKS5nZXREYXRlKClcbiAgICAgICAgOiBqYWxhYWxpTW9udGhMZW5ndGgoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoKVxuICAgIH0pXG5cbiAgICBjb25zdCBldnRDb2xvciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHR5cGVvZiBwcm9wcy5ldmVudENvbG9yID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcHMuZXZlbnRDb2xvclxuICAgICAgICA6ICgpID0+IHByb3BzLmV2ZW50Q29sb3JcbiAgICApKVxuXG4gICAgY29uc3QgbWluTmF2ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm5hdmlnYXRpb25NaW5ZZWFyTW9udGggPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gcHJvcHMubmF2aWdhdGlvbk1pblllYXJNb250aC5zcGxpdCgnLycpXG4gICAgICByZXR1cm4geyB5ZWFyOiBwYXJzZUludChkYXRhWyAwIF0sIDEwKSwgbW9udGg6IHBhcnNlSW50KGRhdGFbIDEgXSwgMTApIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbWF4TmF2ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm5hdmlnYXRpb25NYXhZZWFyTW9udGggPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gcHJvcHMubmF2aWdhdGlvbk1heFllYXJNb250aC5zcGxpdCgnLycpXG4gICAgICByZXR1cm4geyB5ZWFyOiBwYXJzZUludChkYXRhWyAwIF0sIDEwKSwgbW9udGg6IHBhcnNlSW50KGRhdGFbIDEgXSwgMTApIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbmF2Qm91bmRhcmllcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIG1vbnRoOiB7IHByZXY6IHRydWUsIG5leHQ6IHRydWUgfSxcbiAgICAgICAgeWVhcjogeyBwcmV2OiB0cnVlLCBuZXh0OiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1pbk5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtaW5OYXYudmFsdWUueWVhciA+PSB2aWV3TW9kZWwudmFsdWUueWVhcikge1xuICAgICAgICBkYXRhLnllYXIucHJldiA9IGZhbHNlXG4gICAgICAgIGlmIChtaW5OYXYudmFsdWUueWVhciA9PT0gdmlld01vZGVsLnZhbHVlLnllYXIgJiYgbWluTmF2LnZhbHVlLm1vbnRoID49IHZpZXdNb2RlbC52YWx1ZS5tb250aCkge1xuICAgICAgICAgIGRhdGEubW9udGgucHJldiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtYXhOYXYudmFsdWUueWVhciA8PSB2aWV3TW9kZWwudmFsdWUueWVhcikge1xuICAgICAgICBkYXRhLnllYXIubmV4dCA9IGZhbHNlXG4gICAgICAgIGlmIChtYXhOYXYudmFsdWUueWVhciA9PT0gdmlld01vZGVsLnZhbHVlLnllYXIgJiYgbWF4TmF2LnZhbHVlLm1vbnRoIDw9IHZpZXdNb2RlbC52YWx1ZS5tb250aCkge1xuICAgICAgICAgIGRhdGEubW9udGgubmV4dCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuXG4gICAgY29uc3QgZGF5c01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcCA9IHt9XG5cbiAgICAgIGRheXNNb2RlbC52YWx1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgY29uc3QgaGFzaCA9IGdldE1vbnRoSGFzaChlbnRyeSlcblxuICAgICAgICBpZiAobWFwWyBoYXNoIF0gPT09IHZvaWQgMCkge1xuICAgICAgICAgIG1hcFsgaGFzaCBdID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcFsgaGFzaCBdLnB1c2goZW50cnkuZGF5KVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1hcFxuICAgIH0pXG5cbiAgICBjb25zdCByYW5nZU1hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcCA9IHt9XG5cbiAgICAgIHJhbmdlTW9kZWwudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc2hGcm9tID0gZ2V0TW9udGhIYXNoKGVudHJ5LmZyb20pXG4gICAgICAgIGNvbnN0IGhhc2hUbyA9IGdldE1vbnRoSGFzaChlbnRyeS50bylcblxuICAgICAgICBpZiAobWFwWyBoYXNoRnJvbSBdID09PSB2b2lkIDApIHtcbiAgICAgICAgICBtYXBbIGhhc2hGcm9tIF0gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwWyBoYXNoRnJvbSBdLnB1c2goe1xuICAgICAgICAgIGZyb206IGVudHJ5LmZyb20uZGF5LFxuICAgICAgICAgIHRvOiBoYXNoRnJvbSA9PT0gaGFzaFRvID8gZW50cnkudG8uZGF5IDogdm9pZCAwLFxuICAgICAgICAgIHJhbmdlOiBlbnRyeVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChoYXNoRnJvbSA8IGhhc2hUbykge1xuICAgICAgICAgIGxldCBoYXNoXG4gICAgICAgICAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZW50cnkuZnJvbVxuICAgICAgICAgIGNvbnN0IGN1ciA9IG1vbnRoIDwgMTJcbiAgICAgICAgICAgID8geyB5ZWFyLCBtb250aDogbW9udGggKyAxIH1cbiAgICAgICAgICAgIDogeyB5ZWFyOiB5ZWFyICsgMSwgbW9udGg6IDEgfVxuXG4gICAgICAgICAgd2hpbGUgKChoYXNoID0gZ2V0TW9udGhIYXNoKGN1cikpIDw9IGhhc2hUbykge1xuICAgICAgICAgICAgaWYgKG1hcFsgaGFzaCBdID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgbWFwWyBoYXNoIF0gPSBbXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXBbIGhhc2ggXS5wdXNoKHtcbiAgICAgICAgICAgICAgZnJvbTogdm9pZCAwLFxuICAgICAgICAgICAgICB0bzogaGFzaCA9PT0gaGFzaFRvID8gZW50cnkudG8uZGF5IDogdm9pZCAwLFxuICAgICAgICAgICAgICByYW5nZTogZW50cnlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGN1ci5tb250aCsrXG4gICAgICAgICAgICBpZiAoY3VyLm1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgICAgY3VyLnllYXIrK1xuICAgICAgICAgICAgICBjdXIubW9udGggPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWFwXG4gICAgfSlcblxuICAgIGNvbnN0IHJhbmdlVmlldyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChlZGl0UmFuZ2UudmFsdWUgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb25zdCB7IGluaXQsIGluaXRIYXNoLCBmaW5hbCwgZmluYWxIYXNoIH0gPSBlZGl0UmFuZ2UudmFsdWVcblxuICAgICAgY29uc3QgWyBmcm9tLCB0byBdID0gaW5pdEhhc2ggPD0gZmluYWxIYXNoXG4gICAgICAgID8gWyBpbml0LCBmaW5hbCBdXG4gICAgICAgIDogWyBmaW5hbCwgaW5pdCBdXG5cbiAgICAgIGNvbnN0IGZyb21IYXNoID0gZ2V0TW9udGhIYXNoKGZyb20pXG4gICAgICBjb25zdCB0b0hhc2ggPSBnZXRNb250aEhhc2godG8pXG5cbiAgICAgIGlmIChcbiAgICAgICAgZnJvbUhhc2ggIT09IHZpZXdNb250aEhhc2gudmFsdWVcbiAgICAgICAgJiYgdG9IYXNoICE9PSB2aWV3TW9udGhIYXNoLnZhbHVlXG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCB2aWV3ID0ge31cblxuICAgICAgaWYgKGZyb21IYXNoID09PSB2aWV3TW9udGhIYXNoLnZhbHVlKSB7XG4gICAgICAgIHZpZXcuZnJvbSA9IGZyb20uZGF5XG4gICAgICAgIHZpZXcuaW5jbHVkZUZyb20gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmlldy5mcm9tID0gMVxuICAgICAgfVxuXG4gICAgICBpZiAodG9IYXNoID09PSB2aWV3TW9udGhIYXNoLnZhbHVlKSB7XG4gICAgICAgIHZpZXcudG8gPSB0by5kYXlcbiAgICAgICAgdmlldy5pbmNsdWRlVG8gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmlldy50byA9IGRheXNJbk1vbnRoLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2aWV3XG4gICAgfSlcblxuICAgIGNvbnN0IHZpZXdNb250aEhhc2ggPSBjb21wdXRlZCgoKSA9PiBnZXRNb250aEhhc2godmlld01vZGVsLnZhbHVlKSlcblxuICAgIGNvbnN0IHNlbGVjdGlvbkRheXNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtYXAgPSB7fVxuXG4gICAgICBpZiAocHJvcHMub3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoLnZhbHVlOyBpKyspIHtcbiAgICAgICAgICBtYXBbIGkgXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSB0eXBlb2YgcHJvcHMub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BzLm9wdGlvbnNcbiAgICAgICAgOiBkYXRlID0+IHByb3BzLm9wdGlvbnMuaW5jbHVkZXMoZGF0ZSlcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGgudmFsdWU7IGkrKykge1xuICAgICAgICBjb25zdCBkYXlIYXNoID0gdmlld01vbnRoSGFzaC52YWx1ZSArICcvJyArIHBhZChpKVxuICAgICAgICBtYXBbIGkgXSA9IGZuKGRheUhhc2gpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXBcbiAgICB9KVxuXG4gICAgY29uc3QgZXZlbnREYXlzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbWFwID0ge31cblxuICAgICAgaWYgKHByb3BzLmV2ZW50cyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoLnZhbHVlOyBpKyspIHtcbiAgICAgICAgICBtYXBbIGkgXSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmbiA9IHR5cGVvZiBwcm9wcy5ldmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IHByb3BzLmV2ZW50c1xuICAgICAgICAgIDogZGF0ZSA9PiBwcm9wcy5ldmVudHMuaW5jbHVkZXMoZGF0ZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZGF5SGFzaCA9IHZpZXdNb250aEhhc2gudmFsdWUgKyAnLycgKyBwYWQoaSlcbiAgICAgICAgICBtYXBbIGkgXSA9IGZuKGRheUhhc2gpID09PSB0cnVlICYmIGV2dENvbG9yLnZhbHVlKGRheUhhc2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hcFxuICAgIH0pXG5cbiAgICBjb25zdCB2aWV3RGF5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBkYXRlLCBlbmREYXlcbiAgICAgIGNvbnN0IHsgeWVhciwgbW9udGggfSA9IHZpZXdNb2RlbC52YWx1ZVxuXG4gICAgICBpZiAocHJvcHMuY2FsZW5kYXIgIT09ICdwZXJzaWFuJykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAxKVxuICAgICAgICBlbmREYXkgPSAobmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAwKSkuZ2V0RGF0ZSgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZ0RhdGUgPSB0b0dyZWdvcmlhbih5ZWFyLCBtb250aCwgMSlcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGdEYXRlLmd5LCBnRGF0ZS5nbSAtIDEsIGdEYXRlLmdkKVxuICAgICAgICBsZXQgcHJldkpNID0gbW9udGggLSAxXG4gICAgICAgIGxldCBwcmV2SlkgPSB5ZWFyXG4gICAgICAgIGlmIChwcmV2Sk0gPT09IDApIHtcbiAgICAgICAgICBwcmV2Sk0gPSAxMlxuICAgICAgICAgIHByZXZKWS0tXG4gICAgICAgIH1cbiAgICAgICAgZW5kRGF5ID0gamFsYWFsaU1vbnRoTGVuZ3RoKHByZXZKWSwgcHJldkpNKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXlzOiBkYXRlLmdldERheSgpIC0gY29tcHV0ZWRGaXJzdERheU9mV2Vlay52YWx1ZSAtIDEsXG4gICAgICAgIGVuZERheVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXlzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gW11cbiAgICAgIGNvbnN0IHsgZGF5cywgZW5kRGF5IH0gPSB2aWV3RGF5cy52YWx1ZVxuXG4gICAgICBjb25zdCBsZW4gPSBkYXlzIDwgMCA/IGRheXMgKyA3IDogZGF5c1xuICAgICAgaWYgKGxlbiA8IDYpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVuZERheSAtIGxlbjsgaSA8PSBlbmREYXk7IGkrKykge1xuICAgICAgICAgIHJlcy5wdXNoKHsgaSwgZmlsbDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gcmVzLmxlbmd0aFxuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IHsgaSwgZXZlbnQ6IGV2ZW50RGF5c01hcC52YWx1ZVsgaSBdLCBjbGFzc2VzOiBbXSB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbkRheXNNYXAudmFsdWVbIGkgXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRheS5pbiA9IHRydWVcbiAgICAgICAgICBkYXkuZmxhdCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5wdXNoKGRheSlcbiAgICAgIH1cblxuICAgICAgLy8gaWYgY3VycmVudCB2aWV3IGhhcyBkYXlzIGluIG1vZGVsXG4gICAgICBpZiAoZGF5c01hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF5c01hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICBjb25zdCBpID0gaW5kZXggKyBkYXkgLSAxXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNbIGkgXSwge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgIHRleHRDb2xvcjogY29tcHV0ZWRUZXh0Q29sb3IudmFsdWVcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBjdXJyZW50IHZpZXcgaGFzIHJhbmdlcyBpbiBtb2RlbFxuICAgICAgaWYgKHJhbmdlTWFwLnZhbHVlWyB2aWV3TW9udGhIYXNoLnZhbHVlIF0gIT09IHZvaWQgMCkge1xuICAgICAgICByYW5nZU1hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5mcm9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb20gPSBpbmRleCArIGVudHJ5LmZyb20gLSAxXG4gICAgICAgICAgICBjb25zdCB0byA9IGluZGV4ICsgKGVudHJ5LnRvIHx8IGRheXNJbk1vbnRoLnZhbHVlKSAtIDFcblxuICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gZnJvbTsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZGF5IF0sIHtcbiAgICAgICAgICAgICAgICByYW5nZTogZW50cnkucmFuZ2UsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyBmcm9tIF0sIHtcbiAgICAgICAgICAgICAgcmFuZ2VGcm9tOiB0cnVlLFxuICAgICAgICAgICAgICBmbGF0OiBmYWxzZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZW50cnkudG8gIT09IHZvaWQgMCAmJiBPYmplY3QuYXNzaWduKHJlc1sgdG8gXSwge1xuICAgICAgICAgICAgICByYW5nZVRvOiB0cnVlLFxuICAgICAgICAgICAgICBmbGF0OiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoZW50cnkudG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY29uc3QgdG8gPSBpbmRleCArIGVudHJ5LnRvIC0gMVxuXG4gICAgICAgICAgICBmb3IgKGxldCBkYXkgPSBpbmRleDsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZGF5IF0sIHtcbiAgICAgICAgICAgICAgICByYW5nZTogZW50cnkucmFuZ2UsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyB0byBdLCB7XG4gICAgICAgICAgICAgIGZsYXQ6IGZhbHNlLFxuICAgICAgICAgICAgICByYW5nZVRvOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRvID0gaW5kZXggKyBkYXlzSW5Nb250aC52YWx1ZSAtIDFcbiAgICAgICAgICAgIGZvciAobGV0IGRheSA9IGluZGV4OyBkYXkgPD0gdG87IGRheSsrKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyBkYXkgXSwge1xuICAgICAgICAgICAgICAgIHJhbmdlOiBlbnRyeS5yYW5nZSxcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb21wdXRlZENvbG9yLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogY29tcHV0ZWRUZXh0Q29sb3IudmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVZpZXcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBmcm9tID0gaW5kZXggKyByYW5nZVZpZXcudmFsdWUuZnJvbSAtIDFcbiAgICAgICAgY29uc3QgdG8gPSBpbmRleCArIHJhbmdlVmlldy52YWx1ZS50byAtIDFcblxuICAgICAgICBmb3IgKGxldCBkYXkgPSBmcm9tOyBkYXkgPD0gdG87IGRheSsrKSB7XG4gICAgICAgICAgcmVzWyBkYXkgXS5jb2xvciA9IGNvbXB1dGVkQ29sb3IudmFsdWVcbiAgICAgICAgICByZXNbIGRheSBdLmVkaXRSYW5nZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYW5nZVZpZXcudmFsdWUuaW5jbHVkZUZyb20gPT09IHRydWUpIHtcbiAgICAgICAgICByZXNbIGZyb20gXS5lZGl0UmFuZ2VGcm9tID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5nZVZpZXcudmFsdWUuaW5jbHVkZVRvID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVzWyB0byBdLmVkaXRSYW5nZVRvID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2aWV3TW9kZWwudmFsdWUueWVhciA9PT0gdG9kYXkudmFsdWUueWVhciAmJiB2aWV3TW9kZWwudmFsdWUubW9udGggPT09IHRvZGF5LnZhbHVlLm1vbnRoKSB7XG4gICAgICAgIHJlc1sgaW5kZXggKyB0b2RheS52YWx1ZS5kYXkgLSAxIF0udG9kYXkgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxlZnQgPSByZXMubGVuZ3RoICUgN1xuICAgICAgaWYgKGxlZnQgPiAwKSB7XG4gICAgICAgIGNvbnN0IGFmdGVyRGF5cyA9IDcgLSBsZWZ0XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGFmdGVyRGF5czsgaSsrKSB7XG4gICAgICAgICAgcmVzLnB1c2goeyBpLCBmaWxsOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgbGV0IGNscyA9ICdxLWRhdGVfX2NhbGVuZGFyLWl0ZW0gJ1xuXG4gICAgICAgIGlmIChkYXkuZmlsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNscyArPSAncS1kYXRlX19jYWxlbmRhci1pdGVtLS1maWxsJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNscyArPSBgcS1kYXRlX19jYWxlbmRhci1pdGVtLS0keyBkYXkuaW4gPT09IHRydWUgPyAnaW4nIDogJ291dCcgfWBcblxuICAgICAgICAgIGlmIChkYXkucmFuZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY2xzICs9IGAgcS1kYXRlX19yYW5nZSR7IGRheS5yYW5nZVRvID09PSB0cnVlID8gJy10bycgOiAoZGF5LnJhbmdlRnJvbSA9PT0gdHJ1ZSA/ICctZnJvbScgOiAnJykgfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGF5LmVkaXRSYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzICs9IGAgcS1kYXRlX19lZGl0LXJhbmdlJHsgZGF5LmVkaXRSYW5nZUZyb20gPT09IHRydWUgPyAnLWZyb20nIDogJycgfSR7IGRheS5lZGl0UmFuZ2VUbyA9PT0gdHJ1ZSA/ICctdG8nIDogJycgfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGF5LnJhbmdlICE9PSB2b2lkIDAgfHwgZGF5LmVkaXRSYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzICs9IGAgdGV4dC0keyBkYXkuY29sb3IgfWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXkuY2xhc3NlcyA9IGNsc1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlc1xuICAgIH0pXG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfVxuICAgICAgICA6IHt9XG4gICAgKSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHYgPT4ge1xuICAgICAgaWYgKGxhc3RFbWl0VmFsdWUgPT09IHYpIHtcbiAgICAgICAgbGFzdEVtaXRWYWx1ZSA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtb2RlbCA9IGdldFZpZXdNb2RlbChpbm5lck1hc2sudmFsdWUsIGlubmVyTG9jYWxlLnZhbHVlKVxuICAgICAgICB1cGRhdGVWaWV3TW9kZWwobW9kZWwueWVhciwgbW9kZWwubW9udGgsIG1vZGVsKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCh2aWV3LCAoKSA9PiB7XG4gICAgICBpZiAoYmx1clRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiBwcm94eS4kZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgPT09IHRydWUpIHtcbiAgICAgICAgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHZpZXdNb2RlbC52YWx1ZS55ZWFyICsgJ3wnICsgdmlld01vZGVsLnZhbHVlLm1vbnRoLCAoKSA9PiB7XG4gICAgICBlbWl0KCduYXZpZ2F0aW9uJywgeyB5ZWFyOiB2aWV3TW9kZWwudmFsdWUueWVhciwgbW9udGg6IHZpZXdNb2RlbC52YWx1ZS5tb250aCB9KVxuICAgIH0pXG5cbiAgICB3YXRjaChtYXNrLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlVmFsdWUodmFsLCBpbm5lckxvY2FsZS52YWx1ZSwgJ21hc2snKVxuICAgICAgaW5uZXJNYXNrLnZhbHVlID0gdmFsXG4gICAgfSlcblxuICAgIHdhdGNoKGxvY2FsZSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVZhbHVlKGlubmVyTWFzay52YWx1ZSwgdmFsLCAnbG9jYWxlJylcbiAgICAgIGlubmVyTG9jYWxlLnZhbHVlID0gdmFsXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHNldFRvZGF5ICgpIHtcbiAgICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gdG9kYXkudmFsdWVcblxuICAgICAgY29uc3QgZGF0ZSA9IHtcbiAgICAgICAgLy8gY29udGFpbnMgbW9yZSBwcm9wcyB0aGFuIG5lZWRlZCAoaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kKVxuICAgICAgICAvLyBidXQgdGhvc2UgYXJlbid0IHVzZWQgaW4gdGhlIHByb2Nlc3Npbmcgb2YgdGhpcyBcImRhdGVcIiB2YXJpYWJsZVxuICAgICAgICAuLi52aWV3TW9kZWwudmFsdWUsXG5cbiAgICAgICAgLy8gb3ZlcndyaXRpbmcgd2l0aCB0b2RheSdzIGRhdGVcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb250aE1hcCA9IGRheXNNYXAudmFsdWVbIGdldE1vbnRoSGFzaChkYXRlKSBdXG5cbiAgICAgIGlmIChtb250aE1hcCA9PT0gdm9pZCAwIHx8IG1vbnRoTWFwLmluY2x1ZGVzKGRhdGUuZGF5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYWRkVG9Nb2RlbChkYXRlKVxuICAgICAgfVxuXG4gICAgICBzZXRDYWxlbmRhclRvKGRhdGUueWVhciwgZGF0ZS5tb250aClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRWaWV3ICh2aWV3TW9kZSkge1xuICAgICAgaWYgKHZpZXdJc1ZhbGlkKHZpZXdNb2RlKSA9PT0gdHJ1ZSkge1xuICAgICAgICB2aWV3LnZhbHVlID0gdmlld01vZGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmZzZXRDYWxlbmRhciAodHlwZSwgZGVzY2VuZGluZykge1xuICAgICAgaWYgKFsgJ21vbnRoJywgJ3llYXInIF0uaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgY29uc3QgZm4gPSB0eXBlID09PSAnbW9udGgnID8gZ29Ub01vbnRoIDogZ29Ub1llYXJcbiAgICAgICAgZm4oZGVzY2VuZGluZyA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDYWxlbmRhclRvICh5ZWFyLCBtb250aCkge1xuICAgICAgdmlldy52YWx1ZSA9ICdDYWxlbmRhcidcbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCBtb250aClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRFZGl0aW5nUmFuZ2UgKGZyb20sIHRvKSB7XG4gICAgICBpZiAocHJvcHMucmFuZ2UgPT09IGZhbHNlIHx8ICFmcm9tKSB7XG4gICAgICAgIGVkaXRSYW5nZS52YWx1ZSA9IG51bGxcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluaXQgPSBPYmplY3QuYXNzaWduKHsgLi4udmlld01vZGVsLnZhbHVlIH0sIGZyb20pXG4gICAgICBjb25zdCBmaW5hbCA9IHRvICE9PSB2b2lkIDBcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHsgLi4udmlld01vZGVsLnZhbHVlIH0sIHRvKVxuICAgICAgICA6IGluaXRcblxuICAgICAgZWRpdFJhbmdlLnZhbHVlID0ge1xuICAgICAgICBpbml0LFxuICAgICAgICBpbml0SGFzaDogZ2V0RGF5SGFzaChpbml0KSxcbiAgICAgICAgZmluYWwsXG4gICAgICAgIGZpbmFsSGFzaDogZ2V0RGF5SGFzaChmaW5hbClcbiAgICAgIH1cblxuICAgICAgc2V0Q2FsZW5kYXJUbyhpbml0LnllYXIsIGluaXQubW9udGgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWFzayAoKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY2FsZW5kYXIgPT09ICdwZXJzaWFuJyA/ICdZWVlZL01NL0REJyA6IHByb3BzLm1hc2tcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGVTdHJpbmcgKGRhdGUsIG1hc2ssIGxvY2FsZSkge1xuICAgICAgcmV0dXJuIF9fc3BsaXREYXRlKFxuICAgICAgICBkYXRlLFxuICAgICAgICBtYXNrLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHByb3BzLmNhbGVuZGFyLFxuICAgICAgICB7XG4gICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICAgIG1pbGxpc2Vjb25kOiAwXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaWV3TW9kZWwgKG1hc2ssIGxvY2FsZSkge1xuICAgICAgY29uc3QgbW9kZWwgPSBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICA6IChwcm9wcy5tb2RlbFZhbHVlID8gWyBwcm9wcy5tb2RlbFZhbHVlIF0gOiBbXSlcblxuICAgICAgaWYgKG1vZGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZ2V0RGVmYXVsdFZpZXdNb2RlbCgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IG1vZGVsWyBtb2RlbC5sZW5ndGggLSAxIF1cbiAgICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVTdHJpbmcoXG4gICAgICAgIHRhcmdldC5mcm9tICE9PSB2b2lkIDAgPyB0YXJnZXQuZnJvbSA6IHRhcmdldCxcbiAgICAgICAgbWFzayxcbiAgICAgICAgbG9jYWxlXG4gICAgICApXG5cbiAgICAgIHJldHVybiBkZWNvZGVkLmRhdGVIYXNoID09PSBudWxsXG4gICAgICAgID8gZ2V0RGVmYXVsdFZpZXdNb2RlbCgpXG4gICAgICAgIDogZGVjb2RlZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlZmF1bHRWaWV3TW9kZWwgKCkge1xuICAgICAgbGV0IHllYXIsIG1vbnRoXG5cbiAgICAgIGlmIChwcm9wcy5kZWZhdWx0WWVhck1vbnRoICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgZCA9IHByb3BzLmRlZmF1bHRZZWFyTW9udGguc3BsaXQoJy8nKVxuICAgICAgICB5ZWFyID0gcGFyc2VJbnQoZFsgMCBdLCAxMClcbiAgICAgICAgbW9udGggPSBwYXJzZUludChkWyAxIF0sIDEwKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG1heSBjb21lIGZyb20gZGF0YSgpIHdoZXJlIGNvbXB1dGVkXG4gICAgICAgIC8vIHByb3BzIGFyZSBub3QgeWV0IGF2YWlsYWJsZVxuICAgICAgICBjb25zdCBkID0gdG9kYXkudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICAgID8gdG9kYXkudmFsdWVcbiAgICAgICAgICA6IGdldEN1cnJlbnREYXRlKClcblxuICAgICAgICB5ZWFyID0gZC55ZWFyXG4gICAgICAgIG1vbnRoID0gZC5tb250aFxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyLFxuICAgICAgICBtb250aCxcbiAgICAgICAgZGF5OiAxLFxuICAgICAgICBob3VyOiAwLFxuICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgIHNlY29uZDogMCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IDAsXG4gICAgICAgIGRhdGVIYXNoOiB5ZWFyICsgJy8nICsgcGFkKG1vbnRoKSArICcvMDEnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ29Ub01vbnRoIChvZmZzZXQpIHtcbiAgICAgIGxldCB5ZWFyID0gdmlld01vZGVsLnZhbHVlLnllYXJcbiAgICAgIGxldCBtb250aCA9IE51bWJlcih2aWV3TW9kZWwudmFsdWUubW9udGgpICsgb2Zmc2V0XG5cbiAgICAgIGlmIChtb250aCA9PT0gMTMpIHtcbiAgICAgICAgbW9udGggPSAxXG4gICAgICAgIHllYXIrK1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobW9udGggPT09IDApIHtcbiAgICAgICAgbW9udGggPSAxMlxuICAgICAgICB5ZWFyLS1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlVmlld01vZGVsKHllYXIsIG1vbnRoKVxuICAgICAgaXNJbW1lZGlhdGUudmFsdWUgPT09IHRydWUgJiYgZW1pdEltbWVkaWF0ZWx5KCdtb250aCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ29Ub1llYXIgKG9mZnNldCkge1xuICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2aWV3TW9kZWwudmFsdWUueWVhcikgKyBvZmZzZXRcbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCB2aWV3TW9kZWwudmFsdWUubW9udGgpXG4gICAgICBpc0ltbWVkaWF0ZS52YWx1ZSA9PT0gdHJ1ZSAmJiBlbWl0SW1tZWRpYXRlbHkoJ3llYXInKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFllYXIgKHllYXIpIHtcbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCB2aWV3TW9kZWwudmFsdWUubW9udGgpXG4gICAgICB2aWV3LnZhbHVlID0gcHJvcHMuZGVmYXVsdFZpZXcgPT09ICdZZWFycycgPyAnTW9udGhzJyA6ICdDYWxlbmRhcidcbiAgICAgIGlzSW1tZWRpYXRlLnZhbHVlID09PSB0cnVlICYmIGVtaXRJbW1lZGlhdGVseSgneWVhcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TW9udGggKG1vbnRoKSB7XG4gICAgICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsLnZhbHVlLnllYXIsIG1vbnRoKVxuICAgICAgdmlldy52YWx1ZSA9ICdDYWxlbmRhcidcbiAgICAgIGlzSW1tZWRpYXRlLnZhbHVlID09PSB0cnVlICYmIGVtaXRJbW1lZGlhdGVseSgnbW9udGgnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZURhdGUgKGRhdGUsIG1vbnRoSGFzaCkge1xuICAgICAgY29uc3QgbW9udGggPSBkYXlzTWFwLnZhbHVlWyBtb250aEhhc2ggXVxuICAgICAgY29uc3QgZm4gPSBtb250aCAhPT0gdm9pZCAwICYmIG1vbnRoLmluY2x1ZGVzKGRhdGUuZGF5KSA9PT0gdHJ1ZVxuICAgICAgICA/IHJlbW92ZUZyb21Nb2RlbFxuICAgICAgICA6IGFkZFRvTW9kZWxcblxuICAgICAgZm4oZGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaG9ydERhdGUgKGRhdGUpIHtcbiAgICAgIHJldHVybiB7IHllYXI6IGRhdGUueWVhciwgbW9udGg6IGRhdGUubW9udGgsIGRheTogZGF0ZS5kYXkgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXdNb2RlbCAoeWVhciwgbW9udGgsIHRpbWUpIHtcbiAgICAgIGlmIChtaW5OYXYudmFsdWUgIT09IG51bGwgJiYgeWVhciA8PSBtaW5OYXYudmFsdWUueWVhcikge1xuICAgICAgICBpZiAobW9udGggPCBtaW5OYXYudmFsdWUubW9udGggfHwgeWVhciA8IG1pbk5hdi52YWx1ZS55ZWFyKSB7XG4gICAgICAgICAgbW9udGggPSBtaW5OYXYudmFsdWUubW9udGhcbiAgICAgICAgfVxuICAgICAgICB5ZWFyID0gbWluTmF2LnZhbHVlLnllYXJcbiAgICAgIH1cblxuICAgICAgaWYgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiB5ZWFyID49IG1heE5hdi52YWx1ZS55ZWFyKSB7XG4gICAgICAgIGlmIChtb250aCA+IG1heE5hdi52YWx1ZS5tb250aCB8fCB5ZWFyID4gbWF4TmF2LnZhbHVlLnllYXIpIHtcbiAgICAgICAgICBtb250aCA9IG1heE5hdi52YWx1ZS5tb250aFxuICAgICAgICB9XG4gICAgICAgIHllYXIgPSBtYXhOYXYudmFsdWUueWVhclxuICAgICAgfVxuXG4gICAgICBpZiAodGltZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCB0aW1lem9uZU9mZnNldCwgdGltZUhhc2ggfSA9IHRpbWVcbiAgICAgICAgT2JqZWN0LmFzc2lnbih2aWV3TW9kZWwudmFsdWUsIHsgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCB0aW1lem9uZU9mZnNldCwgdGltZUhhc2ggfSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3SGFzaCA9IHllYXIgKyAnLycgKyBwYWQobW9udGgpICsgJy8wMSdcblxuICAgICAgaWYgKG5ld0hhc2ggIT09IHZpZXdNb2RlbC52YWx1ZS5kYXRlSGFzaCkge1xuICAgICAgICBtb250aERpcmVjdGlvbi52YWx1ZSA9ICh2aWV3TW9kZWwudmFsdWUuZGF0ZUhhc2ggPCBuZXdIYXNoKSA9PT0gKCRxLmxhbmcucnRsICE9PSB0cnVlKSA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgICAgaWYgKHllYXIgIT09IHZpZXdNb2RlbC52YWx1ZS55ZWFyKSB7XG4gICAgICAgICAgeWVhckRpcmVjdGlvbi52YWx1ZSA9IG1vbnRoRGlyZWN0aW9uLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgc3RhcnRZZWFyLnZhbHVlID0geWVhciAtIHllYXIgJSB5ZWFyc0ludGVydmFsIC0gKHllYXIgPCAwID8geWVhcnNJbnRlcnZhbCA6IDApXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih2aWV3TW9kZWwudmFsdWUsIHtcbiAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgIGRheTogMSxcbiAgICAgICAgICAgIGRhdGVIYXNoOiBuZXdIYXNoXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0VmFsdWUgKHZhbCwgYWN0aW9uLCBkYXRlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbCAhPT0gbnVsbCAmJiB2YWwubGVuZ3RoID09PSAxICYmIHByb3BzLm11bHRpcGxlID09PSBmYWxzZVxuICAgICAgICA/IHZhbFsgMCBdXG4gICAgICAgIDogdmFsXG5cbiAgICAgIGxhc3RFbWl0VmFsdWUgPSB2YWx1ZVxuXG4gICAgICBjb25zdCB7IHJlYXNvbiwgZGV0YWlscyB9ID0gZ2V0RW1pdFBhcmFtcyhhY3Rpb24sIGRhdGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlLCByZWFzb24sIGRldGFpbHMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdEltbWVkaWF0ZWx5IChyZWFzb24pIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXlzTW9kZWwudmFsdWVbIDAgXSAhPT0gdm9pZCAwICYmIGRheXNNb2RlbC52YWx1ZVsgMCBdLmRhdGVIYXNoICE9PSBudWxsXG4gICAgICAgID8geyAuLi5kYXlzTW9kZWwudmFsdWVbIDAgXSB9XG4gICAgICAgIDogeyAuLi52aWV3TW9kZWwudmFsdWUgfSAvLyBpbmhlcml0IGRheSwgaG91cnMsIG1pbnV0ZXMsIG1pbGxpc2Vjb25kcy4uLlxuXG4gICAgICAvLyBuZXh0VGljayByZXF1aXJlZCBiZWNhdXNlIG9mIGFuaW1hdGlvbiBkZWxheSBpbiB2aWV3TW9kZWxcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgZGF0ZS55ZWFyID0gdmlld01vZGVsLnZhbHVlLnllYXJcbiAgICAgICAgZGF0ZS5tb250aCA9IHZpZXdNb2RlbC52YWx1ZS5tb250aFxuXG4gICAgICAgIGNvbnN0IG1heERheSA9IHByb3BzLmNhbGVuZGFyICE9PSAncGVyc2lhbidcbiAgICAgICAgICA/IChuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDApKS5nZXREYXRlKClcbiAgICAgICAgICA6IGphbGFhbGlNb250aExlbmd0aChkYXRlLnllYXIsIGRhdGUubW9udGgpXG5cbiAgICAgICAgZGF0ZS5kYXkgPSBNYXRoLm1pbihNYXRoLm1heCgxLCBkYXRlLmRheSksIG1heERheSlcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGVuY29kZUVudHJ5KGRhdGUpXG4gICAgICAgIGxhc3RFbWl0VmFsdWUgPSB2YWx1ZVxuXG4gICAgICAgIGNvbnN0IHsgZGV0YWlscyB9ID0gZ2V0RW1pdFBhcmFtcygnJywgZGF0ZSlcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSwgcmVhc29uLCBkZXRhaWxzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbWl0UGFyYW1zIChhY3Rpb24sIGRhdGUpIHtcbiAgICAgIHJldHVybiBkYXRlLmZyb20gIT09IHZvaWQgMFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHJlYXNvbjogYCR7IGFjdGlvbiB9LXJhbmdlYCxcbiAgICAgICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICAgICAgLi4uZ2V0U2hvcnREYXRlKGRhdGUudGFyZ2V0KSxcbiAgICAgICAgICAgICAgZnJvbTogZ2V0U2hvcnREYXRlKGRhdGUuZnJvbSksXG4gICAgICAgICAgICAgIHRvOiBnZXRTaG9ydERhdGUoZGF0ZS50bylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgcmVhc29uOiBgJHsgYWN0aW9uIH0tZGF5YCxcbiAgICAgICAgICAgIGRldGFpbHM6IGdldFNob3J0RGF0ZShkYXRlKVxuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmNvZGVFbnRyeSAoZGF0ZSwgbWFzaywgbG9jYWxlKSB7XG4gICAgICByZXR1cm4gZGF0ZS5mcm9tICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IGZyb206IGVuY29kZU9iamVjdEZuLnZhbHVlKGRhdGUuZnJvbSwgbWFzaywgbG9jYWxlKSwgdG86IGVuY29kZU9iamVjdEZuLnZhbHVlKGRhdGUudG8sIG1hc2ssIGxvY2FsZSkgfVxuICAgICAgICA6IGVuY29kZU9iamVjdEZuLnZhbHVlKGRhdGUsIG1hc2ssIGxvY2FsZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb01vZGVsIChkYXRlKSB7XG4gICAgICBsZXQgdmFsdWVcblxuICAgICAgaWYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChkYXRlLmZyb20gIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8vIHdlIGFsc28gbmVlZCB0byBmaWx0ZXIgb3V0IGludGVyc2VjdGlvbnNcblxuICAgICAgICAgIGNvbnN0IGZyb21IYXNoID0gZ2V0RGF5SGFzaChkYXRlLmZyb20pXG4gICAgICAgICAgY29uc3QgdG9IYXNoID0gZ2V0RGF5SGFzaChkYXRlLnRvKVxuXG4gICAgICAgICAgY29uc3QgZGF5cyA9IGRheXNNb2RlbC52YWx1ZVxuICAgICAgICAgICAgLmZpbHRlcihkYXkgPT4gZGF5LmRhdGVIYXNoIDwgZnJvbUhhc2ggfHwgZGF5LmRhdGVIYXNoID4gdG9IYXNoKVxuXG4gICAgICAgICAgY29uc3QgcmFuZ2VzID0gcmFuZ2VNb2RlbC52YWx1ZVxuICAgICAgICAgICAgLmZpbHRlcigoeyBmcm9tLCB0byB9KSA9PiB0by5kYXRlSGFzaCA8IGZyb21IYXNoIHx8IGZyb20uZGF0ZUhhc2ggPiB0b0hhc2gpXG5cbiAgICAgICAgICB2YWx1ZSA9IGRheXMuY29uY2F0KHJhbmdlcykuY29uY2F0KGRhdGUpLm1hcChlbnRyeSA9PiBlbmNvZGVFbnRyeShlbnRyeSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBub3JtYWxpemVkTW9kZWwudmFsdWUuc2xpY2UoKVxuICAgICAgICAgIG1vZGVsLnB1c2goZW5jb2RlRW50cnkoZGF0ZSkpXG4gICAgICAgICAgdmFsdWUgPSBtb2RlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBlbmNvZGVFbnRyeShkYXRlKVxuICAgICAgfVxuXG4gICAgICBlbWl0VmFsdWUodmFsdWUsICdhZGQnLCBkYXRlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21Nb2RlbCAoZGF0ZSkge1xuICAgICAgaWYgKHByb3BzLm5vVW5zZXQgPT09IHRydWUpIHJldHVyblxuXG4gICAgICBsZXQgbW9kZWwgPSBudWxsXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGVuY29kZUVudHJ5KGRhdGUpXG5cbiAgICAgICAgaWYgKGRhdGUuZnJvbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlLmZpbHRlcihcbiAgICAgICAgICAgIGRhdGUgPT4gKFxuICAgICAgICAgICAgICBkYXRlLmZyb20gIT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gKGRhdGUuZnJvbSAhPT0gdmFsLmZyb20gJiYgZGF0ZS50byAhPT0gdmFsLnRvKVxuICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuZmlsdGVyKGRhdGUgPT4gZGF0ZSAhPT0gdmFsKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIG1vZGVsID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVtaXRWYWx1ZShtb2RlbCwgJ3JlbW92ZScsIGRhdGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUgKG1hc2ssIGxvY2FsZSwgcmVhc29uKSB7XG4gICAgICBjb25zdCBtb2RlbCA9IGRheXNNb2RlbC52YWx1ZVxuICAgICAgICAuY29uY2F0KHJhbmdlTW9kZWwudmFsdWUpXG4gICAgICAgIC5tYXAoZW50cnkgPT4gZW5jb2RlRW50cnkoZW50cnksIG1hc2ssIGxvY2FsZSkpXG4gICAgICAgIC5maWx0ZXIoZW50cnkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbnRyeS5mcm9tICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gZW50cnkuZnJvbS5kYXRlSGFzaCAhPT0gbnVsbCAmJiBlbnRyeS50by5kYXRlSGFzaCAhPT0gbnVsbFxuICAgICAgICAgICAgOiBlbnRyeS5kYXRlSGFzaCAhPT0gbnVsbFxuICAgICAgICB9KVxuXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/IG1vZGVsIDogbW9kZWxbIDAgXSkgfHwgbnVsbCwgcmVhc29uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgICBpZiAocHJvcHMubWluaW1hbCA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1kYXRlX19oZWFkZXIgJyArIGhlYWRlckNsYXNzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgIH0sICgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGtleTogJ2gteXItJyArIGhlYWRlclN1YnRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci1zdWJ0aXRsZSBxLWRhdGVfX2hlYWRlci1saW5rICdcbiAgICAgICAgICAgICAgKyAodmlldy52YWx1ZSA9PT0gJ1llYXJzJyA/ICdxLWRhdGVfX2hlYWRlci1saW5rLS1hY3RpdmUnIDogJ2N1cnNvci1wb2ludGVyJyksXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgndlknLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2sgKCkgeyB2aWV3LnZhbHVlID0gJ1llYXJzJyB9LFxuICAgICAgICAgICAgICBvbktleXVwIChlKSB7IGUua2V5Q29kZSA9PT0gMTMgJiYgKHZpZXcudmFsdWUgPSAnWWVhcnMnKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIFsgaGVhZGVyU3VidGl0bGUudmFsdWUgXSkpXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9faGVhZGVyLXRpdGxlIHJlbGF0aXZlLXBvc2l0aW9uIGZsZXggbm8td3JhcCdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncmVsYXRpdmUtcG9zaXRpb24gY29sJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgICAgfSwgKCkgPT4gaCgnZGl2Jywge1xuICAgICAgICAgICAgICBrZXk6ICdoLXN1YicgKyBoZWFkZXJUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci10aXRsZS1sYWJlbCBxLWRhdGVfX2hlYWRlci1saW5rICdcbiAgICAgICAgICAgICAgICArICh2aWV3LnZhbHVlID09PSAnQ2FsZW5kYXInID8gJ3EtZGF0ZV9faGVhZGVyLWxpbmstLWFjdGl2ZScgOiAnY3Vyc29yLXBvaW50ZXInKSxcbiAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgndkMnLCB7XG4gICAgICAgICAgICAgICAgb25DbGljayAoKSB7IHZpZXcudmFsdWUgPSAnQ2FsZW5kYXInIH0sXG4gICAgICAgICAgICAgICAgb25LZXl1cCAoZSkgeyBlLmtleUNvZGUgPT09IDEzICYmICh2aWV3LnZhbHVlID0gJ0NhbGVuZGFyJykgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgWyBoZWFkZXJUaXRsZS52YWx1ZSBdKSlcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIHByb3BzLnRvZGF5QnRuID09PSB0cnVlID8gaChRQnRuLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9faGVhZGVyLXRvZGF5IHNlbGYtc3RhcnQnLFxuICAgICAgICAgICAgaWNvbjogJHEuaWNvblNldC5kYXRldGltZS50b2RheSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICBvbkNsaWNrOiBzZXRUb2RheVxuICAgICAgICAgIH0pIDogbnVsbFxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROYXZpZ2F0aW9uICh7IGxhYmVsLCB0eXBlLCBrZXksIGRpciwgZ29UbywgYm91bmRhcmllcywgY2xzIH0pIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgcS1kYXRlX19hcnJvdydcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogZGF0ZUFycm93LnZhbHVlWyAwIF0sXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICBkaXNhYmxlOiBib3VuZGFyaWVzLnByZXYgPT09IGZhbHNlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2dvLSMnICsgdHlwZSwgeyBvbkNsaWNrICgpIHsgZ29UbygtMSkgfSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY2VudGVyJyArIGNsc1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1qdW1wLScgKyBkaXJcbiAgICAgICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7IGtleSB9LCBbXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG5vQ2FwczogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3ZpZXcjJyArIHR5cGUsIHsgb25DbGljazogKCkgPT4geyB2aWV3LnZhbHVlID0gdHlwZSB9IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIHEtZGF0ZV9fYXJyb3cnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgZGlzYWJsZTogYm91bmRhcmllcy5uZXh0ID09PSBmYWxzZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdnbysjJyArIHR5cGUsIHsgb25DbGljayAoKSB7IGdvVG8oMSkgfSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVmlld3MgPSB7XG4gICAgICBDYWxlbmRhcjogKCkgPT4gKFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ2NhbGVuZGFyLXZpZXcnLFxuICAgICAgICAgIGNsYXNzOiAncS1kYXRlX192aWV3IHEtZGF0ZV9fY2FsZW5kYXInXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fbmF2aWdhdGlvbiByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICAgfSwgZ2V0TmF2aWdhdGlvbih7XG4gICAgICAgICAgICBsYWJlbDogaW5uZXJMb2NhbGUudmFsdWUubW9udGhzWyB2aWV3TW9kZWwudmFsdWUubW9udGggLSAxIF0sXG4gICAgICAgICAgICB0eXBlOiAnTW9udGhzJyxcbiAgICAgICAgICAgIGtleTogdmlld01vZGVsLnZhbHVlLm1vbnRoLFxuICAgICAgICAgICAgZGlyOiBtb250aERpcmVjdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGdvVG86IGdvVG9Nb250aCxcbiAgICAgICAgICAgIGJvdW5kYXJpZXM6IG5hdkJvdW5kYXJpZXMudmFsdWUubW9udGgsXG4gICAgICAgICAgICBjbHM6ICcgY29sJ1xuICAgICAgICAgIH0pLmNvbmNhdChnZXROYXZpZ2F0aW9uKHtcbiAgICAgICAgICAgIGxhYmVsOiB2aWV3TW9kZWwudmFsdWUueWVhcixcbiAgICAgICAgICAgIHR5cGU6ICdZZWFycycsXG4gICAgICAgICAgICBrZXk6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgZGlyOiB5ZWFyRGlyZWN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgZ29UbzogZ29Ub1llYXIsXG4gICAgICAgICAgICBib3VuZGFyaWVzOiBuYXZCb3VuZGFyaWVzLnZhbHVlLnllYXIsXG4gICAgICAgICAgICBjbHM6ICcnXG4gICAgICAgICAgfSkpKSxcblxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19jYWxlbmRhci13ZWVrZGF5cyByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICAgfSwgZGF5c09mV2Vlay52YWx1ZS5tYXAoZGF5ID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWl0ZW0nIH0sIFsgaCgnZGl2JywgZGF5KSBdKSkpLFxuXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWRheXMtY29udGFpbmVyIHJlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tc2xpZGUtJyArIG1vbnRoRGlyZWN0aW9uLnZhbHVlXG4gICAgICAgICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGtleTogdmlld01vbnRoSGFzaC52YWx1ZSxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWRheXMgZml0J1xuICAgICAgICAgICAgfSwgZGF5cy52YWx1ZS5tYXAoZGF5ID0+IGgoJ2RpdicsIHsgY2xhc3M6IGRheS5jbGFzc2VzIH0sIFtcbiAgICAgICAgICAgICAgZGF5LmluID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBoKFxuICAgICAgICAgICAgICAgICAgUUJ0biwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogZGF5LnRvZGF5ID09PSB0cnVlID8gJ3EtZGF0ZV9fdG9kYXknIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmbGF0OiBkYXkuZmxhdCxcbiAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogZGF5LnVuZWxldmF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXkuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogZGF5LnRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRheS5pLFxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLmdldENhY2hlKCdkYXkjJyArIGRheS5pLCB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4geyBvbkRheUNsaWNrKGRheS5pKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VvdmVyOiAoKSA9PiB7IG9uRGF5TW91c2VvdmVyKGRheS5pKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZGF5LmV2ZW50ICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICA/ICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2V2ZW50IGJnLScgKyBkYXkuZXZlbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogaCgnZGl2JywgJycgKyBkYXkuaSlcbiAgICAgICAgICAgIF0pKSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuXG4gICAgICBNb250aHMgKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyID09PSB0b2RheS52YWx1ZS55ZWFyXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBtb250aCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChtaW5OYXYudmFsdWUgIT09IG51bGwgJiYgdmlld01vZGVsLnZhbHVlLnllYXIgPT09IG1pbk5hdi52YWx1ZS55ZWFyICYmIG1pbk5hdi52YWx1ZS5tb250aCA+IG1vbnRoKVxuICAgICAgICAgICAgfHwgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiB2aWV3TW9kZWwudmFsdWUueWVhciA9PT0gbWF4TmF2LnZhbHVlLnllYXIgJiYgbWF4TmF2LnZhbHVlLm1vbnRoIDwgbW9udGgpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0Lm1hcCgobW9udGgsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSB2aWV3TW9kZWwudmFsdWUubW9udGggPT09IGkgKyAxXG5cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX21vbnRocy1pdGVtIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBjdXJyZW50WWVhciA9PT0gdHJ1ZSAmJiB0b2RheS52YWx1ZS5tb250aCA9PT0gaSArIDEgPyAncS1kYXRlX190b2RheScgOiBudWxsLFxuICAgICAgICAgICAgICBmbGF0OiBhY3RpdmUgIT09IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsOiBtb250aCxcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZDogYWN0aXZlLFxuICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlID09PSB0cnVlID8gY29tcHV0ZWRDb2xvci52YWx1ZSA6IG51bGwsXG4gICAgICAgICAgICAgIHRleHRDb2xvcjogYWN0aXZlID09PSB0cnVlID8gY29tcHV0ZWRUZXh0Q29sb3IudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoaSArIDEpLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgnbW9udGgjJyArIGksIHsgb25DbGljazogKCkgPT4geyBzZXRNb250aChpICsgMSkgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuXG4gICAgICAgIHByb3BzLnllYXJzSW5Nb250aFZpZXcgPT09IHRydWUgJiYgY29udGVudC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdyb3cgbm8td3JhcCBmdWxsLXdpZHRoJyB9LCBbXG4gICAgICAgICAgICBnZXROYXZpZ2F0aW9uKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgICB0eXBlOiAnWWVhcnMnLFxuICAgICAgICAgICAgICBrZXk6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgICBkaXI6IHllYXJEaXJlY3Rpb24udmFsdWUsXG4gICAgICAgICAgICAgIGdvVG86IGdvVG9ZZWFyLFxuICAgICAgICAgICAgICBib3VuZGFyaWVzOiBuYXZCb3VuZGFyaWVzLnZhbHVlLnllYXIsXG4gICAgICAgICAgICAgIGNsczogJyBjb2wnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ21vbnRocy12aWV3JyxcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fdmlldyBxLWRhdGVfX21vbnRocyBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICB9LCBjb250ZW50KVxuICAgICAgfSxcblxuICAgICAgWWVhcnMgKCkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRZZWFyLnZhbHVlLFxuICAgICAgICAgIHN0b3AgPSBzdGFydCArIHllYXJzSW50ZXJ2YWwsXG4gICAgICAgICAgeWVhcnMgPSBbXVxuXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB5ZWFyID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKG1pbk5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtaW5OYXYudmFsdWUueWVhciA+IHllYXIpXG4gICAgICAgICAgICB8fCAobWF4TmF2LnZhbHVlICE9PSBudWxsICYmIG1heE5hdi52YWx1ZS55ZWFyIDwgeWVhcilcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gc3RvcDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gdmlld01vZGVsLnZhbHVlLnllYXIgPT09IGlcblxuICAgICAgICAgIHllYXJzLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX195ZWFycy1pdGVtIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICAgIGtleTogJ3lyJyArIGksXG4gICAgICAgICAgICAgICAgY2xhc3M6IHRvZGF5LnZhbHVlLnllYXIgPT09IGkgPyAncS1kYXRlX190b2RheScgOiBudWxsLFxuICAgICAgICAgICAgICAgIGZsYXQ6ICFhY3RpdmUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGksXG4gICAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogYWN0aXZlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPT09IHRydWUgPyBjb21wdXRlZENvbG9yLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFjdGl2ZSA9PT0gdHJ1ZSA/IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZTogaXNEaXNhYmxlZChpKSxcbiAgICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgneXIjJyArIGksIHsgb25DbGljazogKCkgPT4geyBzZXRZZWFyKGkpIH0gfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fdmlldyBxLWRhdGVfX3llYXJzIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2NvbC1hdXRvJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMCBdLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoc3RhcnQpLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgneS0nLCB7IG9uQ2xpY2s6ICgpID0+IHsgc3RhcnRZZWFyLnZhbHVlIC09IHllYXJzSW50ZXJ2YWwgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX195ZWFycy1jb250ZW50IGNvbCBzZWxmLXN0cmV0Y2ggcm93IGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICB9LCB5ZWFycyksXG5cbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2NvbC1hdXRvJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoc3RvcCksXG4gICAgICAgICAgICAgIC4uLmdldENhY2hlKCd5KycsIHsgb25DbGljazogKCkgPT4geyBzdGFydFllYXIudmFsdWUgKz0geWVhcnNJbnRlcnZhbCB9IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EYXlDbGljayAoZGF5SW5kZXgpIHtcbiAgICAgIGNvbnN0IGRheSA9IHsgLi4udmlld01vZGVsLnZhbHVlLCBkYXk6IGRheUluZGV4IH1cblxuICAgICAgaWYgKHByb3BzLnJhbmdlID09PSBmYWxzZSkge1xuICAgICAgICB0b2dnbGVEYXRlKGRheSwgdmlld01vbnRoSGFzaC52YWx1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlZGl0UmFuZ2UudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGF5UHJvcHMgPSBkYXlzLnZhbHVlLmZpbmQoZGF5ID0+IGRheS5maWxsICE9PSB0cnVlICYmIGRheS5pID09PSBkYXlJbmRleClcblxuICAgICAgICBpZiAocHJvcHMubm9VbnNldCAhPT0gdHJ1ZSAmJiBkYXlQcm9wcy5yYW5nZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmVtb3ZlRnJvbU1vZGVsKHsgdGFyZ2V0OiBkYXksIGZyb206IGRheVByb3BzLnJhbmdlLmZyb20sIHRvOiBkYXlQcm9wcy5yYW5nZS50byB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheVByb3BzLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVtb3ZlRnJvbU1vZGVsKGRheSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRIYXNoID0gZ2V0RGF5SGFzaChkYXkpXG5cbiAgICAgICAgZWRpdFJhbmdlLnZhbHVlID0ge1xuICAgICAgICAgIGluaXQ6IGRheSxcbiAgICAgICAgICBpbml0SGFzaCxcbiAgICAgICAgICBmaW5hbDogZGF5LFxuICAgICAgICAgIGZpbmFsSGFzaDogaW5pdEhhc2hcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ3JhbmdlU3RhcnQnLCBnZXRTaG9ydERhdGUoZGF5KSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGluaXRIYXNoID0gZWRpdFJhbmdlLnZhbHVlLmluaXRIYXNoLFxuICAgICAgICAgIGZpbmFsSGFzaCA9IGdldERheUhhc2goZGF5KSxcbiAgICAgICAgICBwYXlsb2FkID0gaW5pdEhhc2ggPD0gZmluYWxIYXNoXG4gICAgICAgICAgICA/IHsgZnJvbTogZWRpdFJhbmdlLnZhbHVlLmluaXQsIHRvOiBkYXkgfVxuICAgICAgICAgICAgOiB7IGZyb206IGRheSwgdG86IGVkaXRSYW5nZS52YWx1ZS5pbml0IH1cblxuICAgICAgICBlZGl0UmFuZ2UudmFsdWUgPSBudWxsXG4gICAgICAgIGFkZFRvTW9kZWwoaW5pdEhhc2ggPT09IGZpbmFsSGFzaCA/IGRheSA6IHsgdGFyZ2V0OiBkYXksIC4uLnBheWxvYWQgfSlcblxuICAgICAgICBlbWl0KCdyYW5nZUVuZCcsIHtcbiAgICAgICAgICBmcm9tOiBnZXRTaG9ydERhdGUocGF5bG9hZC5mcm9tKSxcbiAgICAgICAgICB0bzogZ2V0U2hvcnREYXRlKHBheWxvYWQudG8pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EYXlNb3VzZW92ZXIgKGRheUluZGV4KSB7XG4gICAgICBpZiAoZWRpdFJhbmdlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsID0geyAuLi52aWV3TW9kZWwudmFsdWUsIGRheTogZGF5SW5kZXggfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWRpdFJhbmdlLnZhbHVlLCB7XG4gICAgICAgICAgZmluYWwsXG4gICAgICAgICAgZmluYWxIYXNoOiBnZXREYXlIYXNoKGZpbmFsKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNldFRvZGF5LCBzZXRWaWV3LCBvZmZzZXRDYWxlbmRhciwgc2V0Q2FsZW5kYXJUbywgc2V0RWRpdGluZ1JhbmdlXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NvbnRlbnQgY29sIHJlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgIH0sIHJlbmRlclZpZXdzWyB2aWV3LnZhbHVlIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IGRlZiA9IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICBkZWYgIT09IHZvaWQgMCAmJiBjb250ZW50LnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2FjdGlvbnMnIH0sIGRlZilcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgIGluamVjdEZvcm1JbnB1dChjb250ZW50LCAncHVzaCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGdldEhlYWRlcigpLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IGJsdXJUYXJnZXRSZWYsXG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX21haW4gY29sIGNvbHVtbicsXG4gICAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICAgIH0sIGNvbnRlbnQpXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRRGlhbG9nIGZyb20gJy4uL2RpYWxvZy9RRGlhbG9nLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB1c2VBbmNob3IsIHsgdXNlQW5jaG9yUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1hbmNob3IvdXNlLWFuY2hvci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuaW5qZWN0LW9iai1wcm9wL2luamVjdC1vYmotcHJvcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQb3B1cFByb3h5JyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUFuY2hvclByb3BzLFxuXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdzaG93JywgJ2hpZGUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBwb3B1cFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5icmVha3BvaW50LCAxMCkpXG5cbiAgICBjb25zdCB7IGNhblNob3cgfSA9IHVzZUFuY2hvcih7IHNob3dpbmcgfSlcblxuICAgIGZ1bmN0aW9uIGdldFR5cGUgKCkge1xuICAgICAgcmV0dXJuICRxLnNjcmVlbi53aWR0aCA8IGJyZWFrcG9pbnQudmFsdWUgfHwgJHEuc2NyZWVuLmhlaWdodCA8IGJyZWFrcG9pbnQudmFsdWVcbiAgICAgICAgPyAnZGlhbG9nJ1xuICAgICAgICA6ICdtZW51J1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSByZWYoZ2V0VHlwZSgpKVxuXG4gICAgY29uc3QgcG9wdXBQcm9wcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHR5cGUudmFsdWUgPT09ICdtZW51JyA/IHsgbWF4SGVpZ2h0OiAnOTl2aCcgfSA6IHt9KVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IGdldFR5cGUoKSwgdmFsID0+IHtcbiAgICAgIGlmIChzaG93aW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHR5cGUudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25TaG93IChldnQpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdzaG93JywgZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoZXZ0KSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIHR5cGUudmFsdWUgPSBnZXRUeXBlKClcbiAgICAgIGVtaXQoJ2hpZGUnLCBldnQpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgc2hvdyAoZXZ0KSB7IGNhblNob3coZXZ0KSA9PT0gdHJ1ZSAmJiBwb3B1cFJlZi52YWx1ZS5zaG93KGV2dCkgfSxcbiAgICAgIGhpZGUgKGV2dCkgeyBwb3B1cFJlZi52YWx1ZS5oaWRlKGV2dCkgfSxcbiAgICAgIHRvZ2dsZSAoZXZ0KSB7IHBvcHVwUmVmLnZhbHVlLnRvZ2dsZShldnQpIH1cbiAgICB9KVxuXG4gICAgaW5qZWN0UHJvcChwcm94eSwgJ2N1cnJlbnRDb21wb25lbnQnLCAoKSA9PiAoe1xuICAgICAgdHlwZTogdHlwZS52YWx1ZSxcbiAgICAgIHJlZjogcG9wdXBSZWYudmFsdWVcbiAgICB9KSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6IHBvcHVwUmVmLFxuICAgICAgICAuLi5wb3B1cFByb3BzLnZhbHVlLFxuICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgb25TaG93LFxuICAgICAgICBvbkhpZGVcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbXBvbmVudFxuXG4gICAgICBpZiAodHlwZS52YWx1ZSA9PT0gJ2RpYWxvZycpIHtcbiAgICAgICAgY29tcG9uZW50ID0gUURpYWxvZ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudCA9IFFNZW51XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgICAgIGNvbnRleHRNZW51OiBwcm9wcy5jb250ZXh0TWVudSxcbiAgICAgICAgICBub1BhcmVudEV2ZW50OiB0cnVlLFxuICAgICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChjb21wb25lbnQsIGRhdGEsIHNsb3RzLmRlZmF1bHQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBMb2FkYWJsZVN0YXRlLCBMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9Mb2FkYWJsZUNvbnRyb2xsZXInO1xuXG5leHBvcnQgdHlwZSBDb21iaW5lZEF3YWl0ZXIgPSB7XG4gIG9uU3VjY2VzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbWJpbmVkTG9hZGFibGVBd2FpdGVyPFQgZXh0ZW5kcyBMb2FkYWJsZVN0YXRlPGFueT5bXT4oXG4gIC4uLmxvYWRhYmxlczogVFxuKTogTG9hZGFibGVTdGF0ZTx2b2lkPiB7XG4gIGNvbnN0IF9zdGF0dXMgPSByZWY8TG9hZGluZ1N0YXR1cz4oTG9hZGluZ1N0YXR1cy5Ob3RMb2FkZWQpO1xuICBjb25zdCBfc3RhdGUgPSByZWY8dm9pZCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBfZXJyb3IgPSByZWY8RXJyb3IgfCBudWxsPihudWxsKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0dXMoc3RhdHVzOiBMb2FkaW5nU3RhdHVzKSB7XG4gICAgX3N0YXR1cy52YWx1ZSA9IHN0YXR1cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEVycm9yKGU6IEVycm9yKSB7XG4gICAgX2Vycm9yLnZhbHVlID0gZTtcbiAgICBzZXRTdGF0dXMoTG9hZGluZ1N0YXR1cy5FcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdWNjZXNzKCkge1xuICAgIHNldFN0YXR1cyhMb2FkaW5nU3RhdHVzLlN1Y2Nlc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TG9hZGluZygpIHtcbiAgICBzZXRTdGF0dXMoTG9hZGluZ1N0YXR1cy5Mb2FkaW5nKTtcbiAgfVxuXG4gIC8vIFdhdGNoIGFsbCBsb2FkYWJsZXMgYW5kIHVwZGF0ZSBjb21iaW5lZCBzdGF0dXMgYWNjb3JkaW5nbHlcbiAgd2F0Y2goXG4gICAgKCkgPT4gbG9hZGFibGVzLm1hcChsb2FkYWJsZSA9PiBsb2FkYWJsZS5zdGF0dXMudmFsdWUpLFxuICAgIChzdGF0dXNlcykgPT4ge1xuICAgICAgaWYgKHN0YXR1c2VzLnNvbWUoc3RhdHVzID0+IHN0YXR1cyA9PT0gTG9hZGluZ1N0YXR1cy5Mb2FkaW5nKSkge1xuICAgICAgICBzZXRMb2FkaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1c2VzLnNvbWUoc3RhdHVzID0+IHN0YXR1cyA9PT0gTG9hZGluZ1N0YXR1cy5FcnJvcikpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBsb2FkYWJsZXMuZmluZChsb2FkYWJsZSA9PiBsb2FkYWJsZS5zdGF0dXMudmFsdWUgPT09IExvYWRpbmdTdGF0dXMuRXJyb3IpPy5lcnJvci52YWx1ZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1c2VzLmV2ZXJ5KHN0YXR1cyA9PiBzdGF0dXMgPT09IExvYWRpbmdTdGF0dXMuU3VjY2VzcykpIHtcbiAgICAgICAgc2V0U3VjY2VzcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdHVzKExvYWRpbmdTdGF0dXMuTm90TG9hZGVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgaW1tZWRpYXRlOiB0cnVlIH1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1czogX3N0YXR1cyxcbiAgICBzdGF0ZTogX3N0YXRlLFxuICAgIGVycm9yOiBfZXJyb3IsXG4gICAgc2V0RXJyb3IsXG4gICAgc2V0U3VjY2VzcyxcbiAgICBzZXRMb2FkaW5nLFxuICB9IGFzIExvYWRhYmxlU3RhdGU8dm9pZD47XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGxtY1BsYXllckJhY2tlbmRcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG4vKipcbiAqIFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUgPSB7XG4gICAgTm9uZTogJ05vbmUnLFxuICAgIEFsYnVtOiAnQWxidW0nLFxuICAgIENpcmNsZTogJ0NpcmNsZSdcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZSA9IHR5cGVvZiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZVtrZXlvZiB0eXBlb2YgVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGVdO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZUZyb21KU09OKGpzb246IGFueSk6IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGVGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlRnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIGpzb24gYXMgVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZVRvSlNPTih2YWx1ZT86IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlIHwgbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlIGFzIGFueTtcbn1cblxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlPlxuICAgIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJzdGF0aWNEYXRhQXdhaXRlclwiPlxuICAgICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICA8cS1zcGlubmVyLWdlYXJzIHNpemU9XCIxMDBweFwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+UmFkaW8gQ29uZmlndXJhdGlvbjwvZGl2PlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlbGVhc2UgRGF0ZSAoQWZ0ZXIgRGF0ZSlcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5yZWxlYXNlRGF0ZUJlZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgbWFzaz1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbJ2RhdGUnXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJldmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1wb3B1cC1wcm94eVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtZGF0ZSB2LW1vZGVsPVwiZmlsdGVycy5yZWxlYXNlRGF0ZUJlZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtZGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1wb3B1cC1wcm94eT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwidmVydGljYWwtc2VwYXJhdG9yIHEtbXgtbWQgYmctdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcIiAvPlxuXG4gICAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlbGVhc2UgRGF0ZSAoQmVmb3JlIERhdGUpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlcnMucmVsZWFzZURhdGVFbmRcIlxuICAgICAgICAgICAgICAgICAgICBtYXNrPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsnZGF0ZSddXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXBvcHVwLXByb3h5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tc2hvdz1cInNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1kYXRlIHYtbW9kZWw9XCJmaWx0ZXJzLnJlbGVhc2VEYXRlRW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtZGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1wb3B1cC1wcm94eT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvcS1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2lyY2xlIFNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICAgICAgICAgIGJlaGF2aW9yPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJzLmNpcmNsZXNcIlxuICAgICAgICAgICAgICAgICAgdXNlLWlucHV0XG4gICAgICAgICAgICAgICAgICB1c2UtY2hpcHNcbiAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICBpbnB1dC1kZWJvdW5jZT1cIjBcIlxuICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJjaXJjbGVPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgIEBmaWx0ZXI9XCJjaXJjbGVGaWx0ZXJGblwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbWItbWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBBbGJ1bXNcIlxuICAgICAgICAgICAgICAgICAgYmVoYXZpb3I9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5vcmlnaW5hbEFsYnVtc1wiXG4gICAgICAgICAgICAgICAgICB1c2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgIHVzZS1jaGlwc1xuICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgIGlucHV0LWRlYm91bmNlPVwiMFwiXG4gICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIm9yaWdpbmFsQWxidW1zT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICBAZmlsdGVyPVwib3JpZ2luYWxBbGJ1bXNGaWx0ZXJGblwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbWItbWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBUcmFja3NcIlxuICAgICAgICAgICAgICAgICAgYmVoYXZpb3I9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5vcmlnaW5hbFRyYWNrc1wiXG4gICAgICAgICAgICAgICAgICB1c2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgIHVzZS1jaGlwc1xuICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgIGlucHV0LWRlYm91bmNlPVwiMFwiXG4gICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIm9yaWdpbmFsVHJhY2tzT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICBAZmlsdGVyPVwib3JpZ2luYWxUcmFja3NGaWx0ZXJGblwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbWItbWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6b3B0aW9uPVwic2NvcGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJzY29wZS5pdGVtUHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IHNjb3BlLm9wdC5sYWJlbCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IHNjb3BlLm9wdC5hbGJ1bU5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYS1tZFwiIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd1N0cmF0aWZpY2F0aW9uSW5mb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyYXRpZmljYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlcnMuc3RyYXRpZmljYXRpb25Nb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzdHJhdGlmaWNhdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpvcHRpb249XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtIHYtYmluZD1cInNjb3BlLml0ZW1Qcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNjb3BlLm9wdC5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBzY29wZS5vcHQudG9vbHRpcCB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYS1tZFwiIC8+XG5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXBwbHkgUmFkaW8gU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYXBwbHlSYWRpb1NldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1jYXJkPlxuXG4gICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgY2xhc3M9XCJxLW10LW1kXCJcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPlJhZGlvPC9kaXY+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwiY29sLTQgY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQvU3RvcCBSYWRpb1wiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic3RhcnRSYWRpb1wiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDbGVhciBSYWRpbyBUcmFja3MgRnJvbSBRdWV1ZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYi1tZFwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDaGVjayBUb3RhbCBUcmFja3MgR2l2ZW4gUmFkaW8gU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIHEtbWItbWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBDaXJjbGVSZWFkRHRvLCBPcmlnaW5hbEFsYnVtUmVhZER0bywgT3JpZ2luYWxUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcbmltcG9ydCBHbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXIgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9HbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXInO1xuaW1wb3J0IFJhZGlvU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1JhZGlvU2VydmljZSc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZExvYWRhYmxlQXdhaXRlciB9IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Db21iaW5lZExvYWRhYmxlQXdhaXRlcic7XG5pbXBvcnQgeyBpbmplY3QsIHJlYWN0aXZlLCByZWYsIHdhdGNoLCB0b1Jhdywgb25Nb3VudGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCBMb2FkYWJsZUVsZW1lbnQgZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlRWxlbWVudC52dWUnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXR1cyB9IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVHJhY2tRdWVyeUZpbHRlcnMgfSBmcm9tICdzcmMvbW9kZWxzL1RyYWNrUXVlcnlGaWx0ZXJzJztcbmltcG9ydCB7IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGkvc3JjJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgU3RyYXRpZmljYXRpb25Nb2RlSGVscERpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EaWFsb2dzL1N0cmF0aWZpY2F0aW9uTW9kZUhlbHBEaWFsb2cudnVlJztcbmludGVyZmFjZSBSYWRpb1BhZ2VGaWx0ZXJzIHtcbiAgcmVsZWFzZURhdGVFbmQ6IHN0cmluZyB8IG51bGw7XG4gIHJlbGVhc2VEYXRlQmVnaW46IHN0cmluZyB8IG51bGw7XG4gIGNpcmNsZXM6IFNlbGVjdE9wdGlvbnNbXTtcbiAgb3JpZ2luYWxBbGJ1bXM6IFNlbGVjdE9wdGlvbnNbXTtcbiAgb3JpZ2luYWxUcmFja3M6IFRyYWNrU2VsZWN0T3B0aW9uc1tdO1xuICBzdHJhdGlmaWNhdGlvbk1vZGU6IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlO1xufVxuXG4vLyBJbmplY3Qgc2VydmljZXNcbmNvbnN0IHJhZGlvU2VydmljZSA9IGluamVjdDxSYWRpb1NlcnZpY2U+KCdyYWRpb1NlcnZpY2UnKTtcbmNvbnN0IHN0YXRpY0RhdGEgPSBpbmplY3Q8R2xvYmFsU3RhdGljRGF0YVByb3ZpZGVyPignZ2xvYmFsU3RhdGljRGF0YVByb3ZpZGVyJyk7XG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBzdGFydFJhZGlvID0gKCkgPT4ge1xuICByYWRpb1NlcnZpY2U/LnRvZ2dsZSgpO1xufTtcblxuXG4vLyBDcmVhdGUgYW4gYXdhaXRlciBmb3IgdGhlIHN0YXRpYyBkYXRhXG5jb25zdCBzdGF0aWNEYXRhQXdhaXRlciA9IHVzZUNvbWJpbmVkTG9hZGFibGVBd2FpdGVyKFxuICBzdGF0aWNEYXRhIS5jaXJjbGVzLFxuICBzdGF0aWNEYXRhIS5vcmlnaW5hbEFsYnVtcyxcbiAgc3RhdGljRGF0YSEub3JpZ2luYWxUcmFja3Ncbik7XG5cbmNvbnN0IGZpbHRlcnMgPSByZWFjdGl2ZTxSYWRpb1BhZ2VGaWx0ZXJzPih7XG4gIHJlbGVhc2VEYXRlRW5kOiBudWxsIGFzIHN0cmluZyB8IG51bGwsXG4gIHJlbGVhc2VEYXRlQmVnaW46IG51bGwgYXMgc3RyaW5nIHwgbnVsbCxcbiAgY2lyY2xlczogW10gYXMgU2VsZWN0T3B0aW9uc1tdLFxuICBvcmlnaW5hbEFsYnVtczogW10gYXMgU2VsZWN0T3B0aW9uc1tdLFxuICBvcmlnaW5hbFRyYWNrczogW10gYXMgVHJhY2tTZWxlY3RPcHRpb25zW10sXG4gIHN0cmF0aWZpY2F0aW9uTW9kZTogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUuTm9uZSxcbn0pO1xuXG5jb25zdCB0b1JhZGlvRmlsdGVycyA9ICgpOiBUcmFja1F1ZXJ5RmlsdGVycyA9PiB7XG4gIGNvbnN0IHJhdyA9IHRvUmF3KGZpbHRlcnMpO1xuXG4gIGNvbnN0IHJlbGVhc2VEYXRlRW5kID0gcmF3LnJlbGVhc2VEYXRlRW5kID8gbmV3IERhdGUocmF3LnJlbGVhc2VEYXRlRW5kKSA6IG51bGw7XG4gIGNvbnN0IHJlbGVhc2VEYXRlQmVnaW4gPSByYXcucmVsZWFzZURhdGVCZWdpbiA/IG5ldyBEYXRlKHJhdy5yZWxlYXNlRGF0ZUJlZ2luKSA6IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICByZWxlYXNlRGF0ZUVuZDogKHJlbGVhc2VEYXRlRW5kIHx8IHVuZGVmaW5lZCksXG4gICAgcmVsZWFzZURhdGVCZWdpbjogKHJlbGVhc2VEYXRlQmVnaW4gfHwgdW5kZWZpbmVkKSxcbiAgICBjaXJjbGVzOiByYXcuY2lyY2xlcy5tYXAoKGMpID0+IGMua2V5KSxcbiAgICBvcmlnaW5hbEFsYnVtczogcmF3Lm9yaWdpbmFsQWxidW1zLm1hcCgob2EpID0+IG9hLmtleSksXG4gICAgb3JpZ2luYWxUcmFja3M6IHJhdy5vcmlnaW5hbFRyYWNrcy5mbGF0TWFwKChvdCkgPT4gb3QuYWxpYXNQa3MpLFxuICAgIHN0cmF0aWZpY2F0aW9uTW9kZTogcmF3LnN0cmF0aWZpY2F0aW9uTW9kZSxcbiAgfTtcbn07XG5cbmNvbnN0IGZyb21SYWRpb0ZpbHRlcnMgPSAocmFkaW9GaWx0ZXJzOiBUcmFja1F1ZXJ5RmlsdGVycyk6IFJhZGlvUGFnZUZpbHRlcnMgPT4ge1xuICBjb25zdCBjaXJjbGVzID0gcmFkaW9GaWx0ZXJzPy5jaXJjbGVzPy5tYXAoKGMpID0+IGNpcmNsZU9wdGlvbnMudmFsdWUuZmluZCgobykgPT4gby5rZXkgPT09IGMpISkgPz8gW107XG4gIGNvbnN0IG9yaWdpbmFsQWxidW1zID0gcmFkaW9GaWx0ZXJzPy5vcmlnaW5hbEFsYnVtcz8ubWFwKChvYSkgPT5cbiAgICBvcmlnaW5hbEFsYnVtc09wdGlvbnMudmFsdWUuZmluZCgobykgPT4gby5rZXkgPT09IG9hKSFcbiAgKSA/PyBbXTtcbiAgY29uc3Qgb3JpZ2luYWxUcmFja3MgPSByYWRpb0ZpbHRlcnM/Lm9yaWdpbmFsVHJhY2tzPy5tYXAoKG90KSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSBvcmlnaW5hbFRyYWNrc09wdGlvbnMudmFsdWUuZmluZCgobykgPT4gb3QgaW4gby5hbGlhc1Brcyk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcmlnaW5hbCB0cmFjayBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9KSA/PyBbXTtcblxuICByZXR1cm4ge1xuICAgIHJlbGVhc2VEYXRlRW5kOiByYWRpb0ZpbHRlcnMucmVsZWFzZURhdGVFbmQ/LnRvSVNPU3RyaW5nKCkgPz8gbnVsbCxcbiAgICByZWxlYXNlRGF0ZUJlZ2luOiByYWRpb0ZpbHRlcnMucmVsZWFzZURhdGVCZWdpbj8udG9JU09TdHJpbmcoKSA/PyBudWxsLFxuICAgIGNpcmNsZXMsXG4gICAgb3JpZ2luYWxBbGJ1bXMsXG4gICAgb3JpZ2luYWxUcmFja3MsXG4gICAgc3RyYXRpZmljYXRpb25Nb2RlOiByYWRpb0ZpbHRlcnMuc3RyYXRpZmljYXRpb25Nb2RlID8/IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlLk5vbmUsXG4gIH07XG59O1xuXG5jb25zdCBhcHBseVJhZGlvU2V0dGluZ3MgPSAoKSA9PiB7XG4gIHJhZGlvU2VydmljZT8uc2V0RmlsdGVycyh0b1JhZGlvRmlsdGVycygpKTtcbn07XG5cbmNvbnN0IHNob3dTdHJhdGlmaWNhdGlvbkluZm8gPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBTdHJhdGlmaWNhdGlvbk1vZGVIZWxwRGlhbG9nLFxuICB9KTtcbn07XG5cbmNvbnN0IHN0cmF0aWZpY2F0aW9uT3B0aW9ucyA9IFtcbiAgeyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUuTm9uZSwgdG9vbHRpcDogJ05vIHN0cmF0aWZpY2F0aW9uJyB9LFxuICB7IGxhYmVsOiAnQWxidW0nLCB2YWx1ZTogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUuQWxidW0sIHRvb2x0aXA6ICdFcXVhbCBudW1iZXIgb2YgdHJhY2tzIHBlciBhbGJ1bScgfSxcbiAgeyBsYWJlbDogJ0NpcmNsZScsIHZhbHVlOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZS5DaXJjbGUsIHRvb2x0aXA6ICdFcXVhbCBudW1iZXIgb2YgdHJhY2tzIHBlciBjaXJjbGUnIH0sXG5dO1xuXG5pbnRlcmZhY2UgU2VsZWN0T3B0aW9ucyB7XG4gIGtleTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG50eXBlIFRyYWNrU2VsZWN0T3B0aW9ucyA9IHtcbiAgYWxpYXNQa3M6IHN0cmluZ1tdO1xuICBhbGJ1bU5hbWU6IHN0cmluZztcbn0gJiBTZWxlY3RPcHRpb25zO1xuXG5jb25zdCBjaXJjbGVEdG9Ub1NlbGVjdE9wdGlvbiA9IChkdG86IENpcmNsZVJlYWREdG8pOiBTZWxlY3RPcHRpb25zID0+ICh7XG4gIGtleTogZHRvLmlkISxcbiAgbGFiZWw6IGR0by5uYW1lISxcbn0pO1xuXG5jb25zdCBvcmlnaW5hbEFsYnVtc0R0b1RvU2VsZWN0T3B0aW9uID0gKGR0bzogT3JpZ2luYWxBbGJ1bVJlYWREdG8pOiBTZWxlY3RPcHRpb25zID0+ICh7XG4gIGtleTogZHRvLmlkISxcbiAgbGFiZWw6IGR0by5mdWxsTmFtZSEuZW4hLFxufSk7XG4vLyB3ZSBuZWVkIGEgZGlmZmVyZW50IGZ1bmN0aW9uIGZvciBvcmlnaW5hbCB0cmFja3MgYmVjYXVzZSB0aGUgdGl0bGUgbWF5IGNvbnRhaW4gZHVwbGljYXRlc1xuLy8gKGZyb20gZGlmZmVyZW50IGdhbWVzL2FsYnVtcyksIHdlIG5lZWQgdG8gbWFrZSB0aGVtIHVuaXF1ZSBieSB0aGUgdGl0bGUsIGFuZCBlYWNoIHRpdGxlXG4vLyBjYW4gYXNzb2NpYXRlIHdpdGggbXVsdGlwbGUgUEtzXG5jb25zdCBvcmlnaW5hbFRyYWNrc0R0b1RvU2VsZWN0T3B0aW9ucyA9IChkdG9zOiBPcmlnaW5hbFRyYWNrUmVhZER0b1tdKTogVHJhY2tTZWxlY3RPcHRpb25zW10gPT4ge1xuICAvLyBmaXJzdCBzb3J0IHRoZSBkdG9zIGJ5IGl0J3MgaWRcbiAgZHRvcy5zb3J0KChhLCBiKSA9PiBhLmlkIS5sb2NhbGVDb21wYXJlKGIuaWQhKSk7XG5cbiAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIFRyYWNrU2VsZWN0T3B0aW9ucz4oKTtcbiAgZm9yIChjb25zdCBkdG8gb2YgZHRvcykge1xuICAgIGNvbnN0IGtleSA9IGR0by50aXRsZSEuZW4hO1xuICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG1hcC5nZXQoa2V5KSE7XG4gICAgICBvcHRpb24uYWxpYXNQa3MhLnB1c2goZHRvLmlkISk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcC5zZXQoa2V5LCB7XG4gICAgICAgIGtleTogZHRvLmlkISxcbiAgICAgICAgbGFiZWw6IGtleSxcbiAgICAgICAgYWxpYXNQa3M6IFtkdG8uaWQhXSxcbiAgICAgICAgYWxidW1OYW1lOiBkdG8uYWxidW0hLnNob3J0TmFtZSEuZW4hLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKG1hcC52YWx1ZXMoKSk7XG59O1xuXG5jb25zdCBjaXJjbGVPcHRpb25zID0gcmVmPFNlbGVjdE9wdGlvbnNbXT4oW10pO1xuY29uc3Qgb3JpZ2luYWxBbGJ1bXNPcHRpb25zID0gcmVmPFNlbGVjdE9wdGlvbnNbXT4oW10pO1xuY29uc3Qgb3JpZ2luYWxUcmFja3NPcHRpb25zID0gcmVmPFRyYWNrU2VsZWN0T3B0aW9uc1tdPihbXSk7XG5cbmNvbnN0IHJlc3RvcmVDdXJyZW50RmlsdGVycyA9ICgpID0+IHtcbiAgY29uc3QgcmFkaW9GaWx0ZXJzID0gcmFkaW9TZXJ2aWNlPy5maWx0ZXJzLnZhbHVlO1xuICBpZiAocmFkaW9GaWx0ZXJzKSB7XG4gICAgY29uc3QgZXhpc3RpbmdGaWx0ZXJzID0gZnJvbVJhZGlvRmlsdGVycyhyYWRpb0ZpbHRlcnMgYXMgVHJhY2tRdWVyeUZpbHRlcnMpO1xuICAgIE9iamVjdC5hc3NpZ24oZmlsdGVycywgZXhpc3RpbmdGaWx0ZXJzKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZU9wdGlvbnMgPSAoKSA9PiB7XG4gIGNpcmNsZU9wdGlvbnMudmFsdWUgPSBzdGF0aWNEYXRhIS5jaXJjbGVzLnN0YXRlIS52YWx1ZSEubWFwKFxuICAgIChkdG8pID0+IGNpcmNsZUR0b1RvU2VsZWN0T3B0aW9uKGR0bylcbiAgKTtcblxuICBvcmlnaW5hbEFsYnVtc09wdGlvbnMudmFsdWUgPSBzdGF0aWNEYXRhIS5vcmlnaW5hbEFsYnVtcy5zdGF0ZSEudmFsdWUhLm1hcChcbiAgICAoZHRvKSA9PiBvcmlnaW5hbEFsYnVtc0R0b1RvU2VsZWN0T3B0aW9uKGR0bylcbiAgKTtcblxuICBvcmlnaW5hbFRyYWNrc09wdGlvbnMudmFsdWUgPSBvcmlnaW5hbFRyYWNrc0R0b1RvU2VsZWN0T3B0aW9ucyhcbiAgICBzdGF0aWNEYXRhIS5vcmlnaW5hbFRyYWNrcy5zdGF0ZSEudmFsdWUhXG4gICk7XG59XG5cbndhdGNoKHN0YXRpY0RhdGFBd2FpdGVyLnN0YXR1cywgKHN0YXR1cykgPT4ge1xuICBpZiAoc3RhdHVzID09PSBMb2FkaW5nU3RhdHVzLlN1Y2Nlc3MpIHtcbiAgICBpbml0aWFsaXplT3B0aW9ucygpO1xuICAgIHJlc3RvcmVDdXJyZW50RmlsdGVycygpO1xuICB9XG59KTtcblxuY29uc3QgY2lyY2xlRmlsdGVyRm4gPSAodmFsOiBzdHJpbmcsIHVwZGF0ZTogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSA9PiB7XG4gIHVwZGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgbmVlZGxlID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgY2lyY2xlT3B0aW9ucy52YWx1ZSA9IHN0YXRpY0RhdGEhLmNpcmNsZXMuc3RhdGUhLnZhbHVlIS5maWx0ZXIoKGR0bykgPT4ge1xuICAgICAgcmV0dXJuIGR0by5uYW1lIS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5lZWRsZSk7XG4gICAgfSkubWFwKGNpcmNsZUR0b1RvU2VsZWN0T3B0aW9uKTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcmlnaW5hbEFsYnVtc0ZpbHRlckZuID0gKHZhbDogc3RyaW5nLCB1cGRhdGU6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZCkgPT4ge1xuICB1cGRhdGUoKCkgPT4ge1xuICAgIGNvbnN0IG5lZWRsZSA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuICAgIG9yaWdpbmFsQWxidW1zT3B0aW9ucy52YWx1ZSA9IHN0YXRpY0RhdGEhLm9yaWdpbmFsQWxidW1zLnN0YXRlIS52YWx1ZSEuZmlsdGVyKChkdG8pID0+IHtcbiAgICAgIHJldHVybiBkdG8uZnVsbE5hbWUhLmVuIS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5lZWRsZSk7XG4gICAgfSkubWFwKG9yaWdpbmFsQWxidW1zRHRvVG9TZWxlY3RPcHRpb24pO1xuICB9KTtcbn07XG5cbmNvbnN0IG9yaWdpbmFsVHJhY2tzRmlsdGVyRm4gPSAodmFsOiBzdHJpbmcsIHVwZGF0ZTogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSA9PiB7XG4gIHVwZGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgbmVlZGxlID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgb3JpZ2luYWxUcmFja3NPcHRpb25zLnZhbHVlID0gb3JpZ2luYWxUcmFja3NEdG9Ub1NlbGVjdE9wdGlvbnMoXG4gICAgICBzdGF0aWNEYXRhIS5vcmlnaW5hbFRyYWNrcy5zdGF0ZSEudmFsdWUhLmZpbHRlcigoZHRvKSA9PiB7XG4gICAgICAgIHJldHVybiBkdG8udGl0bGUhLmVuIS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5lZWRsZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufTtcblxub25Nb3VudGVkKCgpID0+IHtcbiAgLy8gQ2hlY2sgaWYgc3RhdGljIGRhdGEgaXMgYWxyZWFkeSBsb2FkZWRcbiAgaWYgKHN0YXRpY0RhdGFBd2FpdGVyLnN0YXR1cy52YWx1ZSA9PT0gTG9hZGluZ1N0YXR1cy5TdWNjZXNzKSB7XG4gICAgaW5pdGlhbGl6ZU9wdGlvbnMoKTtcbiAgICByZXN0b3JlQ3VycmVudEZpbHRlcnMoKTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJMYW5nIiwibWFzayIsImxvY2FsZSIsIm1vZGVsIiwiZGF0ZSIsImRheXMiLCJ5ZWFyIiwidmlldyIsImRheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsU0FBQSxpQkFBWTtBQUN6QixNQUFJLFFBQVEsdUJBQU8sT0FBTyxJQUFJO0FBRTlCLFNBQU87QUFBQSxJQUNMLFVBTUksQ0FBQyxLQUFLLGlCQUNKLE1BQU8sU0FBVSxTQUVYLE1BQU8sT0FDTCxPQUFPLGlCQUFpQixhQUNwQixhQUFjLElBQ2QsZUFHUixNQUFPO0FBQUEsSUFHakIsU0FBVSxLQUFLLEtBQUs7QUFDbEIsWUFBTyxPQUFRO0FBQUEsSUFDaEI7QUFBQSxJQUVELFNBQVUsS0FBSztBQUNiLGFBQU8sT0FBTyxlQUFlLEtBQUssT0FBTyxHQUFHO0FBQUEsSUFDN0M7QUFBQSxJQUVELFdBQVksS0FBSztBQUNmLFVBQUksUUFBUSxRQUFRO0FBQ2xCLGVBQU8sTUFBTztBQUFBLE1BQ2YsT0FDSTtBQUNILGdCQUFRLHVCQUFPLE9BQU8sSUFBSTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDSDtBQ2xDQSxNQUFNLFNBQVM7QUFBQSxFQUNiO0FBQUEsRUFBSztBQUFBLEVBQUc7QUFBQSxFQUFJO0FBQUEsRUFBSztBQUFBLEVBQUs7QUFBQSxFQUFLO0FBQUEsRUFBSztBQUFBLEVBQUs7QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQ2pEO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFDbEQ7QUFLTyxTQUFTLFVBQVcsSUFBSSxJQUFJLElBQUk7QUFDckMsTUFBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLEVBQUUsTUFBTSxpQkFBaUI7QUFDMUQsU0FBSyxHQUFHLFFBQVM7QUFDakIsU0FBSyxHQUFHLFNBQVEsSUFBSztBQUNyQixTQUFLLEdBQUcsWUFBYTtBQUFBLEVBQ3RCO0FBQ0QsU0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUM1QjtBQUtPLFNBQVMsWUFBYSxJQUFJLElBQUksSUFBSTtBQUN2QyxTQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzVCO0FBS0EsU0FBUyxrQkFBbUIsSUFBSTtBQUM5QixTQUFPLFdBQVcsRUFBRSxNQUFNO0FBQzVCO0FBS08sU0FBUyxtQkFBb0IsSUFBSSxJQUFJO0FBQzFDLE1BQUksTUFBTTtBQUFHLFdBQU87QUFDcEIsTUFBSSxNQUFNO0FBQUksV0FBTztBQUNyQixNQUFJLGtCQUFrQixFQUFFO0FBQUcsV0FBTztBQUNsQyxTQUFPO0FBQ1Q7QUFTQSxTQUFTLFdBQVksSUFBSTtBQUN2QixRQUFNLEtBQUssT0FBTztBQUNsQixNQUNFLEtBQUssT0FBUSxJQUNiLElBQ0EsTUFDQSxNQUNBLEdBQ0E7QUFFRixNQUFJLEtBQUssTUFBTSxNQUFNLE9BQVEsS0FBSyxJQUFLO0FBQUUsVUFBTSxJQUFJLE1BQU0sMEJBQTBCLEVBQUU7QUFBQSxFQUFHO0FBRXhGLE9BQUssSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDMUIsU0FBSyxPQUFRO0FBQ2IsV0FBTyxLQUFLO0FBQ1osUUFBSSxLQUFLLElBQUk7QUFBRTtBQUFBLElBQU87QUFDdEIsU0FBSztBQUFBLEVBQ047QUFDRCxNQUFJLEtBQUs7QUFFVCxNQUFJLE9BQU8sSUFBSSxHQUFHO0FBQUUsUUFBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxJQUFJO0FBQUEsRUFBSTtBQUMzRCxTQUFPLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUNoQyxNQUFJLFNBQVMsSUFBSTtBQUNmLFdBQU87QUFBQSxFQUNSO0FBRUQsU0FBTztBQUNUO0FBaUJBLFNBQVMsT0FBUSxJQUFJLGFBQWE7QUFDaEMsUUFDRSxLQUFLLE9BQU8sUUFDWixLQUFLLEtBQUs7QUFDWixNQUNFLFFBQVEsS0FDUixLQUFLLE9BQVEsSUFDYixJQUNBLE1BQ0EsTUFDQSxHQUNBO0FBRUYsTUFBSSxLQUFLLE1BQU0sTUFBTSxPQUFRLEtBQUssSUFBSztBQUFFLFVBQU0sSUFBSSxNQUFNLDBCQUEwQixFQUFFO0FBQUEsRUFBRztBQUd4RixPQUFLLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHO0FBQzFCLFNBQUssT0FBUTtBQUNiLFdBQU8sS0FBSztBQUNaLFFBQUksS0FBSyxJQUFJO0FBQUU7QUFBQSxJQUFPO0FBQ3RCLFlBQVEsUUFBUSxJQUFJLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRSxHQUFHLENBQUM7QUFDeEQsU0FBSztBQUFBLEVBQ047QUFDRCxNQUFJLEtBQUs7QUFJVCxVQUFRLFFBQVEsSUFBSSxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFDdEQsTUFBSSxJQUFJLE1BQU0sRUFBRSxNQUFNLEtBQUssT0FBTyxNQUFNLEdBQUc7QUFBRSxhQUFTO0FBQUEsRUFBRztBQUd6RCxRQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSTtBQUc1RCxRQUFNLFFBQVEsS0FBSyxRQUFRO0FBRzNCLE1BQUksQ0FBQyxhQUFhO0FBQ2hCLFFBQUksT0FBTyxJQUFJLEdBQUc7QUFBRSxVQUFJLElBQUksT0FBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLElBQUk7QUFBQSxJQUFJO0FBQzNELFdBQU8sSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDO0FBQ2hDLFFBQUksU0FBUyxJQUFJO0FBQ2YsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNGO0FBRUQsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFDSDtBQVVBLFNBQVMsSUFBSyxJQUFJLElBQUksSUFBSTtBQUN4QixRQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsU0FBTyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUs7QUFDOUU7QUFXQSxTQUFTLElBQUssS0FBSztBQUNqQixRQUFNLEtBQUssSUFBSSxHQUFHLEVBQUU7QUFDcEIsTUFDRSxLQUFLLEtBQUssS0FDVixJQUNBLElBQ0E7QUFDRixRQUNFLElBQUksT0FBTyxJQUFJLEtBQUssR0FDcEIsUUFBUSxJQUFJLElBQUksR0FBRyxFQUFFLEtBQUs7QUFHNUIsTUFBSSxNQUFNO0FBQ1YsTUFBSSxLQUFLLEdBQUc7QUFDVixRQUFJLEtBQUssS0FBSztBQUVaLFdBQUssSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUNsQixXQUFLLElBQUksR0FBRyxFQUFFLElBQUk7QUFDbEIsYUFBTztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNGLE9BQ0k7QUFFSCxXQUFLO0FBQUEsSUFDTjtBQUFBLEVBQ0YsT0FDSTtBQUVILFVBQU07QUFDTixTQUFLO0FBQ0wsUUFBSSxFQUFFLFNBQVMsR0FBRztBQUFFLFdBQUs7QUFBQSxJQUFHO0FBQUEsRUFDN0I7QUFDRCxPQUFLLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDbEIsT0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJO0FBQ2xCLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQ0g7QUFjQSxTQUFTLElBQUssSUFBSSxJQUFJLElBQUk7QUFDeEIsTUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksVUFBVSxNQUFNLENBQUMsSUFDOUMsSUFBSSxNQUFNLElBQUksS0FBSyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFDaEMsS0FBSztBQUNYLE1BQUksSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUk7QUFDN0QsU0FBTztBQUNUO0FBYUEsU0FBUyxJQUFLLEtBQUs7QUFDakIsTUFBSSxJQUFJLElBQUksTUFBTTtBQUNsQixNQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxXQUFXLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJO0FBQzNELFFBQ0UsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FDL0IsS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQzNCLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUM1QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQzVDLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQ0g7QUFNQSxTQUFTLElBQUssR0FBRyxHQUFHO0FBQ2xCLFNBQU8sQ0FBQyxFQUFFLElBQUk7QUFDaEI7QUFFQSxTQUFTLElBQUssR0FBRyxHQUFHO0FBQ2xCLFNBQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLO0FBQ3pCO0FDMVFBLE1BQU0sWUFBWSxDQUFFLGFBQWEsU0FBVztBQUVyQyxNQUFNLG1CQUFtQjtBQUFBLEVBRzlCLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDRCxRQUFRO0FBQUEsRUFFUixVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixXQUFXLE9BQUssVUFBVSxTQUFTLENBQUM7QUFBQSxJQUNwQyxTQUFTO0FBQUEsRUFDVjtBQUFBLEVBRUQsV0FBVztBQUFBLEVBRVgsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBRVgsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBRVYsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUNYO0FBRU8sTUFBTSxtQkFBbUIsQ0FBRSxtQkFBcUI7QUFFaEQsU0FBUyxXQUFZLE1BQU07QUFDaEMsU0FBTyxLQUFLLE9BQU8sTUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLE1BQU0sSUFBSSxLQUFLLEdBQUc7QUFDL0Q7QUFFZSxTQUFBLFlBQVUsT0FBTyxJQUFJO0FBQ2xDLFFBQU0sV0FBVyxTQUFTLE1BQU07QUFDOUIsV0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLGFBQWE7QUFBQSxFQUN4RCxDQUFHO0FBRUQsUUFBTSxXQUFXLFNBQVMsTUFBTTtBQUM5QixXQUFPLFNBQVMsVUFBVSxPQUFPLElBQUk7QUFBQSxFQUN6QyxDQUFHO0FBRUQsUUFBTSxjQUFjLFNBQVMsTUFBTTtBQUNqQyxVQUFNLE1BQU0sQ0FBRTtBQUNkLFVBQU0sVUFBVSxVQUFVLElBQUksS0FBSyxNQUFPLE1BQU0sT0FBUTtBQUN4RCxVQUFNLGNBQWMsVUFBVSxJQUFJLEtBQUssUUFBUyxNQUFNLFdBQVk7QUFDbEUsV0FBTyxJQUFJLEtBQUssR0FBRztBQUFBLEVBQ3ZCLENBQUc7QUFFRCxXQUFTLFlBQWE7QUFDcEIsV0FBTyxNQUFNLFdBQVcsU0FDcEIsRUFBRSxHQUFHLEdBQUcsS0FBSyxNQUFNLEdBQUcsTUFBTSxPQUFRLElBQ3BDLEdBQUcsS0FBSztBQUFBLEVBQ2I7QUFFRCxXQUFTLGVBQWdCLFVBQVU7QUFDakMsVUFBTSxJQUFJLElBQUksS0FBTTtBQUNwQixVQUFNLFdBQVcsYUFBYSxPQUFPLE9BQU87QUFFNUMsUUFBSSxNQUFNLGFBQWEsV0FBVztBQUNoQyxZQUFNLFFBQVEsVUFBVSxDQUFDO0FBQ3pCLGFBQU87QUFBQSxRQUNMLE1BQU0sTUFBTTtBQUFBLFFBQ1osT0FBTyxNQUFNO0FBQUEsUUFDYixLQUFLLE1BQU07QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUVELFdBQU87QUFBQSxNQUNMLE1BQU0sRUFBRSxZQUFhO0FBQUEsTUFDckIsT0FBTyxFQUFFLFNBQVEsSUFBSztBQUFBLE1BQ3RCLEtBQUssRUFBRSxRQUFTO0FBQUEsTUFDaEIsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBRUQsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBRUE7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUNIO0FDdkZBLE1BQ0Usc0JBQXNCLE9BQ3RCLHVCQUF1QixNQUN2Qix5QkFBeUIsS0FDekIsY0FBYyw0QkFDZCxRQUFRLGlKQUNSLGVBQWUsMkpBQ2YsYUFBYSxDQUFFO0FBRWpCLFNBQVMsYUFBYyxNQUFNLFlBQVk7QUFDdkMsUUFDRSxPQUFPLE1BQU0sV0FBVyxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQ3pDLE1BQU0sT0FBTztBQUVmLE1BQUksV0FBWSxTQUFVLFFBQVE7QUFDaEMsV0FBTyxXQUFZO0FBQUEsRUFDcEI7QUFFRCxRQUNFLFlBQVksTUFBTSxXQUFXLFVBQVUsS0FBSyxHQUFHLElBQUksS0FDbkQsU0FBUyxNQUFNLFdBQVcsT0FBTyxLQUFLLEdBQUcsSUFBSSxLQUM3QyxjQUFjLE1BQU0sV0FBVyxZQUFZLEtBQUssR0FBRyxJQUFJO0FBRXpELFFBQU0sTUFBTSxDQUFFO0FBQ2QsTUFBSSxRQUFRO0FBRVosUUFBTSxZQUFZLEtBQUssUUFBUSxjQUFjLFdBQVM7QUFDcEQ7QUFDQSxZQUFRO0FBQUEsV0FDRDtBQUNILFlBQUksS0FBSztBQUNULGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxPQUFPO0FBQ1gsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLElBQUk7QUFDUixlQUFPO0FBQUEsV0FDSjtBQUNILFlBQUksSUFBSTtBQUNSLGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLE1BQU07QUFDVixlQUFPO0FBQUEsV0FDSjtBQUNILFlBQUksT0FBTztBQUNYLGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLElBQUk7QUFDUixlQUFPO0FBQUEsV0FDSjtBQUNILFlBQUksSUFBSTtBQUNSLGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLElBQUk7QUFDUixlQUFPO0FBQUEsV0FDSjtBQUNILFlBQUksSUFBSTtBQUNSLGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLElBQUk7QUFDUixlQUFPO0FBQUEsV0FDSjtBQUNILFlBQUksSUFBSTtBQUNSLGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLElBQUk7QUFDUixlQUFPO0FBQUEsV0FDSjtBQUNILFlBQUksSUFBSTtBQUNSLGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLElBQUk7QUFDUixlQUFPO0FBQUEsV0FDSjtBQUNILFlBQUksSUFBSTtBQUNSLGVBQU87QUFBQSxXQUNKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLEtBQUs7QUFDVCxlQUFPO0FBQUEsV0FFSjtBQUNILGVBQU87QUFBQSxXQUNKO0FBQ0gsZUFBTztBQUFBLFdBQ0o7QUFBQSxXQUNBO0FBQUEsV0FDQTtBQUNILGVBQU87QUFBQSxXQUNKO0FBQ0g7QUFDQSxlQUFPO0FBQUEsV0FDSjtBQUNILGVBQU87QUFBQSxXQUNKO0FBQUEsV0FDQTtBQUNILGVBQU87QUFBQSxXQUNKO0FBQ0g7QUFDQSxlQUFPO0FBQUEsV0FDSjtBQUNILGVBQU87QUFBQSxXQUNKO0FBQ0g7QUFDQSxlQUFPO0FBQUEsV0FDSjtBQUNILGVBQU87QUFBQSxXQUVKO0FBQ0gsWUFBSSxJQUFJO0FBQ1IsZUFBTztBQUFBLFdBQ0o7QUFDSCxZQUFJLEtBQUs7QUFDVCxlQUFPO0FBQUEsV0FFSjtB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
