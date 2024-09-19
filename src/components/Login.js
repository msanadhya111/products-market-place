import { useContext, useState } from 'react';
import styles from './Login.module.css';
import AccountHandlerContext from '../providers/AccountHandlerContext';
import SignUp from './SignUp';
import Market from './Market';

const Login = () => {
    const accountHandler = useContext(AccountHandlerContext);
    const [isUserLoggedInFailed, setIsUserLoggedInFailed] = useState(false);
    const [redirectToSignUp, setRedirectToSignUp] = useState(false);
    const isUserLoggedIn = accountHandler.isUserLoggedIn;
    const loginCredentialHandler = (event) => {
        event.preventDefault();
        const username = event.target[0].value;
        if (!accountHandler.checkForExistingAccount(username)) {
            setIsUserLoggedInFailed(true);
        }
    };
    return (
        <>
            {!isUserLoggedIn && !redirectToSignUp && (
                <form
                    onSubmit={loginCredentialHandler}
                    className={styles['login-page']}
                >
                    {isUserLoggedInFailed && (
                        <p className={styles.errorText}>
                            There is a issue in logging please enter correct
                            username and password
                        </p>
                    )}
                    <label>Enter your Username:</label>
                    <input type="text"></input>
                    <br />
                    <label>Enter your password:</label>
                    <input type="password"></input>
                    <br />
                    <button type="submit">Login</button>
                    <div className={styles['sign-up']}>
                        <p
                            className={styles['sign-up-text']}
                            onClick={() => setRedirectToSignUp(true)}
                        >
                            Sign Up
                        </p>

                        <p>Don't have an account</p>
                    </div>
                </form>
            )}
            {redirectToSignUp && <SignUp />}
            {isUserLoggedIn && <Market />}
        </>
    );
};

export default Login;
