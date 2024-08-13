// we need to write end points here. End point should include path, request method and functionality.

// to write end points, we need express JS, so import it
// to import express JS we are using the import syntax provided before ES6. for Node with GraphQL, we use ES6 syntax for import and export

var express = require("express"); // here we are directly given express as a path, so it is importing from node_modules folder.

// router is the method from express js which we use to write the end points. we have to keep all the endpoints in the router.
// once all the end points are ready in the router, we have to export the router using ES6 below syntax.

var router = express.Router();

// Syntax of get/put/post/patch/delete -

// get(path: string type, ...handlers: function type)
// post(path: string type, ...handlers: function type)
// patch(path: string type, ...handlers: function type)
// put(path: string type, ...handlers: function type)
// delete(path: string type, ...handlers: function type)

// end point -1
// // url: localhost:2020/student/register
// // request method: post
// router.post("/register", function (reqObj, resObj, next) {
//   // receive the client request
//   // post calls the callback function with  a max of 3 params
//   // 1. request Object
//   // 2. response Object
//   // 3. next
//   // take the data from the request object
//   // connect with database
//   // do required operation
//   // prepare the response
//   // send the response back to the client using a predefined method in response object called send method
//   resObj.send(`Hello... I am Sachin from Mumabi`);
// });

// we can send the data to server side application in 4 ways:
// 1. Query Parameters
// 2. Path Parameters
// 3. Request Headers
// 4. Request Body

//1. Query Parameters:

//  these are as part of URL
//  starts with question mark(?)
//  It is in the form of key-value pair
//  One pair to another pair, differentiate with ampersand(&)
// accessing on server side: requestObj.query.property-name

// e.g: https:://localhost:2020/std/register?name=sachin&loc=mumbai

// url: localhost:2020/std/register
// request method: post

//
// router.post("/register", function (reqObj, resObj, next) {
// post calls the callback function with  a max of 3 params
// 1. request Object
// 2. response Object
// 3. next

// receive the client request and take the data from the request object
//   const name = reqObj.query.name;
//   const loc = reqObj.query.loc;

// above two lines can be writtens as
//   const { name, loc } = reqObj.query;

// connect with database
// do required operation
// prepare the response
// send the response back to the client using a predefined method in response object called send method
//
//   resObj.send(`Hello... I am ${name} from ${loc}`);
// });

//2. Query Parameters:

//  these are as part of URL
//  starts with slash (/)
//  It is in the form of VALUE
//  One pair to another pair, differentiate with slash(/)
// accessing on server side: requestObj.params.property-name

// e.g: https:://localhost:2020/std/register/Dhoni/Ranchi

// url: localhost:2020/std/register
// request method: post
//
// router.post("/register/:name/:loc", function (reqObj, resObj, next) {
// post calls the callback function with  a max of 3 params
// 1. request Object
// 2. response Object
// 3. next

// receive the client request and take the data from the request object
//   const { name, loc } = reqObj.params;

// connect with database
// do required operation
// prepare the response
// send the response back to the client using a predefined method in response object called send method
//   resObj.send(`Hello... I am ${name} from ${loc}`);
// });

// Query string params and Path params have these limitations
// we cannot send huge amount of data in the URL
// we cannot send sensitive data in the URL

//  so we go for request body and request headers

//3. Request Body:

//  these are as part of Body(payload)
//  It is in the form of JSON/text/javascript/HTML/XML
// accessing on server side: requestObj.body.property-name

// e.g: https:://localhost:2020/std/register

// open postman
// click body - select raw - click on Text - select any of these - JSON/text/javascript/HTML/XML - then enter url and click send

// url: localhost:2020/std/register
// request method: post
//
// router.post("/register", function (reqObj, resObj, next) {
//
// post calls the callback function with  a max of 3 params
// 1. request Object
// 2. response Object
// 3. next

// receive the client request and take the data from the request object
//   const { name, loc } = reqObj.body;

// connect with database
// do required operation
// prepare the response
// send the response back to the client using a predefined method in response object called send method
//
//   resObj.send(`Hello... I am ${name} from ${loc}`);
// });

//4. Request Header:

//  these are as part of Header
//  It is in the form of key value pair
// accessing on server side: requestObj.headers.property-name

// e.g: https:://localhost:2020/std/register

// open postman
// click header - give key value pair data- then enter url and click send

// url: localhost:2020/std/register
// request method: post
//
// router.post("/register", function (reqObj, resObj, next) {
// post calls the callback function with  a max of 3 params
// 1. request Object
// 2. response Object
// 3. next

// receive the client request and take the data from the request object
//   const { name, loc } = reqObj.headers;

// connect with database
// do required operation
// prepare the response
// send the response back to the client using a predefined method in response object called send method
//   resObj.send(`Hello... I am ${name} from ${loc}`);
// });

// We can pass all 4 types of data at a time as shown below:

// url: https:://localhost:2020/std/register/:runs?name=sachin

// request method: post
//
// router.post("/register/:runs", function (reqObj, resObj, next) {
//   // receive the client request and take the data from the request object
//   const { hun } = reqObj.headers;
//   const { runs } = reqObj.params;
//   const { name } = reqObj.query;
//   const { loc } = reqObj.body;

//   // connect with database
//   // do required operation
//   // prepare the response
//   // send the response back to the client using a predefined method in response object called send method
//   resObj.send(
//     `Hello... I am ${name} from ${loc}, scored ${runs} runs, hun- ${hun}`
//   );
// });

// MongoDB : to connect with database, it should run on any server.

// mongoDB server -> DB software   -> database  -> collection  -> document  -> connect using node js application
// we can connect to the datbase by using node js app by creating an end point.

var mongodb = require("mongodb");
router.post("/register", async function (req, res, next) {
  try {
    // take the data from the request
    const data = req.body.data;
    // now, we have the data, to send this data to database, we need to connect with database server.
    // to work with mongodb in node js we have one library called mongodb. so install it - npm install mongodb and import it.

    // only client can connect with server. To connect with mongoDB server, we need mongodb client.
    // we have one property called mongoClient in mongodb library which is used to connect with mongodb server.
    const MongoClient = mongodb.MongoClient;

    const server = await MongoClient.connect(
      "mongodb+srv://nit:nit@react.8gwfjoa.mongodb.net/"
    ); // connecting with mongobd server

    // server contains databases
    const db = server.db("sms"); // sms database - school management software database
    // database contains collection
    const collection = db.collection("students"); // collection is students
    // collection contains documents
    const result = await collection.insertOne(data);
    res.send(result);
  } catch (ex) {
    res.send(ex.message);
  }
});
module.exports = router; // exporting the route using export syntax given before ES6
