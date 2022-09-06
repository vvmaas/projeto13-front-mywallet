import styled from "styled-components"
import { Link } from "react-router-dom"
import FormLogin from "./FormLogin"

export default function Login() {
    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <FormLogin/>
            <Link to="/signup">
            <span>Primeira vez? Cadastre-se!</span>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

span {
    color: white;
    margin-top: 4vh;
    display: flex;
    font-size: 14px;
}

h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
}
    
    `