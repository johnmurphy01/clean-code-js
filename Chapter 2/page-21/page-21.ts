// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  function copyChars(a1: string[], a2: string[]) {
    for (let i = 0; i < a1.length; i++) {
      a2[i] = a1[i]
    }
  }
}

getActiveAccount()
getActiveAccounts()
getActiveAccountInfo()

function getActiveAccount() {}

function getActiveAccounts() {}

function getActiveAccountInfo() {}
