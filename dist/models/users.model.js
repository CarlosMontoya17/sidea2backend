"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _actas = _interopRequireDefault(require("../models/actas.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Users = _database.sequelize.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  username: {
    type: _sequelize["default"].TEXT
  },
  password: {
    type: _sequelize["default"].TEXT
  },
  rol: {
    type: _sequelize["default"].TEXT
  },
  type: {
    type: _sequelize["default"].TEXT
  },
  createdAt: {
    type: _sequelize["default"].TIME
  },
  updatedAt: {
    type: _sequelize["default"].TIME
  }
}
/*, {
   timeStamps: false
}*/
);

Users.hasMany(_actas["default"], {
  foreignKey: 'usuario',
  sourceKey: 'id'
});

_actas["default"].belongsTo(Users, {
  foreignKey: 'usuario',
  sourceKey: 'id'
});

var _default = Users;
exports["default"] = _default;