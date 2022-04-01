import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </Row>
        </Container>
    );
};

export default Home;