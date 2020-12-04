import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, fireEvent, wait, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { PrimaryColor, SecondaryColor } from '../../Utils/Colors';
import Alert, { AlertType } from './Alert';

describe('<Alert/> should match snapshot, when isOpen is falsy', () => {
  test('snapshot should be null regardless of alert type', () => {
    const snapshot = renderer
      .create(
        <Alert
          type={'success'}
          message="You have successfully applied to Glints as Software Engineer."
          isOpen={false}
          onClose={jest.fn()}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

describe('<Alert/> should match snapshot, when isOpen is truthy', () => {
  const AlertComponent = ({ type }: { type: AlertType }) => (
    <Alert
      type={type}
      message="You have successfully applied to Glints as Software Engineer."
      isOpen={true}
      onClose={jest.fn()}
    />
  );

  test('type is success', () => {
    const snapshot = renderer
      .create(<AlertComponent type="success" />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('type is warning', () => {
    const snapshot = renderer
      .create(<AlertComponent type="warning" />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('type is danger', () => {
    const snapshot = renderer.create(<AlertComponent type="danger" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('type is info', () => {
    const snapshot = renderer.create(<AlertComponent type="info" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('type is not a predefined type', () => {
    const snapshot = renderer.create(<AlertComponent type="xxx" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

describe('<Alert/> should render correct icon color', () => {
  const AlertComponent = ({ type }: { type: AlertType }) => (
    <Alert
      type={type}
      message="You have successfully applied to Glints as Software Engineer."
      isOpen={true}
      onClose={jest.fn()}
    />
  );

  test('type is success', () => {
    const { queryAllByTestId } = render(<AlertComponent type="success" />);
    const icon = queryAllByTestId('icon-svg')[0];
    expect(icon).toHaveAttribute('fill', SecondaryColor.darkgreen);
  });

  test('type is warning', () => {
    const { queryAllByTestId } = render(<AlertComponent type="warning" />);
    const icon = queryAllByTestId('icon-svg')[0];
    expect(icon).toHaveAttribute('fill', SecondaryColor.orange);
  });

  test('type is danger', () => {
    const { queryAllByTestId } = render(<AlertComponent type="danger" />);
    const icon = queryAllByTestId('icon-svg')[0];
    expect(icon).toHaveAttribute('fill', PrimaryColor.glintsred);
  });

  test('type is info', () => {
    const { queryAllByTestId } = render(<AlertComponent type="info" />);
    const icon = queryAllByTestId('icon-svg')[0];
    expect(icon).toHaveAttribute('fill', SecondaryColor.actionblue);
  });

  test('type is not a predefined type', () => {
    const { queryAllByTestId } = render(<AlertComponent type="xxx" />);
    const icon = queryAllByTestId('icon-svg')[0];
    expect(icon).toHaveAttribute('fill', SecondaryColor.actionblue);
  });
});

describe('<Alert/> isOpen', () => {
  const AlertComponent = ({ isOpen }: { isOpen: boolean }) => (
    <Alert
      type={'success'}
      message="You have successfully applied to Glints as Software Engineer."
      isOpen={isOpen}
      onClose={jest.fn()}
    />
  );

  test('should not be rendered when when isOpen is falsy', () => {
    const { queryByRole } = render(<AlertComponent isOpen={false} />);
    const alert = queryByRole('alertdialog');
    expect(alert).not.toBeInTheDocument();
  });

  test('should be rendered when when isOpen is truthy', () => {
    const { queryByRole } = render(<AlertComponent isOpen={true} />);
    const alert = queryByRole('alertdialog');
    expect(alert).toBeInTheDocument();
  });
});

describe('<Alert/> onClose', () => {
  const AlertComponent = ({ onClose }: { onClose: () => void }) => (
    <Alert
      type={'success'}
      message="You have successfully applied to Glints as Software Engineer."
      isOpen={true}
      onClose={onClose}
    />
  );

  test('click close button should call onClose', async () => {
    const onClose = jest.fn();
    const { queryByRole } = render(<AlertComponent onClose={onClose} />);
    const closeButton = queryByRole('button');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  test('press enter key should call onClose', async () => {
    const onClose = jest.fn();
    const { queryByRole } = render(<AlertComponent onClose={onClose} />);
    const alert = queryByRole('alertdialog');
    fireEvent.keyDown(alert, { key: 'Enter', keyCode: 13 });
    expect(onClose).toHaveBeenCalled();
  });

  test('press any key except enter and esc should not call onClose', async () => {
    const onClose = jest.fn();
    const { queryByRole } = render(<AlertComponent onClose={onClose} />);
    const alert = queryByRole('alertdialog');
    fireEvent.keyDown(alert, { key: 'Enter', keyCode: 25 });
    expect(onClose).not.toHaveBeenCalled();
  });

  test('press esc key should call onClose', async () => {
    const onClose = jest.fn();
    const { queryByRole } = render(<AlertComponent onClose={onClose} />);
    const alert = queryByRole('alertdialog');
    fireEvent.keyDown(alert, { key: 'Esc', keyCode: 27 });
    expect(onClose).toHaveBeenCalled();
  });
});

describe('<Alert/> autoClose', () => {
  test('onClose should be called after isOpen changed from truthy to falsy', async () => {
    const AlertComponent = ({
      onClose,
      isOpen,
    }: {
      onClose: () => void;
      isOpen: boolean;
    }) => (
      <Alert
        type={'success'}
        message="You have successfully applied to Glints as Software Engineer."
        isOpen={isOpen}
        onClose={onClose}
        autoClose={10}
      />
    );

    const onClose = jest.fn();
    const { rerender } = render(
      <AlertComponent onClose={onClose} isOpen={false} />
    );
    rerender(<AlertComponent onClose={onClose} isOpen={true} />);
    expect(onClose).not.toHaveBeenCalled();
    await wait(() => {
      // after autoClose timeout onClose should have been called
      expect(onClose).toHaveBeenCalled();
    });
  });
});

describe('<Alert/> timeout', () => {
  const AlertComponent = ({ isOpenProp }: { isOpenProp: boolean }) => {
    const [isOpen, setIsOpen] = React.useState(isOpenProp);
    return (
      <Alert
        type={'success'}
        message="You have successfully applied to Glints as Software Engineer."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    );
  };

  test('click close button should close alert after timeout', async () => {
    const { queryByRole } = render(<AlertComponent isOpenProp={true} />);
    const alert = queryByRole('alertdialog');
    const closeButton = queryByRole('button');
    fireEvent.click(closeButton);
    expect(alert).toBeInTheDocument();
    await wait(() => {
      expect(alert).not.toBeInTheDocument();
    });
  });

  test('press enter key should close alert after timeout', async () => {
    const { queryByRole } = render(<AlertComponent isOpenProp={true} />);
    const alert = queryByRole('alertdialog');
    fireEvent.keyDown(alert, { key: 'Enter', keyCode: 13 });
    expect(alert).toBeInTheDocument();
    await wait(() => {
      expect(alert).not.toBeInTheDocument();
    });
  });

  test('press esc key should close alert after timeout', async () => {
    const { queryByRole } = render(<AlertComponent isOpenProp={true} />);
    const alert = queryByRole('alertdialog');
    fireEvent.keyDown(alert, { key: 'Esc', keyCode: 27 });
    expect(alert).toBeInTheDocument();
    await wait(() => {
      expect(alert).not.toBeInTheDocument();
    });
  });

  test('autoClose', async () => {
    let openAlert: () => void;
    const AlertComponent = ({ isOpenProp }: { isOpenProp: boolean }) => {
      const [isOpen, setIsOpen] = React.useState(isOpenProp);
      openAlert = () => setIsOpen(true);
      return (
        <Alert
          type={'success'}
          message="You have successfully applied to Glints as Software Engineer."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          autoClose={100}
        />
      );
    };

    const { queryByRole } = render(<AlertComponent isOpenProp={false} />);
    act(() => openAlert());
    const alert = queryByRole('alertdialog');
    expect(alert).toBeInTheDocument();
    await wait(() => {
      expect(alert).not.toBeInTheDocument();
    });
  });

  test('autoCloseTimeout should be cleared before component unmount', async () => {
    const useRefSpy = jest.spyOn(React, 'useRef');
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');
    const { rerender, unmount } = render(
      <Alert
        type="success"
        message="You have successfully applied to Glints as Software Engineer."
        isOpen={false}
        onClose={jest.fn()}
        autoClose={100}
      />
    );

    rerender(
      <Alert
        type="success"
        message="You have successfully applied to Glints as Software Engineer."
        isOpen={true}
        onClose={jest.fn()}
        autoClose={100}
      />
    );

    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(2);
    expect(clearTimeoutSpy.mock.calls[1][0]).toEqual(
      useRefSpy.mock.results[1].value.current
    );

    clearTimeoutSpy.mockRestore();
    useRefSpy.mockRestore();
  });
});

describe('<Alert/> focus', () => {
  const AlertComponent = ({ isOpen }: { isOpen: boolean }) => (
    <Alert
      type={'success'}
      message="You have successfully applied to Glints as Software Engineer."
      isOpen={isOpen}
      onClose={jest.fn()}
    />
  );

  test('alert dialog should have focus when isOpen changes from falsy to truthy', () => {
    const { queryByRole, rerender } = render(<AlertComponent isOpen={false} />);
    rerender(<AlertComponent isOpen={true} />);
    const alert = queryByRole('alertdialog');
    expect(alert).toHaveFocus();
  });
});
