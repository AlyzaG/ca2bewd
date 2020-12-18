import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import CreateBooks from './CreateBooks';
import EditBooks from './EditBooks';
import BooksList from './BooksList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={BooksList}/>
        {/*pass the id through the EditUser component*/}
        <Route path="/edit-books/:id" component={EditBooks}/>
        {/*set the path to create a new user to CreateUser component*/}
        <Route path="/create-books" component={CreateBooks}/>
      </div>
    </HashRouter>
  );
};

export default App;
