import { Link } from "react-router-dom";
import Header from "./Header";
import '../css/AuthStyle.css';

function Login() {
    return ( 
        <>
            <Header/>
            <section className="authentication">
                <img className="background" src="/images/login.jpg" alt="" />
                <div className="content">
                    <h1>Welcome</h1>
                    <p>Login With Email</p>
                    <form action="">
                        <input type="text" placeholder="Enter Email or Username" autoFocus/>
                        <input type="text" placeholder="Enter Password"/>
                        <p>Forget your password?</p>
                        <button>LOGIN</button>
                    </form>
                    <p>_____________ OR _____________</p>
                    <div className="social">
                        <img src="/images/icons/google.png" alt="google" />
                        <img src="/images/icons/facebook.png" alt="facebook" />
                        <img src="/images/icons/apple.png" alt="apple" />
                    </div>
                    <p>Don't have account? <Link to="/register"> Register Now</Link></p>
                </div>
            </section>
        </>
     );
}

export default Login;