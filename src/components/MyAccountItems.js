import { useContext } from 'react';
import AccountHandlerContext from '../providers/AccountHandlerContext';
import style from './MyAccountItems.module.css';

const MyAccountItems = () => {
    const account = useContext(AccountHandlerContext);
    const c_user = account.current_user;
    const c_user_username = account.c_user_username;
    const items = c_user[c_user_username].items;
    return (
        <div className={style.modal}>
            {items.map((item) => {
                return <div className={style.content}>{item}</div>;
            })}
        </div>
    );
};

export default MyAccountItems;
