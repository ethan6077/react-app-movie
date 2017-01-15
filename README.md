# Movie App - Created By Ethan Zhang

## App Introduction

It is a small web application for users to save their favourite movies to Local Storage, using React and omdbapi.
Code is following airbnb's react rules, using airbnb's linter.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Installing a Dependency

In the project directory, you can run:

### `npm install`


## Packages Used

* "array-sort": "^0.1.2",
* "localStorage": "^1.0.3",
* "node-rest-client": "^2.0.1",
* "react-refetch": "^1.0.0"


## Bug

I have not sovled the cors problem. The app can only run in the web-security-disabled chrome, otherwise the response from omdbapi would be blocked.

## Features

* Functions including Autocomplete, localStorage and sorting
* The app skeleton is created by "create-react-app"(React Framework Generator), which accounts for 5% of the total code. All the rest of the code is coded manually.
* Following the airbnb's linter rules strictly
* No Redux/Flux implementation