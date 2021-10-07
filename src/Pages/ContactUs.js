import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Form from "../Components/Form/Form";
import { Helmet } from "react-helmet";
import Iframe from "@trendmicro/react-iframe";
// import Iframe from 'react-iframe'

export default function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contact Us | 4z International</title>
      </Helmet>

      {/* <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.678639280319!2d90.39695082196741!3d23.794774936879612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1627714089218!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></Iframe> */}

      <ReactBootStrap.Container>
        <ReactBootStrap.Row>
          <Iframe
            //   src={element.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58424.07564184906!2d90.36376248859446!3d23.76503469611707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1629872996084!5m2!1sbn!2sbd"
            width="1000"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></Iframe>
          <ReactBootStrap.Col>
            <div class=" mt-5 p-5">
              <h4 className="pb-3">Our Contact</h4>
              <p>
                4z International Limited <br></br>
                Flat 5B, House 54, Road 10, <br></br>
                Block E, Banani <br></br>
                Dhaka 1213, Bangladesh
              </p>

              <p>
                +8802324354423 <br></br>
                +8802324354423
              </p>

              <p>contact@somemail.com</p>
            </div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            <div class=" mt-5 p-5">
              <h4 className="pb-3">Get in Touch</h4>
              <ReactBootStrap.Form>
                <ReactBootStrap.Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  {/* <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label> */}
                  <ReactBootStrap.Form.Control
                    type="email"
                    placeholder="Enter name"
                  />
                  <ReactBootStrap.Form.Text className="text-muted"></ReactBootStrap.Form.Text>
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  {/* <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label> */}
                  {/* <ReactBootStrap.Form.Control type="email" placeholder="Enter email" /> */}
                  <ReactBootStrap.Form.Text className="text-muted"></ReactBootStrap.Form.Text>
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  {/* <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label> */}
                  <ReactBootStrap.Form.Control
                    type="email"
                    placeholder="Enter email"
                  />
                  <ReactBootStrap.Form.Text className="text-muted"></ReactBootStrap.Form.Text>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  {/* <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label> */}
                  {/* <ReactBootStrap.Form.Control type="password" placeholder="Password" /> */}
                </ReactBootStrap.Form.Group>
                {/* <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                                </ReactBootStrap.Form.Group> */}
                <ReactBootStrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <ReactBootStrap.Form.Label>
                    Your Message
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control as="textarea" rows={3} />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Button
                  variant="primary rounded-pill blue"
                  type="submit"
                >
                  Send Message
                </ReactBootStrap.Button>
              </ReactBootStrap.Form>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}
