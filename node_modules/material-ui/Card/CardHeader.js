'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = CardHeader;

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

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCardHeader', function () {
  return {
    cardHeader: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      flex: '0 0 auto',
      marginRight: 16
    },
    content: {
      flex: '1 1 auto'
    }
  };
}); //  weak

function CardHeader(props, context) {
  var avatar = props.avatar,
      classNameProp = props.className,
      subheader = props.subheader,
      title = props.title,
      other = (0, _objectWithoutProperties3.default)(props, ['avatar', 'className', 'subheader', 'title']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.cardHeader, classNameProp);

  // Adjustments that depend on the presence of an avatar
  var titleType = avatar ? 'body2' : 'headline';
  var subheaderType = avatar ? 'body2' : 'body1';

  return _react2.default.createElement(
    _CardContent2.default,
    (0, _extends3.default)({ className: className }, other),
    avatar && _react2.default.createElement(
      'div',
      { className: classes.avatar },
      avatar
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      _react2.default.createElement(
        _Typography2.default,
        { type: titleType, component: 'span' },
        title
      ),
      _react2.default.createElement(
        _Typography2.default,
        { type: subheaderType, component: 'span', secondary: true },
        subheader
      )
    )
  );
}

CardHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The Avatar  for the Card Header.
   */
  avatar: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The content of the component.
   */
  subheader: _propTypes2.default.node,
  /**
   * The content of the Card Title.
   */
  title: _propTypes2.default.node
} : {};

CardHeader.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};