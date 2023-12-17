// AuthorList.js
import React from 'react';

const AuthorList = ({ authors, onDelete }) => {
  return (
    <div>
      <h3>Author List</h3>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name} (Birth Date: {author.birthDate})
            <button onClick={() => onDelete(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
