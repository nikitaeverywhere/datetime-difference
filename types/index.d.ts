// Definitions by: HoldYourWaffle <https://github.com/HoldYourWaffle>

export interface DateTimeDifference {
	years: number;
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	milliseconds: number;
}

export function datetimeDifference(date1: Date, date2: Date): DateTimeDifference;
export function formatDatetimeDiff(diff: DateTimeDifference, excludedKeys?: Array<keyof DateTimeDifference>, blacklist?: boolean, glue?: string): string;
// Technically valid but not the intended use
// export function formatDatetimeDiff<T extends { [key: string]: string }>(diff: T, excludedKeys?: (keyof T)[], blacklist?: boolean, glue?: string): string;
