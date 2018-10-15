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
    const firstDay = new Date('2018', 10, 1).getDay();
    const lastDate = new Date('2018', 11, 0).getDate();
    console.log('firstDay', firstDay);
    console.log('lastDay', lastDate);
    this.renderDayRow(content, 1, firstDay, lastDate);
    return (
      <tbody>
        {content}
      </tbody>
    );
  }

  renderDayRow = (array, startingCount, firstDay, lastDate) => {
    const functionArray = array;
    const tempArray = [];
    let isLastDate = false;
    for (let i = startingCount; i < (startingCount + 7); i + 1) {
      if (i <= lastDate) {
        tempArray.push(<Td key={i}><HoverContent hoverAble>{i}</HoverContent></Td>);
      } else {
        tempArray.push(<Td />);
        isLastDate = true;
      }
    }
    console.log('functionArray', functionArray.length);
    functionArray.push(<tr>{tempArray}</tr>);
    if (isLastDate) {
      return thisArray;
    }
    return this.renderDayRow(thisArray, startingCount + 7, firstDay, lastDate);
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
