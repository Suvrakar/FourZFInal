import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

export default function Mission() {
    return (
        <div>
            <ReactBootStrap.Container>
                <ReactBootStrap.Row className="my-5">
                    <ReactBootStrap.Col>
                        <h1>Our History <br>
                        </br>
                            Mission & Vision
                        </h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src="https://image.shutterstock.com/image-photo/vision-mission-hand-turns-dice-260nw-1777337453.jpg" class="text-center"></img>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </div>
    )
}
