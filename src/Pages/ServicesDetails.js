import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useParams } from "react-router-dom";
import { services } from "../data";
import "./ServicesDetails.css"

export default function ServicesDetails() {
  let { id } = useParams();
  let element = services[id];

  return (
    <div>
      <ReactBootStrap.Container>
        <ReactBootStrap.Row className="my-5">

          <ReactBootStrap.Col className="mx-auto my-auto">
            <h1 class="my-3">
              {element.serviceName} <br></br>
            </h1>
            <p class="text-justify">{element.Des} </p>
          </ReactBootStrap.Col>

          <ReactBootStrap.Col className="mx-auto my-auto">
            <div class="text-center ImgofSide mx-auto">
              <img src={element.serviceImg} class="text-center"></img>
            </div>
          </ReactBootStrap.Col>

        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}
