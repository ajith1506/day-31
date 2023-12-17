// BookList.js
import React from 'react';

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - ISBN: {book.isbn}
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
