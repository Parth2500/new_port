import React from 'react'

import { BTT, Footer, Header } from './';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <BTT/>
            <Footer/>
        </>
    )
}

export default Layout;
