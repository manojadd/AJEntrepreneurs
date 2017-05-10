'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRenderToString;

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _jssThemeReactor = require('jss-theme-reactor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _MuiThemeProvider = require('../styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRenderToString() {
  var theme = (0, _theme2.default)();
  var jss = (0, _jss.create)((0, _jssPresetDefault2.default)());
  var styleManager = (0, _jssThemeReactor.createStyleManager)({ jss: jss, theme: theme });
  var renderToStringWithContext = function renderToStringWithContext(node) {
    return (0, _server.renderToString)(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { theme: theme, styleManager: styleManager },
      node
    ));
  };

  renderToStringWithContext.cleanUp = function () {
    styleManager.reset();
  };

  return renderToStringWithContext;
} //  weak