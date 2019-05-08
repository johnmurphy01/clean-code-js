// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  var s: number
  var t: number
  for (let j = 0; j < 34; j++) {
    s += (t[j] * 4) / 5
  }

  const realDays: number = 52
  const realDaysPerIdealDay: number = 4
  const NUMBER_OF_TASKS: number = 7
  const WORK_DAYS_PER_WEEK: number = 5
  const taskEstimate: number[] = [3, 5, 7]

  let sum: number = 0

  for (let j = 0; j < NUMBER_OF_TASKS; j++) {
    const realTaskDays = taskEstimate[j] * realDaysPerIdealDay
    const realTaskWeeks = realDays / WORK_DAYS_PER_WEEK
    sum += realTaskWeeks
  }
}
