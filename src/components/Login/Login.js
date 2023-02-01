import React from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login_container">
      <div className="login_container_left">
        <div className="login_container_left_text">
          <p>NETWORKING HAS NEVER BEEN EASIER</p>
        </div>
      </div>
      <div className="login_container_right">
        <div className="form_container">
          <img
            src="https://i.pinimg.com/564x/8c/12/6e/8c126e576516e476effb619aa655a572.jpg"
            alt="this is a logo"
          />
          <form>
            {/*} <input
              type="text"
              placeholder="Full Name (required if registering)"
            />

            <input type="text" placeholder="Profile Pic Url(optional)" />
            <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />*/}
            <button onClick={() => loginWithRedirect()}>Login/Signup</button>
          </form>
          {/*} <h3 className="guest_option">Guest Login</h3>
          <p>
         Not a member? <span className="register_option">Register now</span>
</p>*/}
        </div>
      </div>
    </div>
  );
}

export default Login;
