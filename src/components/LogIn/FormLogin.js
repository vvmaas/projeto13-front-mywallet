import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {logIn} from "../../service/AxiosService"
import LargeButton from "../LargeButton";
import styled from "styled-components";

export default function FormLogin() {

    const [form, setForm] = useState({})
    const navigate = useNavigate()

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
        const body = {
            ...form,
        }
        navigate('/home')
        //const promise = logIn(body)
       // promise.then((res) => {setUser(res.data); navigate('/home');})
      //  promise.catch(() => {alert('Dados inválidos, tente novamente');})

    }


    return (
        <Form>
        <form onSubmit={sendForm}>
            <input type="email" name="email" placeholder=' E-mail' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <input type="password" name="password" placeholder=' Senha' required
            onChange={(e => handleForm({
                name: e.target.name,
                value: e.target.value,
            }))}/>
            <LargeButton text="Entrar" type="submit"/>
        </form>
        </Form>
    )
}

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