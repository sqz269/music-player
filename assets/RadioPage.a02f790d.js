import { Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.f6bcad96.js";
import { g as computed, b9 as Plugin, ba as defaultLang, c as createComponent, ad as useFormProps, a as useDarkProps, d as useDark, ag as useFormAttrs, r as ref, ac as isObject, w as watch, m as h, aR as Transition, q as hSlot, t as getCurrentInstance, af as useFormInject, n as nextTick, N as QBtn, bb as injectProp, Q as QDialog, bc as LoadingStatus, _ as _export_sfc, G as openBlock, H as createBlock, I as withCtx, J as createVNode, O as QCard, K as QCardSection, V as QSeparator, R as createBaseVNode, W as createTextVNode, E as defineComponent, L as QInput, i as inject, F as useQuasar, C as reactive, o as onMounted, Z as QIcon, l as withDirectives, bd as normalizeProps, be as guardReactiveProps, $ as toDisplayString, T as unref, bf as toRaw } from "./index.99fa97b6.js";
import { h as pad, i as useAnchorProps, f as useAnchor, a as QMenu, Q as QSelect } from "./QSelect.9bb1c361.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.33f9fcba.js";
import { Q as QPage } from "./QPage.4e55eb86.js";
import { C as ClosePopup } from "./ClosePopup.b10a77bd.js";
import { Q as QList } from "./QList.5cc0ff62.js";
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
const _sfc_main$2 = {};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Stratification", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle2" }, " Select how tracks are grouped for random sampling. ", -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body1" }, [
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
              _hoisted_1$2,
              _hoisted_2$2,
              createVNode(QSeparator, { class: "q-my-md" }),
              _hoisted_3$2,
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
var StratificationModeHelpDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__file", "StratificationModeHelpDialog.vue"]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Save/Load Configuration", -1);
const _hoisted_2$1 = { class: "q-pa-md" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Configurations", -1);
const _sfc_main$1 = defineComponent({
  __name: "RadioConfigSL",
  setup(__props) {
    const text = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, {
        flat: "",
        bordered: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _hoisted_1$1
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(QInput, {
              filled: "",
              modelValue: text.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => text.value = $event),
              label: "Configuration Name",
              placeholder: "Enter configuration name",
              class: "q-mb-md"
            }, null, 8, ["modelValue"]),
            createVNode(QBtn, {
              label: "Save Configuration",
              color: "primary",
              class: "full-width"
            })
          ]),
          createVNode(QSeparator),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _hoisted_3$1
            ]),
            _: 1
          }),
          createVNode(QList)
        ]),
        _: 1
      });
    };
  }
});
var RadioConfigSL = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "RadioConfigSL.vue"]]);
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-8 q-pa-md" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Radio Configuration", -1);
const _hoisted_4 = { class: "row" };
const _hoisted_5 = { class: "row items-center justify-end" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("hr", { class: "vertical-separator q-mx-md bg-transparent transparent" }, null, -1);
const _hoisted_7 = { class: "row items-center justify-end" };
const _hoisted_8 = { class: "row items-center" };
const _hoisted_9 = { class: "q-pa-sm" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Radio", -1);
const _hoisted_11 = { class: "col-4 q-pa-md" };
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
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QCard, {
                    flat: "",
                    bordered: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          _hoisted_3
                        ]),
                        _: 1
                      }),
                      createVNode(QSeparator),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createVNode(QCardSection, { class: "col-8" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_4, [
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
                                                createBaseVNode("div", _hoisted_5, [
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
                                _hoisted_6,
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
                                                createBaseVNode("div", _hoisted_7, [
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
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, [
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
                                  options: stratificationOptions,
                                  "emit-value": ""
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
                          _hoisted_10
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
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createVNode(RadioConfigSL)
                ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9QYWdlLmEwMmY3OTBkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlL3VzZS1yZW5kZXItY2FjaGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9kYXRlL3ByaXZhdGUucGVyc2lhbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZGF0ZS91c2UtZGF0ZXRpbWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9kYXRlL2RhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2RhdGUvUURhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BvcHVwLXByb3h5L1FQb3B1cFByb3h5LmpzIiwiLi4vLi4vLi4vc3JjL3V0aWxzL0xvYWRhYmxlL0NvbWJpbmVkTG9hZGFibGVBd2FpdGVyLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9zcmMvbW9kZWxzL1RyYWNrU3RyYXRpZmljYXRpb25Nb2RlLnRzIiwiLi4vLi4vLi4vc3JjL3BhZ2VfY29tcG9uZW50L1JhZGlvUGFnZS9SYWRpb0NvbmZpZ1NMLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9SYWRpb1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Q2FjaGU6IF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICAgICAgPyAoXywgZGVmYXVsdFZhbHVlKSA9PiAoXG4gICAgICAgICAgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWUoKVxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgKVxuICAgICAgOiAoa2V5LCBkZWZhdWx0VmFsdWUpID0+IChcbiAgICAgICAgICBjYWNoZVsga2V5IF0gPT09IHZvaWQgMFxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgY2FjaGVbIGtleSBdID0gKFxuICAgICAgICAgICAgICAgICAgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZSgpXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IGNhY2hlWyBrZXkgXVxuICAgICAgICApLFxuXG4gICAgc2V0Q2FjaGUgKGtleSwgb2JqKSB7XG4gICAgICBjYWNoZVsga2V5IF0gPSBvYmpcbiAgICB9LFxuXG4gICAgaGFzQ2FjaGUgKGtleSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBrZXkpXG4gICAgfSxcblxuICAgIGNsZWFyQ2FjaGUgKGtleSkge1xuICAgICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVsga2V5IF1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2phbGFhbGkvamFsYWFsaS1qc1xuXG4vKlxuICBKYWxhYWxpIHllYXJzIHN0YXJ0aW5nIHRoZSAzMy15ZWFyIHJ1bGUuXG4qL1xuY29uc3QgYnJlYWtzID0gW1xuICAtNjEsIDksIDM4LCAxOTksIDQyNiwgNjg2LCA3NTYsIDgxOCwgMTExMSwgMTE4MSwgMTIxMCxcbiAgMTYzNSwgMjA2MCwgMjA5NywgMjE5MiwgMjI2MiwgMjMyNCwgMjM5NCwgMjQ1NiwgMzE3OFxuXVxuXG4vKlxuICBDb252ZXJ0cyBhIEdyZWdvcmlhbiBkYXRlIHRvIEphbGFhbGkuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHRvSmFsYWFsaSAoZ3ksIGdtLCBnZCkge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGd5KSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgZ2QgPSBneS5nZXREYXRlKClcbiAgICBnbSA9IGd5LmdldE1vbnRoKCkgKyAxXG4gICAgZ3kgPSBneS5nZXRGdWxsWWVhcigpXG4gIH1cbiAgcmV0dXJuIGQyaihnMmQoZ3ksIGdtLCBnZCkpXG59XG5cbi8qXG4gIENvbnZlcnRzIGEgSmFsYWFsaSBkYXRlIHRvIEdyZWdvcmlhbi5cbiovXG5leHBvcnQgZnVuY3Rpb24gdG9HcmVnb3JpYW4gKGp5LCBqbSwgamQpIHtcbiAgcmV0dXJuIGQyZyhqMmQoanksIGptLCBqZCkpXG59XG5cbi8qXG4gIElzIHRoaXMgYSBsZWFwIHllYXIgb3Igbm90P1xuKi9cbmZ1bmN0aW9uIGlzTGVhcEphbGFhbGlZZWFyIChqeSkge1xuICByZXR1cm4gamFsQ2FsTGVhcChqeSkgPT09IDBcbn1cblxuLypcbiAgTnVtYmVyIG9mIGRheXMgaW4gYSBnaXZlbiBtb250aCBpbiBhIEphbGFhbGkgeWVhci5cbiovXG5leHBvcnQgZnVuY3Rpb24gamFsYWFsaU1vbnRoTGVuZ3RoIChqeSwgam0pIHtcbiAgaWYgKGptIDw9IDYpIHJldHVybiAzMVxuICBpZiAoam0gPD0gMTEpIHJldHVybiAzMFxuICBpZiAoaXNMZWFwSmFsYWFsaVllYXIoankpKSByZXR1cm4gMzBcbiAgcmV0dXJuIDI5XG59XG5cbi8qXG4gICAgVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIGlmIHRoZSBKYWxhYWxpIChQZXJzaWFuKSB5ZWFyIGlzXG4gICAgbGVhcCAoMzY2LWRheSBsb25nKSBvciBpcyB0aGUgY29tbW9uIHllYXIgKDM2NSBkYXlzKVxuXG4gICAgQHBhcmFtIGp5IEphbGFhbGkgY2FsZW5kYXIgeWVhciAoLTYxIHRvIDMxNzcpXG4gICAgQHJldHVybnMgbnVtYmVyIG9mIHllYXJzIHNpbmNlIHRoZSBsYXN0IGxlYXAgeWVhciAoMCB0byA0KVxuICovXG5mdW5jdGlvbiBqYWxDYWxMZWFwIChqeSkge1xuICBjb25zdCBibCA9IGJyZWFrcy5sZW5ndGhcbiAgbGV0XG4gICAganAgPSBicmVha3NbIDAgXSxcbiAgICBqbSxcbiAgICBqdW1wLFxuICAgIGxlYXAsXG4gICAgbixcbiAgICBpXG5cbiAgaWYgKGp5IDwganAgfHwgankgPj0gYnJlYWtzWyBibCAtIDEgXSkgeyB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSmFsYWFsaSB5ZWFyICcgKyBqeSkgfVxuXG4gIGZvciAoaSA9IDE7IGkgPCBibDsgaSArPSAxKSB7XG4gICAgam0gPSBicmVha3NbIGkgXVxuICAgIGp1bXAgPSBqbSAtIGpwXG4gICAgaWYgKGp5IDwgam0pIHsgYnJlYWsgfVxuICAgIGpwID0gam1cbiAgfVxuICBuID0gankgLSBqcFxuXG4gIGlmIChqdW1wIC0gbiA8IDYpIHsgbiA9IG4gLSBqdW1wICsgZGl2KGp1bXAgKyA0LCAzMykgKiAzMyB9XG4gIGxlYXAgPSBtb2QobW9kKG4gKyAxLCAzMykgLSAxLCA0KVxuICBpZiAobGVhcCA9PT0gLTEpIHtcbiAgICBsZWFwID0gNFxuICB9XG5cbiAgcmV0dXJuIGxlYXBcbn1cblxuLypcbiAgVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIGlmIHRoZSBKYWxhYWxpIChQZXJzaWFuKSB5ZWFyIGlzXG4gIGxlYXAgKDM2Ni1kYXkgbG9uZykgb3IgaXMgdGhlIGNvbW1vbiB5ZWFyICgzNjUgZGF5cyksIGFuZFxuICBmaW5kcyB0aGUgZGF5IGluIE1hcmNoIChHcmVnb3JpYW4gY2FsZW5kYXIpIG9mIHRoZSBmaXJzdFxuICBkYXkgb2YgdGhlIEphbGFhbGkgeWVhciAoankpLlxuXG4gIEBwYXJhbSBqeSBKYWxhYWxpIGNhbGVuZGFyIHllYXIgKC02MSB0byAzMTc3KVxuICBAcGFyYW0gd2l0aG91dExlYXAgd2hlbiBkb24ndCBuZWVkIGxlYXAgKHRydWUgb3IgZmFsc2UpIGRlZmF1bHQgaXMgZmFsc2VcbiAgQHJldHVyblxuICAgIGxlYXA6IG51bWJlciBvZiB5ZWFycyBzaW5jZSB0aGUgbGFzdCBsZWFwIHllYXIgKDAgdG8gNClcbiAgICBneTogR3JlZ29yaWFuIHllYXIgb2YgdGhlIGJlZ2lubmluZyBvZiBKYWxhYWxpIHllYXJcbiAgICBtYXJjaDogdGhlIE1hcmNoIGRheSBvZiBGYXJ2YXJkaW4gdGhlIDFzdCAoMXN0IGRheSBvZiBqeSlcbiAgQHNlZTogaHR0cDovL3d3dy5hc3Ryby51bmkudG9ydW4ucGwvfmtiL1BhcGVycy9FTVAvUGVyc2lhbkMtRU1QLmh0bVxuICBAc2VlOiBodHRwOi8vd3d3LmZvdXJtaWxhYi5jaC9kb2N1bWVudHMvY2FsZW5kYXIvXG4qL1xuZnVuY3Rpb24gamFsQ2FsIChqeSwgd2l0aG91dExlYXApIHtcbiAgY29uc3RcbiAgICBibCA9IGJyZWFrcy5sZW5ndGgsXG4gICAgZ3kgPSBqeSArIDYyMVxuICBsZXRcbiAgICBsZWFwSiA9IC0xNCxcbiAgICBqcCA9IGJyZWFrc1sgMCBdLFxuICAgIGptLFxuICAgIGp1bXAsXG4gICAgbGVhcCxcbiAgICBuLFxuICAgIGlcblxuICBpZiAoankgPCBqcCB8fCBqeSA+PSBicmVha3NbIGJsIC0gMSBdKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKYWxhYWxpIHllYXIgJyArIGp5KSB9XG5cbiAgLy8gRmluZCB0aGUgbGltaXRpbmcgeWVhcnMgZm9yIHRoZSBKYWxhYWxpIHllYXIgankuXG4gIGZvciAoaSA9IDE7IGkgPCBibDsgaSArPSAxKSB7XG4gICAgam0gPSBicmVha3NbIGkgXVxuICAgIGp1bXAgPSBqbSAtIGpwXG4gICAgaWYgKGp5IDwgam0pIHsgYnJlYWsgfVxuICAgIGxlYXBKID0gbGVhcEogKyBkaXYoanVtcCwgMzMpICogOCArIGRpdihtb2QoanVtcCwgMzMpLCA0KVxuICAgIGpwID0gam1cbiAgfVxuICBuID0gankgLSBqcFxuXG4gIC8vIEZpbmQgdGhlIG51bWJlciBvZiBsZWFwIHllYXJzIGZyb20gQUQgNjIxIHRvIHRoZSBiZWdpbm5pbmdcbiAgLy8gb2YgdGhlIGN1cnJlbnQgSmFsYWFsaSB5ZWFyIGluIHRoZSBQZXJzaWFuIGNhbGVuZGFyLlxuICBsZWFwSiA9IGxlYXBKICsgZGl2KG4sIDMzKSAqIDggKyBkaXYobW9kKG4sIDMzKSArIDMsIDQpXG4gIGlmIChtb2QoanVtcCwgMzMpID09PSA0ICYmIGp1bXAgLSBuID09PSA0KSB7IGxlYXBKICs9IDEgfVxuXG4gIC8vIEFuZCB0aGUgc2FtZSBpbiB0aGUgR3JlZ29yaWFuIGNhbGVuZGFyICh1bnRpbCB0aGUgeWVhciBneSkuXG4gIGNvbnN0IGxlYXBHID0gZGl2KGd5LCA0KSAtIGRpdigoZGl2KGd5LCAxMDApICsgMSkgKiAzLCA0KSAtIDE1MFxuXG4gIC8vIERldGVybWluZSB0aGUgR3JlZ29yaWFuIGRhdGUgb2YgRmFydmFyZGluIHRoZSAxc3QuXG4gIGNvbnN0IG1hcmNoID0gMjAgKyBsZWFwSiAtIGxlYXBHXG5cbiAgLy8gRmluZCBob3cgbWFueSB5ZWFycyBoYXZlIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBsZWFwIHllYXIuXG4gIGlmICghd2l0aG91dExlYXApIHtcbiAgICBpZiAoanVtcCAtIG4gPCA2KSB7IG4gPSBuIC0ganVtcCArIGRpdihqdW1wICsgNCwgMzMpICogMzMgfVxuICAgIGxlYXAgPSBtb2QobW9kKG4gKyAxLCAzMykgLSAxLCA0KVxuICAgIGlmIChsZWFwID09PSAtMSkge1xuICAgICAgbGVhcCA9IDRcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlYXAsXG4gICAgZ3ksXG4gICAgbWFyY2hcbiAgfVxufVxuXG4vKlxuICBDb252ZXJ0cyBhIGRhdGUgb2YgdGhlIEphbGFhbGkgY2FsZW5kYXIgdG8gdGhlIEp1bGlhbiBEYXkgbnVtYmVyLlxuXG4gIEBwYXJhbSBqeSBKYWxhYWxpIHllYXIgKDEgdG8gMzEwMClcbiAgQHBhcmFtIGptIEphbGFhbGkgbW9udGggKDEgdG8gMTIpXG4gIEBwYXJhbSBqZCBKYWxhYWxpIGRheSAoMSB0byAyOS8zMSlcbiAgQHJldHVybiBKdWxpYW4gRGF5IG51bWJlclxuKi9cbmZ1bmN0aW9uIGoyZCAoanksIGptLCBqZCkge1xuICBjb25zdCByID0gamFsQ2FsKGp5LCB0cnVlKVxuICByZXR1cm4gZzJkKHIuZ3ksIDMsIHIubWFyY2gpICsgKGptIC0gMSkgKiAzMSAtIGRpdihqbSwgNykgKiAoam0gLSA3KSArIGpkIC0gMVxufVxuXG4vKlxuICBDb252ZXJ0cyB0aGUgSnVsaWFuIERheSBudW1iZXIgdG8gYSBkYXRlIGluIHRoZSBKYWxhYWxpIGNhbGVuZGFyLlxuXG4gIEBwYXJhbSBqZG4gSnVsaWFuIERheSBudW1iZXJcbiAgQHJldHVyblxuICAgIGp5OiBKYWxhYWxpIHllYXIgKDEgdG8gMzEwMClcbiAgICBqbTogSmFsYWFsaSBtb250aCAoMSB0byAxMilcbiAgICBqZDogSmFsYWFsaSBkYXkgKDEgdG8gMjkvMzEpXG4qL1xuZnVuY3Rpb24gZDJqIChqZG4pIHtcbiAgY29uc3QgZ3kgPSBkMmcoamRuKS5neSAvLyBDYWxjdWxhdGUgR3JlZ29yaWFuIHllYXIgKGd5KS5cbiAgbGV0XG4gICAgankgPSBneSAtIDYyMSxcbiAgICBqZCxcbiAgICBqbSxcbiAgICBrXG4gIGNvbnN0XG4gICAgciA9IGphbENhbChqeSwgZmFsc2UpLFxuICAgIGpkbjFmID0gZzJkKGd5LCAzLCByLm1hcmNoKVxuXG4gIC8vIEZpbmQgbnVtYmVyIG9mIGRheXMgdGhhdCBwYXNzZWQgc2luY2UgMSBGYXJ2YXJkaW4uXG4gIGsgPSBqZG4gLSBqZG4xZlxuICBpZiAoayA+PSAwKSB7XG4gICAgaWYgKGsgPD0gMTg1KSB7XG4gICAgICAvLyBUaGUgZmlyc3QgNiBtb250aHMuXG4gICAgICBqbSA9IDEgKyBkaXYoaywgMzEpXG4gICAgICBqZCA9IG1vZChrLCAzMSkgKyAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICBqeSxcbiAgICAgICAgam0sXG4gICAgICAgIGpkXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gVGhlIHJlbWFpbmluZyBtb250aHMuXG4gICAgICBrIC09IDE4NlxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAvLyBQcmV2aW91cyBKYWxhYWxpIHllYXIuXG4gICAgankgLT0gMVxuICAgIGsgKz0gMTc5XG4gICAgaWYgKHIubGVhcCA9PT0gMSkgeyBrICs9IDEgfVxuICB9XG4gIGptID0gNyArIGRpdihrLCAzMClcbiAgamQgPSBtb2QoaywgMzApICsgMVxuICByZXR1cm4ge1xuICAgIGp5LFxuICAgIGptLFxuICAgIGpkXG4gIH1cbn1cblxuLypcbiAgQ2FsY3VsYXRlcyB0aGUgSnVsaWFuIERheSBudW1iZXIgZnJvbSBHcmVnb3JpYW4gb3IgSnVsaWFuXG4gIGNhbGVuZGFyIGRhdGVzLiBUaGlzIGludGVnZXIgbnVtYmVyIGNvcnJlc3BvbmRzIHRvIHRoZSBub29uIG9mXG4gIHRoZSBkYXRlIChpLmUuIDEyIGhvdXJzIG9mIFVuaXZlcnNhbCBUaW1lKS5cbiAgVGhlIHByb2NlZHVyZSB3YXMgdGVzdGVkIHRvIGJlIGdvb2Qgc2luY2UgMSBNYXJjaCwgLTEwMDEwMCAob2YgYm90aFxuICBjYWxlbmRhcnMpIHVwIHRvIGEgZmV3IG1pbGxpb24geWVhcnMgaW50byB0aGUgZnV0dXJlLlxuXG4gIEBwYXJhbSBneSBDYWxlbmRhciB5ZWFyICh5ZWFycyBCQyBudW1iZXJlZCAwLCAtMSwgLTIsIC4uLilcbiAgQHBhcmFtIGdtIENhbGVuZGFyIG1vbnRoICgxIHRvIDEyKVxuICBAcGFyYW0gZ2QgQ2FsZW5kYXIgZGF5IG9mIHRoZSBtb250aCAoMSB0byAyOC8yOS8zMC8zMSlcbiAgQHJldHVybiBKdWxpYW4gRGF5IG51bWJlclxuKi9cbmZ1bmN0aW9uIGcyZCAoZ3ksIGdtLCBnZCkge1xuICBsZXQgZCA9IGRpdigoZ3kgKyBkaXYoZ20gLSA4LCA2KSArIDEwMDEwMCkgKiAxNDYxLCA0KVxuICAgICAgKyBkaXYoMTUzICogbW9kKGdtICsgOSwgMTIpICsgMiwgNSlcbiAgICAgICsgZ2QgLSAzNDg0MDQwOFxuICBkID0gZCAtIGRpdihkaXYoZ3kgKyAxMDAxMDAgKyBkaXYoZ20gLSA4LCA2KSwgMTAwKSAqIDMsIDQpICsgNzUyXG4gIHJldHVybiBkXG59XG5cbi8qXG4gIENhbGN1bGF0ZXMgR3JlZ29yaWFuIGFuZCBKdWxpYW4gY2FsZW5kYXIgZGF0ZXMgZnJvbSB0aGUgSnVsaWFuIERheSBudW1iZXJcbiAgKGpkbikgZm9yIHRoZSBwZXJpb2Qgc2luY2UgamRuPS0zNDgzOTY1NSAoaS5lLiB0aGUgeWVhciAtMTAwMTAwIG9mIGJvdGhcbiAgY2FsZW5kYXJzKSB0byBzb21lIG1pbGxpb25zIHllYXJzIGFoZWFkIG9mIHRoZSBwcmVzZW50LlxuXG4gIEBwYXJhbSBqZG4gSnVsaWFuIERheSBudW1iZXJcbiAgQHJldHVyblxuICAgIGd5OiBDYWxlbmRhciB5ZWFyICh5ZWFycyBCQyBudW1iZXJlZCAwLCAtMSwgLTIsIC4uLilcbiAgICBnbTogQ2FsZW5kYXIgbW9udGggKDEgdG8gMTIpXG4gICAgZ2Q6IENhbGVuZGFyIGRheSBvZiB0aGUgbW9udGggTSAoMSB0byAyOC8yOS8zMC8zMSlcbiovXG5mdW5jdGlvbiBkMmcgKGpkbikge1xuICBsZXQgaiA9IDQgKiBqZG4gKyAxMzkzNjE2MzFcbiAgaiA9IGogKyBkaXYoZGl2KDQgKiBqZG4gKyAxODMxODc3MjAsIDE0NjA5NykgKiAzLCA0KSAqIDQgLSAzOTA4XG4gIGNvbnN0XG4gICAgaSA9IGRpdihtb2QoaiwgMTQ2MSksIDQpICogNSArIDMwOCxcbiAgICBnZCA9IGRpdihtb2QoaSwgMTUzKSwgNSkgKyAxLFxuICAgIGdtID0gbW9kKGRpdihpLCAxNTMpLCAxMikgKyAxLFxuICAgIGd5ID0gZGl2KGosIDE0NjEpIC0gMTAwMTAwICsgZGl2KDggLSBnbSwgNilcbiAgcmV0dXJuIHtcbiAgICBneSxcbiAgICBnbSxcbiAgICBnZFxuICB9XG59XG5cbi8qXG4gIFV0aWxpdHkgaGVscGVyIGZ1bmN0aW9ucy5cbiovXG5cbmZ1bmN0aW9uIGRpdiAoYSwgYikge1xuICByZXR1cm4gfn4oYSAvIGIpXG59XG5cbmZ1bmN0aW9uIG1vZCAoYSwgYikge1xuICByZXR1cm4gYSAtIH5+KGEgLyBiKSAqIGJcbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB0b0phbGFhbGkgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlL3ByaXZhdGUucGVyc2lhbi5qcydcbmltcG9ydCB7IHBhZCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5cbmNvbnN0IGNhbGVuZGFycyA9IFsgJ2dyZWdvcmlhbicsICdwZXJzaWFuJyBdXG5cbmV4cG9ydCBjb25zdCB1c2VEYXRldGltZVByb3BzID0ge1xuICAvLyBzaG91bGQgZGVmaW5lIG1vZGVsVmFsdWUgaW4gdGhlIHRhcmdldCBjb21wb25lbnRcblxuICBtYXNrOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIGxvY2FsZTogT2JqZWN0LFxuXG4gIGNhbGVuZGFyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRvcjogdiA9PiBjYWxlbmRhcnMuaW5jbHVkZXModiksXG4gICAgZGVmYXVsdDogJ2dyZWdvcmlhbidcbiAgfSxcblxuICBsYW5kc2NhcGU6IEJvb2xlYW4sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgdGV4dENvbG9yOiBTdHJpbmcsXG5cbiAgc3F1YXJlOiBCb29sZWFuLFxuICBmbGF0OiBCb29sZWFuLFxuICBib3JkZXJlZDogQm9vbGVhbixcblxuICByZWFkb25seTogQm9vbGVhbixcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgdXNlRGF0ZXRpbWVFbWl0cyA9IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlIYXNoIChkYXRlKSB7XG4gIHJldHVybiBkYXRlLnllYXIgKyAnLycgKyBwYWQoZGF0ZS5tb250aCkgKyAnLycgKyBwYWQoZGF0ZS5kYXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgJHEpIHtcbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMucmVhZG9ubHkgIT09IHRydWVcbiAgfSlcblxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAwIDogLTFcbiAgfSlcblxuICBjb25zdCBoZWFkZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjbHMgPSBbXVxuICAgIHByb3BzLmNvbG9yICE9PSB2b2lkIDAgJiYgY2xzLnB1c2goYGJnLSR7IHByb3BzLmNvbG9yIH1gKVxuICAgIHByb3BzLnRleHRDb2xvciAhPT0gdm9pZCAwICYmIGNscy5wdXNoKGB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB9YClcbiAgICByZXR1cm4gY2xzLmpvaW4oJyAnKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldExvY2FsZSAoKSB7XG4gICAgcmV0dXJuIHByb3BzLmxvY2FsZSAhPT0gdm9pZCAwXG4gICAgICA/IHsgLi4uJHEubGFuZy5kYXRlLCAuLi5wcm9wcy5sb2NhbGUgfVxuICAgICAgOiAkcS5sYW5nLmRhdGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlIChkYXRlT25seSkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgdGltZUZpbGwgPSBkYXRlT25seSA9PT0gdHJ1ZSA/IG51bGwgOiAwXG5cbiAgICBpZiAocHJvcHMuY2FsZW5kYXIgPT09ICdwZXJzaWFuJykge1xuICAgICAgY29uc3QgakRhdGUgPSB0b0phbGFhbGkoZClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IGpEYXRlLmp5LFxuICAgICAgICBtb250aDogakRhdGUuam0sXG4gICAgICAgIGRheTogakRhdGUuamRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogZC5nZXRGdWxsWWVhcigpLFxuICAgICAgbW9udGg6IGQuZ2V0TW9udGgoKSArIDEsXG4gICAgICBkYXk6IGQuZ2V0RGF0ZSgpLFxuICAgICAgaG91cjogdGltZUZpbGwsXG4gICAgICBtaW51dGU6IHRpbWVGaWxsLFxuICAgICAgc2Vjb25kOiB0aW1lRmlsbCxcbiAgICAgIG1pbGxpc2Vjb25kOiB0aW1lRmlsbFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZWRpdGFibGUsXG4gICAgdGFiaW5kZXgsXG4gICAgaGVhZGVyQ2xhc3MsXG5cbiAgICBnZXRMb2NhbGUsXG4gICAgZ2V0Q3VycmVudERhdGVcbiAgfVxufVxuIiwiLyogZXNsaW50IG5vLWZhbGx0aHJvdWdoOiAwICovXG5cbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4uL2lzL2lzLmpzJ1xuaW1wb3J0IHsgcGFkLCBjYXBpdGFsaXplIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdC5qcydcbmltcG9ydCB7IGphbGFhbGlNb250aExlbmd0aCB9IGZyb20gJy4vcHJpdmF0ZS5wZXJzaWFuLmpzJ1xuaW1wb3J0IExhbmcsIHsgZGVmYXVsdExhbmcgfSBmcm9tICcuLi8uLi9wbHVnaW5zL2xhbmcvTGFuZy5qcydcblxuY29uc3RcbiAgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwLFxuICBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDAsXG4gIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMCxcbiAgZGVmYXVsdE1hc2sgPSAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJyxcbiAgdG9rZW4gPSAvXFxbKCg/OlteXFxdXFxcXF18XFxcXF18XFxcXCkqKVxcXXxkb3xkezEsNH18TW98TXsxLDR9fG17MSwyfXx3b3x3ezEsMn18UW98RG98REREb3xEezEsNH18WVkoPzpZWSk/fEh7MSwyfXxoezEsMn18c3sxLDJ9fFN7MSwzfXxaezEsMn18YXsxLDJ9fFtBUUV4WF0vZyxcbiAgcmV2ZXJzZVRva2VuID0gLyhcXFtbXlxcXV0qXFxdKXxkb3xkezEsNH18TW98TXsxLDR9fG17MSwyfXx3b3x3ezEsMn18UW98RG98REREb3xEezEsNH18WVkoPzpZWSk/fEh7MSwyfXxoezEsMn18c3sxLDJ9fFN7MSwzfXxaezEsMn18YXsxLDJ9fFtBUUV4WF18KFsuKis6P14sXFxzJHt9KCl8XFxcXF0rKS9nLFxuICByZWdleFN0b3JlID0ge31cblxuZnVuY3Rpb24gZ2V0UmVnZXhEYXRhIChtYXNrLCBkYXRlTG9jYWxlKSB7XG4gIGNvbnN0XG4gICAgZGF5cyA9ICcoJyArIGRhdGVMb2NhbGUuZGF5cy5qb2luKCd8JykgKyAnKScsXG4gICAga2V5ID0gbWFzayArIGRheXNcblxuICBpZiAocmVnZXhTdG9yZVsga2V5IF0gIT09IHZvaWQgMCkge1xuICAgIHJldHVybiByZWdleFN0b3JlWyBrZXkgXVxuICB9XG5cbiAgY29uc3RcbiAgICBkYXlzU2hvcnQgPSAnKCcgKyBkYXRlTG9jYWxlLmRheXNTaG9ydC5qb2luKCd8JykgKyAnKScsXG4gICAgbW9udGhzID0gJygnICsgZGF0ZUxvY2FsZS5tb250aHMuam9pbignfCcpICsgJyknLFxuICAgIG1vbnRoc1Nob3J0ID0gJygnICsgZGF0ZUxvY2FsZS5tb250aHNTaG9ydC5qb2luKCd8JykgKyAnKSdcblxuICBjb25zdCBtYXAgPSB7fVxuICBsZXQgaW5kZXggPSAwXG5cbiAgY29uc3QgcmVnZXhUZXh0ID0gbWFzay5yZXBsYWNlKHJldmVyc2VUb2tlbiwgbWF0Y2ggPT4ge1xuICAgIGluZGV4KytcbiAgICBzd2l0Y2ggKG1hdGNoKSB7XG4gICAgICBjYXNlICdZWSc6XG4gICAgICAgIG1hcC5ZWSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdZWVlZJzpcbiAgICAgICAgbWFwLllZWVkgPSBpbmRleFxuICAgICAgICByZXR1cm4gJygtP1xcXFxkezEsNH0pJ1xuICAgICAgY2FzZSAnTSc6XG4gICAgICAgIG1hcC5NID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIG1hcC5NID0gaW5kZXgrKyAvLyBidW1waW5nIHRvIE1cbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfShzdHxuZHxyZHx0aCkpJ1xuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICBtYXAuTSA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gTVxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICBtYXAuTU1NID0gaW5kZXhcbiAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0XG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgICAgbWFwLk1NTU0gPSBpbmRleFxuICAgICAgICByZXR1cm4gbW9udGhzXG4gICAgICBjYXNlICdEJzpcbiAgICAgICAgbWFwLkQgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ0RvJzpcbiAgICAgICAgbWFwLkQgPSBpbmRleCsrIC8vIGJ1bXBpbmcgdG8gRFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KHN0fG5kfHJkfHRoKSknXG4gICAgICBjYXNlICdERCc6XG4gICAgICAgIG1hcC5EID0gaW5kZXggLy8gYnVtcGluZyB0byBEXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ0gnOlxuICAgICAgICBtYXAuSCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnSEgnOlxuICAgICAgICBtYXAuSCA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gSFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdoJzpcbiAgICAgICAgbWFwLmggPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ2hoJzpcbiAgICAgICAgbWFwLmggPSBpbmRleCAvLyBidW1waW5nIHRvIGhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnbSc6XG4gICAgICAgIG1hcC5tID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdtbSc6XG4gICAgICAgIG1hcC5tID0gaW5kZXggLy8gYnVtcGluZyB0byBtXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBtYXAucyA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnc3MnOlxuICAgICAgICBtYXAucyA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gc1xuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdTJzpcbiAgICAgICAgbWFwLlMgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxfSknXG4gICAgICBjYXNlICdTUyc6XG4gICAgICAgIG1hcC5TID0gaW5kZXggLy8gYnVtcCB0byBTXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ1NTUyc6XG4gICAgICAgIG1hcC5TID0gaW5kZXggLy8gYnVtcCB0byBTXG4gICAgICAgIHJldHVybiAnKFxcXFxkezN9KSdcbiAgICAgIGNhc2UgJ0EnOlxuICAgICAgICBtYXAuQSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKEFNfFBNKSdcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBtYXAuYSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKGFtfHBtKSdcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgbWFwLmFhID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoYVxcXFwubVxcXFwufHBcXFxcLm1cXFxcLiknXG5cbiAgICAgIGNhc2UgJ2RkZCc6XG4gICAgICAgIHJldHVybiBkYXlzU2hvcnRcbiAgICAgIGNhc2UgJ2RkZGQnOlxuICAgICAgICByZXR1cm4gZGF5c1xuICAgICAgY2FzZSAnUSc6XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxfSknXG4gICAgICBjYXNlICdkbyc6XG4gICAgICAgIGluZGV4KytcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MX0oc3R8bmR8cmR8dGgpKSdcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuICcoMXN0fDJuZHwzcmR8NHRoKSdcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICBjYXNlICdEREREJzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwzfSknXG4gICAgICBjYXNlICdERERvJzpcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDN9KHN0fG5kfHJkfHRoKSknXG4gICAgICBjYXNlICd3JzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICd3byc6XG4gICAgICAgIGluZGV4KytcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfShzdHxuZHxyZHx0aCkpJ1xuICAgICAgY2FzZSAnd3cnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG5cbiAgICAgIGNhc2UgJ1onOiAvLyB0byBzcGxpdDogKD86KFopKCkoKXwoWystXSk/KFxcXFxkezJ9KTo/KFxcXFxkezJ9KSlcbiAgICAgICAgbWFwLlogPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhafFsrLV1cXFxcZHsyfTpcXFxcZHsyfSknXG4gICAgICBjYXNlICdaWic6XG4gICAgICAgIG1hcC5aWiA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFp8WystXVxcXFxkezJ9XFxcXGR7Mn0pJ1xuXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgbWFwLlggPSBpbmRleFxuICAgICAgICByZXR1cm4gJygtP1xcXFxkKyknXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgbWFwLnggPSBpbmRleFxuICAgICAgICByZXR1cm4gJygtP1xcXFxkezQsfSknXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGluZGV4LS1cbiAgICAgICAgaWYgKG1hdGNoWyAwIF0gPT09ICdbJykge1xuICAgICAgICAgIG1hdGNoID0gbWF0Y2guc3Vic3RyaW5nKDEsIG1hdGNoLmxlbmd0aCAtIDEpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVzID0geyBtYXAsIHJlZ2V4OiBuZXcgUmVnRXhwKCdeJyArIHJlZ2V4VGV4dCkgfVxuICByZWdleFN0b3JlWyBrZXkgXSA9IHJlc1xuXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUxvY2FsZSAocGFyYW1EYXRlTG9jYWxlLCBsYW5nUHJvcHMpIHtcbiAgcmV0dXJuIHBhcmFtRGF0ZUxvY2FsZSAhPT0gdm9pZCAwXG4gICAgPyBwYXJhbURhdGVMb2NhbGVcbiAgICA6IChcbiAgICAgICAgbGFuZ1Byb3BzICE9PSB2b2lkIDBcbiAgICAgICAgICA/IGxhbmdQcm9wcy5kYXRlXG4gICAgICAgICAgOiBkZWZhdWx0TGFuZy5kYXRlXG4gICAgICApXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lIChvZmZzZXQsIGRlbGltZXRlciA9ICcnKSB7XG4gIGNvbnN0XG4gICAgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKycsXG4gICAgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KSxcbiAgICBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLFxuICAgIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MFxuXG4gIHJldHVybiBzaWduICsgcGFkKGhvdXJzKSArIGRlbGltZXRlciArIHBhZChtaW51dGVzKVxufVxuXG5mdW5jdGlvbiBhcHBseVllYXJNb250aERheUNoYW5nZSAoZGF0ZSwgbW9kLCBzaWduKSB7XG4gIGxldFxuICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGggPSBkYXRlLmdldE1vbnRoKClcblxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuXG4gIGlmIChtb2QueWVhciAhPT0gdm9pZCAwKSB7XG4gICAgeWVhciArPSBzaWduICogbW9kLnllYXJcbiAgICBkZWxldGUgbW9kLnllYXJcbiAgfVxuXG4gIGlmIChtb2QubW9udGggIT09IHZvaWQgMCkge1xuICAgIG1vbnRoICs9IHNpZ24gKiBtb2QubW9udGhcbiAgICBkZWxldGUgbW9kLm1vbnRoXG4gIH1cblxuICBkYXRlLnNldERhdGUoMSlcbiAgZGF0ZS5zZXRNb250aCgyKVxuXG4gIGRhdGUuc2V0RnVsbFllYXIoeWVhcilcbiAgZGF0ZS5zZXRNb250aChtb250aClcbiAgZGF0ZS5zZXREYXRlKE1hdGgubWluKGRheSwgZGF5c0luTW9udGgoZGF0ZSkpKVxuXG4gIGlmIChtb2QuZGF0ZSAhPT0gdm9pZCAwKSB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgc2lnbiAqIG1vZC5kYXRlKVxuICAgIGRlbGV0ZSBtb2QuZGF0ZVxuICB9XG5cbiAgcmV0dXJuIGRhdGVcbn1cblxuZnVuY3Rpb24gYXBwbHlZZWFyTW9udGhEYXkgKGRhdGUsIG1vZCwgbWlkZGxlKSB7XG4gIGNvbnN0XG4gICAgeWVhciA9IG1vZC55ZWFyICE9PSB2b2lkIDAgPyBtb2QueWVhciA6IGRhdGVbIGBnZXQkeyBtaWRkbGUgfUZ1bGxZZWFyYCBdKCksXG4gICAgbW9udGggPSBtb2QubW9udGggIT09IHZvaWQgMCA/IG1vZC5tb250aCAtIDEgOiBkYXRlWyBgZ2V0JHsgbWlkZGxlIH1Nb250aGAgXSgpLFxuICAgIG1heERheSA9IChuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApKS5nZXREYXRlKCksXG4gICAgZGF5ID0gTWF0aC5taW4obWF4RGF5LCBtb2QuZGF0ZSAhPT0gdm9pZCAwID8gbW9kLmRhdGUgOiBkYXRlWyBgZ2V0JHsgbWlkZGxlIH1EYXRlYCBdKCkpXG5cbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9RGF0ZWAgXSgxKVxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1Nb250aGAgXSgyKVxuXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfUZ1bGxZZWFyYCBdKHllYXIpXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfU1vbnRoYCBdKG1vbnRoKVxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1EYXRlYCBdKGRheSlcblxuICBkZWxldGUgbW9kLnllYXJcbiAgZGVsZXRlIG1vZC5tb250aFxuICBkZWxldGUgbW9kLmRhdGVcblxuICByZXR1cm4gZGF0ZVxufVxuXG5mdW5jdGlvbiBnZXRDaGFuZ2UgKGRhdGUsIHJhd01vZCwgc2lnbikge1xuICBjb25zdFxuICAgIG1vZCA9IG5vcm1hbGl6ZU1vZChyYXdNb2QpLFxuICAgIGQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICB0ID0gbW9kLnllYXIgIT09IHZvaWQgMCB8fCBtb2QubW9udGggIT09IHZvaWQgMCB8fCBtb2QuZGF0ZSAhPT0gdm9pZCAwXG4gICAgICA/IGFwcGx5WWVhck1vbnRoRGF5Q2hhbmdlKGQsIG1vZCwgc2lnbikgLy8gcmVtb3ZlcyB5ZWFyL21vbnRoL2RheVxuICAgICAgOiBkXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbW9kKSB7XG4gICAgY29uc3Qgb3AgPSBjYXBpdGFsaXplKGtleSlcbiAgICB0WyBgc2V0JHsgb3AgfWAgXSh0WyBgZ2V0JHsgb3AgfWAgXSgpICsgc2lnbiAqIG1vZFsga2V5IF0pXG4gIH1cblxuICByZXR1cm4gdFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVNb2QgKG1vZCkge1xuICBjb25zdCBhY2MgPSB7IC4uLm1vZCB9XG5cbiAgaWYgKG1vZC55ZWFycyAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLnllYXIgPSBtb2QueWVhcnNcbiAgICBkZWxldGUgYWNjLnllYXJzXG4gIH1cblxuICBpZiAobW9kLm1vbnRocyAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLm1vbnRoID0gbW9kLm1vbnRoc1xuICAgIGRlbGV0ZSBhY2MubW9udGhzXG4gIH1cblxuICBpZiAobW9kLmRheXMgIT09IHZvaWQgMCkge1xuICAgIGFjYy5kYXRlID0gbW9kLmRheXNcbiAgICBkZWxldGUgYWNjLmRheXNcbiAgfVxuICBpZiAobW9kLmRheSAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLmRhdGUgPSBtb2QuZGF5XG4gICAgZGVsZXRlIGFjYy5kYXlcbiAgfVxuXG4gIGlmIChtb2QuaG91ciAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLmhvdXJzID0gbW9kLmhvdXJcbiAgICBkZWxldGUgYWNjLmhvdXJcbiAgfVxuXG4gIGlmIChtb2QubWludXRlICE9PSB2b2lkIDApIHtcbiAgICBhY2MubWludXRlcyA9IG1vZC5taW51dGVcbiAgICBkZWxldGUgYWNjLm1pbnV0ZVxuICB9XG5cbiAgaWYgKG1vZC5zZWNvbmQgIT09IHZvaWQgMCkge1xuICAgIGFjYy5zZWNvbmRzID0gbW9kLnNlY29uZFxuICAgIGRlbGV0ZSBhY2Muc2Vjb25kXG4gIH1cblxuICBpZiAobW9kLm1pbGxpc2Vjb25kICE9PSB2b2lkIDApIHtcbiAgICBhY2MubWlsbGlzZWNvbmRzID0gbW9kLm1pbGxpc2Vjb25kXG4gICAgZGVsZXRlIGFjYy5taWxsaXNlY29uZFxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0RGF0ZSAoZGF0ZSwgcmF3TW9kLCB1dGMpIHtcbiAgY29uc3RcbiAgICBtb2QgPSBub3JtYWxpemVNb2QocmF3TW9kKSxcbiAgICBtaWRkbGUgPSB1dGMgPT09IHRydWUgPyAnVVRDJyA6ICcnLFxuICAgIGQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICB0ID0gbW9kLnllYXIgIT09IHZvaWQgMCB8fCBtb2QubW9udGggIT09IHZvaWQgMCB8fCBtb2QuZGF0ZSAhPT0gdm9pZCAwXG4gICAgICA/IGFwcGx5WWVhck1vbnRoRGF5KGQsIG1vZCwgbWlkZGxlKSAvLyByZW1vdmVzIHllYXIvbW9udGgvZGF5XG4gICAgICA6IGRcblxuICBmb3IgKGNvbnN0IGtleSBpbiBtb2QpIHtcbiAgICBjb25zdCBvcCA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKVxuICAgIHRbIGBzZXQkeyBtaWRkbGUgfSR7IG9wIH1gIF0obW9kWyBrZXkgXSlcbiAgfVxuXG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RGF0ZSAoc3RyLCBtYXNrLCBkYXRlTG9jYWxlKSB7XG4gIGNvbnN0IGQgPSBfX3NwbGl0RGF0ZShzdHIsIG1hc2ssIGRhdGVMb2NhbGUpXG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuICAgIGQueWVhcixcbiAgICBkLm1vbnRoID09PSBudWxsID8gbnVsbCA6IGQubW9udGggLSAxLFxuICAgIGQuZGF5ID09PSBudWxsID8gMSA6IGQuZGF5LFxuICAgIGQuaG91cixcbiAgICBkLm1pbnV0ZSxcbiAgICBkLnNlY29uZCxcbiAgICBkLm1pbGxpc2Vjb25kXG4gIClcblxuICBjb25zdCB0ek9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuXG4gIHJldHVybiBkLnRpbWV6b25lT2Zmc2V0ID09PSBudWxsIHx8IGQudGltZXpvbmVPZmZzZXQgPT09IHR6T2Zmc2V0XG4gICAgPyBkYXRlXG4gICAgOiBnZXRDaGFuZ2UoZGF0ZSwgeyBtaW51dGVzOiBkLnRpbWV6b25lT2Zmc2V0IC0gdHpPZmZzZXQgfSwgMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3BsaXREYXRlIChzdHIsIG1hc2ssIGRhdGVMb2NhbGUsIGNhbGVuZGFyLCBkZWZhdWx0TW9kZWwpIHtcbiAgY29uc3QgZGF0ZSA9IHtcbiAgICB5ZWFyOiBudWxsLFxuICAgIG1vbnRoOiBudWxsLFxuICAgIGRheTogbnVsbCxcbiAgICBob3VyOiBudWxsLFxuICAgIG1pbnV0ZTogbnVsbCxcbiAgICBzZWNvbmQ6IG51bGwsXG4gICAgbWlsbGlzZWNvbmQ6IG51bGwsXG4gICAgdGltZXpvbmVPZmZzZXQ6IG51bGwsXG4gICAgZGF0ZUhhc2g6IG51bGwsXG4gICAgdGltZUhhc2g6IG51bGxcbiAgfVxuXG4gIGRlZmF1bHRNb2RlbCAhPT0gdm9pZCAwICYmIE9iamVjdC5hc3NpZ24oZGF0ZSwgZGVmYXVsdE1vZGVsKVxuXG4gIGlmIChcbiAgICBzdHIgPT09IHZvaWQgMFxuICAgIHx8IHN0ciA9PT0gbnVsbFxuICAgIHx8IHN0ciA9PT0gJydcbiAgICB8fCB0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgaWYgKG1hc2sgPT09IHZvaWQgMCkge1xuICAgIG1hc2sgPSBkZWZhdWx0TWFza1xuICB9XG5cbiAgY29uc3RcbiAgICBsYW5nT3B0cyA9IGdldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSwgTGFuZy5wcm9wcyksXG4gICAgbW9udGhzID0gbGFuZ09wdHMubW9udGhzLFxuICAgIG1vbnRoc1Nob3J0ID0gbGFuZ09wdHMubW9udGhzU2hvcnRcblxuICBjb25zdCB7IHJlZ2V4LCBtYXAgfSA9IGdldFJlZ2V4RGF0YShtYXNrLCBsYW5nT3B0cylcblxuICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChyZWdleClcblxuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgbGV0IHR6U3RyaW5nID0gJydcblxuICBpZiAobWFwLlggIT09IHZvaWQgMCB8fCBtYXAueCAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3Qgc3RhbXAgPSBwYXJzZUludChtYXRjaFsgbWFwLlggIT09IHZvaWQgMCA/IG1hcC5YIDogbWFwLnggXSwgMTApXG5cbiAgICBpZiAoaXNOYU4oc3RhbXApID09PSB0cnVlIHx8IHN0YW1wIDwgMCkge1xuICAgICAgcmV0dXJuIGRhdGVcbiAgICB9XG5cbiAgICBjb25zdCBkID0gbmV3IERhdGUoc3RhbXAgKiAobWFwLlggIT09IHZvaWQgMCA/IDEwMDAgOiAxKSlcblxuICAgIGRhdGUueWVhciA9IGQuZ2V0RnVsbFllYXIoKVxuICAgIGRhdGUubW9udGggPSBkLmdldE1vbnRoKCkgKyAxXG4gICAgZGF0ZS5kYXkgPSBkLmdldERhdGUoKVxuICAgIGRhdGUuaG91ciA9IGQuZ2V0SG91cnMoKVxuICAgIGRhdGUubWludXRlID0gZC5nZXRNaW51dGVzKClcbiAgICBkYXRlLnNlY29uZCA9IGQuZ2V0U2Vjb25kcygpXG4gICAgZGF0ZS5taWxsaXNlY29uZCA9IGQuZ2V0TWlsbGlzZWNvbmRzKClcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAobWFwLllZWVkgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS55ZWFyID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5ZWVlZIF0sIDEwKVxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuWVkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KG1hdGNoWyBtYXAuWVkgXSwgMTApXG4gICAgICBkYXRlLnllYXIgPSB5IDwgMCA/IHkgOiAyMDAwICsgeVxuICAgIH1cblxuICAgIGlmIChtYXAuTSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1vbnRoID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5NIF0sIDEwKVxuICAgICAgaWYgKGRhdGUubW9udGggPCAxIHx8IGRhdGUubW9udGggPiAxMikge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuTU1NICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubW9udGggPSBtb250aHNTaG9ydC5pbmRleE9mKG1hdGNoWyBtYXAuTU1NIF0pICsgMVxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuTU1NTSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1vbnRoID0gbW9udGhzLmluZGV4T2YobWF0Y2hbIG1hcC5NTU1NIF0pICsgMVxuICAgIH1cblxuICAgIGlmIChtYXAuRCAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLmRheSA9IHBhcnNlSW50KG1hdGNoWyBtYXAuRCBdLCAxMClcblxuICAgICAgaWYgKGRhdGUueWVhciA9PT0gbnVsbCB8fCBkYXRlLm1vbnRoID09PSBudWxsIHx8IGRhdGUuZGF5IDwgMSkge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXhEYXkgPSBjYWxlbmRhciAhPT0gJ3BlcnNpYW4nXG4gICAgICAgID8gKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgMCkpLmdldERhdGUoKVxuICAgICAgICA6IGphbGFhbGlNb250aExlbmd0aChkYXRlLnllYXIsIGRhdGUubW9udGgpXG5cbiAgICAgIGlmIChkYXRlLmRheSA+IG1heERheSkge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXAuSCAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLmhvdXIgPSBwYXJzZUludChtYXRjaFsgbWFwLkggXSwgMTApICUgMjRcbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLmggIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5ob3VyID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5oIF0sIDEwKSAlIDEyXG4gICAgICBpZiAoXG4gICAgICAgIChtYXAuQSAmJiBtYXRjaFsgbWFwLkEgXSA9PT0gJ1BNJylcbiAgICAgICAgfHwgKG1hcC5hICYmIG1hdGNoWyBtYXAuYSBdID09PSAncG0nKVxuICAgICAgICB8fCAobWFwLmFhICYmIG1hdGNoWyBtYXAuYWEgXSA9PT0gJ3AubS4nKVxuICAgICAgKSB7XG4gICAgICAgIGRhdGUuaG91ciArPSAxMlxuICAgICAgfVxuICAgICAgZGF0ZS5ob3VyID0gZGF0ZS5ob3VyICUgMjRcbiAgICB9XG5cbiAgICBpZiAobWFwLm0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5taW51dGUgPSBwYXJzZUludChtYXRjaFsgbWFwLm0gXSwgMTApICUgNjBcbiAgICB9XG5cbiAgICBpZiAobWFwLnMgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5zZWNvbmQgPSBwYXJzZUludChtYXRjaFsgbWFwLnMgXSwgMTApICUgNjBcbiAgICB9XG5cbiAgICBpZiAobWFwLlMgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5taWxsaXNlY29uZCA9IHBhcnNlSW50KG1hdGNoWyBtYXAuUyBdLCAxMCkgKiAxMCAqKiAoMyAtIG1hdGNoWyBtYXAuUyBdLmxlbmd0aClcbiAgICB9XG5cbiAgICBpZiAobWFwLlogIT09IHZvaWQgMCB8fCBtYXAuWlogIT09IHZvaWQgMCkge1xuICAgICAgdHpTdHJpbmcgPSAobWFwLlogIT09IHZvaWQgMCA/IG1hdGNoWyBtYXAuWiBdLnJlcGxhY2UoJzonLCAnJykgOiBtYXRjaFsgbWFwLlpaIF0pXG4gICAgICBkYXRlLnRpbWV6b25lT2Zmc2V0ID0gKHR6U3RyaW5nWyAwIF0gPT09ICcrJyA/IC0xIDogMSkgKiAoNjAgKiB0elN0cmluZy5zbGljZSgxLCAzKSArIDEgKiB0elN0cmluZy5zbGljZSgzLCA1KSlcbiAgICB9XG4gIH1cblxuICBkYXRlLmRhdGVIYXNoID0gcGFkKGRhdGUueWVhciwgNikgKyAnLycgKyBwYWQoZGF0ZS5tb250aCkgKyAnLycgKyBwYWQoZGF0ZS5kYXkpXG4gIGRhdGUudGltZUhhc2ggPSBwYWQoZGF0ZS5ob3VyKSArICc6JyArIHBhZChkYXRlLm1pbnV0ZSkgKyAnOicgKyBwYWQoZGF0ZS5zZWNvbmQpICsgdHpTdHJpbmdcblxuICByZXR1cm4gZGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZCAoZGF0ZSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGUgPT09ICdudW1iZXInXG4gICAgPyB0cnVlXG4gICAgOiBpc05hTihEYXRlLnBhcnNlKGRhdGUpKSA9PT0gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRGF0ZSAobW9kLCB1dGMpIHtcbiAgcmV0dXJuIGFkanVzdERhdGUobmV3IERhdGUoKSwgbW9kLCB1dGMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZldlZWsgKGRhdGUpIHtcbiAgY29uc3QgZG93ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF5KClcbiAgcmV0dXJuIGRvdyA9PT0gMCA/IDcgOiBkb3dcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtPZlllYXIgKGRhdGUpIHtcbiAgLy8gUmVtb3ZlIHRpbWUgY29tcG9uZW50cyBvZiBkYXRlXG4gIGNvbnN0IHRodXJzZGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKVxuXG4gIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuICB0aHVyc2RheS5zZXREYXRlKHRodXJzZGF5LmdldERhdGUoKSAtICgodGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMylcblxuICAvLyBUYWtlIEphbnVhcnkgNHRoIGFzIGl0IGlzIGFsd2F5cyBpbiB3ZWVrIDEgKHNlZSBJU08gODYwMSlcbiAgY29uc3QgZmlyc3RUaHVyc2RheSA9IG5ldyBEYXRlKHRodXJzZGF5LmdldEZ1bGxZZWFyKCksIDAsIDQpXG5cbiAgLy8gQ2hhbmdlIGRhdGUgdG8gVGh1cnNkYXkgc2FtZSB3ZWVrXG4gIGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdFRodXJzZGF5LmdldERhdGUoKSAtICgoZmlyc3RUaHVyc2RheS5nZXREYXkoKSArIDYpICUgNykgKyAzKVxuXG4gIC8vIENoZWNrIGlmIGRheWxpZ2h0LXNhdmluZy10aW1lLXN3aXRjaCBvY2N1cnJlZCBhbmQgY29ycmVjdCBmb3IgaXRcbiAgY29uc3QgZHMgPSB0aHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpIC0gZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpXG4gIHRodXJzZGF5LnNldEhvdXJzKHRodXJzZGF5LmdldEhvdXJzKCkgLSBkcylcblxuICAvLyBOdW1iZXIgb2Ygd2Vla3MgYmV0d2VlbiB0YXJnZXQgVGh1cnNkYXkgYW5kIGZpcnN0IFRodXJzZGF5XG4gIGNvbnN0IHdlZWtEaWZmID0gKHRodXJzZGF5IC0gZmlyc3RUaHVyc2RheSkgLyAoTUlMTElTRUNPTkRTX0lOX0RBWSAqIDcpXG4gIHJldHVybiAxICsgTWF0aC5mbG9vcih3ZWVrRGlmZilcbn1cblxuZnVuY3Rpb24gZ2V0RGF5SWRlbnRpZmllciAoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICogMTAwMDAgKyBkYXRlLmdldE1vbnRoKCkgKiAxMDAgKyBkYXRlLmdldERhdGUoKVxufVxuXG5mdW5jdGlvbiBnZXREYXRlSWRlbnRpZmllciAoZGF0ZSwgb25seURhdGUgLyogPSBmYWxzZSAqLykge1xuICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSlcbiAgcmV0dXJuIG9ubHlEYXRlID09PSB0cnVlID8gZ2V0RGF5SWRlbnRpZmllcihkKSA6IGQuZ2V0VGltZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW5EYXRlcyAoZGF0ZSwgZnJvbSwgdG8sIG9wdHMgPSB7fSkge1xuICBjb25zdFxuICAgIGQxID0gZ2V0RGF0ZUlkZW50aWZpZXIoZnJvbSwgb3B0cy5vbmx5RGF0ZSksXG4gICAgZDIgPSBnZXREYXRlSWRlbnRpZmllcih0bywgb3B0cy5vbmx5RGF0ZSksXG4gICAgY3VyID0gZ2V0RGF0ZUlkZW50aWZpZXIoZGF0ZSwgb3B0cy5vbmx5RGF0ZSlcblxuICByZXR1cm4gKGN1ciA+IGQxIHx8IChvcHRzLmluY2x1c2l2ZUZyb20gPT09IHRydWUgJiYgY3VyID09PSBkMSkpXG4gICAgJiYgKGN1ciA8IGQyIHx8IChvcHRzLmluY2x1c2l2ZVRvID09PSB0cnVlICYmIGN1ciA9PT0gZDIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9EYXRlIChkYXRlLCBtb2QpIHtcbiAgcmV0dXJuIGdldENoYW5nZShkYXRlLCBtb2QsIDEpXG59XG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3RGcm9tRGF0ZSAoZGF0ZSwgbW9kKSB7XG4gIHJldHVybiBnZXRDaGFuZ2UoZGF0ZSwgbW9kLCAtMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXRlIChkYXRlLCB1bml0LCB1dGMpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgcHJlZml4ID0gYHNldCR7IHV0YyA9PT0gdHJ1ZSA/ICdVVEMnIDogJycgfWBcblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Nb250aGAgXSgwKVxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICBjYXNlICdtb250aHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9RGF0ZWAgXSgxKVxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Ib3Vyc2AgXSgwKVxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbnV0ZXNgIF0oMClcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9U2Vjb25kc2AgXSgwKVxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaWxsaXNlY29uZHNgIF0oMClcbiAgfVxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kT2ZEYXRlIChkYXRlLCB1bml0LCB1dGMpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgcHJlZml4ID0gYHNldCR7IHV0YyA9PT0gdHJ1ZSA/ICdVVEMnIDogJycgfWBcblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Nb250aGAgXSgxMSlcbiAgICBjYXNlICdtb250aCc6XG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfURhdGVgIF0oZGF5c0luTW9udGgodCkpXG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfUhvdXJzYCBdKDIzKVxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbnV0ZXNgIF0oNTkpXG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfVNlY29uZHNgIF0oNTkpXG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbGxpc2Vjb25kc2AgXSg5OTkpXG4gIH1cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heERhdGUgKGRhdGUgLyogLCAuLi5hcmdzICovKSB7XG4gIGxldCB0ID0gbmV3IERhdGUoZGF0ZSlcbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGQgPT4ge1xuICAgIHQgPSBNYXRoLm1heCh0LCBuZXcgRGF0ZShkKSlcbiAgfSlcbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbkRhdGUgKGRhdGUgLyosIC4uLmFyZ3MgKi8pIHtcbiAgbGV0IHQgPSBuZXcgRGF0ZShkYXRlKVxuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmZvckVhY2goZCA9PiB7XG4gICAgdCA9IE1hdGgubWluKHQsIG5ldyBEYXRlKGQpKVxuICB9KVxuICByZXR1cm4gdFxufVxuXG5mdW5jdGlvbiBnZXREaWZmICh0LCBzdWIsIGludGVydmFsKSB7XG4gIHJldHVybiAoXG4gICAgKHQuZ2V0VGltZSgpIC0gdC5nZXRUaW1lem9uZU9mZnNldCgpICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgICAtIChzdWIuZ2V0VGltZSgpIC0gc3ViLmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKVxuICApIC8gaW50ZXJ2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVEaWZmIChkYXRlLCBzdWJ0cmFjdCwgdW5pdCA9ICdkYXlzJykge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBzdWIgPSBuZXcgRGF0ZShzdWJ0cmFjdClcblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gKHQuZ2V0RnVsbFllYXIoKSAtIHN1Yi5nZXRGdWxsWWVhcigpKVxuXG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gKHQuZ2V0RnVsbFllYXIoKSAtIHN1Yi5nZXRGdWxsWWVhcigpKSAqIDEyICsgdC5nZXRNb250aCgpIC0gc3ViLmdldE1vbnRoKClcblxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnZGF5JyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ2RheScpLCBNSUxMSVNFQ09ORFNfSU5fREFZKVxuXG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ2hvdXInKSwgc3RhcnRPZkRhdGUoc3ViLCAnaG91cicpLCBNSUxMSVNFQ09ORFNfSU5fSE9VUilcblxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnbWludXRlJyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ21pbnV0ZScpLCBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKVxuXG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdzZWNvbmQnKSwgc3RhcnRPZkRhdGUoc3ViLCAnc2Vjb25kJyksIDEwMDApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhciAoZGF0ZSkge1xuICByZXR1cm4gZ2V0RGF0ZURpZmYoZGF0ZSwgc3RhcnRPZkRhdGUoZGF0ZSwgJ3llYXInKSwgJ2RheXMnKSArIDFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZmVyRGF0ZUZvcm1hdCAoZGF0ZSkge1xuICByZXR1cm4gaXNEYXRlKGRhdGUpID09PSB0cnVlXG4gICAgPyAnZGF0ZSdcbiAgICA6ICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgPyAnbnVtYmVyJyA6ICdzdHJpbmcnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZUJldHdlZW4gKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IHQgPSBuZXcgRGF0ZShkYXRlKVxuXG4gIGlmIChtaW4pIHtcbiAgICBjb25zdCBsb3cgPSBuZXcgRGF0ZShtaW4pXG4gICAgaWYgKHQgPCBsb3cpIHtcbiAgICAgIHJldHVybiBsb3dcbiAgICB9XG4gIH1cblxuICBpZiAobWF4KSB7XG4gICAgY29uc3QgaGlnaCA9IG5ldyBEYXRlKG1heClcbiAgICBpZiAodCA+IGhpZ2gpIHtcbiAgICAgIHJldHVybiBoaWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURhdGUgKGRhdGUsIGRhdGUyLCB1bml0KSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIGQgPSBuZXcgRGF0ZShkYXRlMilcblxuICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHQuZ2V0VGltZSgpID09PSBkLmdldFRpbWUoKVxuICB9XG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIGlmICh0LmdldFNlY29uZHMoKSAhPT0gZC5nZXRTZWNvbmRzKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnbWludXRlJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICBpZiAodC5nZXRNaW51dGVzKCkgIT09IGQuZ2V0TWludXRlcygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ2hvdXInOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdob3Vycyc6XG4gICAgICBpZiAodC5nZXRIb3VycygpICE9PSBkLmdldEhvdXJzKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnZGF5JzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICBpZiAodC5nZXREYXRlKCkgIT09IGQuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ21vbnRoJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICAgIGlmICh0LmdldE1vbnRoKCkgIT09IGQuZ2V0TW9udGgoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICd5ZWFyJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAneWVhcnMnOlxuICAgICAgaWYgKHQuZ2V0RnVsbFllYXIoKSAhPT0gZC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRlIGlzU2FtZURhdGUgdW5rbm93biB1bml0ICR7IHVuaXQgfWApXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGggKGRhdGUpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApKS5nZXREYXRlKClcbn1cblxuZnVuY3Rpb24gZ2V0T3JkaW5hbCAobikge1xuICBpZiAobiA+PSAxMSAmJiBuIDw9IDEzKSB7XG4gICAgcmV0dXJuIGAkeyBuIH10aGBcbiAgfVxuICBzd2l0Y2ggKG4gJSAxMCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGAkeyBuIH1zdGBcbiAgICBjYXNlIDI6IHJldHVybiBgJHsgbiB9bmRgXG4gICAgY2FzZSAzOiByZXR1cm4gYCR7IG4gfXJkYFxuICB9XG4gIHJldHVybiBgJHsgbiB9dGhgXG59XG5cbmNvbnN0IGZvcm1hdHRlciA9IHtcbiAgLy8gWWVhcjogMDAsIDAxLCAuLi4sIDk5XG4gIFlZIChkYXRlLCBkYXRlTG9jYWxlLCBmb3JjZWRZZWFyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgPCAxOTAwIHdpdGggbmV3IERhdGUoKVxuICAgIGNvbnN0IHkgPSB0aGlzLllZWVkoZGF0ZSwgZGF0ZUxvY2FsZSwgZm9yY2VkWWVhcikgJSAxMDBcbiAgICByZXR1cm4geSA+PSAwXG4gICAgICA/IHBhZCh5KVxuICAgICAgOiAnLScgKyBwYWQoTWF0aC5hYnMoeSkpXG4gIH0sXG5cbiAgLy8gWWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gIFlZWVkgKGRhdGUsIF9kYXRlTG9jYWxlLCBmb3JjZWRZZWFyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgPCAxOTAwIHdpdGggbmV3IERhdGUoKVxuICAgIHJldHVybiBmb3JjZWRZZWFyICE9PSB2b2lkIDAgJiYgZm9yY2VkWWVhciAhPT0gbnVsbFxuICAgICAgPyBmb3JjZWRZZWFyXG4gICAgICA6IGRhdGUuZ2V0RnVsbFllYXIoKVxuICB9LFxuXG4gIC8vIE1vbnRoOiAxLCAyLCAuLi4sIDEyXG4gIE0gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMVxuICB9LFxuXG4gIC8vIE1vbnRoOiAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gIE1vIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldE9yZGluYWwoZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgfSxcblxuICAvLyBNb250aDogMDEsIDAyLCAuLi4sIDEyXG4gIE1NIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKVxuICB9LFxuXG4gIC8vIE1vbnRoIFNob3J0IE5hbWU6IEphbiwgRmViLCAuLi5cbiAgTU1NIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUubW9udGhzU2hvcnRbIGRhdGUuZ2V0TW9udGgoKSBdXG4gIH0sXG5cbiAgLy8gTW9udGggTmFtZTogSmFudWFyeSwgRmVicnVhcnksIC4uLlxuICBNTU1NIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUubW9udGhzWyBkYXRlLmdldE1vbnRoKCkgXVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDEsIDIsIDMsIDRcbiAgUSAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMylcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgUW8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbCh0aGlzLlEoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxLCAyLCAuLi4sIDMxXG4gIEQgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKClcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDFzdCwgMm5kLCAuLi4sIDMxc3RcbiAgRG8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbChkYXRlLmdldERhdGUoKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDAxLCAwMiwgLi4uLCAzMVxuICBERCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDEsIDIsIC4uLiwgMzY2XG4gIERERCAoZGF0ZSkge1xuICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMXN0LCAybmQsIC4uLiwgMzY2dGhcbiAgREREbyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRPcmRpbmFsKGdldERheU9mWWVhcihkYXRlKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMDAxLCAwMDIsIC4uLiwgMzY2XG4gIEREREQgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGdldERheU9mWWVhcihkYXRlKSwgMylcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogMCwgMSwgLi4uLCA2XG4gIGQgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXkoKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiAwdGgsIDFzdCwgLi4uLCA2dGhcbiAgZG8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbChkYXRlLmdldERheSgpKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdSwgTW8sIC4uLlxuICBkZCAoZGF0ZSwgZGF0ZUxvY2FsZSkge1xuICAgIHJldHVybiAoZGF0ZUxvY2FsZS5kYXlzWyBkYXRlLmdldERheSgpIF0pLnNsaWNlKDAsIDIpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1biwgTW9uLCAuLi5cbiAgZGRkIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUuZGF5c1Nob3J0WyBkYXRlLmdldERheSgpIF1cbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuZGF5LCBNb25kYXksIC4uLlxuICBkZGRkIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUuZGF5c1sgZGF0ZS5nZXREYXkoKSBdXG4gIH0sXG5cbiAgLy8gRGF5IG9mIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDdcbiAgRSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERheSgpIHx8IDdcbiAgfSxcblxuICAvLyBXZWVrIG9mIFllYXI6IDEgMiAuLi4gNTIgNTNcbiAgdyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRXZWVrT2ZZZWFyKGRhdGUpXG4gIH0sXG5cbiAgLy8gV2VlayBvZiBZZWFyOiAxc3QgMm5kIC4uLiA1Mm5kIDUzcmRcbiAgd28gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbChnZXRXZWVrT2ZZZWFyKGRhdGUpKVxuICB9LFxuXG4gIC8vIFdlZWsgb2YgWWVhcjogMDEgMDIgLi4uIDUyIDUzXG4gIHd3IChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChnZXRXZWVrT2ZZZWFyKGRhdGUpKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAsIDEsIC4uLiAyM1xuICBIIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAwLCAwMSwgLi4uLCAyM1xuICBISCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKVxuICB9LFxuXG4gIC8vIEhvdXI6IDEsIDIsIC4uLiwgMTJcbiAgaCAoZGF0ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXG4gICAgcmV0dXJuIGhvdXJzID09PSAwXG4gICAgICA/IDEyXG4gICAgICA6IChob3VycyA+IDEyID8gaG91cnMgJSAxMiA6IGhvdXJzKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAxLCAwMiwgLi4uLCAxMlxuICBoaCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQodGhpcy5oKGRhdGUpKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMCwgMSwgLi4uLCA1OVxuICBtIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwMCwgMDEsIC4uLiwgNTlcbiAgbW0gKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMCwgMSwgLi4uLCA1OVxuICBzIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwMCwgMDEsIC4uLiwgNTlcbiAgc3MgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKVxuICB9LFxuXG4gIC8vIDEvMTAgb2Ygc2Vjb25kOiAwLCAxLCAuLi4sIDlcbiAgUyAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDApXG4gIH0sXG5cbiAgLy8gMS8xMDAgb2Ygc2Vjb25kOiAwMCwgMDEsIC4uLiwgOTlcbiAgU1MgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKE1hdGguZmxvb3IoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwKSlcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZDogMDAwLCAwMDEsIC4uLiwgOTk5XG4gIFNTUyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMylcbiAgfSxcblxuICAvLyBNZXJpZGllbTogQU0sIFBNXG4gIEEgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpIDwgMTIgPyAnQU0nIDogJ1BNJ1xuICB9LFxuXG4gIC8vIE1lcmlkaWVtOiBhbSwgcG1cbiAgYSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCkgPCAxMiA/ICdhbScgOiAncG0nXG4gIH0sXG5cbiAgLy8gTWVyaWRpZW06IGEubS4sIHAubS5cbiAgYWEgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpIDwgMTIgPyAnYS5tLicgOiAncC5tLidcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxOjAwLCArMDA6MDAsIC4uLiArMTI6MDBcbiAgWiAoZGF0ZSwgX2RhdGVMb2NhbGUsIF9mb3JjZWRZZWFyLCBmb3JjZWRUaW1lem9uZU9mZnNldCkge1xuICAgIGNvbnN0IHR6T2Zmc2V0ID0gZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IHZvaWQgMCB8fCBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gbnVsbFxuICAgICAgPyBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICAgIDogZm9yY2VkVGltZXpvbmVPZmZzZXRcblxuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0ek9mZnNldCwgJzonKVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDEwMCwgKzAwMDAsIC4uLiArMTIwMFxuICBaWiAoZGF0ZSwgX2RhdGVMb2NhbGUsIF9mb3JjZWRZZWFyLCBmb3JjZWRUaW1lem9uZU9mZnNldCkge1xuICAgIGNvbnN0IHR6T2Zmc2V0ID0gZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IHZvaWQgMCB8fCBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gbnVsbFxuICAgICAgPyBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICAgIDogZm9yY2VkVGltZXpvbmVPZmZzZXRcblxuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0ek9mZnNldClcbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwXG4gIFggKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwOTAwXG4gIHggKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZSAodmFsLCBtYXNrLCBkYXRlTG9jYWxlLCBfX2ZvcmNlZFllYXIsIF9fZm9yY2VkVGltZXpvbmVPZmZzZXQpIHtcbiAgaWYgKFxuICAgICh2YWwgIT09IDAgJiYgIXZhbClcbiAgICB8fCB2YWwgPT09IEluZmluaXR5XG4gICAgfHwgdmFsID09PSAtSW5maW5pdHlcbiAgKSByZXR1cm5cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsKVxuXG4gIGlmIChpc05hTihkYXRlKSkgcmV0dXJuXG5cbiAgaWYgKG1hc2sgPT09IHZvaWQgMCkge1xuICAgIG1hc2sgPSBkZWZhdWx0TWFza1xuICB9XG5cbiAgY29uc3QgbG9jYWxlID0gZ2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlLCBMYW5nLnByb3BzKVxuXG4gIHJldHVybiBtYXNrLnJlcGxhY2UoXG4gICAgdG9rZW4sXG4gICAgKG1hdGNoLCB0ZXh0KSA9PiAoXG4gICAgICBtYXRjaCBpbiBmb3JtYXR0ZXJcbiAgICAgICAgPyBmb3JtYXR0ZXJbIG1hdGNoIF0oZGF0ZSwgbG9jYWxlLCBfX2ZvcmNlZFllYXIsIF9fZm9yY2VkVGltZXpvbmVPZmZzZXQpXG4gICAgICAgIDogKHRleHQgPT09IHZvaWQgMCA/IG1hdGNoIDogdGV4dC5zcGxpdCgnXFxcXF0nKS5qb2luKCddJykpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSAoZGF0ZSkge1xuICByZXR1cm4gaXNEYXRlKGRhdGUpID09PSB0cnVlXG4gICAgPyBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSlcbiAgICA6IGRhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1ZhbGlkLFxuICBleHRyYWN0RGF0ZSxcbiAgYnVpbGREYXRlLFxuICBnZXREYXlPZldlZWssXG4gIGdldFdlZWtPZlllYXIsXG4gIGlzQmV0d2VlbkRhdGVzLFxuICBhZGRUb0RhdGUsXG4gIHN1YnRyYWN0RnJvbURhdGUsXG4gIGFkanVzdERhdGUsXG4gIHN0YXJ0T2ZEYXRlLFxuICBlbmRPZkRhdGUsXG4gIGdldE1heERhdGUsXG4gIGdldE1pbkRhdGUsXG4gIGdldERhdGVEaWZmLFxuICBnZXREYXlPZlllYXIsXG4gIGluZmVyRGF0ZUZvcm1hdCxcbiAgZ2V0RGF0ZUJldHdlZW4sXG4gIGlzU2FtZURhdGUsXG4gIGRheXNJbk1vbnRoLFxuICBmb3JtYXREYXRlLFxuICBjbG9uZVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIFRyYW5zaXRpb24sIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVJlbmRlckNhY2hlIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1yZW5kZXItY2FjaGUvdXNlLXJlbmRlci1jYWNoZS5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUF0dHJzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWZvcm0vcHJpdmF0ZS51c2UtZm9ybS5qcydcbmltcG9ydCB1c2VEYXRldGltZSwgeyB1c2VEYXRldGltZVByb3BzLCB1c2VEYXRldGltZUVtaXRzLCBnZXREYXlIYXNoIH0gZnJvbSAnLi91c2UtZGF0ZXRpbWUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgX19zcGxpdERhdGUsIGdldERhdGVEaWZmIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZS9kYXRlLmpzJ1xuaW1wb3J0IHsgcGFkIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0L2Zvcm1hdC5qcydcbmltcG9ydCB7IGphbGFhbGlNb250aExlbmd0aCwgdG9HcmVnb3JpYW4gfSBmcm9tICcuLi8uLi91dGlscy9kYXRlL3ByaXZhdGUucGVyc2lhbi5qcydcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5cbmNvbnN0IHllYXJzSW50ZXJ2YWwgPSAyMFxuY29uc3Qgdmlld3MgPSBbICdDYWxlbmRhcicsICdZZWFycycsICdNb250aHMnIF1cbmNvbnN0IHZpZXdJc1ZhbGlkID0gdiA9PiB2aWV3cy5pbmNsdWRlcyh2KVxuY29uc3QgeWVhck1vbnRoVmFsaWRhdG9yID0gdiA9PiAvXi0/W1xcZF0rXFwvWzAtMV1cXGQkLy50ZXN0KHYpXG5jb25zdCBsaW5lU3RyID0gJyBcXHUyMDE0ICdcblxuZnVuY3Rpb24gZ2V0TW9udGhIYXNoIChkYXRlKSB7XG4gIHJldHVybiBkYXRlLnllYXIgKyAnLycgKyBwYWQoZGF0ZS5tb250aClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FEYXRlJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhdGV0aW1lUHJvcHMsXG4gICAgLi4udXNlRm9ybVByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB2YWwgPT4gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkodmFsKSA9PT0gdHJ1ZSB8fCBPYmplY3QodmFsKSA9PT0gdmFsIHx8IHZhbCA9PT0gbnVsbClcbiAgICB9LFxuXG4gICAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gICAgcmFuZ2U6IEJvb2xlYW4sXG5cbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIHN1YnRpdGxlOiBTdHJpbmcsXG5cbiAgICBtYXNrOiB7XG4gICAgICAuLi51c2VEYXRldGltZVByb3BzLm1hc2ssXG4gICAgICAvLyB0aGlzIG1hc2sgaXMgZm9yY2VkXG4gICAgICAvLyB3aGVuIHVzaW5nIHBlcnNpYW4gY2FsZW5kYXJcbiAgICAgIGRlZmF1bHQ6ICdZWVlZL01NL0REJ1xuICAgIH0sXG5cbiAgICBkZWZhdWx0WWVhck1vbnRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHllYXJNb250aFZhbGlkYXRvclxuICAgIH0sXG5cbiAgICB5ZWFyc0luTW9udGhWaWV3OiBCb29sZWFuLFxuXG4gICAgZXZlbnRzOiBbIEFycmF5LCBGdW5jdGlvbiBdLFxuICAgIGV2ZW50Q29sb3I6IFsgU3RyaW5nLCBGdW5jdGlvbiBdLFxuXG4gICAgZW1pdEltbWVkaWF0ZWx5OiBCb29sZWFuLFxuXG4gICAgb3B0aW9uczogWyBBcnJheSwgRnVuY3Rpb24gXSxcblxuICAgIG5hdmlnYXRpb25NaW5ZZWFyTW9udGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogeWVhck1vbnRoVmFsaWRhdG9yXG4gICAgfSxcblxuICAgIG5hdmlnYXRpb25NYXhZZWFyTW9udGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogeWVhck1vbnRoVmFsaWRhdG9yXG4gICAgfSxcblxuICAgIG5vVW5zZXQ6IEJvb2xlYW4sXG5cbiAgICBmaXJzdERheU9mV2VlazogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgIHRvZGF5QnRuOiBCb29sZWFuLFxuICAgIG1pbmltYWw6IEJvb2xlYW4sXG4gICAgZGVmYXVsdFZpZXc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdDYWxlbmRhcicsXG4gICAgICB2YWxpZGF0b3I6IHZpZXdJc1ZhbGlkXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlRGF0ZXRpbWVFbWl0cyxcbiAgICAncmFuZ2VTdGFydCcsICdyYW5nZUVuZCcsICduYXZpZ2F0aW9uJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBnZXRDYWNoZSB9ID0gdXNlUmVuZGVyQ2FjaGUoKVxuICAgIGNvbnN0IHsgdGFiaW5kZXgsIGhlYWRlckNsYXNzLCBnZXRMb2NhbGUsIGdldEN1cnJlbnREYXRlIH0gPSB1c2VEYXRldGltZShwcm9wcywgJHEpXG5cbiAgICBsZXQgbGFzdEVtaXRWYWx1ZVxuXG4gICAgY29uc3QgZm9ybUF0dHJzID0gdXNlRm9ybUF0dHJzKHByb3BzKVxuICAgIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gICAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGlubmVyTWFzayA9IHJlZihnZXRNYXNrKCkpXG4gICAgY29uc3QgaW5uZXJMb2NhbGUgPSByZWYoZ2V0TG9jYWxlKCkpXG5cbiAgICBjb25zdCBtYXNrID0gY29tcHV0ZWQoKCkgPT4gZ2V0TWFzaygpKVxuICAgIGNvbnN0IGxvY2FsZSA9IGNvbXB1dGVkKCgpID0+IGdldExvY2FsZSgpKVxuXG4gICAgY29uc3QgdG9kYXkgPSBjb21wdXRlZCgoKSA9PiBnZXRDdXJyZW50RGF0ZSgpKVxuXG4gICAgLy8gbW9kZWwgb2YgY3VycmVudCBjYWxlbmRhciB2aWV3OlxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHJlZihnZXRWaWV3TW9kZWwoaW5uZXJNYXNrLnZhbHVlLCBpbm5lckxvY2FsZS52YWx1ZSkpXG5cbiAgICBjb25zdCB2aWV3ID0gcmVmKHByb3BzLmRlZmF1bHRWaWV3KVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gKCRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JykpXG4gICAgY29uc3QgbW9udGhEaXJlY3Rpb24gPSByZWYoZGlyZWN0aW9uLnZhbHVlKVxuICAgIGNvbnN0IHllYXJEaXJlY3Rpb24gPSByZWYoZGlyZWN0aW9uLnZhbHVlKVxuXG4gICAgY29uc3QgeWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyXG4gICAgY29uc3Qgc3RhcnRZZWFyID0gcmVmKHllYXIgLSAoeWVhciAlIHllYXJzSW50ZXJ2YWwpIC0gKHllYXIgPCAwID8geWVhcnNJbnRlcnZhbCA6IDApKVxuICAgIGNvbnN0IGVkaXRSYW5nZSA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSBwcm9wcy5sYW5kc2NhcGUgPT09IHRydWUgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCdcbiAgICAgIHJldHVybiBgcS1kYXRlIHEtZGF0ZS0tJHsgdHlwZSB9IHEtZGF0ZS0tJHsgdHlwZSB9LSR7IHByb3BzLm1pbmltYWwgPT09IHRydWUgPyAnbWluaW1hbCcgOiAnc3RhbmRhcmQnIH1gXG4gICAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kYXRlLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtZGF0ZS0tYm9yZGVyZWQnIDogJycpXG4gICAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1kYXRlLS1zcXVhcmUgbm8tYm9yZGVyLXJhZGl1cycgOiAnJylcbiAgICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS1kYXRlLS1mbGF0IG5vLXNoYWRvdycgOiAnJylcbiAgICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogKHByb3BzLnJlYWRvbmx5ID09PSB0cnVlID8gJyBxLWRhdGUtLXJlYWRvbmx5JyA6ICcnKSlcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcHV0ZWRDb2xvciA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2xvciB8fCAncHJpbWFyeSdcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcHV0ZWRUZXh0Q29sb3IgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMudGV4dENvbG9yIHx8ICd3aGl0ZSdcbiAgICB9KVxuXG4gICAgY29uc3QgaXNJbW1lZGlhdGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZW1pdEltbWVkaWF0ZWx5ID09PSB0cnVlXG4gICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMucmFuZ2UgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBub3JtYWxpemVkTW9kZWwgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICA6IChwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHZvaWQgMCA/IFsgcHJvcHMubW9kZWxWYWx1ZSBdIDogW10pXG4gICAgKSlcblxuICAgIGNvbnN0IGRheXNNb2RlbCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBub3JtYWxpemVkTW9kZWwudmFsdWVcbiAgICAgICAgLmZpbHRlcihkYXRlID0+IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJylcbiAgICAgICAgLm1hcChkYXRlID0+IGRlY29kZVN0cmluZyhkYXRlLCBpbm5lck1hc2sudmFsdWUsIGlubmVyTG9jYWxlLnZhbHVlKSlcbiAgICAgICAgLmZpbHRlcihkYXRlID0+XG4gICAgICAgICAgZGF0ZS5kYXRlSGFzaCAhPT0gbnVsbFxuICAgICAgICAgICYmIGRhdGUuZGF5ICE9PSBudWxsXG4gICAgICAgICAgJiYgZGF0ZS5tb250aCAhPT0gbnVsbFxuICAgICAgICAgICYmIGRhdGUueWVhciAhPT0gbnVsbFxuICAgICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgcmFuZ2VNb2RlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGZuID0gZGF0ZSA9PiBkZWNvZGVTdHJpbmcoZGF0ZSwgaW5uZXJNYXNrLnZhbHVlLCBpbm5lckxvY2FsZS52YWx1ZSlcbiAgICAgIHJldHVybiBub3JtYWxpemVkTW9kZWwudmFsdWVcbiAgICAgICAgLmZpbHRlcihkYXRlID0+IGlzT2JqZWN0KGRhdGUpID09PSB0cnVlICYmIGRhdGUuZnJvbSAhPT0gdm9pZCAwICYmIGRhdGUudG8gIT09IHZvaWQgMClcbiAgICAgICAgLm1hcChyYW5nZSA9PiAoeyBmcm9tOiBmbihyYW5nZS5mcm9tKSwgdG86IGZuKHJhbmdlLnRvKSB9KSlcbiAgICAgICAgLmZpbHRlcihyYW5nZSA9PiByYW5nZS5mcm9tLmRhdGVIYXNoICE9PSBudWxsICYmIHJhbmdlLnRvLmRhdGVIYXNoICE9PSBudWxsICYmIHJhbmdlLmZyb20uZGF0ZUhhc2ggPCByYW5nZS50by5kYXRlSGFzaClcbiAgICB9KVxuXG4gICAgY29uc3QgZ2V0TmF0aXZlRGF0ZUZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuY2FsZW5kYXIgIT09ICdwZXJzaWFuJ1xuICAgICAgICA/IG1vZGVsID0+IG5ldyBEYXRlKG1vZGVsLnllYXIsIG1vZGVsLm1vbnRoIC0gMSwgbW9kZWwuZGF5KVxuICAgICAgICA6IG1vZGVsID0+IHtcbiAgICAgICAgICBjb25zdCBnRGF0ZSA9IHRvR3JlZ29yaWFuKG1vZGVsLnllYXIsIG1vZGVsLm1vbnRoLCBtb2RlbC5kYXkpXG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGdEYXRlLmd5LCBnRGF0ZS5nbSAtIDEsIGdEYXRlLmdkKVxuICAgICAgICB9XG4gICAgKSlcblxuICAgIGNvbnN0IGVuY29kZU9iamVjdEZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuY2FsZW5kYXIgPT09ICdwZXJzaWFuJ1xuICAgICAgICA/IGdldERheUhhc2hcbiAgICAgICAgOiAoZGF0ZSwgbWFzaywgbG9jYWxlKSA9PiBmb3JtYXREYXRlKFxuICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgIGRhdGUueWVhcixcbiAgICAgICAgICAgICAgZGF0ZS5tb250aCAtIDEsXG4gICAgICAgICAgICAgIGRhdGUuZGF5LFxuICAgICAgICAgICAgICBkYXRlLmhvdXIsXG4gICAgICAgICAgICAgIGRhdGUubWludXRlLFxuICAgICAgICAgICAgICBkYXRlLnNlY29uZCxcbiAgICAgICAgICAgICAgZGF0ZS5taWxsaXNlY29uZFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hc2sgPT09IHZvaWQgMCA/IGlubmVyTWFzay52YWx1ZSA6IG1hc2ssXG4gICAgICAgICAgICBsb2NhbGUgPT09IHZvaWQgMCA/IGlubmVyTG9jYWxlLnZhbHVlIDogbG9jYWxlLFxuICAgICAgICAgICAgZGF0ZS55ZWFyLFxuICAgICAgICAgICAgZGF0ZS50aW1lem9uZU9mZnNldFxuICAgICAgICAgIClcbiAgICApKVxuXG4gICAgY29uc3QgZGF5c0luTW9kZWwgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgZGF5c01vZGVsLnZhbHVlLmxlbmd0aCArIHJhbmdlTW9kZWwudmFsdWUucmVkdWNlKFxuICAgICAgICAoYWNjLCByYW5nZSkgPT4gYWNjICsgMSArIGdldERhdGVEaWZmKFxuICAgICAgICAgIGdldE5hdGl2ZURhdGVGbi52YWx1ZShyYW5nZS50byksXG4gICAgICAgICAgZ2V0TmF0aXZlRGF0ZUZuLnZhbHVlKHJhbmdlLmZyb20pXG4gICAgICAgICksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy50aXRsZSAhPT0gdm9pZCAwICYmIHByb3BzLnRpdGxlICE9PSBudWxsICYmIHByb3BzLnRpdGxlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcHJvcHMudGl0bGVcbiAgICAgIH1cblxuICAgICAgaWYgKGVkaXRSYW5nZS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtb2RlbCA9IGVkaXRSYW5nZS52YWx1ZS5pbml0XG4gICAgICAgIGNvbnN0IGRhdGUgPSBnZXROYXRpdmVEYXRlRm4udmFsdWUobW9kZWwpXG5cbiAgICAgICAgcmV0dXJuIGlubmVyTG9jYWxlLnZhbHVlLmRheXNTaG9ydFsgZGF0ZS5nZXREYXkoKSBdICsgJywgJ1xuICAgICAgICAgICsgaW5uZXJMb2NhbGUudmFsdWUubW9udGhzU2hvcnRbIG1vZGVsLm1vbnRoIC0gMSBdICsgJyAnXG4gICAgICAgICAgKyBtb2RlbC5kYXkgKyBsaW5lU3RyICsgJz8nXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXlzSW5Nb2RlbC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbGluZVN0clxuICAgICAgfVxuXG4gICAgICBpZiAoZGF5c0luTW9kZWwudmFsdWUgPiAxKSB7XG4gICAgICAgIHJldHVybiBgJHsgZGF5c0luTW9kZWwudmFsdWUgfSAkeyBpbm5lckxvY2FsZS52YWx1ZS5wbHVyYWxEYXkgfWBcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9kZWwgPSBkYXlzTW9kZWwudmFsdWVbIDAgXVxuICAgICAgY29uc3QgZGF0ZSA9IGdldE5hdGl2ZURhdGVGbi52YWx1ZShtb2RlbClcblxuICAgICAgaWYgKGlzTmFOKGRhdGUudmFsdWVPZigpKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gbGluZVN0clxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJMb2NhbGUudmFsdWUuaGVhZGVyVGl0bGUgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaW5uZXJMb2NhbGUudmFsdWUuaGVhZGVyVGl0bGUoZGF0ZSwgbW9kZWwpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbm5lckxvY2FsZS52YWx1ZS5kYXlzU2hvcnRbIGRhdGUuZ2V0RGF5KCkgXSArICcsICdcbiAgICAgICAgKyBpbm5lckxvY2FsZS52YWx1ZS5tb250aHNTaG9ydFsgbW9kZWwubW9udGggLSAxIF0gKyAnICdcbiAgICAgICAgKyBtb2RlbC5kYXlcbiAgICB9KVxuXG4gICAgY29uc3QgbWluU2VsZWN0ZWRNb2RlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGVsID0gZGF5c01vZGVsLnZhbHVlLmNvbmNhdChyYW5nZU1vZGVsLnZhbHVlLm1hcChyYW5nZSA9PiByYW5nZS5mcm9tKSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEueWVhciAtIGIueWVhciB8fCBhLm1vbnRoIC0gYi5tb250aClcblxuICAgICAgcmV0dXJuIG1vZGVsWyAwIF1cbiAgICB9KVxuXG4gICAgY29uc3QgbWF4U2VsZWN0ZWRNb2RlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGVsID0gZGF5c01vZGVsLnZhbHVlLmNvbmNhdChyYW5nZU1vZGVsLnZhbHVlLm1hcChyYW5nZSA9PiByYW5nZS50bykpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnllYXIgLSBhLnllYXIgfHwgYi5tb250aCAtIGEubW9udGgpXG5cbiAgICAgIHJldHVybiBtb2RlbFsgMCBdXG4gICAgfSlcblxuICAgIGNvbnN0IGhlYWRlclN1YnRpdGxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnN1YnRpdGxlICE9PSB2b2lkIDAgJiYgcHJvcHMuc3VidGl0bGUgIT09IG51bGwgJiYgcHJvcHMuc3VidGl0bGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5zdWJ0aXRsZVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF5c0luTW9kZWwudmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxpbmVTdHJcbiAgICAgIH1cblxuICAgICAgaWYgKGRheXNJbk1vZGVsLnZhbHVlID4gMSkge1xuICAgICAgICBjb25zdCBmcm9tID0gbWluU2VsZWN0ZWRNb2RlbC52YWx1ZVxuICAgICAgICBjb25zdCB0byA9IG1heFNlbGVjdGVkTW9kZWwudmFsdWVcbiAgICAgICAgY29uc3QgbW9udGggPSBpbm5lckxvY2FsZS52YWx1ZS5tb250aHNTaG9ydFxuXG4gICAgICAgIHJldHVybiBtb250aFsgZnJvbS5tb250aCAtIDEgXSArIChcbiAgICAgICAgICBmcm9tLnllYXIgIT09IHRvLnllYXJcbiAgICAgICAgICAgID8gJyAnICsgZnJvbS55ZWFyICsgbGluZVN0ciArIG1vbnRoWyB0by5tb250aCAtIDEgXSArICcgJ1xuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgZnJvbS5tb250aCAhPT0gdG8ubW9udGhcbiAgICAgICAgICAgICAgICAgID8gbGluZVN0ciArIG1vbnRoWyB0by5tb250aCAtIDEgXVxuICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICkgKyAnICcgKyB0by55ZWFyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXlzTW9kZWwudmFsdWVbIDAgXS55ZWFyXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGVBcnJvdyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsgJHEuaWNvblNldC5kYXRldGltZS5hcnJvd0xlZnQsICRxLmljb25TZXQuZGF0ZXRpbWUuYXJyb3dSaWdodCBdXG4gICAgICByZXR1cm4gJHEubGFuZy5ydGwgPT09IHRydWUgPyB2YWwucmV2ZXJzZSgpIDogdmFsXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXB1dGVkRmlyc3REYXlPZldlZWsgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5maXJzdERheU9mV2VlayAhPT0gdm9pZCAwXG4gICAgICAgID8gTnVtYmVyKHByb3BzLmZpcnN0RGF5T2ZXZWVrKVxuICAgICAgICA6IGlubmVyTG9jYWxlLnZhbHVlLmZpcnN0RGF5T2ZXZWVrXG4gICAgKSlcblxuICAgIGNvbnN0IGRheXNPZldlZWsgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICBkYXlzID0gaW5uZXJMb2NhbGUudmFsdWUuZGF5c1Nob3J0LFxuICAgICAgICBmaXJzdCA9IGNvbXB1dGVkRmlyc3REYXlPZldlZWsudmFsdWVcblxuICAgICAgcmV0dXJuIGZpcnN0ID4gMFxuICAgICAgICA/IGRheXMuc2xpY2UoZmlyc3QsIDcpLmNvbmNhdChkYXlzLnNsaWNlKDAsIGZpcnN0KSlcbiAgICAgICAgOiBkYXlzXG4gICAgfSlcblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IHZpZXdNb2RlbC52YWx1ZVxuICAgICAgcmV0dXJuIHByb3BzLmNhbGVuZGFyICE9PSAncGVyc2lhbidcbiAgICAgICAgPyAobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCAwKSkuZ2V0RGF0ZSgpXG4gICAgICAgIDogamFsYWFsaU1vbnRoTGVuZ3RoKGRhdGUueWVhciwgZGF0ZS5tb250aClcbiAgICB9KVxuXG4gICAgY29uc3QgZXZ0Q29sb3IgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0eXBlb2YgcHJvcHMuZXZlbnRDb2xvciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BzLmV2ZW50Q29sb3JcbiAgICAgICAgOiAoKSA9PiBwcm9wcy5ldmVudENvbG9yXG4gICAgKSlcblxuICAgIGNvbnN0IG1pbk5hdiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5uYXZpZ2F0aW9uTWluWWVhck1vbnRoID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHByb3BzLm5hdmlnYXRpb25NaW5ZZWFyTW9udGguc3BsaXQoJy8nKVxuICAgICAgcmV0dXJuIHsgeWVhcjogcGFyc2VJbnQoZGF0YVsgMCBdLCAxMCksIG1vbnRoOiBwYXJzZUludChkYXRhWyAxIF0sIDEwKSB9XG4gICAgfSlcblxuICAgIGNvbnN0IG1heE5hdiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5uYXZpZ2F0aW9uTWF4WWVhck1vbnRoID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHByb3BzLm5hdmlnYXRpb25NYXhZZWFyTW9udGguc3BsaXQoJy8nKVxuICAgICAgcmV0dXJuIHsgeWVhcjogcGFyc2VJbnQoZGF0YVsgMCBdLCAxMCksIG1vbnRoOiBwYXJzZUludChkYXRhWyAxIF0sIDEwKSB9XG4gICAgfSlcblxuICAgIGNvbnN0IG5hdkJvdW5kYXJpZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBtb250aDogeyBwcmV2OiB0cnVlLCBuZXh0OiB0cnVlIH0sXG4gICAgICAgIHllYXI6IHsgcHJldjogdHJ1ZSwgbmV4dDogdHJ1ZSB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtaW5OYXYudmFsdWUgIT09IG51bGwgJiYgbWluTmF2LnZhbHVlLnllYXIgPj0gdmlld01vZGVsLnZhbHVlLnllYXIpIHtcbiAgICAgICAgZGF0YS55ZWFyLnByZXYgPSBmYWxzZVxuICAgICAgICBpZiAobWluTmF2LnZhbHVlLnllYXIgPT09IHZpZXdNb2RlbC52YWx1ZS55ZWFyICYmIG1pbk5hdi52YWx1ZS5tb250aCA+PSB2aWV3TW9kZWwudmFsdWUubW9udGgpIHtcbiAgICAgICAgICBkYXRhLm1vbnRoLnByZXYgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhOYXYudmFsdWUgIT09IG51bGwgJiYgbWF4TmF2LnZhbHVlLnllYXIgPD0gdmlld01vZGVsLnZhbHVlLnllYXIpIHtcbiAgICAgICAgZGF0YS55ZWFyLm5leHQgPSBmYWxzZVxuICAgICAgICBpZiAobWF4TmF2LnZhbHVlLnllYXIgPT09IHZpZXdNb2RlbC52YWx1ZS55ZWFyICYmIG1heE5hdi52YWx1ZS5tb250aCA8PSB2aWV3TW9kZWwudmFsdWUubW9udGgpIHtcbiAgICAgICAgICBkYXRhLm1vbnRoLm5leHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcblxuICAgIGNvbnN0IGRheXNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtYXAgPSB7fVxuXG4gICAgICBkYXlzTW9kZWwudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBnZXRNb250aEhhc2goZW50cnkpXG5cbiAgICAgICAgaWYgKG1hcFsgaGFzaCBdID09PSB2b2lkIDApIHtcbiAgICAgICAgICBtYXBbIGhhc2ggXSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBtYXBbIGhhc2ggXS5wdXNoKGVudHJ5LmRheSlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtYXBcbiAgICB9KVxuXG4gICAgY29uc3QgcmFuZ2VNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtYXAgPSB7fVxuXG4gICAgICByYW5nZU1vZGVsLnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBjb25zdCBoYXNoRnJvbSA9IGdldE1vbnRoSGFzaChlbnRyeS5mcm9tKVxuICAgICAgICBjb25zdCBoYXNoVG8gPSBnZXRNb250aEhhc2goZW50cnkudG8pXG5cbiAgICAgICAgaWYgKG1hcFsgaGFzaEZyb20gXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgbWFwWyBoYXNoRnJvbSBdID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcFsgaGFzaEZyb20gXS5wdXNoKHtcbiAgICAgICAgICBmcm9tOiBlbnRyeS5mcm9tLmRheSxcbiAgICAgICAgICB0bzogaGFzaEZyb20gPT09IGhhc2hUbyA/IGVudHJ5LnRvLmRheSA6IHZvaWQgMCxcbiAgICAgICAgICByYW5nZTogZW50cnlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoaGFzaEZyb20gPCBoYXNoVG8pIHtcbiAgICAgICAgICBsZXQgaGFzaFxuICAgICAgICAgIGNvbnN0IHsgeWVhciwgbW9udGggfSA9IGVudHJ5LmZyb21cbiAgICAgICAgICBjb25zdCBjdXIgPSBtb250aCA8IDEyXG4gICAgICAgICAgICA/IHsgeWVhciwgbW9udGg6IG1vbnRoICsgMSB9XG4gICAgICAgICAgICA6IHsgeWVhcjogeWVhciArIDEsIG1vbnRoOiAxIH1cblxuICAgICAgICAgIHdoaWxlICgoaGFzaCA9IGdldE1vbnRoSGFzaChjdXIpKSA8PSBoYXNoVG8pIHtcbiAgICAgICAgICAgIGlmIChtYXBbIGhhc2ggXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIG1hcFsgaGFzaCBdID0gW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFwWyBoYXNoIF0ucHVzaCh7XG4gICAgICAgICAgICAgIGZyb206IHZvaWQgMCxcbiAgICAgICAgICAgICAgdG86IGhhc2ggPT09IGhhc2hUbyA/IGVudHJ5LnRvLmRheSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgcmFuZ2U6IGVudHJ5XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjdXIubW9udGgrK1xuICAgICAgICAgICAgaWYgKGN1ci5tb250aCA+IDEyKSB7XG4gICAgICAgICAgICAgIGN1ci55ZWFyKytcbiAgICAgICAgICAgICAgY3VyLm1vbnRoID0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1hcFxuICAgIH0pXG5cbiAgICBjb25zdCByYW5nZVZpZXcgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoZWRpdFJhbmdlLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3QgeyBpbml0LCBpbml0SGFzaCwgZmluYWwsIGZpbmFsSGFzaCB9ID0gZWRpdFJhbmdlLnZhbHVlXG5cbiAgICAgIGNvbnN0IFsgZnJvbSwgdG8gXSA9IGluaXRIYXNoIDw9IGZpbmFsSGFzaFxuICAgICAgICA/IFsgaW5pdCwgZmluYWwgXVxuICAgICAgICA6IFsgZmluYWwsIGluaXQgXVxuXG4gICAgICBjb25zdCBmcm9tSGFzaCA9IGdldE1vbnRoSGFzaChmcm9tKVxuICAgICAgY29uc3QgdG9IYXNoID0gZ2V0TW9udGhIYXNoKHRvKVxuXG4gICAgICBpZiAoXG4gICAgICAgIGZyb21IYXNoICE9PSB2aWV3TW9udGhIYXNoLnZhbHVlXG4gICAgICAgICYmIHRvSGFzaCAhPT0gdmlld01vbnRoSGFzaC52YWx1ZVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgdmlldyA9IHt9XG5cbiAgICAgIGlmIChmcm9tSGFzaCA9PT0gdmlld01vbnRoSGFzaC52YWx1ZSkge1xuICAgICAgICB2aWV3LmZyb20gPSBmcm9tLmRheVxuICAgICAgICB2aWV3LmluY2x1ZGVGcm9tID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZpZXcuZnJvbSA9IDFcbiAgICAgIH1cblxuICAgICAgaWYgKHRvSGFzaCA9PT0gdmlld01vbnRoSGFzaC52YWx1ZSkge1xuICAgICAgICB2aWV3LnRvID0gdG8uZGF5XG4gICAgICAgIHZpZXcuaW5jbHVkZVRvID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZpZXcudG8gPSBkYXlzSW5Nb250aC52YWx1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlld1xuICAgIH0pXG5cbiAgICBjb25zdCB2aWV3TW9udGhIYXNoID0gY29tcHV0ZWQoKCkgPT4gZ2V0TW9udGhIYXNoKHZpZXdNb2RlbC52YWx1ZSkpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25EYXlzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbWFwID0ge31cblxuICAgICAgaWYgKHByb3BzLm9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgbWFwWyBpIF0gPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gdHlwZW9mIHByb3BzLm9wdGlvbnMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wcy5vcHRpb25zXG4gICAgICAgIDogZGF0ZSA9PiBwcm9wcy5vcHRpb25zLmluY2x1ZGVzKGRhdGUpXG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoLnZhbHVlOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF5SGFzaCA9IHZpZXdNb250aEhhc2gudmFsdWUgKyAnLycgKyBwYWQoaSlcbiAgICAgICAgbWFwWyBpIF0gPSBmbihkYXlIYXNoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFwXG4gICAgfSlcblxuICAgIGNvbnN0IGV2ZW50RGF5c01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcCA9IHt9XG5cbiAgICAgIGlmIChwcm9wcy5ldmVudHMgPT09IHZvaWQgMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgbWFwWyBpIF0gPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZm4gPSB0eXBlb2YgcHJvcHMuZXZlbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBwcm9wcy5ldmVudHNcbiAgICAgICAgICA6IGRhdGUgPT4gcHJvcHMuZXZlbnRzLmluY2x1ZGVzKGRhdGUpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGgudmFsdWU7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGRheUhhc2ggPSB2aWV3TW9udGhIYXNoLnZhbHVlICsgJy8nICsgcGFkKGkpXG4gICAgICAgICAgbWFwWyBpIF0gPSBmbihkYXlIYXNoKSA9PT0gdHJ1ZSAmJiBldnRDb2xvci52YWx1ZShkYXlIYXNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXBcbiAgICB9KVxuXG4gICAgY29uc3Qgdmlld0RheXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgZGF0ZSwgZW5kRGF5XG4gICAgICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSB2aWV3TW9kZWwudmFsdWVcblxuICAgICAgaWYgKHByb3BzLmNhbGVuZGFyICE9PSAncGVyc2lhbicpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSlcbiAgICAgICAgZW5kRGF5ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMCkpLmdldERhdGUoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGdEYXRlID0gdG9HcmVnb3JpYW4oeWVhciwgbW9udGgsIDEpXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShnRGF0ZS5neSwgZ0RhdGUuZ20gLSAxLCBnRGF0ZS5nZClcbiAgICAgICAgbGV0IHByZXZKTSA9IG1vbnRoIC0gMVxuICAgICAgICBsZXQgcHJldkpZID0geWVhclxuICAgICAgICBpZiAocHJldkpNID09PSAwKSB7XG4gICAgICAgICAgcHJldkpNID0gMTJcbiAgICAgICAgICBwcmV2SlktLVxuICAgICAgICB9XG4gICAgICAgIGVuZERheSA9IGphbGFhbGlNb250aExlbmd0aChwcmV2SlksIHByZXZKTSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5czogZGF0ZS5nZXREYXkoKSAtIGNvbXB1dGVkRmlyc3REYXlPZldlZWsudmFsdWUgLSAxLFxuICAgICAgICBlbmREYXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZGF5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IFtdXG4gICAgICBjb25zdCB7IGRheXMsIGVuZERheSB9ID0gdmlld0RheXMudmFsdWVcblxuICAgICAgY29uc3QgbGVuID0gZGF5cyA8IDAgPyBkYXlzICsgNyA6IGRheXNcbiAgICAgIGlmIChsZW4gPCA2KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbmREYXkgLSBsZW47IGkgPD0gZW5kRGF5OyBpKyspIHtcbiAgICAgICAgICByZXMucHVzaCh7IGksIGZpbGw6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRleCA9IHJlcy5sZW5ndGhcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGgudmFsdWU7IGkrKykge1xuICAgICAgICBjb25zdCBkYXkgPSB7IGksIGV2ZW50OiBldmVudERheXNNYXAudmFsdWVbIGkgXSwgY2xhc3NlczogW10gfVxuXG4gICAgICAgIGlmIChzZWxlY3Rpb25EYXlzTWFwLnZhbHVlWyBpIF0gPT09IHRydWUpIHtcbiAgICAgICAgICBkYXkuaW4gPSB0cnVlXG4gICAgICAgICAgZGF5LmZsYXQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXMucHVzaChkYXkpXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGN1cnJlbnQgdmlldyBoYXMgZGF5cyBpbiBtb2RlbFxuICAgICAgaWYgKGRheXNNYXAudmFsdWVbIHZpZXdNb250aEhhc2gudmFsdWUgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRheXNNYXAudmFsdWVbIHZpZXdNb250aEhhc2gudmFsdWUgXS5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgY29uc3QgaSA9IGluZGV4ICsgZGF5IC0gMVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyBpIF0sIHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZsYXQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3I6IGNvbXB1dGVkQ29sb3IudmFsdWUsXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gaWYgY3VycmVudCB2aWV3IGhhcyByYW5nZXMgaW4gbW9kZWxcbiAgICAgIGlmIChyYW5nZU1hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmFuZ2VNYXAudmFsdWVbIHZpZXdNb250aEhhc2gudmFsdWUgXS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuZnJvbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tID0gaW5kZXggKyBlbnRyeS5mcm9tIC0gMVxuICAgICAgICAgICAgY29uc3QgdG8gPSBpbmRleCArIChlbnRyeS50byB8fCBkYXlzSW5Nb250aC52YWx1ZSkgLSAxXG5cbiAgICAgICAgICAgIGZvciAobGV0IGRheSA9IGZyb207IGRheSA8PSB0bzsgZGF5KyspIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNbIGRheSBdLCB7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IGVudHJ5LnJhbmdlLFxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbXB1dGVkQ29sb3IudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiBjb21wdXRlZFRleHRDb2xvci52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZnJvbSBdLCB7XG4gICAgICAgICAgICAgIHJhbmdlRnJvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmxhdDogZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGVudHJ5LnRvICE9PSB2b2lkIDAgJiYgT2JqZWN0LmFzc2lnbihyZXNbIHRvIF0sIHtcbiAgICAgICAgICAgICAgcmFuZ2VUbzogdHJ1ZSxcbiAgICAgICAgICAgICAgZmxhdDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGVudHJ5LnRvICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvID0gaW5kZXggKyBlbnRyeS50byAtIDFcblxuICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gaW5kZXg7IGRheSA8PSB0bzsgZGF5KyspIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNbIGRheSBdLCB7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IGVudHJ5LnJhbmdlLFxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbXB1dGVkQ29sb3IudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiBjb21wdXRlZFRleHRDb2xvci52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgdG8gXSwge1xuICAgICAgICAgICAgICBmbGF0OiBmYWxzZSxcbiAgICAgICAgICAgICAgcmFuZ2VUbzogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0byA9IGluZGV4ICsgZGF5c0luTW9udGgudmFsdWUgLSAxXG4gICAgICAgICAgICBmb3IgKGxldCBkYXkgPSBpbmRleDsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZGF5IF0sIHtcbiAgICAgICAgICAgICAgICByYW5nZTogZW50cnkucmFuZ2UsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2VWaWV3LnZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IGluZGV4ICsgcmFuZ2VWaWV3LnZhbHVlLmZyb20gLSAxXG4gICAgICAgIGNvbnN0IHRvID0gaW5kZXggKyByYW5nZVZpZXcudmFsdWUudG8gLSAxXG5cbiAgICAgICAgZm9yIChsZXQgZGF5ID0gZnJvbTsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgIHJlc1sgZGF5IF0uY29sb3IgPSBjb21wdXRlZENvbG9yLnZhbHVlXG4gICAgICAgICAgcmVzWyBkYXkgXS5lZGl0UmFuZ2UgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFuZ2VWaWV3LnZhbHVlLmluY2x1ZGVGcm9tID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVzWyBmcm9tIF0uZWRpdFJhbmdlRnJvbSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2VWaWV3LnZhbHVlLmluY2x1ZGVUbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJlc1sgdG8gXS5lZGl0UmFuZ2VUbyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmlld01vZGVsLnZhbHVlLnllYXIgPT09IHRvZGF5LnZhbHVlLnllYXIgJiYgdmlld01vZGVsLnZhbHVlLm1vbnRoID09PSB0b2RheS52YWx1ZS5tb250aCkge1xuICAgICAgICByZXNbIGluZGV4ICsgdG9kYXkudmFsdWUuZGF5IC0gMSBdLnRvZGF5ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBsZWZ0ID0gcmVzLmxlbmd0aCAlIDdcbiAgICAgIGlmIChsZWZ0ID4gMCkge1xuICAgICAgICBjb25zdCBhZnRlckRheXMgPSA3IC0gbGVmdFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBhZnRlckRheXM7IGkrKykge1xuICAgICAgICAgIHJlcy5wdXNoKHsgaSwgZmlsbDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgIGxldCBjbHMgPSAncS1kYXRlX19jYWxlbmRhci1pdGVtICdcblxuICAgICAgICBpZiAoZGF5LmZpbGwgPT09IHRydWUpIHtcbiAgICAgICAgICBjbHMgKz0gJ3EtZGF0ZV9fY2FsZW5kYXItaXRlbS0tZmlsbCdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbHMgKz0gYHEtZGF0ZV9fY2FsZW5kYXItaXRlbS0tJHsgZGF5LmluID09PSB0cnVlID8gJ2luJyA6ICdvdXQnIH1gXG5cbiAgICAgICAgICBpZiAoZGF5LnJhbmdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNscyArPSBgIHEtZGF0ZV9fcmFuZ2UkeyBkYXkucmFuZ2VUbyA9PT0gdHJ1ZSA/ICctdG8nIDogKGRheS5yYW5nZUZyb20gPT09IHRydWUgPyAnLWZyb20nIDogJycpIH1gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRheS5lZGl0UmFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscyArPSBgIHEtZGF0ZV9fZWRpdC1yYW5nZSR7IGRheS5lZGl0UmFuZ2VGcm9tID09PSB0cnVlID8gJy1mcm9tJyA6ICcnIH0keyBkYXkuZWRpdFJhbmdlVG8gPT09IHRydWUgPyAnLXRvJyA6ICcnIH1gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRheS5yYW5nZSAhPT0gdm9pZCAwIHx8IGRheS5lZGl0UmFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscyArPSBgIHRleHQtJHsgZGF5LmNvbG9yIH1gXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF5LmNsYXNzZXMgPSBjbHNcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgICAgPyB7ICdhcmlhLWRpc2FibGVkJzogJ3RydWUnIH1cbiAgICAgICAgOiB7fVxuICAgICkpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2ID0+IHtcbiAgICAgIGlmIChsYXN0RW1pdFZhbHVlID09PSB2KSB7XG4gICAgICAgIGxhc3RFbWl0VmFsdWUgPSAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBnZXRWaWV3TW9kZWwoaW5uZXJNYXNrLnZhbHVlLCBpbm5lckxvY2FsZS52YWx1ZSlcbiAgICAgICAgdXBkYXRlVmlld01vZGVsKG1vZGVsLnllYXIsIG1vZGVsLm1vbnRoLCBtb2RlbClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2godmlldywgKCkgPT4ge1xuICAgICAgaWYgKGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgcHJveHkuJGVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpID09PSB0cnVlKSB7XG4gICAgICAgIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiB2aWV3TW9kZWwudmFsdWUueWVhciArICd8JyArIHZpZXdNb2RlbC52YWx1ZS5tb250aCwgKCkgPT4ge1xuICAgICAgZW1pdCgnbmF2aWdhdGlvbicsIHsgeWVhcjogdmlld01vZGVsLnZhbHVlLnllYXIsIG1vbnRoOiB2aWV3TW9kZWwudmFsdWUubW9udGggfSlcbiAgICB9KVxuXG4gICAgd2F0Y2gobWFzaywgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVZhbHVlKHZhbCwgaW5uZXJMb2NhbGUudmFsdWUsICdtYXNrJylcbiAgICAgIGlubmVyTWFzay52YWx1ZSA9IHZhbFxuICAgIH0pXG5cbiAgICB3YXRjaChsb2NhbGUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVWYWx1ZShpbm5lck1hc2sudmFsdWUsIHZhbCwgJ2xvY2FsZScpXG4gICAgICBpbm5lckxvY2FsZS52YWx1ZSA9IHZhbFxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzZXRUb2RheSAoKSB7XG4gICAgICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IHRvZGF5LnZhbHVlXG5cbiAgICAgIGNvbnN0IGRhdGUgPSB7XG4gICAgICAgIC8vIGNvbnRhaW5zIG1vcmUgcHJvcHMgdGhhbiBuZWVkZWQgKGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZClcbiAgICAgICAgLy8gYnV0IHRob3NlIGFyZW4ndCB1c2VkIGluIHRoZSBwcm9jZXNzaW5nIG9mIHRoaXMgXCJkYXRlXCIgdmFyaWFibGVcbiAgICAgICAgLi4udmlld01vZGVsLnZhbHVlLFxuXG4gICAgICAgIC8vIG92ZXJ3cml0aW5nIHdpdGggdG9kYXkncyBkYXRlXG4gICAgICAgIHllYXIsXG4gICAgICAgIG1vbnRoLFxuICAgICAgICBkYXlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9udGhNYXAgPSBkYXlzTWFwLnZhbHVlWyBnZXRNb250aEhhc2goZGF0ZSkgXVxuXG4gICAgICBpZiAobW9udGhNYXAgPT09IHZvaWQgMCB8fCBtb250aE1hcC5pbmNsdWRlcyhkYXRlLmRheSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGFkZFRvTW9kZWwoZGF0ZSlcbiAgICAgIH1cblxuICAgICAgc2V0Q2FsZW5kYXJUbyhkYXRlLnllYXIsIGRhdGUubW9udGgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmlldyAodmlld01vZGUpIHtcbiAgICAgIGlmICh2aWV3SXNWYWxpZCh2aWV3TW9kZSkgPT09IHRydWUpIHtcbiAgICAgICAgdmlldy52YWx1ZSA9IHZpZXdNb2RlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb2Zmc2V0Q2FsZW5kYXIgKHR5cGUsIGRlc2NlbmRpbmcpIHtcbiAgICAgIGlmIChbICdtb250aCcsICd5ZWFyJyBdLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgIGNvbnN0IGZuID0gdHlwZSA9PT0gJ21vbnRoJyA/IGdvVG9Nb250aCA6IGdvVG9ZZWFyXG4gICAgICAgIGZuKGRlc2NlbmRpbmcgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FsZW5kYXJUbyAoeWVhciwgbW9udGgpIHtcbiAgICAgIHZpZXcudmFsdWUgPSAnQ2FsZW5kYXInXG4gICAgICB1cGRhdGVWaWV3TW9kZWwoeWVhciwgbW9udGgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RWRpdGluZ1JhbmdlIChmcm9tLCB0bykge1xuICAgICAgaWYgKHByb3BzLnJhbmdlID09PSBmYWxzZSB8fCAhZnJvbSkge1xuICAgICAgICBlZGl0UmFuZ2UudmFsdWUgPSBudWxsXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbml0ID0gT2JqZWN0LmFzc2lnbih7IC4uLnZpZXdNb2RlbC52YWx1ZSB9LCBmcm9tKVxuICAgICAgY29uc3QgZmluYWwgPSB0byAhPT0gdm9pZCAwXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7IC4uLnZpZXdNb2RlbC52YWx1ZSB9LCB0bylcbiAgICAgICAgOiBpbml0XG5cbiAgICAgIGVkaXRSYW5nZS52YWx1ZSA9IHtcbiAgICAgICAgaW5pdCxcbiAgICAgICAgaW5pdEhhc2g6IGdldERheUhhc2goaW5pdCksXG4gICAgICAgIGZpbmFsLFxuICAgICAgICBmaW5hbEhhc2g6IGdldERheUhhc2goZmluYWwpXG4gICAgICB9XG5cbiAgICAgIHNldENhbGVuZGFyVG8oaW5pdC55ZWFyLCBpbml0Lm1vbnRoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1hc2sgKCkge1xuICAgICAgcmV0dXJuIHByb3BzLmNhbGVuZGFyID09PSAncGVyc2lhbicgPyAnWVlZWS9NTS9ERCcgOiBwcm9wcy5tYXNrXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjb2RlU3RyaW5nIChkYXRlLCBtYXNrLCBsb2NhbGUpIHtcbiAgICAgIHJldHVybiBfX3NwbGl0RGF0ZShcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgbWFzayxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwcm9wcy5jYWxlbmRhcixcbiAgICAgICAge1xuICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgIHNlY29uZDogMCxcbiAgICAgICAgICBtaWxsaXNlY29uZDogMFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Vmlld01vZGVsIChtYXNrLCBsb2NhbGUpIHtcbiAgICAgIGNvbnN0IG1vZGVsID0gQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgOiAocHJvcHMubW9kZWxWYWx1ZSA/IFsgcHJvcHMubW9kZWxWYWx1ZSBdIDogW10pXG5cbiAgICAgIGlmIChtb2RlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGdldERlZmF1bHRWaWV3TW9kZWwoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBtb2RlbFsgbW9kZWwubGVuZ3RoIC0gMSBdXG4gICAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlU3RyaW5nKFxuICAgICAgICB0YXJnZXQuZnJvbSAhPT0gdm9pZCAwID8gdGFyZ2V0LmZyb20gOiB0YXJnZXQsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIGxvY2FsZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGVjb2RlZC5kYXRlSGFzaCA9PT0gbnVsbFxuICAgICAgICA/IGdldERlZmF1bHRWaWV3TW9kZWwoKVxuICAgICAgICA6IGRlY29kZWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWZhdWx0Vmlld01vZGVsICgpIHtcbiAgICAgIGxldCB5ZWFyLCBtb250aFxuXG4gICAgICBpZiAocHJvcHMuZGVmYXVsdFllYXJNb250aCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBwcm9wcy5kZWZhdWx0WWVhck1vbnRoLnNwbGl0KCcvJylcbiAgICAgICAgeWVhciA9IHBhcnNlSW50KGRbIDAgXSwgMTApXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQoZFsgMSBdLCAxMClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBtYXkgY29tZSBmcm9tIGRhdGEoKSB3aGVyZSBjb21wdXRlZFxuICAgICAgICAvLyBwcm9wcyBhcmUgbm90IHlldCBhdmFpbGFibGVcbiAgICAgICAgY29uc3QgZCA9IHRvZGF5LnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHRvZGF5LnZhbHVlXG4gICAgICAgICAgOiBnZXRDdXJyZW50RGF0ZSgpXG5cbiAgICAgICAgeWVhciA9IGQueWVhclxuICAgICAgICBtb250aCA9IGQubW9udGhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheTogMSxcbiAgICAgICAgaG91cjogMCxcbiAgICAgICAgbWludXRlOiAwLFxuICAgICAgICBzZWNvbmQ6IDAsXG4gICAgICAgIG1pbGxpc2Vjb25kOiAwLFxuICAgICAgICBkYXRlSGFzaDogeWVhciArICcvJyArIHBhZChtb250aCkgKyAnLzAxJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvVG9Nb250aCAob2Zmc2V0KSB7XG4gICAgICBsZXQgeWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyXG4gICAgICBsZXQgbW9udGggPSBOdW1iZXIodmlld01vZGVsLnZhbHVlLm1vbnRoKSArIG9mZnNldFxuXG4gICAgICBpZiAobW9udGggPT09IDEzKSB7XG4gICAgICAgIG1vbnRoID0gMVxuICAgICAgICB5ZWFyKytcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAwKSB7XG4gICAgICAgIG1vbnRoID0gMTJcbiAgICAgICAgeWVhci0tXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCBtb250aClcbiAgICAgIGlzSW1tZWRpYXRlLnZhbHVlID09PSB0cnVlICYmIGVtaXRJbW1lZGlhdGVseSgnbW9udGgnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvVG9ZZWFyIChvZmZzZXQpIHtcbiAgICAgIGNvbnN0IHllYXIgPSBOdW1iZXIodmlld01vZGVsLnZhbHVlLnllYXIpICsgb2Zmc2V0XG4gICAgICB1cGRhdGVWaWV3TW9kZWwoeWVhciwgdmlld01vZGVsLnZhbHVlLm1vbnRoKVxuICAgICAgaXNJbW1lZGlhdGUudmFsdWUgPT09IHRydWUgJiYgZW1pdEltbWVkaWF0ZWx5KCd5ZWFyJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRZZWFyICh5ZWFyKSB7XG4gICAgICB1cGRhdGVWaWV3TW9kZWwoeWVhciwgdmlld01vZGVsLnZhbHVlLm1vbnRoKVxuICAgICAgdmlldy52YWx1ZSA9IHByb3BzLmRlZmF1bHRWaWV3ID09PSAnWWVhcnMnID8gJ01vbnRocycgOiAnQ2FsZW5kYXInXG4gICAgICBpc0ltbWVkaWF0ZS52YWx1ZSA9PT0gdHJ1ZSAmJiBlbWl0SW1tZWRpYXRlbHkoJ3llYXInKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1vbnRoIChtb250aCkge1xuICAgICAgdXBkYXRlVmlld01vZGVsKHZpZXdNb2RlbC52YWx1ZS55ZWFyLCBtb250aClcbiAgICAgIHZpZXcudmFsdWUgPSAnQ2FsZW5kYXInXG4gICAgICBpc0ltbWVkaWF0ZS52YWx1ZSA9PT0gdHJ1ZSAmJiBlbWl0SW1tZWRpYXRlbHkoJ21vbnRoJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVEYXRlIChkYXRlLCBtb250aEhhc2gpIHtcbiAgICAgIGNvbnN0IG1vbnRoID0gZGF5c01hcC52YWx1ZVsgbW9udGhIYXNoIF1cbiAgICAgIGNvbnN0IGZuID0gbW9udGggIT09IHZvaWQgMCAmJiBtb250aC5pbmNsdWRlcyhkYXRlLmRheSkgPT09IHRydWVcbiAgICAgICAgPyByZW1vdmVGcm9tTW9kZWxcbiAgICAgICAgOiBhZGRUb01vZGVsXG5cbiAgICAgIGZuKGRhdGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hvcnREYXRlIChkYXRlKSB7XG4gICAgICByZXR1cm4geyB5ZWFyOiBkYXRlLnllYXIsIG1vbnRoOiBkYXRlLm1vbnRoLCBkYXk6IGRhdGUuZGF5IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3TW9kZWwgKHllYXIsIG1vbnRoLCB0aW1lKSB7XG4gICAgICBpZiAobWluTmF2LnZhbHVlICE9PSBudWxsICYmIHllYXIgPD0gbWluTmF2LnZhbHVlLnllYXIpIHtcbiAgICAgICAgaWYgKG1vbnRoIDwgbWluTmF2LnZhbHVlLm1vbnRoIHx8IHllYXIgPCBtaW5OYXYudmFsdWUueWVhcikge1xuICAgICAgICAgIG1vbnRoID0gbWluTmF2LnZhbHVlLm1vbnRoXG4gICAgICAgIH1cbiAgICAgICAgeWVhciA9IG1pbk5hdi52YWx1ZS55ZWFyXG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhOYXYudmFsdWUgIT09IG51bGwgJiYgeWVhciA+PSBtYXhOYXYudmFsdWUueWVhcikge1xuICAgICAgICBpZiAobW9udGggPiBtYXhOYXYudmFsdWUubW9udGggfHwgeWVhciA+IG1heE5hdi52YWx1ZS55ZWFyKSB7XG4gICAgICAgICAgbW9udGggPSBtYXhOYXYudmFsdWUubW9udGhcbiAgICAgICAgfVxuICAgICAgICB5ZWFyID0gbWF4TmF2LnZhbHVlLnllYXJcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCwgdGltZXpvbmVPZmZzZXQsIHRpbWVIYXNoIH0gPSB0aW1lXG4gICAgICAgIE9iamVjdC5hc3NpZ24odmlld01vZGVsLnZhbHVlLCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCwgdGltZXpvbmVPZmZzZXQsIHRpbWVIYXNoIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0hhc2ggPSB5ZWFyICsgJy8nICsgcGFkKG1vbnRoKSArICcvMDEnXG5cbiAgICAgIGlmIChuZXdIYXNoICE9PSB2aWV3TW9kZWwudmFsdWUuZGF0ZUhhc2gpIHtcbiAgICAgICAgbW9udGhEaXJlY3Rpb24udmFsdWUgPSAodmlld01vZGVsLnZhbHVlLmRhdGVIYXNoIDwgbmV3SGFzaCkgPT09ICgkcS5sYW5nLnJ0bCAhPT0gdHJ1ZSkgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICAgIGlmICh5ZWFyICE9PSB2aWV3TW9kZWwudmFsdWUueWVhcikge1xuICAgICAgICAgIHllYXJEaXJlY3Rpb24udmFsdWUgPSBtb250aERpcmVjdGlvbi52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHN0YXJ0WWVhci52YWx1ZSA9IHllYXIgLSB5ZWFyICUgeWVhcnNJbnRlcnZhbCAtICh5ZWFyIDwgMCA/IHllYXJzSW50ZXJ2YWwgOiAwKVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24odmlld01vZGVsLnZhbHVlLCB7XG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICBkYXk6IDEsXG4gICAgICAgICAgICBkYXRlSGFzaDogbmV3SGFzaFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdFZhbHVlICh2YWwsIGFjdGlvbiwgZGF0ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWwgIT09IG51bGwgJiYgdmFsLmxlbmd0aCA9PT0gMSAmJiBwcm9wcy5tdWx0aXBsZSA9PT0gZmFsc2VcbiAgICAgICAgPyB2YWxbIDAgXVxuICAgICAgICA6IHZhbFxuXG4gICAgICBsYXN0RW1pdFZhbHVlID0gdmFsdWVcblxuICAgICAgY29uc3QgeyByZWFzb24sIGRldGFpbHMgfSA9IGdldEVtaXRQYXJhbXMoYWN0aW9uLCBkYXRlKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSwgcmVhc29uLCBkZXRhaWxzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRJbW1lZGlhdGVseSAocmVhc29uKSB7XG4gICAgICBjb25zdCBkYXRlID0gZGF5c01vZGVsLnZhbHVlWyAwIF0gIT09IHZvaWQgMCAmJiBkYXlzTW9kZWwudmFsdWVbIDAgXS5kYXRlSGFzaCAhPT0gbnVsbFxuICAgICAgICA/IHsgLi4uZGF5c01vZGVsLnZhbHVlWyAwIF0gfVxuICAgICAgICA6IHsgLi4udmlld01vZGVsLnZhbHVlIH0gLy8gaW5oZXJpdCBkYXksIGhvdXJzLCBtaW51dGVzLCBtaWxsaXNlY29uZHMuLi5cblxuICAgICAgLy8gbmV4dFRpY2sgcmVxdWlyZWQgYmVjYXVzZSBvZiBhbmltYXRpb24gZGVsYXkgaW4gdmlld01vZGVsXG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGRhdGUueWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyXG4gICAgICAgIGRhdGUubW9udGggPSB2aWV3TW9kZWwudmFsdWUubW9udGhcblxuICAgICAgICBjb25zdCBtYXhEYXkgPSBwcm9wcy5jYWxlbmRhciAhPT0gJ3BlcnNpYW4nXG4gICAgICAgICAgPyAobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCAwKSkuZ2V0RGF0ZSgpXG4gICAgICAgICAgOiBqYWxhYWxpTW9udGhMZW5ndGgoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoKVxuXG4gICAgICAgIGRhdGUuZGF5ID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgZGF0ZS5kYXkpLCBtYXhEYXkpXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbmNvZGVFbnRyeShkYXRlKVxuICAgICAgICBsYXN0RW1pdFZhbHVlID0gdmFsdWVcblxuICAgICAgICBjb25zdCB7IGRldGFpbHMgfSA9IGdldEVtaXRQYXJhbXMoJycsIGRhdGUpXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUsIHJlYXNvbiwgZGV0YWlscylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW1pdFBhcmFtcyAoYWN0aW9uLCBkYXRlKSB7XG4gICAgICByZXR1cm4gZGF0ZS5mcm9tICE9PSB2b2lkIDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICByZWFzb246IGAkeyBhY3Rpb24gfS1yYW5nZWAsXG4gICAgICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgICAgIC4uLmdldFNob3J0RGF0ZShkYXRlLnRhcmdldCksXG4gICAgICAgICAgICAgIGZyb206IGdldFNob3J0RGF0ZShkYXRlLmZyb20pLFxuICAgICAgICAgICAgICB0bzogZ2V0U2hvcnREYXRlKGRhdGUudG8pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIHJlYXNvbjogYCR7IGFjdGlvbiB9LWRheWAsXG4gICAgICAgICAgICBkZXRhaWxzOiBnZXRTaG9ydERhdGUoZGF0ZSlcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5jb2RlRW50cnkgKGRhdGUsIG1hc2ssIGxvY2FsZSkge1xuICAgICAgcmV0dXJuIGRhdGUuZnJvbSAhPT0gdm9pZCAwXG4gICAgICAgID8geyBmcm9tOiBlbmNvZGVPYmplY3RGbi52YWx1ZShkYXRlLmZyb20sIG1hc2ssIGxvY2FsZSksIHRvOiBlbmNvZGVPYmplY3RGbi52YWx1ZShkYXRlLnRvLCBtYXNrLCBsb2NhbGUpIH1cbiAgICAgICAgOiBlbmNvZGVPYmplY3RGbi52YWx1ZShkYXRlLCBtYXNrLCBsb2NhbGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9Nb2RlbCAoZGF0ZSkge1xuICAgICAgbGV0IHZhbHVlXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoZGF0ZS5mcm9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvLyB3ZSBhbHNvIG5lZWQgdG8gZmlsdGVyIG91dCBpbnRlcnNlY3Rpb25zXG5cbiAgICAgICAgICBjb25zdCBmcm9tSGFzaCA9IGdldERheUhhc2goZGF0ZS5mcm9tKVxuICAgICAgICAgIGNvbnN0IHRvSGFzaCA9IGdldERheUhhc2goZGF0ZS50bylcblxuICAgICAgICAgIGNvbnN0IGRheXMgPSBkYXlzTW9kZWwudmFsdWVcbiAgICAgICAgICAgIC5maWx0ZXIoZGF5ID0+IGRheS5kYXRlSGFzaCA8IGZyb21IYXNoIHx8IGRheS5kYXRlSGFzaCA+IHRvSGFzaClcblxuICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IHJhbmdlTW9kZWwudmFsdWVcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgZnJvbSwgdG8gfSkgPT4gdG8uZGF0ZUhhc2ggPCBmcm9tSGFzaCB8fCBmcm9tLmRhdGVIYXNoID4gdG9IYXNoKVxuXG4gICAgICAgICAgdmFsdWUgPSBkYXlzLmNvbmNhdChyYW5nZXMpLmNvbmNhdChkYXRlKS5tYXAoZW50cnkgPT4gZW5jb2RlRW50cnkoZW50cnkpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1vZGVsID0gbm9ybWFsaXplZE1vZGVsLnZhbHVlLnNsaWNlKClcbiAgICAgICAgICBtb2RlbC5wdXNoKGVuY29kZUVudHJ5KGRhdGUpKVxuICAgICAgICAgIHZhbHVlID0gbW9kZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZW5jb2RlRW50cnkoZGF0ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdFZhbHVlKHZhbHVlLCAnYWRkJywgZGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tTW9kZWwgKGRhdGUpIHtcbiAgICAgIGlmIChwcm9wcy5ub1Vuc2V0ID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgbGV0IG1vZGVsID0gbnVsbFxuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB2YWwgPSBlbmNvZGVFbnRyeShkYXRlKVxuXG4gICAgICAgIGlmIChkYXRlLmZyb20gIT09IHZvaWQgMCkge1xuICAgICAgICAgIG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZS5maWx0ZXIoXG4gICAgICAgICAgICBkYXRlID0+IChcbiAgICAgICAgICAgICAgZGF0ZS5mcm9tICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgICA/IChkYXRlLmZyb20gIT09IHZhbC5mcm9tICYmIGRhdGUudG8gIT09IHZhbC50bylcbiAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlLmZpbHRlcihkYXRlID0+IGRhdGUgIT09IHZhbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBtb2RlbCA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbWl0VmFsdWUobW9kZWwsICdyZW1vdmUnLCBkYXRlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChtYXNrLCBsb2NhbGUsIHJlYXNvbikge1xuICAgICAgY29uc3QgbW9kZWwgPSBkYXlzTW9kZWwudmFsdWVcbiAgICAgICAgLmNvbmNhdChyYW5nZU1vZGVsLnZhbHVlKVxuICAgICAgICAubWFwKGVudHJ5ID0+IGVuY29kZUVudHJ5KGVudHJ5LCBtYXNrLCBsb2NhbGUpKVxuICAgICAgICAuZmlsdGVyKGVudHJ5ID0+IHtcbiAgICAgICAgICByZXR1cm4gZW50cnkuZnJvbSAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/IGVudHJ5LmZyb20uZGF0ZUhhc2ggIT09IG51bGwgJiYgZW50cnkudG8uZGF0ZUhhc2ggIT09IG51bGxcbiAgICAgICAgICAgIDogZW50cnkuZGF0ZUhhc2ggIT09IG51bGxcbiAgICAgICAgfSlcblxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCAocHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyBtb2RlbCA6IG1vZGVsWyAwIF0pIHx8IG51bGwsIHJlYXNvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXIgKCkge1xuICAgICAgaWYgKHByb3BzLm1pbmltYWwgPT09IHRydWUpIHJldHVyblxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtZGF0ZV9faGVhZGVyICcgKyBoZWFkZXJDbGFzcy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdyZWxhdGl2ZS1wb3NpdGlvbidcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tZmFkZSdcbiAgICAgICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICAgICAgICBrZXk6ICdoLXlyLScgKyBoZWFkZXJTdWJ0aXRsZS52YWx1ZSxcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19oZWFkZXItc3VidGl0bGUgcS1kYXRlX19oZWFkZXItbGluayAnXG4gICAgICAgICAgICAgICsgKHZpZXcudmFsdWUgPT09ICdZZWFycycgPyAncS1kYXRlX19oZWFkZXItbGluay0tYWN0aXZlJyA6ICdjdXJzb3ItcG9pbnRlcicpLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3ZZJywge1xuICAgICAgICAgICAgICBvbkNsaWNrICgpIHsgdmlldy52YWx1ZSA9ICdZZWFycycgfSxcbiAgICAgICAgICAgICAgb25LZXl1cCAoZSkgeyBlLmtleUNvZGUgPT09IDEzICYmICh2aWV3LnZhbHVlID0gJ1llYXJzJykgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCBbIGhlYWRlclN1YnRpdGxlLnZhbHVlIF0pKVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci10aXRsZSByZWxhdGl2ZS1wb3NpdGlvbiBmbGV4IG5vLXdyYXAnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uIGNvbCdcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tZmFkZSdcbiAgICAgICAgICAgIH0sICgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnaC1zdWInICsgaGVhZGVyVGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19oZWFkZXItdGl0bGUtbGFiZWwgcS1kYXRlX19oZWFkZXItbGluayAnXG4gICAgICAgICAgICAgICAgKyAodmlldy52YWx1ZSA9PT0gJ0NhbGVuZGFyJyA/ICdxLWRhdGVfX2hlYWRlci1saW5rLS1hY3RpdmUnIDogJ2N1cnNvci1wb2ludGVyJyksXG4gICAgICAgICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3ZDJywge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2sgKCkgeyB2aWV3LnZhbHVlID0gJ0NhbGVuZGFyJyB9LFxuICAgICAgICAgICAgICAgIG9uS2V5dXAgKGUpIHsgZS5rZXlDb2RlID09PSAxMyAmJiAodmlldy52YWx1ZSA9ICdDYWxlbmRhcicpIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIFsgaGVhZGVyVGl0bGUudmFsdWUgXSkpXG4gICAgICAgICAgXSksXG5cbiAgICAgICAgICBwcm9wcy50b2RheUJ0biA9PT0gdHJ1ZSA/IGgoUUJ0biwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci10b2RheSBzZWxmLXN0YXJ0JyxcbiAgICAgICAgICAgIGljb246ICRxLmljb25TZXQuZGF0ZXRpbWUudG9kYXksXG4gICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgb25DbGljazogc2V0VG9kYXlcbiAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmF2aWdhdGlvbiAoeyBsYWJlbCwgdHlwZSwga2V5LCBkaXIsIGdvVG8sIGJvdW5kYXJpZXMsIGNscyB9KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIHEtZGF0ZV9fYXJyb3cnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMCBdLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgZGlzYWJsZTogYm91bmRhcmllcy5wcmV2ID09PSBmYWxzZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdnby0jJyArIHR5cGUsIHsgb25DbGljayAoKSB7IGdvVG8oLTEpIH0gfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdyZWxhdGl2ZS1wb3NpdGlvbiBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNlbnRlcicgKyBjbHNcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tanVtcC0nICsgZGlyXG4gICAgICAgICAgfSwgKCkgPT4gaCgnZGl2JywgeyBrZXkgfSwgW1xuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBub0NhcHM6IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIC4uLmdldENhY2hlKCd2aWV3IycgKyB0eXBlLCB7IG9uQ2xpY2s6ICgpID0+IHsgdmlldy52YWx1ZSA9IHR5cGUgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncm93IGl0ZW1zLWNlbnRlciBxLWRhdGVfX2Fycm93J1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICBpY29uOiBkYXRlQXJyb3cudmFsdWVbIDEgXSxcbiAgICAgICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAgIGRpc2FibGU6IGJvdW5kYXJpZXMubmV4dCA9PT0gZmFsc2UsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnZ28rIycgKyB0eXBlLCB7IG9uQ2xpY2sgKCkgeyBnb1RvKDEpIH0gfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclZpZXdzID0ge1xuICAgICAgQ2FsZW5kYXI6ICgpID0+IChbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdjYWxlbmRhci12aWV3JyxcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fdmlldyBxLWRhdGVfX2NhbGVuZGFyJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX25hdmlnYXRpb24gcm93IGl0ZW1zLWNlbnRlciBuby13cmFwJ1xuICAgICAgICAgIH0sIGdldE5hdmlnYXRpb24oe1xuICAgICAgICAgICAgbGFiZWw6IGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1sgdmlld01vZGVsLnZhbHVlLm1vbnRoIC0gMSBdLFxuICAgICAgICAgICAgdHlwZTogJ01vbnRocycsXG4gICAgICAgICAgICBrZXk6IHZpZXdNb2RlbC52YWx1ZS5tb250aCxcbiAgICAgICAgICAgIGRpcjogbW9udGhEaXJlY3Rpb24udmFsdWUsXG4gICAgICAgICAgICBnb1RvOiBnb1RvTW9udGgsXG4gICAgICAgICAgICBib3VuZGFyaWVzOiBuYXZCb3VuZGFyaWVzLnZhbHVlLm1vbnRoLFxuICAgICAgICAgICAgY2xzOiAnIGNvbCdcbiAgICAgICAgICB9KS5jb25jYXQoZ2V0TmF2aWdhdGlvbih7XG4gICAgICAgICAgICBsYWJlbDogdmlld01vZGVsLnZhbHVlLnllYXIsXG4gICAgICAgICAgICB0eXBlOiAnWWVhcnMnLFxuICAgICAgICAgICAga2V5OiB2aWV3TW9kZWwudmFsdWUueWVhcixcbiAgICAgICAgICAgIGRpcjogeWVhckRpcmVjdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGdvVG86IGdvVG9ZZWFyLFxuICAgICAgICAgICAgYm91bmRhcmllczogbmF2Qm91bmRhcmllcy52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgY2xzOiAnJ1xuICAgICAgICAgIH0pKSksXG5cbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fY2FsZW5kYXItd2Vla2RheXMgcm93IGl0ZW1zLWNlbnRlciBuby13cmFwJ1xuICAgICAgICAgIH0sIGRheXNPZldlZWsudmFsdWUubWFwKGRheSA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kYXRlX19jYWxlbmRhci1pdGVtJyB9LCBbIGgoJ2RpdicsIGRheSkgXSkpKSxcblxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19jYWxlbmRhci1kYXlzLWNvbnRhaW5lciByZWxhdGl2ZS1wb3NpdGlvbiBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICAgIG5hbWU6ICdxLXRyYW5zaXRpb24tLXNsaWRlLScgKyBtb250aERpcmVjdGlvbi52YWx1ZVxuICAgICAgICAgICAgfSwgKCkgPT4gaCgnZGl2Jywge1xuICAgICAgICAgICAgICBrZXk6IHZpZXdNb250aEhhc2gudmFsdWUsXG4gICAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19jYWxlbmRhci1kYXlzIGZpdCdcbiAgICAgICAgICAgIH0sIGRheXMudmFsdWUubWFwKGRheSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBkYXkuY2xhc3NlcyB9LCBbXG4gICAgICAgICAgICAgIGRheS5pbiA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gaChcbiAgICAgICAgICAgICAgICAgIFFCdG4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGRheS50b2RheSA9PT0gdHJ1ZSA/ICdxLWRhdGVfX3RvZGF5JyA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmxhdDogZGF5LmZsYXQsXG4gICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IGRheS51bmVsZXZhdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGF5LmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGRheS50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBkYXkuaSxcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgnZGF5IycgKyBkYXkuaSwge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgb25EYXlDbGljayhkYXkuaSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlb3ZlcjogKCkgPT4geyBvbkRheU1vdXNlb3ZlcihkYXkuaSkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRheS5ldmVudCAhPT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgPyAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kYXRlX19ldmVudCBiZy0nICsgZGF5LmV2ZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IGgoJ2RpdicsICcnICsgZGF5LmkpXG4gICAgICAgICAgICBdKSkpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcblxuICAgICAgTW9udGhzICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSB2aWV3TW9kZWwudmFsdWUueWVhciA9PT0gdG9kYXkudmFsdWUueWVhclxuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gbW9udGggPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAobWluTmF2LnZhbHVlICE9PSBudWxsICYmIHZpZXdNb2RlbC52YWx1ZS55ZWFyID09PSBtaW5OYXYudmFsdWUueWVhciAmJiBtaW5OYXYudmFsdWUubW9udGggPiBtb250aClcbiAgICAgICAgICAgIHx8IChtYXhOYXYudmFsdWUgIT09IG51bGwgJiYgdmlld01vZGVsLnZhbHVlLnllYXIgPT09IG1heE5hdi52YWx1ZS55ZWFyICYmIG1heE5hdi52YWx1ZS5tb250aCA8IG1vbnRoKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBpbm5lckxvY2FsZS52YWx1ZS5tb250aHNTaG9ydC5tYXAoKG1vbnRoLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gdmlld01vZGVsLnZhbHVlLm1vbnRoID09PSBpICsgMVxuXG4gICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19tb250aHMtaXRlbSBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBjbGFzczogY3VycmVudFllYXIgPT09IHRydWUgJiYgdG9kYXkudmFsdWUubW9udGggPT09IGkgKyAxID8gJ3EtZGF0ZV9fdG9kYXknIDogbnVsbCxcbiAgICAgICAgICAgICAgZmxhdDogYWN0aXZlICE9PSB0cnVlLFxuICAgICAgICAgICAgICBsYWJlbDogbW9udGgsXG4gICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZSA9PT0gdHJ1ZSA/IGNvbXB1dGVkQ29sb3IudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFjdGl2ZSA9PT0gdHJ1ZSA/IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0Rpc2FibGVkKGkgKyAxKSxcbiAgICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ21vbnRoIycgKyBpLCB7IG9uQ2xpY2s6ICgpID0+IHsgc2V0TW9udGgoaSArIDEpIH0gfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9wcy55ZWFyc0luTW9udGhWaWV3ID09PSB0cnVlICYmIGNvbnRlbnQudW5zaGlmdChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncm93IG5vLXdyYXAgZnVsbC13aWR0aCcgfSwgW1xuICAgICAgICAgICAgZ2V0TmF2aWdhdGlvbih7XG4gICAgICAgICAgICAgIGxhYmVsOiB2aWV3TW9kZWwudmFsdWUueWVhcixcbiAgICAgICAgICAgICAgdHlwZTogJ1llYXJzJyxcbiAgICAgICAgICAgICAga2V5OiB2aWV3TW9kZWwudmFsdWUueWVhcixcbiAgICAgICAgICAgICAgZGlyOiB5ZWFyRGlyZWN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICBnb1RvOiBnb1RvWWVhcixcbiAgICAgICAgICAgICAgYm91bmRhcmllczogbmF2Qm91bmRhcmllcy52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgICBjbHM6ICcgY29sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdtb250aHMtdmlldycsXG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX3ZpZXcgcS1kYXRlX19tb250aHMgZmxleCBmbGV4LWNlbnRlcidcbiAgICAgICAgfSwgY29udGVudClcbiAgICAgIH0sXG5cbiAgICAgIFllYXJzICgpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0WWVhci52YWx1ZSxcbiAgICAgICAgICBzdG9wID0gc3RhcnQgKyB5ZWFyc0ludGVydmFsLFxuICAgICAgICAgIHllYXJzID0gW11cblxuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0geWVhciA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChtaW5OYXYudmFsdWUgIT09IG51bGwgJiYgbWluTmF2LnZhbHVlLnllYXIgPiB5ZWFyKVxuICAgICAgICAgICAgfHwgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtYXhOYXYudmFsdWUueWVhciA8IHllYXIpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IHN0b3A7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyID09PSBpXG5cbiAgICAgICAgICB5ZWFycy5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9feWVhcnMtaXRlbSBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICd5cicgKyBpLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB0b2RheS52YWx1ZS55ZWFyID09PSBpID8gJ3EtZGF0ZV9fdG9kYXknIDogbnVsbCxcbiAgICAgICAgICAgICAgICBmbGF0OiAhYWN0aXZlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBpLFxuICAgICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlID09PSB0cnVlID8gY29tcHV0ZWRDb2xvci52YWx1ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhY3RpdmUgPT09IHRydWUgPyBjb21wdXRlZFRleHRDb2xvci52YWx1ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoaSksXG4gICAgICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3lyIycgKyBpLCB7IG9uQ2xpY2s6ICgpID0+IHsgc2V0WWVhcihpKSB9IH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX3ZpZXcgcS1kYXRlX195ZWFycyBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdjb2wtYXV0bydcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgICBpY29uOiBkYXRlQXJyb3cudmFsdWVbIDAgXSxcbiAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0Rpc2FibGVkKHN0YXJ0KSxcbiAgICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3ktJywgeyBvbkNsaWNrOiAoKSA9PiB7IHN0YXJ0WWVhci52YWx1ZSAtPSB5ZWFyc0ludGVydmFsIH0gfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG5cbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9feWVhcnMtY29udGVudCBjb2wgc2VsZi1zdHJldGNoIHJvdyBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgfSwgeWVhcnMpLFxuXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdjb2wtYXV0bydcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgICBpY29uOiBkYXRlQXJyb3cudmFsdWVbIDEgXSxcbiAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0Rpc2FibGVkKHN0b3ApLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgneSsnLCB7IG9uQ2xpY2s6ICgpID0+IHsgc3RhcnRZZWFyLnZhbHVlICs9IHllYXJzSW50ZXJ2YWwgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGF5Q2xpY2sgKGRheUluZGV4KSB7XG4gICAgICBjb25zdCBkYXkgPSB7IC4uLnZpZXdNb2RlbC52YWx1ZSwgZGF5OiBkYXlJbmRleCB9XG5cbiAgICAgIGlmIChwcm9wcy5yYW5nZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdG9nZ2xlRGF0ZShkYXksIHZpZXdNb250aEhhc2gudmFsdWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZWRpdFJhbmdlLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRheVByb3BzID0gZGF5cy52YWx1ZS5maW5kKGRheSA9PiBkYXkuZmlsbCAhPT0gdHJ1ZSAmJiBkYXkuaSA9PT0gZGF5SW5kZXgpXG5cbiAgICAgICAgaWYgKHByb3BzLm5vVW5zZXQgIT09IHRydWUgJiYgZGF5UHJvcHMucmFuZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHJlbW92ZUZyb21Nb2RlbCh7IHRhcmdldDogZGF5LCBmcm9tOiBkYXlQcm9wcy5yYW5nZS5mcm9tLCB0bzogZGF5UHJvcHMucmFuZ2UudG8gfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXlQcm9wcy5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJlbW92ZUZyb21Nb2RlbChkYXkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbml0SGFzaCA9IGdldERheUhhc2goZGF5KVxuXG4gICAgICAgIGVkaXRSYW5nZS52YWx1ZSA9IHtcbiAgICAgICAgICBpbml0OiBkYXksXG4gICAgICAgICAgaW5pdEhhc2gsXG4gICAgICAgICAgZmluYWw6IGRheSxcbiAgICAgICAgICBmaW5hbEhhc2g6IGluaXRIYXNoXG4gICAgICAgIH1cblxuICAgICAgICBlbWl0KCdyYW5nZVN0YXJ0JywgZ2V0U2hvcnREYXRlKGRheSkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBpbml0SGFzaCA9IGVkaXRSYW5nZS52YWx1ZS5pbml0SGFzaCxcbiAgICAgICAgICBmaW5hbEhhc2ggPSBnZXREYXlIYXNoKGRheSksXG4gICAgICAgICAgcGF5bG9hZCA9IGluaXRIYXNoIDw9IGZpbmFsSGFzaFxuICAgICAgICAgICAgPyB7IGZyb206IGVkaXRSYW5nZS52YWx1ZS5pbml0LCB0bzogZGF5IH1cbiAgICAgICAgICAgIDogeyBmcm9tOiBkYXksIHRvOiBlZGl0UmFuZ2UudmFsdWUuaW5pdCB9XG5cbiAgICAgICAgZWRpdFJhbmdlLnZhbHVlID0gbnVsbFxuICAgICAgICBhZGRUb01vZGVsKGluaXRIYXNoID09PSBmaW5hbEhhc2ggPyBkYXkgOiB7IHRhcmdldDogZGF5LCAuLi5wYXlsb2FkIH0pXG5cbiAgICAgICAgZW1pdCgncmFuZ2VFbmQnLCB7XG4gICAgICAgICAgZnJvbTogZ2V0U2hvcnREYXRlKHBheWxvYWQuZnJvbSksXG4gICAgICAgICAgdG86IGdldFNob3J0RGF0ZShwYXlsb2FkLnRvKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGF5TW91c2VvdmVyIChkYXlJbmRleCkge1xuICAgICAgaWYgKGVkaXRSYW5nZS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaW5hbCA9IHsgLi4udmlld01vZGVsLnZhbHVlLCBkYXk6IGRheUluZGV4IH1cblxuICAgICAgICBPYmplY3QuYXNzaWduKGVkaXRSYW5nZS52YWx1ZSwge1xuICAgICAgICAgIGZpbmFsLFxuICAgICAgICAgIGZpbmFsSGFzaDogZ2V0RGF5SGFzaChmaW5hbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzZXRUb2RheSwgc2V0Vmlldywgb2Zmc2V0Q2FsZW5kYXIsIHNldENhbGVuZGFyVG8sIHNldEVkaXRpbmdSYW5nZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19jb250ZW50IGNvbCByZWxhdGl2ZS1wb3NpdGlvbidcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tZmFkZSdcbiAgICAgICAgICB9LCByZW5kZXJWaWV3c1sgdmlldy52YWx1ZSBdKVxuICAgICAgICBdKVxuICAgICAgXVxuXG4gICAgICBjb25zdCBkZWYgPSBoU2xvdChzbG90cy5kZWZhdWx0KVxuICAgICAgZGVmICE9PSB2b2lkIDAgJiYgY29udGVudC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1kYXRlX19hY3Rpb25zJyB9LCBkZWYpXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpbmplY3RGb3JtSW5wdXQoY29udGVudCwgJ3B1c2gnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBnZXRIZWFkZXIoKSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiBibHVyVGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19tYWluIGNvbCBjb2x1bW4nLFxuICAgICAgICAgIHRhYmluZGV4OiAtMVxuICAgICAgICB9LCBjb250ZW50KVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUURpYWxvZyBmcm9tICcuLi9kaWFsb2cvUURpYWxvZy5qcydcbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuXG5pbXBvcnQgdXNlQW5jaG9yLCB7IHVzZUFuY2hvclByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtYW5jaG9yL3VzZS1hbmNob3IuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGluamVjdFByb3AgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmluamVjdC1vYmotcHJvcC9pbmplY3Qtb2JqLXByb3AuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUG9wdXBQcm94eScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VBbmNob3JQcm9wcyxcblxuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDQ1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAnc2hvdycsICdoaWRlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgcG9wdXBSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBicmVha3BvaW50ID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMuYnJlYWtwb2ludCwgMTApKVxuXG4gICAgY29uc3QgeyBjYW5TaG93IH0gPSB1c2VBbmNob3IoeyBzaG93aW5nIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRUeXBlICgpIHtcbiAgICAgIHJldHVybiAkcS5zY3JlZW4ud2lkdGggPCBicmVha3BvaW50LnZhbHVlIHx8ICRxLnNjcmVlbi5oZWlnaHQgPCBicmVha3BvaW50LnZhbHVlXG4gICAgICAgID8gJ2RpYWxvZydcbiAgICAgICAgOiAnbWVudSdcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlID0gcmVmKGdldFR5cGUoKSlcblxuICAgIGNvbnN0IHBvcHVwUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0eXBlLnZhbHVlID09PSAnbWVudScgPyB7IG1heEhlaWdodDogJzk5dmgnIH0gOiB7fSlcbiAgICApXG5cbiAgICB3YXRjaCgoKSA9PiBnZXRUeXBlKCksIHZhbCA9PiB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICB0eXBlLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoZXZ0KSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgnc2hvdycsIGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkhpZGUgKGV2dCkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IGZhbHNlXG4gICAgICB0eXBlLnZhbHVlID0gZ2V0VHlwZSgpXG4gICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3cgKGV2dCkgeyBjYW5TaG93KGV2dCkgPT09IHRydWUgJiYgcG9wdXBSZWYudmFsdWUuc2hvdyhldnQpIH0sXG4gICAgICBoaWRlIChldnQpIHsgcG9wdXBSZWYudmFsdWUuaGlkZShldnQpIH0sXG4gICAgICB0b2dnbGUgKGV2dCkgeyBwb3B1cFJlZi52YWx1ZS50b2dnbGUoZXZ0KSB9XG4gICAgfSlcblxuICAgIGluamVjdFByb3AocHJveHksICdjdXJyZW50Q29tcG9uZW50JywgKCkgPT4gKHtcbiAgICAgIHR5cGU6IHR5cGUudmFsdWUsXG4gICAgICByZWY6IHBvcHVwUmVmLnZhbHVlXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVmOiBwb3B1cFJlZixcbiAgICAgICAgLi4ucG9wdXBQcm9wcy52YWx1ZSxcbiAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgIG9uU2hvdyxcbiAgICAgICAgb25IaWRlXG4gICAgICB9XG5cbiAgICAgIGxldCBjb21wb25lbnRcblxuICAgICAgaWYgKHR5cGUudmFsdWUgPT09ICdkaWFsb2cnKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IFFEaWFsb2dcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQgPSBRTWVudVxuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldCxcbiAgICAgICAgICBjb250ZXh0TWVudTogcHJvcHMuY29udGV4dE1lbnUsXG4gICAgICAgICAgbm9QYXJlbnRFdmVudDogdHJ1ZSxcbiAgICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBzbG90cy5kZWZhdWx0KVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgTG9hZGFibGVTdGF0ZSwgTG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vTG9hZGFibGVDb250cm9sbGVyJztcblxuZXhwb3J0IHR5cGUgQ29tYmluZWRBd2FpdGVyID0ge1xuICBvblN1Y2Nlc3M6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZExvYWRhYmxlQXdhaXRlcjxUIGV4dGVuZHMgTG9hZGFibGVTdGF0ZTxhbnk+W10+KFxuICAuLi5sb2FkYWJsZXM6IFRcbik6IExvYWRhYmxlU3RhdGU8dm9pZD4ge1xuICBjb25zdCBfc3RhdHVzID0gcmVmPExvYWRpbmdTdGF0dXM+KExvYWRpbmdTdGF0dXMuTm90TG9hZGVkKTtcbiAgY29uc3QgX3N0YXRlID0gcmVmPHZvaWQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgX2Vycm9yID0gcmVmPEVycm9yIHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdHVzKHN0YXR1czogTG9hZGluZ1N0YXR1cykge1xuICAgIF9zdGF0dXMudmFsdWUgPSBzdGF0dXM7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRFcnJvcihlOiBFcnJvcikge1xuICAgIF9lcnJvci52YWx1ZSA9IGU7XG4gICAgc2V0U3RhdHVzKExvYWRpbmdTdGF0dXMuRXJyb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U3VjY2VzcygpIHtcbiAgICBzZXRTdGF0dXMoTG9hZGluZ1N0YXR1cy5TdWNjZXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExvYWRpbmcoKSB7XG4gICAgc2V0U3RhdHVzKExvYWRpbmdTdGF0dXMuTG9hZGluZyk7XG4gIH1cblxuICAvLyBXYXRjaCBhbGwgbG9hZGFibGVzIGFuZCB1cGRhdGUgY29tYmluZWQgc3RhdHVzIGFjY29yZGluZ2x5XG4gIHdhdGNoKFxuICAgICgpID0+IGxvYWRhYmxlcy5tYXAobG9hZGFibGUgPT4gbG9hZGFibGUuc3RhdHVzLnZhbHVlKSxcbiAgICAoc3RhdHVzZXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXNlcy5zb21lKHN0YXR1cyA9PiBzdGF0dXMgPT09IExvYWRpbmdTdGF0dXMuTG9hZGluZykpIHtcbiAgICAgICAgc2V0TG9hZGluZygpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXNlcy5zb21lKHN0YXR1cyA9PiBzdGF0dXMgPT09IExvYWRpbmdTdGF0dXMuRXJyb3IpKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbG9hZGFibGVzLmZpbmQobG9hZGFibGUgPT4gbG9hZGFibGUuc3RhdHVzLnZhbHVlID09PSBMb2FkaW5nU3RhdHVzLkVycm9yKT8uZXJyb3IudmFsdWU7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGF0dXNlcy5ldmVyeShzdGF0dXMgPT4gc3RhdHVzID09PSBMb2FkaW5nU3RhdHVzLlN1Y2Nlc3MpKSB7XG4gICAgICAgIHNldFN1Y2Nlc3MoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0YXR1cyhMb2FkaW5nU3RhdHVzLk5vdExvYWRlZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IF9zdGF0dXMsXG4gICAgc3RhdGU6IF9zdGF0ZSxcbiAgICBlcnJvcjogX2Vycm9yLFxuICAgIHNldEVycm9yLFxuICAgIHNldFN1Y2Nlc3MsXG4gICAgc2V0TG9hZGluZyxcbiAgfSBhcyBMb2FkYWJsZVN0YXRlPHZvaWQ+O1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIFRsbWNQbGF5ZXJCYWNrZW5kXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlID0ge1xuICAgIE5vbmU6ICdOb25lJyxcbiAgICBBbGJ1bTogJ0FsYnVtJyxcbiAgICBDaXJjbGU6ICdDaXJjbGUnXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUgPSB0eXBlb2YgVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGVba2V5b2YgdHlwZW9mIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGVGcm9tSlNPTihqc29uOiBhbnkpOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZUZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUge1xuICAgIHJldHVybiBqc29uIGFzIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGVUb0pTT04odmFsdWU/OiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZSB8IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2YWx1ZSBhcyBhbnk7XG59XG5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZFxuICAgIGZsYXRcbiAgICBib3JkZXJlZFxuICA+XG4gICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5TYXZlL0xvYWQgQ29uZmlndXJhdGlvbjwvZGl2PlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICA8cS1pbnB1dFxuICAgICAgICBmaWxsZWRcbiAgICAgICAgdi1tb2RlbD1cInRleHRcIlxuICAgICAgICBsYWJlbD1cIkNvbmZpZ3VyYXRpb24gTmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29uZmlndXJhdGlvbiBuYW1lXCJcbiAgICAgICAgY2xhc3M9XCJxLW1iLW1kXCJcbiAgICAgIC8+XG5cbiAgICAgIDxxLWJ0blxuICAgICAgICBsYWJlbD1cIlNhdmUgQ29uZmlndXJhdGlvblwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkNvbmZpZ3VyYXRpb25zPC9kaXY+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgIDxxLWxpc3Q+XG5cbiAgICA8L3EtbGlzdD5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcblxuXG5jb25zdCB0ZXh0ID0gcmVmKCcnKTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlPlxuICAgIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJzdGF0aWNEYXRhQXdhaXRlclwiPlxuICAgICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICA8cS1zcGlubmVyLWdlYXJzIHNpemU9XCIxMDBweFwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggcS1wYS1tZFwiPlxuICAgICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPlJhZGlvIENvbmZpZ3VyYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZWxlYXNlIERhdGUgKEFmdGVyIERhdGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5yZWxlYXNlRGF0ZUJlZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWydkYXRlJ11cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJldmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1wb3B1cC1wcm94eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1zaG93PVwic2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24taGlkZT1cInNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWRhdGUgdi1tb2RlbD1cImZpbHRlcnMucmVsZWFzZURhdGVCZWdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1wb3B1cC1wcm94eT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJ2ZXJ0aWNhbC1zZXBhcmF0b3IgcS1teC1tZCBiZy10cmFuc3BhcmVudCB0cmFuc3BhcmVudFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZWxlYXNlIERhdGUgKEJlZm9yZSBEYXRlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlcnMucmVsZWFzZURhdGVFbmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbJ2RhdGUnXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXBvcHVwLXByb3h5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXNob3c9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtZGF0ZSB2LW1vZGVsPVwiZmlsdGVycy5yZWxlYXNlRGF0ZUVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1wb3B1cC1wcm94eT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2lyY2xlIFNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJzLmNpcmNsZXNcIlxuICAgICAgICAgICAgICAgICAgICB1c2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdXNlLWNoaXBzXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LWRlYm91bmNlPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiY2lyY2xlT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIEBmaWx0ZXI9XCJjaXJjbGVGaWx0ZXJGblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBBbGJ1bXNcIlxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5vcmlnaW5hbEFsYnVtc1wiXG4gICAgICAgICAgICAgICAgICAgIHVzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICB1c2UtY2hpcHNcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJvcmlnaW5hbEFsYnVtc09wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBAZmlsdGVyPVwib3JpZ2luYWxBbGJ1bXNGaWx0ZXJGblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBUcmFja3NcIlxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5vcmlnaW5hbFRyYWNrc1wiXG4gICAgICAgICAgICAgICAgICAgIHVzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICB1c2UtY2hpcHNcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJvcmlnaW5hbFRyYWNrc09wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBAZmlsdGVyPVwib3JpZ2luYWxUcmFja3NGaWx0ZXJGblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6b3B0aW9uPVwic2NvcGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtIHYtYmluZD1cInNjb3BlLml0ZW1Qcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IHNjb3BlLm9wdC5sYWJlbCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgc2NvcGUub3B0LmFsYnVtTmFtZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBObyByZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1hLW1kXCIgLz5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd1N0cmF0aWZpY2F0aW9uSW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmF0aWZpY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5zdHJhdGlmaWNhdGlvbk1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic3RyYXRpZmljYXRpb25PcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om9wdGlvbj1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtIHYtYmluZD1cInNjb3BlLml0ZW1Qcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2NvcGUub3B0LmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNjb3BlLm9wdC50b29sdGlwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYS1tZFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFwcGx5IFJhZGlvIFNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYXBwbHlSYWRpb1NldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWNhcmQ+XG5cbiAgICAgICAgICAgIDxxLWNhcmRcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW10LW1kXCJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5SYWRpbzwvZGl2PlxuICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cImNvbC00IGNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydC9TdG9wIFJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzdGFydFJhZGlvXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNsZWFyIFJhZGlvIFRyYWNrcyBGcm9tIFF1ZXVlXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaGVjayBUb3RhbCBUcmFja3MgR2l2ZW4gUmFkaW8gU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1iLW1kXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1wYS1tZFwiPlxuICAgICAgICAgICAgPFJhZGlvQ29uZmlnU0wgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBDaXJjbGVSZWFkRHRvLCBPcmlnaW5hbEFsYnVtUmVhZER0bywgT3JpZ2luYWxUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcbmltcG9ydCBHbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXIgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9HbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXInO1xuaW1wb3J0IFJhZGlvU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1JhZGlvU2VydmljZSc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZExvYWRhYmxlQXdhaXRlciB9IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Db21iaW5lZExvYWRhYmxlQXdhaXRlcic7XG5pbXBvcnQgeyBpbmplY3QsIHJlYWN0aXZlLCByZWYsIHdhdGNoLCB0b1Jhdywgb25Nb3VudGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCBMb2FkYWJsZUVsZW1lbnQgZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlRWxlbWVudC52dWUnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXR1cyB9IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVHJhY2tRdWVyeUZpbHRlcnMgfSBmcm9tICdzcmMvbW9kZWxzL1RyYWNrUXVlcnlGaWx0ZXJzJztcbmltcG9ydCB7IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGkvc3JjJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgU3RyYXRpZmljYXRpb25Nb2RlSGVscERpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EaWFsb2dzL1N0cmF0aWZpY2F0aW9uTW9kZUhlbHBEaWFsb2cudnVlJztcbmltcG9ydCBSYWRpb0NvbmZpZ1NMIGZyb20gJ3NyYy9wYWdlX2NvbXBvbmVudC9SYWRpb1BhZ2UvUmFkaW9Db25maWdTTC52dWUnO1xuaW50ZXJmYWNlIFJhZGlvUGFnZUZpbHRlcnMge1xuICByZWxlYXNlRGF0ZUVuZDogc3RyaW5nIHwgbnVsbDtcbiAgcmVsZWFzZURhdGVCZWdpbjogc3RyaW5nIHwgbnVsbDtcbiAgY2lyY2xlczogU2VsZWN0T3B0aW9uc1tdO1xuICBvcmlnaW5hbEFsYnVtczogU2VsZWN0T3B0aW9uc1tdO1xuICBvcmlnaW5hbFRyYWNrczogVHJhY2tTZWxlY3RPcHRpb25zW107XG4gIHN0cmF0aWZpY2F0aW9uTW9kZTogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGU7XG59XG5cbi8vIEluamVjdCBzZXJ2aWNlc1xuY29uc3QgcmFkaW9TZXJ2aWNlID0gaW5qZWN0PFJhZGlvU2VydmljZT4oJ3JhZGlvU2VydmljZScpO1xuY29uc3Qgc3RhdGljRGF0YSA9IGluamVjdDxHbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXI+KCdnbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXInKTtcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbmNvbnN0IHN0YXJ0UmFkaW8gPSAoKSA9PiB7XG4gIHJhZGlvU2VydmljZT8udG9nZ2xlKCk7XG59O1xuXG5cbi8vIENyZWF0ZSBhbiBhd2FpdGVyIGZvciB0aGUgc3RhdGljIGRhdGFcbmNvbnN0IHN0YXRpY0RhdGFBd2FpdGVyID0gdXNlQ29tYmluZWRMb2FkYWJsZUF3YWl0ZXIoXG4gIHN0YXRpY0RhdGEhLmNpcmNsZXMsXG4gIHN0YXRpY0RhdGEhLm9yaWdpbmFsQWxidW1zLFxuICBzdGF0aWNEYXRhIS5vcmlnaW5hbFRyYWNrc1xuKTtcblxuY29uc3QgZmlsdGVycyA9IHJlYWN0aXZlPFJhZGlvUGFnZUZpbHRlcnM+KHtcbiAgcmVsZWFzZURhdGVFbmQ6IG51bGwgYXMgc3RyaW5nIHwgbnVsbCxcbiAgcmVsZWFzZURhdGVCZWdpbjogbnVsbCBhcyBzdHJpbmcgfCBudWxsLFxuICBjaXJjbGVzOiBbXSBhcyBTZWxlY3RPcHRpb25zW10sXG4gIG9yaWdpbmFsQWxidW1zOiBbXSBhcyBTZWxlY3RPcHRpb25zW10sXG4gIG9yaWdpbmFsVHJhY2tzOiBbXSBhcyBUcmFja1NlbGVjdE9wdGlvbnNbXSxcbiAgc3RyYXRpZmljYXRpb25Nb2RlOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZS5Ob25lLFxufSk7XG5cbmNvbnN0IHRvUmFkaW9GaWx0ZXJzID0gKCk6IFRyYWNrUXVlcnlGaWx0ZXJzID0+IHtcbiAgY29uc3QgcmF3ID0gdG9SYXcoZmlsdGVycyk7XG5cbiAgY29uc3QgcmVsZWFzZURhdGVFbmQgPSByYXcucmVsZWFzZURhdGVFbmQgPyBuZXcgRGF0ZShyYXcucmVsZWFzZURhdGVFbmQpIDogbnVsbDtcbiAgY29uc3QgcmVsZWFzZURhdGVCZWdpbiA9IHJhdy5yZWxlYXNlRGF0ZUJlZ2luID8gbmV3IERhdGUocmF3LnJlbGVhc2VEYXRlQmVnaW4pIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJlbGVhc2VEYXRlRW5kOiAocmVsZWFzZURhdGVFbmQgfHwgdW5kZWZpbmVkKSxcbiAgICByZWxlYXNlRGF0ZUJlZ2luOiAocmVsZWFzZURhdGVCZWdpbiB8fCB1bmRlZmluZWQpLFxuICAgIGNpcmNsZXM6IHJhdy5jaXJjbGVzLm1hcCgoYykgPT4gYy5rZXkpLFxuICAgIG9yaWdpbmFsQWxidW1zOiByYXcub3JpZ2luYWxBbGJ1bXMubWFwKChvYSkgPT4gb2Eua2V5KSxcbiAgICBvcmlnaW5hbFRyYWNrczogcmF3Lm9yaWdpbmFsVHJhY2tzLmZsYXRNYXAoKG90KSA9PiBvdC5hbGlhc1BrcyksXG4gICAgc3RyYXRpZmljYXRpb25Nb2RlOiByYXcuc3RyYXRpZmljYXRpb25Nb2RlLFxuICB9O1xufTtcblxuY29uc3QgZnJvbVJhZGlvRmlsdGVycyA9IChyYWRpb0ZpbHRlcnM6IFRyYWNrUXVlcnlGaWx0ZXJzKTogUmFkaW9QYWdlRmlsdGVycyA9PiB7XG4gIGNvbnN0IGNpcmNsZXMgPSByYWRpb0ZpbHRlcnM/LmNpcmNsZXM/Lm1hcCgoYykgPT4gY2lyY2xlT3B0aW9ucy52YWx1ZS5maW5kKChvKSA9PiBvLmtleSA9PT0gYykhKSA/PyBbXTtcbiAgY29uc3Qgb3JpZ2luYWxBbGJ1bXMgPSByYWRpb0ZpbHRlcnM/Lm9yaWdpbmFsQWxidW1zPy5tYXAoKG9hKSA9PlxuICAgIG9yaWdpbmFsQWxidW1zT3B0aW9ucy52YWx1ZS5maW5kKChvKSA9PiBvLmtleSA9PT0gb2EpIVxuICApID8/IFtdO1xuICBjb25zdCBvcmlnaW5hbFRyYWNrcyA9IHJhZGlvRmlsdGVycz8ub3JpZ2luYWxUcmFja3M/Lm1hcCgob3QpID0+IHtcbiAgICBjb25zdCBmb3VuZCA9IG9yaWdpbmFsVHJhY2tzT3B0aW9ucy52YWx1ZS5maW5kKChvKSA9PiBvdCBpbiBvLmFsaWFzUGtzKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09yaWdpbmFsIHRyYWNrIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pID8/IFtdO1xuXG4gIHJldHVybiB7XG4gICAgcmVsZWFzZURhdGVFbmQ6IHJhZGlvRmlsdGVycy5yZWxlYXNlRGF0ZUVuZD8udG9JU09TdHJpbmcoKSA/PyBudWxsLFxuICAgIHJlbGVhc2VEYXRlQmVnaW46IHJhZGlvRmlsdGVycy5yZWxlYXNlRGF0ZUJlZ2luPy50b0lTT1N0cmluZygpID8/IG51bGwsXG4gICAgY2lyY2xlcyxcbiAgICBvcmlnaW5hbEFsYnVtcyxcbiAgICBvcmlnaW5hbFRyYWNrcyxcbiAgICBzdHJhdGlmaWNhdGlvbk1vZGU6IHJhZGlvRmlsdGVycy5zdHJhdGlmaWNhdGlvbk1vZGUgPz8gVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUuTm9uZSxcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5UmFkaW9TZXR0aW5ncyA9ICgpID0+IHtcbiAgcmFkaW9TZXJ2aWNlPy5zZXRGaWx0ZXJzKHRvUmFkaW9GaWx0ZXJzKCkpO1xufTtcblxuY29uc3Qgc2hvd1N0cmF0aWZpY2F0aW9uSW5mbyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IFN0cmF0aWZpY2F0aW9uTW9kZUhlbHBEaWFsb2csXG4gIH0pO1xufTtcblxuY29uc3Qgc3RyYXRpZmljYXRpb25PcHRpb25zID0gW1xuICB7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZS5Ob25lLCB0b29sdGlwOiAnTm8gc3RyYXRpZmljYXRpb24nIH0sXG4gIHsgbGFiZWw6ICdBbGJ1bScsIHZhbHVlOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZS5BbGJ1bSwgdG9vbHRpcDogJ0VxdWFsIG51bWJlciBvZiB0cmFja3MgcGVyIGFsYnVtJyB9LFxuICB7IGxhYmVsOiAnQ2lyY2xlJywgdmFsdWU6IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlLkNpcmNsZSwgdG9vbHRpcDogJ0VxdWFsIG51bWJlciBvZiB0cmFja3MgcGVyIGNpcmNsZScgfSxcbl07XG5cbmludGVyZmFjZSBTZWxlY3RPcHRpb25zIHtcbiAga2V5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbnR5cGUgVHJhY2tTZWxlY3RPcHRpb25zID0ge1xuICBhbGlhc1Brczogc3RyaW5nW107XG4gIGFsYnVtTmFtZTogc3RyaW5nO1xufSAmIFNlbGVjdE9wdGlvbnM7XG5cbmNvbnN0IGNpcmNsZUR0b1RvU2VsZWN0T3B0aW9uID0gKGR0bzogQ2lyY2xlUmVhZER0byk6IFNlbGVjdE9wdGlvbnMgPT4gKHtcbiAga2V5OiBkdG8uaWQhLFxuICBsYWJlbDogZHRvLm5hbWUhLFxufSk7XG5cbmNvbnN0IG9yaWdpbmFsQWxidW1zRHRvVG9TZWxlY3RPcHRpb24gPSAoZHRvOiBPcmlnaW5hbEFsYnVtUmVhZER0byk6IFNlbGVjdE9wdGlvbnMgPT4gKHtcbiAga2V5OiBkdG8uaWQhLFxuICBsYWJlbDogZHRvLmZ1bGxOYW1lIS5lbiEsXG59KTtcbi8vIHdlIG5lZWQgYSBkaWZmZXJlbnQgZnVuY3Rpb24gZm9yIG9yaWdpbmFsIHRyYWNrcyBiZWNhdXNlIHRoZSB0aXRsZSBtYXkgY29udGFpbiBkdXBsaWNhdGVzXG4vLyAoZnJvbSBkaWZmZXJlbnQgZ2FtZXMvYWxidW1zKSwgd2UgbmVlZCB0byBtYWtlIHRoZW0gdW5pcXVlIGJ5IHRoZSB0aXRsZSwgYW5kIGVhY2ggdGl0bGVcbi8vIGNhbiBhc3NvY2lhdGUgd2l0aCBtdWx0aXBsZSBQS3NcbmNvbnN0IG9yaWdpbmFsVHJhY2tzRHRvVG9TZWxlY3RPcHRpb25zID0gKGR0b3M6IE9yaWdpbmFsVHJhY2tSZWFkRHRvW10pOiBUcmFja1NlbGVjdE9wdGlvbnNbXSA9PiB7XG4gIC8vIGZpcnN0IHNvcnQgdGhlIGR0b3MgYnkgaXQncyBpZFxuICBkdG9zLnNvcnQoKGEsIGIpID0+IGEuaWQhLmxvY2FsZUNvbXBhcmUoYi5pZCEpKTtcblxuICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgVHJhY2tTZWxlY3RPcHRpb25zPigpO1xuICBmb3IgKGNvbnN0IGR0byBvZiBkdG9zKSB7XG4gICAgY29uc3Qga2V5ID0gZHRvLnRpdGxlIS5lbiE7XG4gICAgaWYgKG1hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gbWFwLmdldChrZXkpITtcbiAgICAgIG9wdGlvbi5hbGlhc1BrcyEucHVzaChkdG8uaWQhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLnNldChrZXksIHtcbiAgICAgICAga2V5OiBkdG8uaWQhLFxuICAgICAgICBsYWJlbDoga2V5LFxuICAgICAgICBhbGlhc1BrczogW2R0by5pZCFdLFxuICAgICAgICBhbGJ1bU5hbWU6IGR0by5hbGJ1bSEuc2hvcnROYW1lIS5lbiEsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20obWFwLnZhbHVlcygpKTtcbn07XG5cbmNvbnN0IGNpcmNsZU9wdGlvbnMgPSByZWY8U2VsZWN0T3B0aW9uc1tdPihbXSk7XG5jb25zdCBvcmlnaW5hbEFsYnVtc09wdGlvbnMgPSByZWY8U2VsZWN0T3B0aW9uc1tdPihbXSk7XG5jb25zdCBvcmlnaW5hbFRyYWNrc09wdGlvbnMgPSByZWY8VHJhY2tTZWxlY3RPcHRpb25zW10+KFtdKTtcblxuY29uc3QgcmVzdG9yZUN1cnJlbnRGaWx0ZXJzID0gKCkgPT4ge1xuICBjb25zdCByYWRpb0ZpbHRlcnMgPSByYWRpb1NlcnZpY2U/LmZpbHRlcnMudmFsdWU7XG4gIGlmIChyYWRpb0ZpbHRlcnMpIHtcbiAgICBjb25zdCBleGlzdGluZ0ZpbHRlcnMgPSBmcm9tUmFkaW9GaWx0ZXJzKHJhZGlvRmlsdGVycyBhcyBUcmFja1F1ZXJ5RmlsdGVycyk7XG4gICAgT2JqZWN0LmFzc2lnbihmaWx0ZXJzLCBleGlzdGluZ0ZpbHRlcnMpO1xuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplT3B0aW9ucyA9ICgpID0+IHtcbiAgY2lyY2xlT3B0aW9ucy52YWx1ZSA9IHN0YXRpY0RhdGEhLmNpcmNsZXMuc3RhdGUhLnZhbHVlIS5tYXAoXG4gICAgKGR0bykgPT4gY2lyY2xlRHRvVG9TZWxlY3RPcHRpb24oZHRvKVxuICApO1xuXG4gIG9yaWdpbmFsQWxidW1zT3B0aW9ucy52YWx1ZSA9IHN0YXRpY0RhdGEhLm9yaWdpbmFsQWxidW1zLnN0YXRlIS52YWx1ZSEubWFwKFxuICAgIChkdG8pID0+IG9yaWdpbmFsQWxidW1zRHRvVG9TZWxlY3RPcHRpb24oZHRvKVxuICApO1xuXG4gIG9yaWdpbmFsVHJhY2tzT3B0aW9ucy52YWx1ZSA9IG9yaWdpbmFsVHJhY2tzRHRvVG9TZWxlY3RPcHRpb25zKFxuICAgIHN0YXRpY0RhdGEhLm9yaWdpbmFsVHJhY2tzLnN0YXRlIS52YWx1ZSFcbiAgKTtcbn1cblxud2F0Y2goc3RhdGljRGF0YUF3YWl0ZXIuc3RhdHVzLCAoc3RhdHVzKSA9PiB7XG4gIGlmIChzdGF0dXMgPT09IExvYWRpbmdTdGF0dXMuU3VjY2Vzcykge1xuICAgIGluaXRpYWxpemVPcHRpb25zKCk7XG4gICAgcmVzdG9yZUN1cnJlbnRGaWx0ZXJzKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBjaXJjbGVGaWx0ZXJGbiA9ICh2YWw6IHN0cmluZywgdXBkYXRlOiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpID0+IHtcbiAgdXBkYXRlKCgpID0+IHtcbiAgICBjb25zdCBuZWVkbGUgPSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICBjaXJjbGVPcHRpb25zLnZhbHVlID0gc3RhdGljRGF0YSEuY2lyY2xlcy5zdGF0ZSEudmFsdWUhLmZpbHRlcigoZHRvKSA9PiB7XG4gICAgICByZXR1cm4gZHRvLm5hbWUhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmVlZGxlKTtcbiAgICB9KS5tYXAoY2lyY2xlRHRvVG9TZWxlY3RPcHRpb24pO1xuICB9KTtcbn07XG5cbmNvbnN0IG9yaWdpbmFsQWxidW1zRmlsdGVyRm4gPSAodmFsOiBzdHJpbmcsIHVwZGF0ZTogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSA9PiB7XG4gIHVwZGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgbmVlZGxlID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgb3JpZ2luYWxBbGJ1bXNPcHRpb25zLnZhbHVlID0gc3RhdGljRGF0YSEub3JpZ2luYWxBbGJ1bXMuc3RhdGUhLnZhbHVlIS5maWx0ZXIoKGR0bykgPT4ge1xuICAgICAgcmV0dXJuIGR0by5mdWxsTmFtZSEuZW4hLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmVlZGxlKTtcbiAgICB9KS5tYXAob3JpZ2luYWxBbGJ1bXNEdG9Ub1NlbGVjdE9wdGlvbik7XG4gIH0pO1xufTtcblxuY29uc3Qgb3JpZ2luYWxUcmFja3NGaWx0ZXJGbiA9ICh2YWw6IHN0cmluZywgdXBkYXRlOiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpID0+IHtcbiAgdXBkYXRlKCgpID0+IHtcbiAgICBjb25zdCBuZWVkbGUgPSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICBvcmlnaW5hbFRyYWNrc09wdGlvbnMudmFsdWUgPSBvcmlnaW5hbFRyYWNrc0R0b1RvU2VsZWN0T3B0aW9ucyhcbiAgICAgIHN0YXRpY0RhdGEhLm9yaWdpbmFsVHJhY2tzLnN0YXRlIS52YWx1ZSEuZmlsdGVyKChkdG8pID0+IHtcbiAgICAgICAgcmV0dXJuIGR0by50aXRsZSEuZW4hLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmVlZGxlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG59O1xuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICAvLyBDaGVjayBpZiBzdGF0aWMgZGF0YSBpcyBhbHJlYWR5IGxvYWRlZFxuICBpZiAoc3RhdGljRGF0YUF3YWl0ZXIuc3RhdHVzLnZhbHVlID09PSBMb2FkaW5nU3RhdHVzLlN1Y2Nlc3MpIHtcbiAgICBpbml0aWFsaXplT3B0aW9ucygpO1xuICAgIHJlc3RvcmVDdXJyZW50RmlsdGVycygpO1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIkxhbmciLCJtYXNrIiwibG9jYWxlIiwibW9kZWwiLCJkYXRlIiwiZGF5cyIsInllYXIiLCJ2aWV3IiwiZGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBQSxpQkFB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LEVBQUUsU0FBUyxNQUFNO0FBQUEsVUFBQSxDQUNwRDtBQUFBLFFBQUE7QUFBQSxNQUNILENBQ0Q7QUFBQSxJQUFBO0FBR0gsY0FBVSxNQUFNO0FBRWQsVUFBSSxrQkFBa0IsT0FBTyxVQUFVLGNBQWMsU0FBUztBQUMxQztBQUNJO01BQ3hCO0FBQUEsSUFBQSxDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
