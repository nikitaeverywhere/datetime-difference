# [datetime-difference](https://www.npmjs.com/package/datetime-difference)

[![npm](https://img.shields.io/npm/v/datetime-difference.svg)](https://www.npmjs.com/package/datetime-difference)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](http://npm.anvaka.com/#/view/2d/datetime-difference)
[![Build Status](https://travis-ci.org/ZitRos/datetime-difference.svg?branch=master)](https://travis-ci.org/ZitRos/datetime-difference)
[![License](https://img.shields.io/github/license/zitros/datetime-difference.svg)](LICENSE)
[![File Size](http://img.badgesize.io/ZitRos/datetime-difference/master/index.js?)](https://github.com/ZitRos/datetime-difference/blob/master/index.js)
[![File Size (GZip)](http://img.badgesize.io/ZitRos/datetime-difference/master/index.js?compression=gzip&)](https://github.com/ZitRos/datetime-difference/blob/master/index.js)

A lightweight module which finds the difference between two dates in the human-friendly format. Works almost exactly like [moment's](https://www.npmjs.com/package/moment) `duration(...)` do, but has no dependencies on any libraries — the code is fast and minimal!

Examples
--------

```javascript
import datetimeDifference from "datetime-difference";

const date1 = new Date("12/17/2016, 05:23:55 PM");
const date2 = new Date("2/21/2017, 07:12:42 AM");

const result = datetimeDifference(date1, date2); /* result is {
    "years": 0,
    "months": 2,
    "days": 3,
    "hours": 13,
    "minutes": 48,
    "seconds": 47,
    "milliseconds": 0
} */

const date3 = new Date("1/1/2016, 00:00:00 AM");
const date4 = new Date("1/1/2026, 00:00:00 AM");

const result2 = datetimeDifference(date3, date4); /* result2 is {
    "years": 10,
    "months": 0,
    "days": 0,  // 0, because you don't think about leap years as 
    "hours": 0, // well as about daylight time when counting dates!
    "minutes": 0,
    "seconds": 0,
    "milliseconds": 0
} */

// Another example: get the result in readable format by parsing the resulting object
const readme = Object.keys(result)
    .filter(k => !!result[k])
    .map(k => `${ result[k] } ${ k }`)
    .join(", ");
// readme is "2 months, 3 days, 13 hours, 48 minutes, 47 seconds"

// Yet another example of formatting (using the string-format library as an example):
import format from "string-format";
const string = format("{days} days left", result);
// string is "3 days left"
```

Installation
------------

The `datetime-difference` is shipped in a form of JavaScript module. Install it from npm:

```bash
npm install --save datetime-difference
```

Licence
-------

[MIT](LICENSE) © [Nikita Savchenko](https://nikita.tk)
