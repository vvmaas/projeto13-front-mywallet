import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import dayjs from "dayjs"
import { postUpdate } from "../../service/AxiosService"
import UserContext from "../../contexts/UserContext"
import styled from "styled-components"
import LargeButton from "../LargeButton"

export default function NewExpense() {

    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const {user} = useContext(UserContext)


    function handleForm({ name, value }){
        console.log(name, value)
        setForm({
          ...form,
          [name]: value,
        });
    }

    function sendForm(e) {
        e.preventDefault();
        console.log(form);
        if (Number(form.value) <= 0) {
            alert('O valor deve ser maior que zero.')
            return
        }
        const body = {
            ...form,
            type: "expense",
            date: `${dayjs().day()}/${dayjs().month()}`
        }
        const promise = postUpdate(body, user.token)
        promise.then(() => {navigate('/home');})
        promise.catch(() => {alert('Dados inválidos, tente novamente');})

    }
    
    return (
        <Wrapper>
            <TopBar>
                <h2>Nova saída</h2>
            </TopBar>

            <Form>
        <form onSubmit={sendForm} autocomplete="off">
            <input type="number" name="value" placeholder=' Valor' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <input type="text" name="text" placeholder=' Descrição' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <LargeButton text="Salvar saída" type="submit"/>
        </form>
        </Form>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
button {
    margin: 13 auto;
}
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
`

const Form = styled.div`
    margin-top: 20px;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
}

input {
    width: 90vw;
    margin-top: 13px;
    height: 7vh;
    font-size: 20px;
    border-radius: 5px;

}

input:focus{
    outline: none;
}

`