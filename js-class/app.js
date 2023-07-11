const age_str = prompt("how old are you?");

console.log("type of ", age_str, " is ", typeof(age_str))

age_int = parseInt(age_str)

console.log("type of ", age_int, " is ", typeof(age_int))

if (isNaN(age_int)) {
    console.log("NaN")
} else {
    console.log("not NaN")
}