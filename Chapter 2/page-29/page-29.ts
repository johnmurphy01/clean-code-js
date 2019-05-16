// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  class GuessStatisticsMessage {
    private number: string
    private pluralModifier: string
    private verb: string

    make(candidate: string, count: number): string {
      this.createPluralDependentMessageParts(count)
      return `There ${this.verb} ${this.number} ${candidate}${this.pluralModifier}`
    }

    createPluralDependentMessageParts(count) {
      if (count === 0) {
        this.thereAreNoLetters()
      } else if (count === 1) {
        this.thereIsOneLetter()
      } else {
        this.thereAreManyLetters(count)
      }
    }

    thereAreManyLetters(count) {
      this.number = count.toString()
      this.verb = 'are'
      this.pluralModifier = 's'
    }

    thereIsOneLetter() {
      this.number = '1'
      this.verb = 'is'
      this.pluralModifier = ''
    }

    thereAreNoLetters() {
      this.number = 'no'
      this.verb = 'are'
      this.pluralModifier = 's'
    }
  }
}
