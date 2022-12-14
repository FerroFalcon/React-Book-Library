import React from "react";
import { Link } from "react-router-dom";

import Booklist from "../../components/booklist/BookList";
import "./Home.css";

// This is the homepage of the website
function Home() {
  return (
    <div>
      <div className="nav_wrapper">
        <div className="brand_logo">
          <Link to="/" className="logo_link">
            BookBytes
          </Link>
        </div>
        <Link to="/register">
          <div className="add_button">
            <svg
              stroke="currentColor"
              fill="#000000"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 2a.5.5 0 00-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 011 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 014.5 1h4a.5.5 0 010 1h-4zm9-1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className="main_wrapper">
        <Booklist />
      </div>
    </div>
  );
}

export default Home;
