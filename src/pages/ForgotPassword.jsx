import { useState } from "react";
import { Link } from 'react-router-dom';
import OAuth from "../components/OAuth";


function ForgotPassword() {
  

  const [email, SetEmail] = useState("")



  function onChange(e) {
    SetEmail(e.target.value)
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

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
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Email"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
          rounded transition ease-in-out mb-5"
            />

            

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Don't have an account?
                <Link to="/sign-up" className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out ml-2">Register</Link>
              </p>

              <p>
                <Link to="/sign-in" className="text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out ">Sign in instead</Link>
              </p>
            </div>

            <button type="submit" className="bg-blue-600 text-white w-full px-7 py-3 text-sm font-medium mt-5
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >Send Reset Email</button>

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

export default ForgotPassword;
