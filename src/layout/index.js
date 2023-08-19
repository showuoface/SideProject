import React from 'react';
import Header from "../component/header/header";
import Footer from "../component/footer/footer";

export default function App({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}