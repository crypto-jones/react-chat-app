const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');
require('dotenv').config();

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: process.env.INSTANCE_LOCATER,
  key: process.env.KEY
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.post('/users', (req, res) => {
  const { username } = req.body;
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error_type === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        res.status(error.status).json(error);
      }
    });
});

app.post('/authenticate', (req, res) => {
  const authData =
    chatkit.authenticate({ userId: req.query.user_id }) +
    res.status(authData.status).send(authData.body);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});
