import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    // Navigate to the issues page
    navigate("/issues");
  };
  return (
    <div className=" bg-black border-b-2 border-b-black-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl  font-bold tracking-tight text-white ">
          To-Let Globe
        </Link>
        <span className="flex space-x-2 items-center">
          <Button
            variant="ghost"
            className=" text-1xl font-bold text-white hover:text-orange-500 "
            onClick={handleClick}
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
