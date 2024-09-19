import styles from './NewItem.module.css';
import Button from '../UI/Button';
import NewItemContext from '../providers/NewItemContext';
import { useContext, useState } from 'react';

const NewItem = (props) => {
    const newItemContext = useContext(NewItemContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const nameHandler = (event) => {
        setName(event.target.value);
    };
    const brandHandler = (event) => {
        setBrand(event.target.value);
    };
    const priceHandler = (event) => {
        setPrice(event.target.value);
    };
    const handleFormData = (e) => {
        e.preventDefault();
        const item = {
            name: e.target[0].value,
            price: e.target[1].value,
            brand: e.target[2].value
        };
        newItemContext.updateNewItem(item);
        props.onClick();
    };
    return (
        <>
            <form onSubmit={handleFormData} className={styles.modalContent}>
                <h2>Enter New Item</h2>
                <label className={styles.label} htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    className={styles.input}
                    type="text"
                    onInput={nameHandler}
                ></input>
                <br />
                <label className={styles.label} htmlFor="price">
                    Price:
                </label>
                <input
                    id="price"
                    className={styles.input}
                    type="text"
                    onInput={priceHandler}
                ></input>
                <br />
                <label className={styles.label} htmlFor="brand">
                    Brand:
                </label>
                <input
                    id="brand"
                    className={styles.input}
                    type="text"
                    onInput={brandHandler}
                ></input>
                <br />
                <Button
                    disabled={!name.length || !brand.length || !price.length}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </>
    );
};

export default NewItem;

/*
In label we use htmlFor which is same like for in HTML as JSX is javascrit only and html and for is a reserved keyword
in javascript. It is used to link label and input element by using id in input, when even lick on label input get's triggered
and in accessibility also input element get's called with label
*/
