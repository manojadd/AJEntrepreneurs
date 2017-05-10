'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDialogActions', function () {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: '8px 4px',
      flex: '0 0 auto'
    },
    action: {
      margin: '0 4px'
    },
    button: {
      minWidth: '64px'
    }
  };
}); //  weak

var DialogActions = function (_Component) {
  (0, _inherits3.default)(DialogActions, _Component);

  function DialogActions() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DialogActions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DialogActions.__proto__ || (0, _getPrototypeOf2.default)(DialogActions)).call.apply(_ref, [this].concat(args))), _this), _this.classes = {}, _this.renderButton = function (button) {
      return _react2.default.createElement(
        'div',
        { className: _this.classes.action },
        _react2.default.cloneElement(button, { className: (0, _classnames2.default)(_this.classes.button, button.props.className) })
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DialogActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);


      this.classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(this.classes.root, className)
        }, other),
        _react2.default.Children.map(children, this.renderButton)
      );
    }
  }]);
  return DialogActions;
}(_react.Component);

DialogActions.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = DialogActions;
DialogActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string
} : {};