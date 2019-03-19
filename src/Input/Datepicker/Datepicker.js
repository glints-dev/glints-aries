import React, { Component } from 'react';

import moment from 'moment';

import {
  DatepickerContainer,
  DatepickerWrapper,
  DatepickerSection,
  DatepickerContent,
  DatepickerIconWrapper,
  DatepickerTable,
  Td,
  Th,
  HoverContent,
  DatepickerGridBox,
  DatepickerTodayBtn,
} from '../../Style/Input/DatepickerStyle';

import TextField from '../TextField';
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

class Datepicker extends Component <State, Props> {
  constructor() {
    super();
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = new Date().getMonth();
    this.state = {
      selectedDate: null,
      previousFullDate: null,
      getFullDate: '',
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
      isOpen: false,
      isDatepickerFocus: false,
    };
  }

  handleOnFocus = (e) => {
    const isFocus = e.currentTarget === document.activeElement;
    this.setState({ isOpen: isFocus });
  }

  handleOnInputBlur = (e) => {
    const isBlur = e.currentTarget === document.activeElement;
    this.setState({ isOpen: isBlur });
  }

  handleOnDateBlur = (e) => {
    const isBlur = e.currentTarget === document.activeElement;
    this.setState({
      isOpen: isBlur,
      isDatepickerFocus: false,
    });
  }

  handleMouseDownDate = (e) => {
    e.currentTarget.focus();
    this.setState({ isDatepickerFocus: true });
  }

  handleClickToday = () => {
    this.setState({
      getFullDate: moment(new Date()).format('LL'),
      isOpen: false,
    });
  }

  handleOnClickSelectedDate = (date) => {
    const { currentMonth, currentYear } = this.state;
    const tempDate = Number(date.toString().length) === 1 ? `0${date}` : `${date}`;
    const tempMonth = Number((currentMonth + 1).toString().length) === 1 ? `0${currentMonth + 1}` : `${currentMonth + 1}`;

    this.setState({
      getFullDate: moment(`${currentYear}-${tempMonth}-${tempDate}`).format('LL'),
      selectedDate: date,
      isOpen: false,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isDatepickerFocus) {
      return { isOpen: true };
    }

    return null;
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
    const { firstDay, selectedDate } = this.state;
    let tempArray = [];
    tempArray = this.renderOffSetDay();
    for (let i = 1; i <= 7 - firstDay; i++) {
      tempArray.push(
        <Td
          role="gridcell"
          key={i}
          onMouseDown={() => this.handleOnClickSelectedDate(i)}
        >
          <HoverContent
            selectedDate={selectedDate}
            index={i}
            hoverAble
          >
            {i}
          </HoverContent>
        </Td>
      );
    }
    return <tr role="row" key="row1">{tempArray}</tr>;
  }

  renderDayRow = (array = [], startingCount = 0) => {
    const { firstDay, lastDate, selectedDate } = this.state;
    const functionArray = array;
    const functionStartingCount = startingCount === 0
      ? (8 - firstDay)
      : startingCount;
    const tempArray = [];
    let isLastDate = false;

    for (let i = functionStartingCount; i < (functionStartingCount + 7); i++) {
      if (i <= lastDate) {
        tempArray.push(
          <Td
            role="gridcell"
            key={i}
            onMouseDown={() => this.handleOnClickSelectedDate(i)}
          >
            <HoverContent
              selectedDate={selectedDate}
              index={i}
              hoverAble
            >
              {i}
            </HoverContent>
          </Td>
        );
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

  renderLeftSideIcon = () => (
    <DatepickerGridBox>
      <DatepickerIconWrapper onMouseDown={this.setYearBack}>
        <Icon name="arrow-back-double" color="grey" />
      </DatepickerIconWrapper>
      <DatepickerIconWrapper onMouseDown={this.setMonthBack}>
        <Icon name="arrow-back" color="grey" />
      </DatepickerIconWrapper>
    </DatepickerGridBox>
  )

  renderRightSideIcon = () => (
    <DatepickerGridBox>
      <DatepickerIconWrapper onMouseDown={this.setMonthNext}>
        <Icon name="arrow-next" color="grey" />
      </DatepickerIconWrapper>
      <DatepickerIconWrapper onMouseDown={this.setYearNext}>
        <Icon name="arrow-next-double" color="grey" />
      </DatepickerIconWrapper>
    </DatepickerGridBox>
  )

  render() {
    const { label } = this.props;
    const {
      getFullDate,
      currentYear,
      currentMonth,
      isOpen,
    } = this.state;
    // console.log(moment('2016-07-01').format('LL'));
    return (
      <DatepickerContainer id="aries-datepicker">
        <TextField
          type="text"
          label={label || 'Select date'}
          value={getFullDate}
          removeFloatingLabel
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnInputBlur}
        />
        <DatepickerWrapper
          isOpen={isOpen}
          onBlur={this.handleOnDateBlur}
          onMouseDown={this.handleMouseDownDate}
          tabIndex="0"
        >
          <DatepickerSection border>
            <DatepickerContent justify="space-between">
              {this.renderLeftSideIcon()}
              <DatepickerContent>
                {months[currentMonth]}
                &nbsp;&nbsp;
                {currentYear}
              </DatepickerContent>
              {this.renderRightSideIcon()}
            </DatepickerContent>
          </DatepickerSection>
          <DatepickerSection border>
            <DatepickerContent>
              <DatepickerTable cellSpacing="0" role="grid">
                {this.renderTHead()}
                {this.renderTBody()}
              </DatepickerTable>
            </DatepickerContent>
          </DatepickerSection>
          <DatepickerSection>
            <DatepickerContent>
              <DatepickerTodayBtn
                type="button"
                onMouseDown={this.handleClickToday}
              >
                Today
              </DatepickerTodayBtn>
            </DatepickerContent>
          </DatepickerSection>
        </DatepickerWrapper>
      </DatepickerContainer>
    );
  }
}

type State = {
  previousFullDate: string,
  getFullDate: string,
  currentYear: string,
  currentMonth: number,
  firstDay: number,
  lastDate: number,
  isOpen: boolean,
  isDatepickerFocus: boolean,
}

export default Datepicker;
