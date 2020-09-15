import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Logo() {

    return (
        <>
            <Link to="/">
                <label className="navbar-brand">Ecomerce</label>

            </Link>
            <button
                className="navbar-toggler"
                type="button"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    )
}