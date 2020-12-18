import React from 'react';
import 'bulma/css/bulma.css'
import ReactDOM from 'react-dom';
//import the Link component to use for linking prop information
import { Link } from 'react-router-dom';

// define one single user card component
class Books extends React.Component {
    render() {
        return (
            <div className="column is-2" style={{ padding: "20px" }}>
                <div className="card" style={{ borderRadius: "20px" }}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img alt="Profile" src={this.props.image} />
                        </figure>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png"
                                             alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4 has-text-primary">{this.props.name}</p>
                                    <hr/>
                                    <p className="subtitle is-size-6">{this.props.year}</p>
                                    {/*delete the prop with requested id from the function invoked in the parent component*/}
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">
                                    <button className="button is-danger" type="button" onClick={() => {this.props.handleDelete(this.props.id);}}>
                                        Delete
                                    </button>
                                </a>
                                <a className="card-footer-item">
                                    <Link to={`/edit-books/${this.props.id}`}>
                                        <button className="button is-primary" type="button">
                                            Edit
                                        </button>
                                    </Link>
                                </a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
