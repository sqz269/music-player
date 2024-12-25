import { an as createDirective, b5 as getPortalProxy, b6 as closePortals, aI as isKeyCode } from "./index.80f56f59.js";
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
var ClosePopup = createDirective(
  {
    name: "close-popup",
    beforeMount(el, { value }) {
      const ctx = {
        depth: getDepth(value),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const proxy = getPortalProxy(el);
            if (proxy !== void 0) {
              closePortals(proxy, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.__qclosepopup.depth = getDepth(value);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
export { ClosePopup as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvc2VQb3B1cC44MjkyNzRmYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvZGlyZWN0aXZlcy9jbG9zZS1wb3B1cC9DbG9zZVBvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGNsb3NlUG9ydGFscywgZ2V0UG9ydGFsUHJveHkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnBvcnRhbC9wb3J0YWwuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmtleWJvYXJkL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLm5vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0vbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuLypcbiAqIGRlcHRoXG4gKiAgIDwgMCAgLS0+IGNsb3NlIGFsbCBjaGFpblxuICogICAwICAgIC0tPiBkaXNhYmxlZFxuICogICA+IDAgIC0tPiBjbG9zZSBjaGFpbiB1cCB0byBOIHBhcmVudFxuICovXG5cbmZ1bmN0aW9uIGdldERlcHRoICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBjb25zdCBkZXB0aCA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgcmV0dXJuIGlzTmFOKGRlcHRoKSA/IDAgOiBkZXB0aFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAnY2xvc2UtcG9wdXAnLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ2Nsb3NlLXBvcHVwJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlIH0pIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGRlcHRoOiBnZXREZXB0aCh2YWx1ZSksXG5cbiAgICAgICAgICBoYW5kbGVyIChldnQpIHtcbiAgICAgICAgICAgIC8vIGFsbG93IEBjbGljayB0byBiZSBlbWl0dGVkXG4gICAgICAgICAgICBjdHguZGVwdGggIT09IDAgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3h5ID0gZ2V0UG9ydGFsUHJveHkoZWwpXG4gICAgICAgICAgICAgIGlmIChwcm94eSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VQb3J0YWxzKHByb3h5LCBldnQsIGN0eC5kZXB0aClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgaGFuZGxlcktleSAoZXZ0KSB7XG4gICAgICAgICAgICBpc0tleUNvZGUoZXZ0LCAxMykgPT09IHRydWUgJiYgY3R4LmhhbmRsZXIoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcWNsb3NlcG9wdXAgPSBjdHhcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN0eC5oYW5kbGVyKVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGN0eC5oYW5kbGVyS2V5KVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlIH0pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgIGVsLl9fcWNsb3NlcG9wdXAuZGVwdGggPSBnZXREZXB0aCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xY2xvc2Vwb3B1cFxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGN0eC5oYW5kbGVyKVxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGN0eC5oYW5kbGVyS2V5KVxuICAgICAgICBkZWxldGUgZWwuX19xY2xvc2Vwb3B1cFxuICAgICAgfVxuICAgIH1cbilcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBWUEsU0FBUyxTQUFVLE9BQU87QUFDeEIsTUFBSSxVQUFVLE9BQU87QUFDbkIsV0FBTztBQUFBLEVBQ1I7QUFDRCxNQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVE7QUFDdEMsV0FBTztBQUFBLEVBQ1I7QUFFRCxRQUFNLFFBQVEsU0FBUyxPQUFPLEVBQUU7QUFDaEMsU0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJO0FBQzVCO0FBRUEsSUFBQSxhQUFlO0FBQUEsRUFFWDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBRU4sWUFBYSxJQUFJLEVBQUUsU0FBUztBQUMxQixZQUFNLE1BQU07QUFBQSxRQUNWLE9BQU8sU0FBUyxLQUFLO0FBQUEsUUFFckIsUUFBUyxLQUFLO0FBRVosY0FBSSxVQUFVLEtBQUssV0FBVyxNQUFNO0FBQ2xDLGtCQUFNLFFBQVEsZUFBZSxFQUFFO0FBQy9CLGdCQUFJLFVBQVUsUUFBUTtBQUNwQiwyQkFBYSxPQUFPLEtBQUssSUFBSSxLQUFLO0FBQUEsWUFDbkM7QUFBQSxVQUNmLENBQWE7QUFBQSxRQUNGO0FBQUEsUUFFRCxXQUFZLEtBQUs7QUFDZixvQkFBVSxLQUFLLEVBQUUsTUFBTSxRQUFRLElBQUksUUFBUSxHQUFHO0FBQUEsUUFDL0M7QUFBQSxNQUNGO0FBRUQsU0FBRyxnQkFBZ0I7QUFFbkIsU0FBRyxpQkFBaUIsU0FBUyxJQUFJLE9BQU87QUFDeEMsU0FBRyxpQkFBaUIsU0FBUyxJQUFJLFVBQVU7QUFBQSxJQUM1QztBQUFBLElBRUQsUUFBUyxJQUFJLEVBQUUsT0FBTyxTQUFRLEdBQUk7QUFDaEMsVUFBSSxVQUFVLFVBQVU7QUFDdEIsV0FBRyxjQUFjLFFBQVEsU0FBUyxLQUFLO0FBQUEsTUFDeEM7QUFBQSxJQUNGO0FBQUEsSUFFRCxjQUFlLElBQUk7QUFDakIsWUFBTSxNQUFNLEdBQUc7QUFDZixTQUFHLG9CQUFvQixTQUFTLElBQUksT0FBTztBQUMzQyxTQUFHLG9CQUFvQixTQUFTLElBQUksVUFBVTtBQUM5QyxhQUFPLEdBQUc7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNMOzsifQ==
