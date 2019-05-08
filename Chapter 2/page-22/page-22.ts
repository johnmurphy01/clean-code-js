// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  class DtaRcrd102 {
    private genymdhms: Date
    private modymdhms: Date
    private pszqint: string = '102'
  }

  class Customer {
    generationTimestamp: Date
    modificationTimestamp: Date
    recordId: string = '102'
  }
}
