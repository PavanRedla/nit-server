var jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "appToken", function (err) {
      // verify(token from client side, token stored in server side, function which returns after validating the token)
      if (err) {
        res.send("Invalid token");
      } else {
        next(); // go to next handler function
      }
    });
  } else {
    res.send("token missing");
  }
}

module.exports = validateToken;
