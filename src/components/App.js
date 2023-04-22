import React, { useState } from "react";
import Login from "./login.js";
import Register from "./register.js";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import GamePlay from "./Basics/GamePlay.js";
import About from "./Basics/About.js";
import Header from "./Header.js";

function App() {

    const [user, setLoginUser] = useState({});

    return (
        <div className="App">

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={user && user._id ? <GamePlay setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/> }/>
                    <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={user && user._id ? <About setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;