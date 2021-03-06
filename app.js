const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/mytest/index.html');
});

app.listen(3000);

console.log('server listening on 3000');