import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {

    const history = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name] : value
        });
    };

    async function login(e) {
        e.preventDefault();

        console.log(window.location.origin);
        // await axios.post("http://localhost:5000/login", user)
        
        await axios.post( window.location.origin + "/login", user)

        .then(res => {
            if(res.data.message){
                alert(res.data.message)
            }
            setLoginUser(res.data.user)
            history("/")
        })
    }

    return (
        <div className="login">
            <h2>Username </h2>
            <input type="email" name="username" value={user.email}  placeholder="Use- a@b.com" onChange={handleChange}/>
            <h2>Password </h2>
            <input type="password" name="password" value={user.password}  placeholder="Use- qwer" onChange={handleChange}/>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history("/register")}>Register</div>
        </div>
    );
};

export default Login;
