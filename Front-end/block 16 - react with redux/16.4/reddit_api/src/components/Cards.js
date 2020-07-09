import React from 'react';
import '../App.css';

const Card = ({ data }) => {
  const { title, author_fullname, selftext } = data;
  return (
    <div className="container">
      <h2>{title}</h2>
      <h3>{author_fullname}</h3>
      <p>{selftext}</p>
    </div>
  );
};

export default Card;
