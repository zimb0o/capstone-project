import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
