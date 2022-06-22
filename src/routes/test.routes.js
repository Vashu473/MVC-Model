const express = require("express");
const TestRouter = express.Router();
const celebrate = require("celebrate");
const { getToken } = require("../auth/jwt/jwt");
// calling functions
const { TestC, GetDataC } = require("../controllers/test.controller");

// Get game list

//  get token will validate your jwt token

amountManagementRouter.post("/getData", GetDataC);
amountManagementRouter.post("/test", getToken, TestC);

module.exports = TestRouter;
