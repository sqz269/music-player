import { Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.cb56754b.js";
import { g as computed, b8 as Plugin, b9 as defaultLang, c as createComponent, a8 as useFormProps, a as useDarkProps, d as useDark, ab as useFormAttrs, r as ref, a7 as isObject, w as watch, m as h, aN as Transition, q as hSlot, t as getCurrentInstance, aa as useFormInject, n as nextTick, N as QBtn, ba as injectProp, Q as QDialog, bb as LoadingStatus, _ as _export_sfc, G as openBlock, H as createBlock, I as withCtx, J as createVNode, O as QCard, K as QCardSection, V as QSeparator, R as createBaseVNode, W as createTextVNode, E as defineComponent, i as inject, F as useQuasar, C as reactive, o as onMounted, L as QInput, Z as QIcon, l as withDirectives, bc as normalizeProps, bd as guardReactiveProps, $ as toDisplayString, T as unref, be as toRaw } from "./index.4bfd3d3e.js";
import { h as pad, u as useAnchorProps, f as useAnchor, a as QMenu, Q as QSelect } from "./QSelect.06d51537.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.ff3a52ba.js";
import { Q as QPage } from "./QPage.08dc5f41.js";
import { C as ClosePopup } from "./ClosePopup.2263b044.js";
function useRenderCache() {
  let cache = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (key, defaultValue) => cache[key] === void 0 ? cache[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue : cache[key],
    setCache(key, obj) {
      cache[key] = obj;
    },
    hasCache(key) {
      return cache.hasOwnProperty(key);
    },
    clearCache(key) {
      if (key !== void 0) {
        delete cache[key];
      } else {
        cache = {};
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
  modelValue: {
    required: true
  },
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
const MILLISECONDS_IN_DAY = 864e5, MILLISECONDS_IN_HOUR = 36e5, MILLISECONDS_IN_MINUTE = 6e4, defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ", token = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, reverseToken = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, regexStore = {};
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
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
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
  DDDD(date) {
    return pad(getDayOfYear(date), 3);
  },
  d(date) {
    return date.getDay();
  },
  dd(date, dateLocale) {
    return this.dddd(date, dateLocale).slice(0, 2);
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
    return this.H(date) < 12 ? "AM" : "PM";
  },
  a(date) {
    return this.H(date) < 12 ? "am" : "pm";
  },
  aa(date) {
    return this.H(date) < 12 ? "a.m." : "p.m.";
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
  if (val !== 0 && !val || val === Infinity || val === -Infinity) {
    return;
  }
  const date = new Date(val);
  if (isNaN(date)) {
    return;
  }
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
    multiple: Boolean,
    range: Boolean,
    title: String,
    subtitle: String,
    mask: {
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
    const direction = $q.lang.rtl === true ? "right" : "left";
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
      if (editRange.value === null) {
        return;
      }
      const { init, initHash, final, finalHash } = editRange.value;
      const [from, to] = initHash <= finalHash ? [init, final] : [final, init];
      const fromHash = getMonthHash(from);
      const toHash = getMonthHash(to);
      if (fromHash !== viewMonthHash.value && toHash !== viewMonthHash.value) {
        return;
      }
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
      if (props.noUnset === true) {
        return;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9QYWdlLjE5ZTIyMjRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9kYXRlLXBlcnNpYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2RhdGUvdXNlLWRhdGV0aW1lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvZGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZGF0ZS9RRGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcG9wdXAtcHJveHkvUVBvcHVwUHJveHkuanMiLCIuLi8uLi8uLi9zcmMvdXRpbHMvTG9hZGFibGUvQ29tYmluZWRMb2FkYWJsZUF3YWl0ZXIudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL3NyYy9tb2RlbHMvVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUudHMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvUmFkaW9QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIGdldENhY2hlOiBfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgICAgID8gKF8sIGRlZmF1bHRWYWx1ZSkgPT4gKFxuICAgICAgICAgIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlKClcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlXG4gICAgICAgIClcbiAgICAgIDogKGtleSwgZGVmYXVsdFZhbHVlKSA9PiAoXG4gICAgICAgICAgY2FjaGVbIGtleSBdID09PSB2b2lkIDBcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIGNhY2hlWyBrZXkgXSA9IChcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBjYWNoZVsga2V5IF1cbiAgICAgICAgKSxcblxuICAgIHNldENhY2hlIChrZXksIG9iaikge1xuICAgICAgY2FjaGVbIGtleSBdID0gb2JqXG4gICAgfSxcblxuICAgIGhhc0NhY2hlIChrZXkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpXG4gICAgfSxcblxuICAgIGNsZWFyQ2FjaGUgKGtleSkge1xuICAgICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVsga2V5IF1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWNoZSA9IHt9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWxhYWxpL2phbGFhbGktanNcblxuLypcbiAgSmFsYWFsaSB5ZWFycyBzdGFydGluZyB0aGUgMzMteWVhciBydWxlLlxuKi9cbmNvbnN0IGJyZWFrcyA9IFtcbiAgLTYxLCA5LCAzOCwgMTk5LCA0MjYsIDY4NiwgNzU2LCA4MTgsIDExMTEsIDExODEsIDEyMTAsXG4gIDE2MzUsIDIwNjAsIDIwOTcsIDIxOTIsIDIyNjIsIDIzMjQsIDIzOTQsIDI0NTYsIDMxNzhcbl1cblxuLypcbiAgQ29udmVydHMgYSBHcmVnb3JpYW4gZGF0ZSB0byBKYWxhYWxpLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0phbGFhbGkgKGd5LCBnbSwgZ2QpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChneSkgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIGdkID0gZ3kuZ2V0RGF0ZSgpXG4gICAgZ20gPSBneS5nZXRNb250aCgpICsgMVxuICAgIGd5ID0gZ3kuZ2V0RnVsbFllYXIoKVxuICB9XG4gIHJldHVybiBkMmooZzJkKGd5LCBnbSwgZ2QpKVxufVxuXG4vKlxuICBDb252ZXJ0cyBhIEphbGFhbGkgZGF0ZSB0byBHcmVnb3JpYW4uXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHRvR3JlZ29yaWFuIChqeSwgam0sIGpkKSB7XG4gIHJldHVybiBkMmcoajJkKGp5LCBqbSwgamQpKVxufVxuXG4vKlxuICBJcyB0aGlzIGEgbGVhcCB5ZWFyIG9yIG5vdD9cbiovXG5mdW5jdGlvbiBpc0xlYXBKYWxhYWxpWWVhciAoankpIHtcbiAgcmV0dXJuIGphbENhbExlYXAoankpID09PSAwXG59XG5cbi8qXG4gIE51bWJlciBvZiBkYXlzIGluIGEgZ2l2ZW4gbW9udGggaW4gYSBKYWxhYWxpIHllYXIuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGphbGFhbGlNb250aExlbmd0aCAoanksIGptKSB7XG4gIGlmIChqbSA8PSA2KSByZXR1cm4gMzFcbiAgaWYgKGptIDw9IDExKSByZXR1cm4gMzBcbiAgaWYgKGlzTGVhcEphbGFhbGlZZWFyKGp5KSkgcmV0dXJuIDMwXG4gIHJldHVybiAyOVxufVxuXG4vKlxuICAgIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyBpZiB0aGUgSmFsYWFsaSAoUGVyc2lhbikgeWVhciBpc1xuICAgIGxlYXAgKDM2Ni1kYXkgbG9uZykgb3IgaXMgdGhlIGNvbW1vbiB5ZWFyICgzNjUgZGF5cylcblxuICAgIEBwYXJhbSBqeSBKYWxhYWxpIGNhbGVuZGFyIHllYXIgKC02MSB0byAzMTc3KVxuICAgIEByZXR1cm5zIG51bWJlciBvZiB5ZWFycyBzaW5jZSB0aGUgbGFzdCBsZWFwIHllYXIgKDAgdG8gNClcbiAqL1xuZnVuY3Rpb24gamFsQ2FsTGVhcCAoankpIHtcbiAgY29uc3QgYmwgPSBicmVha3MubGVuZ3RoXG4gIGxldFxuICAgIGpwID0gYnJlYWtzWyAwIF0sXG4gICAgam0sXG4gICAganVtcCxcbiAgICBsZWFwLFxuICAgIG4sXG4gICAgaVxuXG4gIGlmIChqeSA8IGpwIHx8IGp5ID49IGJyZWFrc1sgYmwgLSAxIF0pIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEphbGFhbGkgeWVhciAnICsgankpIH1cblxuICBmb3IgKGkgPSAxOyBpIDwgYmw7IGkgKz0gMSkge1xuICAgIGptID0gYnJlYWtzWyBpIF1cbiAgICBqdW1wID0gam0gLSBqcFxuICAgIGlmIChqeSA8IGptKSB7IGJyZWFrIH1cbiAgICBqcCA9IGptXG4gIH1cbiAgbiA9IGp5IC0ganBcblxuICBpZiAoanVtcCAtIG4gPCA2KSB7IG4gPSBuIC0ganVtcCArIGRpdihqdW1wICsgNCwgMzMpICogMzMgfVxuICBsZWFwID0gbW9kKG1vZChuICsgMSwgMzMpIC0gMSwgNClcbiAgaWYgKGxlYXAgPT09IC0xKSB7XG4gICAgbGVhcCA9IDRcbiAgfVxuXG4gIHJldHVybiBsZWFwXG59XG5cbi8qXG4gIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyBpZiB0aGUgSmFsYWFsaSAoUGVyc2lhbikgeWVhciBpc1xuICBsZWFwICgzNjYtZGF5IGxvbmcpIG9yIGlzIHRoZSBjb21tb24geWVhciAoMzY1IGRheXMpLCBhbmRcbiAgZmluZHMgdGhlIGRheSBpbiBNYXJjaCAoR3JlZ29yaWFuIGNhbGVuZGFyKSBvZiB0aGUgZmlyc3RcbiAgZGF5IG9mIHRoZSBKYWxhYWxpIHllYXIgKGp5KS5cblxuICBAcGFyYW0gankgSmFsYWFsaSBjYWxlbmRhciB5ZWFyICgtNjEgdG8gMzE3NylcbiAgQHBhcmFtIHdpdGhvdXRMZWFwIHdoZW4gZG9uJ3QgbmVlZCBsZWFwICh0cnVlIG9yIGZhbHNlKSBkZWZhdWx0IGlzIGZhbHNlXG4gIEByZXR1cm5cbiAgICBsZWFwOiBudW1iZXIgb2YgeWVhcnMgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyICgwIHRvIDQpXG4gICAgZ3k6IEdyZWdvcmlhbiB5ZWFyIG9mIHRoZSBiZWdpbm5pbmcgb2YgSmFsYWFsaSB5ZWFyXG4gICAgbWFyY2g6IHRoZSBNYXJjaCBkYXkgb2YgRmFydmFyZGluIHRoZSAxc3QgKDFzdCBkYXkgb2YgankpXG4gIEBzZWU6IGh0dHA6Ly93d3cuYXN0cm8udW5pLnRvcnVuLnBsL35rYi9QYXBlcnMvRU1QL1BlcnNpYW5DLUVNUC5odG1cbiAgQHNlZTogaHR0cDovL3d3dy5mb3VybWlsYWIuY2gvZG9jdW1lbnRzL2NhbGVuZGFyL1xuKi9cbmZ1bmN0aW9uIGphbENhbCAoanksIHdpdGhvdXRMZWFwKSB7XG4gIGNvbnN0XG4gICAgYmwgPSBicmVha3MubGVuZ3RoLFxuICAgIGd5ID0gankgKyA2MjFcbiAgbGV0XG4gICAgbGVhcEogPSAtMTQsXG4gICAganAgPSBicmVha3NbIDAgXSxcbiAgICBqbSxcbiAgICBqdW1wLFxuICAgIGxlYXAsXG4gICAgbixcbiAgICBpXG5cbiAgaWYgKGp5IDwganAgfHwgankgPj0gYnJlYWtzWyBibCAtIDEgXSkgeyB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSmFsYWFsaSB5ZWFyICcgKyBqeSkgfVxuXG4gIC8vIEZpbmQgdGhlIGxpbWl0aW5nIHllYXJzIGZvciB0aGUgSmFsYWFsaSB5ZWFyIGp5LlxuICBmb3IgKGkgPSAxOyBpIDwgYmw7IGkgKz0gMSkge1xuICAgIGptID0gYnJlYWtzWyBpIF1cbiAgICBqdW1wID0gam0gLSBqcFxuICAgIGlmIChqeSA8IGptKSB7IGJyZWFrIH1cbiAgICBsZWFwSiA9IGxlYXBKICsgZGl2KGp1bXAsIDMzKSAqIDggKyBkaXYobW9kKGp1bXAsIDMzKSwgNClcbiAgICBqcCA9IGptXG4gIH1cbiAgbiA9IGp5IC0ganBcblxuICAvLyBGaW5kIHRoZSBudW1iZXIgb2YgbGVhcCB5ZWFycyBmcm9tIEFEIDYyMSB0byB0aGUgYmVnaW5uaW5nXG4gIC8vIG9mIHRoZSBjdXJyZW50IEphbGFhbGkgeWVhciBpbiB0aGUgUGVyc2lhbiBjYWxlbmRhci5cbiAgbGVhcEogPSBsZWFwSiArIGRpdihuLCAzMykgKiA4ICsgZGl2KG1vZChuLCAzMykgKyAzLCA0KVxuICBpZiAobW9kKGp1bXAsIDMzKSA9PT0gNCAmJiBqdW1wIC0gbiA9PT0gNCkgeyBsZWFwSiArPSAxIH1cblxuICAvLyBBbmQgdGhlIHNhbWUgaW4gdGhlIEdyZWdvcmlhbiBjYWxlbmRhciAodW50aWwgdGhlIHllYXIgZ3kpLlxuICBjb25zdCBsZWFwRyA9IGRpdihneSwgNCkgLSBkaXYoKGRpdihneSwgMTAwKSArIDEpICogMywgNCkgLSAxNTBcblxuICAvLyBEZXRlcm1pbmUgdGhlIEdyZWdvcmlhbiBkYXRlIG9mIEZhcnZhcmRpbiB0aGUgMXN0LlxuICBjb25zdCBtYXJjaCA9IDIwICsgbGVhcEogLSBsZWFwR1xuXG4gIC8vIEZpbmQgaG93IG1hbnkgeWVhcnMgaGF2ZSBwYXNzZWQgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyLlxuICBpZiAoIXdpdGhvdXRMZWFwKSB7XG4gICAgaWYgKGp1bXAgLSBuIDwgNikgeyBuID0gbiAtIGp1bXAgKyBkaXYoanVtcCArIDQsIDMzKSAqIDMzIH1cbiAgICBsZWFwID0gbW9kKG1vZChuICsgMSwgMzMpIC0gMSwgNClcbiAgICBpZiAobGVhcCA9PT0gLTEpIHtcbiAgICAgIGxlYXAgPSA0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWFwLFxuICAgIGd5LFxuICAgIG1hcmNoXG4gIH1cbn1cblxuLypcbiAgQ29udmVydHMgYSBkYXRlIG9mIHRoZSBKYWxhYWxpIGNhbGVuZGFyIHRvIHRoZSBKdWxpYW4gRGF5IG51bWJlci5cblxuICBAcGFyYW0gankgSmFsYWFsaSB5ZWFyICgxIHRvIDMxMDApXG4gIEBwYXJhbSBqbSBKYWxhYWxpIG1vbnRoICgxIHRvIDEyKVxuICBAcGFyYW0gamQgSmFsYWFsaSBkYXkgKDEgdG8gMjkvMzEpXG4gIEByZXR1cm4gSnVsaWFuIERheSBudW1iZXJcbiovXG5mdW5jdGlvbiBqMmQgKGp5LCBqbSwgamQpIHtcbiAgY29uc3QgciA9IGphbENhbChqeSwgdHJ1ZSlcbiAgcmV0dXJuIGcyZChyLmd5LCAzLCByLm1hcmNoKSArIChqbSAtIDEpICogMzEgLSBkaXYoam0sIDcpICogKGptIC0gNykgKyBqZCAtIDFcbn1cblxuLypcbiAgQ29udmVydHMgdGhlIEp1bGlhbiBEYXkgbnVtYmVyIHRvIGEgZGF0ZSBpbiB0aGUgSmFsYWFsaSBjYWxlbmRhci5cblxuICBAcGFyYW0gamRuIEp1bGlhbiBEYXkgbnVtYmVyXG4gIEByZXR1cm5cbiAgICBqeTogSmFsYWFsaSB5ZWFyICgxIHRvIDMxMDApXG4gICAgam06IEphbGFhbGkgbW9udGggKDEgdG8gMTIpXG4gICAgamQ6IEphbGFhbGkgZGF5ICgxIHRvIDI5LzMxKVxuKi9cbmZ1bmN0aW9uIGQyaiAoamRuKSB7XG4gIGNvbnN0IGd5ID0gZDJnKGpkbikuZ3kgLy8gQ2FsY3VsYXRlIEdyZWdvcmlhbiB5ZWFyIChneSkuXG4gIGxldFxuICAgIGp5ID0gZ3kgLSA2MjEsXG4gICAgamQsXG4gICAgam0sXG4gICAga1xuICBjb25zdFxuICAgIHIgPSBqYWxDYWwoanksIGZhbHNlKSxcbiAgICBqZG4xZiA9IGcyZChneSwgMywgci5tYXJjaClcblxuICAvLyBGaW5kIG51bWJlciBvZiBkYXlzIHRoYXQgcGFzc2VkIHNpbmNlIDEgRmFydmFyZGluLlxuICBrID0gamRuIC0gamRuMWZcbiAgaWYgKGsgPj0gMCkge1xuICAgIGlmIChrIDw9IDE4NSkge1xuICAgICAgLy8gVGhlIGZpcnN0IDYgbW9udGhzLlxuICAgICAgam0gPSAxICsgZGl2KGssIDMxKVxuICAgICAgamQgPSBtb2QoaywgMzEpICsgMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAganksXG4gICAgICAgIGptLFxuICAgICAgICBqZFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRoZSByZW1haW5pbmcgbW9udGhzLlxuICAgICAgayAtPSAxODZcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gUHJldmlvdXMgSmFsYWFsaSB5ZWFyLlxuICAgIGp5IC09IDFcbiAgICBrICs9IDE3OVxuICAgIGlmIChyLmxlYXAgPT09IDEpIHsgayArPSAxIH1cbiAgfVxuICBqbSA9IDcgKyBkaXYoaywgMzApXG4gIGpkID0gbW9kKGssIDMwKSArIDFcbiAgcmV0dXJuIHtcbiAgICBqeSxcbiAgICBqbSxcbiAgICBqZFxuICB9XG59XG5cbi8qXG4gIENhbGN1bGF0ZXMgdGhlIEp1bGlhbiBEYXkgbnVtYmVyIGZyb20gR3JlZ29yaWFuIG9yIEp1bGlhblxuICBjYWxlbmRhciBkYXRlcy4gVGhpcyBpbnRlZ2VyIG51bWJlciBjb3JyZXNwb25kcyB0byB0aGUgbm9vbiBvZlxuICB0aGUgZGF0ZSAoaS5lLiAxMiBob3VycyBvZiBVbml2ZXJzYWwgVGltZSkuXG4gIFRoZSBwcm9jZWR1cmUgd2FzIHRlc3RlZCB0byBiZSBnb29kIHNpbmNlIDEgTWFyY2gsIC0xMDAxMDAgKG9mIGJvdGhcbiAgY2FsZW5kYXJzKSB1cCB0byBhIGZldyBtaWxsaW9uIHllYXJzIGludG8gdGhlIGZ1dHVyZS5cblxuICBAcGFyYW0gZ3kgQ2FsZW5kYXIgeWVhciAoeWVhcnMgQkMgbnVtYmVyZWQgMCwgLTEsIC0yLCAuLi4pXG4gIEBwYXJhbSBnbSBDYWxlbmRhciBtb250aCAoMSB0byAxMilcbiAgQHBhcmFtIGdkIENhbGVuZGFyIGRheSBvZiB0aGUgbW9udGggKDEgdG8gMjgvMjkvMzAvMzEpXG4gIEByZXR1cm4gSnVsaWFuIERheSBudW1iZXJcbiovXG5mdW5jdGlvbiBnMmQgKGd5LCBnbSwgZ2QpIHtcbiAgbGV0IGQgPSBkaXYoKGd5ICsgZGl2KGdtIC0gOCwgNikgKyAxMDAxMDApICogMTQ2MSwgNClcbiAgICAgICsgZGl2KDE1MyAqIG1vZChnbSArIDksIDEyKSArIDIsIDUpXG4gICAgICArIGdkIC0gMzQ4NDA0MDhcbiAgZCA9IGQgLSBkaXYoZGl2KGd5ICsgMTAwMTAwICsgZGl2KGdtIC0gOCwgNiksIDEwMCkgKiAzLCA0KSArIDc1MlxuICByZXR1cm4gZFxufVxuXG4vKlxuICBDYWxjdWxhdGVzIEdyZWdvcmlhbiBhbmQgSnVsaWFuIGNhbGVuZGFyIGRhdGVzIGZyb20gdGhlIEp1bGlhbiBEYXkgbnVtYmVyXG4gIChqZG4pIGZvciB0aGUgcGVyaW9kIHNpbmNlIGpkbj0tMzQ4Mzk2NTUgKGkuZS4gdGhlIHllYXIgLTEwMDEwMCBvZiBib3RoXG4gIGNhbGVuZGFycykgdG8gc29tZSBtaWxsaW9ucyB5ZWFycyBhaGVhZCBvZiB0aGUgcHJlc2VudC5cblxuICBAcGFyYW0gamRuIEp1bGlhbiBEYXkgbnVtYmVyXG4gIEByZXR1cm5cbiAgICBneTogQ2FsZW5kYXIgeWVhciAoeWVhcnMgQkMgbnVtYmVyZWQgMCwgLTEsIC0yLCAuLi4pXG4gICAgZ206IENhbGVuZGFyIG1vbnRoICgxIHRvIDEyKVxuICAgIGdkOiBDYWxlbmRhciBkYXkgb2YgdGhlIG1vbnRoIE0gKDEgdG8gMjgvMjkvMzAvMzEpXG4qL1xuZnVuY3Rpb24gZDJnIChqZG4pIHtcbiAgbGV0IGogPSA0ICogamRuICsgMTM5MzYxNjMxXG4gIGogPSBqICsgZGl2KGRpdig0ICogamRuICsgMTgzMTg3NzIwLCAxNDYwOTcpICogMywgNCkgKiA0IC0gMzkwOFxuICBjb25zdFxuICAgIGkgPSBkaXYobW9kKGosIDE0NjEpLCA0KSAqIDUgKyAzMDgsXG4gICAgZ2QgPSBkaXYobW9kKGksIDE1MyksIDUpICsgMSxcbiAgICBnbSA9IG1vZChkaXYoaSwgMTUzKSwgMTIpICsgMSxcbiAgICBneSA9IGRpdihqLCAxNDYxKSAtIDEwMDEwMCArIGRpdig4IC0gZ20sIDYpXG4gIHJldHVybiB7XG4gICAgZ3ksXG4gICAgZ20sXG4gICAgZ2RcbiAgfVxufVxuXG4vKlxuICBVdGlsaXR5IGhlbHBlciBmdW5jdGlvbnMuXG4qL1xuXG5mdW5jdGlvbiBkaXYgKGEsIGIpIHtcbiAgcmV0dXJuIH5+KGEgLyBiKVxufVxuXG5mdW5jdGlvbiBtb2QgKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSB+fihhIC8gYikgKiBiXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdG9KYWxhYWxpIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9kYXRlLXBlcnNpYW4uanMnXG5pbXBvcnQgeyBwYWQgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5cbmNvbnN0IGNhbGVuZGFycyA9IFsgJ2dyZWdvcmlhbicsICdwZXJzaWFuJyBdXG5cbmV4cG9ydCBjb25zdCB1c2VEYXRldGltZVByb3BzID0ge1xuICBtb2RlbFZhbHVlOiB7XG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcblxuICBtYXNrOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIGxvY2FsZTogT2JqZWN0LFxuXG4gIGNhbGVuZGFyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRvcjogdiA9PiBjYWxlbmRhcnMuaW5jbHVkZXModiksXG4gICAgZGVmYXVsdDogJ2dyZWdvcmlhbidcbiAgfSxcblxuICBsYW5kc2NhcGU6IEJvb2xlYW4sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgdGV4dENvbG9yOiBTdHJpbmcsXG5cbiAgc3F1YXJlOiBCb29sZWFuLFxuICBmbGF0OiBCb29sZWFuLFxuICBib3JkZXJlZDogQm9vbGVhbixcblxuICByZWFkb25seTogQm9vbGVhbixcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgdXNlRGF0ZXRpbWVFbWl0cyA9IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlIYXNoIChkYXRlKSB7XG4gIHJldHVybiBkYXRlLnllYXIgKyAnLycgKyBwYWQoZGF0ZS5tb250aCkgKyAnLycgKyBwYWQoZGF0ZS5kYXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgJHEpIHtcbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMucmVhZG9ubHkgIT09IHRydWVcbiAgfSlcblxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAwIDogLTFcbiAgfSlcblxuICBjb25zdCBoZWFkZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjbHMgPSBbXVxuICAgIHByb3BzLmNvbG9yICE9PSB2b2lkIDAgJiYgY2xzLnB1c2goYGJnLSR7IHByb3BzLmNvbG9yIH1gKVxuICAgIHByb3BzLnRleHRDb2xvciAhPT0gdm9pZCAwICYmIGNscy5wdXNoKGB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB9YClcbiAgICByZXR1cm4gY2xzLmpvaW4oJyAnKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldExvY2FsZSAoKSB7XG4gICAgcmV0dXJuIHByb3BzLmxvY2FsZSAhPT0gdm9pZCAwXG4gICAgICA/IHsgLi4uJHEubGFuZy5kYXRlLCAuLi5wcm9wcy5sb2NhbGUgfVxuICAgICAgOiAkcS5sYW5nLmRhdGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlIChkYXRlT25seSkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgdGltZUZpbGwgPSBkYXRlT25seSA9PT0gdHJ1ZSA/IG51bGwgOiAwXG5cbiAgICBpZiAocHJvcHMuY2FsZW5kYXIgPT09ICdwZXJzaWFuJykge1xuICAgICAgY29uc3QgakRhdGUgPSB0b0phbGFhbGkoZClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IGpEYXRlLmp5LFxuICAgICAgICBtb250aDogakRhdGUuam0sXG4gICAgICAgIGRheTogakRhdGUuamRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogZC5nZXRGdWxsWWVhcigpLFxuICAgICAgbW9udGg6IGQuZ2V0TW9udGgoKSArIDEsXG4gICAgICBkYXk6IGQuZ2V0RGF0ZSgpLFxuICAgICAgaG91cjogdGltZUZpbGwsXG4gICAgICBtaW51dGU6IHRpbWVGaWxsLFxuICAgICAgc2Vjb25kOiB0aW1lRmlsbCxcbiAgICAgIG1pbGxpc2Vjb25kOiB0aW1lRmlsbFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZWRpdGFibGUsXG4gICAgdGFiaW5kZXgsXG4gICAgaGVhZGVyQ2xhc3MsXG5cbiAgICBnZXRMb2NhbGUsXG4gICAgZ2V0Q3VycmVudERhdGVcbiAgfVxufVxuIiwiLyogZXNsaW50IG5vLWZhbGx0aHJvdWdoOiAwICovXG5cbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4vaXMuanMnXG5pbXBvcnQgeyBwYWQsIGNhcGl0YWxpemUgfSBmcm9tICcuL2Zvcm1hdC5qcydcbmltcG9ydCB7IGphbGFhbGlNb250aExlbmd0aCB9IGZyb20gJy4vcHJpdmF0ZS9kYXRlLXBlcnNpYW4uanMnXG5pbXBvcnQgbGFuZywgeyBkZWZhdWx0TGFuZyB9IGZyb20gJy4uL2xhbmcuanMnXG5cbmNvbnN0XG4gIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMCxcbiAgTUlMTElTRUNPTkRTX0lOX0hPVVIgPSAzNjAwMDAwLFxuICBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDAsXG4gIGRlZmF1bHRNYXNrID0gJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWicsXG4gIHRva2VuID0gL1xcWygoPzpbXlxcXVxcXFxdfFxcXFxdfFxcXFwpKilcXF18ZHsxLDR9fE17MSw0fXxtezEsMn18d3sxLDJ9fFFvfERvfER7MSw0fXxZWSg/OllZKT98SHsxLDJ9fGh7MSwyfXxzezEsMn18U3sxLDN9fFp7MSwyfXxhezEsMn18W0FRRXhYXS9nLFxuICByZXZlcnNlVG9rZW4gPSAvKFxcW1teXFxdXSpcXF0pfGR7MSw0fXxNezEsNH18bXsxLDJ9fHd7MSwyfXxRb3xEb3xEezEsNH18WVkoPzpZWSk/fEh7MSwyfXxoezEsMn18c3sxLDJ9fFN7MSwzfXxaezEsMn18YXsxLDJ9fFtBUUV4WF18KFsuKis6P14sXFxzJHt9KCl8XFxcXF0rKS9nLFxuICByZWdleFN0b3JlID0ge31cblxuZnVuY3Rpb24gZ2V0UmVnZXhEYXRhIChtYXNrLCBkYXRlTG9jYWxlKSB7XG4gIGNvbnN0XG4gICAgZGF5cyA9ICcoJyArIGRhdGVMb2NhbGUuZGF5cy5qb2luKCd8JykgKyAnKScsXG4gICAga2V5ID0gbWFzayArIGRheXNcblxuICBpZiAocmVnZXhTdG9yZVsga2V5IF0gIT09IHZvaWQgMCkge1xuICAgIHJldHVybiByZWdleFN0b3JlWyBrZXkgXVxuICB9XG5cbiAgY29uc3RcbiAgICBkYXlzU2hvcnQgPSAnKCcgKyBkYXRlTG9jYWxlLmRheXNTaG9ydC5qb2luKCd8JykgKyAnKScsXG4gICAgbW9udGhzID0gJygnICsgZGF0ZUxvY2FsZS5tb250aHMuam9pbignfCcpICsgJyknLFxuICAgIG1vbnRoc1Nob3J0ID0gJygnICsgZGF0ZUxvY2FsZS5tb250aHNTaG9ydC5qb2luKCd8JykgKyAnKSdcblxuICBjb25zdCBtYXAgPSB7fVxuICBsZXQgaW5kZXggPSAwXG5cbiAgY29uc3QgcmVnZXhUZXh0ID0gbWFzay5yZXBsYWNlKHJldmVyc2VUb2tlbiwgbWF0Y2ggPT4ge1xuICAgIGluZGV4KytcbiAgICBzd2l0Y2ggKG1hdGNoKSB7XG4gICAgICBjYXNlICdZWSc6XG4gICAgICAgIG1hcC5ZWSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdZWVlZJzpcbiAgICAgICAgbWFwLllZWVkgPSBpbmRleFxuICAgICAgICByZXR1cm4gJygtP1xcXFxkezEsNH0pJ1xuICAgICAgY2FzZSAnTSc6XG4gICAgICAgIG1hcC5NID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIG1hcC5NID0gaW5kZXggLy8gYnVtcGluZyB0byBNXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIG1hcC5NTU0gPSBpbmRleFxuICAgICAgICByZXR1cm4gbW9udGhzU2hvcnRcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgICBtYXAuTU1NTSA9IGluZGV4XG4gICAgICAgIHJldHVybiBtb250aHNcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgICBtYXAuRCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnRG8nOlxuICAgICAgICBtYXAuRCA9IGluZGV4KysgLy8gYnVtcGluZyB0byBEXG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0oc3R8bmR8cmR8dGgpKSdcbiAgICAgIGNhc2UgJ0REJzpcbiAgICAgICAgbWFwLkQgPSBpbmRleCAvLyBidW1waW5nIHRvIERcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnSCc6XG4gICAgICAgIG1hcC5IID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdISCc6XG4gICAgICAgIG1hcC5IID0gaW5kZXggLy8gYnVtcGluZyB0byBIXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBtYXAuaCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnaGgnOlxuICAgICAgICBtYXAuaCA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gaFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdtJzpcbiAgICAgICAgbWFwLm0gPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ21tJzpcbiAgICAgICAgbWFwLm0gPSBpbmRleCAvLyBidW1waW5nIHRvIG1cbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIG1hcC5zID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdzcyc6XG4gICAgICAgIG1hcC5zID0gaW5kZXggLy8gYnVtcGluZyB0byBzXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ1MnOlxuICAgICAgICBtYXAuUyA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezF9KSdcbiAgICAgIGNhc2UgJ1NTJzpcbiAgICAgICAgbWFwLlMgPSBpbmRleCAvLyBidW1wIHRvIFNcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnU1NTJzpcbiAgICAgICAgbWFwLlMgPSBpbmRleCAvLyBidW1wIHRvIFNcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7M30pJ1xuICAgICAgY2FzZSAnQSc6XG4gICAgICAgIG1hcC5BID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoQU18UE0pJ1xuICAgICAgY2FzZSAnYSc6XG4gICAgICAgIG1hcC5hID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoYW18cG0pJ1xuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICBtYXAuYWEgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwuKSdcblxuICAgICAgY2FzZSAnZGRkJzpcbiAgICAgICAgcmV0dXJuIGRheXNTaG9ydFxuICAgICAgY2FzZSAnZGRkZCc6XG4gICAgICAgIHJldHVybiBkYXlzXG4gICAgICBjYXNlICdRJzpcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRSc6XG4gICAgICAgIHJldHVybiAnKFxcXFxkezF9KSdcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuICcoMXN0fDJuZHwzcmR8NHRoKSdcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICBjYXNlICdEREREJzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwzfSknXG4gICAgICBjYXNlICd3JzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICd3dyc6XG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcblxuICAgICAgY2FzZSAnWic6IC8vIHRvIHNwbGl0OiAoPzooWikoKSgpfChbKy1dKT8oXFxcXGR7Mn0pOj8oXFxcXGR7Mn0pKVxuICAgICAgICBtYXAuWiA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFp8WystXVxcXFxkezJ9OlxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ1paJzpcbiAgICAgICAgbWFwLlpaID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoWnxbKy1dXFxcXGR7Mn1cXFxcZHsyfSknXG5cbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICBtYXAuWCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGQrKSdcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICBtYXAueCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGR7NCx9KSdcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW5kZXgtLVxuICAgICAgICBpZiAobWF0Y2hbIDAgXSA9PT0gJ1snKSB7XG4gICAgICAgICAgbWF0Y2ggPSBtYXRjaC5zdWJzdHJpbmcoMSwgbWF0Y2gubGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXMgPSB7IG1hcCwgcmVnZXg6IG5ldyBSZWdFeHAoJ14nICsgcmVnZXhUZXh0KSB9XG4gIHJlZ2V4U3RvcmVbIGtleSBdID0gcmVzXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXREYXRlTG9jYWxlIChwYXJhbURhdGVMb2NhbGUsIGxhbmdQcm9wcykge1xuICByZXR1cm4gcGFyYW1EYXRlTG9jYWxlICE9PSB2b2lkIDBcbiAgICA/IHBhcmFtRGF0ZUxvY2FsZVxuICAgIDogKFxuICAgICAgICBsYW5nUHJvcHMgIT09IHZvaWQgMFxuICAgICAgICAgID8gbGFuZ1Byb3BzLmRhdGVcbiAgICAgICAgICA6IGRlZmF1bHRMYW5nLmRhdGVcbiAgICAgIClcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUgKG9mZnNldCwgZGVsaW1ldGVyID0gJycpIHtcbiAgY29uc3RcbiAgICBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJyxcbiAgICBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpLFxuICAgIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksXG4gICAgbWludXRlcyA9IGFic09mZnNldCAlIDYwXG5cbiAgcmV0dXJuIHNpZ24gKyBwYWQoaG91cnMpICsgZGVsaW1ldGVyICsgcGFkKG1pbnV0ZXMpXG59XG5cbmZ1bmN0aW9uIGFwcGx5WWVhck1vbnRoRGF5Q2hhbmdlIChkYXRlLCBtb2QsIHNpZ24pIHtcbiAgbGV0XG4gICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKVxuXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG5cbiAgaWYgKG1vZC55ZWFyICE9PSB2b2lkIDApIHtcbiAgICB5ZWFyICs9IHNpZ24gKiBtb2QueWVhclxuICAgIGRlbGV0ZSBtb2QueWVhclxuICB9XG5cbiAgaWYgKG1vZC5tb250aCAhPT0gdm9pZCAwKSB7XG4gICAgbW9udGggKz0gc2lnbiAqIG1vZC5tb250aFxuICAgIGRlbGV0ZSBtb2QubW9udGhcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZSgxKVxuICBkYXRlLnNldE1vbnRoKDIpXG5cbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKVxuICBkYXRlLnNldE1vbnRoKG1vbnRoKVxuICBkYXRlLnNldERhdGUoTWF0aC5taW4oZGF5LCBkYXlzSW5Nb250aChkYXRlKSkpXG5cbiAgaWYgKG1vZC5kYXRlICE9PSB2b2lkIDApIHtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBzaWduICogbW9kLmRhdGUpXG4gICAgZGVsZXRlIG1vZC5kYXRlXG4gIH1cblxuICByZXR1cm4gZGF0ZVxufVxuXG5mdW5jdGlvbiBhcHBseVllYXJNb250aERheSAoZGF0ZSwgbW9kLCBtaWRkbGUpIHtcbiAgY29uc3RcbiAgICB5ZWFyID0gbW9kLnllYXIgIT09IHZvaWQgMCA/IG1vZC55ZWFyIDogZGF0ZVsgYGdldCR7IG1pZGRsZSB9RnVsbFllYXJgIF0oKSxcbiAgICBtb250aCA9IG1vZC5tb250aCAhPT0gdm9pZCAwID8gbW9kLm1vbnRoIC0gMSA6IGRhdGVbIGBnZXQkeyBtaWRkbGUgfU1vbnRoYCBdKCksXG4gICAgbWF4RGF5ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkpLmdldERhdGUoKSxcbiAgICBkYXkgPSBNYXRoLm1pbihtYXhEYXksIG1vZC5kYXRlICE9PSB2b2lkIDAgPyBtb2QuZGF0ZSA6IGRhdGVbIGBnZXQkeyBtaWRkbGUgfURhdGVgIF0oKSlcblxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1EYXRlYCBdKDEpXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfU1vbnRoYCBdKDIpXG5cbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9RnVsbFllYXJgIF0oeWVhcilcbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9TW9udGhgIF0obW9udGgpXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfURhdGVgIF0oZGF5KVxuXG4gIGRlbGV0ZSBtb2QueWVhclxuICBkZWxldGUgbW9kLm1vbnRoXG4gIGRlbGV0ZSBtb2QuZGF0ZVxuXG4gIHJldHVybiBkYXRlXG59XG5cbmZ1bmN0aW9uIGdldENoYW5nZSAoZGF0ZSwgcmF3TW9kLCBzaWduKSB7XG4gIGNvbnN0XG4gICAgbW9kID0gbm9ybWFsaXplTW9kKHJhd01vZCksXG4gICAgZCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHQgPSBtb2QueWVhciAhPT0gdm9pZCAwIHx8IG1vZC5tb250aCAhPT0gdm9pZCAwIHx8IG1vZC5kYXRlICE9PSB2b2lkIDBcbiAgICAgID8gYXBwbHlZZWFyTW9udGhEYXlDaGFuZ2UoZCwgbW9kLCBzaWduKSAvLyByZW1vdmVzIHllYXIvbW9udGgvZGF5XG4gICAgICA6IGRcblxuICBmb3IgKGNvbnN0IGtleSBpbiBtb2QpIHtcbiAgICBjb25zdCBvcCA9IGNhcGl0YWxpemUoa2V5KVxuICAgIHRbIGBzZXQkeyBvcCB9YCBdKHRbIGBnZXQkeyBvcCB9YCBdKCkgKyBzaWduICogbW9kWyBrZXkgXSlcbiAgfVxuXG4gIHJldHVybiB0XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZCAobW9kKSB7XG4gIGNvbnN0IGFjYyA9IHsgLi4ubW9kIH1cblxuICBpZiAobW9kLnllYXJzICE9PSB2b2lkIDApIHtcbiAgICBhY2MueWVhciA9IG1vZC55ZWFyc1xuICAgIGRlbGV0ZSBhY2MueWVhcnNcbiAgfVxuXG4gIGlmIChtb2QubW9udGhzICE9PSB2b2lkIDApIHtcbiAgICBhY2MubW9udGggPSBtb2QubW9udGhzXG4gICAgZGVsZXRlIGFjYy5tb250aHNcbiAgfVxuXG4gIGlmIChtb2QuZGF5cyAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLmRhdGUgPSBtb2QuZGF5c1xuICAgIGRlbGV0ZSBhY2MuZGF5c1xuICB9XG4gIGlmIChtb2QuZGF5ICE9PSB2b2lkIDApIHtcbiAgICBhY2MuZGF0ZSA9IG1vZC5kYXlcbiAgICBkZWxldGUgYWNjLmRheVxuICB9XG5cbiAgaWYgKG1vZC5ob3VyICE9PSB2b2lkIDApIHtcbiAgICBhY2MuaG91cnMgPSBtb2QuaG91clxuICAgIGRlbGV0ZSBhY2MuaG91clxuICB9XG5cbiAgaWYgKG1vZC5taW51dGUgIT09IHZvaWQgMCkge1xuICAgIGFjYy5taW51dGVzID0gbW9kLm1pbnV0ZVxuICAgIGRlbGV0ZSBhY2MubWludXRlXG4gIH1cblxuICBpZiAobW9kLnNlY29uZCAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLnNlY29uZHMgPSBtb2Quc2Vjb25kXG4gICAgZGVsZXRlIGFjYy5zZWNvbmRcbiAgfVxuXG4gIGlmIChtb2QubWlsbGlzZWNvbmQgIT09IHZvaWQgMCkge1xuICAgIGFjYy5taWxsaXNlY29uZHMgPSBtb2QubWlsbGlzZWNvbmRcbiAgICBkZWxldGUgYWNjLm1pbGxpc2Vjb25kXG4gIH1cblxuICByZXR1cm4gYWNjXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3REYXRlIChkYXRlLCByYXdNb2QsIHV0Yykge1xuICBjb25zdFxuICAgIG1vZCA9IG5vcm1hbGl6ZU1vZChyYXdNb2QpLFxuICAgIG1pZGRsZSA9IHV0YyA9PT0gdHJ1ZSA/ICdVVEMnIDogJycsXG4gICAgZCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHQgPSBtb2QueWVhciAhPT0gdm9pZCAwIHx8IG1vZC5tb250aCAhPT0gdm9pZCAwIHx8IG1vZC5kYXRlICE9PSB2b2lkIDBcbiAgICAgID8gYXBwbHlZZWFyTW9udGhEYXkoZCwgbW9kLCBtaWRkbGUpIC8vIHJlbW92ZXMgeWVhci9tb250aC9kYXlcbiAgICAgIDogZFxuXG4gIGZvciAoY29uc3Qga2V5IGluIG1vZCkge1xuICAgIGNvbnN0IG9wID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpXG4gICAgdFsgYHNldCR7IG1pZGRsZSB9JHsgb3AgfWAgXShtb2RbIGtleSBdKVxuICB9XG5cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REYXRlIChzdHIsIG1hc2ssIGRhdGVMb2NhbGUpIHtcbiAgY29uc3QgZCA9IF9fc3BsaXREYXRlKHN0ciwgbWFzaywgZGF0ZUxvY2FsZSlcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoXG4gICAgZC55ZWFyLFxuICAgIGQubW9udGggPT09IG51bGwgPyBudWxsIDogZC5tb250aCAtIDEsXG4gICAgZC5kYXkgPT09IG51bGwgPyAxIDogZC5kYXksXG4gICAgZC5ob3VyLFxuICAgIGQubWludXRlLFxuICAgIGQuc2Vjb25kLFxuICAgIGQubWlsbGlzZWNvbmRcbiAgKVxuXG4gIGNvbnN0IHR6T2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG5cbiAgcmV0dXJuIGQudGltZXpvbmVPZmZzZXQgPT09IG51bGwgfHwgZC50aW1lem9uZU9mZnNldCA9PT0gdHpPZmZzZXRcbiAgICA/IGRhdGVcbiAgICA6IGdldENoYW5nZShkYXRlLCB7IG1pbnV0ZXM6IGQudGltZXpvbmVPZmZzZXQgLSB0ek9mZnNldCB9LCAxKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcGxpdERhdGUgKHN0ciwgbWFzaywgZGF0ZUxvY2FsZSwgY2FsZW5kYXIsIGRlZmF1bHRNb2RlbCkge1xuICBjb25zdCBkYXRlID0ge1xuICAgIHllYXI6IG51bGwsXG4gICAgbW9udGg6IG51bGwsXG4gICAgZGF5OiBudWxsLFxuICAgIGhvdXI6IG51bGwsXG4gICAgbWludXRlOiBudWxsLFxuICAgIHNlY29uZDogbnVsbCxcbiAgICBtaWxsaXNlY29uZDogbnVsbCxcbiAgICB0aW1lem9uZU9mZnNldDogbnVsbCxcbiAgICBkYXRlSGFzaDogbnVsbCxcbiAgICB0aW1lSGFzaDogbnVsbFxuICB9XG5cbiAgZGVmYXVsdE1vZGVsICE9PSB2b2lkIDAgJiYgT2JqZWN0LmFzc2lnbihkYXRlLCBkZWZhdWx0TW9kZWwpXG5cbiAgaWYgKFxuICAgIHN0ciA9PT0gdm9pZCAwXG4gICAgfHwgc3RyID09PSBudWxsXG4gICAgfHwgc3RyID09PSAnJ1xuICAgIHx8IHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICBpZiAobWFzayA9PT0gdm9pZCAwKSB7XG4gICAgbWFzayA9IGRlZmF1bHRNYXNrXG4gIH1cblxuICBjb25zdFxuICAgIGxhbmdPcHRzID0gZ2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlLCBsYW5nLnByb3BzKSxcbiAgICBtb250aHMgPSBsYW5nT3B0cy5tb250aHMsXG4gICAgbW9udGhzU2hvcnQgPSBsYW5nT3B0cy5tb250aHNTaG9ydFxuXG4gIGNvbnN0IHsgcmVnZXgsIG1hcCB9ID0gZ2V0UmVnZXhEYXRhKG1hc2ssIGxhbmdPcHRzKVxuXG4gIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKHJlZ2V4KVxuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICBsZXQgdHpTdHJpbmcgPSAnJ1xuXG4gIGlmIChtYXAuWCAhPT0gdm9pZCAwIHx8IG1hcC54ICE9PSB2b2lkIDApIHtcbiAgICBjb25zdCBzdGFtcCA9IHBhcnNlSW50KG1hdGNoWyBtYXAuWCAhPT0gdm9pZCAwID8gbWFwLlggOiBtYXAueCBdLCAxMClcblxuICAgIGlmIChpc05hTihzdGFtcCkgPT09IHRydWUgfHwgc3RhbXAgPCAwKSB7XG4gICAgICByZXR1cm4gZGF0ZVxuICAgIH1cblxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzdGFtcCAqIChtYXAuWCAhPT0gdm9pZCAwID8gMTAwMCA6IDEpKVxuXG4gICAgZGF0ZS55ZWFyID0gZC5nZXRGdWxsWWVhcigpXG4gICAgZGF0ZS5tb250aCA9IGQuZ2V0TW9udGgoKSArIDFcbiAgICBkYXRlLmRheSA9IGQuZ2V0RGF0ZSgpXG4gICAgZGF0ZS5ob3VyID0gZC5nZXRIb3VycygpXG4gICAgZGF0ZS5taW51dGUgPSBkLmdldE1pbnV0ZXMoKVxuICAgIGRhdGUuc2Vjb25kID0gZC5nZXRTZWNvbmRzKClcbiAgICBkYXRlLm1pbGxpc2Vjb25kID0gZC5nZXRNaWxsaXNlY29uZHMoKVxuICB9XG4gIGVsc2Uge1xuICAgIGlmIChtYXAuWVlZWSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLnllYXIgPSBwYXJzZUludChtYXRjaFsgbWFwLllZWVkgXSwgMTApXG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5ZWSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5ZWSBdLCAxMClcbiAgICAgIGRhdGUueWVhciA9IHkgPCAwID8geSA6IDIwMDAgKyB5XG4gICAgfVxuXG4gICAgaWYgKG1hcC5NICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubW9udGggPSBwYXJzZUludChtYXRjaFsgbWFwLk0gXSwgMTApXG4gICAgICBpZiAoZGF0ZS5tb250aCA8IDEgfHwgZGF0ZS5tb250aCA+IDEyKSB7XG4gICAgICAgIHJldHVybiBkYXRlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5NTU0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5tb250aCA9IG1vbnRoc1Nob3J0LmluZGV4T2YobWF0Y2hbIG1hcC5NTU0gXSkgKyAxXG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5NTU1NICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubW9udGggPSBtb250aHMuaW5kZXhPZihtYXRjaFsgbWFwLk1NTU0gXSkgKyAxXG4gICAgfVxuXG4gICAgaWYgKG1hcC5EICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuZGF5ID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5EIF0sIDEwKVxuXG4gICAgICBpZiAoZGF0ZS55ZWFyID09PSBudWxsIHx8IGRhdGUubW9udGggPT09IG51bGwgfHwgZGF0ZS5kYXkgPCAxKSB7XG4gICAgICAgIHJldHVybiBkYXRlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1heERheSA9IGNhbGVuZGFyICE9PSAncGVyc2lhbidcbiAgICAgICAgPyAobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCAwKSkuZ2V0RGF0ZSgpXG4gICAgICAgIDogamFsYWFsaU1vbnRoTGVuZ3RoKGRhdGUueWVhciwgZGF0ZS5tb250aClcblxuICAgICAgaWYgKGRhdGUuZGF5ID4gbWF4RGF5KSB7XG4gICAgICAgIHJldHVybiBkYXRlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcC5IICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuaG91ciA9IHBhcnNlSW50KG1hdGNoWyBtYXAuSCBdLCAxMCkgJSAyNFxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuaCAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLmhvdXIgPSBwYXJzZUludChtYXRjaFsgbWFwLmggXSwgMTApICUgMTJcbiAgICAgIGlmIChcbiAgICAgICAgKG1hcC5BICYmIG1hdGNoWyBtYXAuQSBdID09PSAnUE0nKVxuICAgICAgICB8fCAobWFwLmEgJiYgbWF0Y2hbIG1hcC5hIF0gPT09ICdwbScpXG4gICAgICAgIHx8IChtYXAuYWEgJiYgbWF0Y2hbIG1hcC5hYSBdID09PSAncC5tLicpXG4gICAgICApIHtcbiAgICAgICAgZGF0ZS5ob3VyICs9IDEyXG4gICAgICB9XG4gICAgICBkYXRlLmhvdXIgPSBkYXRlLmhvdXIgJSAyNFxuICAgIH1cblxuICAgIGlmIChtYXAubSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoWyBtYXAubSBdLCAxMCkgJSA2MFxuICAgIH1cblxuICAgIGlmIChtYXAucyAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLnNlY29uZCA9IHBhcnNlSW50KG1hdGNoWyBtYXAucyBdLCAxMCkgJSA2MFxuICAgIH1cblxuICAgIGlmIChtYXAuUyAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5TIF0sIDEwKSAqIDEwICoqICgzIC0gbWF0Y2hbIG1hcC5TIF0ubGVuZ3RoKVxuICAgIH1cblxuICAgIGlmIChtYXAuWiAhPT0gdm9pZCAwIHx8IG1hcC5aWiAhPT0gdm9pZCAwKSB7XG4gICAgICB0elN0cmluZyA9IChtYXAuWiAhPT0gdm9pZCAwID8gbWF0Y2hbIG1hcC5aIF0ucmVwbGFjZSgnOicsICcnKSA6IG1hdGNoWyBtYXAuWlogXSlcbiAgICAgIGRhdGUudGltZXpvbmVPZmZzZXQgPSAodHpTdHJpbmdbIDAgXSA9PT0gJysnID8gLTEgOiAxKSAqICg2MCAqIHR6U3RyaW5nLnNsaWNlKDEsIDMpICsgMSAqIHR6U3RyaW5nLnNsaWNlKDMsIDUpKVxuICAgIH1cbiAgfVxuXG4gIGRhdGUuZGF0ZUhhc2ggPSBwYWQoZGF0ZS55ZWFyLCA2KSArICcvJyArIHBhZChkYXRlLm1vbnRoKSArICcvJyArIHBhZChkYXRlLmRheSlcbiAgZGF0ZS50aW1lSGFzaCA9IHBhZChkYXRlLmhvdXIpICsgJzonICsgcGFkKGRhdGUubWludXRlKSArICc6JyArIHBhZChkYXRlLnNlY29uZCkgKyB0elN0cmluZ1xuXG4gIHJldHVybiBkYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkIChkYXRlKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcidcbiAgICA/IHRydWVcbiAgICA6IGlzTmFOKERhdGUucGFyc2UoZGF0ZSkpID09PSBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGREYXRlIChtb2QsIHV0Yykge1xuICByZXR1cm4gYWRqdXN0RGF0ZShuZXcgRGF0ZSgpLCBtb2QsIHV0Yylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mV2VlayAoZGF0ZSkge1xuICBjb25zdCBkb3cgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXkoKVxuICByZXR1cm4gZG93ID09PSAwID8gNyA6IGRvd1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla09mWWVhciAoZGF0ZSkge1xuICAvLyBSZW1vdmUgdGltZSBjb21wb25lbnRzIG9mIGRhdGVcbiAgY29uc3QgdGh1cnNkYXkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpXG5cbiAgLy8gQ2hhbmdlIGRhdGUgdG8gVGh1cnNkYXkgc2FtZSB3ZWVrXG4gIHRodXJzZGF5LnNldERhdGUodGh1cnNkYXkuZ2V0RGF0ZSgpIC0gKCh0aHVyc2RheS5nZXREYXkoKSArIDYpICUgNykgKyAzKVxuXG4gIC8vIFRha2UgSmFudWFyeSA0dGggYXMgaXQgaXMgYWx3YXlzIGluIHdlZWsgMSAoc2VlIElTTyA4NjAxKVxuICBjb25zdCBmaXJzdFRodXJzZGF5ID0gbmV3IERhdGUodGh1cnNkYXkuZ2V0RnVsbFllYXIoKSwgMCwgNClcblxuICAvLyBDaGFuZ2UgZGF0ZSB0byBUaHVyc2RheSBzYW1lIHdlZWtcbiAgZmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpIC0gKChmaXJzdFRodXJzZGF5LmdldERheSgpICsgNikgJSA3KSArIDMpXG5cbiAgLy8gQ2hlY2sgaWYgZGF5bGlnaHQtc2F2aW5nLXRpbWUtc3dpdGNoIG9jY3VycmVkIGFuZCBjb3JyZWN0IGZvciBpdFxuICBjb25zdCBkcyA9IHRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCkgLSBmaXJzdFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgdGh1cnNkYXkuc2V0SG91cnModGh1cnNkYXkuZ2V0SG91cnMoKSAtIGRzKVxuXG4gIC8vIE51bWJlciBvZiB3ZWVrcyBiZXR3ZWVuIHRhcmdldCBUaHVyc2RheSBhbmQgZmlyc3QgVGh1cnNkYXlcbiAgY29uc3Qgd2Vla0RpZmYgPSAodGh1cnNkYXkgLSBmaXJzdFRodXJzZGF5KSAvIChNSUxMSVNFQ09ORFNfSU5fREFZICogNylcbiAgcmV0dXJuIDEgKyBNYXRoLmZsb29yKHdlZWtEaWZmKVxufVxuXG5mdW5jdGlvbiBnZXREYXlJZGVudGlmaWVyIChkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKiAxMDAwMCArIGRhdGUuZ2V0TW9udGgoKSAqIDEwMCArIGRhdGUuZ2V0RGF0ZSgpXG59XG5cbmZ1bmN0aW9uIGdldERhdGVJZGVudGlmaWVyIChkYXRlLCBvbmx5RGF0ZSAvKiA9IGZhbHNlICovKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKVxuICByZXR1cm4gb25seURhdGUgPT09IHRydWUgPyBnZXREYXlJZGVudGlmaWVyKGQpIDogZC5nZXRUaW1lKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2VlbkRhdGVzIChkYXRlLCBmcm9tLCB0bywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0XG4gICAgZDEgPSBnZXREYXRlSWRlbnRpZmllcihmcm9tLCBvcHRzLm9ubHlEYXRlKSxcbiAgICBkMiA9IGdldERhdGVJZGVudGlmaWVyKHRvLCBvcHRzLm9ubHlEYXRlKSxcbiAgICBjdXIgPSBnZXREYXRlSWRlbnRpZmllcihkYXRlLCBvcHRzLm9ubHlEYXRlKVxuXG4gIHJldHVybiAoY3VyID4gZDEgfHwgKG9wdHMuaW5jbHVzaXZlRnJvbSA9PT0gdHJ1ZSAmJiBjdXIgPT09IGQxKSlcbiAgICAmJiAoY3VyIDwgZDIgfHwgKG9wdHMuaW5jbHVzaXZlVG8gPT09IHRydWUgJiYgY3VyID09PSBkMikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RhdGUgKGRhdGUsIG1vZCkge1xuICByZXR1cm4gZ2V0Q2hhbmdlKGRhdGUsIG1vZCwgMSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdEZyb21EYXRlIChkYXRlLCBtb2QpIHtcbiAgcmV0dXJuIGdldENoYW5nZShkYXRlLCBtb2QsIC0xKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRhdGUgKGRhdGUsIHVuaXQsIHV0Yykge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBwcmVmaXggPSBgc2V0JHsgdXRjID09PSB0cnVlID8gJ1VUQycgOiAnJyB9YFxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1vbnRoYCBdKDApXG4gICAgY2FzZSAnbW9udGgnOlxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1EYXRlYCBdKDEpXG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfUhvdXJzYCBdKDApXG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWludXRlc2AgXSgwKVxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1TZWNvbmRzYCBdKDApXG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbGxpc2Vjb25kc2AgXSgwKVxuICB9XG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZkRhdGUgKGRhdGUsIHVuaXQsIHV0Yykge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBwcmVmaXggPSBgc2V0JHsgdXRjID09PSB0cnVlID8gJ1VUQycgOiAnJyB9YFxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1vbnRoYCBdKDExKVxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICBjYXNlICdtb250aHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9RGF0ZWAgXShkYXlzSW5Nb250aCh0KSlcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9SG91cnNgIF0oMjMpXG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWludXRlc2AgXSg1OSlcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9U2Vjb25kc2AgXSg1OSlcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWlsbGlzZWNvbmRzYCBdKDk5OSlcbiAgfVxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4RGF0ZSAoZGF0ZSAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgbGV0IHQgPSBuZXcgRGF0ZShkYXRlKVxuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmZvckVhY2goZCA9PiB7XG4gICAgdCA9IE1hdGgubWF4KHQsIG5ldyBEYXRlKGQpKVxuICB9KVxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluRGF0ZSAoZGF0ZSAvKiwgLi4uYXJncyAqLykge1xuICBsZXQgdCA9IG5ldyBEYXRlKGRhdGUpXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaChkID0+IHtcbiAgICB0ID0gTWF0aC5taW4odCwgbmV3IERhdGUoZCkpXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbmZ1bmN0aW9uIGdldERpZmYgKHQsIHN1YiwgaW50ZXJ2YWwpIHtcbiAgcmV0dXJuIChcbiAgICAodC5nZXRUaW1lKCkgLSB0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKVxuICAgIC0gKHN1Yi5nZXRUaW1lKCkgLSBzdWIuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpXG4gICkgLyBpbnRlcnZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZURpZmYgKGRhdGUsIHN1YnRyYWN0LCB1bml0ID0gJ2RheXMnKSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHN1YiA9IG5ldyBEYXRlKHN1YnRyYWN0KVxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiAodC5nZXRGdWxsWWVhcigpIC0gc3ViLmdldEZ1bGxZZWFyKCkpXG5cbiAgICBjYXNlICdtb250aHMnOlxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiAodC5nZXRGdWxsWWVhcigpIC0gc3ViLmdldEZ1bGxZZWFyKCkpICogMTIgKyB0LmdldE1vbnRoKCkgLSBzdWIuZ2V0TW9udGgoKVxuXG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdkYXknKSwgc3RhcnRPZkRhdGUoc3ViLCAnZGF5JyksIE1JTExJU0VDT05EU19JTl9EQVkpXG5cbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnaG91cicpLCBzdGFydE9mRGF0ZShzdWIsICdob3VyJyksIE1JTExJU0VDT05EU19JTl9IT1VSKVxuXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdtaW51dGUnKSwgc3RhcnRPZkRhdGUoc3ViLCAnbWludXRlJyksIE1JTExJU0VDT05EU19JTl9NSU5VVEUpXG5cbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ3NlY29uZCcpLCBzdGFydE9mRGF0ZShzdWIsICdzZWNvbmQnKSwgMTAwMClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyIChkYXRlKSB7XG4gIHJldHVybiBnZXREYXRlRGlmZihkYXRlLCBzdGFydE9mRGF0ZShkYXRlLCAneWVhcicpLCAnZGF5cycpICsgMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5mZXJEYXRlRm9ybWF0IChkYXRlKSB7XG4gIHJldHVybiBpc0RhdGUoZGF0ZSkgPT09IHRydWVcbiAgICA/ICdkYXRlJ1xuICAgIDogKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJyA/ICdudW1iZXInIDogJ3N0cmluZycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlQmV0d2VlbiAoZGF0ZSwgbWluLCBtYXgpIHtcbiAgY29uc3QgdCA9IG5ldyBEYXRlKGRhdGUpXG5cbiAgaWYgKG1pbikge1xuICAgIGNvbnN0IGxvdyA9IG5ldyBEYXRlKG1pbilcbiAgICBpZiAodCA8IGxvdykge1xuICAgICAgcmV0dXJuIGxvd1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXgpIHtcbiAgICBjb25zdCBoaWdoID0gbmV3IERhdGUobWF4KVxuICAgIGlmICh0ID4gaGlnaCkge1xuICAgICAgcmV0dXJuIGhpZ2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF0ZSAoZGF0ZSwgZGF0ZTIsIHVuaXQpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgZCA9IG5ldyBEYXRlKGRhdGUyKVxuXG4gIGlmICh1bml0ID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gdC5nZXRUaW1lKCkgPT09IGQuZ2V0VGltZSgpXG4gIH1cblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgaWYgKHQuZ2V0U2Vjb25kcygpICE9PSBkLmdldFNlY29uZHMoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdtaW51dGUnOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIGlmICh0LmdldE1pbnV0ZXMoKSAhPT0gZC5nZXRNaW51dGVzKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnaG91cic6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIGlmICh0LmdldEhvdXJzKCkgIT09IGQuZ2V0SG91cnMoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdkYXknOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIGlmICh0LmdldERhdGUoKSAhPT0gZC5nZXREYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnbW9udGgnOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdtb250aHMnOlxuICAgICAgaWYgKHQuZ2V0TW9udGgoKSAhPT0gZC5nZXRNb250aCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ3llYXInOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgICBpZiAodC5nZXRGdWxsWWVhcigpICE9PSBkLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGUgaXNTYW1lRGF0ZSB1bmtub3duIHVuaXQgJHsgdW5pdCB9YClcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCAoZGF0ZSkge1xuICByZXR1cm4gKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkpLmdldERhdGUoKVxufVxuXG5mdW5jdGlvbiBnZXRPcmRpbmFsIChuKSB7XG4gIGlmIChuID49IDExICYmIG4gPD0gMTMpIHtcbiAgICByZXR1cm4gYCR7IG4gfXRoYFxuICB9XG4gIHN3aXRjaCAobiAlIDEwKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gYCR7IG4gfXN0YFxuICAgIGNhc2UgMjogcmV0dXJuIGAkeyBuIH1uZGBcbiAgICBjYXNlIDM6IHJldHVybiBgJHsgbiB9cmRgXG4gIH1cbiAgcmV0dXJuIGAkeyBuIH10aGBcbn1cblxuY29uc3QgZm9ybWF0dGVyID0ge1xuICAvLyBZZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgWVkgKGRhdGUsIGRhdGVMb2NhbGUsIGZvcmNlZFllYXIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciA8IDE5MDAgd2l0aCBuZXcgRGF0ZSgpXG4gICAgY29uc3QgeSA9IHRoaXMuWVlZWShkYXRlLCBkYXRlTG9jYWxlLCBmb3JjZWRZZWFyKSAlIDEwMFxuICAgIHJldHVybiB5ID49IDBcbiAgICAgID8gcGFkKHkpXG4gICAgICA6ICctJyArIHBhZChNYXRoLmFicyh5KSlcbiAgfSxcblxuICAvLyBZZWFyOiAxOTAwLCAxOTAxLCAuLi4sIDIwOTlcbiAgWVlZWSAoZGF0ZSwgX2RhdGVMb2NhbGUsIGZvcmNlZFllYXIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciA8IDE5MDAgd2l0aCBuZXcgRGF0ZSgpXG4gICAgcmV0dXJuIGZvcmNlZFllYXIgIT09IHZvaWQgMCAmJiBmb3JjZWRZZWFyICE9PSBudWxsXG4gICAgICA/IGZvcmNlZFllYXJcbiAgICAgIDogZGF0ZS5nZXRGdWxsWWVhcigpXG4gIH0sXG5cbiAgLy8gTW9udGg6IDEsIDIsIC4uLiwgMTJcbiAgTSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIH0sXG5cbiAgLy8gTW9udGg6IDAxLCAwMiwgLi4uLCAxMlxuICBNTSAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgfSxcblxuICAvLyBNb250aCBTaG9ydCBOYW1lOiBKYW4sIEZlYiwgLi4uXG4gIE1NTSAoZGF0ZSwgZGF0ZUxvY2FsZSkge1xuICAgIHJldHVybiBkYXRlTG9jYWxlLm1vbnRoc1Nob3J0WyBkYXRlLmdldE1vbnRoKCkgXVxuICB9LFxuXG4gIC8vIE1vbnRoIE5hbWU6IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi5cbiAgTU1NTSAoZGF0ZSwgZGF0ZUxvY2FsZSkge1xuICAgIHJldHVybiBkYXRlTG9jYWxlLm1vbnRoc1sgZGF0ZS5nZXRNb250aCgpIF1cbiAgfSxcblxuICAvLyBRdWFydGVyOiAxLCAyLCAzLCA0XG4gIFEgKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpXG4gIH0sXG5cbiAgLy8gUXVhcnRlcjogMXN0LCAybmQsIDNyZCwgNHRoXG4gIFFvIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldE9yZGluYWwodGhpcy5RKGRhdGUpKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMSwgMiwgLi4uLCAzMVxuICBEIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxc3QsIDJuZCwgLi4uLCAzMXN0XG4gIERvIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldE9yZGluYWwoZGF0ZS5nZXREYXRlKCkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAwMSwgMDIsIC4uLiwgMzFcbiAgREQgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAxLCAyLCAuLi4sIDM2NlxuICBEREQgKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKGRhdGUpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDAwMSwgMDAyLCAuLi4sIDM2NlxuICBEREREIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChnZXREYXlPZlllYXIoZGF0ZSksIDMpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IDAsIDEsIC4uLiwgNlxuICBkIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KClcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3UsIE1vLCAuLi5cbiAgZGQgKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gdGhpcy5kZGRkKGRhdGUsIGRhdGVMb2NhbGUpLnNsaWNlKDAsIDIpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1biwgTW9uLCAuLi5cbiAgZGRkIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUuZGF5c1Nob3J0WyBkYXRlLmdldERheSgpIF1cbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuZGF5LCBNb25kYXksIC4uLlxuICBkZGRkIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUuZGF5c1sgZGF0ZS5nZXREYXkoKSBdXG4gIH0sXG5cbiAgLy8gRGF5IG9mIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDdcbiAgRSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERheSgpIHx8IDdcbiAgfSxcblxuICAvLyBXZWVrIG9mIFllYXI6IDEgMiAuLi4gNTIgNTNcbiAgdyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRXZWVrT2ZZZWFyKGRhdGUpXG4gIH0sXG5cbiAgLy8gV2VlayBvZiBZZWFyOiAwMSAwMiAuLi4gNTIgNTNcbiAgd3cgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGdldFdlZWtPZlllYXIoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gSG91cjogMCwgMSwgLi4uIDIzXG4gIEggKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpXG4gIH0sXG5cbiAgLy8gSG91cjogMDAsIDAxLCAuLi4sIDIzXG4gIEhIIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpXG4gIH0sXG5cbiAgLy8gSG91cjogMSwgMiwgLi4uLCAxMlxuICBoIChkYXRlKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgICByZXR1cm4gaG91cnMgPT09IDBcbiAgICAgID8gMTJcbiAgICAgIDogKGhvdXJzID4gMTIgPyBob3VycyAlIDEyIDogaG91cnMpXG4gIH0sXG5cbiAgLy8gSG91cjogMDEsIDAyLCAuLi4sIDEyXG4gIGhoIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZCh0aGlzLmgoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwLCAxLCAuLi4sIDU5XG4gIG0gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKClcbiAgfSxcblxuICAvLyBNaW51dGU6IDAwLCAwMSwgLi4uLCA1OVxuICBtbSAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwLCAxLCAuLi4sIDU5XG4gIHMgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKClcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAwLCAwMSwgLi4uLCA1OVxuICBzcyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpXG4gIH0sXG5cbiAgLy8gMS8xMCBvZiBzZWNvbmQ6IDAsIDEsIC4uLiwgOVxuICBTIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMClcbiAgfSxcblxuICAvLyAxLzEwMCBvZiBzZWNvbmQ6IDAwLCAwMSwgLi4uLCA5OVxuICBTUyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoTWF0aC5mbG9vcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTApKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kOiAwMDAsIDAwMSwgLi4uLCA5OTlcbiAgU1NTIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKVxuICB9LFxuXG4gIC8vIE1lcmlkaWVtOiBBTSwgUE1cbiAgQSAoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLkgoZGF0ZSkgPCAxMiA/ICdBTScgOiAnUE0nXG4gIH0sXG5cbiAgLy8gTWVyaWRpZW06IGFtLCBwbVxuICBhIChkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuSChkYXRlKSA8IDEyID8gJ2FtJyA6ICdwbSdcbiAgfSxcblxuICAvLyBNZXJpZGllbTogYS5tLiwgcC5tLlxuICBhYSAoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLkgoZGF0ZSkgPCAxMiA/ICdhLm0uJyA6ICdwLm0uJ1xuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMFxuICBaIChkYXRlLCBfZGF0ZUxvY2FsZSwgX2ZvcmNlZFllYXIsIGZvcmNlZFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgY29uc3QgdHpPZmZzZXQgPSBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gdm9pZCAwIHx8IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSBudWxsXG4gICAgICA/IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgOiBmb3JjZWRUaW1lem9uZU9mZnNldFxuXG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHR6T2Zmc2V0LCAnOicpXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTAwLCArMDAwMCwgLi4uICsxMjAwXG4gIFpaIChkYXRlLCBfZGF0ZUxvY2FsZSwgX2ZvcmNlZFllYXIsIGZvcmNlZFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgY29uc3QgdHpPZmZzZXQgPSBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gdm9pZCAwIHx8IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSBudWxsXG4gICAgICA/IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgOiBmb3JjZWRUaW1lem9uZU9mZnNldFxuXG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHR6T2Zmc2V0KVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjBcbiAgWCAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMClcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjA5MDBcbiAgeCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFRpbWUoKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlICh2YWwsIG1hc2ssIGRhdGVMb2NhbGUsIF9fZm9yY2VkWWVhciwgX19mb3JjZWRUaW1lem9uZU9mZnNldCkge1xuICBpZiAoXG4gICAgKHZhbCAhPT0gMCAmJiAhdmFsKVxuICAgIHx8IHZhbCA9PT0gSW5maW5pdHlcbiAgICB8fCB2YWwgPT09IC1JbmZpbml0eVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWwpXG5cbiAgaWYgKGlzTmFOKGRhdGUpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAobWFzayA9PT0gdm9pZCAwKSB7XG4gICAgbWFzayA9IGRlZmF1bHRNYXNrXG4gIH1cblxuICBjb25zdCBsb2NhbGUgPSBnZXREYXRlTG9jYWxlKGRhdGVMb2NhbGUsIGxhbmcucHJvcHMpXG5cbiAgcmV0dXJuIG1hc2sucmVwbGFjZShcbiAgICB0b2tlbixcbiAgICAobWF0Y2gsIHRleHQpID0+IChcbiAgICAgIG1hdGNoIGluIGZvcm1hdHRlclxuICAgICAgICA/IGZvcm1hdHRlclsgbWF0Y2ggXShkYXRlLCBsb2NhbGUsIF9fZm9yY2VkWWVhciwgX19mb3JjZWRUaW1lem9uZU9mZnNldClcbiAgICAgICAgOiAodGV4dCA9PT0gdm9pZCAwID8gbWF0Y2ggOiB0ZXh0LnNwbGl0KCdcXFxcXScpLmpvaW4oJ10nKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lIChkYXRlKSB7XG4gIHJldHVybiBpc0RhdGUoZGF0ZSkgPT09IHRydWVcbiAgICA/IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKVxuICAgIDogZGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzVmFsaWQsXG4gIGV4dHJhY3REYXRlLFxuICBidWlsZERhdGUsXG4gIGdldERheU9mV2VlayxcbiAgZ2V0V2Vla09mWWVhcixcbiAgaXNCZXR3ZWVuRGF0ZXMsXG4gIGFkZFRvRGF0ZSxcbiAgc3VidHJhY3RGcm9tRGF0ZSxcbiAgYWRqdXN0RGF0ZSxcbiAgc3RhcnRPZkRhdGUsXG4gIGVuZE9mRGF0ZSxcbiAgZ2V0TWF4RGF0ZSxcbiAgZ2V0TWluRGF0ZSxcbiAgZ2V0RGF0ZURpZmYsXG4gIGdldERheU9mWWVhcixcbiAgaW5mZXJEYXRlRm9ybWF0LFxuICBnZXREYXRlQmV0d2VlbixcbiAgaXNTYW1lRGF0ZSxcbiAgZGF5c0luTW9udGgsXG4gIGZvcm1hdERhdGUsXG4gIGNsb25lXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgVHJhbnNpdGlvbiwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUmVuZGVyQ2FjaGUgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXJlbmRlci1jYWNoZS5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUF0dHJzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcbmltcG9ydCB1c2VEYXRldGltZSwgeyB1c2VEYXRldGltZVByb3BzLCB1c2VEYXRldGltZUVtaXRzLCBnZXREYXlIYXNoIH0gZnJvbSAnLi91c2UtZGF0ZXRpbWUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGZvcm1hdERhdGUsIF9fc3BsaXREYXRlLCBnZXREYXRlRGlmZiB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUuanMnXG5pbXBvcnQgeyBwYWQgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBqYWxhYWxpTW9udGhMZW5ndGgsIHRvR3JlZ29yaWFuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9kYXRlLXBlcnNpYW4uanMnXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5jb25zdCB5ZWFyc0ludGVydmFsID0gMjBcbmNvbnN0IHZpZXdzID0gWyAnQ2FsZW5kYXInLCAnWWVhcnMnLCAnTW9udGhzJyBdXG5jb25zdCB2aWV3SXNWYWxpZCA9IHYgPT4gdmlld3MuaW5jbHVkZXModilcbmNvbnN0IHllYXJNb250aFZhbGlkYXRvciA9IHYgPT4gL14tP1tcXGRdK1xcL1swLTFdXFxkJC8udGVzdCh2KVxuY29uc3QgbGluZVN0ciA9ICcgXFx1MjAxNCAnXG5cbmZ1bmN0aW9uIGdldE1vbnRoSGFzaCAoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS55ZWFyICsgJy8nICsgcGFkKGRhdGUubW9udGgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRGF0ZScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXRldGltZVByb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICByYW5nZTogQm9vbGVhbixcblxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgc3VidGl0bGU6IFN0cmluZyxcblxuICAgIG1hc2s6IHtcbiAgICAgIC8vIHRoaXMgbWFzayBpcyBmb3JjZWRcbiAgICAgIC8vIHdoZW4gdXNpbmcgcGVyc2lhbiBjYWxlbmRhclxuICAgICAgZGVmYXVsdDogJ1lZWVkvTU0vREQnXG4gICAgfSxcblxuICAgIGRlZmF1bHRZZWFyTW9udGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogeWVhck1vbnRoVmFsaWRhdG9yXG4gICAgfSxcblxuICAgIHllYXJzSW5Nb250aFZpZXc6IEJvb2xlYW4sXG5cbiAgICBldmVudHM6IFsgQXJyYXksIEZ1bmN0aW9uIF0sXG4gICAgZXZlbnRDb2xvcjogWyBTdHJpbmcsIEZ1bmN0aW9uIF0sXG5cbiAgICBlbWl0SW1tZWRpYXRlbHk6IEJvb2xlYW4sXG5cbiAgICBvcHRpb25zOiBbIEFycmF5LCBGdW5jdGlvbiBdLFxuXG4gICAgbmF2aWdhdGlvbk1pblllYXJNb250aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB5ZWFyTW9udGhWYWxpZGF0b3JcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbk1heFllYXJNb250aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB5ZWFyTW9udGhWYWxpZGF0b3JcbiAgICB9LFxuXG4gICAgbm9VbnNldDogQm9vbGVhbixcblxuICAgIGZpcnN0RGF5T2ZXZWVrOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgdG9kYXlCdG46IEJvb2xlYW4sXG4gICAgbWluaW1hbDogQm9vbGVhbixcbiAgICBkZWZhdWx0Vmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ0NhbGVuZGFyJyxcbiAgICAgIHZhbGlkYXRvcjogdmlld0lzVmFsaWRcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VEYXRldGltZUVtaXRzLFxuICAgICdyYW5nZVN0YXJ0JywgJ3JhbmdlRW5kJywgJ25hdmlnYXRpb24nXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGdldENhY2hlIH0gPSB1c2VSZW5kZXJDYWNoZSgpXG4gICAgY29uc3QgeyB0YWJpbmRleCwgaGVhZGVyQ2xhc3MsIGdldExvY2FsZSwgZ2V0Q3VycmVudERhdGUgfSA9IHVzZURhdGV0aW1lKHByb3BzLCAkcSlcblxuICAgIGxldCBsYXN0RW1pdFZhbHVlXG5cbiAgICBjb25zdCBmb3JtQXR0cnMgPSB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgaW5uZXJNYXNrID0gcmVmKGdldE1hc2soKSlcbiAgICBjb25zdCBpbm5lckxvY2FsZSA9IHJlZihnZXRMb2NhbGUoKSlcblxuICAgIGNvbnN0IG1hc2sgPSBjb21wdXRlZCgoKSA9PiBnZXRNYXNrKCkpXG4gICAgY29uc3QgbG9jYWxlID0gY29tcHV0ZWQoKCkgPT4gZ2V0TG9jYWxlKCkpXG5cbiAgICBjb25zdCB0b2RheSA9IGNvbXB1dGVkKCgpID0+IGdldEN1cnJlbnREYXRlKCkpXG5cbiAgICAvLyBtb2RlbCBvZiBjdXJyZW50IGNhbGVuZGFyIHZpZXc6XG4gICAgY29uc3Qgdmlld01vZGVsID0gcmVmKGdldFZpZXdNb2RlbChpbm5lck1hc2sudmFsdWUsIGlubmVyTG9jYWxlLnZhbHVlKSlcblxuICAgIGNvbnN0IHZpZXcgPSByZWYocHJvcHMuZGVmYXVsdFZpZXcpXG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCdcbiAgICBjb25zdCBtb250aERpcmVjdGlvbiA9IHJlZihkaXJlY3Rpb24udmFsdWUpXG4gICAgY29uc3QgeWVhckRpcmVjdGlvbiA9IHJlZihkaXJlY3Rpb24udmFsdWUpXG5cbiAgICBjb25zdCB5ZWFyID0gdmlld01vZGVsLnZhbHVlLnllYXJcbiAgICBjb25zdCBzdGFydFllYXIgPSByZWYoeWVhciAtICh5ZWFyICUgeWVhcnNJbnRlcnZhbCkgLSAoeWVhciA8IDAgPyB5ZWFyc0ludGVydmFsIDogMCkpXG4gICAgY29uc3QgZWRpdFJhbmdlID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IHByb3BzLmxhbmRzY2FwZSA9PT0gdHJ1ZSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0J1xuICAgICAgcmV0dXJuIGBxLWRhdGUgcS1kYXRlLS0keyB0eXBlIH0gcS1kYXRlLS0keyB0eXBlIH0tJHsgcHJvcHMubWluaW1hbCA9PT0gdHJ1ZSA/ICdtaW5pbWFsJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWRhdGUtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1kYXRlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWRhdGUtLXNxdWFyZSBuby1ib3JkZXItcmFkaXVzJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLWRhdGUtLWZsYXQgbm8tc2hhZG93JyA6ICcnKVxuICAgICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUgPyAnIHEtZGF0ZS0tcmVhZG9ubHknIDogJycpKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wdXRlZENvbG9yID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmNvbG9yIHx8ICdwcmltYXJ5J1xuICAgIH0pXG5cbiAgICBjb25zdCBjb21wdXRlZFRleHRDb2xvciA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy50ZXh0Q29sb3IgfHwgJ3doaXRlJ1xuICAgIH0pXG5cbiAgICBjb25zdCBpc0ltbWVkaWF0ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5lbWl0SW1tZWRpYXRlbHkgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm11bHRpcGxlICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5yYW5nZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRNb2RlbCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgIDogKHByb3BzLm1vZGVsVmFsdWUgIT09IG51bGwgJiYgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdm9pZCAwID8gWyBwcm9wcy5tb2RlbFZhbHVlIF0gOiBbXSlcbiAgICApKVxuXG4gICAgY29uc3QgZGF5c01vZGVsID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIG5vcm1hbGl6ZWRNb2RlbC52YWx1ZVxuICAgICAgICAuZmlsdGVyKGRhdGUgPT4gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAubWFwKGRhdGUgPT4gZGVjb2RlU3RyaW5nKGRhdGUsIGlubmVyTWFzay52YWx1ZSwgaW5uZXJMb2NhbGUudmFsdWUpKVxuICAgICAgICAuZmlsdGVyKGRhdGUgPT5cbiAgICAgICAgICBkYXRlLmRhdGVIYXNoICE9PSBudWxsXG4gICAgICAgICAgJiYgZGF0ZS5kYXkgIT09IG51bGxcbiAgICAgICAgICAmJiBkYXRlLm1vbnRoICE9PSBudWxsXG4gICAgICAgICAgJiYgZGF0ZS55ZWFyICE9PSBudWxsXG4gICAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCByYW5nZU1vZGVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZm4gPSBkYXRlID0+IGRlY29kZVN0cmluZyhkYXRlLCBpbm5lck1hc2sudmFsdWUsIGlubmVyTG9jYWxlLnZhbHVlKVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRNb2RlbC52YWx1ZVxuICAgICAgICAuZmlsdGVyKGRhdGUgPT4gaXNPYmplY3QoZGF0ZSkgPT09IHRydWUgJiYgZGF0ZS5mcm9tICE9PSB2b2lkIDAgJiYgZGF0ZS50byAhPT0gdm9pZCAwKVxuICAgICAgICAubWFwKHJhbmdlID0+ICh7IGZyb206IGZuKHJhbmdlLmZyb20pLCB0bzogZm4ocmFuZ2UudG8pIH0pKVxuICAgICAgICAuZmlsdGVyKHJhbmdlID0+IHJhbmdlLmZyb20uZGF0ZUhhc2ggIT09IG51bGwgJiYgcmFuZ2UudG8uZGF0ZUhhc2ggIT09IG51bGwgJiYgcmFuZ2UuZnJvbS5kYXRlSGFzaCA8IHJhbmdlLnRvLmRhdGVIYXNoKVxuICAgIH0pXG5cbiAgICBjb25zdCBnZXROYXRpdmVEYXRlRm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jYWxlbmRhciAhPT0gJ3BlcnNpYW4nXG4gICAgICAgID8gbW9kZWwgPT4gbmV3IERhdGUobW9kZWwueWVhciwgbW9kZWwubW9udGggLSAxLCBtb2RlbC5kYXkpXG4gICAgICAgIDogbW9kZWwgPT4ge1xuICAgICAgICAgIGNvbnN0IGdEYXRlID0gdG9HcmVnb3JpYW4obW9kZWwueWVhciwgbW9kZWwubW9udGgsIG1vZGVsLmRheSlcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZ0RhdGUuZ3ksIGdEYXRlLmdtIC0gMSwgZ0RhdGUuZ2QpXG4gICAgICAgIH1cbiAgICApKVxuXG4gICAgY29uc3QgZW5jb2RlT2JqZWN0Rm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jYWxlbmRhciA9PT0gJ3BlcnNpYW4nXG4gICAgICAgID8gZ2V0RGF5SGFzaFxuICAgICAgICA6IChkYXRlLCBtYXNrLCBsb2NhbGUpID0+IGZvcm1hdERhdGUoXG4gICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgZGF0ZS55ZWFyLFxuICAgICAgICAgICAgICBkYXRlLm1vbnRoIC0gMSxcbiAgICAgICAgICAgICAgZGF0ZS5kYXksXG4gICAgICAgICAgICAgIGRhdGUuaG91cixcbiAgICAgICAgICAgICAgZGF0ZS5taW51dGUsXG4gICAgICAgICAgICAgIGRhdGUuc2Vjb25kLFxuICAgICAgICAgICAgICBkYXRlLm1pbGxpc2Vjb25kXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFzayA9PT0gdm9pZCAwID8gaW5uZXJNYXNrLnZhbHVlIDogbWFzayxcbiAgICAgICAgICAgIGxvY2FsZSA9PT0gdm9pZCAwID8gaW5uZXJMb2NhbGUudmFsdWUgOiBsb2NhbGUsXG4gICAgICAgICAgICBkYXRlLnllYXIsXG4gICAgICAgICAgICBkYXRlLnRpbWV6b25lT2Zmc2V0XG4gICAgICAgICAgKVxuICAgICkpXG5cbiAgICBjb25zdCBkYXlzSW5Nb2RlbCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBkYXlzTW9kZWwudmFsdWUubGVuZ3RoICsgcmFuZ2VNb2RlbC52YWx1ZS5yZWR1Y2UoXG4gICAgICAgIChhY2MsIHJhbmdlKSA9PiBhY2MgKyAxICsgZ2V0RGF0ZURpZmYoXG4gICAgICAgICAgZ2V0TmF0aXZlRGF0ZUZuLnZhbHVlKHJhbmdlLnRvKSxcbiAgICAgICAgICBnZXROYXRpdmVEYXRlRm4udmFsdWUocmFuZ2UuZnJvbSlcbiAgICAgICAgKSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnRpdGxlICE9PSB2b2lkIDAgJiYgcHJvcHMudGl0bGUgIT09IG51bGwgJiYgcHJvcHMudGl0bGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy50aXRsZVxuICAgICAgfVxuXG4gICAgICBpZiAoZWRpdFJhbmdlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZWRpdFJhbmdlLnZhbHVlLmluaXRcbiAgICAgICAgY29uc3QgZGF0ZSA9IGdldE5hdGl2ZURhdGVGbi52YWx1ZShtb2RlbClcblxuICAgICAgICByZXR1cm4gaW5uZXJMb2NhbGUudmFsdWUuZGF5c1Nob3J0WyBkYXRlLmdldERheSgpIF0gKyAnLCAnXG4gICAgICAgICAgKyBpbm5lckxvY2FsZS52YWx1ZS5tb250aHNTaG9ydFsgbW9kZWwubW9udGggLSAxIF0gKyAnICdcbiAgICAgICAgICArIG1vZGVsLmRheSArIGxpbmVTdHIgKyAnPydcbiAgICAgIH1cblxuICAgICAgaWYgKGRheXNJbk1vZGVsLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsaW5lU3RyXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXlzSW5Nb2RlbC52YWx1ZSA+IDEpIHtcbiAgICAgICAgcmV0dXJuIGAkeyBkYXlzSW5Nb2RlbC52YWx1ZSB9ICR7IGlubmVyTG9jYWxlLnZhbHVlLnBsdXJhbERheSB9YFxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2RlbCA9IGRheXNNb2RlbC52YWx1ZVsgMCBdXG4gICAgICBjb25zdCBkYXRlID0gZ2V0TmF0aXZlRGF0ZUZuLnZhbHVlKG1vZGVsKVxuXG4gICAgICBpZiAoaXNOYU4oZGF0ZS52YWx1ZU9mKCkpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBsaW5lU3RyXG4gICAgICB9XG5cbiAgICAgIGlmIChpbm5lckxvY2FsZS52YWx1ZS5oZWFkZXJUaXRsZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBpbm5lckxvY2FsZS52YWx1ZS5oZWFkZXJUaXRsZShkYXRlLCBtb2RlbClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlubmVyTG9jYWxlLnZhbHVlLmRheXNTaG9ydFsgZGF0ZS5nZXREYXkoKSBdICsgJywgJ1xuICAgICAgICArIGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0WyBtb2RlbC5tb250aCAtIDEgXSArICcgJ1xuICAgICAgICArIG1vZGVsLmRheVxuICAgIH0pXG5cbiAgICBjb25zdCBtaW5TZWxlY3RlZE1vZGVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbW9kZWwgPSBkYXlzTW9kZWwudmFsdWUuY29uY2F0KHJhbmdlTW9kZWwudmFsdWUubWFwKHJhbmdlID0+IHJhbmdlLmZyb20pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyIHx8IGEubW9udGggLSBiLm1vbnRoKVxuXG4gICAgICByZXR1cm4gbW9kZWxbIDAgXVxuICAgIH0pXG5cbiAgICBjb25zdCBtYXhTZWxlY3RlZE1vZGVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbW9kZWwgPSBkYXlzTW9kZWwudmFsdWUuY29uY2F0KHJhbmdlTW9kZWwudmFsdWUubWFwKHJhbmdlID0+IHJhbmdlLnRvKSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIueWVhciAtIGEueWVhciB8fCBiLm1vbnRoIC0gYS5tb250aClcblxuICAgICAgcmV0dXJuIG1vZGVsWyAwIF1cbiAgICB9KVxuXG4gICAgY29uc3QgaGVhZGVyU3VidGl0bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuc3VidGl0bGUgIT09IHZvaWQgMCAmJiBwcm9wcy5zdWJ0aXRsZSAhPT0gbnVsbCAmJiBwcm9wcy5zdWJ0aXRsZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnN1YnRpdGxlXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXlzSW5Nb2RlbC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbGluZVN0clxuICAgICAgfVxuXG4gICAgICBpZiAoZGF5c0luTW9kZWwudmFsdWUgPiAxKSB7XG4gICAgICAgIGNvbnN0IGZyb20gPSBtaW5TZWxlY3RlZE1vZGVsLnZhbHVlXG4gICAgICAgIGNvbnN0IHRvID0gbWF4U2VsZWN0ZWRNb2RlbC52YWx1ZVxuICAgICAgICBjb25zdCBtb250aCA9IGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0XG5cbiAgICAgICAgcmV0dXJuIG1vbnRoWyBmcm9tLm1vbnRoIC0gMSBdICsgKFxuICAgICAgICAgIGZyb20ueWVhciAhPT0gdG8ueWVhclxuICAgICAgICAgICAgPyAnICcgKyBmcm9tLnllYXIgKyBsaW5lU3RyICsgbW9udGhbIHRvLm1vbnRoIC0gMSBdICsgJyAnXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICBmcm9tLm1vbnRoICE9PSB0by5tb250aFxuICAgICAgICAgICAgICAgICAgPyBsaW5lU3RyICsgbW9udGhbIHRvLm1vbnRoIC0gMSBdXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgKSArICcgJyArIHRvLnllYXJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRheXNNb2RlbC52YWx1ZVsgMCBdLnllYXJcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0ZUFycm93ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWyAkcS5pY29uU2V0LmRhdGV0aW1lLmFycm93TGVmdCwgJHEuaWNvblNldC5kYXRldGltZS5hcnJvd1JpZ2h0IF1cbiAgICAgIHJldHVybiAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHZhbC5yZXZlcnNlKCkgOiB2YWxcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcHV0ZWRGaXJzdERheU9mV2VlayA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmZpcnN0RGF5T2ZXZWVrICE9PSB2b2lkIDBcbiAgICAgICAgPyBOdW1iZXIocHJvcHMuZmlyc3REYXlPZldlZWspXG4gICAgICAgIDogaW5uZXJMb2NhbGUudmFsdWUuZmlyc3REYXlPZldlZWtcbiAgICApKVxuXG4gICAgY29uc3QgZGF5c09mV2VlayA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGRheXMgPSBpbm5lckxvY2FsZS52YWx1ZS5kYXlzU2hvcnQsXG4gICAgICAgIGZpcnN0ID0gY29tcHV0ZWRGaXJzdERheU9mV2Vlay52YWx1ZVxuXG4gICAgICByZXR1cm4gZmlyc3QgPiAwXG4gICAgICAgID8gZGF5cy5zbGljZShmaXJzdCwgNykuY29uY2F0KGRheXMuc2xpY2UoMCwgZmlyc3QpKVxuICAgICAgICA6IGRheXNcbiAgICB9KVxuXG4gICAgY29uc3QgZGF5c0luTW9udGggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gdmlld01vZGVsLnZhbHVlXG4gICAgICByZXR1cm4gcHJvcHMuY2FsZW5kYXIgIT09ICdwZXJzaWFuJ1xuICAgICAgICA/IChuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDApKS5nZXREYXRlKClcbiAgICAgICAgOiBqYWxhYWxpTW9udGhMZW5ndGgoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoKVxuICAgIH0pXG5cbiAgICBjb25zdCBldnRDb2xvciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHR5cGVvZiBwcm9wcy5ldmVudENvbG9yID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcHMuZXZlbnRDb2xvclxuICAgICAgICA6ICgpID0+IHByb3BzLmV2ZW50Q29sb3JcbiAgICApKVxuXG4gICAgY29uc3QgbWluTmF2ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm5hdmlnYXRpb25NaW5ZZWFyTW9udGggPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gcHJvcHMubmF2aWdhdGlvbk1pblllYXJNb250aC5zcGxpdCgnLycpXG4gICAgICByZXR1cm4geyB5ZWFyOiBwYXJzZUludChkYXRhWyAwIF0sIDEwKSwgbW9udGg6IHBhcnNlSW50KGRhdGFbIDEgXSwgMTApIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbWF4TmF2ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm5hdmlnYXRpb25NYXhZZWFyTW9udGggPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gcHJvcHMubmF2aWdhdGlvbk1heFllYXJNb250aC5zcGxpdCgnLycpXG4gICAgICByZXR1cm4geyB5ZWFyOiBwYXJzZUludChkYXRhWyAwIF0sIDEwKSwgbW9udGg6IHBhcnNlSW50KGRhdGFbIDEgXSwgMTApIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbmF2Qm91bmRhcmllcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIG1vbnRoOiB7IHByZXY6IHRydWUsIG5leHQ6IHRydWUgfSxcbiAgICAgICAgeWVhcjogeyBwcmV2OiB0cnVlLCBuZXh0OiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1pbk5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtaW5OYXYudmFsdWUueWVhciA+PSB2aWV3TW9kZWwudmFsdWUueWVhcikge1xuICAgICAgICBkYXRhLnllYXIucHJldiA9IGZhbHNlXG4gICAgICAgIGlmIChtaW5OYXYudmFsdWUueWVhciA9PT0gdmlld01vZGVsLnZhbHVlLnllYXIgJiYgbWluTmF2LnZhbHVlLm1vbnRoID49IHZpZXdNb2RlbC52YWx1ZS5tb250aCkge1xuICAgICAgICAgIGRhdGEubW9udGgucHJldiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtYXhOYXYudmFsdWUueWVhciA8PSB2aWV3TW9kZWwudmFsdWUueWVhcikge1xuICAgICAgICBkYXRhLnllYXIubmV4dCA9IGZhbHNlXG4gICAgICAgIGlmIChtYXhOYXYudmFsdWUueWVhciA9PT0gdmlld01vZGVsLnZhbHVlLnllYXIgJiYgbWF4TmF2LnZhbHVlLm1vbnRoIDw9IHZpZXdNb2RlbC52YWx1ZS5tb250aCkge1xuICAgICAgICAgIGRhdGEubW9udGgubmV4dCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuXG4gICAgY29uc3QgZGF5c01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcCA9IHt9XG5cbiAgICAgIGRheXNNb2RlbC52YWx1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgY29uc3QgaGFzaCA9IGdldE1vbnRoSGFzaChlbnRyeSlcblxuICAgICAgICBpZiAobWFwWyBoYXNoIF0gPT09IHZvaWQgMCkge1xuICAgICAgICAgIG1hcFsgaGFzaCBdID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcFsgaGFzaCBdLnB1c2goZW50cnkuZGF5KVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1hcFxuICAgIH0pXG5cbiAgICBjb25zdCByYW5nZU1hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcCA9IHt9XG5cbiAgICAgIHJhbmdlTW9kZWwudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc2hGcm9tID0gZ2V0TW9udGhIYXNoKGVudHJ5LmZyb20pXG4gICAgICAgIGNvbnN0IGhhc2hUbyA9IGdldE1vbnRoSGFzaChlbnRyeS50bylcblxuICAgICAgICBpZiAobWFwWyBoYXNoRnJvbSBdID09PSB2b2lkIDApIHtcbiAgICAgICAgICBtYXBbIGhhc2hGcm9tIF0gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwWyBoYXNoRnJvbSBdLnB1c2goe1xuICAgICAgICAgIGZyb206IGVudHJ5LmZyb20uZGF5LFxuICAgICAgICAgIHRvOiBoYXNoRnJvbSA9PT0gaGFzaFRvID8gZW50cnkudG8uZGF5IDogdm9pZCAwLFxuICAgICAgICAgIHJhbmdlOiBlbnRyeVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChoYXNoRnJvbSA8IGhhc2hUbykge1xuICAgICAgICAgIGxldCBoYXNoXG4gICAgICAgICAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZW50cnkuZnJvbVxuICAgICAgICAgIGNvbnN0IGN1ciA9IG1vbnRoIDwgMTJcbiAgICAgICAgICAgID8geyB5ZWFyLCBtb250aDogbW9udGggKyAxIH1cbiAgICAgICAgICAgIDogeyB5ZWFyOiB5ZWFyICsgMSwgbW9udGg6IDEgfVxuXG4gICAgICAgICAgd2hpbGUgKChoYXNoID0gZ2V0TW9udGhIYXNoKGN1cikpIDw9IGhhc2hUbykge1xuICAgICAgICAgICAgaWYgKG1hcFsgaGFzaCBdID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgbWFwWyBoYXNoIF0gPSBbXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXBbIGhhc2ggXS5wdXNoKHtcbiAgICAgICAgICAgICAgZnJvbTogdm9pZCAwLFxuICAgICAgICAgICAgICB0bzogaGFzaCA9PT0gaGFzaFRvID8gZW50cnkudG8uZGF5IDogdm9pZCAwLFxuICAgICAgICAgICAgICByYW5nZTogZW50cnlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGN1ci5tb250aCsrXG4gICAgICAgICAgICBpZiAoY3VyLm1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgICAgY3VyLnllYXIrK1xuICAgICAgICAgICAgICBjdXIubW9udGggPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWFwXG4gICAgfSlcblxuICAgIGNvbnN0IHJhbmdlVmlldyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChlZGl0UmFuZ2UudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaW5pdCwgaW5pdEhhc2gsIGZpbmFsLCBmaW5hbEhhc2ggfSA9IGVkaXRSYW5nZS52YWx1ZVxuXG4gICAgICBjb25zdCBbIGZyb20sIHRvIF0gPSBpbml0SGFzaCA8PSBmaW5hbEhhc2hcbiAgICAgICAgPyBbIGluaXQsIGZpbmFsIF1cbiAgICAgICAgOiBbIGZpbmFsLCBpbml0IF1cblxuICAgICAgY29uc3QgZnJvbUhhc2ggPSBnZXRNb250aEhhc2goZnJvbSlcbiAgICAgIGNvbnN0IHRvSGFzaCA9IGdldE1vbnRoSGFzaCh0bylcblxuICAgICAgaWYgKGZyb21IYXNoICE9PSB2aWV3TW9udGhIYXNoLnZhbHVlICYmIHRvSGFzaCAhPT0gdmlld01vbnRoSGFzaC52YWx1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmlldyA9IHt9XG5cbiAgICAgIGlmIChmcm9tSGFzaCA9PT0gdmlld01vbnRoSGFzaC52YWx1ZSkge1xuICAgICAgICB2aWV3LmZyb20gPSBmcm9tLmRheVxuICAgICAgICB2aWV3LmluY2x1ZGVGcm9tID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZpZXcuZnJvbSA9IDFcbiAgICAgIH1cblxuICAgICAgaWYgKHRvSGFzaCA9PT0gdmlld01vbnRoSGFzaC52YWx1ZSkge1xuICAgICAgICB2aWV3LnRvID0gdG8uZGF5XG4gICAgICAgIHZpZXcuaW5jbHVkZVRvID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZpZXcudG8gPSBkYXlzSW5Nb250aC52YWx1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlld1xuICAgIH0pXG5cbiAgICBjb25zdCB2aWV3TW9udGhIYXNoID0gY29tcHV0ZWQoKCkgPT4gZ2V0TW9udGhIYXNoKHZpZXdNb2RlbC52YWx1ZSkpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25EYXlzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbWFwID0ge31cblxuICAgICAgaWYgKHByb3BzLm9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgbWFwWyBpIF0gPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gdHlwZW9mIHByb3BzLm9wdGlvbnMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wcy5vcHRpb25zXG4gICAgICAgIDogZGF0ZSA9PiBwcm9wcy5vcHRpb25zLmluY2x1ZGVzKGRhdGUpXG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoLnZhbHVlOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF5SGFzaCA9IHZpZXdNb250aEhhc2gudmFsdWUgKyAnLycgKyBwYWQoaSlcbiAgICAgICAgbWFwWyBpIF0gPSBmbihkYXlIYXNoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFwXG4gICAgfSlcblxuICAgIGNvbnN0IGV2ZW50RGF5c01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcCA9IHt9XG5cbiAgICAgIGlmIChwcm9wcy5ldmVudHMgPT09IHZvaWQgMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgbWFwWyBpIF0gPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZm4gPSB0eXBlb2YgcHJvcHMuZXZlbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBwcm9wcy5ldmVudHNcbiAgICAgICAgICA6IGRhdGUgPT4gcHJvcHMuZXZlbnRzLmluY2x1ZGVzKGRhdGUpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGgudmFsdWU7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGRheUhhc2ggPSB2aWV3TW9udGhIYXNoLnZhbHVlICsgJy8nICsgcGFkKGkpXG4gICAgICAgICAgbWFwWyBpIF0gPSBmbihkYXlIYXNoKSA9PT0gdHJ1ZSAmJiBldnRDb2xvci52YWx1ZShkYXlIYXNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXBcbiAgICB9KVxuXG4gICAgY29uc3Qgdmlld0RheXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgZGF0ZSwgZW5kRGF5XG4gICAgICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSB2aWV3TW9kZWwudmFsdWVcblxuICAgICAgaWYgKHByb3BzLmNhbGVuZGFyICE9PSAncGVyc2lhbicpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSlcbiAgICAgICAgZW5kRGF5ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMCkpLmdldERhdGUoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGdEYXRlID0gdG9HcmVnb3JpYW4oeWVhciwgbW9udGgsIDEpXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShnRGF0ZS5neSwgZ0RhdGUuZ20gLSAxLCBnRGF0ZS5nZClcbiAgICAgICAgbGV0IHByZXZKTSA9IG1vbnRoIC0gMVxuICAgICAgICBsZXQgcHJldkpZID0geWVhclxuICAgICAgICBpZiAocHJldkpNID09PSAwKSB7XG4gICAgICAgICAgcHJldkpNID0gMTJcbiAgICAgICAgICBwcmV2SlktLVxuICAgICAgICB9XG4gICAgICAgIGVuZERheSA9IGphbGFhbGlNb250aExlbmd0aChwcmV2SlksIHByZXZKTSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5czogZGF0ZS5nZXREYXkoKSAtIGNvbXB1dGVkRmlyc3REYXlPZldlZWsudmFsdWUgLSAxLFxuICAgICAgICBlbmREYXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZGF5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IFtdXG4gICAgICBjb25zdCB7IGRheXMsIGVuZERheSB9ID0gdmlld0RheXMudmFsdWVcblxuICAgICAgY29uc3QgbGVuID0gZGF5cyA8IDAgPyBkYXlzICsgNyA6IGRheXNcbiAgICAgIGlmIChsZW4gPCA2KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbmREYXkgLSBsZW47IGkgPD0gZW5kRGF5OyBpKyspIHtcbiAgICAgICAgICByZXMucHVzaCh7IGksIGZpbGw6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRleCA9IHJlcy5sZW5ndGhcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGgudmFsdWU7IGkrKykge1xuICAgICAgICBjb25zdCBkYXkgPSB7IGksIGV2ZW50OiBldmVudERheXNNYXAudmFsdWVbIGkgXSwgY2xhc3NlczogW10gfVxuXG4gICAgICAgIGlmIChzZWxlY3Rpb25EYXlzTWFwLnZhbHVlWyBpIF0gPT09IHRydWUpIHtcbiAgICAgICAgICBkYXkuaW4gPSB0cnVlXG4gICAgICAgICAgZGF5LmZsYXQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXMucHVzaChkYXkpXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGN1cnJlbnQgdmlldyBoYXMgZGF5cyBpbiBtb2RlbFxuICAgICAgaWYgKGRheXNNYXAudmFsdWVbIHZpZXdNb250aEhhc2gudmFsdWUgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRheXNNYXAudmFsdWVbIHZpZXdNb250aEhhc2gudmFsdWUgXS5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgY29uc3QgaSA9IGluZGV4ICsgZGF5IC0gMVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyBpIF0sIHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZsYXQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3I6IGNvbXB1dGVkQ29sb3IudmFsdWUsXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gaWYgY3VycmVudCB2aWV3IGhhcyByYW5nZXMgaW4gbW9kZWxcbiAgICAgIGlmIChyYW5nZU1hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmFuZ2VNYXAudmFsdWVbIHZpZXdNb250aEhhc2gudmFsdWUgXS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuZnJvbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tID0gaW5kZXggKyBlbnRyeS5mcm9tIC0gMVxuICAgICAgICAgICAgY29uc3QgdG8gPSBpbmRleCArIChlbnRyeS50byB8fCBkYXlzSW5Nb250aC52YWx1ZSkgLSAxXG5cbiAgICAgICAgICAgIGZvciAobGV0IGRheSA9IGZyb207IGRheSA8PSB0bzsgZGF5KyspIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNbIGRheSBdLCB7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IGVudHJ5LnJhbmdlLFxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbXB1dGVkQ29sb3IudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiBjb21wdXRlZFRleHRDb2xvci52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZnJvbSBdLCB7XG4gICAgICAgICAgICAgIHJhbmdlRnJvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmxhdDogZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGVudHJ5LnRvICE9PSB2b2lkIDAgJiYgT2JqZWN0LmFzc2lnbihyZXNbIHRvIF0sIHtcbiAgICAgICAgICAgICAgcmFuZ2VUbzogdHJ1ZSxcbiAgICAgICAgICAgICAgZmxhdDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGVudHJ5LnRvICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvID0gaW5kZXggKyBlbnRyeS50byAtIDFcblxuICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gaW5kZXg7IGRheSA8PSB0bzsgZGF5KyspIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNbIGRheSBdLCB7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IGVudHJ5LnJhbmdlLFxuICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbXB1dGVkQ29sb3IudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiBjb21wdXRlZFRleHRDb2xvci52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgdG8gXSwge1xuICAgICAgICAgICAgICBmbGF0OiBmYWxzZSxcbiAgICAgICAgICAgICAgcmFuZ2VUbzogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0byA9IGluZGV4ICsgZGF5c0luTW9udGgudmFsdWUgLSAxXG4gICAgICAgICAgICBmb3IgKGxldCBkYXkgPSBpbmRleDsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZGF5IF0sIHtcbiAgICAgICAgICAgICAgICByYW5nZTogZW50cnkucmFuZ2UsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2VWaWV3LnZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IGluZGV4ICsgcmFuZ2VWaWV3LnZhbHVlLmZyb20gLSAxXG4gICAgICAgIGNvbnN0IHRvID0gaW5kZXggKyByYW5nZVZpZXcudmFsdWUudG8gLSAxXG5cbiAgICAgICAgZm9yIChsZXQgZGF5ID0gZnJvbTsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgIHJlc1sgZGF5IF0uY29sb3IgPSBjb21wdXRlZENvbG9yLnZhbHVlXG4gICAgICAgICAgcmVzWyBkYXkgXS5lZGl0UmFuZ2UgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFuZ2VWaWV3LnZhbHVlLmluY2x1ZGVGcm9tID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVzWyBmcm9tIF0uZWRpdFJhbmdlRnJvbSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2VWaWV3LnZhbHVlLmluY2x1ZGVUbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJlc1sgdG8gXS5lZGl0UmFuZ2VUbyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmlld01vZGVsLnZhbHVlLnllYXIgPT09IHRvZGF5LnZhbHVlLnllYXIgJiYgdmlld01vZGVsLnZhbHVlLm1vbnRoID09PSB0b2RheS52YWx1ZS5tb250aCkge1xuICAgICAgICByZXNbIGluZGV4ICsgdG9kYXkudmFsdWUuZGF5IC0gMSBdLnRvZGF5ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBsZWZ0ID0gcmVzLmxlbmd0aCAlIDdcbiAgICAgIGlmIChsZWZ0ID4gMCkge1xuICAgICAgICBjb25zdCBhZnRlckRheXMgPSA3IC0gbGVmdFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBhZnRlckRheXM7IGkrKykge1xuICAgICAgICAgIHJlcy5wdXNoKHsgaSwgZmlsbDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgIGxldCBjbHMgPSAncS1kYXRlX19jYWxlbmRhci1pdGVtICdcblxuICAgICAgICBpZiAoZGF5LmZpbGwgPT09IHRydWUpIHtcbiAgICAgICAgICBjbHMgKz0gJ3EtZGF0ZV9fY2FsZW5kYXItaXRlbS0tZmlsbCdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbHMgKz0gYHEtZGF0ZV9fY2FsZW5kYXItaXRlbS0tJHsgZGF5LmluID09PSB0cnVlID8gJ2luJyA6ICdvdXQnIH1gXG5cbiAgICAgICAgICBpZiAoZGF5LnJhbmdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNscyArPSBgIHEtZGF0ZV9fcmFuZ2UkeyBkYXkucmFuZ2VUbyA9PT0gdHJ1ZSA/ICctdG8nIDogKGRheS5yYW5nZUZyb20gPT09IHRydWUgPyAnLWZyb20nIDogJycpIH1gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRheS5lZGl0UmFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscyArPSBgIHEtZGF0ZV9fZWRpdC1yYW5nZSR7IGRheS5lZGl0UmFuZ2VGcm9tID09PSB0cnVlID8gJy1mcm9tJyA6ICcnIH0keyBkYXkuZWRpdFJhbmdlVG8gPT09IHRydWUgPyAnLXRvJyA6ICcnIH1gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRheS5yYW5nZSAhPT0gdm9pZCAwIHx8IGRheS5lZGl0UmFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscyArPSBgIHRleHQtJHsgZGF5LmNvbG9yIH1gXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF5LmNsYXNzZXMgPSBjbHNcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgICAgPyB7ICdhcmlhLWRpc2FibGVkJzogJ3RydWUnIH1cbiAgICAgICAgOiB7fVxuICAgICkpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2ID0+IHtcbiAgICAgIGlmIChsYXN0RW1pdFZhbHVlID09PSB2KSB7XG4gICAgICAgIGxhc3RFbWl0VmFsdWUgPSAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBnZXRWaWV3TW9kZWwoaW5uZXJNYXNrLnZhbHVlLCBpbm5lckxvY2FsZS52YWx1ZSlcbiAgICAgICAgdXBkYXRlVmlld01vZGVsKG1vZGVsLnllYXIsIG1vZGVsLm1vbnRoLCBtb2RlbClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2godmlldywgKCkgPT4ge1xuICAgICAgaWYgKGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgcHJveHkuJGVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpID09PSB0cnVlKSB7XG4gICAgICAgIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiB2aWV3TW9kZWwudmFsdWUueWVhciArICd8JyArIHZpZXdNb2RlbC52YWx1ZS5tb250aCwgKCkgPT4ge1xuICAgICAgZW1pdCgnbmF2aWdhdGlvbicsIHsgeWVhcjogdmlld01vZGVsLnZhbHVlLnllYXIsIG1vbnRoOiB2aWV3TW9kZWwudmFsdWUubW9udGggfSlcbiAgICB9KVxuXG4gICAgd2F0Y2gobWFzaywgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVZhbHVlKHZhbCwgaW5uZXJMb2NhbGUudmFsdWUsICdtYXNrJylcbiAgICAgIGlubmVyTWFzay52YWx1ZSA9IHZhbFxuICAgIH0pXG5cbiAgICB3YXRjaChsb2NhbGUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVWYWx1ZShpbm5lck1hc2sudmFsdWUsIHZhbCwgJ2xvY2FsZScpXG4gICAgICBpbm5lckxvY2FsZS52YWx1ZSA9IHZhbFxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzZXRUb2RheSAoKSB7XG4gICAgICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IHRvZGF5LnZhbHVlXG5cbiAgICAgIGNvbnN0IGRhdGUgPSB7XG4gICAgICAgIC8vIGNvbnRhaW5zIG1vcmUgcHJvcHMgdGhhbiBuZWVkZWQgKGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZClcbiAgICAgICAgLy8gYnV0IHRob3NlIGFyZW4ndCB1c2VkIGluIHRoZSBwcm9jZXNzaW5nIG9mIHRoaXMgXCJkYXRlXCIgdmFyaWFibGVcbiAgICAgICAgLi4udmlld01vZGVsLnZhbHVlLFxuXG4gICAgICAgIC8vIG92ZXJ3cml0aW5nIHdpdGggdG9kYXkncyBkYXRlXG4gICAgICAgIHllYXIsXG4gICAgICAgIG1vbnRoLFxuICAgICAgICBkYXlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9udGhNYXAgPSBkYXlzTWFwLnZhbHVlWyBnZXRNb250aEhhc2goZGF0ZSkgXVxuXG4gICAgICBpZiAobW9udGhNYXAgPT09IHZvaWQgMCB8fCBtb250aE1hcC5pbmNsdWRlcyhkYXRlLmRheSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGFkZFRvTW9kZWwoZGF0ZSlcbiAgICAgIH1cblxuICAgICAgc2V0Q2FsZW5kYXJUbyhkYXRlLnllYXIsIGRhdGUubW9udGgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmlldyAodmlld01vZGUpIHtcbiAgICAgIGlmICh2aWV3SXNWYWxpZCh2aWV3TW9kZSkgPT09IHRydWUpIHtcbiAgICAgICAgdmlldy52YWx1ZSA9IHZpZXdNb2RlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb2Zmc2V0Q2FsZW5kYXIgKHR5cGUsIGRlc2NlbmRpbmcpIHtcbiAgICAgIGlmIChbICdtb250aCcsICd5ZWFyJyBdLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgIGNvbnN0IGZuID0gdHlwZSA9PT0gJ21vbnRoJyA/IGdvVG9Nb250aCA6IGdvVG9ZZWFyXG4gICAgICAgIGZuKGRlc2NlbmRpbmcgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FsZW5kYXJUbyAoeWVhciwgbW9udGgpIHtcbiAgICAgIHZpZXcudmFsdWUgPSAnQ2FsZW5kYXInXG4gICAgICB1cGRhdGVWaWV3TW9kZWwoeWVhciwgbW9udGgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RWRpdGluZ1JhbmdlIChmcm9tLCB0bykge1xuICAgICAgaWYgKHByb3BzLnJhbmdlID09PSBmYWxzZSB8fCAhZnJvbSkge1xuICAgICAgICBlZGl0UmFuZ2UudmFsdWUgPSBudWxsXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbml0ID0gT2JqZWN0LmFzc2lnbih7IC4uLnZpZXdNb2RlbC52YWx1ZSB9LCBmcm9tKVxuICAgICAgY29uc3QgZmluYWwgPSB0byAhPT0gdm9pZCAwXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7IC4uLnZpZXdNb2RlbC52YWx1ZSB9LCB0bylcbiAgICAgICAgOiBpbml0XG5cbiAgICAgIGVkaXRSYW5nZS52YWx1ZSA9IHtcbiAgICAgICAgaW5pdCxcbiAgICAgICAgaW5pdEhhc2g6IGdldERheUhhc2goaW5pdCksXG4gICAgICAgIGZpbmFsLFxuICAgICAgICBmaW5hbEhhc2g6IGdldERheUhhc2goZmluYWwpXG4gICAgICB9XG5cbiAgICAgIHNldENhbGVuZGFyVG8oaW5pdC55ZWFyLCBpbml0Lm1vbnRoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1hc2sgKCkge1xuICAgICAgcmV0dXJuIHByb3BzLmNhbGVuZGFyID09PSAncGVyc2lhbicgPyAnWVlZWS9NTS9ERCcgOiBwcm9wcy5tYXNrXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjb2RlU3RyaW5nIChkYXRlLCBtYXNrLCBsb2NhbGUpIHtcbiAgICAgIHJldHVybiBfX3NwbGl0RGF0ZShcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgbWFzayxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwcm9wcy5jYWxlbmRhcixcbiAgICAgICAge1xuICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgIHNlY29uZDogMCxcbiAgICAgICAgICBtaWxsaXNlY29uZDogMFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Vmlld01vZGVsIChtYXNrLCBsb2NhbGUpIHtcbiAgICAgIGNvbnN0IG1vZGVsID0gQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgOiAocHJvcHMubW9kZWxWYWx1ZSA/IFsgcHJvcHMubW9kZWxWYWx1ZSBdIDogW10pXG5cbiAgICAgIGlmIChtb2RlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGdldERlZmF1bHRWaWV3TW9kZWwoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBtb2RlbFsgbW9kZWwubGVuZ3RoIC0gMSBdXG4gICAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlU3RyaW5nKFxuICAgICAgICB0YXJnZXQuZnJvbSAhPT0gdm9pZCAwID8gdGFyZ2V0LmZyb20gOiB0YXJnZXQsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIGxvY2FsZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGVjb2RlZC5kYXRlSGFzaCA9PT0gbnVsbFxuICAgICAgICA/IGdldERlZmF1bHRWaWV3TW9kZWwoKVxuICAgICAgICA6IGRlY29kZWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWZhdWx0Vmlld01vZGVsICgpIHtcbiAgICAgIGxldCB5ZWFyLCBtb250aFxuXG4gICAgICBpZiAocHJvcHMuZGVmYXVsdFllYXJNb250aCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBwcm9wcy5kZWZhdWx0WWVhck1vbnRoLnNwbGl0KCcvJylcbiAgICAgICAgeWVhciA9IHBhcnNlSW50KGRbIDAgXSwgMTApXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQoZFsgMSBdLCAxMClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBtYXkgY29tZSBmcm9tIGRhdGEoKSB3aGVyZSBjb21wdXRlZFxuICAgICAgICAvLyBwcm9wcyBhcmUgbm90IHlldCBhdmFpbGFibGVcbiAgICAgICAgY29uc3QgZCA9IHRvZGF5LnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHRvZGF5LnZhbHVlXG4gICAgICAgICAgOiBnZXRDdXJyZW50RGF0ZSgpXG5cbiAgICAgICAgeWVhciA9IGQueWVhclxuICAgICAgICBtb250aCA9IGQubW9udGhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheTogMSxcbiAgICAgICAgaG91cjogMCxcbiAgICAgICAgbWludXRlOiAwLFxuICAgICAgICBzZWNvbmQ6IDAsXG4gICAgICAgIG1pbGxpc2Vjb25kOiAwLFxuICAgICAgICBkYXRlSGFzaDogeWVhciArICcvJyArIHBhZChtb250aCkgKyAnLzAxJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvVG9Nb250aCAob2Zmc2V0KSB7XG4gICAgICBsZXQgeWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyXG4gICAgICBsZXQgbW9udGggPSBOdW1iZXIodmlld01vZGVsLnZhbHVlLm1vbnRoKSArIG9mZnNldFxuXG4gICAgICBpZiAobW9udGggPT09IDEzKSB7XG4gICAgICAgIG1vbnRoID0gMVxuICAgICAgICB5ZWFyKytcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG1vbnRoID09PSAwKSB7XG4gICAgICAgIG1vbnRoID0gMTJcbiAgICAgICAgeWVhci0tXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCBtb250aClcbiAgICAgIGlzSW1tZWRpYXRlLnZhbHVlID09PSB0cnVlICYmIGVtaXRJbW1lZGlhdGVseSgnbW9udGgnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvVG9ZZWFyIChvZmZzZXQpIHtcbiAgICAgIGNvbnN0IHllYXIgPSBOdW1iZXIodmlld01vZGVsLnZhbHVlLnllYXIpICsgb2Zmc2V0XG4gICAgICB1cGRhdGVWaWV3TW9kZWwoeWVhciwgdmlld01vZGVsLnZhbHVlLm1vbnRoKVxuICAgICAgaXNJbW1lZGlhdGUudmFsdWUgPT09IHRydWUgJiYgZW1pdEltbWVkaWF0ZWx5KCd5ZWFyJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRZZWFyICh5ZWFyKSB7XG4gICAgICB1cGRhdGVWaWV3TW9kZWwoeWVhciwgdmlld01vZGVsLnZhbHVlLm1vbnRoKVxuICAgICAgdmlldy52YWx1ZSA9IHByb3BzLmRlZmF1bHRWaWV3ID09PSAnWWVhcnMnID8gJ01vbnRocycgOiAnQ2FsZW5kYXInXG4gICAgICBpc0ltbWVkaWF0ZS52YWx1ZSA9PT0gdHJ1ZSAmJiBlbWl0SW1tZWRpYXRlbHkoJ3llYXInKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1vbnRoIChtb250aCkge1xuICAgICAgdXBkYXRlVmlld01vZGVsKHZpZXdNb2RlbC52YWx1ZS55ZWFyLCBtb250aClcbiAgICAgIHZpZXcudmFsdWUgPSAnQ2FsZW5kYXInXG4gICAgICBpc0ltbWVkaWF0ZS52YWx1ZSA9PT0gdHJ1ZSAmJiBlbWl0SW1tZWRpYXRlbHkoJ21vbnRoJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVEYXRlIChkYXRlLCBtb250aEhhc2gpIHtcbiAgICAgIGNvbnN0IG1vbnRoID0gZGF5c01hcC52YWx1ZVsgbW9udGhIYXNoIF1cbiAgICAgIGNvbnN0IGZuID0gbW9udGggIT09IHZvaWQgMCAmJiBtb250aC5pbmNsdWRlcyhkYXRlLmRheSkgPT09IHRydWVcbiAgICAgICAgPyByZW1vdmVGcm9tTW9kZWxcbiAgICAgICAgOiBhZGRUb01vZGVsXG5cbiAgICAgIGZuKGRhdGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hvcnREYXRlIChkYXRlKSB7XG4gICAgICByZXR1cm4geyB5ZWFyOiBkYXRlLnllYXIsIG1vbnRoOiBkYXRlLm1vbnRoLCBkYXk6IGRhdGUuZGF5IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3TW9kZWwgKHllYXIsIG1vbnRoLCB0aW1lKSB7XG4gICAgICBpZiAobWluTmF2LnZhbHVlICE9PSBudWxsICYmIHllYXIgPD0gbWluTmF2LnZhbHVlLnllYXIpIHtcbiAgICAgICAgaWYgKG1vbnRoIDwgbWluTmF2LnZhbHVlLm1vbnRoIHx8IHllYXIgPCBtaW5OYXYudmFsdWUueWVhcikge1xuICAgICAgICAgIG1vbnRoID0gbWluTmF2LnZhbHVlLm1vbnRoXG4gICAgICAgIH1cbiAgICAgICAgeWVhciA9IG1pbk5hdi52YWx1ZS55ZWFyXG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhOYXYudmFsdWUgIT09IG51bGwgJiYgeWVhciA+PSBtYXhOYXYudmFsdWUueWVhcikge1xuICAgICAgICBpZiAobW9udGggPiBtYXhOYXYudmFsdWUubW9udGggfHwgeWVhciA+IG1heE5hdi52YWx1ZS55ZWFyKSB7XG4gICAgICAgICAgbW9udGggPSBtYXhOYXYudmFsdWUubW9udGhcbiAgICAgICAgfVxuICAgICAgICB5ZWFyID0gbWF4TmF2LnZhbHVlLnllYXJcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCwgdGltZXpvbmVPZmZzZXQsIHRpbWVIYXNoIH0gPSB0aW1lXG4gICAgICAgIE9iamVjdC5hc3NpZ24odmlld01vZGVsLnZhbHVlLCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCwgdGltZXpvbmVPZmZzZXQsIHRpbWVIYXNoIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0hhc2ggPSB5ZWFyICsgJy8nICsgcGFkKG1vbnRoKSArICcvMDEnXG5cbiAgICAgIGlmIChuZXdIYXNoICE9PSB2aWV3TW9kZWwudmFsdWUuZGF0ZUhhc2gpIHtcbiAgICAgICAgbW9udGhEaXJlY3Rpb24udmFsdWUgPSAodmlld01vZGVsLnZhbHVlLmRhdGVIYXNoIDwgbmV3SGFzaCkgPT09ICgkcS5sYW5nLnJ0bCAhPT0gdHJ1ZSkgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICAgIGlmICh5ZWFyICE9PSB2aWV3TW9kZWwudmFsdWUueWVhcikge1xuICAgICAgICAgIHllYXJEaXJlY3Rpb24udmFsdWUgPSBtb250aERpcmVjdGlvbi52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHN0YXJ0WWVhci52YWx1ZSA9IHllYXIgLSB5ZWFyICUgeWVhcnNJbnRlcnZhbCAtICh5ZWFyIDwgMCA/IHllYXJzSW50ZXJ2YWwgOiAwKVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24odmlld01vZGVsLnZhbHVlLCB7XG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICBkYXk6IDEsXG4gICAgICAgICAgICBkYXRlSGFzaDogbmV3SGFzaFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdFZhbHVlICh2YWwsIGFjdGlvbiwgZGF0ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWwgIT09IG51bGwgJiYgdmFsLmxlbmd0aCA9PT0gMSAmJiBwcm9wcy5tdWx0aXBsZSA9PT0gZmFsc2VcbiAgICAgICAgPyB2YWxbIDAgXVxuICAgICAgICA6IHZhbFxuXG4gICAgICBsYXN0RW1pdFZhbHVlID0gdmFsdWVcblxuICAgICAgY29uc3QgeyByZWFzb24sIGRldGFpbHMgfSA9IGdldEVtaXRQYXJhbXMoYWN0aW9uLCBkYXRlKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSwgcmVhc29uLCBkZXRhaWxzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRJbW1lZGlhdGVseSAocmVhc29uKSB7XG4gICAgICBjb25zdCBkYXRlID0gZGF5c01vZGVsLnZhbHVlWyAwIF0gIT09IHZvaWQgMCAmJiBkYXlzTW9kZWwudmFsdWVbIDAgXS5kYXRlSGFzaCAhPT0gbnVsbFxuICAgICAgICA/IHsgLi4uZGF5c01vZGVsLnZhbHVlWyAwIF0gfVxuICAgICAgICA6IHsgLi4udmlld01vZGVsLnZhbHVlIH0gLy8gaW5oZXJpdCBkYXksIGhvdXJzLCBtaW51dGVzLCBtaWxsaXNlY29uZHMuLi5cblxuICAgICAgLy8gbmV4dFRpY2sgcmVxdWlyZWQgYmVjYXVzZSBvZiBhbmltYXRpb24gZGVsYXkgaW4gdmlld01vZGVsXG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGRhdGUueWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyXG4gICAgICAgIGRhdGUubW9udGggPSB2aWV3TW9kZWwudmFsdWUubW9udGhcblxuICAgICAgICBjb25zdCBtYXhEYXkgPSBwcm9wcy5jYWxlbmRhciAhPT0gJ3BlcnNpYW4nXG4gICAgICAgICAgPyAobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCAwKSkuZ2V0RGF0ZSgpXG4gICAgICAgICAgOiBqYWxhYWxpTW9udGhMZW5ndGgoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoKVxuXG4gICAgICAgIGRhdGUuZGF5ID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgZGF0ZS5kYXkpLCBtYXhEYXkpXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbmNvZGVFbnRyeShkYXRlKVxuICAgICAgICBsYXN0RW1pdFZhbHVlID0gdmFsdWVcblxuICAgICAgICBjb25zdCB7IGRldGFpbHMgfSA9IGdldEVtaXRQYXJhbXMoJycsIGRhdGUpXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUsIHJlYXNvbiwgZGV0YWlscylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW1pdFBhcmFtcyAoYWN0aW9uLCBkYXRlKSB7XG4gICAgICByZXR1cm4gZGF0ZS5mcm9tICE9PSB2b2lkIDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICByZWFzb246IGAkeyBhY3Rpb24gfS1yYW5nZWAsXG4gICAgICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgICAgIC4uLmdldFNob3J0RGF0ZShkYXRlLnRhcmdldCksXG4gICAgICAgICAgICAgIGZyb206IGdldFNob3J0RGF0ZShkYXRlLmZyb20pLFxuICAgICAgICAgICAgICB0bzogZ2V0U2hvcnREYXRlKGRhdGUudG8pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIHJlYXNvbjogYCR7IGFjdGlvbiB9LWRheWAsXG4gICAgICAgICAgICBkZXRhaWxzOiBnZXRTaG9ydERhdGUoZGF0ZSlcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5jb2RlRW50cnkgKGRhdGUsIG1hc2ssIGxvY2FsZSkge1xuICAgICAgcmV0dXJuIGRhdGUuZnJvbSAhPT0gdm9pZCAwXG4gICAgICAgID8geyBmcm9tOiBlbmNvZGVPYmplY3RGbi52YWx1ZShkYXRlLmZyb20sIG1hc2ssIGxvY2FsZSksIHRvOiBlbmNvZGVPYmplY3RGbi52YWx1ZShkYXRlLnRvLCBtYXNrLCBsb2NhbGUpIH1cbiAgICAgICAgOiBlbmNvZGVPYmplY3RGbi52YWx1ZShkYXRlLCBtYXNrLCBsb2NhbGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9Nb2RlbCAoZGF0ZSkge1xuICAgICAgbGV0IHZhbHVlXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoZGF0ZS5mcm9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvLyB3ZSBhbHNvIG5lZWQgdG8gZmlsdGVyIG91dCBpbnRlcnNlY3Rpb25zXG5cbiAgICAgICAgICBjb25zdCBmcm9tSGFzaCA9IGdldERheUhhc2goZGF0ZS5mcm9tKVxuICAgICAgICAgIGNvbnN0IHRvSGFzaCA9IGdldERheUhhc2goZGF0ZS50bylcblxuICAgICAgICAgIGNvbnN0IGRheXMgPSBkYXlzTW9kZWwudmFsdWVcbiAgICAgICAgICAgIC5maWx0ZXIoZGF5ID0+IGRheS5kYXRlSGFzaCA8IGZyb21IYXNoIHx8IGRheS5kYXRlSGFzaCA+IHRvSGFzaClcblxuICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IHJhbmdlTW9kZWwudmFsdWVcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgZnJvbSwgdG8gfSkgPT4gdG8uZGF0ZUhhc2ggPCBmcm9tSGFzaCB8fCBmcm9tLmRhdGVIYXNoID4gdG9IYXNoKVxuXG4gICAgICAgICAgdmFsdWUgPSBkYXlzLmNvbmNhdChyYW5nZXMpLmNvbmNhdChkYXRlKS5tYXAoZW50cnkgPT4gZW5jb2RlRW50cnkoZW50cnkpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1vZGVsID0gbm9ybWFsaXplZE1vZGVsLnZhbHVlLnNsaWNlKClcbiAgICAgICAgICBtb2RlbC5wdXNoKGVuY29kZUVudHJ5KGRhdGUpKVxuICAgICAgICAgIHZhbHVlID0gbW9kZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZW5jb2RlRW50cnkoZGF0ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdFZhbHVlKHZhbHVlLCAnYWRkJywgZGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tTW9kZWwgKGRhdGUpIHtcbiAgICAgIGlmIChwcm9wcy5ub1Vuc2V0ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgbW9kZWwgPSBudWxsXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGVuY29kZUVudHJ5KGRhdGUpXG5cbiAgICAgICAgaWYgKGRhdGUuZnJvbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlLmZpbHRlcihcbiAgICAgICAgICAgIGRhdGUgPT4gKFxuICAgICAgICAgICAgICBkYXRlLmZyb20gIT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gKGRhdGUuZnJvbSAhPT0gdmFsLmZyb20gJiYgZGF0ZS50byAhPT0gdmFsLnRvKVxuICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuZmlsdGVyKGRhdGUgPT4gZGF0ZSAhPT0gdmFsKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIG1vZGVsID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVtaXRWYWx1ZShtb2RlbCwgJ3JlbW92ZScsIGRhdGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUgKG1hc2ssIGxvY2FsZSwgcmVhc29uKSB7XG4gICAgICBjb25zdCBtb2RlbCA9IGRheXNNb2RlbC52YWx1ZVxuICAgICAgICAuY29uY2F0KHJhbmdlTW9kZWwudmFsdWUpXG4gICAgICAgIC5tYXAoZW50cnkgPT4gZW5jb2RlRW50cnkoZW50cnksIG1hc2ssIGxvY2FsZSkpXG4gICAgICAgIC5maWx0ZXIoZW50cnkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbnRyeS5mcm9tICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gZW50cnkuZnJvbS5kYXRlSGFzaCAhPT0gbnVsbCAmJiBlbnRyeS50by5kYXRlSGFzaCAhPT0gbnVsbFxuICAgICAgICAgICAgOiBlbnRyeS5kYXRlSGFzaCAhPT0gbnVsbFxuICAgICAgICB9KVxuXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/IG1vZGVsIDogbW9kZWxbIDAgXSkgfHwgbnVsbCwgcmVhc29uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgICBpZiAocHJvcHMubWluaW1hbCA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1kYXRlX19oZWFkZXIgJyArIGhlYWRlckNsYXNzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgIH0sICgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGtleTogJ2gteXItJyArIGhlYWRlclN1YnRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci1zdWJ0aXRsZSBxLWRhdGVfX2hlYWRlci1saW5rICdcbiAgICAgICAgICAgICAgKyAodmlldy52YWx1ZSA9PT0gJ1llYXJzJyA/ICdxLWRhdGVfX2hlYWRlci1saW5rLS1hY3RpdmUnIDogJ2N1cnNvci1wb2ludGVyJyksXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgndlknLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2sgKCkgeyB2aWV3LnZhbHVlID0gJ1llYXJzJyB9LFxuICAgICAgICAgICAgICBvbktleXVwIChlKSB7IGUua2V5Q29kZSA9PT0gMTMgJiYgKHZpZXcudmFsdWUgPSAnWWVhcnMnKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIFsgaGVhZGVyU3VidGl0bGUudmFsdWUgXSkpXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9faGVhZGVyLXRpdGxlIHJlbGF0aXZlLXBvc2l0aW9uIGZsZXggbm8td3JhcCdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncmVsYXRpdmUtcG9zaXRpb24gY29sJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgICAgfSwgKCkgPT4gaCgnZGl2Jywge1xuICAgICAgICAgICAgICBrZXk6ICdoLXN1YicgKyBoZWFkZXJUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci10aXRsZS1sYWJlbCBxLWRhdGVfX2hlYWRlci1saW5rICdcbiAgICAgICAgICAgICAgICArICh2aWV3LnZhbHVlID09PSAnQ2FsZW5kYXInID8gJ3EtZGF0ZV9faGVhZGVyLWxpbmstLWFjdGl2ZScgOiAnY3Vyc29yLXBvaW50ZXInKSxcbiAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgndkMnLCB7XG4gICAgICAgICAgICAgICAgb25DbGljayAoKSB7IHZpZXcudmFsdWUgPSAnQ2FsZW5kYXInIH0sXG4gICAgICAgICAgICAgICAgb25LZXl1cCAoZSkgeyBlLmtleUNvZGUgPT09IDEzICYmICh2aWV3LnZhbHVlID0gJ0NhbGVuZGFyJykgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgWyBoZWFkZXJUaXRsZS52YWx1ZSBdKSlcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIHByb3BzLnRvZGF5QnRuID09PSB0cnVlID8gaChRQnRuLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9faGVhZGVyLXRvZGF5IHNlbGYtc3RhcnQnLFxuICAgICAgICAgICAgaWNvbjogJHEuaWNvblNldC5kYXRldGltZS50b2RheSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICBvbkNsaWNrOiBzZXRUb2RheVxuICAgICAgICAgIH0pIDogbnVsbFxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROYXZpZ2F0aW9uICh7IGxhYmVsLCB0eXBlLCBrZXksIGRpciwgZ29UbywgYm91bmRhcmllcywgY2xzIH0pIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgcS1kYXRlX19hcnJvdydcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogZGF0ZUFycm93LnZhbHVlWyAwIF0sXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICBkaXNhYmxlOiBib3VuZGFyaWVzLnByZXYgPT09IGZhbHNlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2dvLSMnICsgdHlwZSwgeyBvbkNsaWNrICgpIHsgZ29UbygtMSkgfSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY2VudGVyJyArIGNsc1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1qdW1wLScgKyBkaXJcbiAgICAgICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7IGtleSB9LCBbXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG5vQ2FwczogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3ZpZXcjJyArIHR5cGUsIHsgb25DbGljazogKCkgPT4geyB2aWV3LnZhbHVlID0gdHlwZSB9IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIHEtZGF0ZV9fYXJyb3cnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgZGlzYWJsZTogYm91bmRhcmllcy5uZXh0ID09PSBmYWxzZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdnbysjJyArIHR5cGUsIHsgb25DbGljayAoKSB7IGdvVG8oMSkgfSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVmlld3MgPSB7XG4gICAgICBDYWxlbmRhcjogKCkgPT4gKFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ2NhbGVuZGFyLXZpZXcnLFxuICAgICAgICAgIGNsYXNzOiAncS1kYXRlX192aWV3IHEtZGF0ZV9fY2FsZW5kYXInXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fbmF2aWdhdGlvbiByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICAgfSwgZ2V0TmF2aWdhdGlvbih7XG4gICAgICAgICAgICBsYWJlbDogaW5uZXJMb2NhbGUudmFsdWUubW9udGhzWyB2aWV3TW9kZWwudmFsdWUubW9udGggLSAxIF0sXG4gICAgICAgICAgICB0eXBlOiAnTW9udGhzJyxcbiAgICAgICAgICAgIGtleTogdmlld01vZGVsLnZhbHVlLm1vbnRoLFxuICAgICAgICAgICAgZGlyOiBtb250aERpcmVjdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGdvVG86IGdvVG9Nb250aCxcbiAgICAgICAgICAgIGJvdW5kYXJpZXM6IG5hdkJvdW5kYXJpZXMudmFsdWUubW9udGgsXG4gICAgICAgICAgICBjbHM6ICcgY29sJ1xuICAgICAgICAgIH0pLmNvbmNhdChnZXROYXZpZ2F0aW9uKHtcbiAgICAgICAgICAgIGxhYmVsOiB2aWV3TW9kZWwudmFsdWUueWVhcixcbiAgICAgICAgICAgIHR5cGU6ICdZZWFycycsXG4gICAgICAgICAgICBrZXk6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgZGlyOiB5ZWFyRGlyZWN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgZ29UbzogZ29Ub1llYXIsXG4gICAgICAgICAgICBib3VuZGFyaWVzOiBuYXZCb3VuZGFyaWVzLnZhbHVlLnllYXIsXG4gICAgICAgICAgICBjbHM6ICcnXG4gICAgICAgICAgfSkpKSxcblxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19jYWxlbmRhci13ZWVrZGF5cyByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICAgfSwgZGF5c09mV2Vlay52YWx1ZS5tYXAoZGF5ID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWl0ZW0nIH0sIFsgaCgnZGl2JywgZGF5KSBdKSkpLFxuXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWRheXMtY29udGFpbmVyIHJlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tc2xpZGUtJyArIG1vbnRoRGlyZWN0aW9uLnZhbHVlXG4gICAgICAgICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGtleTogdmlld01vbnRoSGFzaC52YWx1ZSxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWRheXMgZml0J1xuICAgICAgICAgICAgfSwgZGF5cy52YWx1ZS5tYXAoZGF5ID0+IGgoJ2RpdicsIHsgY2xhc3M6IGRheS5jbGFzc2VzIH0sIFtcbiAgICAgICAgICAgICAgZGF5LmluID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBoKFxuICAgICAgICAgICAgICAgICAgUUJ0biwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogZGF5LnRvZGF5ID09PSB0cnVlID8gJ3EtZGF0ZV9fdG9kYXknIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmbGF0OiBkYXkuZmxhdCxcbiAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogZGF5LnVuZWxldmF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXkuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogZGF5LnRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRheS5pLFxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLmdldENhY2hlKCdkYXkjJyArIGRheS5pLCB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4geyBvbkRheUNsaWNrKGRheS5pKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VvdmVyOiAoKSA9PiB7IG9uRGF5TW91c2VvdmVyKGRheS5pKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZGF5LmV2ZW50ICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICA/ICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2V2ZW50IGJnLScgKyBkYXkuZXZlbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogaCgnZGl2JywgJycgKyBkYXkuaSlcbiAgICAgICAgICAgIF0pKSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuXG4gICAgICBNb250aHMgKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyID09PSB0b2RheS52YWx1ZS55ZWFyXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBtb250aCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChtaW5OYXYudmFsdWUgIT09IG51bGwgJiYgdmlld01vZGVsLnZhbHVlLnllYXIgPT09IG1pbk5hdi52YWx1ZS55ZWFyICYmIG1pbk5hdi52YWx1ZS5tb250aCA+IG1vbnRoKVxuICAgICAgICAgICAgfHwgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiB2aWV3TW9kZWwudmFsdWUueWVhciA9PT0gbWF4TmF2LnZhbHVlLnllYXIgJiYgbWF4TmF2LnZhbHVlLm1vbnRoIDwgbW9udGgpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0Lm1hcCgobW9udGgsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSB2aWV3TW9kZWwudmFsdWUubW9udGggPT09IGkgKyAxXG5cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX21vbnRocy1pdGVtIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBjdXJyZW50WWVhciA9PT0gdHJ1ZSAmJiB0b2RheS52YWx1ZS5tb250aCA9PT0gaSArIDEgPyAncS1kYXRlX190b2RheScgOiBudWxsLFxuICAgICAgICAgICAgICBmbGF0OiBhY3RpdmUgIT09IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsOiBtb250aCxcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZDogYWN0aXZlLFxuICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlID09PSB0cnVlID8gY29tcHV0ZWRDb2xvci52YWx1ZSA6IG51bGwsXG4gICAgICAgICAgICAgIHRleHRDb2xvcjogYWN0aXZlID09PSB0cnVlID8gY29tcHV0ZWRUZXh0Q29sb3IudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoaSArIDEpLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgnbW9udGgjJyArIGksIHsgb25DbGljazogKCkgPT4geyBzZXRNb250aChpICsgMSkgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuXG4gICAgICAgIHByb3BzLnllYXJzSW5Nb250aFZpZXcgPT09IHRydWUgJiYgY29udGVudC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdyb3cgbm8td3JhcCBmdWxsLXdpZHRoJyB9LCBbXG4gICAgICAgICAgICBnZXROYXZpZ2F0aW9uKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgICB0eXBlOiAnWWVhcnMnLFxuICAgICAgICAgICAgICBrZXk6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgICBkaXI6IHllYXJEaXJlY3Rpb24udmFsdWUsXG4gICAgICAgICAgICAgIGdvVG86IGdvVG9ZZWFyLFxuICAgICAgICAgICAgICBib3VuZGFyaWVzOiBuYXZCb3VuZGFyaWVzLnZhbHVlLnllYXIsXG4gICAgICAgICAgICAgIGNsczogJyBjb2wnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ21vbnRocy12aWV3JyxcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fdmlldyBxLWRhdGVfX21vbnRocyBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICB9LCBjb250ZW50KVxuICAgICAgfSxcblxuICAgICAgWWVhcnMgKCkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRZZWFyLnZhbHVlLFxuICAgICAgICAgIHN0b3AgPSBzdGFydCArIHllYXJzSW50ZXJ2YWwsXG4gICAgICAgICAgeWVhcnMgPSBbXVxuXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB5ZWFyID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKG1pbk5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtaW5OYXYudmFsdWUueWVhciA+IHllYXIpXG4gICAgICAgICAgICB8fCAobWF4TmF2LnZhbHVlICE9PSBudWxsICYmIG1heE5hdi52YWx1ZS55ZWFyIDwgeWVhcilcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gc3RvcDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gdmlld01vZGVsLnZhbHVlLnllYXIgPT09IGlcblxuICAgICAgICAgIHllYXJzLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX195ZWFycy1pdGVtIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICAgIGtleTogJ3lyJyArIGksXG4gICAgICAgICAgICAgICAgY2xhc3M6IHRvZGF5LnZhbHVlLnllYXIgPT09IGkgPyAncS1kYXRlX190b2RheScgOiBudWxsLFxuICAgICAgICAgICAgICAgIGZsYXQ6ICFhY3RpdmUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGksXG4gICAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogYWN0aXZlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPT09IHRydWUgPyBjb21wdXRlZENvbG9yLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFjdGl2ZSA9PT0gdHJ1ZSA/IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZTogaXNEaXNhYmxlZChpKSxcbiAgICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgneXIjJyArIGksIHsgb25DbGljazogKCkgPT4geyBzZXRZZWFyKGkpIH0gfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fdmlldyBxLWRhdGVfX3llYXJzIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2NvbC1hdXRvJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMCBdLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoc3RhcnQpLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgneS0nLCB7IG9uQ2xpY2s6ICgpID0+IHsgc3RhcnRZZWFyLnZhbHVlIC09IHllYXJzSW50ZXJ2YWwgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX195ZWFycy1jb250ZW50IGNvbCBzZWxmLXN0cmV0Y2ggcm93IGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICB9LCB5ZWFycyksXG5cbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2NvbC1hdXRvJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoc3RvcCksXG4gICAgICAgICAgICAgIC4uLmdldENhY2hlKCd5KycsIHsgb25DbGljazogKCkgPT4geyBzdGFydFllYXIudmFsdWUgKz0geWVhcnNJbnRlcnZhbCB9IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EYXlDbGljayAoZGF5SW5kZXgpIHtcbiAgICAgIGNvbnN0IGRheSA9IHsgLi4udmlld01vZGVsLnZhbHVlLCBkYXk6IGRheUluZGV4IH1cblxuICAgICAgaWYgKHByb3BzLnJhbmdlID09PSBmYWxzZSkge1xuICAgICAgICB0b2dnbGVEYXRlKGRheSwgdmlld01vbnRoSGFzaC52YWx1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlZGl0UmFuZ2UudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGF5UHJvcHMgPSBkYXlzLnZhbHVlLmZpbmQoZGF5ID0+IGRheS5maWxsICE9PSB0cnVlICYmIGRheS5pID09PSBkYXlJbmRleClcblxuICAgICAgICBpZiAocHJvcHMubm9VbnNldCAhPT0gdHJ1ZSAmJiBkYXlQcm9wcy5yYW5nZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmVtb3ZlRnJvbU1vZGVsKHsgdGFyZ2V0OiBkYXksIGZyb206IGRheVByb3BzLnJhbmdlLmZyb20sIHRvOiBkYXlQcm9wcy5yYW5nZS50byB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheVByb3BzLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVtb3ZlRnJvbU1vZGVsKGRheSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRIYXNoID0gZ2V0RGF5SGFzaChkYXkpXG5cbiAgICAgICAgZWRpdFJhbmdlLnZhbHVlID0ge1xuICAgICAgICAgIGluaXQ6IGRheSxcbiAgICAgICAgICBpbml0SGFzaCxcbiAgICAgICAgICBmaW5hbDogZGF5LFxuICAgICAgICAgIGZpbmFsSGFzaDogaW5pdEhhc2hcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ3JhbmdlU3RhcnQnLCBnZXRTaG9ydERhdGUoZGF5KSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGluaXRIYXNoID0gZWRpdFJhbmdlLnZhbHVlLmluaXRIYXNoLFxuICAgICAgICAgIGZpbmFsSGFzaCA9IGdldERheUhhc2goZGF5KSxcbiAgICAgICAgICBwYXlsb2FkID0gaW5pdEhhc2ggPD0gZmluYWxIYXNoXG4gICAgICAgICAgICA/IHsgZnJvbTogZWRpdFJhbmdlLnZhbHVlLmluaXQsIHRvOiBkYXkgfVxuICAgICAgICAgICAgOiB7IGZyb206IGRheSwgdG86IGVkaXRSYW5nZS52YWx1ZS5pbml0IH1cblxuICAgICAgICBlZGl0UmFuZ2UudmFsdWUgPSBudWxsXG4gICAgICAgIGFkZFRvTW9kZWwoaW5pdEhhc2ggPT09IGZpbmFsSGFzaCA/IGRheSA6IHsgdGFyZ2V0OiBkYXksIC4uLnBheWxvYWQgfSlcblxuICAgICAgICBlbWl0KCdyYW5nZUVuZCcsIHtcbiAgICAgICAgICBmcm9tOiBnZXRTaG9ydERhdGUocGF5bG9hZC5mcm9tKSxcbiAgICAgICAgICB0bzogZ2V0U2hvcnREYXRlKHBheWxvYWQudG8pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EYXlNb3VzZW92ZXIgKGRheUluZGV4KSB7XG4gICAgICBpZiAoZWRpdFJhbmdlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsID0geyAuLi52aWV3TW9kZWwudmFsdWUsIGRheTogZGF5SW5kZXggfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWRpdFJhbmdlLnZhbHVlLCB7XG4gICAgICAgICAgZmluYWwsXG4gICAgICAgICAgZmluYWxIYXNoOiBnZXREYXlIYXNoKGZpbmFsKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNldFRvZGF5LCBzZXRWaWV3LCBvZmZzZXRDYWxlbmRhciwgc2V0Q2FsZW5kYXJUbywgc2V0RWRpdGluZ1JhbmdlXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NvbnRlbnQgY29sIHJlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgIH0sIHJlbmRlclZpZXdzWyB2aWV3LnZhbHVlIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IGRlZiA9IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICBkZWYgIT09IHZvaWQgMCAmJiBjb250ZW50LnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2FjdGlvbnMnIH0sIGRlZilcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgIGluamVjdEZvcm1JbnB1dChjb250ZW50LCAncHVzaCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGdldEhlYWRlcigpLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IGJsdXJUYXJnZXRSZWYsXG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX21haW4gY29sIGNvbHVtbicsXG4gICAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICAgIH0sIGNvbnRlbnQpXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRRGlhbG9nIGZyb20gJy4uL2RpYWxvZy9RRGlhbG9nLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB1c2VBbmNob3IsIHsgdXNlQW5jaG9yUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1hbmNob3IuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBvcHVwUHJveHknLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQW5jaG9yUHJvcHMsXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA0NTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHBvcHVwUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLmJyZWFrcG9pbnQsIDEwKSlcblxuICAgIGNvbnN0IHsgY2FuU2hvdyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZyB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSAoKSB7XG4gICAgICByZXR1cm4gJHEuc2NyZWVuLndpZHRoIDwgYnJlYWtwb2ludC52YWx1ZSB8fCAkcS5zY3JlZW4uaGVpZ2h0IDwgYnJlYWtwb2ludC52YWx1ZVxuICAgICAgICA/ICdkaWFsb2cnXG4gICAgICAgIDogJ21lbnUnXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHJlZihnZXRUeXBlKCkpXG5cbiAgICBjb25zdCBwb3B1cFByb3BzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZS52YWx1ZSA9PT0gJ21lbnUnID8geyBtYXhIZWlnaHQ6ICc5OXZoJyB9IDoge30pXG4gICAgKVxuXG4gICAgd2F0Y2goKCkgPT4gZ2V0VHlwZSgpLCB2YWwgPT4ge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgdHlwZS52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvblNob3cgKGV2dCkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlIChldnQpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgdHlwZS52YWx1ZSA9IGdldFR5cGUoKVxuICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzaG93IChldnQpIHsgY2FuU2hvdyhldnQpID09PSB0cnVlICYmIHBvcHVwUmVmLnZhbHVlLnNob3coZXZ0KSB9LFxuICAgICAgaGlkZSAoZXZ0KSB7IHBvcHVwUmVmLnZhbHVlLmhpZGUoZXZ0KSB9LFxuICAgICAgdG9nZ2xlIChldnQpIHsgcG9wdXBSZWYudmFsdWUudG9nZ2xlKGV2dCkgfVxuICAgIH0pXG5cbiAgICBpbmplY3RQcm9wKHByb3h5LCAnY3VycmVudENvbXBvbmVudCcsICgpID0+ICh7XG4gICAgICB0eXBlOiB0eXBlLnZhbHVlLFxuICAgICAgcmVmOiBwb3B1cFJlZi52YWx1ZVxuICAgIH0pKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcG9wdXBSZWYsXG4gICAgICAgIC4uLnBvcHVwUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmF0dHJzLFxuICAgICAgICBvblNob3csXG4gICAgICAgIG9uSGlkZVxuICAgICAgfVxuXG4gICAgICBsZXQgY29tcG9uZW50XG5cbiAgICAgIGlmICh0eXBlLnZhbHVlID09PSAnZGlhbG9nJykge1xuICAgICAgICBjb21wb25lbnQgPSBRRGlhbG9nXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50ID0gUU1lbnVcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICAgICAgY29udGV4dE1lbnU6IHByb3BzLmNvbnRleHRNZW51LFxuICAgICAgICAgIG5vUGFyZW50RXZlbnQ6IHRydWUsXG4gICAgICAgICAgc2VwYXJhdGVDbG9zZVBvcHVwOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgc2xvdHMuZGVmYXVsdClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IExvYWRhYmxlU3RhdGUsIExvYWRpbmdTdGF0dXMgfSBmcm9tICcuL0xvYWRhYmxlQ29udHJvbGxlcic7XG5cbmV4cG9ydCB0eXBlIENvbWJpbmVkQXdhaXRlciA9IHtcbiAgb25TdWNjZXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRMb2FkYWJsZUF3YWl0ZXI8VCBleHRlbmRzIExvYWRhYmxlU3RhdGU8YW55PltdPihcbiAgLi4ubG9hZGFibGVzOiBUXG4pOiBMb2FkYWJsZVN0YXRlPHZvaWQ+IHtcbiAgY29uc3QgX3N0YXR1cyA9IHJlZjxMb2FkaW5nU3RhdHVzPihMb2FkaW5nU3RhdHVzLk5vdExvYWRlZCk7XG4gIGNvbnN0IF9zdGF0ZSA9IHJlZjx2b2lkIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IF9lcnJvciA9IHJlZjxFcnJvciB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXR1cyhzdGF0dXM6IExvYWRpbmdTdGF0dXMpIHtcbiAgICBfc3RhdHVzLnZhbHVlID0gc3RhdHVzO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0RXJyb3IoZTogRXJyb3IpIHtcbiAgICBfZXJyb3IudmFsdWUgPSBlO1xuICAgIHNldFN0YXR1cyhMb2FkaW5nU3RhdHVzLkVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN1Y2Nlc3MoKSB7XG4gICAgc2V0U3RhdHVzKExvYWRpbmdTdGF0dXMuU3VjY2Vzcyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMb2FkaW5nKCkge1xuICAgIHNldFN0YXR1cyhMb2FkaW5nU3RhdHVzLkxvYWRpbmcpO1xuICB9XG5cbiAgLy8gV2F0Y2ggYWxsIGxvYWRhYmxlcyBhbmQgdXBkYXRlIGNvbWJpbmVkIHN0YXR1cyBhY2NvcmRpbmdseVxuICB3YXRjaChcbiAgICAoKSA9PiBsb2FkYWJsZXMubWFwKGxvYWRhYmxlID0+IGxvYWRhYmxlLnN0YXR1cy52YWx1ZSksXG4gICAgKHN0YXR1c2VzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzZXMuc29tZShzdGF0dXMgPT4gc3RhdHVzID09PSBMb2FkaW5nU3RhdHVzLkxvYWRpbmcpKSB7XG4gICAgICAgIHNldExvYWRpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzZXMuc29tZShzdGF0dXMgPT4gc3RhdHVzID09PSBMb2FkaW5nU3RhdHVzLkVycm9yKSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGxvYWRhYmxlcy5maW5kKGxvYWRhYmxlID0+IGxvYWRhYmxlLnN0YXR1cy52YWx1ZSA9PT0gTG9hZGluZ1N0YXR1cy5FcnJvcik/LmVycm9yLnZhbHVlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzZXMuZXZlcnkoc3RhdHVzID0+IHN0YXR1cyA9PT0gTG9hZGluZ1N0YXR1cy5TdWNjZXNzKSkge1xuICAgICAgICBzZXRTdWNjZXNzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdGF0dXMoTG9hZGluZ1N0YXR1cy5Ob3RMb2FkZWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiBfc3RhdHVzLFxuICAgIHN0YXRlOiBfc3RhdGUsXG4gICAgZXJyb3I6IF9lcnJvcixcbiAgICBzZXRFcnJvcixcbiAgICBzZXRTdWNjZXNzLFxuICAgIHNldExvYWRpbmcsXG4gIH0gYXMgTG9hZGFibGVTdGF0ZTx2b2lkPjtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUbG1jUGxheWVyQmFja2VuZFxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZSA9IHtcbiAgICBOb25lOiAnTm9uZScsXG4gICAgQWxidW06ICdBbGJ1bScsXG4gICAgQ2lyY2xlOiAnQ2lyY2xlJ1xufSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlID0gdHlwZW9mIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlW2tleW9mIHR5cGVvZiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZV07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlRnJvbUpTT04oanNvbjogYW55KTogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUge1xuICAgIHJldHVybiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZUZyb21KU09OVHlwZWQoanNvbiwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGVGcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlIHtcbiAgICByZXR1cm4ganNvbiBhcyBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlVG9KU09OKHZhbHVlPzogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUgfCBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmFsdWUgYXMgYW55O1xufVxuXG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPExvYWRhYmxlRWxlbWVudCA6c3RhdGUtY29udHJvbGxlcj1cInN0YXRpY0RhdGFBd2FpdGVyXCI+XG4gICAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICAgIDxxLXNwaW5uZXItZ2VhcnMgc2l6ZT1cIjEwMHB4XCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5SYWRpbyBDb25maWd1cmF0aW9uPC9kaXY+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVsZWFzZSBEYXRlIChBZnRlciBEYXRlKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJzLnJlbGVhc2VEYXRlQmVnaW5cIlxuICAgICAgICAgICAgICAgICAgICBtYXNrPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsnZGF0ZSddXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXBvcHVwLXByb3h5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tc2hvdz1cInNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1oaWRlPVwic2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1kYXRlIHYtbW9kZWw9XCJmaWx0ZXJzLnJlbGVhc2VEYXRlQmVnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1kYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXBvcHVwLXByb3h5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJ2ZXJ0aWNhbC1zZXBhcmF0b3IgcS1teC1tZCBiZy10cmFuc3BhcmVudCB0cmFuc3BhcmVudFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVsZWFzZSBEYXRlIChCZWZvcmUgRGF0ZSlcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5yZWxlYXNlRGF0ZUVuZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hc2s9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWydkYXRlJ11cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtcG9wdXAtcHJveHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1zaG93PVwic2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWhpZGU9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWRhdGUgdi1tb2RlbD1cImZpbHRlcnMucmVsZWFzZURhdGVFbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1kYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXBvcHVwLXByb3h5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaXJjbGUgU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgYmVoYXZpb3I9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlcnMuY2lyY2xlc1wiXG4gICAgICAgICAgICAgICAgICB1c2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgIHVzZS1jaGlwc1xuICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgIGlucHV0LWRlYm91bmNlPVwiMFwiXG4gICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImNpcmNsZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgQGZpbHRlcj1cImNpcmNsZUZpbHRlckZuXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIEFsYnVtc1wiXG4gICAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJzLm9yaWdpbmFsQWxidW1zXCJcbiAgICAgICAgICAgICAgICAgIHVzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgdXNlLWNoaXBzXG4gICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwib3JpZ2luYWxBbGJ1bXNPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgIEBmaWx0ZXI9XCJvcmlnaW5hbEFsYnVtc0ZpbHRlckZuXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIFRyYWNrc1wiXG4gICAgICAgICAgICAgICAgICBiZWhhdmlvcj1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJzLm9yaWdpbmFsVHJhY2tzXCJcbiAgICAgICAgICAgICAgICAgIHVzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgdXNlLWNoaXBzXG4gICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgaW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwib3JpZ2luYWxUcmFja3NPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgIEBmaWx0ZXI9XCJvcmlnaW5hbFRyYWNrc0ZpbHRlckZuXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpvcHRpb249XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtIHYtYmluZD1cInNjb3BlLml0ZW1Qcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgc2NvcGUub3B0LmxhYmVsIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgc2NvcGUub3B0LmFsYnVtTmFtZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1hLW1kXCIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzaG93U3RyYXRpZmljYXRpb25JbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJhdGlmaWNhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVycy5zdHJhdGlmaWNhdGlvbk1vZGVcIlxuICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInN0cmF0aWZpY2F0aW9uT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om9wdGlvbj1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gdi1iaW5kPVwic2NvcGUuaXRlbVByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgc2NvcGUub3B0LmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNjb3BlLm9wdC50b29sdGlwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1hLW1kXCIgLz5cblxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBcHBseSBSYWRpbyBTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJhcHBseVJhZGlvU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWNhcmQ+XG5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBjbGFzcz1cInEtbXQtbWRcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+UmFkaW88L2Rpdj5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJjb2wtNCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydC9TdG9wIFJhZGlvXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1iLW1kXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzdGFydFJhZGlvXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNsZWFyIFJhZGlvIFRyYWNrcyBGcm9tIFF1ZXVlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBxLW1iLW1kXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNoZWNrIFRvdGFsIFRyYWNrcyBHaXZlbiBSYWRpbyBTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggcS1tYi1tZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9Mb2FkYWJsZUVsZW1lbnQ+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IENpcmNsZVJlYWREdG8sIE9yaWdpbmFsQWxidW1SZWFkRHRvLCBPcmlnaW5hbFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QnO1xuaW1wb3J0IEdsb2JhbFN0YXRpY0RhdGFQcm92aWRlciBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0dsb2JhbFN0YXRpY0RhdGFQcm92aWRlcic7XG5pbXBvcnQgUmFkaW9TZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUmFkaW9TZXJ2aWNlJztcbmltcG9ydCB7IHVzZUNvbWJpbmVkTG9hZGFibGVBd2FpdGVyIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0NvbWJpbmVkTG9hZGFibGVBd2FpdGVyJztcbmltcG9ydCB7IGluamVjdCwgcmVhY3RpdmUsIHJlZiwgd2F0Y2gsIHRvUmF3LCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IExvYWRhYmxlRWxlbWVudCBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVFbGVtZW50LnZ1ZSc7XG5pbXBvcnQgeyBMb2FkaW5nU3RhdHVzIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBUcmFja1F1ZXJ5RmlsdGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvVHJhY2tRdWVyeUZpbHRlcnMnO1xuaW1wb3J0IHsgVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9zcmMnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCBTdHJhdGlmaWNhdGlvbk1vZGVIZWxwRGlhbG9nIGZyb20gJ3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvU3RyYXRpZmljYXRpb25Nb2RlSGVscERpYWxvZy52dWUnO1xuaW50ZXJmYWNlIFJhZGlvUGFnZUZpbHRlcnMge1xuICByZWxlYXNlRGF0ZUVuZDogc3RyaW5nIHwgbnVsbDtcbiAgcmVsZWFzZURhdGVCZWdpbjogc3RyaW5nIHwgbnVsbDtcbiAgY2lyY2xlczogU2VsZWN0T3B0aW9uc1tdO1xuICBvcmlnaW5hbEFsYnVtczogU2VsZWN0T3B0aW9uc1tdO1xuICBvcmlnaW5hbFRyYWNrczogVHJhY2tTZWxlY3RPcHRpb25zW107XG4gIHN0cmF0aWZpY2F0aW9uTW9kZTogVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGU7XG59XG5cbi8vIEluamVjdCBzZXJ2aWNlc1xuY29uc3QgcmFkaW9TZXJ2aWNlID0gaW5qZWN0PFJhZGlvU2VydmljZT4oJ3JhZGlvU2VydmljZScpO1xuY29uc3Qgc3RhdGljRGF0YSA9IGluamVjdDxHbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXI+KCdnbG9iYWxTdGF0aWNEYXRhUHJvdmlkZXInKTtcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbmNvbnN0IHN0YXJ0UmFkaW8gPSAoKSA9PiB7XG4gIHJhZGlvU2VydmljZT8udG9nZ2xlKCk7XG59O1xuXG5cbi8vIENyZWF0ZSBhbiBhd2FpdGVyIGZvciB0aGUgc3RhdGljIGRhdGFcbmNvbnN0IHN0YXRpY0RhdGFBd2FpdGVyID0gdXNlQ29tYmluZWRMb2FkYWJsZUF3YWl0ZXIoXG4gIHN0YXRpY0RhdGEhLmNpcmNsZXMsXG4gIHN0YXRpY0RhdGEhLm9yaWdpbmFsQWxidW1zLFxuICBzdGF0aWNEYXRhIS5vcmlnaW5hbFRyYWNrc1xuKTtcblxuY29uc3QgZmlsdGVycyA9IHJlYWN0aXZlPFJhZGlvUGFnZUZpbHRlcnM+KHtcbiAgcmVsZWFzZURhdGVFbmQ6IG51bGwgYXMgc3RyaW5nIHwgbnVsbCxcbiAgcmVsZWFzZURhdGVCZWdpbjogbnVsbCBhcyBzdHJpbmcgfCBudWxsLFxuICBjaXJjbGVzOiBbXSBhcyBTZWxlY3RPcHRpb25zW10sXG4gIG9yaWdpbmFsQWxidW1zOiBbXSBhcyBTZWxlY3RPcHRpb25zW10sXG4gIG9yaWdpbmFsVHJhY2tzOiBbXSBhcyBUcmFja1NlbGVjdE9wdGlvbnNbXSxcbiAgc3RyYXRpZmljYXRpb25Nb2RlOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZS5Ob25lLFxufSk7XG5cbmNvbnN0IHRvUmFkaW9GaWx0ZXJzID0gKCk6IFRyYWNrUXVlcnlGaWx0ZXJzID0+IHtcbiAgY29uc3QgcmF3ID0gdG9SYXcoZmlsdGVycyk7XG5cbiAgY29uc3QgcmVsZWFzZURhdGVFbmQgPSByYXcucmVsZWFzZURhdGVFbmQgPyBuZXcgRGF0ZShyYXcucmVsZWFzZURhdGVFbmQpIDogbnVsbDtcbiAgY29uc3QgcmVsZWFzZURhdGVCZWdpbiA9IHJhdy5yZWxlYXNlRGF0ZUJlZ2luID8gbmV3IERhdGUocmF3LnJlbGVhc2VEYXRlQmVnaW4pIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJlbGVhc2VEYXRlRW5kOiAocmVsZWFzZURhdGVFbmQgfHwgdW5kZWZpbmVkKSxcbiAgICByZWxlYXNlRGF0ZUJlZ2luOiAocmVsZWFzZURhdGVCZWdpbiB8fCB1bmRlZmluZWQpLFxuICAgIGNpcmNsZXM6IHJhdy5jaXJjbGVzLm1hcCgoYykgPT4gYy5rZXkpLFxuICAgIG9yaWdpbmFsQWxidW1zOiByYXcub3JpZ2luYWxBbGJ1bXMubWFwKChvYSkgPT4gb2Eua2V5KSxcbiAgICBvcmlnaW5hbFRyYWNrczogcmF3Lm9yaWdpbmFsVHJhY2tzLmZsYXRNYXAoKG90KSA9PiBvdC5hbGlhc1BrcyksXG4gICAgc3RyYXRpZmljYXRpb25Nb2RlOiByYXcuc3RyYXRpZmljYXRpb25Nb2RlLFxuICB9O1xufTtcblxuY29uc3QgZnJvbVJhZGlvRmlsdGVycyA9IChyYWRpb0ZpbHRlcnM6IFRyYWNrUXVlcnlGaWx0ZXJzKTogUmFkaW9QYWdlRmlsdGVycyA9PiB7XG4gIGNvbnN0IGNpcmNsZXMgPSByYWRpb0ZpbHRlcnM/LmNpcmNsZXM/Lm1hcCgoYykgPT4gY2lyY2xlT3B0aW9ucy52YWx1ZS5maW5kKChvKSA9PiBvLmtleSA9PT0gYykhKSA/PyBbXTtcbiAgY29uc3Qgb3JpZ2luYWxBbGJ1bXMgPSByYWRpb0ZpbHRlcnM/Lm9yaWdpbmFsQWxidW1zPy5tYXAoKG9hKSA9PlxuICAgIG9yaWdpbmFsQWxidW1zT3B0aW9ucy52YWx1ZS5maW5kKChvKSA9PiBvLmtleSA9PT0gb2EpIVxuICApID8/IFtdO1xuICBjb25zdCBvcmlnaW5hbFRyYWNrcyA9IHJhZGlvRmlsdGVycz8ub3JpZ2luYWxUcmFja3M/Lm1hcCgob3QpID0+IHtcbiAgICBjb25zdCBmb3VuZCA9IG9yaWdpbmFsVHJhY2tzT3B0aW9ucy52YWx1ZS5maW5kKChvKSA9PiBvdCBpbiBvLmFsaWFzUGtzKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09yaWdpbmFsIHRyYWNrIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pID8/IFtdO1xuXG4gIHJldHVybiB7XG4gICAgcmVsZWFzZURhdGVFbmQ6IHJhZGlvRmlsdGVycy5yZWxlYXNlRGF0ZUVuZD8udG9JU09TdHJpbmcoKSA/PyBudWxsLFxuICAgIHJlbGVhc2VEYXRlQmVnaW46IHJhZGlvRmlsdGVycy5yZWxlYXNlRGF0ZUJlZ2luPy50b0lTT1N0cmluZygpID8/IG51bGwsXG4gICAgY2lyY2xlcyxcbiAgICBvcmlnaW5hbEFsYnVtcyxcbiAgICBvcmlnaW5hbFRyYWNrcyxcbiAgICBzdHJhdGlmaWNhdGlvbk1vZGU6IHJhZGlvRmlsdGVycy5zdHJhdGlmaWNhdGlvbk1vZGUgPz8gVHJhY2tTdHJhdGlmaWNhdGlvbk1vZGUuTm9uZSxcbiAgfTtcbn07XG5cbmNvbnN0IGFwcGx5UmFkaW9TZXR0aW5ncyA9ICgpID0+IHtcbiAgcmFkaW9TZXJ2aWNlPy5zZXRGaWx0ZXJzKHRvUmFkaW9GaWx0ZXJzKCkpO1xufTtcblxuY29uc3Qgc2hvd1N0cmF0aWZpY2F0aW9uSW5mbyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IFN0cmF0aWZpY2F0aW9uTW9kZUhlbHBEaWFsb2csXG4gIH0pO1xufTtcblxuY29uc3Qgc3RyYXRpZmljYXRpb25PcHRpb25zID0gW1xuICB7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZS5Ob25lLCB0b29sdGlwOiAnTm8gc3RyYXRpZmljYXRpb24nIH0sXG4gIHsgbGFiZWw6ICdBbGJ1bScsIHZhbHVlOiBUcmFja1N0cmF0aWZpY2F0aW9uTW9kZS5BbGJ1bSwgdG9vbHRpcDogJ0VxdWFsIG51bWJlciBvZiB0cmFja3MgcGVyIGFsYnVtJyB9LFxuICB7IGxhYmVsOiAnQ2lyY2xlJywgdmFsdWU6IFRyYWNrU3RyYXRpZmljYXRpb25Nb2RlLkNpcmNsZSwgdG9vbHRpcDogJ0VxdWFsIG51bWJlciBvZiB0cmFja3MgcGVyIGNpcmNsZScgfSxcbl07XG5cbmludGVyZmFjZSBTZWxlY3RPcHRpb25zIHtcbiAga2V5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbnR5cGUgVHJhY2tTZWxlY3RPcHRpb25zID0ge1xuICBhbGlhc1Brczogc3RyaW5nW107XG4gIGFsYnVtTmFtZTogc3RyaW5nO1xufSAmIFNlbGVjdE9wdGlvbnM7XG5cbmNvbnN0IGNpcmNsZUR0b1RvU2VsZWN0T3B0aW9uID0gKGR0bzogQ2lyY2xlUmVhZER0byk6IFNlbGVjdE9wdGlvbnMgPT4gKHtcbiAga2V5OiBkdG8uaWQhLFxuICBsYWJlbDogZHRvLm5hbWUhLFxufSk7XG5cbmNvbnN0IG9yaWdpbmFsQWxidW1zRHRvVG9TZWxlY3RPcHRpb24gPSAoZHRvOiBPcmlnaW5hbEFsYnVtUmVhZER0byk6IFNlbGVjdE9wdGlvbnMgPT4gKHtcbiAga2V5OiBkdG8uaWQhLFxuICBsYWJlbDogZHRvLmZ1bGxOYW1lIS5lbiEsXG59KTtcbi8vIHdlIG5lZWQgYSBkaWZmZXJlbnQgZnVuY3Rpb24gZm9yIG9yaWdpbmFsIHRyYWNrcyBiZWNhdXNlIHRoZSB0aXRsZSBtYXkgY29udGFpbiBkdXBsaWNhdGVzXG4vLyAoZnJvbSBkaWZmZXJlbnQgZ2FtZXMvYWxidW1zKSwgd2UgbmVlZCB0byBtYWtlIHRoZW0gdW5pcXVlIGJ5IHRoZSB0aXRsZSwgYW5kIGVhY2ggdGl0bGVcbi8vIGNhbiBhc3NvY2lhdGUgd2l0aCBtdWx0aXBsZSBQS3NcbmNvbnN0IG9yaWdpbmFsVHJhY2tzRHRvVG9TZWxlY3RPcHRpb25zID0gKGR0b3M6IE9yaWdpbmFsVHJhY2tSZWFkRHRvW10pOiBUcmFja1NlbGVjdE9wdGlvbnNbXSA9PiB7XG4gIC8vIGZpcnN0IHNvcnQgdGhlIGR0b3MgYnkgaXQncyBpZFxuICBkdG9zLnNvcnQoKGEsIGIpID0+IGEuaWQhLmxvY2FsZUNvbXBhcmUoYi5pZCEpKTtcblxuICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgVHJhY2tTZWxlY3RPcHRpb25zPigpO1xuICBmb3IgKGNvbnN0IGR0byBvZiBkdG9zKSB7XG4gICAgY29uc3Qga2V5ID0gZHRvLnRpdGxlIS5lbiE7XG4gICAgaWYgKG1hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gbWFwLmdldChrZXkpITtcbiAgICAgIG9wdGlvbi5hbGlhc1BrcyEucHVzaChkdG8uaWQhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLnNldChrZXksIHtcbiAgICAgICAga2V5OiBkdG8uaWQhLFxuICAgICAgICBsYWJlbDoga2V5LFxuICAgICAgICBhbGlhc1BrczogW2R0by5pZCFdLFxuICAgICAgICBhbGJ1bU5hbWU6IGR0by5hbGJ1bSEuc2hvcnROYW1lIS5lbiEsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20obWFwLnZhbHVlcygpKTtcbn07XG5cbmNvbnN0IGNpcmNsZU9wdGlvbnMgPSByZWY8U2VsZWN0T3B0aW9uc1tdPihbXSk7XG5jb25zdCBvcmlnaW5hbEFsYnVtc09wdGlvbnMgPSByZWY8U2VsZWN0T3B0aW9uc1tdPihbXSk7XG5jb25zdCBvcmlnaW5hbFRyYWNrc09wdGlvbnMgPSByZWY8VHJhY2tTZWxlY3RPcHRpb25zW10+KFtdKTtcblxuY29uc3QgcmVzdG9yZUN1cnJlbnRGaWx0ZXJzID0gKCkgPT4ge1xuICBjb25zdCByYWRpb0ZpbHRlcnMgPSByYWRpb1NlcnZpY2U/LmZpbHRlcnMudmFsdWU7XG4gIGlmIChyYWRpb0ZpbHRlcnMpIHtcbiAgICBjb25zdCBleGlzdGluZ0ZpbHRlcnMgPSBmcm9tUmFkaW9GaWx0ZXJzKHJhZGlvRmlsdGVycyBhcyBUcmFja1F1ZXJ5RmlsdGVycyk7XG4gICAgT2JqZWN0LmFzc2lnbihmaWx0ZXJzLCBleGlzdGluZ0ZpbHRlcnMpO1xuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplT3B0aW9ucyA9ICgpID0+IHtcbiAgY2lyY2xlT3B0aW9ucy52YWx1ZSA9IHN0YXRpY0RhdGEhLmNpcmNsZXMuc3RhdGUhLnZhbHVlIS5tYXAoXG4gICAgKGR0bykgPT4gY2lyY2xlRHRvVG9TZWxlY3RPcHRpb24oZHRvKVxuICApO1xuXG4gIG9yaWdpbmFsQWxidW1zT3B0aW9ucy52YWx1ZSA9IHN0YXRpY0RhdGEhLm9yaWdpbmFsQWxidW1zLnN0YXRlIS52YWx1ZSEubWFwKFxuICAgIChkdG8pID0+IG9yaWdpbmFsQWxidW1zRHRvVG9TZWxlY3RPcHRpb24oZHRvKVxuICApO1xuXG4gIG9yaWdpbmFsVHJhY2tzT3B0aW9ucy52YWx1ZSA9IG9yaWdpbmFsVHJhY2tzRHRvVG9TZWxlY3RPcHRpb25zKFxuICAgIHN0YXRpY0RhdGEhLm9yaWdpbmFsVHJhY2tzLnN0YXRlIS52YWx1ZSFcbiAgKTtcbn1cblxud2F0Y2goc3RhdGljRGF0YUF3YWl0ZXIuc3RhdHVzLCAoc3RhdHVzKSA9PiB7XG4gIGlmIChzdGF0dXMgPT09IExvYWRpbmdTdGF0dXMuU3VjY2Vzcykge1xuICAgIGluaXRpYWxpemVPcHRpb25zKCk7XG4gICAgcmVzdG9yZUN1cnJlbnRGaWx0ZXJzKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBjaXJjbGVGaWx0ZXJGbiA9ICh2YWw6IHN0cmluZywgdXBkYXRlOiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpID0+IHtcbiAgdXBkYXRlKCgpID0+IHtcbiAgICBjb25zdCBuZWVkbGUgPSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICBjaXJjbGVPcHRpb25zLnZhbHVlID0gc3RhdGljRGF0YSEuY2lyY2xlcy5zdGF0ZSEudmFsdWUhLmZpbHRlcigoZHRvKSA9PiB7XG4gICAgICByZXR1cm4gZHRvLm5hbWUhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmVlZGxlKTtcbiAgICB9KS5tYXAoY2lyY2xlRHRvVG9TZWxlY3RPcHRpb24pO1xuICB9KTtcbn07XG5cbmNvbnN0IG9yaWdpbmFsQWxidW1zRmlsdGVyRm4gPSAodmFsOiBzdHJpbmcsIHVwZGF0ZTogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSA9PiB7XG4gIHVwZGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgbmVlZGxlID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgb3JpZ2luYWxBbGJ1bXNPcHRpb25zLnZhbHVlID0gc3RhdGljRGF0YSEub3JpZ2luYWxBbGJ1bXMuc3RhdGUhLnZhbHVlIS5maWx0ZXIoKGR0bykgPT4ge1xuICAgICAgcmV0dXJuIGR0by5mdWxsTmFtZSEuZW4hLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmVlZGxlKTtcbiAgICB9KS5tYXAob3JpZ2luYWxBbGJ1bXNEdG9Ub1NlbGVjdE9wdGlvbik7XG4gIH0pO1xufTtcblxuY29uc3Qgb3JpZ2luYWxUcmFja3NGaWx0ZXJGbiA9ICh2YWw6IHN0cmluZywgdXBkYXRlOiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpID0+IHtcbiAgdXBkYXRlKCgpID0+IHtcbiAgICBjb25zdCBuZWVkbGUgPSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICBvcmlnaW5hbFRyYWNrc09wdGlvbnMudmFsdWUgPSBvcmlnaW5hbFRyYWNrc0R0b1RvU2VsZWN0T3B0aW9ucyhcbiAgICAgIHN0YXRpY0RhdGEhLm9yaWdpbmFsVHJhY2tzLnN0YXRlIS52YWx1ZSEuZmlsdGVyKChkdG8pID0+IHtcbiAgICAgICAgcmV0dXJuIGR0by50aXRsZSEuZW4hLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmVlZGxlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG59O1xuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICAvLyBDaGVjayBpZiBzdGF0aWMgZGF0YSBpcyBhbHJlYWR5IGxvYWRlZFxuICBpZiAoc3RhdGljRGF0YUF3YWl0ZXIuc3RhdHVzLnZhbHVlID09PSBMb2FkaW5nU3RhdHVzLlN1Y2Nlc3MpIHtcbiAgICBpbml0aWFsaXplT3B0aW9ucygpO1xuICAgIHJlc3RvcmVDdXJyZW50RmlsdGVycygpO1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImxhbmciLCJtYXNrIiwibG9jYWxlIiwibW9kZWwiLCJkYXRlIiwiZGF5cyIsInllYXIiLCJ2aWV3IiwiZGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZSxTQUFBLGlCQUFZO0FBQ3pCLE1BQUksUUFBUSx1QkFBTyxPQUFPLElBQUk7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
