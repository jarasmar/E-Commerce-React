import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "./logo";
import Links from "./links";

function Nav(props) {
  return (
    <div className="nav">
      <Logo />
      <Links />
    </div>
  );
}

export default withRouter(Nav);
