// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  var a: number = 1
  var O: number = 3
  var l: number

  if (O === 1) {
    a = O * 1
  } else {
    l = 0o1
  }
}
