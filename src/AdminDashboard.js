// AdminDashboard.js
import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editBook, setEditBook] = useState(null); // Track the currently edited book
  const [editAuthor, setEditAuthor] = useState(null); // Track the currently edited author

  const handleBookSubmit = (values) => {
    if (editBook) {
      // Update the existing book
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === editBook.id ? { ...book, ...values } : book
        )
      );
      setEditBook(null); // Reset edit state after submission
    } else {
      // Handle book submission logic, update the books state, etc.
      const newBook = { ...values, id: Date.now() };
      setBooks((prevBooks) => [...prevBooks, newBook]);
    }
  };

  const handleAuthorSubmit = (values) => {
    if (editAuthor) {
      // Update the existing author
      setAuthors((prevAuthors) =>
        prevAuthors.map((author) =>
          author.id === editAuthor.id ? { ...author, ...values } : author
        )
      );
      setEditAuthor(null); // Reset edit state after submission
    } else {
      // Handle author submission logic, update the authors state, etc.
      const newAuthor = { ...values, id: Date.now() };
      setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
    }
  };

  const handleBookDelete = (bookId) => {
    // Handle book deletion logic, update the books state, etc.
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const handleAuthorDelete = (authorId) => {
    // Handle author deletion logic, update the authors state, etc.
    setAuthors((prevAuthors) =>
      prevAuthors.filter((author) => author.id !== authorId)
    );
  };

  const handleBookEdit = (book) => {
    // Set the book to be edited and populate the form with its values
    setEditBook(book);
  };

  const handleAuthorEdit = (author) => {
    // Set the author to be edited and populate the form with its values
    setEditAuthor(author);
  };

  return (
    <div>
      <h2>Book Management</h2>
      <BookForm onSubmit={handleBookSubmit} initialValues={editBook || {}} />
      <BookList books={books} onDelete={handleBookDelete} onEdit={handleBookEdit} />

      <h2>Author Management</h2>
      <AuthorForm onSubmit={handleAuthorSubmit} initialValues={editAuthor || {}} />
      <AuthorList authors={authors} onDelete={handleAuthorDelete} onEdit={handleAuthorEdit} />
    </div>
  );
};

export default AdminDashboard;
