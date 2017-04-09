'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var widthType = props.widthType,
      bgType = props.bgType,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      type = props.type,
      buttonSize = props.buttonSize,
      isInverted = props.isInverted,
      noPaddings = props.noPaddings,
      buttonProps = (0, _objectWithoutProperties3.default)(props, ['widthType', 'bgType', 'leftIcon', 'rightIcon', 'type', 'buttonSize', 'isInverted', 'noPaddings']);


  var widthClassName = ' button_width_' + widthType;
  var roundClassName = ' button_rounded_all';
  var sizeClassName = ' button_size_' + buttonSize;
  var iconSize = buttonSize;
  var bgClassName = isInverted ? ' button_bg_' + bgType + '_inverted' : ' button_bg_' + bgType;
  var isDisabled = props.disabled ? ' disabled ' : ' ';
  var isAnyPaddings = noPaddings ? ' button_no-paddings' : '';
  var additionalClass = props.className ? ' ' + props.className : '';

  var buttonClassName = 'button' + sizeClassName + widthClassName + roundClassName + bgClassName + isDisabled + isAnyPaddings + additionalClass;

  var leftIconClassName = leftIcon ? ' button__icon button__icon_left button__icon-' + leftIcon + ' button__icon_' + iconSize + ' icon icon-' + leftIcon : '';
  var rightIconClassName = rightIcon ? ' button__icon button__icon_right button__icon-' + rightIcon + ' button__icon_' + iconSize + ' icon icon-' + rightIcon : '';

  var ButtonInnerContent = function ButtonInnerContent() {
    return _react2.default.createElement(
      'div',
      null,
      widthType == 'square' && _react2.default.createElement(
        'span',
        { className: 'button__inner-content' },
        (leftIconClassName.length > 0 || rightIconClassName.length > 0) && _react2.default.createElement('i', { className: (leftIconClassName || rightIconClassName) + ' icon_without-text' })
      ) || _react2.default.createElement(
        'span',
        { className: 'button__inner-content' },
        leftIconClassName.length > 0 && _react2.default.createElement('i', { className: leftIconClassName }),
        props.children,
        rightIconClassName.length > 0 && _react2.default.createElement('i', { className: rightIconClassName })
      )
    );
  };

  if (type === 'link') {
    return _react2.default.createElement(
      'a',
      (0, _extends3.default)({}, buttonProps, {
        className: buttonClassName
      }),
      _react2.default.createElement(ButtonInnerContent, null)
    );
  } else if (type === 'text') {
    return _react2.default.createElement(
      'span',
      (0, _extends3.default)({}, buttonProps, {
        className: buttonClassName
      }),
      _react2.default.createElement(ButtonInnerContent, null)
    );
  } else {
    return _react2.default.createElement(
      'button',
      (0, _extends3.default)({}, buttonProps, {
        type: type,
        className: buttonClassName
      }),
      _react2.default.createElement(ButtonInnerContent, null)
    );
  }
}

Button.propTypes = {
  widthType: _propTypes2.default.oneOf(['predefined', 'auto', 'full', 'square']).isRequired,
  buttonSize: _propTypes2.default.oneOf(['large', 'medium', 'small', 'xsmall']).isRequired,
  bgType: _propTypes2.default.oneOf(['brand', 'neutral', 'success', 'warning', 'danger']).isRequired,
  type: _propTypes2.default.oneOf(['button', 'link', 'text']),
  leftIcon: _propTypes2.default.string,
  rightIcon: _propTypes2.default.string,
  className: _propTypes2.default.string,
  noPaddings: _propTypes2.default.bool
};

Button.defaultProps = {
  type: 'button',
  widthType: 'predefined',
  buttonSize: 'medium'
};