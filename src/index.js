require("dotenv").config();
const app = require("./app");
const mongoose = require("./Libs/mongoose");
const logger = require("./Libs/logger");

const { port,
    mongoose: { url, options }} = require("./Config");
/**
 * Start the server on Defined port
 */

const server = app.listen(port, async() => {
    logger.log.info(`Express App Listening on PORT : ${port}`);
    mongoose.connect(url,options);
});

