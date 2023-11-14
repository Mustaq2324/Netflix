import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
        // Do any additional processing for registration if needed
        
        // Switch to the login state
        setIsSignIn(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="max-w-[600px] p-[70px] ml-auto mr-auto absolute top-[50%] -translate-y-[50%] z-10 left-[50%] -translate-x-[50%] bg-black bg-opacity-75">
      <form className="flex flex-col">
        <h1 className="text-left text-[1.55rem] mb-[25px] text-white">
          {isSignIn ? "Login" : "Sign Up"}
        </h1>
        <input
          className="outline-none h-[40px] mb-[14px] border-none rounded py-[5px] px-[15px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          className="outline-none h-[40px] mb-[14px] border-none rounded py-[5px] px-[15px]"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={isSignIn ? signIn : register}
          className="py-[10px] px-[20px] text-[1rem] border-none cursor-pointer text-white rounded bg-[#e50914] font-semibold mt-[20px]"
        >
          {isSignIn ? "Login" : "Sign Up"}
        </button>
        <h4 className="text-left text-[15px] mt-[30px] ">
          <span className="text-gray-600">
            {isSignIn ? "New to Netflix?" : "Already have an account?"}
          </span>
          <span
            className="ml-1 hover:cursor-pointer hover:underline text-white"
            onClick={handleToggle}
          >
            {isSignIn ? "Sign up Now" : "Sign In"}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Sign;
