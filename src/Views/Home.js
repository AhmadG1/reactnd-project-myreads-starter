import React, { Component } from "react";
import Add from "../Components/Add";
import BookShelf from "../Components/BookShelf";

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf />
        </div>
        <Add />
      </div>
    );
  }
}

export default Home;