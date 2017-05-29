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

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiIconButton', function (theme) {
  return {
    iconButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: 24,
      width: 48,
      height: 48,
      padding: 0,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      color: theme.palette.action.active,
      zIndex: 1,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      })
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    accent: {
      color: theme.palette.accent.A200
    },
    contrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    icon: {
      width: '1em',
      height: '1em'
    },
    keyboardFocused: {
      backgroundColor: theme.palette.text.divider
    }
  };
});

/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */
//  weak

function IconButton(props) {
  var _classNames;

  var accent = props.accent,
      buttonRef = props.buttonRef,
      children = props.children,
      classes = props.classes,
      className = props.className,
      contrast = props.contrast,
      disabled = props.disabled,
      disableRipple = props.disableRipple,
      iconClassNameProp = props.iconClassName,
      other = (0, _objectWithoutProperties3.default)(props, ['accent', 'buttonRef', 'children', 'classes', 'className', 'contrast', 'disabled', 'disableRipple', 'iconClassName']);

  var iconClassName = (0, _classnames2.default)(classes.icon, iconClassNameProp);

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.iconButton, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.accent, accent), (0, _defineProperty3.default)(_classNames, classes.contrast, contrast), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), className),
      centerRipple: true,
      keyboardFocusedClassName: classes.keyboardFocused,
      disabled: disabled,
      ripple: !disableRipple,
      ref: buttonRef
    }, other),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      typeof children === 'string' ? _react2.default.createElement(
        _Icon2.default,
        { className: iconClassName },
        children
      ) : _react.Children.map(children, function (child) {
        if (child.type && child.type.muiName === 'Icon') {
          return (0, _react.cloneElement)(child, {
            className: (0, _classnames2.default)(iconClassName, child.props.className)
          });
        }

        return child;
      })
    )
  );
}

IconButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, will use the theme's accent color.
   */
  accent: _propTypes2.default.bool,
  /**
   * @ignore
   */
  buttonRef: _propTypes2.default.func,
  /**
   * The icon element.
   * If a string is provided, it will be used as an icon font ligature.
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
   * If `true`, the icon button will use the theme's contrast color.
   */
  contrast: _propTypes2.default.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The CSS class name of the icon element if child is a string.
   */
  iconClassName: _propTypes2.default.string
} : {};

IconButton.defaultProps = {
  accent: false,
  contrast: false,
  disabled: false,
  disableRipple: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(IconButton);