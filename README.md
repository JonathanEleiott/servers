# Servers (computer that takes in requests from the internet)

- take in requests from the Front End
- OPTIONAL: can make a request to the DB
- responds to the Front End

## HTTP Request Type (fetch call) -> CRUD (Create, Read, Update, Delete)

- Create -> POST -> add data
- Read -> GET -> retrieves data
- Update -> PUT/PATCH -> modify data (completely update vs partially update)
- Delete -> DELETE -> removes data

## OLD WAY

- if/else statements to manually check the method and url endpoint
- very clogged
- no security built in (spinner if endpoint doesn't exist)

## Express

- very clean
- very fast to set up
- more security built in
- require npm

## Routes

- app.httpRequestType('/path', (req, res, next) => { res.send('<h1>Welcome</h1>)})
- HTML -> /endpoint
- data -> /api/v1/endpoint

## Route Parameters

- used for getting specific items
- path -> :variableName (separated by /)
- req.params -> object with keys and values

## Queries

- used generally in filters with optional parameters
- url bar -> ?key=value&key2=value2 (separated by &)
- req.query -> object with keys and values

## NPM (Node Package Manager)

- npm init -> Create the package.json
  - -y -> yes to all
- npm i express

## Server Notes

- app.listen takes in an optional second parameter (function that will run wehn the server starts)
- the function in a route takes in a request, response and a next
  - request -> from the frontend (usually a browser)
  - response -> what the server sends back to the frontend
- res.sendFile -> send a file
  - make sure you send the correct HTML file (not a React one)
- __dirname -> used to gt the FOLDER path of where the file is located
- '*' path written will accept all paths
- app.use -> will accept any type of request
- node uses module.exports and require instead of export and import
- nodemon -> package that will auto run a file when it is saved

## Vite + Server

- create server first with a / route
- create vite@latest
- clean up vite files
- copy necessary packages from server's package.json to vite's package.json
- move the server.js file into the vite project folder
- rename server.js to server.cjs
- npm run build -> creates the dist folder with the JSX code converted to HTML, CSS, and JS
- server / route points to the dist folder's HTML file
- app.use(express.static('dist')) -> check the dist folder first for all incoming requests
  - if it's not there, it will continue checking other routes