import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 7px;
`;

const useSelectCurrency = (label, currencyOptions) => {

    const [state, setState] = useState('')

    const SelectCurrency = () => (
        <>
            <Label htmlFor="">{label}</Label>
            <Select
            value={state}
            onChange={ e => setState(e.target.value)}>
                <option value="">Seleccione</option>
                {currencyOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </Select>
        </>
    );

    return [SelectCurrency, state];
};

export default useSelectCurrency;
