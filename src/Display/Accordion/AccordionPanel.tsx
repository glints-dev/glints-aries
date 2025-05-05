import * as React from 'react';
import classNames from 'classnames';

import { IconOptions } from './Accordion';

import {
  PanelWrapper,
  IconWrapper,
  IconLabelWrapper,
  ContentWrapper,
  Content,
  Label,
} from './AccordionStyle';

const AccordionPanel: React.FunctionComponent<Props> = props => {
  const {
    className,
    content,
    label,
    active,
    iconOptions: { activeIcon, inactiveIcon, position },
    onOpen,
    onClick,
    headingId,
    contentId,
    ...restProps
  } = props;
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onOpen();
    if (onClick) {
      onClick(e);
    }
  };
  const renderIcon = () => (
    <IconWrapper position={position} active={active}>
      {active ? activeIcon : inactiveIcon}
    </IconWrapper>
  );

  return (
    <PanelWrapper
      className={classNames('panel-wrapper', className)}
      role="tab"
      aria-expanded={active}
      tabIndex={0}
      {...restProps}
    >
      <IconLabelWrapper
        className="label-wrapper"
        onClick={handleClick}
        tabIndex={-1}
        position={position}
        active={active}
        role="button"
        aria-expanded={active}
        aria-controls={contentId}
        id={headingId}
      >
        {position === 'left' && renderIcon()}
        <Label>{label}</Label>
        {position === 'right' && renderIcon()}
      </IconLabelWrapper>
      <ContentWrapper
        className="content-wrapper"
        active={active}
        role="region"
        id={contentId}
        aria-labelledby={headingId}
      >
        <Content position={position}>{content}</Content>
      </ContentWrapper>
    </PanelWrapper>
  );
};

export type Props = React.ComponentPropsWithoutRef<typeof PanelWrapper> & {
  content: React.ReactNode;
  label: React.ReactNode;
  active?: boolean;
  iconOptions?: IconOptions;
  onOpen?(): void;
  onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  headingId?: string;
  contentId?: string;
};

export default AccordionPanel;
