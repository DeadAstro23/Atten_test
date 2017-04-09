import React from 'react';

import Button from '../Button.jsx';

export default function B1Neutral (props) {
  return (
    <Button
      bgType      = "neutral"
      {...props}
    >
      {props.children}
    </Button>
  );
}
