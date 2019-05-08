// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  var d: number // elapsed time in days

  var elapsedTimeInDays: number
  var daysSinceCreation: number
  var daysSinceModification: number
  var fileAgeInDays: number

  var theList: number[][]
  function getThem(): number[][] {
    var list1: number[][]
    theList.map((x) => {
      if (x[0] === 4) {
        list1.push(x)
      }
    })
    return list1
  }
}
