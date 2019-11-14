import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './Body.css';

class Body extends React.Component {

    render() {
        return (
            <div className="accor">
                <div className="accord">
                    <Accordion>
                        <Card bg="dark" className="br1">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Food
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="row space-evn">
                                    <div className="column">
                                        <label><input type="checkbox" /> Traditional Specialties</label>
                                        <label><input type="checkbox" /> Awesome Burgers</label>
                                        <label><input type="checkbox" /> Meat Orgy</label>
                                    </div>
                                    <div className="column">
                                        <label><input type="checkbox" /> Vegan 3000</label>
                                        <label><input type="checkbox" /> Insect Lovers</label>
                                        <label><input type="checkbox" /> Fish Barbecue</label>
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
                                        <label><input type="checkbox" /> Vintage Wine</label>
                                        <label><input type="checkbox" /> Space Cocktails</label>
                                        <label><input type="checkbox" /> Fruits Juices</label>
                                    </div>
                                    <div className="column">
                                        <label><input type="checkbox" /> Curious Liquors</label>
                                        <label><input type="checkbox" /> Old School Sodas</label>
                                        <label><input type="checkbox" /> Cloud Water</label>
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
                                        <label><input type="checkbox" /> Hepler</label>
                                        <label><input type="checkbox" /> NGC 6872</label>
                                        <label><input type="checkbox" /> NGC 5195</label>
                                    </div>
                                    <div className="column">
                                        <label><input type="checkbox" /> IC 4970</label>
                                        <label><input type="checkbox" /> IC 2204</label>
                                        <label><input type="checkbox" /> NGC 3077</label>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="divbut">
                        <a href="/Result"><button>Go !</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;