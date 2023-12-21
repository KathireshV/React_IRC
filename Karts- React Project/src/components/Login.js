import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import './Login.css';

const Login = () => {

    const navigation=useNavigate();
    const[uname,setUname]=useState('');
    const[pass,setPass]=useState('');


    const handleSubmit=(e)=>{
        if(uname==='kathir' && pass==='123456')
        {
            alert("Login Successful");
            navigation('/home');
        }
        else
        {
            alert("Incorrect Password/Username");
        }
    }
    return (
        <div class="Contain2">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <br/><br/>
                <input id="lo11" type="text" required placeholder="Username" value={uname} onChange={(e)=> setUname(e.target.value)}/><br/><br/>
                <input id="lo11" type="password" required placeholder="Password" value={pass} onChange={(e)=> setPass(e.target.value)}/><br/><br/><br/>
                <input id="lo21" type="submit" /><br/><br/>

                <p class='p1'>Dont have an account? <Link to='/sign-up' className="sign1">SignUp</Link></p>
            </form>
        </div>
    )
}
export default Login;