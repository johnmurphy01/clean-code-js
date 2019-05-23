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
