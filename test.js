import test from "ava";
import equal from "deep-is";
import datetimeDiff from "./index.js";

test(`Works with two slightly different arguments in seconds`, (it) => {

    const result = datetimeDiff(
        new Date(2017, 0, 1, 0, 0, 0),
        new Date(2017, 0, 1, 0, 0, 1)
    );

    it.is(equal(result, {
        "years": 0,
        "months": 0,
        "days": 0,
        "hours": 0,
        "minutes": 0,
        "seconds": 1,
        "milliseconds": 0
    }), true);

});
