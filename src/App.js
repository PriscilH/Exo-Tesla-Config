import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Footer from "./Components/Footer";

function App() {
  const [section1, setSection1] = useState(0);
  const [section2, setSection2] = useState(0);

  const calculateTotal = (section1, section2) => {
    let total = 0;
    if (section1 === 0) {
      total = total + 90700;
    } else {
      total = total + 106700;
    }
    if (section2 === 1) {
      total = total + 1000;
    }
    return total;
  };

  return (
    <div className="main-container">
      <h1>Tesla config</h1>
      <h2>Sélectionnez votre véhicule</h2>
      <Button
        text="Grande autonomie - "
        price="90 700 €"
        style={section1 === 0 ? "button-on" : "button-off"}
        func={() => {
          setSection1(0);
        }}
      ></Button>
      <Button
        text="Performance - "
        price="106 700 €"
        style={section1 === 1 ? "button-on" : "button-off"}
        func={() => {
          setSection1(1);
        }}
      ></Button>

      <h2>Sélectionnez la couleur</h2>
      <Button
        text="Blanc nacré multicouches - "
        price="0 €"
        style={section2 === 0 ? "button-on" : "button-off"}
        func={() => {
          setSection2(0);
        }}
      ></Button>
      <Button
        text="Noir uni - "
        price="1000 €"
        style={section2 === 1 ? "button-on" : "button-off"}
        func={() => {
          setSection2(1);
        }}
      ></Button>
      <div className="total">
        <span>{calculateTotal(section1, section2)} €</span>
        <button onClick={() => alert("Merci pour votre achat !")}>Buy !</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
