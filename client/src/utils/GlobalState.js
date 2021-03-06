import React, { createContext, useReducer, useContext } from "react";


const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    console.log(`reducer state`, state);
    console.log(`reducer state`, action);

    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: [...action.products]
            }
        case "SET_CURRENT_PRODUCT":
            return {
                ...state,
                currentProduct: action.product
            }
        case "ADD_TO_CART":
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.product]
            }
        case "ADD_TO_WISH":
            return {
                ...state,
                wishList: [...state.wishList, action.product]
            }
        case "UPDATE_CART":
            return {
                ...state,
                shoppingCart: action.updatedCart
            }
        case "GET_BLOGS":
            return {
                ...state,
                blogPosts: action.blogs
            }
        case "SET_USER":
            return {
                ...state,
                currentUser: action.user
            }
        case "GET_CART":
            return {
                ...state,
                shoppingCart: action.dbCart
            }
        case "GET_WISH":
            return {
                ...state,
                wishList: action.dbWish
            }
        case "UPDATE_WISH":
            return {
                ...state,
                wishList: action.updatedList
            }

    }
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        currentProduct: {
            _id: 0,
            Item: "",
            Price: 0
        },
        shoppingCart: [],
        wishList: [],
        blogPosts: [],
        currentUser: {
            id: "",
            email: "",
            transactions: [],
            shoppingCart: []
        },
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
