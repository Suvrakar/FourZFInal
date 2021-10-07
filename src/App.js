import "./App.css";
import Navbaar from "./Components/Navbar/Navbaar";
import Hero from "./Components/Hero/Hero";
import LatestProject from "./Components/LatestProject/LatestProject";
import * as ReactBootStrap from "react-bootstrap";
import Footer from "../src/Components/Footer/Footer";
import Services from "../src/Components/Services/Services";
import Partners from "../src/Components/Partners/Partners";
import Experience from "../src/Components/Experience/Experience";
import React from "react";
import Iframe from 'react-iframe'
import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
  MuiThemeProvider,
} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Projects from "./Pages/Projects";
import OurProjects from "./Pages/OurProjects";
import OurServices from "./Pages/OurServices";
import Home from "./Pages/Home";
import AllPartners from "./Pages/AllPartners";
import AllProjects from "./Pages/AllProjects";
import BoardOfDirectors from "./Pages/BoardOfDirectors";
import MessageofMD from "./Pages/MessageofMD";
import Form from "../src/Components/Form/Form";
import { Helmet } from "react-helmet";
import BuildingName from "./Pages/BuildingName";
import ServicesDetails from "./Pages/ServicesDetails";
import { Lines, CustomPreloader } from "react-preloaders2";
import Loaderanimation from "./Components/Animations/Loaderanimation";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbaar></Navbaar>

        <HashRouter>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route path="/about" component={() => <AboutUs />} />
            <Route path="/messageofmd" component={() => <MessageofMD />} />
            <Route path="/bdirectors" component={() => <BoardOfDirectors />} />
            <Route path="/contact" component={() => <ContactUs />} />
            <Route path="/building/:id" component={() => <BuildingName />} />
            <Route path="/services" component={() => <OurServices />} />
            <Route
              path="/service/detail/:id"
              component={() => <ServicesDetails />}
            />
            <Route path="/allpartners" component={() => <AllPartners />} />
            <Route path="/allprojects" component={() => <AllProjects />} />
          </Switch>
        </HashRouter>

        <Footer></Footer>
      </div>
      {/* <Lines/> */}
      <CustomPreloader>

        <Iframe
          style="width: 1000px; height: 1000px; overflow: hidden;"
          src="https://infallible-curie-c4ae52.netlify.app"
          width="100%"
          height="100%"
          scrolling="no"
        >
        </Iframe>

      </CustomPreloader>
    </React.Fragment>
  );
}

export default App;
