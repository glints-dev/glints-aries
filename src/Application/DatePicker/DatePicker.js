import React, { Component } from 'react';

import {
  Container,
  DatePickerContainer,
  SectionContainer,
  FlexCenter,
  IconHolder,
  Table,
  Td,
  Th,
  HoverContent,
} from '../../Style/Application/DatePickerStyle';

import Icon from '../../General/Icon';

class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      firstDay: new Date(
        new Date().getFullYear().toString(),
        new Date().getMonth(),
        1
      ).getDay(),
      lastDate: new Date(
        new Date().getFullYear().toString(),
        new Date().getMonth() + 1,
        0
      ).getDate(),
    };
  }

  renderTHead = () => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return (
      <thead>
        <tr role="row">
          {days.map(day => (
            <Th role="columnheader" title={day}>
              <HoverContent>
                {day}
              </HoverContent>
            </Th>
          ))}
        </tr>
      </thead>
    );
  }

  renderTBody = () => {
    const content = [];
    this.renderDayRow(content);
    return (
      <tbody>
        {content}
      </tbody>
    );
  }

  renderDayRow = (array, startingCount = 1) => {
    /* eslint-disable no-plusplus  */
    const { firstDay, lastDate } = this.state;
    const functionArray = array;
    let functionStartingCount = startingCount;
    let tempArray = [];
    let isLastDate = false;
    console.log('functionArray', functionArray);
    console.log('functionStartingCount', functionStartingCount);
    if (functionArray.length === 0) {
      tempArray = this.renderOffSetDay();
      for (let i = 1; i <= 7 - firstDay; i++) {
        tempArray.push(<Td key={i}><HoverContent hoverAble>{i}</HoverContent></Td>);
        functionStartingCount = i;
      }
    } else {
      for (let i = startingCount; i < (startingCount + 7); i++) {
        if (i <= lastDate) {
          tempArray.push(<Td key={i}><HoverContent hoverAble>{i}</HoverContent></Td>);
          functionStartingCount = i;
        } else {
          tempArray.push(<Td key={i} />);
          isLastDate = true;
        }
      }
    }
    functionArray.push(<tr>{tempArray}</tr>);
    if (isLastDate) {
      return functionArray;
    }
    return this.renderDayRow(functionArray, functionStartingCount + 1);
  }

  renderOffSetDay = () => {
    const { firstDay } = this.state;
    const tempArray = [];
    for (let i = firstDay; i >= 1; i--) {
      console.log('i', i);
      tempArray.push(<Td key={i} />);
    }
    return tempArray;
  }

  render() {
    const { firstDay, lastDate } = this.state;
    console.log('firstDay:', firstDay, 'lastDate:', lastDate);
    console.log('month', new Date().getMonth());
    return (
      <Container>
        <input type="input" />
        <DatePickerContainer>
          <SectionContainer border>
            <FlexCenter justify="space-between">
              <IconHolder>
                <Icon name="arrow-back" color="grey" />
                <Icon name="arrow-back" color="grey" />
              </IconHolder>
              <FlexCenter>year</FlexCenter>
              <IconHolder>
                <Icon name="arrow-next" color="grey" />
                <Icon name="arrow-next" color="grey" />
              </IconHolder>
            </FlexCenter>
          </SectionContainer>
          <SectionContainer border>
            <FlexCenter>
              <Table>
                {this.renderTHead()}
                {this.renderTBody()}
              </Table>
            </FlexCenter>
          </SectionContainer>
          <SectionContainer>
            <FlexCenter>
              Today
            </FlexCenter>
          </SectionContainer>
        </DatePickerContainer>
      </Container>
    );
  }
}

export default DatePicker;
