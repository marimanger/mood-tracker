import "../zenQuote/zenquote.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ZenQuote() {
  const [quote, setQuote] = useState({
    author: "",
    text: "",
  });

  const GET_QUOTES = `https://type.fit/api/quotes`;
  const getQuote = async () => {
    try {
      const response = await axios.get(GET_QUOTES);
      console.log("Quotes data", response.data);
      getOnequoteRandom(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  function getOnequoteRandom(data) {
    const randomQuote = Math.floor(Math.random() * data.length);
    console.info(`Random quote is ${JSON.stringify(data[randomQuote])}`);
    setQuote({
      author: data[randomQuote].author,
      text: data[randomQuote].text,
    });
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote__wrapper">
      <section className="quote__section">
        <h2 className="quote__header">Inspiratonal quote for you:</h2>
        <div className="quote__wrapper">
          <p className="quote__text">"{quote.text}"</p>
          <p className="quote__author">{quote.author}</p>
        </div>
      </section>
    </div>
  );
}

export default ZenQuote;
