const fs = require('fs');
const randomNum = require('random-num');

//Read data from cities.txt using fs
function read(file, callback) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    callback(data);
  });
}

var appRouter = function (app) {
  //Read files and return to JSON data
  read('cities.txt', function (data) {
    let resData = JSON.parse(data);
    //Home routes
    app.get('/', function (req, res) {
      res.status(200).send({ message: 'Welcome to city restful API' });
    });
    //Routes /cities and return data
    app.get('/cities', function (req, res) {
      res.status(200).send(resData);
    });
    //Routes /city and return 1 random data
    app.get('/city', function (req, res) {
      res.status(200).send(resData[randomNum(0, resData.length)]);
    });
    app.get('*', function (req, res) {
      res.send('URL Not Found', 404);
    });
  });
};

module.exports = appRouter;
