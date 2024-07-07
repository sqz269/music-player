import { ai as createDirective, aj as client, ak as noop, al as leftClick, am as addEvt, an as preventDraggable, ao as prevent, ap as stop, a9 as position, aq as cleanEvt, ac as stopAndPrevent, r as ref, z as isRuntimeSsrPreHydration, o as onMounted, c as createComponent, k as onBeforeUnmount, n as nextTick, m as h, t as getCurrentInstance, ar as listenOpts, w as watch, as as getScrollTarget, at as getVerticalScrollPosition, au as getHorizontalScrollPosition } from "./index.bb81baa4.js";
import { c as clearSelection } from "./QSelect.5cc552e1.js";
const modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true
};
const directionList = Object.keys(modifiersAll);
modifiersAll.all = true;
function getModifierDirections(mod) {
  const dir = {};
  for (const direction of directionList) {
    if (mod[direction] === true) {
      dir[direction] = true;
    }
  }
  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }
  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  } else if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true;
  } else if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }
  return dir;
}
const avoidNodeNamesList = ["INPUT", "TEXTAREA"];
function shouldStart(evt, ctx) {
  return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && avoidNodeNamesList.includes(evt.target.nodeName.toUpperCase()) === false && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}
function getChanges(evt, ctx, isFinal) {
  const pos = position(evt);
  let dir, distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y, absX = Math.abs(distX), absY = Math.abs(distY);
  const direction = ctx.direction;
  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? "left" : "right";
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? "up" : "down";
  } else if (direction.up === true && distY < 0) {
    dir = "up";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = "down";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = "left";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = "right";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  }
  let synthetic = false;
  if (dir === void 0 && isFinal === false) {
    if (ctx.event.isFirst === true || ctx.event.lastDir === void 0) {
      return {};
    }
    dir = ctx.event.lastDir;
    synthetic = true;
    if (dir === "left" || dir === "right") {
      pos.left -= distX;
      absX = 0;
      distX = 0;
    } else {
      pos.top -= distY;
      absY = 0;
      distY = 0;
    }
  }
  return {
    synthetic,
    payload: {
      evt,
      touch: ctx.event.mouse !== true,
      mouse: ctx.event.mouse === true,
      position: pos,
      direction: dir,
      isFirst: ctx.event.isFirst,
      isFinal: isFinal === true,
      duration: Date.now() - ctx.event.time,
      distance: {
        x: absX,
        y: absY
      },
      offset: {
        x: distX,
        y: distY
      },
      delta: {
        x: pos.left - ctx.event.lastX,
        y: pos.top - ctx.event.lastY
      }
    }
  };
}
let uid = 0;
var TouchPan = createDirective(
  {
    name: "touch-pan",
    beforeMount(el, { value: value2, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      function handleEvent(evt, mouseEvent) {
        if (modifiers.mouse === true && mouseEvent === true) {
          stopAndPrevent(evt);
        } else {
          modifiers.stop === true && stop(evt);
          modifiers.prevent === true && prevent(evt);
        }
      }
      const ctx = {
        uid: "qvtp_" + uid++,
        handler: value2,
        modifiers,
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "notPassiveCapture"],
              [document, "mouseup", "end", "passiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "passiveCapture"],
              [target, "touchend", "end", "passiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          ctx.lastEvt = evt;
          if (mouseEvent === true || modifiers.stop === true) {
            if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true && ctx.modifiers.mousealldir !== true)) {
              const clone = evt.type.indexOf("mouse") !== -1 ? new MouseEvent(evt.type, evt) : new TouchEvent(evt.type, evt);
              evt.defaultPrevented === true && prevent(clone);
              evt.cancelBubble === true && stop(clone);
              Object.assign(clone, {
                qKeyEvent: evt.qKeyEvent,
                qClickOutside: evt.qClickOutside,
                qAnchorHandled: evt.qAnchorHandled,
                qClonedBy: evt.qClonedBy === void 0 ? [ctx.uid] : evt.qClonedBy.concat(ctx.uid)
              });
              ctx.initialEvent = {
                target: evt.target,
                event: clone
              };
            }
            stop(evt);
          }
          const { left, top } = position(evt);
          ctx.event = {
            x: left,
            y: top,
            time: Date.now(),
            mouse: mouseEvent === true,
            detected: false,
            isFirst: true,
            isFinal: false,
            lastX: left,
            lastY: top
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y;
          if (distX === 0 && distY === 0) {
            return;
          }
          ctx.lastEvt = evt;
          const isMouseEvt = ctx.event.mouse === true;
          const start = () => {
            handleEvent(evt, isMouseEvt);
            let cursor;
            if (modifiers.preserveCursor !== true && modifiers.preservecursor !== true) {
              cursor = document.documentElement.style.cursor || "";
              document.documentElement.style.cursor = "grabbing";
            }
            isMouseEvt === true && document.body.classList.add("no-pointer-events--children");
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelayedFn) => {
              ctx.styleCleanup = void 0;
              if (cursor !== void 0) {
                document.documentElement.style.cursor = cursor;
              }
              document.body.classList.remove("non-selectable");
              if (isMouseEvt === true) {
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelayedFn !== void 0) {
                  setTimeout(() => {
                    remove();
                    withDelayedFn();
                  }, 50);
                } else {
                  remove();
                }
              } else if (withDelayedFn !== void 0) {
                withDelayedFn();
              }
            };
          };
          if (ctx.event.detected === true) {
            ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
            const { payload, synthetic } = getChanges(evt, ctx, false);
            if (payload !== void 0) {
              if (ctx.handler(payload) === false) {
                ctx.end(evt);
              } else {
                if (ctx.styleCleanup === void 0 && ctx.event.isFirst === true) {
                  start();
                }
                ctx.event.lastX = payload.position.left;
                ctx.event.lastY = payload.position.top;
                ctx.event.lastDir = synthetic === true ? void 0 : payload.direction;
                ctx.event.isFirst = false;
              }
            }
            return;
          }
          if (ctx.direction.all === true || isMouseEvt === true && (ctx.modifiers.mouseAllDir === true || ctx.modifiers.mousealldir === true)) {
            start();
            ctx.event.detected = true;
            ctx.move(evt);
            return;
          }
          const absX = Math.abs(distX), absY = Math.abs(distY);
          if (absX !== absY) {
            if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
              ctx.event.detected = true;
              ctx.move(evt);
            } else {
              ctx.end(evt, true);
            }
          }
        },
        end(evt, abort) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          if (abort === true) {
            ctx.styleCleanup !== void 0 && ctx.styleCleanup();
            if (ctx.event.detected !== true && ctx.initialEvent !== void 0) {
              ctx.initialEvent.target.dispatchEvent(ctx.initialEvent.event);
            }
          } else if (ctx.event.detected === true) {
            ctx.event.isFirst === true && ctx.handler(getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx).payload);
            const { payload } = getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx, true);
            const fn = () => {
              ctx.handler(payload);
            };
            if (ctx.styleCleanup !== void 0) {
              ctx.styleCleanup(fn);
            } else {
              fn();
            }
          }
          ctx.event = void 0;
          ctx.initialEvent = void 0;
          ctx.lastEvt = void 0;
        }
      };
      el.__qtouchpan = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        ctx.event !== void 0 && ctx.end();
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchpan;
      }
    }
  }
);
function useHydration() {
  const isHydrated = ref(!isRuntimeSsrPreHydration.value);
  if (isHydrated.value === false) {
    onMounted(() => {
      isHydrated.value = true;
    });
  }
  return { isHydrated };
}
const hasObserver = typeof ResizeObserver !== "undefined";
const resizeProps = hasObserver === true ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
};
var QResizeObserver = createComponent({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup(props, { emit }) {
    let timer = null, targetEl, size = { width: -1, height: -1 };
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (timer === null) {
        timer = setTimeout(emitEvent, props.debounce);
      }
    }
    function emitEvent() {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (targetEl) {
        const { offsetWidth: width, offsetHeight: height } = targetEl;
        if (width !== size.width || height !== size.height) {
          size = { width, height };
          emit("resize", size);
        }
      }
    }
    const { proxy } = getCurrentInstance();
    proxy.trigger = trigger;
    if (hasObserver === true) {
      let observer;
      const init = (stop2) => {
        targetEl = proxy.$el.parentNode;
        if (targetEl) {
          observer = new ResizeObserver(trigger);
          observer.observe(targetEl);
          emitEvent();
        } else if (stop2 !== true) {
          nextTick(() => {
            init(true);
          });
        }
      };
      onMounted(() => {
        init();
      });
      onBeforeUnmount(() => {
        timer !== null && clearTimeout(timer);
        if (observer !== void 0) {
          if (observer.disconnect !== void 0) {
            observer.disconnect();
          } else if (targetEl) {
            observer.unobserve(targetEl);
          }
        }
      });
      return noop;
    } else {
      let cleanup = function() {
        if (timer !== null) {
          clearTimeout(timer);
          timer = null;
        }
        if (curDocView !== void 0) {
          if (curDocView.removeEventListener !== void 0) {
            curDocView.removeEventListener("resize", trigger, listenOpts.passive);
          }
          curDocView = void 0;
        }
      }, onObjLoad = function() {
        cleanup();
        if (targetEl && targetEl.contentDocument) {
          curDocView = targetEl.contentDocument.defaultView;
          curDocView.addEventListener("resize", trigger, listenOpts.passive);
          emitEvent();
        }
      };
      const { isHydrated } = useHydration();
      let curDocView;
      onMounted(() => {
        nextTick(() => {
          targetEl = proxy.$el;
          targetEl && onObjLoad();
        });
      });
      onBeforeUnmount(cleanup);
      return () => {
        if (isHydrated.value === true) {
          return h("object", {
            class: "q--avoid-card-border",
            style: resizeProps.style,
            tabindex: -1,
            type: "text/html",
            data: resizeProps.url,
            "aria-hidden": "true",
            onLoad: onObjLoad
          });
        }
      };
    }
  }
});
const { passive } = listenOpts;
const axisValues = ["both", "horizontal", "vertical"];
var QScrollObserver = createComponent({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: (v) => axisValues.includes(v),
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: {
      default: void 0
    }
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: false,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    let clearTimer = null, localScrollTarget, parentEl;
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function emitEvent() {
      clearTimer !== null && clearTimer();
      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);
      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };
      if (props.axis === "vertical" && delta.top === 0 || props.axis === "horizontal" && delta.left === 0) {
        return;
      }
      const curDir = Math.abs(delta.top) >= Math.abs(delta.left) ? delta.top < 0 ? "up" : "down" : delta.left < 0 ? "left" : "right";
      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;
      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }
      emit("scroll", { ...scroll });
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
      localScrollTarget.addEventListener("scroll", trigger, passive);
      trigger(true);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", trigger, passive);
        localScrollTarget = void 0;
      }
    }
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (clearTimer === null) {
        const [timer, fn] = props.debounce ? [setTimeout(emitEvent, props.debounce), clearTimeout] : [requestAnimationFrame(emitEvent), cancelAnimationFrame];
        clearTimer = () => {
          fn(timer);
          clearTimer = null;
        };
      }
    }
    const { proxy } = getCurrentInstance();
    watch(() => proxy.$q.lang.rtl, emitEvent);
    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });
    onBeforeUnmount(() => {
      clearTimer !== null && clearTimer();
      unconfigureScrollTarget();
    });
    Object.assign(proxy, {
      trigger,
      getPosition: () => scroll
    });
    return noop;
  }
});
export { QResizeObserver as Q, TouchPan as T, QScrollObserver as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNjcm9sbE9ic2VydmVyLjQ2ODIyYmFjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3RvdWNoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvZGlyZWN0aXZlcy90b3VjaC1wYW4vVG91Y2hQYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy91c2UtaHlkcmF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGlmaWVyc0FsbCA9IHtcbiAgbGVmdDogdHJ1ZSxcbiAgcmlnaHQ6IHRydWUsXG4gIHVwOiB0cnVlLFxuICBkb3duOiB0cnVlLFxuICBob3Jpem9udGFsOiB0cnVlLFxuICB2ZXJ0aWNhbDogdHJ1ZVxufVxuXG5jb25zdCBkaXJlY3Rpb25MaXN0ID0gT2JqZWN0LmtleXMobW9kaWZpZXJzQWxsKVxuXG5tb2RpZmllcnNBbGwuYWxsID0gdHJ1ZVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zIChtb2QpIHtcbiAgY29uc3QgZGlyID0ge31cblxuICBmb3IgKGNvbnN0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25MaXN0KSB7XG4gICAgaWYgKG1vZFsgZGlyZWN0aW9uIF0gPT09IHRydWUpIHtcbiAgICAgIGRpclsgZGlyZWN0aW9uIF0gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGRpcikubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyc0FsbFxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgZGlyLmxlZnQgPSBkaXIucmlnaHQgPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLmxlZnQgPT09IHRydWUgJiYgZGlyLnJpZ2h0ID09PSB0cnVlKSB7XG4gICAgZGlyLmhvcml6b250YWwgPSB0cnVlXG4gIH1cblxuICBpZiAoZGlyLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyLnVwID0gZGlyLmRvd24gPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLnVwID09PSB0cnVlICYmIGRpci5kb3duID09PSB0cnVlKSB7XG4gICAgZGlyLnZlcnRpY2FsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlICYmIGRpci52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci5hbGwgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gZGlyXG59XG5cbi8vIFRoaXMgaXMgZXNwZWNpYWxseSBpbXBvcnRhbnQgKG5vdCB0aGUgbWFpbiByZWFzb24sIGJ1dCBpbXBvcnRhbnQpXG4vLyBmb3IgVG91Y2hTd2lwZSBkaXJlY3RpdmUgcnVubmluZyBvbiBGaXJlZm94XG4vLyBiZWNhdXNlIHRleHQgc2VsZWN0aW9uIG9uIHN1Y2ggZWxlbWVudHMgY2Fubm90IGJlIGRldGVybWluZWRcbi8vIHdpdGhvdXQgYWRkaXRpb25hbCB3b3JrIChvbiB0b3Agb2YgZ2V0U2VsZWN0aW9uKCkgQVBJKVxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODU2ODZcbmNvbnN0IGF2b2lkTm9kZU5hbWVzTGlzdCA9IFsgJ0lOUFVUJywgJ1RFWFRBUkVBJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTdGFydCAoZXZ0LCBjdHgpIHtcbiAgcmV0dXJuIGN0eC5ldmVudCA9PT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldCAhPT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldC5kcmFnZ2FibGUgIT09IHRydWVcbiAgICAmJiB0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbidcbiAgICAmJiBhdm9pZE5vZGVOYW1lc0xpc3QuaW5jbHVkZXMoZXZ0LnRhcmdldC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSA9PT0gZmFsc2VcbiAgICAmJiAoZXZ0LnFDbG9uZWRCeSA9PT0gdm9pZCAwIHx8IGV2dC5xQ2xvbmVkQnkuaW5kZXhPZihjdHgudWlkKSA9PT0gLTEpXG59XG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldE1vZGlmaWVyRGlyZWN0aW9ucywgc2hvdWxkU3RhcnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3RvdWNoLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgcHJldmVudCwgc3RvcCwgc3RvcEFuZFByZXZlbnQsIHByZXZlbnREcmFnZ2FibGUsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5mdW5jdGlvbiBnZXRDaGFuZ2VzIChldnQsIGN0eCwgaXNGaW5hbCkge1xuICBjb25zdCBwb3MgPSBwb3NpdGlvbihldnQpXG4gIGxldFxuICAgIGRpcixcbiAgICBkaXN0WCA9IHBvcy5sZWZ0IC0gY3R4LmV2ZW50LngsXG4gICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnksXG4gICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgY29uc3QgZGlyZWN0aW9uID0gY3R4LmRpcmVjdGlvblxuXG4gIGlmIChkaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBkaXJlY3Rpb24udmVydGljYWwgIT09IHRydWUpIHtcbiAgICBkaXIgPSBkaXN0WCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnXG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmhvcml6b250YWwgIT09IHRydWUgJiYgZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyID0gZGlzdFkgPCAwID8gJ3VwJyA6ICdkb3duJ1xuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICBkaXIgPSAndXAnXG4gICAgaWYgKGFic1ggPiBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgICAgIGRpciA9ICdsZWZ0J1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgICAgICBkaXIgPSAncmlnaHQnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgIGRpciA9ICdkb3duJ1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgICAgICBkaXIgPSAnbGVmdCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICAgICAgZGlyID0gJ3JpZ2h0J1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICBkaXIgPSAnbGVmdCdcbiAgICBpZiAoYWJzWCA8IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgICAgIGRpciA9ICd1cCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgICAgICBkaXIgPSAnZG93bidcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgIGRpciA9ICdyaWdodCdcbiAgICBpZiAoYWJzWCA8IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgICAgIGRpciA9ICd1cCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgICAgICBkaXIgPSAnZG93bidcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgc3ludGhldGljID0gZmFsc2VcblxuICBpZiAoZGlyID09PSB2b2lkIDAgJiYgaXNGaW5hbCA9PT0gZmFsc2UpIHtcbiAgICBpZiAoY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUgfHwgY3R4LmV2ZW50Lmxhc3REaXIgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgZGlyID0gY3R4LmV2ZW50Lmxhc3REaXJcbiAgICBzeW50aGV0aWMgPSB0cnVlXG5cbiAgICBpZiAoZGlyID09PSAnbGVmdCcgfHwgZGlyID09PSAncmlnaHQnKSB7XG4gICAgICBwb3MubGVmdCAtPSBkaXN0WFxuICAgICAgYWJzWCA9IDBcbiAgICAgIGRpc3RYID0gMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHBvcy50b3AgLT0gZGlzdFlcbiAgICAgIGFic1kgPSAwXG4gICAgICBkaXN0WSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN5bnRoZXRpYyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBldnQsXG4gICAgICB0b3VjaDogY3R4LmV2ZW50Lm1vdXNlICE9PSB0cnVlLFxuICAgICAgbW91c2U6IGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICBkaXJlY3Rpb246IGRpcixcbiAgICAgIGlzRmlyc3Q6IGN0eC5ldmVudC5pc0ZpcnN0LFxuICAgICAgaXNGaW5hbDogaXNGaW5hbCA9PT0gdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBEYXRlLm5vdygpIC0gY3R4LmV2ZW50LnRpbWUsXG4gICAgICBkaXN0YW5jZToge1xuICAgICAgICB4OiBhYnNYLFxuICAgICAgICB5OiBhYnNZXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIHg6IGRpc3RYLFxuICAgICAgICB5OiBkaXN0WVxuICAgICAgfSxcbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHg6IHBvcy5sZWZ0IC0gY3R4LmV2ZW50Lmxhc3RYLFxuICAgICAgICB5OiBwb3MudG9wIC0gY3R4LmV2ZW50Lmxhc3RZXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCB1aWQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICd0b3VjaC1wYW4nLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ3RvdWNoLXBhbicsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcbiAgICAgICAgLy8gZWFybHkgcmV0dXJuLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgIT09IHRydWUgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUgJiYgbW91c2VFdmVudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5zdG9wID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuICAgICAgICAgICAgbW9kaWZpZXJzLnByZXZlbnQgPT09IHRydWUgJiYgcHJldmVudChldnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIHVpZDogJ3F2dHBfJyArICh1aWQrKyksXG4gICAgICAgICAgaGFuZGxlcjogdmFsdWUsXG4gICAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICAgIGRpcmVjdGlvbjogZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKG1vZGlmaWVycyksXG5cbiAgICAgICAgICBub29wLFxuXG4gICAgICAgICAgbW91c2VTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpICYmIGxlZnRDbGljayhldnQpKSB7XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZW1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2V1cCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB0b3VjaFN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuXG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCB0cnVlKVxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSBldnRcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogU3RvcCBwcm9wYWdhdGlvbiBzbyBwb3NzaWJsZSB1cHBlciB2LXRvdWNoLXBhbiBkb24ndCBjYXRjaCB0aGlzIGFzIHdlbGw7XG4gICAgICAgICAgICAqIElmIHdlJ3JlIG5vdCB0aGUgdGFyZ2V0IChiYXNlZCBvbiBtb2RpZmllcnMpLCB3ZSdsbCByZS1lbWl0IHRoZSBldmVudCBsYXRlclxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChtb3VzZUV2ZW50ID09PSB0cnVlIHx8IG1vZGlmaWVycy5zdG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICogYXJlIHdlIGRpcmVjdGx5IHN3aXRjaGluZyB0byBkZXRlY3RlZCBzdGF0ZT9cbiAgICAgICAgICAgICAgKiBjbG9uZSBldmVudCBvbmx5IG90aGVyd2lzZVxuICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgIT09IHRydWVcbiAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgICAgICAgICYmIChtb3VzZUV2ZW50ICE9PSB0cnVlIHx8IChjdHgubW9kaWZpZXJzLm1vdXNlQWxsRGlyICE9PSB0cnVlICYmIGN0eC5tb2RpZmllcnMubW91c2VhbGxkaXIgIT09IHRydWUpKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZSA9IGV2dC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xXG4gICAgICAgICAgICAgICAgICA/IG5ldyBNb3VzZUV2ZW50KGV2dC50eXBlLCBldnQpXG4gICAgICAgICAgICAgICAgICA6IG5ldyBUb3VjaEV2ZW50KGV2dC50eXBlLCBldnQpXG5cbiAgICAgICAgICAgICAgICBldnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGNsb25lKVxuICAgICAgICAgICAgICAgIGV2dC5jYW5jZWxCdWJibGUgPT09IHRydWUgJiYgc3RvcChjbG9uZSlcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2xvbmUsIHtcbiAgICAgICAgICAgICAgICAgIHFLZXlFdmVudDogZXZ0LnFLZXlFdmVudCxcbiAgICAgICAgICAgICAgICAgIHFDbGlja091dHNpZGU6IGV2dC5xQ2xpY2tPdXRzaWRlLFxuICAgICAgICAgICAgICAgICAgcUFuY2hvckhhbmRsZWQ6IGV2dC5xQW5jaG9ySGFuZGxlZCxcbiAgICAgICAgICAgICAgICAgIHFDbG9uZWRCeTogZXZ0LnFDbG9uZWRCeSA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgID8gWyBjdHgudWlkIF1cbiAgICAgICAgICAgICAgICAgICAgOiBldnQucUNsb25lZEJ5LmNvbmNhdChjdHgudWlkKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBldnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgZXZlbnQ6IGNsb25lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3RvcChldnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBwb3NpdGlvbihldnQpXG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHtcbiAgICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgICAgeTogdG9wLFxuICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgZGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpc0ZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICBpc0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGFzdFg6IGxlZnQsXG4gICAgICAgICAgICAgIGxhc3RZOiB0b3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbW92ZSAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICAgICAgICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICAgICAgICAgICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnlcblxuICAgICAgICAgICAgLy8gcHJldmVudCBidWdneSBicm93c2VyIGJlaGF2aW9yIChsaWtlIEJsaW5rLWJhc2VkIGVuZ2luZSBvbmVzIG9uIFdpbmRvd3MpXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IG9jY3VycyBldmVuIGlmIHRoZXJlJ3Mgbm8gbW92ZW1lbnQgYWZ0ZXIgbW91c2Vkb3duXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNjE0NjRcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTcyMTM0MVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3F1YXNhcmZyYW1ld29yay9xdWFzYXIvaXNzdWVzLzEwNzIxXG4gICAgICAgICAgICBpZiAoZGlzdFggPT09IDAgJiYgZGlzdFkgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gZXZ0XG5cbiAgICAgICAgICAgIGNvbnN0IGlzTW91c2VFdnQgPSBjdHguZXZlbnQubW91c2UgPT09IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVFdmVudChldnQsIGlzTW91c2VFdnQpXG5cbiAgICAgICAgICAgICAgbGV0IGN1cnNvclxuICAgICAgICAgICAgICBpZiAobW9kaWZpZXJzLnByZXNlcnZlQ3Vyc29yICE9PSB0cnVlICYmIG1vZGlmaWVycy5wcmVzZXJ2ZWN1cnNvciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnNvciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgfHwgJydcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJ1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaXNNb3VzZUV2dCA9PT0gdHJ1ZSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHdpdGhEZWxheWVkRm4gPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IGN1cnNvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTW91c2VFdnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICB3aXRoRGVsYXllZEZuKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCAhPT0gdHJ1ZSAmJiBoYW5kbGVFdmVudChldnQsIGN0eC5ldmVudC5tb3VzZSlcblxuICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQsIHN5bnRoZXRpYyB9ID0gZ2V0Q2hhbmdlcyhldnQsIGN0eCwgZmFsc2UpXG5cbiAgICAgICAgICAgICAgaWYgKHBheWxvYWQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguaGFuZGxlcihwYXlsb2FkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdHguc3R5bGVDbGVhbnVwID09PSB2b2lkIDAgJiYgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFggPSBwYXlsb2FkLnBvc2l0aW9uLmxlZnRcbiAgICAgICAgICAgICAgICAgIGN0eC5ldmVudC5sYXN0WSA9IHBheWxvYWQucG9zaXRpb24udG9wXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdERpciA9IHN5bnRoZXRpYyA9PT0gdHJ1ZSA/IHZvaWQgMCA6IHBheWxvYWQuZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgPT09IHRydWVcbiAgICAgICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICAgICAgfHwgKGlzTW91c2VFdnQgPT09IHRydWUgJiYgKGN0eC5tb2RpZmllcnMubW91c2VBbGxEaXIgPT09IHRydWUgfHwgY3R4Lm1vZGlmaWVycy5tb3VzZWFsbGRpciA9PT0gdHJ1ZSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICBjdHguZXZlbnQuZGV0ZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgICAgICAgICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICAgICAgICAgICAgaWYgKGFic1ggIT09IGFic1kpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChjdHguZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWUgJiYgYWJzWCA+IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udmVydGljYWwgPT09IHRydWUgJiYgYWJzWCA8IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udXAgPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPiAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgYWJzWCA+IGFic1kgJiYgZGlzdFggPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGFic1ggPiBhYnNZICYmIGRpc3RYID4gMClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY3R4LmV2ZW50LmRldGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHguZW5kKGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCwgYWJvcnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKGFib3J0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRldGVjdGVkICE9PSB0cnVlICYmIGN0eC5pbml0aWFsRXZlbnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoY3R4LmluaXRpYWxFdmVudC5ldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3R4LmV2ZW50LmRldGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlICYmIGN0eC5oYW5kbGVyKGdldENoYW5nZXMoZXZ0ID09PSB2b2lkIDAgPyBjdHgubGFzdEV2dCA6IGV2dCwgY3R4KS5wYXlsb2FkKVxuXG4gICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gZ2V0Q2hhbmdlcyhldnQgPT09IHZvaWQgMCA/IGN0eC5sYXN0RXZ0IDogZXZ0LCBjdHgsIHRydWUpXG4gICAgICAgICAgICAgIGNvbnN0IGZuID0gKCkgPT4geyBjdHguaGFuZGxlcihwYXlsb2FkKSB9XG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAoZm4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm4oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSB2b2lkIDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3F0b3VjaHBhbiA9IGN0eFxuXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlIHx8IG1vZGlmaWVycy5tb3VzZWNhcHR1cmUgPT09IHRydWVcbiAgICAgICAgICAgID8gJ0NhcHR1cmUnXG4gICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgY2FwdHVyZSB9YCBdXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5oYXMudG91Y2ggPT09IHRydWUgJiYgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2hTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLmNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdLFxuICAgICAgICAgIFsgZWwsICd0b3VjaG1vdmUnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSAvLyBjYW5ub3QgYmUgcGFzc2l2ZSAoZXg6IGlPUyBzY3JvbGwpXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZ3MpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hwYW5cblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoYmluZGluZ3Mub2xkVmFsdWUgIT09IGJpbmRpbmdzLnZhbHVlKSB7XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgY3R4LmVuZCgpXG4gICAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmdzLnZhbHVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3R4LmRpcmVjdGlvbiA9IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhiaW5kaW5ncy5tb2RpZmllcnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNocGFuXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gZW1pdCB0aGUgZW5kIGV2ZW50IHdoZW4gdGhlIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQgd2hpbGUgYWN0aXZlXG4gICAgICAgICAgLy8gdGhpcyBpcyBvbmx5IG5lZWRlZCBpbiBUb3VjaFBhbiBiZWNhdXNlIHRoZSByZXN0IG9mIHRoZSB0b3VjaCBkaXJlY3RpdmVzIGRvIG5vdCBlbWl0IGFuIGVuZCBldmVudFxuICAgICAgICAgIC8vIHRoZSBjb25kaXRpb24gaXMgYWxzbyBjaGVja2VkIGluIHRoZSBzdGFydCBvZiBmdW5jdGlvbiBidXQgd2UgYXZvaWQgdGhlIGNhbGxcbiAgICAgICAgICBjdHguZXZlbnQgIT09IHZvaWQgMCAmJiBjdHguZW5kKClcblxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNocGFuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCJpbXBvcnQgeyByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSdcblxuLy8gdXNpbmcgaXQgdG8gbWFuYWdlIFNTUiByZW5kZXJpbmcgd2l0aCBiZXN0IHBlcmZvcm1hbmNlXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGlzSHlkcmF0ZWQgPSByZWYoIWlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSlcblxuICBpZiAoaXNIeWRyYXRlZC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgaXNIeWRyYXRlZC52YWx1ZSA9IHRydWVcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHsgaXNIeWRyYXRlZCB9XG59XG4iLCJpbXBvcnQgeyBoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUh5ZHJhdGlvbiBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtaHlkcmF0aW9uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgaGFzT2JzZXJ2ZXIgPSB0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5jb25zdCByZXNpemVQcm9wcyA9IGhhc09ic2VydmVyID09PSB0cnVlXG4gID8ge31cbiAgOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xOycsXG4gICAgICB1cmw6ICdhYm91dDpibGFuaydcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUmVzaXplT2JzZXJ2ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmVzaXplJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7IHJldHVybiBub29wIH1cblxuICAgIGxldCB0aW1lciA9IG51bGwsIHRhcmdldEVsLCBzaXplID0geyB3aWR0aDogLTEsIGhlaWdodDogLTEgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoaW1tZWRpYXRlbHkpIHtcbiAgICAgIGlmIChpbW1lZGlhdGVseSA9PT0gdHJ1ZSB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gMCB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gJzAnKSB7XG4gICAgICAgIGVtaXRFdmVudCgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZW1pdEV2ZW50LCBwcm9wcy5kZWJvdW5jZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0RXZlbnQgKCkge1xuICAgICAgaWYgKHRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRFbCkge1xuICAgICAgICBjb25zdCB7IG9mZnNldFdpZHRoOiB3aWR0aCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSA9IHRhcmdldEVsXG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSBzaXplLndpZHRoIHx8IGhlaWdodCAhPT0gc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH1cbiAgICAgICAgICBlbWl0KCdyZXNpemUnLCBzaXplKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kXG4gICAgcHJveHkudHJpZ2dlciA9IHRyaWdnZXJcblxuICAgIGlmIChoYXNPYnNlcnZlciA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IG9ic2VydmVyXG5cbiAgICAgIC8vIGluaXRpYWxpemUgYXMgc29vbiBhcyBwb3NzaWJsZVxuICAgICAgY29uc3QgaW5pdCA9IHN0b3AgPT4ge1xuICAgICAgICB0YXJnZXRFbCA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG5cbiAgICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIodHJpZ2dlcilcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgIGVtaXRFdmVudCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RvcCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHsgaW5pdCh0cnVlKSB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91bnRlZCgoKSA9PiB7IGluaXQoKSB9KVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgICB0aW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZXIpXG5cbiAgICAgICAgaWYgKG9ic2VydmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIuZGlzY29ubmVjdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGFyZ2V0RWwpIHsgLy8gRkYgZm9yIEFuZHJvaWRcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXRFbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBub29wXG4gICAgfVxuICAgIGVsc2UgeyAvLyBubyBvYnNlcnZlciwgc28gZmFsbGJhY2sgdG8gb2xkIGlmcmFtZSBtZXRob2RcbiAgICAgIGNvbnN0IHsgaXNIeWRyYXRlZCB9ID0gdXNlSHlkcmF0aW9uKClcblxuICAgICAgbGV0IGN1ckRvY1ZpZXdcblxuICAgICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJEb2NWaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvLyBpT1MgaXMgZnV6enksIG5lZWQgdG8gY2hlY2sgaXQgZmlyc3RcbiAgICAgICAgICBpZiAoY3VyRG9jVmlldy5yZW1vdmVFdmVudExpc3RlbmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGN1ckRvY1ZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdHJpZ2dlciwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJEb2NWaWV3ID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25PYmpMb2FkICgpIHtcbiAgICAgICAgY2xlYW51cCgpXG5cbiAgICAgICAgaWYgKHRhcmdldEVsICYmIHRhcmdldEVsLmNvbnRlbnREb2N1bWVudCkge1xuICAgICAgICAgIGN1ckRvY1ZpZXcgPSB0YXJnZXRFbC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXdcbiAgICAgICAgICBjdXJEb2NWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyaWdnZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0YXJnZXRFbCA9IHByb3h5LiRlbFxuICAgICAgICAgIHRhcmdldEVsICYmIG9uT2JqTG9hZCgpXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoY2xlYW51cClcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGlzSHlkcmF0ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gaCgnb2JqZWN0Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLS1hdm9pZC1jYXJkLWJvcmRlcicsXG4gICAgICAgICAgICBzdHlsZTogcmVzaXplUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB0YWJpbmRleDogLTEsIC8vIGZpeCBmb3IgRmlyZWZveFxuICAgICAgICAgICAgdHlwZTogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgICBkYXRhOiByZXNpemVQcm9wcy51cmwsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICBvbkxvYWQ6IG9uT2JqTG9hZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQsIGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24sIGdldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgeyBwYXNzaXZlIH0gPSBsaXN0ZW5PcHRzXG5jb25zdCBheGlzVmFsdWVzID0gWyAnYm90aCcsICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2Nyb2xsT2JzZXJ2ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgYXhpczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGF4aXNWYWx1ZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAndmVydGljYWwnXG4gICAgfSxcblxuICAgIGRlYm91bmNlOiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAnc2Nyb2xsJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGRpcmVjdGlvbjogJ2Rvd24nLFxuICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZmFsc2UsXG5cbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcblxuICAgICAgaW5mbGVjdGlvblBvaW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjbGVhclRpbWVyID0gbnVsbCwgbG9jYWxTY3JvbGxUYXJnZXQsIHBhcmVudEVsXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBjbGVhclRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZXIoKVxuXG4gICAgICBjb25zdCB0b3AgPSBNYXRoLm1heCgwLCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSlcbiAgICAgIGNvbnN0IGxlZnQgPSBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICB0b3A6IHRvcCAtIHNjcm9sbC5wb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQgLSBzY3JvbGwucG9zaXRpb24ubGVmdFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwcm9wcy5heGlzID09PSAndmVydGljYWwnICYmIGRlbHRhLnRvcCA9PT0gMClcbiAgICAgICAgfHwgKHByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJyAmJiBkZWx0YS5sZWZ0ID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJEaXIgPSBNYXRoLmFicyhkZWx0YS50b3ApID49IE1hdGguYWJzKGRlbHRhLmxlZnQpXG4gICAgICAgID8gKGRlbHRhLnRvcCA8IDAgPyAndXAnIDogJ2Rvd24nKVxuICAgICAgICA6IChkZWx0YS5sZWZ0IDwgMCA/ICdsZWZ0JyA6ICdyaWdodCcpXG5cbiAgICAgIHNjcm9sbC5wb3NpdGlvbiA9IHsgdG9wLCBsZWZ0IH1cbiAgICAgIHNjcm9sbC5kaXJlY3Rpb25DaGFuZ2VkID0gc2Nyb2xsLmRpcmVjdGlvbiAhPT0gY3VyRGlyXG4gICAgICBzY3JvbGwuZGVsdGEgPSBkZWx0YVxuXG4gICAgICBpZiAoc2Nyb2xsLmRpcmVjdGlvbkNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsLmRpcmVjdGlvbiA9IGN1ckRpclxuICAgICAgICBzY3JvbGwuaW5mbGVjdGlvblBvaW50ID0gc2Nyb2xsLnBvc2l0aW9uXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ3Njcm9sbCcsIHsgLi4uc2Nyb2xsIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KHBhcmVudEVsLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmlnZ2VyLCBwYXNzaXZlKVxuICAgICAgdHJpZ2dlcih0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRyaWdnZXIsIHBhc3NpdmUpXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoaW1tZWRpYXRlbHkpIHtcbiAgICAgIGlmIChpbW1lZGlhdGVseSA9PT0gdHJ1ZSB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gMCB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gJzAnKSB7XG4gICAgICAgIGVtaXRFdmVudCgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjbGVhclRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IFsgdGltZXIsIGZuIF0gPSBwcm9wcy5kZWJvdW5jZVxuICAgICAgICAgID8gWyBzZXRUaW1lb3V0KGVtaXRFdmVudCwgcHJvcHMuZGVib3VuY2UpLCBjbGVhclRpbWVvdXQgXVxuICAgICAgICAgIDogWyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZW1pdEV2ZW50KSwgY2FuY2VsQW5pbWF0aW9uRnJhbWUgXVxuXG4gICAgICAgIGNsZWFyVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgZm4odGltZXIpXG4gICAgICAgICAgY2xlYXJUaW1lciA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm94eS4kcS5sYW5nLnJ0bCwgZW1pdEV2ZW50KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHBhcmVudEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZXIoKVxuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgZ2V0UG9zaXRpb246ICgpID0+IHNjcm9sbFxuICAgIH0pXG5cbiAgICByZXR1cm4gbm9vcFxuICB9XG59KVxuIl0sIm5hbWVzIjpbInZhbHVlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLGVBQWU7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQ1o7QUFFQSxNQUFNLGdCQUFnQixPQUFPLEtBQUssWUFBWTtBQUU5QyxhQUFhLE1BQU07QUFFWixTQUFTLHNCQUF1QixLQUFLO0FBQzFDLFFBQU0sTUFBTSxDQUFFO0FBRWQsYUFBVyxhQUFhLGVBQWU7QUFDckMsUUFBSSxJQUFLLGVBQWdCLE1BQU07QUFDN0IsVUFBSyxhQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBRUQsTUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFLFdBQVcsR0FBRztBQUNqQyxXQUFPO0FBQUEsRUFDUjtBQUVELE1BQUksSUFBSSxl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
