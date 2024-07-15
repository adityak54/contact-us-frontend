import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = async (path:string) => {
    // Navigate to the issues page
    navigate(path);
  };
  return (
    <div className=" bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <img src={icon}></img>
        <span className="flex space-x-2 items-center">
          <Button
            name="home"
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={()=>handleClick('/')}
          >
            Home
          </Button>
          <Button
            name="home"
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={()=>handleClick('/')}
          >
            {/* removes all style in button so that we can crate our*/}
            Service
          </Button>
          <Button
            name="home"
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={()=>handleClick('/')}
          >
            {/* removes all style in button so that we can crate our*/}
            Blog
          </Button>
          <Button
            name="contact"
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={()=>handleClick('/contact')}
          >
            {/* removes all style in button so that we can crate our*/}
            Contact
          </Button>
          <Button
            name="about"
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={()=>handleClick('/')}
          >
            {/* removes all style in button so that we can crate our*/}
            About
          </Button>
          <Button
            name="home"
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={()=>handleClick('/')}
          >
            {/* removes all style in button so that we can crate our*/}
            Property Listing
          </Button>
          <Button
            name="issues"
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={()=>handleClick('/issues')}
          >
            {/* removes all style in button so that we can crate our*/}
            Issues
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
