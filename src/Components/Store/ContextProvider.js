import { useState } from "react";
import candyContext from "./Context";

const ContextProvider = (props) => {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        setItems([...items, item]);
    }

    const addItemToCartHandler = (item) => {
        const index = cartItems.findIndex((i) => i.name === item.name);
        if (index === -1) {
            setCartItems((prevItems) => [...prevItems, { ...item }]);
        } else {
            const updatedItems = [...cartItems];
            updatedItems[index].quantity += item.quantity;
            setCartItems(updatedItems);
        }
    };

    const Context = {
        items: items,
        cartItems: cartItems,
        addItem: addItemHandler,
        addItemToCart: addItemToCartHandler
    };

    return (
        <candyContext.Provider value={Context}>
            {props.children}
        </candyContext.Provider>
    )
}

export default ContextProvider;