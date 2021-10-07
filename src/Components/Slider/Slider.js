import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { heroImages } from "../../data";
import Fade from "react-reveal/Fade";

export default function Slider() {
  return (
    <div>
      <ReactBootStrap.Carousel>
        {heroImages.map((x) => (
          <ReactBootStrap.Carousel.Item >
            <img
              className="d-block w-100"
              src={x}
              alt="First slide"
              height={500}
            />
            <ReactBootStrap.Carousel.Caption
              className="mb-5"
              style={{ textAlign: "left" }}
            >
              <Fade bottom>
                <h1>
                  Innovative <br></br>Construction <br></br>Solutions
                </h1>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <ReactBootStrap.Button variant="primary rounded-pill blue ">
                  See More
                </ReactBootStrap.Button>{" "}
              </Fade>
            </ReactBootStrap.Carousel.Caption>
          </ReactBootStrap.Carousel.Item>
        ))}
      </ReactBootStrap.Carousel>
    </div>
  );
}
