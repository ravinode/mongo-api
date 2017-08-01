const mongodb = require('mongo').MongoClient;

mongodb.connect('mongodb://ds129013.mlab.com:29013/heroku_4hp1l787',(err,db)=>
{
  if(err)
  {
    console.log("Error Connecting");
  }
  console.log("Connected");
  db.close();
});
