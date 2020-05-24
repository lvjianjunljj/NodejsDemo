
judge = false;
a = (judge && "1234") || "5678"
console.debug(a)
b = "";
console.debug(b != "")

list = [
    { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
    { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
    { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
    { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
    { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
    { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
    { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
    { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" }
]
var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};


console.log(groupBy(['one', 'two', 'three'], 'length'));
console.log(groupBy(list, 'Phase'));
Object.entries(groupBy(list, 'Phase')).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
});




var group = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    });
};
var group_result = list.reduce(function (rv, x) {
    (rv[x["Phase"]] = rv[x["Phase"]] || []).push(x);
    return rv;
}, {});
Object.entries(group_result).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
});

console.log();
var phases = list.map(p => p["Phase"] + p["Step"]);
console.log(phases);
group_result = list.reduce((previous, current, index) => {

    (previous[phases[index]] = previous[phases[index]] || []).push(current);
    return previous;
}, {});
Object.entries(group_result).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
});

console.log();
group_result = list.reduce((previous, current) => {
    phase = current["Phase"] + current["Step"];
    (previous[phase] = previous[phase] || []).push(current);
    return previous;
}, {});
Object.entries(group_result).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
});
