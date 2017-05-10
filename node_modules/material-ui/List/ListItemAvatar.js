'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = ListItemAvatar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItemAvatar', function () {
  return {
    denseAvatar: {
      width: 36,
      height: 36,
      fontSize: 18,
      marginRight: 4
    },
    denseAvatarIcon: {
      width: 20,
      height: 20
    }
  };
});

/**
 * `<ListItemAvatar>` is a simple wrapper to apply the `dense` mode styles to `Avatar`.
 *
 * ```
 * <ListItemAvatar>
 *   <Avatar>
 * </ListItemAvatar>
 * ```
 */
function ListItemAvatar(props, context) {
  if (context.dense === undefined) {
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: <ListItemAvatar> is a simple wrapper to apply the dense styles\n      to <Avatar>. You do not need it unless you are controlling the <List> dense property.') : void 0;
    return props.children;
  }

  var children = props.children,
      classNameProp = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className']);

  var classes = context.styleManager.render(styleSheet);

  return _react2.default.cloneElement(children, (0, _extends3.default)({
    className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.denseAvatar, context.dense), classNameProp, children.props.className),
    childrenClassName: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.denseAvatarIcon, context.dense), children.props.childrenClassName)
  }, other));
}

ListItemAvatar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component, normally `Avatar`.
   */
  children: _propTypes2.default.element.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string
} : {};

ListItemAvatar.contextTypes = {
  dense: _propTypes2.default.bool,
  styleManager: _customPropTypes2.default.muiRequired
};