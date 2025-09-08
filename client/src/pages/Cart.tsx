// =============================
// Cart.tsx
// -----------------------------
// This file defines the Cart page for users to view and manage their shopping cart.
//
// How it works:
// - Uses React functional component syntax.
// - Receives cart items and update/delete functions as props.
// - Calculates subtotal, tax, and total for the cart.
// - Lets users change item quantity or delete items.
// - Uses Tailwind CSS for layout, colors, and spacing.
// - Shows the site footer at the bottom.
//
// How to update:
// - To change the cart logic, update the calculation or button handlers.
// - To change colors, spacing, or layout, update the className values (these use Tailwind CSS).
// - To debug, use your browser's developer tools to inspect the cart and see how each part is rendered.
//
// If you see an error:
// - Make sure all imported components exist and are spelled correctly.
// - Check that the file paths in import statements match the actual file names (case-sensitive).
// - If cart actions don't work, check the props and handlers for typos.
//
// Anyone can update this file by following the comments and examples below. No coding experience required—just follow the instructions in the comments.
// =============================
// Import React and Footer for the cart page.
import React from "react";
import Footer from "../sections/Footer";

// CartItemType describes each item in the cart.
export type CartItemType = { name: string; color: string; price: string; quantity: number };
// CartProps are the inputs for the Cart component.
export type CartProps = {
  cart: CartItemType[];
  onUpdateQuantity: (idx: number, quantity: number) => void;
  onDelete: (idx: number) => void;
};

// The Cart component displays the shopping cart and summary.
const Cart: React.FC<CartProps> = ({ cart, onUpdateQuantity, onDelete }) => {
  // Calculate totals for each item and the whole cart.
  const itemTotals = cart.map(item => parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity);
  const subtotal = itemTotals.reduce((sum, t) => sum + t, 0);
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + tax;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-8">
        {/* Left: Cart Items. Shows all items in the cart. */}
        <div className="flex-1 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is currently empty.</p>
          ) : (
            <ul className="text-left divide-y">
              {cart.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between py-4">
                  <div>
                    {/* Item name, color, price, and total. */}
                    <span className="font-semibold">{item.name}</span>
                    {item.color && <span className="ml-2 text-sm text-gray-500">({item.color})</span>}
                    <span className="block text-[#20B2AA] font-bold">{item.price}</span>
                    <span className="block text-sm text-gray-700">Total: ${(parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Quantity controls and delete button. */}
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                    >+</button>
                    <button
                      className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                      onClick={() => onDelete(idx)}
                    >Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Right: Summary. Shows subtotal, tax, and total. */}
        <div className="w-full md:w-96 bg-white rounded-xl shadow p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax (7%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {/* Payment button. Update text or style as needed. */}
          <button className="w-full mt-6 bg-[#20B2AA] hover:bg-[#159C97] text-white font-bold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:ring-offset-2 transition">Proceed to Payment</button>
        </div>
      </main>
      {/* Footer at the bottom of the page. */}
      <Footer />
    </div>
  );
};

export default Cart;
