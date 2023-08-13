import React, { useState } from "react";
import { motion } from "framer-motion";
import { LoginBg, Logo } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock } from "../assets/icons";
import { buttonClick } from "../animations";
function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isSignUp, setisSignUp] = useState(false);
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/* Background Image */}
      <img
        src={LoginBg}
        className='w-full h-full object-cover absolute'
        alt=''
      />

      {/* Content Box */}
      <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
        {/* Top Logo Section */}
        <div className='flex items-center justify-start gap-4 w-full'>
          <img src={Logo} className='w-8' alt='' />
          <p className='text-headingColor font-semibold text-2xl'>City</p>
        </div>

        {/* Welcome Text */}
        <p className='text-3xl font-semibold text-headingColor'>Welcome Back</p>
        <p className='text-xl text-textColor -mt-6'>
          {isSignUp ? "Sign up" : "Sign in"} with the following
        </p>

        {/* Form Section */}
        <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput
            placeholder='Email here'
            icon={<FaEnvelope />}
            type='email'
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            isSignUp={isSignUp}
          />
          <LoginInput
            placeholder='Password here'
            icon={<FaLock />}
            type='password'
            inputState={password}
            inputStateFunc={setPassword}
            isSignUp={isSignUp}
          />
          {isSignUp && (
            <LoginInput
              placeholder='Comfirm password here'
              icon={<FaLock />}
              type='password'
              inputState={confirmPassword}
              inputStateFunc={setconfirmPassword}
              isSignUp={isSignUp}
            />
          )}
          {!isSignUp ? (
            <p>
              Doesn't have an account?{" "}
              <motion.button
                className='text-red-400 underline cursor-pointer bg-transparent'
                {...buttonClick}
                onClick={() => setisSignUp(true)}
              >
                Create One
              </motion.button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <motion.button
                className='text-red-400 underline cursor-pointer bg-transparent'
                {...buttonClick}
                onClick={() => setisSignUp(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* Button Section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className='w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150'
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className='w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150'
            >
              Sign In
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
