import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryId } = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    console.log(country[0].name.common);

    return (
        <Container>
            <Card className="text-center">
                <Card.Header>
                    {/* <Card.Img variant="top" src={country.flags.svg} /> */}
                </Card.Header>
                <Card.Body>
                    {/* <Card.Title>{country.name.common}</Card.Title> */}
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>
    );
};

export default CountryDetails;