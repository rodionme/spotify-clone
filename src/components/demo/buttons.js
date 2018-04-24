import React, { Component } from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default class Buttons extends Component {
  render() {
    return (
      <React.Fragment>
        <Button>Regular button</Button>

        <Button view="rounded">
          <Icon icon="more" />
        </Button>

        <Button view="action">Action button</Button>

        <Button view="action-alt">Action Alt button</Button>

        <Button view="inverted">Inverted button</Button>

        <Button view="alt">Alternative button</Button>

        <Button view="transparent">
          <Icon icon="plus" />
        </Button>

        <br />
        <br />

        <Button type="link" link="/test">
          Regular button
        </Button>

        <Button view="rounded" type="link" link="/test">
          <Icon icon="more" />
        </Button>

        <Button view="action" type="link" link="/test">
          Action button
        </Button>

        <Button view="action-alt" type="link" link="/test">
          Action Alt button
        </Button>

        <Button view="inverted" type="link" link="/test">
          Inverted button
        </Button>

        <Button view="alt" type="link" link="/test">
          Alternative button
        </Button>

        <Button view="transparent" type="link" link="/test">
          <Icon icon="plus" />
        </Button>
      </React.Fragment>
    );
  }
}
