import { useContext, useState } from 'react';
import Button from '../UI/Button';
import styles from './Header.module.css';
import NewItem from './NewItem';
import { createPortal } from 'react-dom';
import AccountHandlerContext from '../providers/AccountHandlerContext';
import MyAccountItems from './MyAccountItems';
import Card from '../UI/Card';

const Header = () => {
    const portalElement = document.getElementById('portal-root');
    const [display, setDisplay] = useState('none');
    const [addNewItem, setAddNewItem] = useState(false);
    const [myItems, setMyItems] = useState(false);
    const account = useContext(AccountHandlerContext);
    const addNewItemHandler = () => {
        setAddNewItem(true);
    };
    const submitNewItemHandler = () => {
        setAddNewItem(false);
    };
    const displayHandler = () => {
        setDisplay('block');
    };
    const logOutHandler = () => {
        account.logOutUsers();
    };
    return (
        <>
            <div className={styles.header}>
                <h1>Market Place to buy items</h1>
                <Button onClick={addNewItemHandler}>Add New Item</Button>
                <div className={styles.dropdown}>
                    <Button onClick={displayHandler}>My Account</Button>
                    <div
                        id="myDropdown"
                        style={{ display }}
                        className={styles['dropdown-content']}
                    >
                        <div onClick={() => setMyItems(true)}>My Items</div>
                        <div onClick={logOutHandler}>Logout</div>
                    </div>
                </div>
            </div>
            {addNewItem &&
                createPortal(
                    <Card>
                        <NewItem onClick={submitNewItemHandler} />
                    </Card>,
                    portalElement
                )}
            {myItems && <MyAccountItems />}
        </>
    );
};

export default Header;
