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

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiAppBar', function (theme) {
  return {
    appBar: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: theme.zIndex.appBar
    },
    primary: {
      backgroundColor: theme.palette.primary[500],
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    accent: {
      backgroundColor: theme.palette.accent.A200,
      color: theme.palette.getContrastText(theme.palette.accent.A200)
    }
  };
});

function AppBar(props) {
  var _classNames;

  var accent = props.accent,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['accent', 'children', 'classes', 'className']);


  var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.appBar, true), (0, _defineProperty3.default)(_classNames, classes.primary, !accent), (0, _defineProperty3.default)(_classNames, classes.accent, accent), _classNames), classNameProp);

  return _react2.default.createElement(
    _Paper2.default,
    (0, _extends3.default)({ square: true, elevation: 4, className: className }, other),
    children
  );
}

AppBar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the AppBar will use the theme's accent color.
   */
  accent: _propTypes2.default.bool,
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

AppBar.defaultProps = {
  accent: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(AppBar);