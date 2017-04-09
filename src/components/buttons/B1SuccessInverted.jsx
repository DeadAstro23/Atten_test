import React from 'react';

import Button from '../Button.jsx';

export default function B1SuccessInverted (props) {
  return (
    <Button
      bgType      = "success"
      isInverted  = {true}
      {...props}
    >
      {props.children}
    </Button>
  );
}
