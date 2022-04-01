import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Country = (props) => {

    const { name, flags, cca3 } = props.country;

    return (
        <Col sm={3} className="m-2">
            <Card style={{ height: '350px' }}>
                <Card.Img variant="top" src={flags.svg} />
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/country/${cca3}`}>
                        <Button>Learn More</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Country;