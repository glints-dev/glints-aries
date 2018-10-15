/* eslint-disable no-plusplus  */
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
    content.push(this.renderFirstWeekRow());
    content.push(this.renderDayRow());
    return (
      <tbody>
        {content}
      </tbody>
    );
  }

  renderFirstWeekRow = () => {
    const { firstDay } = this.state;
    let tempArray = [];
    tempArray = this.renderOffSetDay();
    for (let i = 1; i <= 7 - firstDay; i++) {
      tempArray.push(<Td key={i}><HoverContent hoverAble>{i}</HoverContent></Td>);
    }
    return <tr>{tempArray}</tr>;
  }

  renderDayRow = (array = [], startingCount = 0) => {
    const { firstDay, lastDate } = this.state;
    const functionArray = array;
    const functionStartingCount = startingCount === 0 ? 7 - firstDay : startingCount;
    const tempArray = [];
    let isLastDate = false;

    for (let i = functionStartingCount; i < (functionStartingCount + 7); i++) {
      if (i <= lastDate) {
        tempArray.push(<Td key={i}><HoverContent hoverAble>{i}</HoverContent></Td>);
      } else {
        tempArray.push(<Td key={i} />);
        isLastDate = true;
      }
    }
    functionArray.push(<tr>{tempArray}</tr>);
    if (isLastDate) {
      return functionArray;
    }
    return this.renderDayRow(functionArray, functionStartingCount + 7);
  }

  renderOffSetDay = () => {
    const { firstDay } = this.state;
    const tempArray = [];
    for (let i = firstDay; i >= 1; i--) {
      tempArray.push(<Td key={i} />);
    }
    return tempArray;
  }

  render() {
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
