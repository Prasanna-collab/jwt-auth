const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbName = "authentication";
const dbUrl = `mongodb+srv://prasanna:prasanna@fs1.uhegkhd.mongodb.net/${dbName}`


module.exports={dbUrl,MongoClient,mongodb}