import { useState } from "react";
import {AiFillEyeInvisible,AiFillEye} from"react-icons/ai"
import { Link } from 'react-router-dom';
import OAuth from "../components/OAuth";


function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, SetFormData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const { name,email, password } = formData;

  function onChange(e) {
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>

      <div className="flex flex-wrap justify-center items-center mt-10 px-6 py-12 max-w-6xl mx-auto">

        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form className="">

          <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
          rounded transition ease-in-out mb-5"
            />

            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Email"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
          rounded transition ease-in-out mb-5"
            />

            <div className="relative mb-6">
              <input
                type={showPassword?"text":"password"}
                id="password"
                onChange={onChange}
                value={password}
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
            rounded transition ease-in-out"
            placeholder="password"
              />

              {showPassword ?(<AiFillEyeInvisible 
              className="absolute right-3 top-3 text-xl cursor-pointer"
              onClick={()=>setShowPassword((prevState)=>!prevState)}
              />):

              (<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" 
              onClick={()=>setShowPassword((prevState)=>!prevState)}
              />)
              
              }
            </div>

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
               Have an account?
                <Link to="/sign-in" className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out ml-2">Sign In</Link>
              </p>

              <p>
                <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out ">Forgot Password</Link>
              </p>
            </div>

            <button type="submit" className="bg-blue-600 text-white w-full px-7 py-3 text-sm font-medium mt-5
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >Sign In</button>

            <div className="flex my-4 items-center before:border-t before:flex-1  
            before:border-gray-300 
            after:border-t after:flex-1  
            after:border-gray-300">
              <p className="text-center font-semibold-mx-4">
                OR
              </p>
            </div>
            <OAuth />
          </form>
         
        </div>
      </div>
    </section>
  );
}

export default SignUp;
