import React from 'react';
import { Typography } from '../Typography';
import { ActionItem } from './ActionItem';
import {
  StyledActionListContainer,
  StyledActionListSection,
} from './ActionListStyle';

export type Item = {
  content: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  action?: (...args: any) => void;
};

export type Section = {
  title: React.ReactNode;
  items?: Item[];
};

export type ActionListProps = {
  items?: Item[];
  sections?: Section[];
};

export const ActionList = ({ items, sections }: ActionListProps) => {
  const renderActionItems = (actionItems: Item[] = []) => {
    return actionItems.map((item: Item, index: number) => {
      return (
        <ActionItem key={`${item.content.toString()}-${index}`} {...item} />
      );
    });
  };

  const renderSectionedItems = () =>
    (sections || []).map((section: Section, index: number) => {
      const { title } = section;
      return (
        <li key={`${title}-${index}`}>
          <StyledActionListSection key={`${title}-${index}`}>
            <Typography as="div" variant="subtitle2">
              {title}
            </Typography>
          </StyledActionListSection>
          {renderActionItems(section.items || [])}
        </li>
      );
    });

  const renderItems = () => <li>{renderActionItems(items || [])}</li>;

  const contentMarkup = sections ? renderSectionedItems() : renderItems();
  return <StyledActionListContainer>{contentMarkup}</StyledActionListContainer>;
};
