"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _DatepickerStyle = require("./DatepickerStyle");

var _TextField = _interopRequireDefault(require("../TextField"));

var _components = require("../../General/Icon/components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-plusplus */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var Datepicker = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Datepicker, _React$Component);

  function Datepicker(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleOnFocus = function (e) {
      var isFocus = e.currentTarget === document.activeElement;

      _this.setState({
        isOpen: isFocus,
        showMonths: false
      });
    };

    _this.handleOnInputBlur = function (e) {
      var isBlur = e.currentTarget === document.activeElement;

      _this.setState({
        isOpen: isBlur
      });
    };

    _this.handleOnDateBlur = function (e) {
      var isBlur = e.currentTarget === document.activeElement;

      _this.setState({
        isOpen: isBlur,
        isDatepickerFocus: false
      });
    };

    _this.handleMouseDownDate = function (e) {
      e.currentTarget.focus();

      _this.setState({
        isDatepickerFocus: true
      });
    };

    _this.handleClickToday = function () {
      _this.setState({
        getFullDate: (0, _moment["default"])(new Date()).format('LL'),
        isOpen: false
      });
    };

    _this.handleOnClickSelectedDate = function (date) {
      var _this$state = _this.state,
          monthValue = _this$state.monthValue,
          currentYear = _this$state.currentYear;
      var tempDate = Number(date.toString().length) === 1 ? "0" + date : "" + date;
      var tempMonth = Number((monthValue + 1).toString().length) === 1 ? "0" + (monthValue + 1) : "" + (monthValue + 1);
      var activeDate = "" + currentYear + monthValue + date;

      _this.setState({
        getFullDate: (0, _moment["default"])(currentYear + "-" + tempMonth + "-" + tempDate).format('LL'),
        currentActiveDate: activeDate,
        isOpen: false
      });
    };

    _this.handleShowMonths = function (e) {
      e.preventDefault();

      _this.setState({
        showMonths: true
      });
    };

    _this.handleChooseMonth = function (e, month, tempMonth) {
      e.preventDefault();

      _this.setState({
        monthValue: tempMonth.indexOf(month),
        showMonths: false
      });
    };

    _this.setYearBack = function () {
      var currentYear = _this.state.currentYear;
      var currentMonth = new Date().getMonth();

      _this.setState({
        currentYear: Number(currentYear) - 1,
        firstDay: new Date(Number(currentYear) - 1, currentMonth, 1).getDay(),
        lastDate: new Date(Number(currentYear) - 1, currentMonth, 0).getDate()
      });
    };

    _this.setYearNext = function () {
      var currentYear = _this.state.currentYear;
      var currentMonth = new Date().getMonth();

      _this.setState({
        currentYear: Number(currentYear) + 1,
        firstDay: new Date(Number(currentYear) + 1, currentMonth, 1).getDay(),
        lastDate: new Date(Number(currentYear) + 1, currentMonth, 0).getDate()
      });
    };

    _this.setMonthBack = function () {
      var _this$state2 = _this.state,
          monthValue = _this$state2.monthValue,
          currentYear = _this$state2.currentYear;
      var checkCurrentMonth = monthValue;

      if (checkCurrentMonth > 0) {
        _this.setState({
          monthValue: monthValue - 1,
          firstDay: new Date(currentYear, monthValue, 1).getDay(),
          lastDate: new Date(currentYear, monthValue, 0).getDate()
        });
      } else {
        _this.setYearBack();

        _this.setState({
          monthValue: 11
        });
      }
    };

    _this.setMonthNext = function () {
      var _this$state3 = _this.state,
          monthValue = _this$state3.monthValue,
          currentYear = _this$state3.currentYear;
      var checkCurrentMonth = monthValue;

      if (checkCurrentMonth < 11) {
        _this.setState({
          monthValue: monthValue + 1,
          firstDay: new Date(currentYear, monthValue + 2, 1).getDay(),
          lastDate: new Date(currentYear, monthValue + 2, 0).getDate()
        });
      } else {
        _this.setYearNext();

        _this.setState({
          monthValue: 0
        });
      }
    };

    _this.renderTHead = function () {
      var days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
        role: "row"
      }, days.map(function (day) {
        return /*#__PURE__*/React.createElement(_DatepickerStyle.Th, {
          key: day,
          role: "columnheader",
          title: day
        }, /*#__PURE__*/React.createElement(_DatepickerStyle.HoverContent, null, day));
      })));
    };

    _this.renderTBody = function () {
      var content = [];
      content.push(_this.renderFirstWeekRow());
      content.push(_this.renderDayRow());
      return /*#__PURE__*/React.createElement("tbody", null, content);
    };

    _this.renderFirstWeekRow = function () {
      var _this$state4 = _this.state,
          firstDay = _this$state4.firstDay,
          currentMonth = _this$state4.currentMonth,
          currentYear = _this$state4.currentYear,
          currentActiveDate = _this$state4.currentActiveDate;
      var tempArray = [];
      tempArray = _this.renderOffSetDay();

      var _loop = function _loop(i) {
        tempArray.push( /*#__PURE__*/React.createElement(_DatepickerStyle.Td, {
          role: "gridcell",
          key: i,
          onMouseDown: function onMouseDown() {
            return _this.handleOnClickSelectedDate(i);
          }
        }, /*#__PURE__*/React.createElement(_DatepickerStyle.HoverContent, {
          index: "" + currentYear + currentMonth + i,
          currentActiveDate: "" + currentYear + currentMonth + i === currentActiveDate && currentActiveDate,
          hoverAble: true
        }, i)));
      };

      for (var i = 1; i <= 7 - firstDay; i++) {
        _loop(i);
      }

      return /*#__PURE__*/React.createElement("tr", {
        role: "row",
        key: "row1"
      }, tempArray);
    };

    _this.renderDayRow = function (array, startingCount) {
      if (array === void 0) {
        array = [];
      }

      if (startingCount === void 0) {
        startingCount = 0;
      }

      var _this$state5 = _this.state,
          firstDay = _this$state5.firstDay,
          lastDate = _this$state5.lastDate,
          currentMonth = _this$state5.currentMonth,
          currentYear = _this$state5.currentYear,
          currentActiveDate = _this$state5.currentActiveDate;
      var functionArray = array;
      var functionStartingCount = startingCount === 0 ? 8 - firstDay : startingCount;
      var tempArray = [];
      var isLastDate = false;

      var _loop2 = function _loop2(i) {
        if (i <= lastDate) {
          tempArray.push( /*#__PURE__*/React.createElement(_DatepickerStyle.Td, {
            role: "gridcell",
            key: i,
            onMouseDown: function onMouseDown() {
              return _this.handleOnClickSelectedDate(i);
            }
          }, /*#__PURE__*/React.createElement(_DatepickerStyle.HoverContent, {
            index: "" + currentYear + currentMonth + i,
            currentActiveDate: "" + currentYear + currentMonth + i === currentActiveDate && currentActiveDate,
            hoverAble: true
          }, i)));
        } else {
          tempArray.push( /*#__PURE__*/React.createElement(_DatepickerStyle.Td, {
            key: i
          }));
          isLastDate = true;
        }
      };

      for (var i = functionStartingCount; i < functionStartingCount + 7; i++) {
        _loop2(i);
      }

      functionArray.push( /*#__PURE__*/React.createElement("tr", {
        role: "row",
        key: "row" + functionArray.length
      }, tempArray));

      if (isLastDate) {
        return functionArray;
      }

      return _this.renderDayRow(functionArray, functionStartingCount + 7);
    };

    _this.renderOffSetDay = function () {
      var firstDay = _this.state.firstDay;
      var tempArray = [];

      for (var i = firstDay; i >= 1; i--) {
        tempArray.push( /*#__PURE__*/React.createElement(_DatepickerStyle.Td, {
          key: "offset" + i
        }));
      }

      return tempArray;
    };

    _this.renderLeftSideIcon = function (showMonths) {
      return /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerNavigation, null, /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        onMouseDown: _this.setYearBack
      }, /*#__PURE__*/React.createElement(_components.ArrowBackDoubleIcon, {
        color: "grey"
      })), !showMonths && /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        needMargin: true,
        onMouseDown: _this.setMonthBack
      }, /*#__PURE__*/React.createElement(_components.ArrowBackIcon, {
        color: "grey"
      })));
    };

    _this.renderRightSideIcon = function (showMonths) {
      return /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerNavigation, null, !showMonths && /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        needMargin: true,
        onMouseDown: _this.setMonthNext
      }, /*#__PURE__*/React.createElement(_components.ArrowNextIcon, {
        color: "grey"
      })), /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        onMouseDown: _this.setYearNext
      }, /*#__PURE__*/React.createElement(_components.ArrowNextDoubleIcon, {
        color: "grey"
      })));
    };

    _this.renderShowMonths = function () {
      var tempMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var rows = [];

      for (var i = 0; i < 4; i++) {
        rows.push( /*#__PURE__*/React.createElement("tr", {
          role: "row",
          key: tempMonth[i]
        }, tempMonth.slice(i * 3, 3 + i * 3).map(function (data) {
          return /*#__PURE__*/React.createElement(_DatepickerStyle.Td, {
            role: "gridcell",
            key: data
          }, /*#__PURE__*/React.createElement(_DatepickerStyle.HoverContent, {
            hoverAble: true,
            biggerSize: true,
            onMouseDown: function onMouseDown(e) {
              return _this.handleChooseMonth(e, data, tempMonth);
            }
          }, data));
        })));
      }

      return /*#__PURE__*/React.createElement("tbody", null, rows);
    };

    var _currentYear = new Date().getFullYear();

    var _currentMonth = new Date().getMonth();

    _this.state = {
      previousFullDate: '',
      getFullDate: '',
      currentActiveDate: '',
      currentYear: _currentYear,
      currentMonth: _currentMonth,
      monthValue: _currentMonth,
      firstDay: new Date(_currentYear, _currentMonth + 1, 1).getDay(),
      lastDate: new Date(_currentYear, _currentMonth + 1, 0).getDate(),
      isOpen: false,
      isDatepickerFocus: false,
      showMonths: false
    };
    return _this;
  }

  Datepicker.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isDatepickerFocus && prevState.previousFullDate === prevState.getFullDate) {
      return {
        isOpen: true
      };
    }

    if (prevState.previousFullDate !== prevState.getFullDate) {
      return {
        previousFullDate: prevState.getFullDate
      };
    }

    return null;
  };

  var _proto = Datepicker.prototype;

  _proto.render = function render() {
    var label = this.props.label;
    var _this$state6 = this.state,
        getFullDate = _this$state6.getFullDate,
        currentYear = _this$state6.currentYear,
        monthValue = _this$state6.monthValue,
        isOpen = _this$state6.isOpen,
        showMonths = _this$state6.showMonths;
    return /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerContainer, {
      className: "aries-datepicker"
    }, /*#__PURE__*/React.createElement(_TextField["default"], {
      type: "text",
      label: label || 'Select date',
      value: getFullDate,
      removeFloatingLabel: true,
      disableTyping: true,
      onFocus: this.handleOnFocus,
      onBlur: this.handleOnInputBlur
    }), /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerWrapper, {
      isOpen: isOpen,
      onBlur: this.handleOnDateBlur,
      onMouseDown: this.handleMouseDownDate,
      tabIndex: 0
    }, /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerSection, {
      border: true
    }, /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerContent, {
      justify: "space-between"
    }, this.renderLeftSideIcon(showMonths), /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerContent, null, !showMonths && /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerMonthYearBtn, {
      onMouseDown: this.handleShowMonths
    }, months[monthValue]), /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerMonthYearBtn, null, currentYear)), this.renderRightSideIcon(showMonths))), /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerSection, {
      border: true
    }, /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerContent, null, /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerTable, {
      cellSpacing: "0",
      role: "grid"
    }, !showMonths ? /*#__PURE__*/React.createElement(React.Fragment, null, this.renderTHead(), this.renderTBody()) : this.renderShowMonths()))), /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerSection, null, /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerContent, null, /*#__PURE__*/React.createElement(_DatepickerStyle.DatepickerTodayBtn, {
      type: "button",
      onMouseDown: this.handleClickToday
    }, "Today")))));
  };

  return Datepicker;
}(React.Component);

var _default = Datepicker;
exports["default"] = _default;