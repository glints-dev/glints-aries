/* eslint-disable no-plusplus */
import * as React from 'react';

import * as moment from 'moment';

import {
  DatepickerContainer,
  DatepickerWrapper,
  DatepickerSection,
  DatepickerContent,
  DatepickerMonthYearBtn,
  DatepickerIconWrapper,
  DatepickerTable,
  Td,
  Th,
  HoverContent,
  DatepickerNavigation,
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

class Datepicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    this.state = {
      previousFullDate: '',
      getFullDate: '',
      currentActiveDate: '',
      currentYear,
      currentMonth,
      monthValue: currentMonth,
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
      showMonths: false,
    };
  }

  handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const isFocus = e.currentTarget === document.activeElement;
    this.setState({
      isOpen: isFocus,
      showMonths: false,
    });
  }

  handleOnInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const isBlur = e.currentTarget === document.activeElement;
    this.setState({ isOpen: isBlur });
  }

  handleOnDateBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const isBlur = e.currentTarget === document.activeElement;
    this.setState({
      isOpen: isBlur,
      isDatepickerFocus: false,
    });
  }

  handleMouseDownDate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.focus();
    this.setState({ isDatepickerFocus: true });
  }

  handleClickToday = () => {
    this.setState({
      getFullDate: moment(new Date()).format('LL'),
      isOpen: false,
    });
  }

  handleOnClickSelectedDate = (date: number) => {
    const { monthValue, currentYear } = this.state;
    const tempDate = Number(date.toString().length) === 1 ? `0${date}` : `${date}`;
    const tempMonth = Number((monthValue + 1).toString().length) === 1 ? `0${monthValue + 1}` : `${monthValue + 1}`;
    const activeDate = `${currentYear}${monthValue}${date}`;

    this.setState({
      getFullDate: moment(`${currentYear}-${tempMonth}-${tempDate}`).format('LL'),
      currentActiveDate: activeDate,
      isOpen: false,
    });
  }

  handleShowMonths = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    this.setState({ showMonths: true });
  }

  handleChooseMonth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, month: string, tempMonth: string[]) => {
    e.preventDefault();
    this.setState({
      monthValue: tempMonth.indexOf(month),
      showMonths: false,
    });
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.isDatepickerFocus && prevState.previousFullDate === prevState.getFullDate) {
      return { isOpen: true };
    }

    if (prevState.previousFullDate !== prevState.getFullDate) {
      return { previousFullDate: prevState.getFullDate };
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
    const { monthValue, currentYear } = this.state;
    const checkCurrentMonth = monthValue;
    if (checkCurrentMonth > 0) {
      this.setState({
        monthValue: monthValue - 1,
        firstDay: new Date(
          currentYear,
          monthValue,
          1
        ).getDay(),
        lastDate: new Date(
          currentYear,
          monthValue,
          0
        ).getDate(),
      });
    } else {
      this.setYearBack();
      this.setState({ monthValue: 11 });
    }
  }

  setMonthNext = () => {
    const { monthValue, currentYear } = this.state;
    const checkCurrentMonth = monthValue;

    if (checkCurrentMonth < 11) {
      this.setState({
        monthValue: monthValue + 1,
        firstDay: new Date(
          currentYear,
          monthValue + 2,
          1
        ).getDay(),
        lastDate: new Date(
          currentYear,
          monthValue + 2,
          0
        ).getDate(),
      });
    } else {
      this.setYearNext();
      this.setState({ monthValue: 0 });
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
    const {
      firstDay,
      currentMonth,
      currentYear,
      currentActiveDate,
    } = this.state;
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
            index={`${currentYear}${currentMonth}${i}`}
            currentActiveDate={`${currentYear}${currentMonth}${i}` === currentActiveDate && currentActiveDate}
            hoverAble
          >
            {i}
          </HoverContent>
        </Td>
      );
    }
    return <tr role="row" key="row1">{tempArray}</tr>;
  }

  renderDayRow = (array: React.ReactNodeArray = [], startingCount = 0): React.ReactNode => {
    const {
      firstDay,
      lastDate,
      currentMonth,
      currentYear,
      currentActiveDate,
    } = this.state;
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
              index={`${currentYear}${currentMonth}${i}`}
              currentActiveDate={`${currentYear}${currentMonth}${i}` === currentActiveDate && currentActiveDate}
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

  renderLeftSideIcon = (showMonths: boolean) => (
    <DatepickerNavigation>
      <DatepickerIconWrapper onMouseDown={this.setYearBack}>
        <Icon name="arrow-back-double" color="grey" />
      </DatepickerIconWrapper>
      {!showMonths &&
        <DatepickerIconWrapper needMargin onMouseDown={this.setMonthBack}>
          <Icon name="arrow-back" color="grey" />
        </DatepickerIconWrapper>
      }
    </DatepickerNavigation>
  )

  renderRightSideIcon = (showMonths: boolean) => (
    <DatepickerNavigation>
      {!showMonths &&
        <DatepickerIconWrapper needMargin onMouseDown={this.setMonthNext}>
          <Icon name="arrow-next" color="grey" />
        </DatepickerIconWrapper>
      }
      <DatepickerIconWrapper onMouseDown={this.setYearNext}>
        <Icon name="arrow-next-double" color="grey" />
      </DatepickerIconWrapper>
    </DatepickerNavigation>
  )

  renderShowMonths = () => {
    const tempMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const rows = [];
    for (let i = 0; i < 4; i++) {
      rows.push(
        <tr role="row" key={tempMonth[i]}>
          {tempMonth.slice(i * 3, 3 + (i * 3)).map(data => (
            <Td role="gridcell" key={data}>
              <HoverContent hoverAble biggerSize onMouseDown={e => this.handleChooseMonth(e, data, tempMonth)}>
                {data}
              </HoverContent>
            </Td>
          ))}
        </tr>
      );
    }

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }

  render() {
    const { label } = this.props;
    const {
      getFullDate,
      currentYear,
      monthValue,
      isOpen,
      showMonths,
    } = this.state;

    return (
      <DatepickerContainer className="aries-datepicker">
        <TextField
          type="text"
          label={label || 'Select date'}
          value={getFullDate}
          removeFloatingLabel
          disableTyping
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnInputBlur}
        />
        <DatepickerWrapper
          isOpen={isOpen}
          onBlur={this.handleOnDateBlur}
          onMouseDown={this.handleMouseDownDate}
          tabIndex={0}
        >
          <DatepickerSection border>
            <DatepickerContent justify="space-between">
              {this.renderLeftSideIcon(showMonths)}
              <DatepickerContent>

                {!showMonths &&
                  <DatepickerMonthYearBtn onMouseDown={this.handleShowMonths}>
                    {months[monthValue]}
                  </DatepickerMonthYearBtn>
                }

                <DatepickerMonthYearBtn>
                  {currentYear}
                </DatepickerMonthYearBtn>
              </DatepickerContent>
              {this.renderRightSideIcon(showMonths)}
            </DatepickerContent>
          </DatepickerSection>
          <DatepickerSection border>
            <DatepickerContent>
              <DatepickerTable cellSpacing="0" role="grid">
                {!showMonths
                  ? (
                    <React.Fragment>
                      {this.renderTHead()}
                      {this.renderTBody()}
                    </React.Fragment>
                  )
                  : this.renderShowMonths()
                }
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

interface Props {
  label?: string;
}

interface State {
  previousFullDate: string;
  getFullDate: string;
  currentActiveDate: string;
  currentYear: number;
  currentMonth: number;
  monthValue: number;
  firstDay: number;
  lastDate: number;
  isOpen: boolean;
  isDatepickerFocus: boolean;
  showMonths: boolean;
}

export default Datepicker;
