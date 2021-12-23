import { useState } from "react";
import styled from "@emotion/styled";
import cryptoImg from "./img/imagen-criptos.png";
import Form from "./components/Form";

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto;
    display: block;
`;

const Heading = styled.h1`
    font-family: "Poppins", sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after {
      content: '';
      width: 300px;
      height: 6px;
      background-color: #66a2fe;
      display: block;
      margin: 10px auto;
    }

`;

function App() {
    return (
        <Container>
            <Image src={cryptoImg} alt="Imágenes cripto-monedas" />

            <div>
              <Heading>Cotiza Criptomonedas al instante</Heading>
              <Form></Form>
            </div>
        </Container>
    );
}

export default App;
