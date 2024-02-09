const express = require("express");
const createUser = require("../controllers/controller");
const createUserRouter = express.Router();
createUserRouter.post("/createUser", createUser.savefunction);
createUserRouter.post("./fetchUser", createUser.fetchFuction);
// const router = express.Router();
// router.route("/createUser").post(createUser.savefunction);
// router.route("/fetchUser").post(createUser.fetchFuction);
module.exports = createUserRouter;
