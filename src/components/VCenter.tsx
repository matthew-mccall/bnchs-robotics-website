import React from 'react'

interface VCenterProps {
    fullscreen?: boolean
    children: JSX.Element[] | JSX.Element
}

export default function VCenter(props: VCenterProps) {
    return (
        <div className={`row ${props.fullscreen ? 'min-vh-100' : 'h-100'}`}>
            <div className="col my-auto">
                {props.children}
            </div>
        </div>
    )
}