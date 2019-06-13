class Employee {
  constructor() {
    if (this.constructor === Employee) {
      throw new TypeError('Abstract Class Employee cannot be instantiated')
    }
  }

  makeEmployee(employeeRecord) {
    switch (employeeRecord.type) {
      case COMMISSIONED:
        return new CommissionedEmployee(employeeRecord)
      case HOURLY:
        return new HourlyEmployee(employeeRecord)
      case SALARIED:
        return new SalariedEmployee(employeeRecord)
      default:
        throw new InvalidEmployeeType(employeeRecord.type)
    }
  }
}

class EmployeeFactory extends Employee {}
