import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const Competitions = React.lazy(() => import('./pages/Competitions'));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Team = React.lazy(() => import("./pages/Team"));

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '../public/css/font.css'
import '../public/css/backdrop.css'
import Spinner from "./components/Spinner";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/competitions" element={
                <React.Suspense fallback={<Spinner />}>
                    <Competitions />
                </React.Suspense>
            } />
            <Route path="/team" element={
                <React.Suspense fallback={<Spinner />}>
                    <Team />
                </React.Suspense>
            } />
            <Route path="/" element={
                <React.Suspense fallback={<Spinner />}>
                    <Home />
                </React.Suspense>
            } />
            <Route path="*" element={
                <React.Suspense fallback={<Spinner />}>
                    <NotFound />
                </React.Suspense>
            } />
        </Routes>
    </Router>, document.getElementById("root"));