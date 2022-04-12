"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedUser = exports.signIn = exports.getOne = exports.getAll = exports.deleteUser = exports.create = void 0;

var _users = _interopRequireDefault(require("../models/users.model"));

var _bcrypt = _interopRequireDefault(require("bcryptjs/dist/bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _cnfg = _interopRequireDefault(require("../config/cnfg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, password;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password;

            _users["default"].findOne({
              where: {
                username: username
              }
            }).then(function (data) {
              if (!data) {
                return res.status(404).json({
                  message: 'User dont found'
                });
              } else {
                var validate = _bcrypt["default"].compareSync(password, data.password);

                if (!validate) {
                  return res.status(401).json({
                    message: 'Invalid Password'
                  });
                } else {
                  var token = _jsonwebtoken["default"].sign({
                    username: username
                  }, _cnfg["default"].secret, {
                    expiresIn: 86400
                  });

                  res.status(200).json({
                    token: token
                  });
                }
              }
            })["catch"](function (err) {
              res.status(500).json({
                message: 'Interal Error'
              });
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var getAll = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _users["default"].findAll();

          case 3:
            users = _context2.sent;
            res.json({
              data: users
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: 'Users table is empty'
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getOne = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _users["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            user = _context3.sent;
            res.json({
              data: user
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var create = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, username, password, rol, type, salt, hasedPs, newUser;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, rol = _req$body2.rol, type = _req$body2.type;
            _context4.prev = 1;
            _context4.next = 4;
            return _bcrypt["default"].genSalt(10);

          case 4:
            salt = _context4.sent;
            _context4.next = 7;
            return _bcrypt["default"].hash(req.body.password, salt);

          case 7:
            hasedPs = _context4.sent;
            _context4.next = 10;
            return _users["default"].create({
              username: username,
              password: hasedPs,
              rol: rol,
              type: type
            }, {
              fields: ['username', 'password', 'rol', 'type']
            });

          case 10:
            newUser = _context4.sent;

            if (!newUser) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.status(201).json({
              message: 'User created',
              data: newUser
            }));

          case 13:
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'User dont created'
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 15]]);
  }));

  return function create(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.create = create;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _users["default"].destroy({
              where: {
                id: id
              }
            }).then(function (data) {
              console.log(data);
              res.json({
                message: 'User deleted'
              });
            })["catch"](function (err) {
              console.log(err);
              res.status(500).json({
                message: 'Internal Error'
              });
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var updatedUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body3, username, password, rol, type, salt, hasedPs;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body3 = req.body, username = _req$body3.username, password = _req$body3.password, rol = _req$body3.rol, type = _req$body3.type;
            _context6.next = 4;
            return _bcrypt["default"].genSalt(10);

          case 4:
            salt = _context6.sent;
            _context6.next = 7;
            return _bcrypt["default"].hash(password, salt);

          case 7:
            hasedPs = _context6.sent;
            _context6.next = 10;
            return _users["default"].update({
              username: username,
              password: hasedPs,
              rol: rol,
              type: type
            }, {
              where: {
                id: id
              }
            }).then(function (data) {
              if (data == 0) {
                res.sendStatus(500);
              } else {
                res.json({
                  message: 'User was updated'
                });
              }
            })["catch"](function (err) {
              console.log(err);
              res.status(500).json({
                message: 'Error while user trying updated'
              });
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updatedUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updatedUser = updatedUser;