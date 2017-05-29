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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiIcon', function (theme) {
  return {
    root: {
      userSelect: 'none'
    },
    accent: {
      color: theme.palette.accent.A200
    },
    action: {
      color: theme.palette.action.active
    },
    contrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    error: {
      color: theme.palette.error[500]
    },
    primary: {
      color: theme.palette.primary[500]
    }
  };
}); //  weak

function Icon(props) {
  var _classNames;

  var accent = props.accent,
      action = props.action,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      contrast = props.contrast,
      disabled = props.disabled,
      error = props.error,
      primary = props.primary,
      other = (0, _objectWithoutProperties3.default)(props, ['accent', 'action', 'children', 'classes', 'className', 'contrast', 'disabled', 'error', 'primary']);


  var className = (0, _classnames2.default)('material-icons', classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.accent, accent), (0, _defineProperty3.default)(_classNames, classes.action, action), (0, _defineProperty3.default)(_classNames, classes.contrast, contrast), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.error, error), (0, _defineProperty3.default)(_classNames, classes.primary, primary), _classNames), classNameProp);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ className: className, 'aria-hidden': 'true' }, other),
    children
  );
}

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the button will use the theme's accent color.
   */
  accent: _propTypes2.default.bool,
  /**
   * If `true`, the button will use the theme's action.active color.
   */
  action: _propTypes2.default.bool,
  /**
   * The name of the icon font ligature.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the button will contrast the theme's primary color.
   */
  contrast: _propTypes2.default.bool,
  /**
   * If `true`, the button will use the theme's action.disabled color.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the text will use the theme's error color.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool
} : {};

Icon.defaultProps = {
  accent: false,
  action: false,
  contrast: false,
  disabled: false,
  error: false,
  primary: false
};

Icon.muiName = 'Icon';

exports.default = (0, _withStyles2.default)(styleSheet)(Icon);