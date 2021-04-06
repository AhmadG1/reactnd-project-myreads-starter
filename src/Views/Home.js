import React, { Component } from "react";
import Add from "../Components/Add";
import BookShelf from "../Components/BookShelf";
import { getAll } from "../BooksAPI";


class Home extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            title="Currently Reading"
            books={this.props.currentlyReading}
            moveBook={this.props.moveBook}
          />
          <BookShelf
            title="Want to Read"
            books={this.props.wantToRead}
            moveBook={this.props.moveBook}
          />
          <BookShelf
            title="Read"
            books={this.props.read}
            moveBook={this.props.moveBook}
          />
        </div>
        <Add />
      </div>
    );
  }
}

export default Home;
