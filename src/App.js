import Login from './components/Login';
import AccountHandlerProvider from './providers/AccountHandleProvider';
import NewItemProvider from './providers/NewItemProvider';

function App() {
    return (
        <>
            <NewItemProvider>
                <AccountHandlerProvider>
                    <Login />
                </AccountHandlerProvider>
            </NewItemProvider>
        </>
    );
}

export default App;
