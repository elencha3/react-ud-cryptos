import React from "react";
import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { currency } from "../data/currency";

const SubmitInput = styled.input`
    background-color: #9497ff;
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

const Form = () => {
    const [SelectCurrency, state] = useSelectCurrency("Selecciona divisa", currency);

    return (
        <form action="">
            <SelectCurrency />

            {state}
            <SubmitInput type="submit" value="Cotizar" />
        </form>
    );
};

export default Form;
