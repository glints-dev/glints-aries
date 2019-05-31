import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Alert from '../../src/General/Alert';
import Button from '../../src/General/Button';

class AlertStory extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleOnClick = () => {
    this.setState({ isOpen: true });
  }

  handleOnClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const props = {
      Alert: [
        {
          name: 'type',
          type: 'string',
          defaultValue: <code>info</code>,
          possibleValue: <code>success | warning | danger | info</code>,
          require: 'yes',
          description: 'Sets Alert\'s style.',
        },
        {
          name: 'message',
          type: 'string',
          defaultValue: '',
          possibleValue: 'any',
          require: 'yes',
          description: 'Sets message for Alert.',
        },
        {
          name: 'isOpen',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'yes',
          description: 'Sets Alert to show.',
        },
        {
          name: 'onClose',
          type: 'function',
          defaultValue: '',
          possibleValue: 'function',
          require: 'yes',
          description: 'A function to close Alert.',
        },
        {
          name: 'autoClose',
          type: 'number',
          defaultValue: '',
          possibleValue: 'number in millisecond',
          require: 'no',
          description: 'Sets Alert to close by itself. The value is in millisecond.',
        },
      ],
    };

    return (
      <StorybookComponent
        title="Alert"
        code="import { Alert } from 'glints-aries'"
        propsObject={props}
        usage={`state = {
  isOpen: false,
}

handleOnClose = () => {
  this.setState({ isOpen: false });
}

<Alert
  type="success"
  message="You have successfully applied to Glints as Software Engineer."
  isOpen={isOpen}
  onClose={this.handleOnClose}
  autoClose={3000}
/>`}
      >
        <Button
          theme="blue"
          onClick={this.handleOnClick}
        >
            Open Alert
        </Button>
        <Alert
          type="success"
          message="You have successfully applied to Glints as Software Engineer."
          isOpen={isOpen}
          onClose={this.handleOnClose}
        />
      </StorybookComponent>
    );
  }
}

interface State {
  isOpen: boolean;
}

export default AlertStory;
