import React from 'react'

import { BTT, Footer, Header } from './';

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
