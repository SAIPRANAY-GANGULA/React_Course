import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.warn("Parent-constructor");
  }

  componentDidMount() {
    console.warn("Parent-componentDidMount");
  }

  render() {
    console.warn("Parent-render");
    return (
      <>
        <div className="flex flex-col items-center justify-evenly m-2 h-screen max-h-[80vh]">
          <h1 className="text-3xl">About Us Page!</h1>
          <ProfileClass props="Child1" />
          {/*<ProfileClass props="Child2" />*/}
          <Profile props="props" />
          <Outlet />
        </div>
      </>
    );
  }
}

export default About;

/**
 *
 *
 * Parent-constructor
 * Parent-render
 * Child1-constructor
 * Child1-render
 * Child2-constructor
 * Child2-render
 *
 * Above phases are batches of "render" phase
 *
 * Child1-componentDidMount
 * Child2-componentDidMount
 * Parent-componentDidMount
 *
 * Above phases "commit" phase
 *
 *
 * Ref: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 *
 *
 * */
