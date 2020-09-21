const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
var expressStaticGzip = require("express-static-gzip");
const cors = require('cors');

const app = express();
const PORT = 3010;

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(expressStaticGzip(path.join(__dirname, '/../client/dist')));

app.use(express.static(__dirname + '/../client/dist'));

/* match the ui router */
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});