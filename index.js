const express = require("express");
const cors = require("cors");
const { corsConfig } = require("./config");
const port = process.env.PORT || 4100;

const app = express();

app.use(cors(corsConfig));

app.listen(port, () => {
    console.log(`App running, listening on port ${port}`);
});

module.exports = app;