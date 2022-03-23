import React from "react";
import { NavLink } from "react-router-dom";

const Account = ({account, edit, deleteAccount}) => {

    const ActionBtns = edit ? (
        <>
            <td><button onClick={() => { deleteAccount(account.id) }} className="btn btn-danger">Delete</button></td>
            <td><NavLink to={"/edit/" + account.id} className="btn btn-warning">Edit</NavLink></td>
        </>
    ) : null;

    return (
        <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
            {ActionBtns}
        </tr>
    )
}

export default Account;