

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import type { CartItemType } from "./pages/Cart";
import type { ProductsProps } from "./pages/Products";
import type { CartProps } from "./pages/Cart";
import NavBar from "./sections/NavBar";




const App: React.FC = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [confirmation, setConfirmation] = useState("");

  function addToCart(itemName: string, color: string = "", price: string = "") {
    setCart((prev) => {
      const idx = prev.findIndex(
        (item) => item.name === itemName && item.color === color && item.price === price
      );
      if (idx !== -1) {
        // If item exists, increment quantity
        return prev.map((item, i) =>
          i === idx ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item
        return [...prev, { name: itemName, color, price, quantity: 1 }];
      }
    });
    setConfirmation(`${itemName}${color ? ` (${color})` : ""} added to cart!`);
    setTimeout(() => setConfirmation(""), 2000);
  }

  function updateCartQuantity(idx: number, quantity: number) {
    setCart((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, quantity } : item))
    );
  }

  function deleteCartItem(idx: number) {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <Router>
      <NavBar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsWrapper addToCart={addToCart} cart={cart} confirmation={confirmation} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartWrapper cart={cart} onUpdateQuantity={updateCartQuantity} onDelete={deleteCartItem} />} />
      </Routes>
    </Router>
  );
};

// Wrappers to pass props to routed components
const ProductsWrapper = (props: ProductsProps) => <Products {...props} />;
const CartWrapper = (props: CartProps) => <Cart {...props} />;

export default App;
