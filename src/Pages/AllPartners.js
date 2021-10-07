import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { Helmet } from 'react-helmet';

export default function Projects() {
    return (
        <div>
            <Helmet>
                <title>Projects | 4z International</title>
            </Helmet>
            <h1 className="text-center">We Work With the Best Partners</h1>

            <ReactBootStrap.Container className="my-5">
                <ReactBootStrap.Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Card>
                                <ReactBootStrap.Card.Img variant="top" src={`https://picsum.photos/id/${idx}/200/100`} />
                                <ReactBootStrap.Card.Body>
                                    <ReactBootStrap.Card.Title className="text-center">Card title</ReactBootStrap.Card.Title>
                                    <ReactBootStrap.Card.Text>
        
                                    </ReactBootStrap.Card.Text>
                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>)
                    )}
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>

        </div>
    )
}
