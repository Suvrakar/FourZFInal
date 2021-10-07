import React from 'react'
import "./Footer.css";
import * as ReactBootStrap from 'react-bootstrap';
import whiteLogo from "../../images/4z Logo White.svg"
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { GrLinkedin } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";





export default function Footer() {


    return (

        <div>
            <div className="Footer py-5">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col className="pl-5 ">
                            <img src={whiteLogo} alt="Logo" class=""></img>
                            <p class="text-white pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec arcu consectetur, aliquet</p>
                            <div className="Smedia d-flex justify-content-start">
                                <div style={{ color: 'white', paddingTop: '10px', paddingRight: '10px' }}>
                                    <FaFacebook size={30} />
                                </div>
                                <div style={{ color: 'white', paddingTop: '10px', paddingRight: '10px' }}>
                                    <GrLinkedin size={30} />
                                </div>
                                <div style={{ color: 'white', paddingTop: '10px', paddingRight: '10px' }}>
                                    <AiFillTwitterCircle size={30} />
                                </div>
                            </div>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="d-flex align-items-center flex-column">
                            <p class="text-white style">
                                <h4 className="pb-3 ">Navigation</h4>
                                {/* <ReactBootStrap.Nav.Link href="projects" className="">
                                    Projects
                                </ReactBootStrap.Nav.Link> */}
                            
                                <p > <a href="/" class="text-white style">Home</a></p>
                                <p> <a href="/services" class="text-white style">Our Services</a></p>
                                <p> <a href="/projects"  class="text-white style">Projects</a></p>
                                <p> <a href="/about" class="text-white style">About Us</a></p>
                                <p> <a href="/contact" class="text-white style">Contact Us</a></p>
                            </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="d-flex align-items-center flex-column">
                            <p class="text-white my-4">
                                <h4 className="pb-3 ml-5 " >Our Contact</h4>
                                <div className="parent d-flex">
                                    <div className="logosofContact">
                                        <div style={{ color: 'white', paddingTop: '35px', paddingRight: '10px' }}>
                                            <GoLocation size={25} />
                                        </div>
                                        <div style={{ color: 'white', paddingTop: '55px', paddingRight: '10px' }}>
                                            <FaPhoneAlt size={20} />
                                        </div>
                                        <div style={{ color: 'white', paddingTop: '30px', paddingRight: '10px' }}>
                                            <GrMail size={20} />
                                        </div>
                                    </div>

                                    <div className="">
                                        <p>
                                            4z International Limited <br></br>
                                            Flat 5B, House 54, Road 10, <br></br>
                                            Block E, Banani <br></br>
                                            Dhaka 1213, Bangladesh</p>

                                        <p>+8802324354423 <br></br>
                                            +8802324354423</p>

                                        <p>contact@somemail.com</p>
                                    </div>

                                </div>


                            </p>
                     
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </div>
        </div>
    )
}
