import { createContext, useContext, useState } from "react";

export const CardContext = createContext();

export const useCard = () => {
    return useContext(CardContext)
}

const CardProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item])
    }

    const totalPrice = () => {
        return items.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    }

    
    const itemsInCart = items.reduce((groupedProductsInCart, product) => {
    const id = product.id;
    if (groupedProductsInCart[id] == null) groupedProductsInCart[id] = [];
    groupedProductsInCart[id].push(product);
    return groupedProductsInCart;
  }, []);

  console.log("itemsInCart", itemsInCart)



    return (
        <CardContext.Provider value={{ items, itemsInCart, addItem, totalPrice }}>
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider;


