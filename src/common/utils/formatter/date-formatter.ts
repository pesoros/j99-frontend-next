import dayjs from 'dayjs';

const DAYJS_TIME_STAMP_FORMAT = 'DD MMM YYYY HH:mm:ss';

export function toDateTimeStamp(date: number) {
  if (date) return dayjs.unix(date).format(DAYJS_TIME_STAMP_FORMAT);
  return dayjs().format(DAYJS_TIME_STAMP_FORMAT);
}

export function toDate(date: number) {
  if (date) return dayjs.unix(date).toDate();
  return dayjs().toDate();
}

export function toUnix(date: Date) {
  return dayjs(date).unix();
}

export function unixToDate(n: number) {
  return dayjs.unix(n).toDate();
}

export function dateToHumanReadable(date: Date) {
  return dayjs(date).format('DD MMM YYYY HH:mm:ss');
}

export function dateToISOString(date: Date) {
  return dayjs(date).toISOString();
}

export function dateToSimpleTimestamp(date: Date) {
  return dayjs(date).format('YYYY-MM-DD');
}

export function formatDate(date: Date, format: string) {
  return dayjs(date).format(format);
}
