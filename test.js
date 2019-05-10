import test from "ava";
import datetimeDiff from "./index.js";

const expect = (expectedValue) => Object.assign({
    "years": 0,
    "months": 0,
    "days": 0,
    "hours": 0,
    "minutes": 0,
    "seconds": 0,
    "milliseconds": 0
}, expectedValue);

test(`Works with two slightly different dates in seconds`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2017, 0, 1, 0, 0, 0)),
        new Date(Date.UTC(2017, 0, 1, 0, 0, 1))
    );

    it.deepEqual(result, expect({ seconds: 1 }));

});

test(`Works with two slightly different dates in minutes`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2017, 0, 1, 0, 0, 0)),
        new Date(Date.UTC(2017, 0, 1, 0, 1, 0))
    );

    it.deepEqual(result, expect({ minutes: 1 }));

});

test(`Works with two slightly different dates in hours`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2017, 0, 1, 1, 0, 0)),
        new Date(Date.UTC(2017, 0, 1, 3, 0, 0))
    );

    it.deepEqual(result, expect({ hours: 2 }));

});

test(`Works with two slightly different dates in days`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2017, 0, 1, 1, 0, 0)),
        new Date(Date.UTC(2017, 0, 3, 1, 0, 0))
    );

    it.deepEqual(result, expect({ days: 2 }));

});

test(`Works with two slightly different dates in months`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2017, 3, 1, 1, 0, 0)),
        new Date(Date.UTC(2017, 5, 1, 1, 0, 0))
    );

    it.deepEqual(result, expect({ months: 2 }));

});

test(`Works with two slightly different dates in years`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2013, 3, 1, 1, 0, 0)),
        new Date(Date.UTC(2019, 3, 1, 1, 0, 0))
    );

    it.deepEqual(result, expect({ years: 6 }));

});

test(`Works with two slightly different dates in milliseconds`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2013, 3, 1, 1, 0, 0, 500)),
        new Date(Date.UTC(2013, 3, 1, 1, 0, 0, 700))
    );

    it.deepEqual(result, expect({ milliseconds: 200 }));

});

test(`Works with inverted date case`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2013, 3, 1, 1, 0, 0, 500)),
        new Date(Date.UTC(2013, 3, 1, 1, 0, 0, 100))
    );

    it.deepEqual(result, expect({ milliseconds: 400 }));

});

test(`Works with inverted date complex case`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2013, 3, 1, 1, 0, 0, 500)),
        new Date(Date.UTC(2013, 5, 1, 1, 30, 0, 100))
    );

    it.deepEqual(result, expect({
        milliseconds: 600,
        seconds: 59,
        minutes: 29,
        months: 2
    }));

});

test(`New year case`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 11, 30, 12, 0, 0)),
        new Date(Date.UTC(2017, 0, 2, 6, 0, 59, 25))
    );

    it.deepEqual(result, expect({
        days: 2,
        hours: 18,
        seconds: 59,
        milliseconds: 25
    }));

});

test(`February case`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2017, 1, 28, 12, 0, 0)),
        new Date(Date.UTC(2017, 2, 1, 0, 0, 0))
    );

    it.deepEqual(result, expect({
        hours: 12
    }));

});

test(`Quarter case`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2017, 2, 3, 14, 0, 0)),
        new Date(Date.UTC(2017, 5, 4, 12, 0, 0))
    );

    it.deepEqual(result, expect({
        months: 3,
        hours: 22
    }));

});

test(`Complex new year case`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 11, 17, 3, 23, 55)),
        new Date(Date.UTC(2017, 0, 14, 7, 24, 11))
    );

    it.deepEqual(result, expect({
        days: 28,
        hours: 4,
        seconds: 16
    }));

});

test(`Years far difference`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 1, 1)),
        new Date(Date.UTC(2026, 1, 1))
    );

    it.deepEqual(result, expect({
        years: 10
    }));

});

test(`Leap year close difference`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 1, 28)),
        new Date(Date.UTC(2016, 2, 1))
    );

    it.deepEqual(result, expect({
        days: 2
    }));

});

test(`Leap year one-month difference`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 1, 25)),
        new Date(Date.UTC(2016, 2, 25))
    );

    it.deepEqual(result, expect({
        months: 1
    }));

});

test(`Just one-month difference`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 3, 15)),
        new Date(Date.UTC(2016, 4, 15))
    );

    it.deepEqual(result, expect({
        months: 1
    }));

});

test(`One month and some days difference`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 3, 15)),
        new Date(Date.UTC(2016, 4, 17))
    );

    it.deepEqual(result, expect({
        months: 1,
        days: 2
    }));

});

test(`One month and some days difference on another month`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 4, 15)),
        new Date(Date.UTC(2016, 5, 17))
    );

    it.deepEqual(result, expect({
        months: 1,
        days: 2
    }));

});

test(`~ 364 days difference`, (it) => {

    const result = datetimeDiff(
        new Date(Date.UTC(2016, 4, 15)),
        new Date(Date.UTC(2017, 4, 14))
    );

    it.deepEqual(result, expect({
        days: 29,
        months: 11
    }));

});

test(`Dates before and after a DST change`, (it) => {
    // This test can only fail when the local time is on a timezone with daylight saving time in effect
    // It's not really reliable, but it's good for documentation purposes.
    const result = datetimeDiff(
        new Date(1540807205042),
        new Date(1540360805042)
    );

    it.deepEqual(result, expect({
        days: 5,
        hours: 4
    }))
});
