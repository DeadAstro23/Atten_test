'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = B1SuccessInverted;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button.js');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function B1SuccessInverted(props) {
  return _react2.default.createElement(
    _Button2.default,
    (0, _extends3.default)({
      bgType: 'success',
      isInverted: true
    }, props),
    props.children
  );
}