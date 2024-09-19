import { createContext } from 'react';

const AccountHandlerContext = createContext({
    users: [],
    current_user: {},
    c_user_username: '',
    isUserLoggedIn: false,
    addNewUsers: () => {},
    linkItemsToAccount: () => {},
    checkForExistingAccount: () => {},
    logOutUsers: () => {}
});

export default AccountHandlerContext;
