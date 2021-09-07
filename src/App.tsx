import React from "react";
import "./App.css";
import Card from "./components/card/card";

const propsToCard = {
  name: "Facundo Masgrau",
  email: "facundomasgrau@gmail.com",
  telephone: "1136460000",
  address: "Algun lado 1234",
  onClick: () => false,
};

function App() {
  return (
    <div className="App">
      <Card {...propsToCard} />
      <Card {...propsToCard} />
      <Card {...propsToCard} /> <Card {...propsToCard} />
    </div>
  );
}

export default App;
