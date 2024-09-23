const dayjs = require("dayjs")
// plugins
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

// Exercise
const calcBirthday = (birthday) => {
  const currentAge = dayjs().diff(dayjs(birthday), "year")
  const nextBirthday = dayjs(birthday).year(dayjs().year(), "year")
  const diffDaysBirthdayToNow = nextBirthday.diff(dayjs(), "day")

  console.log("Sua idade atual é " + currentAge + " anos!")

  if (diffDaysBirthdayToNow >= 0) {
    console.log("Você faz aniversário em: " + nextBirthday.format("MM/DD/YYYY"))
    console.log("Faltam " + diffDaysBirthdayToNow + " dias para seu aniversário!")
  } else {
    console.log("Você faz aniversário em: " + nextBirthday.add(1, "year").format("MM/DD/YYYY"))
    console.log("Faltam " + (diffDaysBirthdayToNow + 365) + " dias para seu aniversário!")
  }

  return {
    birthday,
    age: currentAge,
    nextBirthday: diffDaysBirthdayToNow >= 0 ? nextBirthday.format("MM/DD/YYYY") : nextBirthday.add(1, "year").format("MM/DD/YYYY"),
    daysNextBirthday: diffDaysBirthdayToNow >= 0 ? diffDaysBirthdayToNow : diffDaysBirthdayToNow + 365
  }
}

console.log(calcBirthday("09/05/1985"))
