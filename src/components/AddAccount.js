import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AddAccount extends Component {

    state = {
        newAccount : {
            id : "",
            name : "",
            lastname : "",
            phone : "",
            email : ""
        }
    }

    changeHendler = (event) => {
        let id = event.target.id;
        // console.log(id);
        let newAccountCopy = {...this.state.newAccount};
        newAccountCopy[id] = event.target.value;
        this.setState({
            newAccount : newAccountCopy
        })
    }

    addNewAccount = () => {
        this.props.addNewAccount(this.state.newAccount)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="dislay-4 m-4">Add Account</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" onChange={this.changeHendler} id="id" placeholder="id" className="form-control" /><br />
                                <input type="text" onChange={this.changeHendler} id="name" placeholder="name" className="form-control" /><br />
                                <input type="text" onChange={this.changeHendler} id="lastname" placeholder="last name" className="form-control" /><br />
                                <input type="text" onChange={this.changeHendler} id="phone" placeholder="phone" className="form-control" /><br />
                                <input type="email" onChange={this.changeHendler} id="email" placeholder="email" className="form-control" /><br />
                                <NavLink to={"/"} onClick={this.addNewAccount} className="btn btn-warning form-control">Edit</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAccount ;