import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Drawer from '../../src/Navigation/Drawer';
import Button from '../../src/General/Button';

class DrawerStory extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  renderSideBar = () => {
    const { isOpen } = this.state;
    return (
      <div>
        <Button
          variant="solid-blue"
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          CLOSE
        </Button>
      </div>
    );
  };

  render() {
    const { isOpen } = this.state;
    const props = {
      Drawer: [
        {
          name: 'isOpen',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'yes',
          description: '',
        },
        {
          name: 'onClose',
          type: 'function',
          defaultValue: '',
          possibleValue: 'function',
          require: 'yes',
          description: 'A function to close Drawer.',
        },
        {
          name: 'position',
          type: 'string',
          defaultValue: 'right',
          possibleValue: 'left | right',
          require: 'no',
          description:
            'Determines which side of the screen the drawer will appear on.',
        },
        {
          name: 'getContainerElement',
          type: 'function',
          possibleValue: (
            <>
              Example:{' '}
              <code>
                () =&gt; document.getElementsByTagName(&apos;body&apos;)[0]
              </code>
            </>
          ),
          require: 'no',
          description:
            'Pass a function that returns a underlying, scrollable element to disable scrolling when the drawer is open',
        },
      ],
    };

    return (
      <StorybookComponent
        title="Drawer"
        code="import { Drawer } from 'glints-aries'"
        propsObject={props}
        usage={`<Drawer
  isOpen={isOpen}
  onClose={() => this.setState({ isOpen: false })}
>
  <Component />
</Drawer>`}
      >
        <Button
          variant="solid-blue"
          onClick={() => this.setState({ isOpen: true })}
        >
          OPEN
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => this.setState({ isOpen: false })}
          getContainerElement={() => document.getElementsByTagName('body')[0]}
        >
          {this.renderSideBar()}
        </Drawer>
      </StorybookComponent>
    );
  }
}

interface State {
  isOpen: boolean;
}

export default DrawerStory;
