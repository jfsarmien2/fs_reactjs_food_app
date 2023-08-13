import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animations";
function LoginInput({
  placeholder,
  type,
  icon,
  inputState,
  inputStateFunc,
  isSignUp,
}) {
  const [isFocus, setisFocus] = useState(false);
  return (
    <motion.div
      {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md right-auto w-full px-4 py-2 ${
        isFocus ? "shadow-md shadow-red-400" : "shadow-none"
      }`}
    >
      {icon}
      <input
        placeholder={placeholder}
        type={type}
        value={inputState}
        onChange={(e) => inputStateFunc(e.target.value)}
        onFocus={() => setisFocus(true)}
        onBlur={() => setisFocus(false)}
        className='w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none'
      />
    </motion.div>
  );
}

export default LoginInput;
