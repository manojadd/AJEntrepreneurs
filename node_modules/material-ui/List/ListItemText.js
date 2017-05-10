'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = ListItemText;

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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItemText', function () {
  return {
    root: {
      flex: '1 1 auto',
      padding: '0 16px',
      '&:first-child': {
        paddingLeft: 0
      }
    },
    inset: {
      '&:first-child': {
        paddingLeft: 56
      }
    },
    dense: {
      fontSize: 13
    },
    text: {
      fontSize: 'inherit'
    }
  };
});

function ListItemText(props, context) {
  var _classNames;

  var classNameProp = props.className,
      primary = props.primary,
      secondary = props.secondary,
      inset = props.inset,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'primary', 'secondary', 'inset']);
  var dense = context.dense;

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.dense, dense), (0, _defineProperty3.default)(_classNames, classes.inset, inset), _classNames), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    primary && (typeof primary === 'string' ? _react2.default.createElement(
      _Typography2.default,
      { type: 'subheading', className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.text, dense)) },
      primary
    ) : primary),
    secondary && (typeof secondary === 'string' ? _react2.default.createElement(
      _Typography2.default,
      { secondary: true, type: 'body1', className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.text, dense)) },
      secondary
    ) : secondary)
  );
}

ListItemText.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: _propTypes2.default.bool,
  primary: _propTypes2.default.node,
  secondary: _propTypes2.default.node
} : {};

ListItemText.defaultProps = {
  primary: false,
  secondary: false,
  inset: false
};

ListItemText.contextTypes = {
  dense: _propTypes2.default.bool,
  styleManager: _customPropTypes2.default.muiRequired
};