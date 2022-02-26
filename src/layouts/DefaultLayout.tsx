import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation';

import theme from '../../data/neon.json'

interface DefaultLayoutProps {
    children: JSX.Element[] | JSX.Element
}

export default function DefaultLayout(props: DefaultLayoutProps) {

    return (
        <>
            <Navigation />
            <div className="vh-100 d-flex flex-column">
                <div style={{ background: theme.white, color: theme.black }} className="flex-grow-1">
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}