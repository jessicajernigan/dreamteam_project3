// import { ADD_TO_CART } from "../types";
// import { GET_CART_NUMBER } from "../types";
a
// import { useReducer } from 'react';

import {
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    // TOGGLE_CART
  } from './actions';

const initialState = {
    songs: [],
    cart: [],
    cartOpen: false
}

const reducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_TO_CART:
    return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.songs]
    };
    case ADD_MULTIPLE_TO_CART:
    return {
        ...state,
        cart: [...state.cart, ...action.songs],
    };
    case REMOVE_FROM_CART:
        let newState = state.cart.filter(song => {
            return song._id !== action._id;
        });

        return {
            ...state,
            cartOpen: newState.length > 0,
            cart: newState
        };
    case CLEAR_CART:
    return {
        ...state,
        cartOpen: false,
        cart: []
    };
    // case TOGGLE_CART:
    // return {
    //     ...state,
    //     cartOpen: !state.cartOpen
    // };

    default:
    return state;
}
};

// export function useProductReducer(initialState) {
//     return useReducer(reducer, initialState);
//   }

export default reducer; 














// const initialState = {
//     songs: [],
//     cart: [],
//     cartNumber: 0,
//     cartCost: 0,
//     number: 0
    // songs: {
    //     songOne : {
    //         name: "Test Song One",
    //         price: 0.99,
    //         count: 0,
    //         inCart: false
    //     },
    //     songTwo : {
    //         name: "Test Song Two",
    //         price: 0.99,
    //         count: 0,
    //         inCart: false
    //     }
    // }
// }

// const cartReducer =  (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_TO_CART:
//             return {
//                 ...state,
//                 cartOpen: true,
//                 cart: [...state.cart, action.songs]
//             };
//         case GET_CART_NUMBER:
//             return {
//                 ...state
//             }
//         default: 
//             return state;
//     }
// }

// export default cartReducer;

// case ADD_TO_CART:
//     return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product]
//     };

// import { useReducer } from 'react';

// import {
//     UPDATE_PRODUCTS,
//     UPDATE_CATEGORIES,
//     UPDATE_CURRENT_CATEGORY,
//     ADD_TO_CART,
//     ADD_MULTIPLE_TO_CART,
//     REMOVE_FROM_CART,
//     UPDATE_CART_QUANTITY,
//     CLEAR_CART,
//     TOGGLE_CART
//   } from './actions';

// const initialState = {
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
// }

// const reducer = (state = initialState, action) => {
// switch (action.type) {
//     // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
//     case UPDATE_PRODUCTS:
//     return {
//         ...state,
//         products: [...action.products]
//     };
//     // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
//     case UPDATE_CATEGORIES:
//     return {
//         ...state,
//         categories: [...action.categories]
//     };
//     case UPDATE_CURRENT_CATEGORY:
//     return {
//         ...state,
//         currentCategory: action.currentCategory
//     };
//     case ADD_TO_CART:
//     return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product]
//     };
//     case ADD_MULTIPLE_TO_CART:
//     return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//     };
//     case REMOVE_FROM_CART:
//         let newState = state.cart.filter(product => {
//             return product._id !== action._id;
//         });

//         return {
//             ...state,
//             cartOpen: newState.length > 0,
//             cart: newState
//         };
//     case UPDATE_CART_QUANTITY:
//     return {
//         ...state,
//         cartOpen: true,
//         cart: state.cart.map(product => {
//         if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity;
//         }
//         return product;
//         })
//     };
//     case CLEAR_CART:
//     return {
//         ...state,
//         cartOpen: false,
//         cart: []
//     };
//     case TOGGLE_CART:
//     return {
//         ...state,
//         cartOpen: !state.cartOpen
//     };

//     default:
//     return state;
// }
// };

// export default reducer; 