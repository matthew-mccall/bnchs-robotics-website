import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import VCenter from './VCenter'
import theme from '../../data/neon.json'

export default function Navigation(props) {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const activeStyle = {
        color: theme.themePrimary,
        textShadow: `${theme.themePrimary} 1px 0 10px`
    }

    const navStyle = {
        color: theme.black
    }

    if (isNavOpen) {
        return (
            <div>
                <div className="vw-100 vh-100 backdrop" style={{ position: 'fixed', color: theme.black, overflowY: 'scroll' }} >
                    <div className="container h-100">
                        <VCenter>
                            <nav>
                                <div className="row py-5">
                                    <div className="col py-3">
                                        <h3 className="display-3">About</h3>
                                        <div className="fs-3">
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/">Home</NavLink>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/competitions">Competitions</NavLink>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/team">Our Team</NavLink>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/robots">Our Robots</NavLink>
                                        </div>
                                    </div>
                                    <div className="col py-3">
                                        <h3 className="display-3">Resources</h3>
                                        <div className="fs-3">
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/calender">Calendar</NavLink>
                                            <a style={navStyle} className="text-decoration-none d-block" href="https://flic.kr/ps/3b8mmU">Gallery</a>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/resources">Documents and Resources</NavLink>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/signin">Sign In</NavLink>
                                        </div>
                                    </div>
                                    <div className="col py-3">
                                        <h3 className="display-3">Community</h3>
                                        <div className="fs-3">
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="https://blog.team5599.com/">Social Media</NavLink>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/projects">Projects</NavLink>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/sponsors">Sponsors</NavLink>
                                            <NavLink style={({ isActive }) => isActive ? activeStyle : navStyle} onClick={() => window.scrollTo(0, 0)} className="text-decoration-none d-block" to="/contact">Contact Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </VCenter>
                    </div>
                </div>
                <div className="rounded-circle m-5 p-3" style={{ position: 'fixed', bottom: '0', right: '0', backgroundColor: 'red' }}>
                    <button className="btn btn-danger m-5" style={{ position: 'fixed', right: 0, bottom: 0 }} type="button" onClick={() => { setIsNavOpen(!isNavOpen) }}>
                        <i className="bi-x" style={{ fontSize: '2rem', margin: '0' }}></i>
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <button className="btn backdrop m-5" style={{ color: theme.black, position: 'fixed', right: 0, bottom: 0 }} type="button" onClick={() => { setIsNavOpen(!isNavOpen) }}>
                <i className="bi-list" style={{ fontSize: '2rem', margin: '0' }}></i>
            </button>
        )
    }
}