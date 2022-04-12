"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Actas = _database.sequelize.define('actas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  tipo: {
    type: _sequelize["default"].TEXT
  },
  usuario: {
    type: _sequelize["default"].TEXT
  },
  entregado: {
    type: _sequelize["default"].BOOLEAN
  },
  createdAt: {
    type: _sequelize["default"].TIME
  },
  updatedAt: {
    type: _sequelize["default"].TIME
  }
});

var _default = Actas;
exports["default"] = _default;