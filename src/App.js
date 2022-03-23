import React, { Component } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./components/Accounts";
import AddAccount from "./components/AddAccount";
import EditDelete from "./components/EditDelete";
import EditAccount from "./components/EditAccount";

class App extends Component {

    state = {
        accounts : [
            {id: 1, name: "Luka", lastname: "Mrkic", phone: "111-111", email: "luka@gmail.com"},
            {id: 2, name: "Lena", lastname: "Mrkic", phone: "222-222", email: "lena@gmail.com"}
        ]
    }
    
    addNewAccount = (acc) => {
        this.setState({
            accounts : [...this.state.accounts, acc]
        })
    }

    deleteAccount = (id) => {
        // console.log(id);
        const accountsCopy = [...this.state.accounts];
        const newCopyAccount = accountsCopy.filter(account => account.id !== id);
        this.setState({accounts : newCopyAccount})
    }

    editAccount = (acc) => {
        // console.log(acc);
        const copyAccounts = [...this.state.accounts];
        let accountPosition = copyAccounts.map( account => account.id).indexOf(acc.id);
        // console.log(accountPosition);
        copyAccounts[accountPosition] = acc;
        this.setState({ accounts : copyAccounts});
    }

    render(){
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navbar />}>
                            <Route index element={<Accounts accounts={this.state.accounts} />} />
                            <Route path="addAccount" element={<AddAccount addNewAccount={this.addNewAccount} />} />
                            <Route path="edit-delete" element={<EditDelete accounts={this.state.accounts} deleteAccount={this.deleteAccount} />} />
                            <Route path="edit/:id" element={<EditAccount accounts={this.state.accounts} editAccount={this.editAccount} />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App;