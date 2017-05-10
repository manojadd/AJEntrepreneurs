'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCard', function () {
  return {
    card: {
      overflow: 'hidden'
    }
  };
});

function Card(props, context) {
  var classNameProp = props.className,
      raised = props.raised,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'raised']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.card, classNameProp);

  return _react2.default.createElement(_Paper2.default, (0, _extends3.default)({ className: className, elevation: raised ? 8 : 2 }, other));
}

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: _propTypes2.default.bool
} : {};

Card.defaultProps = {
  raised: false
};

Card.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};