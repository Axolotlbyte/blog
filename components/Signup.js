import { useState } from "react";

const Signup = ({ handleToggle, signupAcc, setSignup }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="w-11/12 rounded text-right text-white min-h-form md:w-3/5 md:h-auto  lg:w-2/5 bg-black bg-opacity-50 backdrop-blur-3xl ">
      <button
        title="close"
        onClick={handleToggle}
        className="w-auto h-auto p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 fade text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex items-center justify-center rounded-full w-full h-auto ">
        <div className="w-auto rounded-full h-auto bg-gradient-to-br from-purple-600 via-violet-500 to-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-person-circle h-20 w-20"
            viewBox="0 0 16 16"
          >
            <path
              className="text-white"
              d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            />
            <path
              className="text-white"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
      </div>
      <p className="font-bold text-5xl text-center mt-4">SIGN UP</p>
      <div className="w-full h-full flex flex-col items-center justify-start text-center">
        <input
          type="text"
          className="md:w-9/12 w-11/12 bg-transparent border-b-2 outline-none mt-6 text-xl"
          placeholder="Username"
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value,
            })
          }
        />
        <input
          type="email"
          className="md:w-9/12 w-11/12 bg-transparent border-b-2 outline-none mt-6 text-xl"
          placeholder="Email"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          className="md:w-9/12 w-11/12 bg-transparent border-b-2 outline-none mt-6 text-xl"
          placeholder="Password"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
        <button
          onClick={() => signupAcc(user.email, user.username, user.password)}
          className="p-3 bg-yellow-500 rounded-xl ring-2 ring-white font-bold w-11/12 md:w-9/12 my-6 mb-4 text-xl"
        >
          Sign Up
        </button>
        <small className="mb-4">
          Already have an account ?{" "}
          <button onClick={setSignup} className="text-yellow-500">
            Sign in
          </button>
        </small>
      </div>
    </div>
  );
};

export default Signup;
