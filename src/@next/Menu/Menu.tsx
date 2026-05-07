import React from 'react';
import nextId from 'react-id-generator';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import {
  StyledMenu,
  StyledSections,
  StyledTooltip,
  TitleContainer,
  TitleNodeContainer,
} from './MenuStyle';
import { MenuOptionLabel } from './components/MenuOptionLabel';
import { MenuOption } from './components/MenuOption';
import { MenuOptionCheckbox } from './components/MenuOptionCheckbox';
import { TooltipPosition } from '../Tooltip/Tooltip';

export interface Option {
  disabled?: boolean;
  id?: string;
  label: string | React.ReactNode;
  sublabel?: React.ReactNode;
  value: string;
  tooltip?: {
    content: React.ReactNode;
    preferredPosition?: TooltipPosition;
  };
}

export interface Section {
  title?: string | React.ReactNode;
  options: Option[];
}
export interface MenuProps {
  id?: string;
  onClick?: ({ value }: { value: string }) => void;
  options?: Option[];
  /** Selected value based on Option.value */
  selectedValues?: string[];
  title?: string | React.ReactNode;
  allowMultiple?: boolean;
  sections?: Section[];
}

export const Menu = ({
  allowMultiple,
  id,
  onClick,
  options,
  sections,
  selectedValues,
  title,
}: MenuProps) => {
  const randomId = nextId('glints-menu');
  const menuId = id ? id : randomId;

  const renderTitle = ({ title }: { title: string | React.ReactNode }) => {
    if (React.isValidElement(title)) {
      return <TitleNodeContainer>{title}</TitleNodeContainer>;
    }
    return (
      <TitleContainer>
        <Typography variant="subtitle2" as="span" color={Neutral.B40}>
          {title}
        </Typography>
      </TitleContainer>
    );
  };

  const renderOptions = ({ options }: { options: Option[] }) => {
    return (
      <StyledMenu>
        {options?.map((option: Option) => {
          const { value, label, sublabel, disabled, id, tooltip } = option;
          const randomId = nextId('glints-menu-option');
          const menuOptionId = id ? id : randomId;
          const isSelected = selectedValues?.includes(value);

          const menuOption = (
            <MenuOption
              key={menuOptionId}
              value={value}
              disabled={disabled}
              isSelected={isSelected}
              onClick={onClick}
              allowMultiple={allowMultiple}
            >
              <MenuOptionLabel label={label} sublabel={sublabel} />
            </MenuOption>
          );

          return tooltip ? (
            <StyledTooltip
              content={tooltip.content}
              preferredPosition={tooltip.preferredPosition ?? 'left-middle'}
            >
              {menuOption}
            </StyledTooltip>
          ) : (
            menuOption
          );
        })}
      </StyledMenu>
    );
  };

  const renderOptionsWithCheckbox = ({ options }: { options: Option[] }) => {
    return (
      <StyledMenu>
        {options?.map((option: Option) => {
          const { value, label, disabled, id, tooltip } = option;
          const randomId = nextId('glints-menu-option');
          const menuOptionId = id ? id : randomId;
          const isSelected = selectedValues?.includes(value);

          const menuOption = (
            <MenuOption
              key={menuOptionId}
              value={value}
              disabled={disabled}
              isSelected={isSelected}
              onClick={onClick}
              allowMultiple={allowMultiple}
            >
              <MenuOptionCheckbox
                isSelected={isSelected}
                disabled={disabled}
                label={label}
              />
            </MenuOption>
          );

          return tooltip ? (
            <StyledTooltip
              content={tooltip.content}
              preferredPosition={tooltip.preferredPosition ?? 'left-middle'}
            >
              {menuOption}
            </StyledTooltip>
          ) : (
            menuOption
          );
        })}
      </StyledMenu>
    );
  };

  const renderSections = ({ sections }: { sections: Section[] }) => {
    return (
      <StyledSections>
        {sections.map((section, index) => (
          <li key={`menu-section-${title}-${index}`}>
            {renderTitle({ title: section?.title })}
            {allowMultiple
              ? renderOptionsWithCheckbox({ options: section?.options })
              : renderOptions({ options: section?.options })}
          </li>
        ))}
      </StyledSections>
    );
  };

  return (
    <div id={menuId}>
      {title && renderTitle({ title })}
      {allowMultiple
        ? renderOptionsWithCheckbox({ options })
        : renderOptions({ options })}
      {sections && renderSections({ sections })}
    </div>
  );
};
