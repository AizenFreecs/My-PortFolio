import { useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export default App;
