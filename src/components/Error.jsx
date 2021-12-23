
import styled from "@emotion/styled";

const Text = styled.div`
    color: #b7322c;
    padding: 15px;
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    font-weight: 700px;
    text-align: center;
`;

const Error = ({ children }) => {
    return (
        <Text>{children}</Text>
    )
};

export default Error;
