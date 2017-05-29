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

var RADIUS = 12; //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiBadge', function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'inline-block'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -RADIUS,
      right: -RADIUS,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      fontSize: RADIUS,
      width: RADIUS * 2,
      height: RADIUS * 2,
      borderRadius: '50%',
      backgroundColor: theme.palette.color,
      color: theme.palette.textColor
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

function Badge(props) {
  var _classNames2;

  var badgeClassNameProp = props.badgeClassName,
      badgeContent = props.badgeContent,
      classes = props.classes,
      classNameProp = props.className,
      children = props.children,
      primary = props.primary,
      accent = props.accent,
      other = (0, _objectWithoutProperties3.default)(props, ['badgeClassName', 'badgeContent', 'classes', 'className', 'children', 'primary', 'accent']);


  var className = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.root, true), classNameProp);
  var badgeClassName = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.badge, true), (0, _defineProperty3.default)(_classNames2, classes.primary, primary), (0, _defineProperty3.default)(_classNames2, classes.accent, accent), _classNames2), badgeClassNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children,
    _react2.default.createElement(
      'span',
      { className: badgeClassName },
      badgeContent
    )
  );
}

Badge.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the badge will use the accent badge colors.
   */
  accent: _propTypes2.default.bool,
  /**
   * The CSS class name of the badge element.
   */
  badgeClassName: _propTypes2.default.string,
  /**
   * The content rendered within the badge.
   */
  badgeContent: _propTypes2.default.node.isRequired,
  /**
   * The badge will be added relative to this node.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the badge will use the primary badge colors.
   */
  primary: _propTypes2.default.bool
} : {};

Badge.defaultProps = {
  primary: false,
  accent: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(Badge);