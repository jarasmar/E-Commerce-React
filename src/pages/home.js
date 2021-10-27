import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home">
      <span className="title">El Campo de Olmo</span>
      <Link to="/products" className="button home-btn">
        Organic Farm
      </Link>
    </div>
  );
}

export default Home;
