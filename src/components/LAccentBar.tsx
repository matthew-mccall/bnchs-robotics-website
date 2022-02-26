import React, { useContext } from 'react'

import theme from '../../data/neon.json'

export default function LAccentBar(props) {

    const styles = {
        borderLeft: `0.35rem solid ${theme.themePrimary}`
    }

    return (
        <div className="py-5" style={{ background: theme.neutralLighterAlt }}>
            <div className="container p-4" style={styles} >
                {props.children}
            </div>
        </div>
    )
}