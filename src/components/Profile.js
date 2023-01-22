import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    //Make API Calls
    const timer = setInterval(() => {
      console.warn("Interval");
    }, 1000);

    return () => {
      //Cleaning up things: similar to `componentWillUnmount`
      clearInterval(timer);
    };
  }, [count, count1]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">Profile Functional Page!</p>
      <p className="text-xl">{props.props}</p>
      <p className="text-xl">Count: {count}</p>
      <p className="text-xl">Count1: {count1}</p>
      <button
        className="text-black font-bold p-2 rounded hover:text-white hover:bg-black border-black border-2"
        onClick={() => {
          setCount(count + 1);
          setCount1(count1 + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Profile;
