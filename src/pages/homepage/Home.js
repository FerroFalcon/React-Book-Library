import React from "react";
import { Link } from "react-router-dom";

import Booklist from "../../components/booklist/BookList";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Link to="/register">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="3em"
          width="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </Link>
      <div className="main_wrapper">
        <Booklist />
      </div>
    </div>
  );
}

export default Home;
