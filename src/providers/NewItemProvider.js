import { useState } from 'react';
import NewItemContext from './NewItemContext';

const NewItemProvider = ({ children }) => {
    const initial_items = [
        {
            name: 'Fridge',
            price: '15k',
            brand: 'LG'
        },
        {
            name: 'Mobile',
            price: '12k',
            brand: 'Samsung'
        },
        {
            name: 'Laptop',
            price: '35k',
            brand: 'HP'
        }
    ];
    const [items, setItems] = useState(initial_items);
    const updateNewItem = (item) => {
        const newItem = {
            name: item.name,
            price: item.price,
            brand: item.brand
        };
        setItems((item) => {
            return [...item, newItem];
        });
    };
    const updatingItemsAfterAddedToAccount = (item_name) => {
        const data = items;
        const resultant_data = data.filter((item) => {
            if (item.name !== item_name) return item;
        });
        setItems(resultant_data);
    };
    return (
        <NewItemContext.Provider
            value={{
                items: items,
                updateNewItem: updateNewItem,
                updatingItemsAfterAddedToAccount:
                    updatingItemsAfterAddedToAccount
            }}
        >
            {children}
        </NewItemContext.Provider>
    );
};

export default NewItemProvider;
