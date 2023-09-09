import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './MainPage.css'; // Import your custom CSS file

const MainPage = () => {
  const [quote, setQuotes] = useState({
    "_id": "e_gpcYFrlC7",
    "content": "Time is the most valuable thing a man can spend.",
    "author": "Theophrastus",
    "tags": ["Famous Quotes"],
    "authorSlug": "theophrastus",
    "length": 48,
    "dateAdded": "2020-07-10",
    "dateModified": "2023-04-14"
  });

  const changeQuote = () => {
    axios
      .get('https://api.quotable.io/quotes/random?maxLength=75')
      .then((response) => (setQuotes(response.data[0])))
      .catch((error) => (alert(error)));
  }

  useEffect(() => {
    changeQuote(); // Fetch a random quote when the component mounts
  }, []);

  return (
    <div className="main-container">
      <h2>{quote.content}</h2>
      <Button variant="contained" onClick={changeQuote} style={{padding:'30px', fontSize:'20px'}}>New Quote</Button>
    </div>
  )
}

export default MainPage;
