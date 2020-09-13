import React, { lazy } from "react";
import Navbar from "../App/Layouts/Header/index";
import Footer from "../App/Layouts/Footer/index";
import BottomNav from "../App/Layouts/BottomNav/BottomNav";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../helpers/index";
import { alertActions } from "../redux/actions/index";
import PrivateRoute from "./PrivateRoute";

import Home from "../App/Screens/Home/index";
import FAQ from "../App/Screens/KnowMore/Faq";
import AboutUs from "../App/Screens/KnowMore/aboutUs";
import Blogs from "../App/Screens/KnowMore/blogs";
import Career from "../App/Screens/KnowMore/carrer";
import PrivacyPolicy from "../App/Screens/KnowMore/privacyPolicy";

import ReturnPolicy from "../App/Screens/KnowMore/returnPolicy";
import TermsAndConditions from "../App/Screens/KnowMore/TermsAndConditions";

import BuyerTerms from "../App/Screens/MakeMoney/BuyerTerms";
import SellerTerms from "../App/Screens/MakeMoney/SellerTerms";
import Advertise from "../App/Screens/MakeMoney/Advertise";
import Affiliate from "../App/Screens/MakeMoney/Affiliate";
import BecomePartner from "../App/Screens/MakeMoney/BecomePartner";

// products
import Products from "../App//Screens/Products/index";
import ProductOffer from "../App/Components/Products/Popup/popup";

// categories
import Category from "../App/Screens/Category/index";
// my account items
import MyBids from "../App/Layouts/MyAccount/MyBids";
import MyItems from "../App/Layouts/MyAccount/MyItems";
import Sell from "../App/Layouts/MyAccount/sellBeta/StepOne";
import Testimonial from "../App/Components/Testimonial/Testimonial";
import Ecommerce from "../App/Components/KnowMore/blogs/blogpages/e-commerce";
import ReCommerce from "../App/Components/KnowMore/blogs/blogpages/re-commerce";
import EarnFromHome from "../App/Components/KnowMore/blogs/blogpages/earn-from-home";
import LockdownAndIncome from "../App/Components/KnowMore/blogs/blogpages/lockdown-and-income";
import Signin from "../App/Components/Auth/signin";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    return (
      <div>
        {alert.message && <div className="">{alert.message}</div>}
        <BrowserRouter>
          <Navbar />
          <BottomNav />
          <Switch>
            <Route exact path={["/home", "/"]} component={Home} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/return-policy" component={ReturnPolicy} />
            <Route exact path="/terms" component={TermsAndConditions} />
            <Route exact path="/buyer-terms" component={BuyerTerms} />
            <Route exact path="/seller-term" component={SellerTerms} />
            <Route exact path="/advertise" component={Advertise} />
            <Route exact path="/affiliate" component={Affiliate} />
            <Route exact path="/become-partner" component={BecomePartner} />
            <Route exact path="/sell" component={Sell} />
            <Route exact path="/products" component={Products} />
            <Route exact path="products-offer" component={ProductOffer} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/my-bids" component={MyBids} />
            <Route exact path="/my-items" component={MyItems} />
            <Route exact path="/testimonials" component={Testimonial} />
            <Route exact path="/blogs/ecommerce" component={Ecommerce} />
            <Route exact path="/blogs/recommerce" component={ReCommerce} />
            <Route exact path="/blogs/earnfromhome" component={EarnFromHome} />
            <Route
              exact
              path="/blogs/lockdownandincome"
              component={LockdownAndIncome}
            />
            <Route exact path="/signin" component={Signin} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

export default connect(mapStateToProps, actionCreators)(App);
