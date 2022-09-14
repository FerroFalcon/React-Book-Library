import React from "react";
import { Link } from "react-router-dom";

import Booklist from "../../components/booklist/BookList";

function Home() {
  return (
    <div className="home">
      <Link to="/register">Add Book</Link>
      <div className="main_wrapper">
        <Booklist />
      </div>
    </div>
  );
}

export default Home;
