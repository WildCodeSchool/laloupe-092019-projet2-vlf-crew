import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './Body.css';

class Body extends React.Component {

    render() {
        return (
            <div>
                <Accordion>
                    <Card bg="dark">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Food
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="row space-evn">
                                <div className="column">
                                    <label><input type="checkbox" /> Food</label>
                                    <label><input type="checkbox" /> Food</label>
                                    <label><input type="checkbox" /> Food</label>
                                    <label><input type="checkbox" /> Food</label>
                                </div>
                                <div className="column">
                                    <label><input type="checkbox" /> Food</label>
                                    <label><input type="checkbox" /> Food</label>
                                    <label><input type="checkbox" /> Food</label>
                                    <label><input type="checkbox" /> Food</label>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card bg="dark">
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Drinks
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="row space-evn">
                                <div className="column">
                                    <label><input type="checkbox" /> Drinks</label>
                                    <label><input type="checkbox" /> Drinks</label>
                                    <label><input type="checkbox" /> Drinks</label>
                                    <label><input type="checkbox" /> Drinks</label>
                                </div>
                                <div className="column">
                                    <label><input type="checkbox" /> Drinks</label>
                                    <label><input type="checkbox" /> Drinks</label>
                                    <label><input type="checkbox" /> Drinks</label>
                                    <label><input type="checkbox" /> Drinks</label>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card bg="dark">
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Destination
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="row space-evn">
                                <div className="column">
                                    <label><input type="checkbox" /> Destination</label>
                                    <label><input type="checkbox" /> Destination</label>
                                    <label><input type="checkbox" /> Destination</label>
                                    <label><input type="checkbox" /> Destination</label>
                                </div>
                                <div className="column">
                                    <label><input type="checkbox" /> Destination</label>
                                    <label><input type="checkbox" /> Destination</label>
                                    <label><input type="checkbox" /> Destination</label>
                                    <label><input type="checkbox" /> Destination</label>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default Body;