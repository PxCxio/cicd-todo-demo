const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  });

