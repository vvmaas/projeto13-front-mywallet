import styled from "styled-components"
import { useState, useEffect, useContext  } from "react"
import UserContext from "../../contexts/UserContext"
import { getList } from "../../service/AxiosService"
import { useNavigate } from "react-router-dom"
import Registers from "./Registers"

export default function FinList() {

    const [list, setList] = useState([])
    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    useEffect(() => {
        if(user.token === undefined){
            navigate("/")
        }
        getList(user.token).then((res) => setList(res.data))
    }, [])

    return (
        <Wrapper>
                {list.length > 0 ? <Registers list={list}/> : <NoRegister><h4>Não há registros de entrada ou saída</h4></NoRegister>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: white;
    height: 68.5vh;
    border-radius: 9px;
    width: 90vw;
    margin: 0 auto;

`

const NoRegister = styled.div`
    display: flex;
    height: 68.5vh;
    width: 90vw;
h4 {
    width: 50vw;
    font-size: 20px;
    text-align: center;
    color: #868686;
    margin: auto auto;
}
`