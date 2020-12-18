import {Link} from "react-router-dom";
import React, { Component } from 'react';
import './app.css';
import 'bulma/css/bulma.css';
import BooksList from "./BooksList";

class Navbar extends Component {
    render() {
        return(
            <navbar>
                <div className="navbar-brand">
                    <br/>
                    <h1 className="navbar-title">
                        The Home Of The Books
                    </h1>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to={'/create-books'} className="navbar-item navbar-end">
                                    <button className="button is-link" type="button">Create new user</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </navbar>

        )
    }
}

export default Navbar;
