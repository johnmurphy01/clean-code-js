// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  class WikiPage {}

  function includeSetupAndTeardownPages(pageData: WikiPage, isSuite: boolean) {}

  function isTestPage(pageData: WikiPage): boolean {
    return true
  }

  function renderPageWithSetupsAndTeardowns(pageData, isSuite) {
    try {
      if (isTestPage(pageData)) {
        includeSetupAndTeardownPages(pageData, isSuite)
      }
      return pageData.getHtml()
    } catch (err) {
      console.error(err)
    }
  }
}
