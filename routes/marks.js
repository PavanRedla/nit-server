// we need to write end points here. End point should include path, request method and functionality.

// to write end points, we need express JS, so import it
// to import express JS we are using the syntax provided below ES6. for Node with GraphQL, we use ES6 syntax for import and export

var express = require("express");

// router is the method from express js which we use to write the end points. we have to keep all the endpoints in the router.
// once all the end points are ready in the router, we have to export the router using ES6 below syntax.

var router = express.Router();

// Syntax of get/put/post -

// get(path: string type, ...handlers: function type)
// post(path: string type, ...handlers: function type)
// patch(path: string type, ...handlers: function type)
// put(path: string type, ...handlers: function type)
// delete(path: string type, ...handlers: function type)

// end point -1
// url: localhost:2020/marks/save
// request method: post
router.post("/save", function (reqObj, resObj, next) {
  // receive the client request
  // post calls the callback function with  a max of 3 params
  // 1. request Object
  // 2. response Object
  // 3. next
  // take the data from the request object
  // connect with database
  // do required operation
  // prepare the response
  // send the response back to the client using a predefined method in response object called send method
  resObj.send("Hello Express..");
});

// end point -2
// url: localhost:2020/marks/get-result
// request method: get
router.get("/get-result", function () {
  // receive the client request
  // post calls the callback function with  a max of 3 params
  // 1. request Object
  // 2. response Object
  // 3. next
  // take the data from the request
  // connect with database
  // do required operation
  // prepare the response
  // send the response back to the client.
});

module.exports = router;
