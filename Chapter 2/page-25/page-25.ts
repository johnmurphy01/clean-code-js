// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  var Complex: any
  var customer: any
  var employee: any
  var paycheck: any

  const name = employee.name
  customer.name = 'mike'
  if (paycheck.isPosted()) {
    // do something
  }

  const fulcrumPointFromFactoryMethod = Complex.FromRealNumber(23.0)
  const fulcrumPointFromStandardConstructor = new Complex(23.0)
}
