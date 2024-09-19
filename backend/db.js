"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;
console.log("here it is", getDatabaseUri());
if (process.env.NODE_ENV === "production") {
  db = new Client({
    ...getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    ...getDatabaseUri()
  });
}

db.connect();

module.exports = db;