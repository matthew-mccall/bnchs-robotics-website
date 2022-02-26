import React from "react";
import theme from '../../data/neon.json'

interface DefaultStyleProps {
    children: JSX.Element[] | JSX.Element
}

export default function DefaultStyle(props: DefaultStyleProps) {
    return (
        <div style={{
            background: theme.white,
            color: theme.black
        }}>
            {props.children}
        </div>
    )
}