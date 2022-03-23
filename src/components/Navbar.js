import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="navbar-brand t m-1">Accounts App</a>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <NavLink to="/" className="m-1">Accounts</NavLink>
                    <NavLink to="/addAccount" className="m-1">Add Account</NavLink>
                    <NavLink to="/edit-delete" className="m-1">Edit/Delete</NavLink>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar;

