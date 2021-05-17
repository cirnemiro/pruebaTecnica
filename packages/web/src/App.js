import React from 'react';
import { useSelector } from 'react-redux';
import useOnAuthStateChanged from './custom-hooks/onAuthStateChanged';

function App() {
    const auth = useSelector(store => store.auth);
    useOnAuthStateChanged();

    return (
        <>
            {/* {auth.isAuthenticated && (
                <>
                    <Header />
                    <SongModal />
                </>
            )} */}
            <main className="main">
                Main content
            </main>
        </>
    );
}

export default App;

// {auth.isAuthenticated && <SideNav className="main__sideNav" />}