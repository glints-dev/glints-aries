import * as React from 'react';
import classNames from 'classnames';

import {
  AddIcon,
  MinusIcon,
  ArrowDownSolidIcon,
} from '../../General/Icon/components';
import AccordionPanel, { Props as AccordionPanelProps } from './AccordionPanel';

import { Container } from '../../Style/Display/AccordionStyle';

const Accordion: Accordion = ({ children, className, iconPosition }) => {
  const [currIndex, setCurrIndex] = React.useState(-1);
  const iconOptions: IconOptions = {
    activeIcon:
      iconPosition === 'left' ? <MinusIcon /> : <ArrowDownSolidIcon />,
    inactiveIcon:
      iconPosition === 'left' ? <AddIcon /> : <ArrowDownSolidIcon />,
    position: iconPosition,
  };

  const handleOpen = (index: number) => {
    setCurrIndex(currIndex === index ? -1 : index);
  };

  return (
    <Container className={classNames('aries-accordion', className)}>
      {React.Children.map(
        children,
        (child: React.ReactElement<AccordionPanelProps>, index) => {
          const { label, content, ...restChildProps } = child.props;
          return React.cloneElement(child, {
            key: index,
            label: label,
            content: content,
            active: currIndex === index,
            iconOptions: iconOptions,
            onOpen: () => handleOpen(index),
            ...restChildProps,
          });
        }
      )}
    </Container>
  );
};

type Accordion = React.FunctionComponent<Props> & {
  Panel: typeof AccordionPanel;
};

export type IconPosition = 'left' | 'right';

export interface IconOptions {
  activeIcon: React.ReactElement;
  inactiveIcon: React.ReactElement;
  position: IconPosition;
}

interface Props {
  children: React.ReactNode;
  className?: string;
  iconPosition?: IconPosition;
}

Accordion.defaultProps = {
  iconPosition: 'left' as IconPosition,
};

Accordion.Panel = AccordionPanel;

export default Accordion;
