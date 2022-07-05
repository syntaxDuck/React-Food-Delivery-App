import React, { useRef, useState } from "react";

//Component imports
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

//Function imports
import { API_KEY } from "../private/PRIVATE";

//Style imports
import styles from "./LoginPage.module.css";

const API_URLS = {
  SignUp: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
  SignIn:
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
};

const LoginPage = () => {
  console.log("Rendering Login");
  const [userAction, setUserAction] = useState("SignIn");

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const confPasswordRef = useRef(null);

  console.log(userAction);
  console.log(API_URLS[userAction] + API_KEY);

  document.body.style.overflow = "hidden";

  const [error, setError] = React.useState(null);

  const signUpHandler = () => {
    const signUp = async () => {
      const apiURL = API_URLS[userAction] + API_KEY;
      try {
        const response = await fetch(apiURL.current, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });

        if (!response.status) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    signUp();
  };

  return (
    <div className={styles["login-content"]}>
      <Card className={styles["login-card"]}>
        <h1>{userAction === "SignIn" ? "Login" : "New User"}</h1>
        <form className={styles["login-form"]}>
          <div>
            <label>Username</label>
            <input type="text" ref={userNameRef} />
            <label>Password</label>
            <input type="password" ref={passwordRef} />
            {userAction === "SignUp" && (
              <React.Fragment>
                <label>Confirm Password</label>
                <input type="password" ref={confPasswordRef} />
              </React.Fragment>
            )}
          </div>
        </form>
        <div>
          <Button onClick={() => setUserAction("SignUp")} label={"Sign Up"} />
          <Button onClick={() => setUserAction("SignIn")} label={"Sign In"} />
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
