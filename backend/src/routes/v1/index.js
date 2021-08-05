const express = require("express");
const videoRoute = require("./video.route");
// const captureDateMiddleware = require("../../middleware/middleware");
const router = express.Router();

router.use("/videos", videoRoute);

module.exports = router;