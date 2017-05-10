'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = DialogContentText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDialogContentText', function (theme) {
  return {
    root: (0, _extends3.default)({}, theme.typography.subheading, {
      color: theme.palette.text.secondary,
      margin: 0
    })
  };
}); //  weak

function DialogContentText(props, context) {
  var children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className']);

  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    'p',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

DialogContentText.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string
} : {};

DialogContentText.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};