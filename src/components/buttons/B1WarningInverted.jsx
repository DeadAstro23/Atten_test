import React from 'react';

import Button from '../Button.jsx';

export default function B1WarningInverted (props) {
  return (
    <Button
      bgType      = "warning"
      isInverted  = {true}
      {...props}
    >
      {props.children}
    </Button>
  );
}
