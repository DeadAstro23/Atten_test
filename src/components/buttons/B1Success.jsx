import React from 'react';

import Button from '../Button.jsx';

export default function B1Success (props) {
  return (
    <Button
      bgType      = "success"
      {...props}
    >
      {props.children}
    </Button>
  );
}
