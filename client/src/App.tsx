// =============================
// App.tsx
// -----------------------------
// This is the main entry point for the ShoeStyle site.
// It sets up routing, navigation, and manages the shopping cart state.
//
// How it works:
// - Uses React functional component syntax.
// - Uses React Router for navigation between pages (Home, Products, Contact, Cart, SignIn, SignUp).
// - Manages cart state with useState, allowing items to be added, updated, or deleted.
// - Passes props to routed components using wrapper functions.
// - Displays the NavBar at the top of every page, showing the cart count.
//
// How to update:
// - To add a new page, import it and add a <Route> in the <Routes> section.
// - To change navigation, update the NavBar or the <Routes>.
// - To change cart logic, update the addToCart, updateCartQuantity, or deleteCartItem functions.
// - To debug, use your browser's developer tools and React DevTools to inspect state and props.
//
// If you see an error:
// - Make sure all imported components exist and are spelled correctly.
// - Check that react-router-dom is installed and set up in your project.
// - If cart actions don't work, check the state management functions for typos.
//
// Anyone can update this file by following the comments and examples below. No coding experience required—just follow the instructions in the comments.
// =============================


// Import React and needed components for routing and navigation.
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import type { CartItemType } from "./pages/Cart";
import type { ProductsProps } from "./pages/Products";
import type { CartProps } from "./pages/Cart";
import NavBar from "./sections/NavBar";




// The App component sets up routing and manages cart state.
const App: React.FC = () => {
  // cart holds all items in the shopping cart.
  const [cart, setCart] = useState<CartItemType[]>([]);
  // confirmation shows a message when an item is added to the cart.
  const [confirmation, setConfirmation] = useState("");

  // addToCart adds a new item to the cart or increases quantity if it already exists.
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

  // updateCartQuantity changes the quantity of a cart item.
  function updateCartQuantity(idx: number, quantity: number) {
    setCart((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, quantity } : item))
    );
  }

  // deleteCartItem removes an item from the cart.
  function deleteCartItem(idx: number) {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  }

  // The Router wraps all pages and enables navigation.
  // NavBar is always shown at the top, with the cart count.
  // Routes define which component to show for each URL path.
  return (
    <Router>
      <NavBar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* Products page route, passes cart and addToCart as props */}
        <Route path="/products" element={<ProductsWrapper addToCart={addToCart} cart={cart} confirmation={confirmation} />} />
        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} />
        {/* Cart page route, passes cart and update/delete functions as props */}
        <Route path="/cart" element={<CartWrapper cart={cart} onUpdateQuantity={updateCartQuantity} onDelete={deleteCartItem} />} />
        {/* SignIn and SignUp routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

// Wrappers to pass props to routed components
// These functions let you pass extra props to pages shown by <Route>.
const ProductsWrapper = (props: ProductsProps) => <Products {...props} />;
const CartWrapper = (props: CartProps) => <Cart {...props} />;

export default App;
