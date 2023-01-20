import "../styles/Hero.css"
import { Link } from "react-router-dom"
import user from "../img/user.png"
import email from "../img/email.png"
import key from "../img/key.png"


export default function Hero() {
  return (
    <div className="hero">
        <div className="photo">
            <div className="bg-photo">
                Photo goes here
            </div>
        </div>
        <div className="text">
            Text goes here
        </div>
        <div className="form">
            <form>
                <h2>Register Now</h2>
                <div className="input-content">
                    <img src={user} />
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-content">
                    <img src={email} />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-content">
                    <img src={key} />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="check-box">
                    <label id="pass"><input type="checkbox" id="pass" /> Remember your password</label>
                    <label id="terms"><input type="checkbox" id="terms" /> I accept the <Link>terms and conditions of use</Link> </label>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    </div>
  )
}
