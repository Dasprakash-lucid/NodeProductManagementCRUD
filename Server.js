const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/api/productManagement', require('./Routes/route'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});