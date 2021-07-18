import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  ADD_TO_CART,
} from "../Actions/actions";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialStore, action) {
  // let cart = state.cart;
  switch (action.type) {
    case ADD_TO_CART:
      let addCart = {
        meal_id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        img: action.payload.img,
      };
      return {
        ...state,
        cart: [addCart, ...state.cart],
        total: state.total + action.payload.price,
      };
    // case ADD_TO_CART:
    //   return { ...state, cart: [...state.cart, action.payload.item] };
    // default:
    //   return state;
  }
  // clear cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  // decrease amount
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  // increase amount
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  // remove item
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  // if (action.type === ADD_TO_CART) {
  // const addToCart = (product) => {
  //   const { id, image, name, price } = product;
  //   const item = [...addToCart].find((item) => item.id === id);
  //   if (item) {
  //     INCREASE(id);
  //     return;
  //   } else {
  //     const newItem = { id, image, name, price, amount: 1 };
  //     const newCart = [...state, newItem];
  //   }
  // };
  //   return [...state, action.payload];
  // }

  // get total
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  // toggle amount
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      }),
    };
  }
  return state;
}

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
