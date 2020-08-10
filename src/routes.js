import React from "react";

const Faq = React.lazy(() => import("./App/Screens/Faq/index"));

const routes = [
  {
    path: "/faq",
    exact: true,
    name: "Faq",
    component: Faq,
  },
];
export default routes;
