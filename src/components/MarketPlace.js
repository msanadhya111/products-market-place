import { useContext } from 'react';
import styles from './MarketPlace.module.css';
import AccountHandlerContext from '../providers/AccountHandlerContext';
import NewItemContext from '../providers/NewItemContext';

const MarketPlace = (props) => {
    const account = useContext(AccountHandlerContext);
    const items = useContext(NewItemContext);
    const addItemsToAccountHandler = () => {
        account.linkItemsToAccount(props);
        items.updatingItemsAfterAddedToAccount(props.name);
    };
    return (
        <>
            <div className={styles['item-container']}>
                <div className={styles.item}>
                    <div className={styles.brand}>
                        {props.brand}({props.name})
                    </div>
                    <div className={styles['buy-button']}>
                        <button onClick={addItemsToAccountHandler}>Buy</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarketPlace;
