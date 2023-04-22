import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        reEnterPassword: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name] : value
        });
    };
    const register = () => {
        const {name, username, password, reEnterPassword} = user;

        if(name && username && password && (password === reEnterPassword)) {

            // axios.post( "http://localhost:5000/register", user)
            
            axios.post( window.location.origin + "/register", user)

            .then(res => {
                if(res.data.message){
                    alert(res.data.message)
                }
                history("/login")
            });
        }
        else{
            alert("invalid data");
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text"  name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange} required/>
            <input type="email" name="username" value={user.username}  placeholder="Enter your Email" onChange={handleChange} required/>
            <input type="password" name="password" value={user.password}  placeholder="Enter your Password" onChange={handleChange} required/>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword}  placeholder="Re-enter your Password" onChange={handleChange} required/>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history("/login")}>Login</div>
            
        </div>
    );
};

export default Register;
