import React from 'react';

import Button from '../Button.jsx';

export default function B1DangerInverted (props) {
  return (
    <Button
      bgType      = "danger"
      isInverted  = {true}
      {...props}
    >
      {props.children}
    </Button>
  );
}
