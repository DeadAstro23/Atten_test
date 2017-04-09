import React from 'react';

import Button from '../Button.jsx';

export default function B1Danger (props) {
  return (
    <Button
      bgType      = "danger"
      {...props}
    >
      {props.children}
    </Button>
  );
}
