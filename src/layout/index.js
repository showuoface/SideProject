import React from 'react';
import Header from "../component/header/header";
import Footer from "../component/footer/footer";

export default function App({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}