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

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cancel = require('../svg-icons/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiChip', function (theme) {
  var height = 32;
  var backgroundColor = (0, _colorManipulator.emphasize)(theme.palette.background.default, 0.12);
  var deleteIconColor = (0, _colorManipulator.fade)(theme.palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      width: 'fit-content',
      transition: theme.transitions.create(),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      outline: 'none', // No outline on focused element in Chrome (as triggered by tabIndex prop)
      border: 'none', // Remove `button` border
      padding: 0 },
    clickable: {
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      },
      cursor: 'pointer'
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: 32,
      height: 32,
      fontSize: 16
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      color: deleteIconColor,
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      },
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px'
    }
  };
});

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
function Chip(props) {
  var avatarProp = props.avatar,
      classes = props.classes,
      classNameProp = props.className,
      deleteIconClassNameProp = props.deleteIconClassName,
      label = props.label,
      labelClassNameProp = props.labelClassName,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onRequestDelete = props.onRequestDelete,
      tabIndexProp = props.tabIndex,
      other = (0, _objectWithoutProperties3.default)(props, ['avatar', 'classes', 'className', 'deleteIconClassName', 'label', 'labelClassName', 'onClick', 'onKeyDown', 'onRequestDelete', 'tabIndex']);


  var chipRef = void 0;

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    onRequestDelete(event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    var key = (0, _keycode2.default)(event);

    if (onClick && (key === 'space' || key === 'enter')) {
      event.preventDefault();
      onClick(event);
    } else if (onRequestDelete && key === 'backspace') {
      event.preventDefault();
      onRequestDelete(event);
    } else if (key === 'esc') {
      event.preventDefault();
      chipRef.blur();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.clickable, onClick), (0, _defineProperty3.default)({}, classes.deletable, onRequestDelete), classNameProp);
  var labelClassName = (0, _classnames2.default)(classes.label, labelClassNameProp);

  var deleteIcon = null;
  if (onRequestDelete) {
    var deleteIconClassName = (0, _classnames2.default)(classes.deleteIcon, deleteIconClassNameProp);
    deleteIcon = _react2.default.createElement(_cancel2.default, { className: deleteIconClassName, onClick: handleDeleteIconClick });
  }

  var avatar = null;
  if (avatarProp && (0, _react.isValidElement)(avatarProp)) {
    avatar = (0, _react.cloneElement)(avatarProp, {
      className: (0, _classnames2.default)(classes.avatar, avatarProp.props.className),
      childrenClassName: (0, _classnames2.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
    });
  }

  var tabIndex = onClick || onRequestDelete ? tabIndexProp : -1;

  return _react2.default.createElement(
    'button',
    (0, _extends3.default)({
      className: className,
      onClick: onClick,
      tabIndex: tabIndex,
      onKeyDown: handleKeyDown,
      ref: function ref(node) {
        chipRef = node;
      }
    }, other),
    avatar,
    _react2.default.createElement(
      'span',
      { className: labelClassName },
      label
    ),
    deleteIcon
  );
}

Chip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Avatar element.
   */
  avatar: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The CSS class name of the delete icon element.
   */
  deleteIconClassName: _propTypes2.default.string,
  /**
   * The content of the label.
   */
  label: _propTypes2.default.node,
  /**
   * The CSS `className` of the label.
   */
  labelClassName: _propTypes2.default.string,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   * @param {object} event `onClick` event targeting the delete icon element.
   */
  onRequestDelete: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.number
} : {};

exports.default = (0, _withStyles2.default)(styleSheet)(Chip);