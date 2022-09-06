import axios from "axios";

const BASE_URL = "http://localhost:5000"

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    return promise
}

function logIn(body) {
    const promise = axios.post(`${BASE_URL}/login`, body)
    return promise
}

export {logIn, signUp}