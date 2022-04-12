"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users.controller");

var router = (0, _express.Router)(); // /api/users

router.post('/createOne', _users.create);
router.get('/getFull/', _users.getAll);
router.get('/getOne/:id', _users.getOne);
router["delete"]('/delete/:id', _users.deleteUser);
router.put('/updateId/:id', _users.updatedUser);
var _default = router;
exports["default"] = _default;