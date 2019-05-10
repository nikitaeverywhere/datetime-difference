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

export default function datetimeDifference(date1: Date, date2: Date): DateTimeDifference;
