import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Header from "./pageList/Header";
import Footer from "./pageList/Footer";
import Home from "./pageList/Home";
import Portfolio from "./pageList/Portfolio";
import About from "./pageList/About";
// nested route
import MobileApp from "./pageList/appPortolio/MobileApp";
import WebApp from "./pageList/appPortolio/WebApp";

// start main fun

function Routing() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/mobile">
          <MobileApp />
        </Route>
        <Route exact path="/web">
          <WebApp />
        </Route>
      </Switch>
      <Navbar />
      <Footer />
    </Router>
  );
}
export default Routing;
