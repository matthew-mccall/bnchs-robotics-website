import React from "react";
import VCenter from "./VCenter";
import theme from '../../data/neon.json'

export default function Spinner(props) {

    const style = {
        background: theme.white,
        color: theme.black
    }

    return (
        <div style={style} className="mx-auto vh-100">
            <VCenter>
                <div className="spinner-border mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </VCenter>
        </div>
    )
}