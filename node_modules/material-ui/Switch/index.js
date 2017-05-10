'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelSwitch = undefined;

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelSwitch = (0, _withSwitchLabel2.default)(_Switch2.default);

exports.default = _Switch2.default;
exports.LabelSwitch = LabelSwitch;