import React from "react";
import { useLocation,useNavigate } from "react-router";
function Header() {
  const location = useLocation();
  const navigate= useNavigate();
  // console.log(location.pathname);

  function pathMathRoute(route) {
    if (route === location.pathname) 
    return true;
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-around items-center px-3 max-w-6xl m-auto">
        <div>
          <h2
          className="cursor-pointer"
          onClick={()=>navigate("/")}>Real Estate</h2>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
                    border-b-[3px]
                  
                    ${pathMathRoute("/") ? "text-black border-b-red-500":"text-gray-400 border-b-transparent"}`}
                    onClick={()=>navigate("/")}
            >
              Home
            </li>

            <li
              className={` cursor-pointer py-3 text-sm
                    font-semibold
                    border-b-[3px]
                    ${
                      // pathMathRoute("/offers") && "text-black   border-b-red-500"
                      pathMathRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"
                    }`
                }
                onClick={()=>navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm
                    font-semibold 
                    border-b-[3px]
                    
                    ${
                      pathMathRoute("/sign-in") ? "text-black border-b-red-500":"text-gray-400 border-b-transparent"
                    }`}
                    onClick={()=>navigate("/sign-in")}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;