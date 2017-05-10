'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = DialogTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDialogTitle', function () {
  var gutter = 24;
  return {
    root: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      flex: '0 0 auto'
    }
  };
});

function DialogTitle(props, context) {
  var children = props.children,
      className = props.className,
      disableTypography = props.disableTypography,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'disableTypography']);


  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    disableTypography ? children : _react2.default.createElement(
      _Typography2.default,
      { type: 'title' },
      children
    )
  );
}

DialogTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, that can be usefull to can render an h4 instead of a
   */
  disableTypography: _propTypes2.default.bool
} : {};

DialogTitle.defaultProps = {
  disableTypography: false
};

DialogTitle.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};