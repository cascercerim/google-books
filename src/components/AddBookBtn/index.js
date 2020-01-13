import React from "react";
import Button from "../Button";
import axios from "axios";
// import API from "../../utils/API.js";
import 'bootstrap/dist/css/bootstrap.min.css';


class AddBookBtn extends React.Component{
 
    postToDB = (book) => {
      // console.log(book);
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
    // API.saveBook(dbBook);

        axios.post("/api/books", dbBook)
        .then( () => console.success(`You added ${book.title} to your bookshelf`))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="secondary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save Book
        </Button>
        </div>
        );
    }
  }

  export default AddBookBtn;