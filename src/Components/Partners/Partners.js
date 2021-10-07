import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import BDarmy from "../../images/Bangladesh Army Logo.svg";
import Navy from "../../images/Bangladesh Navy Logo.svg";
import "./Partners.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Partners() {
  return (
    <div>
      <Fade bottom>
        <ReactBootStrap.Container>
          <h1 class="text-center fw-bolder pt-5">Our Partners</h1>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <div class="text-center">
                <a target="_blank" href="https://www.army.mil.bd/">
                  <img src={BDarmy} alt="" class="img-fluid"></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.army.mil.bd/"
                  class="nostyle"
                >
                  <p class="text-center fw-bolder pt-3 ">Bangladesh Army</p>
                </a>
              </div>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <div class="text-center nostyle">
                <a target="_blank" href="https://www.navy.mil.bd/">
                  <img src={Navy} alt="" class="img-fluid"></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.navy.mil.bd/"
                  class="nostyle"
                >
                  <p class="text-center fw-bolder pt-3 ">Bangladesh Navy</p>
                </a>
              </div>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          <Link to="/allpartners">
            <div class="text-center py-4">
              <ReactBootStrap.Button variant="primary rounded-pill blue">
                All Partners
              </ReactBootStrap.Button>{" "}
            </div>
          </Link>
        </ReactBootStrap.Container>
      </Fade>
    </div>
  );
}
