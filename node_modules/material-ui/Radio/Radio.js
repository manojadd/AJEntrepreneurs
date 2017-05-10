'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioDocs = exports.LabelRadio = exports.styleSheet = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jssThemeReactor = require('jss-theme-reactor');

var _SwitchBase = require('../internal/SwitchBase');

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

var _radioButtonChecked = require('../svg-icons/radio-button-checked');

var _radioButtonChecked2 = _interopRequireDefault(_radioButtonChecked);

var _radioButtonUnchecked = require('../svg-icons/radio-button-unchecked');

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiRadio', function (theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {
      color: theme.palette.primary[500]
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
}); //  weak

var Radio = (0, _SwitchBase.createSwitch)({
  styleSheet: styleSheet,
  inputType: 'radio',
  defaultIcon: _react2.default.createElement(_radioButtonUnchecked2.default, null),
  defaultCheckedIcon: _react2.default.createElement(_radioButtonChecked2.default, null)
});

Radio.displayName = 'Radio';

exports.default = Radio;


var LabelRadio = (0, _withSwitchLabel2.default)(Radio);

exports.LabelRadio = LabelRadio;

/**
 * [Radio buttons](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)
 * are switches used for selection from multiple options.
 */

var _ref = _react2.default.createElement('span', null);

var RadioDocs = exports.RadioDocs = function RadioDocs() {
  return _ref;
};

RadioDocs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component appears selected.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The CSS class name of the root element when selected.
   */
  checkedClassName: _propTypes2.default.string,
  /**
   * The icon to display when selected.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the component disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The CSS class name of the root element when disabled.
   */
  disabledClassName: _propTypes2.default.string,
  /**
   * The icon to display when the component is unselected.
   */
  icon: _propTypes2.default.node,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event `change` event
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * If `false`, the ripple effect will be disabled.
   */
  ripple: _propTypes2.default.bool,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};