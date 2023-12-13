import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import './Login.css';

const Login = () => {

    const navigation=useNavigate();

    const handleSubmit=()=>{
        navigation('/Home');
    }
    return (
        <div class="Contain2">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <br/><br/>
                <input id="lo11" type="text" required placeholder="Username"/><br/><br/>
                <input id="lo11" type="password" required placeholder="Password"/><br/><br/><br/>
                <input id="lo21" type="submit" /><br/><br/>

                <p class='p1'>Dont have an account? <Link to='/Signup' className="sign1">SignUp</Link></p>
            </form>
        </div>
    )
}
export default Login;