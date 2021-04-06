import React, { Component } from "react";
import { Link } from "react-router-dom";

class Add extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to={"/search"}>Add a Book</Link>
      </div>
    );
  }
}

export default Add;
