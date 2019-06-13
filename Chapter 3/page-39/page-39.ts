// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  enum EmployeeTypeEnum {
    COMMISSIONED,
    HOURLY,
    SALARIED
  }

  class EmployeeRecord {
    type: EmployeeTypeEnum
  }

  class InvalidEmployeeType {
    constructor(type: EmployeeTypeEnum) {}
  }

  interface IEmployeeFactory {
    makeEmployee: (employeeRecord: EmployeeRecord) => Employee
  }

  abstract class Employee {
    abstract isPayday(): boolean
    abstract calculatePay(): number
    abstract deliverPay(pay: number): void
  }

  class EmployeeFactory implements IEmployeeFactory {
    CommissionedEmployee(employeeRecord: EmployeeRecord) {}

    HourlyEmployee(employeeRecord: EmployeeRecord) {}

    SalariedEmployee(employeeRecord: EmployeeRecord) {}

    makeEmployee(employeeRecord: EmployeeRecord): Employee {
      switch (employeeRecord.type) {
        case EmployeeTypeEnum.COMMISSIONED:
          return new this.CommissionedEmployee(employeeRecord)
        case EmployeeTypeEnum.HOURLY:
          return new this.HourlyEmployee(employeeRecord)
        case EmployeeTypeEnum.SALARIED:
          return new this.SalariedEmployee(employeeRecord)
        default:
          throw new InvalidEmployeeType(employeeRecord.type)
      }
    }
  }
}
