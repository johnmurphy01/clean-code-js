let number = ''
let pluralModifier = ''
let verb = ''

class GuessStatisticsMessage {
  make(candidate, count) {
    createPluralDependentMessageParts(count)
    return `There ${verb} ${number} ${candidate}${pluralModifier}`
  }

  createPluralDependentMessageParts(count) {
    if (count === 0) {
      thereAreNoLetters()
    } else if (count === 1) {
      thereIsOneLetter()
    } else {
      thereAreManyLetters(count)
    }
  }

  thereAreManyLetters(count) {
    number = count.toString()
    verb = 'are'
    pluralModifier = 's'
  }

  thereIsOneLetter() {
    number = '1'
    verb = 'is'
    pluralModifier = ''
  }

  thereAreNoLetters() {
    number = 'no'
    verb = 'are'
    pluralModifier = 's'
  }
}
