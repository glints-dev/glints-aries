import React, { Component } from 'react';

import { SecondaryColor } from '../Style/Colors';

import {
  ImageContainer, Image, LanguageItemWrapper, LanguageContainer, LanguageItem, LanguageLabel,
} from '../Style/LanguageSelectStyle';
import {
  DropdownLabelWrapper,
} from '../Style/DropdownStyle';

import { Icon } from '../Icon';
class LanguageSelect extends Component <State, Props> {
  constructor(props) {
    super(props);
    this.state = {
      flag: null,
      isOpen: false,
      title: props.defaultItem && props.defaultItem.countryIcon ? props.defaultItem.countryIcon : 'EN',
      color: props.color ? props.color : SecondaryColor.white,
    };
  }

  async componentDidMount() {
    const { defaultItem } = this.props;
    const flagCode = defaultItem && defaultItem.countryIcon ? defaultItem.countryIcon : 'gb';
    const flagModule = await import(`./FlagComponents/${flagCode}`);
    const flag = flagModule.default;
    this.setState({ flag });
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

   handleItemClick = async (item) => {
     const { onChange } = this.props;
     onChange(item);
     const flagModule = await import(`./FlagComponents/${item.countryIcon}`);
     const flag = flagModule.default;
     this.setState({
       isOpen: false,
       title: item.title,
       flag,
     });
   }

   render() {
     const { languageItem, center, hoverColor } = this.props;
     const {
       flag, isOpen, title, color,
     } = this.state;
     return (
       <LanguageContainer
         size="medium"
         open={isOpen}
         onClick={this.handleOpen}
         onBlur={this.handleClickOutside}
         tabIndex="0"
         hoverColor={hoverColor}
       >
         <DropdownLabelWrapper spaceBetween={false} {...this.props}>
           <ImageContainer>
             <Image src={flag} />
           </ImageContainer>
           <LanguageLabel color={color}>
             {title}
           </LanguageLabel>
           <Icon name="arrow-down" size="15" color={color} />
         </DropdownLabelWrapper>
         <If condition={isOpen}>
           <LanguageItemWrapper center={center}>
             <For each="item" of={languageItem}>
               <LanguageItem
                 key={item.label}
                 onClick={() => this.handleItemClick(item)}
               >
                 {item.label}
               </LanguageItem>
             </For>
           </LanguageItemWrapper>
         </If>
       </LanguageContainer>
     );
   }
}

type State = {
  isOpen: boolean,
  flag: string,
  title: string,
  color: string
}

type Props = {
    center: boolean,
    languageItem: array,
    defaultItem: object,
    hoverColor: string,
    onChange: Function
  };

export default LanguageSelect;
