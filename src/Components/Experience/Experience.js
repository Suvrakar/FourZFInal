import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./Experience.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Fade from "react-reveal/Fade";

export default function Experience() {
  return (
    <div>
      <div className="cover">
        <ReactBootStrap.Container fluid>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <div class="text-center text-light pt-5">
                <Fade bottom>
                  <h1 data-toggle="counterUp">
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp start={0} end={25} duration={2} />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>

                  {/* <CountUp start={0} end={25} duration={3} scrollCheck={true} /> */}

                  <h3>
                    Years <br></br>
                    Experience
                  </h3>
                </Fade>
              </div>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <div class="text-center text-light pt-5">
                <Fade bottom>
                  <h1 data-toggle="counterUp">
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp start={0} end={328} duration={1} />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>

                  {/* <CountUp start={0} end={25} duration={3} scrollCheck={true} /> */}

                  <h3>
                    Projects <br></br>
                    Completed
                  </h3>
                </Fade>
              </div>
            </ReactBootStrap.Col>

            {/* <ReactBootStrap.Col>
                        <div class="text-center text-light mt-5 p-5">
                            
                            <h1><CountUp start={0} end={328} duration={4} /></h1>
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                    {({ isVisible }) => (
                                        <div style={{ height: 100 }}>
                                            {isVisible ? <CountUp start={0} end={25} duration={2} /> : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            <h3>Projects <br></br>
                                Completed
                            </h3>
                        </div>
                    </ReactBootStrap.Col> */}
          </ReactBootStrap.Row>
        </ReactBootStrap.Container>
      </div>
    </div>
  );
}
