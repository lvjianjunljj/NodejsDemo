enum DateParameterValue {
    Test = "@@TestDate@@",
    Next = "@@NextDate@@"
}

console.log(1234)
let testStr = "@@TestDate@@"
console.log(testStr === DateParameterValue.Test)
const DateParameterValueItemProps =
    Object.keys(DateParameterValue).map(key =>
        ({ text: DateParameterValue[key], value: DateParameterValue[key], key: DateParameterValue[key] }));
console.log(DateParameterValueItemProps.slice())

const dates =
    Object.values(DateParameterValue).map(d => d.toString())
const dates2 = Object.keys(DateParameterValue).map(key => DateParameterValue[key])

console.log(dates.slice())
// console.log(testStr in dates.slice())
console.log(dates)
console.log(dates.includes(testStr + ","))
console.log(dates.includes(testStr))
console.log(dates2.includes(testStr))

console.log(["@@TestDate@@", "@@NextDate@@"].includes(testStr))
