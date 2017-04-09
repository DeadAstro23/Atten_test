import React from 'react';
import Button from '../Button.jsx';

export default function B1Brand (props) {
  return (
    <Button
      bgType      = "brand"
      {...props}
    >
      {props.children}
    </Button>
  );
}
