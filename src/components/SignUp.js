import { useContext } from 'react';
import styles from './SignUp.module.css';
import AccountHandlerContext from '../providers/AccountHandlerContext';

const SignUp = () => {
    const account = useContext(AccountHandlerContext);
    const handleUserSignUp = (event) => {
        event.preventDefault();
        account.addNewUsers(event.target[1].value, event.target[2].value);
    };
    const isUserLoggedIn = account.isUserLoggedIn;
    return (
        <>
            {!isUserLoggedIn && (
                <form onSubmit={handleUserSignUp} className={styles.account}>
                    <label htmlFor="name">Enter Your Name:</label>
                    <input id="name"></input>
                    <br />
                    <label htmlFor="uname">Enter Your User Name:</label>
                    <input id="uname"></input>
                    <br />
                    <label htmlFor="pword" type="password">
                        Enter Your Password:
                    </label>
                    <input id="pword"></input>
                    <br />
                    <button type="submit">Sign Up</button>
                </form>
            )}
        </>
    );
};

export default SignUp;
