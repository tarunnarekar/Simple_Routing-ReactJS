import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <NavLink exact to="/"> Home </NavLink>  |
            <NavLink exact to="/signup"> Signup </NavLink> |
            <NavLink exact to="/login"> Login </NavLink> |
            <NavLink exact to="/info"> Info </NavLink> |
            <NavLink exact to="/about"> About </NavLink>  |
            <NavLink exact to="/contact"> Contact </NavLink> |
            <NavLink exact to="/demo"> Demo </NavLink> |
            <NavLink exact to="/user"> User </NavLink> |
            <NavLink exact to="/Details"> Details </NavLink> |
            <NavLink exact to="/help"> Help </NavLink> |
        </>
    );
}
export default Menu;