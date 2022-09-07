import { Link } from "react-router-dom";
import styled from "styled-components";
import exit from "../../assets/Exit.png";
import FinList from "./FinList";
import ButtonsWrapper from "./ButtonsWrapper";


export default function Home() {
    return (
        <Wrapper>

            <TopBar>
                <h2>Olá, Ronaaaldo</h2>
                <Link to="/">
                <img src={exit} alt="exit" />
                </Link>
            </TopBar>
            <FinList />

            <ButtonsWrapper />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
`

const TopBar = styled.div`
    height: 12vh;
    margin: 0 auto;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
h2 {
    color: white;
    font-size: 23px;
    font-weight: bold;
}
img {
    margin-bottom: 2px;
    cursor: pointer;
}
`