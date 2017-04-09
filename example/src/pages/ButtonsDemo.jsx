import React from 'react';

import ButtonColorsAndStates  from './ButtonsDemoParts/ButtonColorsAndStates.jsx';
import ButtonSizesAndIcons    from './ButtonsDemoParts/ButtonSizesAndIcons.jsx';
import ButtonOtherModifiers   from './ButtonsDemoParts/ButtonOtherModifiers.jsx';

export default class ButtonsDemo extends React.Component {

  render () {
    return (
      <section>
        <ButtonColorsAndStates />
        <ButtonSizesAndIcons />
        <ButtonOtherModifiers />
      </section>
    );
  }
}