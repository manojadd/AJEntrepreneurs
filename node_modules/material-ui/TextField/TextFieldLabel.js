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

var _Form = require('../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTextFieldLabel', function (theme) {
  return {
    root: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'translate(0, 18px) scale(1)',
      transformOrigin: 'top left'
    },
    shrink: {
      transform: 'translate(0, 0px) scale(0.75)'
    },
    animated: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  };
});

function TextFieldLabel(props) {
  var _classNames;

  var disableAnimation = props.disableAnimation,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      shrink = props.shrink,
      other = (0, _objectWithoutProperties3.default)(props, ['disableAnimation', 'children', 'classes', 'className', 'shrink']);


  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.animated, !disableAnimation), (0, _defineProperty3.default)(_classNames, classes.shrink, shrink), _classNames), classNameProp);

  return _react2.default.createElement(
    _Form.FormLabel,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

TextFieldLabel.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: _propTypes2.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the input of this label is focused.
   */
  focused: _propTypes2.default.bool,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes2.default.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: _propTypes2.default.bool
} : {};

TextFieldLabel.defaultProps = {
  disableAnimation: false,
  shrink: false
};

TextFieldLabel.muiName = 'TextFieldLabel';

exports.default = (0, _withStyles2.default)(styleSheet)(TextFieldLabel);