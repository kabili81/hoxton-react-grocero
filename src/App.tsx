import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.45,
      stock: 10,
      inCart: 2,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.15,
      stock: 2,
      inCart: 3,
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      stock: 1,
      inCart: 10,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.25,
      stock: 1,
      inCart: 5,
    },
  ]);

  function getItemImagePath(item) {
    let id = String(item.id).padStart(3, "0");
    return `assets/icons/${id}-${item.name}.svg`;
  }

  function getCartItems() {
    return store.filter((item) => item.inCart > 0);
  }

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          {store.map((item) => (
            <li>
              <div className=".store--item-icon">
                <img src={getItemImagePath(item)} />
              </div>
              <button>Add to cart {item.stock}</button>
            </li>
          ))}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {getCartItems().map((item) => (
              <li>
                <img
                  className="cart--item-icon"
                  src={getItemImagePath(item)}
                />
                <p>{item.name}</p>
                <button className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">{item.inCart}</span>
                <button className="quantity-btn add-btn center">+</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
