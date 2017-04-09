import React from 'react';
import PropTypes from 'prop-types';

import './Button.less';

export default function Button (props) {
  const {widthType, bgType, leftIcon, rightIcon, type, buttonSize, isInverted, noPaddings, ...buttonProps} = props;

  const widthClassName      = ` button_width_${widthType}`;
  const roundClassName      = ` button_rounded_all`;
  const sizeClassName       = ` button_size_${buttonSize}` ;
  const iconSize            = buttonSize;
  const bgClassName         = isInverted ? ` button_bg_${bgType}_inverted` : ` button_bg_${bgType}`;
  const isDisabled          = props.disabled ? ' disabled ' : ' ';
  const isAnyPaddings       = noPaddings ? ' button_no-paddings' : '';
  const additionalClass     = props.className ? ` ${props.className}` : '';

  const buttonClassName     = `button${sizeClassName}${widthClassName}${roundClassName}${bgClassName}${isDisabled}${isAnyPaddings}${additionalClass}`;

  const leftIconClassName   = leftIcon ? ` button__icon button__icon_left button__icon-${leftIcon} button__icon_${iconSize} icon icon-${leftIcon}` : '';
	const rightIconClassName  = rightIcon ? ` button__icon button__icon_right button__icon-${rightIcon} button__icon_${iconSize} icon icon-${rightIcon}` : '';

	const ButtonInnerContent = () => (
    <div>
			{widthType == 'square' &&
        <span className="button__inner-content">
          {(leftIconClassName.length > 0 || rightIconClassName.length > 0) &&
            <i className={`${leftIconClassName || rightIconClassName} icon_without-text`}/>
          }
        </span>
			||
        <span className="button__inner-content">
          {leftIconClassName.length > 0 &&
            <i className={leftIconClassName}/>
          }

          {props.children}

          {rightIconClassName.length > 0 &&
            <i className={rightIconClassName}/>
          }
        </span>
			}
    </div>
  );

  if (type === 'link') {
    return (
      <a
        {...buttonProps}
        className = {buttonClassName}
      >
        <ButtonInnerContent />
      </a>
    );
  } else if (type === 'text') {
    return (
      <span
        {...buttonProps}
        className = {buttonClassName}
      >
        <ButtonInnerContent />
      </span>
    );
  } else {
    return (
      <button
        {...buttonProps}
        type      = {type}
        className = {buttonClassName}
      >
        <ButtonInnerContent />
      </button>
    );
  }
}

Button.propTypes = {
  widthType   : PropTypes.oneOf(['predefined', 'auto', 'full', 'square']).isRequired,
	buttonSize  : PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']).isRequired,
  bgType      : PropTypes.oneOf(['brand', 'neutral', 'success', 'warning', 'danger']).isRequired,
	type        : PropTypes.oneOf(['button', 'link', 'text']),
	leftIcon    : PropTypes.string,
	rightIcon   : PropTypes.string,
  className   : PropTypes.string,
	noPaddings  : PropTypes.bool
};

Button.defaultProps = {
  type       : 'button',
  widthType  : 'predefined',
  buttonSize : 'medium'
};
