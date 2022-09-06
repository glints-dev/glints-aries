import * as React from 'react';
declare class Datepicker extends React.Component<Props, State> {
    constructor(props: Props);
    handleOnFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleOnInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleOnDateBlur: (e: React.FocusEvent<HTMLDivElement>) => void;
    handleMouseDownDate: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleClickToday: () => void;
    handleOnClickSelectedDate: (date: number) => void;
    handleShowMonths: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleChooseMonth: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, month: string, tempMonth: string[]) => void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        isOpen: boolean;
        previousFullDate?: undefined;
    } | {
        previousFullDate: string;
        isOpen?: undefined;
    };
    setYearBack: () => void;
    setYearNext: () => void;
    setMonthBack: () => void;
    setMonthNext: () => void;
    renderTHead: () => JSX.Element;
    renderTBody: () => JSX.Element;
    renderFirstWeekRow: () => JSX.Element;
    renderDayRow: (array?: React.ReactNode[], startingCount?: number) => React.ReactNode;
    renderOffSetDay: () => JSX.Element[];
    renderLeftSideIcon: (showMonths: boolean) => JSX.Element;
    renderRightSideIcon: (showMonths: boolean) => JSX.Element;
    renderShowMonths: () => JSX.Element;
    render(): JSX.Element;
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
