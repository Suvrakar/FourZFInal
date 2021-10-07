import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <div>
      <Helmet>
        <title>Projects | 4z International</title>
      </Helmet>
      <ReactBootStrap.Container className="my-5">
        <ReactBootStrap.Row xs={1} md={3} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ReactBootStrap.Col>
              <ReactBootStrap.Card>
                <ReactBootStrap.Card.Img
                  variant="top"
                src={`https://picsum.photos/id/${idx}/200/100`}
                />
                <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>
                    Card title
                  </ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Button variant="primary rounded-pill blue ">
                    Show all
                  </ReactBootStrap.Button>{" "}
                </ReactBootStrap.Card.Body>
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          ))}
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}
