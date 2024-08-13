var mongodb = require("mongodb");

async function getDB() {
  // now, we have the data, to send this data to database, we need to connect with database server.
  // to work with mongodb in node js we have one library called mongodb. so install it - npm install mongodb and import it.

  // only client can connect with server. To connect with mongoDB server, we need mongodb client.
  // we have one property called MongoClient in mongodb library which is used to connect with mongodb server.
  const MongoClient = mongodb.MongoClient;

  const server = await MongoClient.connect(
    "mongodb+srv://nit:nit@react.8gwfjoa.mongodb.net/"
  ); // connecting with mongobd server

  // server contains databases
  const db = server.db("sms"); // sms database - school management software database
  // database contains collection
  return db;
}
module.exports = getDB;
