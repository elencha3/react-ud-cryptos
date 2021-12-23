import styled from "@emotion/styled";

const Container = styled.div`
    color: #fff;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    background-color: #000082;
    padding: 10px 40px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    margin-top: 20px;
`;

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
   
`;

const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
   
`;


const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        result;
    return (
        <Container>
            <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
            <div>
                <Price>
                    El precio es de: <span>{PRICE}</span>{" "}
                </Price>
                <Text>
                    El precio más alto del día es de: <span>{HIGHDAY}</span>{" "}
                </Text>
                <Text>
                    El precio más bajo del día es de: <span>{LOWDAY}</span>{" "}
                </Text>
                <Text>
                    Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>{" "}
                </Text>
                <Text>
                    Última actualización: <span>{LASTUPDATE}</span>{" "}
                </Text>
            </div>
        </Container>
    );
};

export default Result;
