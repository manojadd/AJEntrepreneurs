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

exports.default = TableCell;

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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTableCell', function (theme) {
  return {
    root: {
      borderBottom: '1px solid ' + theme.palette.text.lightDivider,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left'
    },
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse' },
    head: {
      whiteSpace: 'pre'
    },
    padding: {
      padding: '0 56px 0 24px',
      '&:last-child': {
        paddingRight: 24
      }
    },
    compact: {
      paddingRight: 24
    },
    checkbox: {
      paddingLeft: 12,
      paddingRight: 12
    },
    footer: {}
  };
});

/**
 * A material table cell.
 *
 * When placed in a `TableHead`, this will automatically render a `th` element.
 *
 * ```jsx
 * <TableCell>...</TableCell>
 * ```
 */
//  weak

function TableCell(props, context) {
  var _classNames;

  var classNameProp = props.className,
      children = props.children,
      compact = props.compact,
      checkbox = props.checkbox,
      numeric = props.numeric,
      disablePadding = props.disablePadding,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'compact', 'checkbox', 'numeric', 'disablePadding']);
  var table = context.table,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var Component = table && table.head ? 'th' : 'td';

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.numeric, numeric), (0, _defineProperty3.default)(_classNames, classes.compact, compact), (0, _defineProperty3.default)(_classNames, classes.checkbox, checkbox), (0, _defineProperty3.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty3.default)(_classNames, classes.head, table && table.head), (0, _defineProperty3.default)(_classNames, classes.footer, table && table.footer), _classNames), classNameProp);

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the cell padding will be adjusted to accommodate a checkbox.
   */
  checkbox: _propTypes2.default.bool,
  /**
   * The table cell contents.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, compact cell padding will be used to accommodate more content.
   */
  compact: _propTypes2.default.bool,
  /**
   * If `true`, left/right cell padding will be disabled.
   */
  disablePadding: _propTypes2.default.bool,
  /**
   * If `true`, content will align to the right.
   */
  numeric: _propTypes2.default.bool
} : {};

TableCell.defaultProps = {
  checkbox: false,
  compact: false,
  numeric: false,
  disablePadding: false
};

TableCell.contextTypes = {
  table: _propTypes2.default.object,
  styleManager: _customPropTypes2.default.muiRequired
};