import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import axios from "axios";
import './BookCard.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/books')
      .then(r => r.json())
      .then(books => {
        console.log(books)
        setBooks(books)
      })
  }, [])

  return (
    <div>
      <h1>Book List</h1>
      {books.map(book => (
        <div>
          <h4>{book.title}</h4>

          <h4>Author: {book.author}</h4>
          <p>Description: {book.description}</p>
          {book.reviews.map(review => (
            <>
              <p>Rating: {review.rating}</p>
              <p>Review: {review.comment}</p>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

// const Book = ({ book }) => (
//   <div>
//     <h2>
//       <Link to={`/books/${book.id}`}>{book.title}</Link>
//     </h2>
//     <p>By {book.author}</p>
//   </div>
// );

// const BookDetail = ({ match }) => {
//   const [book, setBook] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
      // axios
//       .get(`/api/books/${match.params.id}`)
//       .then(response => {
//         setBook(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [match.params.id]); 
  
//   const handleRatingChange = event => {
//     setRating(Number(event.target.value));
//   };

//   const handleCommentChange = event => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     axios
//       .post(`/api/books/${match.params.id}/comments`, {
//         rating,
//         comment
//       })
//       .then(response => {
//         setBook(response.data);
//         setRating(0);
//         setComment("");
//         setIsSubmitting(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setIsSubmitting(false);
//       });
//   };

//   if (!book) {
//     return null;
//   }
  
//   return (
//     <div>
//       <h1>{book.title}</h1>
//       <p>By {book.author}</p>
//       <h2>Ratings and Comments</h2>
//       <h3>Leave a Comment</h3>
//       <form onSubmit={handleSubmit}>

//       </form>
//     </div>
 export default BookList;

