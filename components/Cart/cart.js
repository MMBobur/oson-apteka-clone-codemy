// import React from "react";
// import { AsyncStorage } from "react-native-asyncstorage";

// function getCartFromLocalStorage() {
//   return AsyncStorage.getItem("cart")
//     .then((storage) => {
//       console.warn(storage);
//     })
//     .catch((e) => console.warn(e));
//   // AsyncStorage.getItem("cart") ? JSON.parse(AsyncStorage.getItem("cart")) : [];
// }

// const CartContext = React.createContext();

// function CartProvider({ children }) {
//   const [cart, setCart] = React.useState(getCartFromLocalStorage);
//   const [total, setTotal] = React.useState(0);
//   const [cartItems, setCartItems] = React.useState(0);
//   const setData = (value) => {
//     // if value is an Object use this:
//     value = JSON.stringify(value);
//     AsyncStorage.setItem("cart", value, () => {
//       console.warn("Done!");
//     });
//   };
//   React.useEffect(() => {
//     // cart items
//     let newCartItems = cart.reduce((total, cartItem) => {
//       return (total += cartItem.amount);
//     }, 0);
//     setCartItems(newCartItems);

//     // cart total
//     let newTotal = cart.reduce((total, cartItem) => {
//       return (total += cartItem.amount * cartItem.price);
//     }, 0);
//     newTotal = parseFloat(newTotal.toFixed(2));
//     setTotal(newTotal);
//   }, [cart]);

//   // remove item
//   const removeItem = (id) => {
//     let newCart = [...cart].filter((item) => item.id !== id);
//     setCart(newCart);
//   };

//   // increase amount
//   const increaseAmount = (id) => {
//     const newCart = [...cart].map((item) => {
//       return item.id === id
//         ? { ...item, amount: item.amount + 1 }
//         : { ...item };
//     });
//     setCart(newCart);
//   };

//   // decrease amount
//   const decreaseAmount = (id, amount) => {
//     if (amount === 1) {
//       removeItem(id);
//       return;
//     } else {
//       const newCart = [...cart].map((item) => {
//         return item.id === id
//           ? { ...item, amount: item.amount - 1 }
//           : { ...item };
//       });
//       setCart(newCart);
//     }
//   };

//   //  add to cart
//   const addToCart = (product) => {
//     const {
//       id,
//       image: { url },
//       title,
//       price,
//     } = product;
//     const item = [...cart].find((item) => item.id === id);
//     if (item) {
//       increaseAmount(id);
//       return;
//     } else {
//       const newItem = { id, image: url, title, price, amount: 1 };
//       const newCart = [...cart, newItem];
//       setCart(newCart);
//     }
//   };

//   // clear cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         total,
//         cartItems,
//         removeItem,
//         increaseAmount,
//         decreaseAmount,
//         addToCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export { CartContext, CartProvider };
