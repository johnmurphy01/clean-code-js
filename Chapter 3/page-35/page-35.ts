// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  class WikiPage {
    getHtml(): string {
      return ''
    }
  }

  function includeSetupAndTeardownPages(pageData: WikiPage, isSuite: boolean) {}

  function isTestPage(pageData: WikiPage): boolean {
    return true
  }

  function renderPageWithSetupsAndTeardowns(pageData: WikiPage, isSuite: boolean): string {
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
