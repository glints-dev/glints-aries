import moment from 'moment';
export default class Unit {
    static numToRem: (key: number) => string;
    static formatDate: (date: Date) => string;
    static deltaDate: (date: moment.Moment) => number;
}
