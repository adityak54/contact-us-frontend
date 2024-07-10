import Navbar from "../components/Navbar";

type Props = {
  //used snippet to write props
  children: React.ReactNode; //children contanin all the components that are in nested layout
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container  mx-auto flex-1 py-10"> {children} </div>
    </div>
  );
};

export default Layout;
