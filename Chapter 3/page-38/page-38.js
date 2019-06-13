function calculatePay(e) {
  switch (e.type) {
    case COMMISSIONED:
      return calculateComissionedPay(e)
    case HOURLY:
      return calculateHourlyPay(e)
    case SALARIED:
      return calculateSalariedPay(e)
    default:
      throw new InvalidEmployeeType(e.type)
  }
}
