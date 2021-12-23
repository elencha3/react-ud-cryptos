import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import cryptoImg from "./img/imagen-criptos.png";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

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
    margin: 50px auto;
    display: block;
`;

const Heading = styled.h1`
    font-family: "Poppins", sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after {
        content: "";
        width: 300px;
        height: 6px;
        background-color: #000082;
        display: block;
        margin: 10px auto;
    }
`;

const ContainerResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

function App() {
    const [currencies, setCurrencies] = useState({});
    const [result, setresult] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Object.keys(currencies).length > 0) {
            const quoteCrypto = async () => {
              setLoading(true)
              setresult({})
                const { currencyState, cryptoState } = currencies;
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoState}&tsyms=${currencyState}`;

                const response = await fetch(url)
                const result = await response.json()

                setresult(result.DISPLAY[cryptoState][currencyState])
                setLoading(false)
            };

            quoteCrypto();
        }
    }, [currencies]);

    return (
      <>
        <Container>
            <Image src={cryptoImg} alt="Imágenes cripto-monedas" />

            <div>
                <Heading>Cotiza Criptomonedas al instante</Heading>
                <Form currencies={currencies} setCurrencies={setCurrencies} />
            </div>

            {/* Solo con result no funciona porque es un objeto y siempre se va a mostrar.
            Cogemos uno de los valores que nos da la cotización - PRICE */}
           
        </Container>

        <ContainerResult>
          {loading && <Spinner />}
          {result.PRICE && <Result result={result} />}
        </ContainerResult>
         
         </>
    );
}

export default App;
