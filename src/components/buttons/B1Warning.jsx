import React from 'react';

import Button from '../Button.jsx';

export default function B1Warning (props) {
  return (
    <Button
      bgType      = "warning"
      {...props}
    >
      {props.children}
    </Button>
  );
}
