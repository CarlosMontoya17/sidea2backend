"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.deleteUser = deleteUser;
exports.getAll = getAll;
exports.getOne = getOne;
exports.updatedUser = updatedUser;

var _users = _interopRequireDefault(require("../models/users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAll(_x, _x2) {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _users["default"].findAll();

          case 3:
            users = _context.sent;
            res.json({
              data: users
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: 'Users table is empty'
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getAll.apply(this, arguments);
}

function getOne(_x3, _x4) {
  return _getOne.apply(this, arguments);
}

function _getOne() {
  _getOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _users["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            user = _context2.sent;
            res.json({
              data: user
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getOne.apply(this, arguments);
}

function create(_x5, _x6) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, username, password, rol, type, newUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password, rol = _req$body.rol, type = _req$body.type;
            _context3.prev = 1;
            _context3.next = 4;
            return _users["default"].create({
              username: username,
              password: password,
              rol: rol,
              type: type
            }, {
              fields: ['username', 'password', 'rol', 'type']
            });

          case 4:
            newUser = _context3.sent;

            if (!newUser) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'User created',
              data: newUser
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'User dont created'
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _create.apply(this, arguments);
}

function deleteUser(_x7, _x8) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
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
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteUser.apply(this, arguments);
}

function updatedUser(_x9, _x10) {
  return _updatedUser.apply(this, arguments);
}

function _updatedUser() {
  _updatedUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, username, password, rol, type;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, rol = _req$body2.rol, type = _req$body2.type;
            _context5.next = 4;
            return _users["default"].update({
              username: username,
              password: password,
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

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updatedUser.apply(this, arguments);
}