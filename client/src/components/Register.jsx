import { Link } from "react-router-dom";
import Header from "./Header";
import '../css/AuthStyle.css';

function Register() {
    return ( 
        <>
            <Header/>
            <section className="authentication">
                <img className="background" src="/images/login.jpg" alt="" />
                <div className="content">
                    <h1>CREATE AN ACCOUNT</h1>
                    <p>By creating account , you agree to our <span>Privacy policy</span> and <span>Terms of use.</span></p>
                    <form action="">
                        <div>
                           <input type="text" placeholder="First Name" autoFocus/>
                           <input type="text" placeholder="Last Name"/> 
                        </div>
                        <input type="text" placeholder="Enter Email"/>
                        <input type="text" placeholder="Enter Password"/>
                        <input type="number" placeholder="Enter Number"/>
                        <button>CREATE ACCOUNT</button>
                    </form>
                    <p>_____________ OR _____________</p>
                    <div className="social">
                        <img src="/images/icons/google.png" alt="google" />
                        <img src="/images/icons/facebook.png" alt="facebook" />
                        <img src="/images/icons/apple.png" alt="apple" />
                    </div>
                    <p>Already have an account?<Link to="/login"> Login</Link></p>
                </div>
            </section>
        </>
     );
}

export default Register;