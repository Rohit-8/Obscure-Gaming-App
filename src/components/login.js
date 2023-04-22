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
            <h1>Login</h1>
            <input type="email" name="username" value={user.username}  placeholder="Enter your Email" required onChange={handleChange}/>
            <input type="password" name="password" value={user.password}  placeholder="Enter your Password" required onChange={handleChange}/>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history("/register")}>Register</div>
        </div>
    );
};

export default Login;