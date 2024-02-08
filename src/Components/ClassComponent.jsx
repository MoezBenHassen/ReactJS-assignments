import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          val: "React",
      }
  }
  render() {
    return (
        <>
            <h1>Hello, PROPS {this.props.name}</h1>
            <p> this.state.val: {this.state.val} </p>
        </>
    );
  }
}