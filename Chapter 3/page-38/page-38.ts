// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  enum EmployeeTypeEnum {
    COMMISSIONED,
    HOURLY,
    SALARIED
  }

  class Employee {
    type: EmployeeTypeEnum
  }

  class InvalidEmployeeType {
    constructor(type: EmployeeTypeEnum) {}
  }

  function calculateComissionedPay(e: Employee) {}

  function calculateHourlyPay(e: Employee) {}

  function calculateSalariedPay(e: Employee) {}

  function calculatePay(e: Employee) {
    switch (e.type) {
      case EmployeeTypeEnum.COMMISSIONED:
        return calculateComissionedPay(e)
      case EmployeeTypeEnum.HOURLY:
        return calculateHourlyPay(e)
      case EmployeeTypeEnum.SALARIED:
        return calculateSalariedPay(e)
      default:
        throw new InvalidEmployeeType(e.type)
    }
  }
}
