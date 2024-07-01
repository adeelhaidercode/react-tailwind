import React, { useContext, useEffect } from 'react';
import ContactHeader from './ContactHeader';
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div id="layout">
            <div className="navbar">
                <ContactHeader />
                <Navbar />
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
