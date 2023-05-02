const express = require("express");

var notificationRouter = express.Router();

var { getAllNotifications } = require("../controllers/notificationController");

notificationRouter.get("/getAll", getAllNotifications);
module.exports = notificationRouter;