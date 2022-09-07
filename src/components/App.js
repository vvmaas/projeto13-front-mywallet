import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../styles/globalStyle";
import Login from "./LogIn/Login";
import Signup from "./SignUp/Signup";
import Home from "./Home/Home";
import NewIncome from "./NewIncome/NewIncome";
import NewExpense from "./NewExpense/NewExpense";
import UserContext from "../contexts/UserContext";
import UserListContext from "../contexts/UserListContext";


export default function App() {
    const [user, setUser] = useState({}) 
    const [userList, setUserList] = useState([]) 

    return (
<>
    <GlobalStyle />
        <UserListContext.Provider value={{ userList, setUserList }}>
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>} ></Route>
                        <Route path="/signup" element={<Signup />} ></Route>
                        <Route path='/home' element={<Home />} ></Route>
                        <Route path='/newincome' element={<NewIncome />} ></Route>
                        <Route path='/newexpense' element={<NewExpense />} ></Route>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </UserListContext.Provider>
</>
    )
}