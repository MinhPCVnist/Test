let path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const server = require("http").createServer(app);

const swaggerUI = require("swagger-ui-express");
const { openApiData } = require('./api-docs/openapi.js');

require("dotenv").config();

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb', parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());

// Api-docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openApiData));

const router = express.Router();
router.use("/toDo", require("./modules/toDo/toDo.route"));

app.use(router);

/**
 * Khởi tạo server
 */
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server up and running on ${port} !`)
});