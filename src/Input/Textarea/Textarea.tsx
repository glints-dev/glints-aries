import * as React from 'react';

import classNames from 'classnames';
import { isFunction } from 'lodash';

import {
  TextareaContainer,
  TextareaInput,
  TextareaLabel,
} from '../../Style/Input/TextareaStyle';

class Textarea extends React.PureComponent<Props, State> {
  textareaInputRef: React.RefObject<HTMLTextAreaElement>;

  state = {
    floating: false,
    rows: 4,
    minRows: 4,
    maxRows: 12,
    textareaMaxHeight: 0,
  }

  constructor(props: Props) {
    super(props);
    this.textareaInputRef = React.createRef();
  }

  handleFocusChange = (onBlur: () => void) => {
    const listener = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      this.setState({
        floating: e.target.value.length > 0,
      });

      if (onBlur !== undefined) {
        return onBlur();
      }
    };

    return listener;
  }

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { minRows, maxRows } = this.state;

    const previousRows = e.target.rows;
    e.target.rows = minRows;

    const currentRows = ~~(e.target.scrollHeight / 30);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    this.setState({
      rows: currentRows < maxRows ? currentRows : maxRows,
    });

    if (isFunction(this.props.onChange)) {
      return this.props.onChange(e);
    }
  };

  componentDidMount() {
    const textarea = this.textareaInputRef.current;

    if (textarea.value.length > 0) {
      this.setState({
        floating: true,
      });
    }

    this.setState({
      textareaMaxHeight: ~~((textarea.offsetHeight * 3.7) + (23 * 8) + 1),
    });
  }

  componentDidUpdate() {
    const { value } = this.props;
    const { floating } = this.state;

    if (value && value !== '' && !floating) {
      this.setState({ floating: true });
    }
  }

  render() {
    const {
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      onChange,
      removeFloatingLabel,
      ...defaultProps
    } = this.props;

    const {
      floating,
      rows,
      textareaMaxHeight,
    } = this.state;

    return (
      <TextareaContainer className={classNames('aries-textarea', className)}>
        <TextareaInput
          ref={this.textareaInputRef}
          placeholder={removeFloatingLabel && label}
          rows={rows}
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          onChange={this.handleChange}
          floating={floating}
          value={value}
          aria-label={label}
          {...defaultProps}
          style={{
            maxHeight: `${textareaMaxHeight}px`,
          }}
        />
        {!removeFloatingLabel &&
          <TextareaLabel floating={floating} status={status}>
            {label}
          </TextareaLabel>
        }
      </TextareaContainer>
    );
  }
}

interface Props extends React.ComponentPropsWithoutRef<typeof TextareaInput> {
  label: string;
  onBlur?(): void;
  onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  removeFloatingLabel?: boolean;
}

interface State {
  floating: boolean;
  rows: number;
  minRows: number;
  maxRows: number;
  textareaMaxHeight: number;
}

export default Textarea;
