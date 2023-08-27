"use client";

// CartContext.js
import React, { createContext, useContext, useEffect, useReducer } from "react";

// Create a new context for the cart
const CartContext = createContext();

// Define the initial state of the cart

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

// Create a reducer function to handle cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "LOAD_CART":
      return action.payload;
    case "ADD_TO_CART":
      console.log(action.payload.product);
      // Add a product to the cart
      const updatedProducts = [...state.products, action.payload.product];
      const updatedQuantity = state.quantity + 1;
      const updatedTotalPrice = state.totalPrice + action.payload.product.price;
      return {
        ...state,
        products: updatedProducts,
        quantity: updatedQuantity,
        totalPrice: updatedTotalPrice,
      };

    case "REMOVE_FROM_CART":
      // Remove a product from the cart by its ID
      const updatedProductList = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      const updatedQty = state.quantity - 1;
      const updatedTotal = state.totalPrice - action.payload.productPrice;
      return {
        ...state,
        products: updatedProductList,
        quantity: updatedQty,
        totalPrice: updatedTotal,
      };

    default:
      return state;
  }
}

// Create a CartProvider component to wrap your app with the CartContext
export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Load cart state from local storage when the component mounts
  useEffect(() => {
    const savedCartState = localStorage.getItem("cartState");
    if (savedCartState) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCartState) });
    }
  }, []);

  // Save cart state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(cartState));
  }, [cartState]);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to easily access the CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
