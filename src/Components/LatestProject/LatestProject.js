import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./LatestProject.css";
import { projects } from "../../data";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

// function BlogPost() {

//   return <div>Now showing post {id}</div>;
// }

export default function LatestProject() {
  let list = [
    [projects[0], projects[1], projects[2]],
    [projects[3], projects[4], projects[5]],
  ];
  return (
    <div>
      <Fade bottom
       speed={1000}>
        <div className="padding-0 px-0">
          <ReactBootStrap.Container fluid>
            <h1 class="text-center fw-bolder py-3 mt-5">Our Latest Projects</h1>
            {list.map((y) => (
              <ReactBootStrap.Row>
                {y.map((x) => (
                  <ReactBootStrap.Col className="padding-0 px-0">
                    <div className="ProjectImg ourPrjct c">
                      <Link to={`/building/${x.projectName}`}>
                        <img
                          src={x.projectImg}
                          alt="Img1"
                          class="image px-0"
                        ></img>
                        <div class="middle">
                          <div class="text">
                            <h4>{x.projectName}</h4>
                            <p class="Elip">{x.shortDes}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ReactBootStrap.Col>
                ))}
              </ReactBootStrap.Row>
            ))}

            <div class="text-center p-4">
              <Link to="/allprojects">
                <ReactBootStrap.Button variant="primary rounded-pill blue ">
                  All Projects
                </ReactBootStrap.Button>{" "}
              </Link>
            </div>
          </ReactBootStrap.Container>
        </div>
      </Fade>
    </div>
  );
}
