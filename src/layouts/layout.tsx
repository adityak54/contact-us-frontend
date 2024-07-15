import Navbar from "../components/Navbar";

type Props = {
  //used snippet to write props
  children: React.ReactNode; //children contanin all the components that are in nested layout
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=""> {children} </div>
    </div>
  );
};

export default Layout;
