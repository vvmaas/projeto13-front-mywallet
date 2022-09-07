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

function getList(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/register`, config)
    return promise
}

function postUpdate(body, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/register`, body, config)
    return promise
}

export {logIn, signUp, getList, postUpdate}