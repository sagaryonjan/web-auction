import dayjs, { Dayjs } from 'dayjs';

export interface RemainingTime {
    seconds: string;
    minutes: string;
    hours: string;
    days: string;
}

export const defaultRemainingTime: RemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
};

export const getRemainingTimeUntilMsTimestamp = (timestampMs: number): RemainingTime => {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    if (timestampDayjs.isBefore(nowDayjs)) return defaultRemainingTime;

    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    };
}

const getRemainingSeconds = (nowDayjs: Dayjs, timestampDayjs: Dayjs) => {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

const getRemainingMinutes = (nowDayjs: Dayjs, timestampDayjs: Dayjs) => {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

const getRemainingHours = (nowDayjs: Dayjs, timestampDayjs: Dayjs) => {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

const getRemainingDays = (nowDayjs: Dayjs, timestampDayjs: Dayjs) => {
    const days = timestampDayjs.diff(nowDayjs, 'days');

    return padWithZeros(days, 2);
}

const padWithZeros = (number: number, minLength: number) => {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}