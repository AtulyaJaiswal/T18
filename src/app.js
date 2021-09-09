const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

app.use(express.json());

app.use(require('./Routers/get'));
app.use(require('./Routers/post'));
app.use(require('./Routers/update'));

require('./Database/index');

app.listen(3001, () => {
    console.log("App is running");
});