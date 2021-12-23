import React from "react";
import styled from "@emotion/styled";

const SubmitInput = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #Fff;
    text-transform: uppercase;
    font-weight: 700px;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #7a7dfe;
    }
`

const Form = () => {
    return (
        <form action="">
            <SubmitInput type="submit" value="Cotizar" />
        </form>
    );
};

export default Form;
