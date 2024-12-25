import { c as createComponent, a as useDarkProps, d as useDark, g as computed, m as h, q as hSlot, t as getCurrentInstance } from "./index.404bd6b0.js";
const roleAttrExceptions = ["ul", "ol"];
var QList = createComponent({
  name: "QList",
  props: {
    ...useDarkProps,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const role = computed(
      () => roleAttrExceptions.includes(props.tag) ? null : "list"
    );
    const classes = computed(
      () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
    );
    return () => h(props.tag, { class: classes.value, role: role.value }, hSlot(slots.default));
  }
});
export { QList as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUxpc3QuY2I3NGVlZWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaXRlbS9RTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IHJvbGVBdHRyRXhjZXB0aW9ucyA9IFsgJ3VsJywgJ29sJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGlzdCcsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBzZXBhcmF0b3I6IEJvb2xlYW4sXG4gICAgcGFkZGluZzogQm9vbGVhbixcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCByb2xlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcm9sZUF0dHJFeGNlcHRpb25zLmluY2x1ZGVzKHByb3BzLnRhZykgPyBudWxsIDogJ2xpc3QnKVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGlzdCdcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWxpc3QtLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtbGlzdC0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5zZXBhcmF0b3IgPT09IHRydWUgPyAnIHEtbGlzdC0tc2VwYXJhdG9yJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWxpc3QtLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5wYWRkaW5nID09PSB0cnVlID8gJyBxLWxpc3QtLXBhZGRpbmcnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgocHJvcHMudGFnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlLCByb2xlOiByb2xlLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxNQUFNLHFCQUFxQixDQUFFLE1BQU0sSUFBTTtBQUV6QyxJQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBRVQsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sS0FBSyxtQkFBb0I7QUFDL0IsVUFBTSxTQUFTLFFBQVEsT0FBTyxHQUFHLE1BQU0sRUFBRTtBQUV6QyxVQUFNLE9BQU87QUFBQSxNQUFTLE1BQ3BCLG1CQUFtQixTQUFTLE1BQU0sR0FBRyxJQUFJLE9BQU87QUFBQSxJQUNqRDtBQUVELFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsWUFDRyxNQUFNLGFBQWEsT0FBTyxzQkFBc0IsT0FDaEQsTUFBTSxVQUFVLE9BQU8sbUJBQW1CLE9BQzFDLE1BQU0sY0FBYyxPQUFPLHVCQUF1QixPQUNsRCxPQUFPLFVBQVUsT0FBTyxrQkFBa0IsT0FDMUMsTUFBTSxZQUFZLE9BQU8scUJBQXFCO0FBQUEsSUFDbEQ7QUFFRCxXQUFPLE1BQU0sRUFBRSxNQUFNLEtBQUssRUFBRSxPQUFPLFFBQVEsT0FBTyxNQUFNLEtBQUssTUFBTyxHQUFFLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUMzRjtBQUNILENBQUM7OyJ9
