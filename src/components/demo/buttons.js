import React, { Component } from 'react';
import Button from '../Button';
import { BUTTONS } from '../../constants/button-views';
import Icon from '../Icon';

export default class Buttons extends Component {
  render() {
    return (
      <React.Fragment>
        <Button>Regular button</Button>

        <Button view={BUTTONS.ROUNDED}>
          <Icon icon="more" />
        </Button>

        <Button view={BUTTONS.ACTION}>Action button</Button>

        <Button view={BUTTONS.ACTION_ALT}>Action Alt button</Button>

        <Button view={BUTTONS.INVERTED}>Inverted button</Button>

        <Button view={BUTTONS.ALT}>Alternative button</Button>

        <Button view={BUTTONS.TRANSPARENT}>
          <Icon icon="plus" />
        </Button>

        <br />
        <br />

        <Button type="link" link="/test">
          Regular button
        </Button>

        <Button view={BUTTONS.ROUNDED} type="link" link="/test">
          <Icon icon="more" />
        </Button>

        <Button view={BUTTONS.ACTION} type="link" link="/test">
          Action button
        </Button>

        <Button view={BUTTONS.ACTION_ALT} type="link" link="/test">
          Action Alt button
        </Button>

        <Button view={BUTTONS.INVERTED} type="link" link="/test">
          Inverted button
        </Button>

        <Button view={BUTTONS.ALT} type="link" link="/test">
          Alternative button
        </Button>

        <Button view={BUTTONS.TRANSPARENT} type="link" link="/test">
          <Icon icon="plus" />
        </Button>
      </React.Fragment>
    );
  }
}
