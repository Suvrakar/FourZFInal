import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { projects } from "../data";

export default function AllProjects() {
  return (
    <div>
      <Helmet>
        <title>All Projects | 4z International</title>
      </Helmet>
      <ReactBootStrap.Container className="my-5">
        <ReactBootStrap.Row xs={1} md={3} className="g-4">
          {Array.from({ length: projects.length }).map((_, idx) => (
            <ReactBootStrap.Col>
              <ReactBootStrap.Card border="light">
                <ReactBootStrap.Card.Img
                  variant="top"
                  src={projects[idx].projectImg}
                />
                <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title className="text-center" style={{fontSize:"x-large"}}>
                    {projects[idx].projectName}
                    <ReactBootStrap.Card.Text style={{textAlign: 'justify', fontSize:"medium"}}>
                      {projects[idx].shortDes}
                    </ReactBootStrap.Card.Text>
                    <Link to={`/building/${projects[idx].projectName}`}>
                      <br></br>
                      <ReactBootStrap.Button
                        className="text-center my-3"
                        variant="primary rounded-pill blue"
                      >
                        View More
                      </ReactBootStrap.Button>{" "}
                    </Link>
                  </ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text></ReactBootStrap.Card.Text>
                </ReactBootStrap.Card.Body>
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          ))}
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}
