import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import Error from "./Error";
import { currency } from "../data/currency";

const SubmitInput = styled.input`
    background-color: #3333ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700px;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        background-color: #7a7dfe;
    }
`;

const Form = ({currencies, setCurrencies}) => {
    const [cryptos, setCryptos] = useState([""]);
    const [error, setError] = useState(false);

    //currencyState corresponde a state de useSelectCurrency
    const [CurrencySelect, currencyState] = useSelectCurrency(
        "Selecciona divisa",
        currency
    );
    const [CryptoSelect, cryptoState] = useSelectCurrency(
        "Selecciona tu criptomoneda",
        cryptos
    );

    useEffect(() => {
        const apiConnection = async () => {
            const url =
                "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const response = await fetch(url);
            const result = await response.json();

            const arrayCriptos = result.Data.map((cryptoArray) => {
                const crypto = {
                    id: cryptoArray.CoinInfo.Name,
                    name: cryptoArray.CoinInfo.FullName,
                };
                return crypto;
            });

            setCryptos(arrayCriptos);
        };
        apiConnection();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([currencyState, cryptoState].includes("")) {
            setError(true);
            return;
        }
        setError(false)

        setCurrencies({
            currencyState,
            cryptoState
        })
        
    };

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form action="" onSubmit={handleSubmit}>
                <CurrencySelect />
                <CryptoSelect />

                <SubmitInput type="submit" value="Cotizar" />
            </form>
        </>
    );
};

export default Form;
