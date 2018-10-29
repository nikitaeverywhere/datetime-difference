"use strict";

module.exports = function datetimeDiff (from, to) {

    const min = [-Infinity, 1, 1, 0, 0, 0, 0];
    const max = [Infinity, 12, null, 24, 60, 60, 1000];

    if (to < from) {
        const temp = to;
        to = from;
        from = temp;
    }

    let start = [from.getUTCFullYear(), from.getUTCMonth() + 1, from.getUTCDate(), from.getUTCHours(),
            from.getUTCMinutes(), from.getUTCSeconds(), from.getUTCMilliseconds()],
        end = [to.getUTCFullYear(), to.getUTCMonth() + 1, to.getUTCDate(), to.getUTCHours(), to.getUTCMinutes(),
            to.getUTCSeconds(), to.getUTCMilliseconds()],
        i = 7;

    const dec = (i) => {
        --end[i];
        while (end[i] < min[i]) {
            const r = dec(i - 1);
            end[i] += max[i] === null
                ? r
                : max[i];
        }
        return i === 1 ? new Date(Date.UTC(end[0], end[1], 0)).getUTCDate() : max[i + 1];
    };

    while (i > 0) {
        --i;
        let diff = end[i] - start[i];
        while (diff < 0) {
            end[i] += dec(i - 1);
            diff = end[i] - start[i];
        }
        end[i] = diff;
    }

    return {
        years: end[0],
        months: end[1],
        days: end[2],
        hours: end[3],
        minutes: end[4],
        seconds: end[5],
        milliseconds: end[6]
    };

};
