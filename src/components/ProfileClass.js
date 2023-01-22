import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      userInfo: {},
    };
    console.warn(props.props + "-constructor");
  }

  async componentDidMount() {
    console.warn(this.props.props + "-componentDidMount");

    this.timer = setInterval(() => {
      console.warn("Interval");
    }, 1000);

    const data = await fetch("https://api.github.com/users/SAIPRANAY-GANGULA");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.warn(json);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.warn(this.props.props + "-componentDidUpdate");
    if (
      prevState.count !== this.state.count ||
      prevState.count1 !== this.state.count1
    ) {
      //do something
    }

    console.warn(this);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.warn(this.props.props + "-componentWillUnmount");
  }

  render() {
    console.warn(this.props.props + "-render");
    return (
      <div className="flex flex-col items-center">
        <p className="text-2xl">Profile Class Page!</p>
        <p className="text-xl">{this.props.props}</p>
        {/*<p className="text-xl">Count: {this.state.count}</p>*/}
        {/*<p className="text-xl">Count1: {this.state.count1}</p>*/}
        <p className="text-xl">Name: {this.state.userInfo.name}</p>
        <p className="text-xl">Location: {this.state.userInfo.location}</p>
        {/*<button*/}
        {/*  className="text-black font-bold p-2 rounded hover:text-white hover:bg-black border-black border-2"*/}
        {/*  onClick={() =>*/}
        {/*    this.setState({*/}
        {/*      count: this.state.count + 1,*/}
        {/*      count1: this.state.count1 + 1,*/}
        {/*    })*/}
        {/*  }*/}
        {/*>*/}
        {/*  Increment*/}
        {/*</button>*/}
      </div>
    );
  }
}

export default ProfileClass;
