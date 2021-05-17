import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import useOnAuthStateChanged from './custom-hooks/onAuthStateChanged';
import MainRouter from './Router';

function App() {
    const auth = useSelector(store => store.auth);
    useOnAuthStateChanged();

    return (
        <>
            <Header />
            <main className="main">
                <MainRouter />
            </main>
            <Footer />
        </>
    );
}

export default App;

// {auth.isAuthenticated && <SideNav className="main__sideNav" />}