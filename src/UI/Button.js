import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button
            disabled={props.disabled | false}
            onClick={props.onClick}
            type={props.type | 'button'}
            className={`${styles.button} ${props.className} `}
        >
            {props.children}
        </button>
    );
};

export default Button;
