'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _FormControl = require('../Form/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function TextField(props) {
  var className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      error = props.error,
      id = props.id,
      inputClassName = props.inputClassName,
      InputClassName = props.InputClassName,
      inputPropsProp = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      labelClassName = props.labelClassName,
      name = props.name,
      required = props.required,
      type = props.type,
      multiline = props.multiline,
      rows = props.rows,
      rowsMax = props.rowsMax,
      value = props.value,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'defaultValue', 'disabled', 'error', 'id', 'inputClassName', 'InputClassName', 'inputProps', 'InputProps', 'inputRef', 'label', 'labelClassName', 'name', 'required', 'type', 'multiline', 'rows', 'rowsMax', 'value']);


  var inputProps = inputPropsProp;

  if (inputClassName) {
    inputProps = (0, _extends3.default)({
      className: inputClassName
    }, inputProps);
  }

  return _react2.default.createElement(
    _FormControl2.default,
    (0, _extends3.default)({ className: className, error: error, required: required }, other),
    label && _react2.default.createElement(
      _Input.InputLabel,
      { className: labelClassName },
      label
    ),
    _react2.default.createElement(_Input2.default, (0, _extends3.default)({
      className: InputClassName,
      defaultValue: defaultValue,
      disabled: disabled,
      multiline: multiline,
      name: name,
      rows: rows,
      rowsMax: rowsMax,
      type: type,
      value: value,
      id: id,
      inputProps: inputProps,
      inputRef: inputRef
    }, InputProps))
  );
}

TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The default value of the `Input` element.
   */
  defaultValue: _propTypes2.default.string,
  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /*
   * @ignore
   */
  id: _propTypes2.default.string,
  /**
   * The CSS class name of the `input` element.
   */
  inputClassName: _propTypes2.default.string,
  /**
   * The CSS class name of the `Input` element.
   */
  InputClassName: _propTypes2.default.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Properties applied to the `Input` element.
   */
  InputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The label content.
   */
  label: _propTypes2.default.node,
  /**
   * The CSS class name of the label element.
   */
  labelClassName: _propTypes2.default.string,
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: _propTypes2.default.bool,
  /**
   * Name attribute of the `Input` element.
   */
  name: _propTypes2.default.string,
  /**
   * If `true`, the label is displayed as required.
   */
  required: _propTypes2.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Maxium number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
} : {};

TextField.defaultProps = {
  required: false
};

exports.default = TextField;