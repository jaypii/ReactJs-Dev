const path = require('path');
const mysql = require('mysql');

module.exports = function(app,connection){
   app.get('/', function(req,res) {
      //res.send('Hello from simple-react project');
      connection.query('SELECT * FROM users;', function(err,data) {
         (err)?res.send(err):res.json({users: data});
      });
   });

   app.get('/users', function(req, res) {
      // res.send('Hello from simple-react project');
      connection.query('SELECT * FROM users;', function(err, data) {
          (err)?res.send(err):res.json({users: data});
        });
  });
}