import React from "react";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Team from "./pages/Team";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/aboutus"} exact>
          <AboutUs />
        </Route>
        <Route path={"/contactus"} exact>
          <ContactUs />
        </Route>
        <Route path={"/blog"} exact>
          <Blog />
        </Route>
        <Route path={"/team"} exact>
          <Team />
        </Route>
        <Route path={"/events"} exact>
          <Events />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
