import React, { lazy } from "react";

const routes = [
  {
    path: "/faq",
    exact: true,
    name: "Faq",
    component: lazy(() => import("./App/Screens/KnowMore/Faq")),
  },
  {
    path: "/about-us",
    exact: true,
    name: "About Us",
    component: lazy(() => import("./App/Screens/KnowMore/aboutUs")),
  },
  {
    path: "/blogs",
    exact: true,
    name: "Blogs",
    component: lazy(() => import("./App/Screens/KnowMore/blogs")),
  },
  {
    path: "/carrer",
    exact: true,
    name: "Carrer",
    component: lazy(() => import("./App/Screens/KnowMore/carrer")),
  },
  {
    path: "/privacy-policy",
    exact: true,
    name: "Privacy Policy",
    component: lazy(() => import("./App/Screens/KnowMore/privacyPolicy")),
  },
  {
    path: "/return-policy",
    exact: true,
    name: "Return Policy",
    component: lazy(() => import("./App/Screens/KnowMore/returnPolicy")),
  },
  {
    path: "/terms",
    exact: true,
    name: "Terms and Condition",
    component: lazy(() => import("./App/Screens/KnowMore/TermsAndConditions")),
  },
  {
    path: "/buyer-terms",
    exact: true,
    name: "Buyer terms",
    component: lazy(() => import("./App/Screens/MakeMoney/BuyerTerms")),
  },
  {
    path: "/seller-term",
    exact: true,
    name: "Seller Terms",
    component: lazy(() => import("./App/Screens/MakeMoney/SellerTerms")),
  },
  {
    path: "/advertise",
    exact: true,
    name: "Advertise",
    component: lazy(() => import("./App/Screens/MakeMoney/Advertise")),
  },
  {
    path: "/affiliate",
    exact: true,
    name: "Affiliate",
    component: lazy(() => import("./App/Screens/MakeMoney/Affiliate")),
  },
  {
    path: "/become-partner",
    exact: true,
    name: "Become Partner",
    component: lazy(() => import("./App/Screens/MakeMoney/BecomePartner")),
  },
  // {
  //   path: "/sell-with-bechho",
  //   exact: true,
  //   name: "SellWithBecho",
  //   component: lazy(() => import("./App/Screens/MakeMoney/SellWithBechho")),
  // },

  // products
  {
    path: "/products",
    exact: true,
    name: "products",
    component: lazy(() => import("./App/Screens/Products/index")),
  },

  {
    path: "/products-offer",
    exact: true,
    name: "products",
    component: lazy(() => import("./App/Components/Products/Popup/popup")),
  },

  // categories
  {
    path: "/category",
    exact: true,
    name: "Category",
    component: lazy(() => import("./App/Screens/Category/index")),
  },
  // my account items
  {
    path: "/my-bids",
    exact: true,
    name: "My Bids",
    component: lazy(() => import("./App/Layouts/MyAccount/MyBids")),
  },
  {
    path: "/my-items",
    exact: true,
    name: "My Items",
    component: lazy(() => import("./App/Layouts/MyAccount/MyItems")),
  },
  // sell pages
  {
    path: "/sell",
    exact: true,
    name: "sell",
    component: lazy(() => import("./App/Layouts/MyAccount/Sell")),
  },
];

export default routes;
