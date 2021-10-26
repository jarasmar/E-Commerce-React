import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "./logo";
import Links from "./links";

function Footer() {
  return (
    <div className="footer">
      <Logo />
      <Links />
      <div className="footer-text">
        Privacy policy | Terms and conditions | ©Company 2021
      </div>
    </div>
  );
}

export default withRouter(Footer);
