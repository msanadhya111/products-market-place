import { useContext } from 'react';
import MarketPlace from './MarketPlace';
import styles from './Market.module.css';
import Header from './Header';
import NewItemContext from '../providers/NewItemContext';
import AccountHandlerContext from '../providers/AccountHandlerContext';

const Market = () => {
    const newItemContext = useContext(NewItemContext);
    const account = useContext(AccountHandlerContext);
    const availableItems = newItemContext.items;
    const isUserLoggedIn = account.isUserLoggedIn;
    return (
        <>
            {isUserLoggedIn && <Header />}

            {isUserLoggedIn && (
                <div className={styles.items}>
                    {availableItems.length > 0 &&
                        availableItems.map((item) => {
                            return (
                                <MarketPlace
                                    name={item.name}
                                    price={item.price}
                                    brand={item.brand}
                                ></MarketPlace>
                            );
                        })}
                    {availableItems.length === 0 && (
                        <p className={styles['no-items']}>
                            There are no items in the market Place
                        </p>
                    )}
                </div>
            )}
        </>
    );
};

export default Market;
