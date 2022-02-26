import React, { Component } from "react";

import '../../public/css/parallax.css'
import VCenter from "./VCenter";

interface ParallaxProps {
    image: string
    flipped?: boolean
    children: JSX.Element[] | JSX.Element
}

export default function Parallax(props: ParallaxProps) {
    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col">
                    <div className="vh-100">
                        {props.children}
                    </div>
                </div>
                <div className={`col d-none d-md-block ${props.flipped && 'order-first'} `}>
                    <div className='parallax min-vh-100' style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url('${props.image}')`,
                    }}>
                    </div>
                </div>
            </div>
        </div>
    )

}