# NodeJS REST API Demo

## To run the app on your machine, first clone it: 
`git clone https://github.com/munyi-victor/nodejs-rest-api-demo`

## Install the dependencies:
`cd nodejs-rest-api-demo`
`npm install`

## Run the app, now:
`node index.js`

##
### To test the `GET` route, go to Thunder Client/Postman create a new request and type this:
`http://localhost:3000/users`
### Then click `Send`

##
### To test the `POST` route, go to Thunder Client/Postman create a new request, change the type to `POST` and type this:
`http://localhost:3000/users`
### In the `Body` section, add this data(in JSON format):
`
 {
    "id": "2",
    "name": "Jane Doe",
    "email": "jane@gmail.com"
  }
`
### Then click `Send`

##
### To test the `PUT` route, go to Thunder Client/Postman create a new request, change the type to `PUT` and type this:
`http://localhost:3000/users/2`
### In the `Body` section, add this data(in JSON format):
`
 {
    "name": "John Doe",
    "email": "john@gmail.com"
  }
`
### Then click `Send`

### The user with id 2 will be updated, to test this, send the GET request again:
### Go to Thunder Client/Postman change the type to `PUT` and type this:
`http://localhost:3000/users`
### Then click `Send`

##
### To test the `DELETE` route, go to Thunder Client/Postman create a new request, change the type to `DELETE` and type this:
`http://localhost:3000/users/2`
### The user with id 2 will be deleted, to test this, send the GET request again:
### Go to Thunder Client/Postman change the type to `PUT` and type this:
`http://localhost:3000/users`
### Then click `Send`
