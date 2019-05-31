import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Button from '../../src/General/Button';
import Toast from '../../src/Display/Toast';

class ToastStory extends React.Component {
  state = {
    isOpen: false,
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    const props = {
      Toast: [
        {
          name: 'isVisible',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'yes',
          description: 'Shows the Toast.',
        },
        {
          name: 'onClose',
          type: 'function',
          defaultValue: '',
          possibleValue: 'function',
          require: 'yes',
          description: 'Close the Toast.',
        },
        {
          name: 'theme',
          type: 'string',
          defaultValue: <code>blue</code>,
          possibleValue: <code>blue | black</code>,
          require: 'no',
          description: 'Sets Toast\'s theme.',
        },
      ],
    };

    return (
      <StorybookComponent
        title="Toast"
        code="import { Toast } from 'glints-aries'"
        propsObject={props}
        usage={`state = {
  isOpen: false,
}

handleOpen = () => {
  this.setState({ isOpen: true });
}

handleClose = () => {
  this.setState({ isOpen: false });
}

<Button
  theme="red"
  onClick={this.handleOpen}
>
  Open Toast
</Button>

<Toast
  isVisible={isOpen}
  onClose={this.handleClose}
>
  <Component />
</Toast>`}
      >
        <Button theme="red" onClick={this.handleOpen}>
          Open Toast
        </Button>
        <Toast
          isVisible={isOpen}
          onClose={this.handleClose}
        >
          <h3>Glints is looking for you!</h3>
          <p>Glints is hiring for a talented Software Engineer.</p>
          <p>Click button below for more details</p>
          <Button>More Details</Button>
        </Toast>
      </StorybookComponent>
    );
  }
}

export default ToastStory;
