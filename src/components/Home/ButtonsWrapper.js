import styled from "styled-components"
import { Link } from "react-router-dom"
import Minus from "../../assets/Minus.png"
import Plus from "../../assets/Plus.png"

export default function ButtonsWrapper() {
    return(
        <Wrapper>
            <Link to="/newincome">
            <Button>
                <img src={Plus} alt="Adicionar" />
                <h5>Nova entrada</h5>
            </Button>
            </Link>
            <Link to="/newexpense">
            <Button>
                <img src={Minus} alt="Remover" />
                <h5>Nova saída</h5>
            </Button>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 16vh;
    width: 90vw;
    margin: 10px auto;
`

const Button = styled.div`
    background-color: #a328d6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    padding: 9px;
    width: 43vw;
    height: 16vh;
    cursor: pointer;
img {
    height: 25px;
    width: 25px;
}
h5 {
    color: white;
    width: 10px;
    font-weight: bold;
    font-size: 18px;
}
`