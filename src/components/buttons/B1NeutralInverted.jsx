import React from 'react';

import Button from '../Button.jsx';

export default function B1NeutralInverted (props) {
  return (
    <Button
      bgType      = "neutral"
      isInverted  = {true}
      {...props}
    >
      {props.children}
    </Button>
  );
}
