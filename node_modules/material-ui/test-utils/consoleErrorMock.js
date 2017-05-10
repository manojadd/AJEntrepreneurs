'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _sinon = require('sinon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsoleErrorMock = function ConsoleErrorMock() {
  var _this = this;

  (0, _classCallCheck3.default)(this, ConsoleErrorMock);

  this.spy = function () {
    // $FlowFixMe
    _this.consoleErrorContainer = console.error;
    // $FlowFixMe
    console.error = (0, _sinon.spy)();
  };

  this.reset = function () {
    console.error = _this.consoleErrorContainer;
    delete _this.consoleErrorContainer;
  };

  this.callCount = function () {
    if (_this.consoleErrorContainer) {
      // $FlowFixMe
      return console.error.callCount;
    }

    throw new Error('Requested call count before spy() was called');
  };
}; /* eslint-disable flowtype/require-valid-file-annotation, no-console */


exports.default = new ConsoleErrorMock();