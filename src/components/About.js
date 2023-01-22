import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-2 h-96">
        <h1 className="text-3xl">About Us Page!</h1>
        <Outlet />
      </div>
    </>
  );
};

export default About;
