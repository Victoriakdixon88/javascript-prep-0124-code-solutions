/* Your JS goes in this file */
const age = 35;

function isAdult (age) {
if (age < 18) {
  return false;
}
if (age > 18){
  return true;
}
}

console.log(isAdult(age))


const student1Score = 99

function didStudentPass (score) {
  if (score >= 70) {
    return true;
  }
  else {
    return false;
  }
}

console.log(didStudentPass(99))

const student2Score =89

function gradeCalculator (score) {
  if (score < 60){
    return 'F';
  }

if (score < 70) {
  return 'D';
}

if (score < 80) {
  return 'C'
}

if (score < 90) {
  return 'B'
}

else if (score <100){
  return 'A'
}
else {
  return 'A++'
}
}

console.log(gradeCalculator(89))


const season = 'spring'

function seasonMessenger (season) {
  if (season === 'summer') {
    return "it's hot today";
  }

  else if (season === 'spring') {
    return "the flowers are blooming";
  }

  if (season === 'autumn') {
    return "the leaves are changing colors";
  }

  if (season === 'winter') {
    return "it's cold today"
  }

  else {
    return "please enter a valid season"
  }
}

console.log(seasonMessenger("spring"))


const dayOfTheWeek = 'saturday'

function dayDetector (dayOfTheWeek) {
  if (dayOfTheWeek === "saturday" || dayOfTheWeek === "sunday")
  return "have a good weekend!"

  else {
    return "its a weekday"
  }
}
console.log(dayDetector('saturday'))
