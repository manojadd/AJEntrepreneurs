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

var _colorManipulator = require('../styles/colorManipulator');

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiButton', function (theme) {
  return {
    root: {
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      minWidth: 88,
      height: 36,
      padding: '0px 16px',
      borderRadius: 2,
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, 0.12),
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    },
    compact: {
      padding: '0 8px',
      minWidth: 64
    },
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    primary: {
      color: theme.palette.primary[500],
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary[500], 0.12)
      }
    },
    accent: {
      color: theme.palette.accent.A200,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.accent.A200, 0.12)
      }
    },
    contrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500]),
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.getContrastText(theme.palette.primary[500]), 0.12)
      }
    },
    raised: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$keyboardFocused': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.text.divider
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        '&$disabled': {
          backgroundColor: theme.palette.text.divider
        }
      }
    },
    keyboardFocused: {},
    raisedPrimary: {
      color: theme.palette.getContrastText(theme.palette.primary[500]),
      backgroundColor: theme.palette.primary[500],
      '&:hover': {
        backgroundColor: theme.palette.primary[700]
      }
    },
    raisedAccent: {
      color: theme.palette.getContrastText(theme.palette.accent.A200),
      backgroundColor: theme.palette.accent.A200,
      '&:hover': {
        backgroundColor: theme.palette.accent.A400
      }
    },
    raisedContrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    }
  };
}); //  weak

function Button(props) {
  var _classNames;

  var accent = props.accent,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      compact = props.compact,
      contrast = props.contrast,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      disableRipple = props.disableRipple,
      fab = props.fab,
      primary = props.primary,
      raised = props.raised,
      other = (0, _objectWithoutProperties3.default)(props, ['accent', 'children', 'classes', 'className', 'compact', 'contrast', 'disabled', 'disableFocusRipple', 'disableRipple', 'fab', 'primary', 'raised']);


  var flat = !raised && !fab;
  var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.root, true), (0, _defineProperty3.default)(_classNames, classes.raised, raised || fab), (0, _defineProperty3.default)(_classNames, classes.fab, fab), (0, _defineProperty3.default)(_classNames, classes.primary, flat && primary), (0, _defineProperty3.default)(_classNames, classes.accent, flat && accent), (0, _defineProperty3.default)(_classNames, classes.contrast, flat && contrast), (0, _defineProperty3.default)(_classNames, classes.raisedPrimary, !flat && primary), (0, _defineProperty3.default)(_classNames, classes.raisedAccent, !flat && accent), (0, _defineProperty3.default)(_classNames, classes.raisedContrast, !flat && contrast), (0, _defineProperty3.default)(_classNames, classes.compact, compact), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: className,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      ripple: !disableRipple,
      keyboardFocusedClassName: classes.keyboardFocused
    }, other),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      children
    )
  );
}

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the button will use the theme's accent color.
   */
  accent: _propTypes2.default.bool,
  /**
   * The content of the button.
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
   * Uses a smaller minWidth, ideal for things like card actions.
   */
  compact: _propTypes2.default.bool,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the button will use the theme's contrast color.
   */
  contrast: _propTypes2.default.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `ripple` must also be true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * If `true`, well use floating action button styling.
   */
  fab: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes2.default.string,
  /**
   * If `true`, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * If `true`, the button will use raised styling.
   */
  raised: _propTypes2.default.bool,
  /**
   * @ignore
   */
  type: _propTypes2.default.string
} : {};

Button.defaultProps = {
  accent: false,
  component: 'button',
  compact: false,
  contrast: false,
  disabled: false,
  fab: false,
  disableFocusRipple: false,
  primary: false,
  raised: false,
  disableRipple: false,
  type: 'button'
};

exports.default = (0, _withStyles2.default)(styleSheet)(Button);