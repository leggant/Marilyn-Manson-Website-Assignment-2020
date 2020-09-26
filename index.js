const express = require('express');
const app = express();
const port = 666;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'))

