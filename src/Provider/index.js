import React, { Component } from "react";
export const MyContext = React.createContext();

class index extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: (books) => {
        const currentlyReading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const read = books.filter((book) => book.shelf === "read");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        this.setState({ books, currentlyReading, read, wantToRead });
      },
      moveBook: (book, shelf, newShelf) => {
        console.log(newShelf);
        const newBooks = this.state.books.map((allBooks) => {
          const foundID = allShelf[newShelf].find(
            (bookID) => bookID === allBooks.id
          );
          if (foundID) {
            allBooks.shelf = newShelf;
          }
          return allBooks;
        });
        this.state.addBooks(newBooks);
      },
    };
  }
  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default index;
