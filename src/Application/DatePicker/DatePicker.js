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
  GridBox,
} from '../../Style/Application/DatePickerStyle';

import Icon from '../../General/Icon';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class DatePicker extends Component {
  constructor() {
    super();
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = new Date().getMonth();
    this.state = {
      currentYear,
      currentMonth,
      firstDay: new Date(
        currentYear,
        currentMonth + 1,
        1
      ).getDay(),
      lastDate: new Date(
        currentYear,
        currentMonth + 1,
        0
      ).getDate(),
    };
  }

  setYearBack = () => {
    const { currentYear } = this.state;
    const currentMonth = new Date().getMonth();
    this.setState({
      currentYear: Number(currentYear) - 1,
      firstDay: new Date(
        Number(currentYear) - 1,
        currentMonth,
        1
      ).getDay(),
      lastDate: new Date(
        Number(currentYear) - 1,
        currentMonth,
        0
      ).getDate(),
    });
  }

  setYearNext = () => {
    const { currentYear } = this.state;
    const currentMonth = new Date().getMonth();
    this.setState({
      currentYear: Number(currentYear) + 1,
      firstDay: new Date(
        Number(currentYear) + 1,
        currentMonth,
        1
      ).getDay(),
      lastDate: new Date(
        Number(currentYear) + 1,
        currentMonth,
        0
      ).getDate(),
    });
  }

  setMonthBack = () => {
    const { currentMonth, currentYear } = this.state;
    const checkCurrentMonth = currentMonth;
    if (checkCurrentMonth > 0) {
      this.setState({
        currentMonth: currentMonth - 1,
        firstDay: new Date(
          currentYear,
          currentMonth,
          1
        ).getDay(),
        lastDate: new Date(
          currentYear,
          currentMonth,
          0
        ).getDate(),
      });
    } else {
      this.setYearBack();
      this.setState({ currentMonth: 11 });
    }
  }

  setMonthNext = () => {
    const { currentMonth, currentYear } = this.state;
    const checkCurrentMonth = currentMonth;
    if (checkCurrentMonth < 11) {
      this.setState({
        currentMonth: currentMonth + 1,
        firstDay: new Date(
          currentYear,
          currentMonth + 2,
          1
        ).getDay(),
        lastDate: new Date(
          currentYear,
          currentMonth + 2,
          0
        ).getDate(),
      });
    } else {
      this.setYearNext();
      this.setState({ currentMonth: 0 });
    }
  }

  renderTHead = () => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return (
      <thead>
        <tr role="row">
          {days.map(day => (
            <Th key={day} role="columnheader" title={day}>
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
      tempArray.push(<Td role="gridcell" key={i}><HoverContent hoverAble>{i}</HoverContent></Td>);
    }
    return <tr role="row" key="row1">{tempArray}</tr>;
  }

  renderDayRow = (array = [], startingCount = 0) => {
    const { firstDay, lastDate } = this.state;
    const functionArray = array;
    const functionStartingCount = startingCount === 0 ? 7 - firstDay : startingCount;
    const tempArray = [];
    let isLastDate = false;

    for (let i = functionStartingCount; i < (functionStartingCount + 7); i++) {
      if (i <= lastDate) {
        tempArray.push(<Td role="gridcell" key={i}><HoverContent hoverAble>{i}</HoverContent></Td>);
      } else {
        tempArray.push(<Td key={i} />);
        isLastDate = true;
      }
    }
    functionArray.push(<tr role="row" key={`row${functionArray.length}`}>{tempArray}</tr>);
    if (isLastDate) {
      return functionArray;
    }
    return this.renderDayRow(functionArray, functionStartingCount + 7);
  }

  renderOffSetDay = () => {
    const { firstDay } = this.state;
    const tempArray = [];
    for (let i = firstDay; i >= 1; i--) {
      tempArray.push(<Td key={`offset${i}`} />);
    }
    return tempArray;
  }

  render() {
    const { currentYear, currentMonth } = this.state;
    return (
      <Container>
        <input type="input" />
        <DatePickerContainer>
          <SectionContainer border>
            <FlexCenter justify="space-between">
              <GridBox>
                <IconHolder onClick={this.setYearBack}>
                  <Icon name="arrow-back" color="grey" />
                </IconHolder>
                <IconHolder onClick={this.setMonthBack}>
                  <Icon name="arrow-back" color="grey" />
                </IconHolder>
              </GridBox>
              <FlexCenter>
                {months[currentMonth]}
                &nbsp;&nbsp;
                {currentYear}
              </FlexCenter>
              <GridBox>
                <IconHolder onClick={this.setMonthNext}>
                  <Icon name="arrow-next" color="grey" />
                </IconHolder>
                <IconHolder onClick={this.setYearNext}>
                  <Icon name="arrow-next" color="grey" />
                </IconHolder>
              </GridBox>
            </FlexCenter>
          </SectionContainer>
          <SectionContainer border>
            <FlexCenter>
              <Table cellSpacing="0" role="grid">
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
