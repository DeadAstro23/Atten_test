import React from 'react';
import Button from '../Button.jsx';

export default function B1BrandInverted (props) {
  return (
    <Button
      bgType      = "brand"
      isInverted  = {true}
      {...props}
    >
      {props.children}
    </Button>
  );
}
