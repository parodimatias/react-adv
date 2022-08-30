import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazylayout",
    path: "/lazylayout/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/nolazy",
    path: "nolazy",
    Component: NoLazy,
    name: "No-Lazy",
  },
];
