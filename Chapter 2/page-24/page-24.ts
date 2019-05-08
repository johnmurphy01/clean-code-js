// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  var phoneString: PhoneNumber
  // name not changed when type changed!

  class Part {
    private m_dsc: string // The textual description
    setName(name) {
      this.m_dsc = name
    }
  }

  class PhoneNumber {}
}
;() => {
  class Part {
    private description: string
    setDescription(description) {
      this.description = description
    }
  }
}
