import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyle";
import Login from "./LogIn/Login";
import Signup from "./SignUp/Signup";
import Home from "./Home/Home";
import NewIncome from "./NewIncome/NewIncome";
import NewExpense from "./NewExpense/NewExpense";


export default function App() {
    return (
<>
    <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
                <Route path='/home' element={<Home />} ></Route>
                <Route path='/newincome' element={<NewIncome />} ></Route>
                <Route path='/newexpense' element={<NewExpense />} ></Route>
            </Routes>
        </BrowserRouter>
</>
    )
}