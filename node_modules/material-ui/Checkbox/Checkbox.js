'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxDocs = exports.LabelCheckbox = exports.styleSheet = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jssThemeReactor = require('jss-theme-reactor');

var _SwitchBase = require('../internal/SwitchBase');

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCheckbox', function (theme) {
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

var Checkbox = (0, _SwitchBase.createSwitch)({ styleSheet: styleSheet });

Checkbox.displayName = 'Checkbox';

exports.default = Checkbox;


var LabelCheckbox = (0, _withSwitchLabel2.default)(Checkbox);

exports.LabelCheckbox = LabelCheckbox;

/**
 * [Checkboxes](https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox)
 * allow the user to select multiple options from a set.
 */

var _ref = _react2.default.createElement('span', null);

var CheckboxDocs = exports.CheckboxDocs = function CheckboxDocs() {
  return _ref;
};

CheckboxDocs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The CSS class name of the root element when checked.
   */
  checkedClassName: _propTypes2.default.string,
  /**
   * The icon to display when the component is checked.
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
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The CSS class name of the root element when disabled.
   */
  disabledClassName: _propTypes2.default.string,
  /**
   * The icon to display when the component is unchecked.
   * If a string is provided, it will be used as a font ligature.
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