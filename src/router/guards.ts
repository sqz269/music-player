import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function queueRouteGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  next();
}
