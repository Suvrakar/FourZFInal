import React, { useState } from "react";
import "./BuildingName.css";
import * as ReactBootStrap from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Iframe from "@trendmicro/react-iframe";
import "./BuildingName.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import { projects } from "../data";

export default function BuildingName() {
  const [show, setShow] = useState(false);

  let { id } = useParams();
  let element = projects.find((x) => x.projectName === id);

  // let img=element.
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Helmet>
        <title>Bulding Name | 4z International</title>
      </Helmet>
      <div
        className="head d-flex justify-content-center align-items-center text-light"
        style={{ backgroundImage: element.projectImg }}
      >
        <h1>{element.projectName}</h1>
      </div>
      <br></br>
      <ReactBootStrap.Container>
        <div class="text-center">
          <Iframe
            src={element.map}
            //    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58424.07564184906!2d90.36376248859446!3d23.76503469611707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1629872996084!5m2!1sbn!2sbd"
            // width="900"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></Iframe>
        </div>
        <br></br>
        <h1>Project Details</h1>
        <p>{element.Des}</p>
        <br></br>
        <h1 class="my-3">Images</h1>
        <Carousel responsive={responsive}>
          {element.imgs.map((img) => (
            <ReactBootStrap.Card border="light">
              <ReactBootStrap.Card.Img
                variant="top"
                src={img}
                onClick={() => setShow(true)}
              />
            </ReactBootStrap.Card>
          ))}
        </Carousel>
        ;
        {/* <ReactBootStrap.Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </ReactBootStrap.Button> */}
        <ReactBootStrap.Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          varient="transparent"
        >
          <ReactBootStrap.Modal.Header closeButton>
            {/* <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </ReactBootStrap.Modal.Title> */}
          </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>
            <p class="modalImg">
              <img src="https://picsum.photos/id/2/200/100"></img>
            </p>
          </ReactBootStrap.Modal.Body>
        </ReactBootStrap.Modal>
      </ReactBootStrap.Container>
    </div>
  );
}
