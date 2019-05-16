// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  function printGuessStatistics(candidate: string, count: number) {
    var number: string
    var pluralModifier: string
    var verb: string

    if (count === 0) {
      number = 'no'
      verb = 'are'
      pluralModifier = 's'
    } else if (count === 1) {
      number = '1'
      verb = 'is'
      pluralModifier = ''
    } else {
      number = count.toString()
      verb = 'are'
      pluralModifier = 's'
    }

    const guessMessage = `There ${verb} ${number} ${candidate}${pluralModifier}`
    console.log(guessMessage)
  }
}
