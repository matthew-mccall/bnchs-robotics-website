import React, { Component } from "react";

interface ParallaxProps {
    image: string
    color?: string
    flipped?: boolean
    children: JSX.Element[] | JSX.Element
}

export default function SideImage(props: ParallaxProps) {
    return (
        <div style={{ background: props.color }} className="container-fluid">
            <div className="row g-0">
                <div className="col">
                    {props.children}
                </div>
                <div className={`col-md min-vh-100 p-3 p-md-5 ${props.flipped && 'order-first'} `}>
                    <div className='h-100 shadow' style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url('${props.image}')`,
                        borderRadius: '3em',
                    }}>
                    </div>
                </div>
            </div>
        </div>
    )

}