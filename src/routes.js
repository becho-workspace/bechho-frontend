import React from "react";

const Faq = React.lazy(() => import("./App/Screens/KnowMore/Faq"));
const AboutUs = React.lazy(() => import("./App/Screens/KnowMore/aboutUs"));

const Blogs = React.lazy(() => import("./App/Screens/KnowMore/blogs"));
const Carrer = React.lazy(() => import("./App/Screens/KnowMore/carrer"));
const PrivacyPolicy = React.lazy(() =>
  import("./App/Screens/KnowMore/privacyPolicy")
);
const ReturnPolicy = React.lazy(() =>
  import("./App/Screens/KnowMore/returnPolicy")
);
const Terms = React.lazy(() =>
  import("./App/Screens/KnowMore/TermsAndConditions")
);
const Advertise = React.lazy(() => import("./App/Screens/MakeMoney/Advertise"));
const Affiliate = React.lazy(() => import("./App/Screens/MakeMoney/Affiliate"));
const BecomePartner = React.lazy(() =>
  import("./App/Screens/MakeMoney/BecomePartner")
);
const BuyerTerms = React.lazy(() =>
  import("./App/Screens/MakeMoney/BuyerTerms")
);
const SellerTerms = React.lazy(() =>
  import("./App/Screens/MakeMoney/SellerTerms")
);
const SellWithBecho = React.lazy(() =>
  import("./App/Screens/MakeMoney/SellWithBechho")
);

const AuthCards = React.lazy(() => import("./App/Components/Auth/index"));

const Products = React.lazy(() => import("./App/Screens/Products/index"));

const ProductsOffer = React.lazy(() =>
  import("./App/Components/Products/Popup/popup")
);

const Category = React.lazy(() => import("./App/Screens/Category/index"));

// my account items
const MyBids = React.lazy(() => import("./App/Layouts/MyAccount/MyBids"));
const MyItems = React.lazy(() => import("./App/Layouts/MyAccount/MyItems"));

// sell page

const StepOne = React.lazy(() =>
  import("./App/Layouts/MyAccount/Sell/Step1/StepOne")
);
const StepTwo = React.lazy(() =>
  import("./App/Layouts/MyAccount/Sell/Step2/StepTwo")
);

const routes = [
  {
    path: "/faq",
    exact: true,
    name: "Faq",
    component: Faq,
  },
  {
    path: "/about-us",
    exact: true,
    name: "About Us",
    component: AboutUs,
  },
  {
    path: "/blogs",
    exact: true,
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/carrer",
    exact: true,
    name: "Carrer",
    component: Carrer,
  },
  {
    path: "/privacy-policy",
    exact: true,
    name: "Privacy Policy",
    component: PrivacyPolicy,
  },
  {
    path: "/return-policy",
    exact: true,
    name: "Return Policy",
    component: ReturnPolicy,
  },
  {
    path: "/terms",
    exact: true,
    name: "Terms and Condition",
    component: Terms,
  },
  {
    path: "/buyer-terms",
    exact: true,
    name: "Buyer terms",
    component: BuyerTerms,
  },
  {
    path: "/seller-term",
    exact: true,
    name: "Seller Terms",
    component: SellerTerms,
  },
  {
    path: "/advertise",
    exact: true,
    name: "Advertise",
    component: Advertise,
  },
  {
    path: "/affiliate",
    exact: true,
    name: "Affiliate",
    component: Affiliate,
  },
  {
    path: "/become-partner",
    exact: true,
    name: "Become Partner",
    component: BecomePartner,
  },
  {
    path: "/sell-with-becho",
    exact: true,
    name: "SellWithBecho",
    component: SellWithBecho,
  },
  {
    path: "/auth",
    exact: true,
    name: "auth",
    component: AuthCards,
  },
  // products
  {
    path: "/products",
    exact: true,
    name: "products",
    component: Products,
  },
  {
    path: "/products-offer",
    exact: true,
    name: "products",
    component: ProductsOffer,
  },
  // categories
  {
    path: "/category",
    exact: true,
    name: "Category",
    component: Category,
  },
  // my account items
  {
    path: "/my-bids",
    exact: true,
    name: "My Bids",
    component: MyBids,
  },
  {
    path: "/my-items",
    exact: true,
    name: "My Items",
    component: MyItems,
  },
  // sell pages
  {
    path: "/step1",
    exact: true,
    name: "step1",
    component: StepOne,
  },
  {
    path: "/step2",
    exact: true,
    name: "step2",
    component: StepTwo,
  },
];
export default routes;
