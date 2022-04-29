import React from "react";
import "./layout.css";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
