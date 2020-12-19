# MERN full stack example
This is an example of a full stack application using React, Node.js, Express, MongoDB and Webpack.

You can [Click Here](https://ancient-sierra-80316.herokuapp.com/#/)
 to see the running example. 
 
##  To use this template follow these commands (execute them one at a time)
###### 1. Set up project
```linux
# clone this repository 
git clone https://github.com/georgeBl/mern_full_stack_template

# go inside the root folder
cd mern-full-stack

# install dependencies if they aren't there
npm install

# run your development server
npm run dev
```

# Description

The application allows user to insert their favorite book, they can later delete it or edit it of needed.
The application is using a database with mongoDB and Node.js to use all the crud methods (create, read, update, delete) to interact with the data stored in the database, and React to create a front-end.


# Requirements

```
npm install axios
```
Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
```
npm install bulma
```
Enables to use Bulma, a framework to design the application
```
const express = require('express');
```
This is using the 'Express' module from the package installed
```
const {MongoClient, ObjectId} = require('mongodb');
```
Require the database using MongoClient for the connection, and require ObjectId to use it later on the code.

## Usage

Set a variable to load the database
```
const dbroute = process.env.MONGODB_URL || `mongodb+srv://userdb:jcJd7YgFirQ2CW6@dbshows.ulzym.mongodb.net/library?retryWrites=true&w=majority`;

let db;
```
Connection to the database, using a condition to check if an error occur, define the port
```
MongoClient.connect(dbroute, (err, client) => {
  if (err) throw err;

  db = client.db(dbname);
  server.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
})
```
This class render the Homepage of the application, it renders the navigation bar and return the array of books.
A button is set to insert a new book.
```
class BooksList extends Component
```
This class render the navigation bar, this would be imported on the file BooksList.js and CreateBooks.js
```
class navbar extends Component
```
This class render a form to insert a book into the database. HandleSubmit is an event to send all entries into the database. HandleChange is an event to match the values of the entries.
```
class CreateBooks extends Component
```
This class, just like in CreateBooks.js render a form, however this one enables the user to edit their entries, using the same event.
componentDidMount is function to retrieve the data that will be edited by the user.
```
class CreateBooks extends Component
```
This file define the root to render all pages on the browser.
```
App.js
```

## Problem encountered

Throughout my work I had several errors stating that my port was already used, when it was not. Then I had some more errors and killed the port and run it again, after struggling few days I managed to fix it.
I was able to perform a CRUD and render it on my homepage.

## Authors
Alyza Gumma Saad 
