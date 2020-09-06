import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./Loader/index";
import routes from "../routes";
import Navbar from "./Layouts/Header/index";
import Footer from "./Layouts/Footer/index";
import BottomNav from "./Layouts/BottomNav/BottomNav";

const Home = React.lazy(() => import("./Screens/Home/index"));

class App extends Component {
  render() {
    const menu = routes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });

    return (
      <div>
        <Navbar />
        <BottomNav />
        <Suspense fallback={<Loader />}>
          <Switch>
            {menu}
            <Route path={["/home", "/"]} component={Home} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
