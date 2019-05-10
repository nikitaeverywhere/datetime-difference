// TypeScript Version: 2.8

import { datetimeDifference, formatDatetimeDiff, DateTimeDifference } from 'datetime-difference';

const diff: DateTimeDifference = datetimeDifference(new Date(), new Date());

console.log(formatDatetimeDiff(diff));
console.log(formatDatetimeDiff(diff, ['years']));
console.log(formatDatetimeDiff(diff, ['years'], true));
console.log(formatDatetimeDiff(diff, ['years'], false, ' | '));

console.log(diff.days);
console.log(diff.hours);
console.log(diff.milliseconds);
console.log(diff.minutes);
console.log(diff.months);
console.log(diff.seconds);
console.log(diff.years);
