import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyle";
import Login from "./LogIn/Login";
import Signup from "./SignUp/Signup";


export default function App() {
    return (
<>
    <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
            </Routes>
        </BrowserRouter>
</>
    )
}