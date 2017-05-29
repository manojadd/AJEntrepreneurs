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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListSubheader', function (theme) {
  return {
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      paddingLeft: 16,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.fontSize
    },
    primary: {
      color: theme.palette.primary[500]
    },
    inset: {
      paddingLeft: theme.spacing.unit * 9
    }
  };
}); //  weak

function ListSubheader(props) {
  var _classNames;

  var classes = props.classes,
      classNameProp = props.className,
      primary = props.primary,
      inset = props.inset,
      children = props.children,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'primary', 'inset', 'children']);

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.primary, primary), (0, _defineProperty3.default)(_classNames, classes.inset, inset), _classNames), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

ListSubheader.propTypes = process.env.NODE_ENV !== "production" ? {
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
  className: _propTypes2.default.string,
  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * If `true`, the List Subheader will have the theme primary color.
   */
  primary: _propTypes2.default.bool
} : {};

ListSubheader.defaultProps = {
  inset: false,
  primary: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(ListSubheader);