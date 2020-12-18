import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Books from "./Books";
import Navbar from "./Navbar";
import axios from 'axios';
import './app.css';
import 'bulma/css/bulma.css';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
// import stylesheet
//MAKE SURE TO INSTALL USING npm install bulma

// this component will handle all elements in the users array
class BooksList extends Component {
    constructor(props) {
        super(props);
        // store the users array in the state
        this.state = { books: [] };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.updateBooks = this.updateBooks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // fetch all user data from the server when the component mounts
    componentDidMount() {
        this.updateBooks();
    }

    //
    updateBooks() {
        // get the users API using axios GET request to the server
        axios.get('api/books')
            .then(response => {
                //store the response in the state
                this.setState({ books: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDelete(booksId) {
        // make a DELETE request to the server which will handle the removal of the user with the specific userId
        axios
            .delete('api/books', {
                data: {
                    id: booksId
                }
            })
            .then(response => {
                //if the deletion was successful then re-render the list of users
                this.updateBooks();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a Book component for each user object
        const booksList = this.state.books.map(u => (
            //map through each element in the array and set to the value received from the server
            <Books
                key={u._id}
                id={u._id}
                title={u.title}
                first={u.first}
                lastName={u.lastName}
                image={u.picture}
                quote={u.quote}
                //you must include the handleDelete method to use in child components
                handleDelete={this.handleDelete}
            />
        ));

        //return the list of users
        return (
            <div className="is-fluid">
                {/*Navigation bar*/}

                {/*
                <nav className="navbar">
                    <h1 className="navbar-item title is-1 has-text-primary">List of Books</h1>
                    {/*when this button is pressed, CreateBook component will be rendered by using React Router*/}
                {/* <Link to={'/create-book'} className="navbar-item navbar-end">
                        <button className="button is-warning" type="button">Create new Book</button>
                    </Link>
                </nav>
                */}
                {/* Nouvelle Nav*/}
                <Navbar/>



                <hr />
                {/*USER LIST*/}
                <div>
                    <div className="columns is-multiline">
                        {booksList}
                    </div>
                </div>
                {/*FOOTER*/}

                <footer className="footer has-background-primary">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Random Book API</strong>. Styled with
                            <a href="https://bulma.io/">Bulma</a>.
                        </p>
                    </div>
                </footer>
            </div>

        );
    }
}

export default BooksList;
