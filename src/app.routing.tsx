import React, { useContext } from "react";
import { makeNavigate, makeRouteMap } from "./infrastructure/routing.utos";
import { navigate as hookRouterNavigate } from "hookrouter";
import { Buttons } from "./pages/buttons";
import { HomePage } from "./pages/homePage";
import { Inputs } from "./pages/inputs";
import { DatePickers } from "./pages/datePickers";

const routes = {
  home: { path: "/", component: () => <HomePage /> },
  buttons: { path: "/buttons", component: () => <Buttons /> },
  inputs: { path: "/inputs", component: () => <Inputs /> },
  datePickers: { path: "/date-inputs", component: () => <DatePickers /> },
} as const;

export const createRoutes = () => {
  const appRoutes = {};
  Object.keys(routes).forEach(k => {
    appRoutes[routes[k].path] = routes[k].component;
  });
  return appRoutes;
};

const routeMap = makeRouteMap(routes);
export const navigate = makeNavigate(routeMap, r => hookRouterNavigate(r));
