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
    };
  }
  render() {
    return (
      <MyContext.Source value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Source>
    );
  }
}

export default index;