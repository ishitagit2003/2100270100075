const express = require('express');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/registerRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(registerRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
