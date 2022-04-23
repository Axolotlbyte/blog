import { useState, useEffect } from "react";
import { create, login } from "../services/user.service";
import Signin from "./signin";
import Signup from "./Signup";

export default function Account({ toggle, handleToggle, register, loggedIn }) {
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    if (register) {
      setSignup(true);
    }
  }, [register]);

  const loginAcc = (email, password) => {
    return login(email, password).then((res) => {
      console.log(res);
      loggedIn();
      handleToggle();
    });
  };

  const signupAcc = (email, username, password) => {
    console.log({ email, username, password });
    create(email, username, password).then((res) => {
      console.log(res);
    });
    return;
  };

  return (
    <div
      className={
        "flex items-center justify-center w-full top-0 z-50 h-screen backdrop-blur" +
        (toggle ? " fixed" : " hidden")
      }
    >
      {!signup ? (
        <Signin
          handleToggle={handleToggle}
          loginAcc={loginAcc}
          setSignup={() => setSignup(true)}
        />
      ) : (
        <Signup
          handleToggle={handleToggle}
          signupAcc={signupAcc}
          setSignup={() => setSignup(false)}
        />
      )}
      <style jsx>{`
        .min-h-form {
          min-height: 60%;
        }

        .card-anim {
          animation: opacity-anim 1s;
        }
        .border-grad {
          border: 10px solid;
          border-image-slice: 1;
          border-width: 5px;
          border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
        }
      `}</style>
    </div>
  );
}
