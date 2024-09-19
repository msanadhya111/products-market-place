import { useState } from 'react';
import AccountHandlerContext from './AccountHandlerContext';

const AccountHandlerProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [current_user, setCurrentUsers] = useState({});
    const [c_user_username, setC_User_Username] = useState('');

    const addNewUsers = (username, password) => {
        let c_user = {};
        c_user[username] = {};
        c_user[username]['username'] = username;
        c_user[username]['password'] = password;
        setCurrentUsers(c_user);
        setUsers((user) => [...user, current_user]);
        setIsUserLoggedIn(true);
        setC_User_Username(username);
    };

    const linkItemsToAccount = (item) => {
        current_user[c_user_username]['items'] = item;
    };

    const checkForExistingAccount = (username) => {
        for (const user of users) {
            if (user.username === username) {
                setCurrentUsers(user);
                setIsUserLoggedIn(true);
                return true;
            }
        }
        return false;
    };

    const logOutUsers = () => {
        setIsUserLoggedIn(false);
    };

    return (
        <AccountHandlerContext.Provider
            value={{
                users,
                current_user,
                isUserLoggedIn,
                c_user_username,
                addNewUsers,
                linkItemsToAccount,
                checkForExistingAccount,
                logOutUsers
            }}
        >
            {children}
        </AccountHandlerContext.Provider>
    );
};

export default AccountHandlerProvider;
