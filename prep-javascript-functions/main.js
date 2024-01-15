function addTwoNumbers (a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers (2,2);
console.log("addTwoNumbers Exercise:", addTwoNumbersResult);


function convertHoursToMinutes (hours){
return hours;
}

var convertHoursToMinutesResults = convertHoursToMinutes (120);
console.log(convertHoursToMinutesResults)

function getGreeting (name) {
  return "Hello" + ' ' +name + "!";
}

var getGreetingName = getGreeting ("World");
console.log(getGreetingName);

function addAndMultiplyBy5 (a,b) {
  return (a +b) * 5
}

var addAndMultiplyBy5Result = addAndMultiplyBy5 (10, 5);
console.log(addAndMultiplyBy5Result)

function multiplyAndDivideby5 (a,b) {
  return (a *b) / 5;
}
var multiplyAndDivideby5Result = multiplyAndDivideby5 (35, 10);
console.log(multiplyAndDivideby5Result);

function subtractTwoNumbers (a,b){
  return a -b;
}
var subtractTwoNumbersResult = subtractTwoNumbers (22, 7);
console.log(subtractTwoNumbersResult)

function getCircleCircumference (radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference (5);
console.log(getCircleCircumferenceResult)

function getFullName (firstName, lastName){
  return firstName+ " " + lastName;
}

var getFullNameResult = getFullName("Juan", "Ramirez");
console.log(getFullNameResult)

function cube (number) {
  return number **3;
}

var cubeResult = cube(5)
console.log(cubeResult)
