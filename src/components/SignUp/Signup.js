import styled from "styled-components"
import { Link } from "react-router-dom"
import FormSignup from "./FormSignup"

export default function Signup() {
    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <FormSignup/>
            <Link to="/">
            <span>Já tem uma conta? Entre agora!</span>
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
    font-size: 32px;
    font-family: 'Saira Stencil One', cursive;
}
    
`