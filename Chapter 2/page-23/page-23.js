for (let j = 0; j < 34; j++) {
  s += (t[j] * 4) / 5
}

const realDaysPerIdealDay = 4
const WORK_DAYS_PER_WEEK = 5
const sum = 0

for (let j = 0; j < NUMBER_OF_TASKS; j++) {
  const realTaskDays = taskEstimate[j] * realDaysPerIdealDay
  const realTaskWeeks = realDays / WORK_DAYS_PER_WEEK
  sum += realTaskWeeks
}
