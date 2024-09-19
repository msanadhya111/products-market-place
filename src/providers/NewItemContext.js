import { createContext } from 'react';

const items = [];

const NewItemContext = createContext({
    items,
    updateNewItem: () => {},
    updatingItemsAfterAddedToAccount: () => {}
});

export default NewItemContext;
