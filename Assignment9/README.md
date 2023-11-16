# Assignment9-webdesign

backend: (Node, Express & MongoDB)
This is a Node.js application that uses Express.js as a framework and MongoDB as a database. The application creates a RESTful API for performing CRUD (Create, Read, Update, and Delete) operations on user data.

## API Endpoints:

1. POST - /user/create \
Desc: This route handler handles a POST request to create a new user. It performs validation checks on the email address, password, and name of the user. If the validation checks pass, it hashes the password and saves the new user data to the database. If any validation checks fail, it returns an error response.
Parameters: a. email 
            b. password 
            c. name

2. PUT - /user/edit \
Desc: This route handler handles a PUT request to update the details of an existing user. It finds the user by email address and updates their name and hashed password. If the user is not found, it returns an error response.
Parameters: a. new_email
            b. new_password 
             c. new_name

3. DELETE - /user/delete \
Desc: This route handler handles a DELETE request to delete a user from the database. It finds the user by email address and deletes their data from the database. If the user is not found, it returns an error response.


4. GET - /user/getAll \
Desc: This route handler handles a GET request to retrieve all users from the database. It finds all user data and removes the password field from each user object before sending the user data back in the response.



## Technology & Softwares:

1. MongoDB
2. Express
3. NodeJS

Commonly used packages:
1. bcrypt
2. mongoose
3. express
4. nodemon

## Installation:

Running the server
1. Clone the repository on your local machine
2. Install the packages by running the command *npm install* (at the root of the directory)
3. Run the app by running the command *npm start*

* Use postman to test the API endpoints
* Install MongoDB community edition server and create a local database


###FRONTEND
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `DESCRIPTION `
 IT IS ART GALLERY APPLICATION BUILT IN REACT. CREATED 4 PAGES USING REACT COMPONENTS AND REACT-ROUTER
## LOGIN PAGE
 - HAVING RIGHT CREDENTIALS A USER CAN LOGIN TO ACCESS OTHER PAGES OF THE APPLICATION. IF THERE IS NO USER IN DATABASE IT WONT REDIRECT TO THE HOME PAGE
## HOME
 - HAS GENERAL DESCRIPTION ABOUT THE ART GALLERY AND USED CARD COMPONENT TO DISPLAY DIFFERENT FORM OF ART.
## ABOUT
 - USED CARD COMPONENT TO DISPLAY ABOUT THE DIFFERENT BRANCHES OF ART GALLERY
## CONTACT
 - USED CARD LAYOUT TO DISPLAY THE CONTACT CARDS AND DETAILS OF DIFFERENT DEPARTMENTS
 - USED REACT MAP TO  CREATE DYNAMIC COMPONENT OF SUPPORT CONTACT DETAILS
## JOBS
 - USED CARD COMPONENT TO DISPLAY THE AVAILABLE JOBS AVAILABLE IN THE GALLERY.

