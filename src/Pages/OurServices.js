import React from "react";
import "./OurServices.css";
import * as ReactBootStrap from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <div>
      <Helmet>
        <title>Our Services | 4z International</title>
      </Helmet>
      <div className="head d-flex justify-content-center align-items-center text-light">
        <h1>Our Services</h1>
      </div>
      <br></br>
      <ReactBootStrap.Container>
        <ReactBootStrap.Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <ReactBootStrap.Col>
              <ReactBootStrap.Card>
                <Link to="/services">
                  <ReactBootStrap.Card.Img
                    variant="top"
                    src={`https://picsum.photos/id/${idx}/200/100`}
                  />
                </Link>
                <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>Card</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </ReactBootStrap.Card.Text>
                  <Link to={`/service/detail/${idx}`}>
                    <ReactBootStrap.Button variant="primary rounded-pill blue ">
                      Show all
                    </ReactBootStrap.Button>{" "}
                  </Link>
                </ReactBootStrap.Card.Body>
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          ))}
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>

      <br></br>
    </div>
  );
}
