"use client";

import { useState } from "react";
import CartItem from "../../components/CartItem";

const menuItems = [
  { id: "1", name: "Bruschetta", price: 6 },
  { id: "2", name: "Caprese Salad", price: 8 },
  { id: "3", name: "Garlic Bread", price: 5 },
  { id: "4", name: "Margherita Pizza", price: 12 },
  { id: "5", name: "Spaghetti Carbonara", price: 14 },
  { id: "6", name: "Lasagna", price: 15 },
  { id: "7", name: "Tiramisu", price: 7 },
  { id: "8", name: "Gelato", price: 6 },
  { id: "9", name: "Panna Cotta", price: 7 },
  { id: "10", name: "Espresso", price: 3 },
  { id: "11", name: "Cappuccino", price: 4 },
  { id: "12", name: "Red Wine", price: 6 },
];

export default function OrderPage() {
  const [cart, setCart] = useState<any>([]);

  const [submitted, setSubmitted] = useState(false);

  const addToCart = (item: any) => {
    const existingItem = cart.find((cartItem: any) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item: any) => {
    setCart(
      cart.map((cartItem: any) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  };

  const decreaseQuantity = (item: any) => {
    setCart(
      cart.map((cartItem: any) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) }
          : cartItem,
      ),
    );
  };

  const removeFromCart = (item: any) => {
    setCart(cart.filter((cartItem: any) => cartItem.id !== item.id));
  };

  const submitOrder = () => {
    setSubmitted(true);
    setCart([]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Order Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg p-4"
          >
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-lg">€{item.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div>
        {cart.map((item: any) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <button
        onClick={submitOrder}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Submit Order
      </button>
      {submitted && <p className="text-green-500">Thank you for your order!</p>}
    </div>
  );
}
