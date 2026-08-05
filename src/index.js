import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import spinaci from "./pizzas/spinaci.jpg";
import funghi from "./pizzas/funghi.jpg";
import salamino from "./pizzas/salamino.jpg";
import prosciutto from "./pizzas/prosciutto.jpg";
import focaccia from "./pizzas/focaccia.jpg";
import margherita from "./pizzas/margherita.jpg";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
    
      <Footer />
    </div>
  );
}






function Header() {
  return (
    <header className="header footer">
      <h1 className="header" >Fast React Pizza Co.</h1>
    </header>
  );
}






function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
     <div>
      {pizzaData.map((pizza) => (
        <Pizza
        key={pizza.name}
          img={pizza.photoName}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
        />
      ))}
     </div>
    </div>
  );
}

function Pizza({ img, name, ingredients, price }) {
  return (
    <div className="pizza">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="ingredients">
        <p>{ingredients}</p>
      <span>${price.toFixed(2)}</span>
      </div>

    </div>
  );
}








function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 4;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;

 
  return (
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()} - We are currently closed!</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
