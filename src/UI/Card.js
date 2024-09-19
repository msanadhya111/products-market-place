import style from './Card.module.css';

const Card = (props) => {
    return <div className={style.modal}>{props.children}</div>;
};

export default Card;
