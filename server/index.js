const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3010;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

/* match the ui router */
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});