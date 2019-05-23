const StringBuffer = () => {
  this.buffer = []
  this.index = 0
}

StringBuffer.prototype = {
  append: (s) => {
    this.buffer[this.index] = s
    this.index += 1
    return this
  },
  toString: () => {
    return this.buffer.join('')
  }
}

function renderPageWithSetupAndTeardowns(pageData, isSuite) {
  try {
    const isTestPage = pageData.hasAttribute('Test')
    if (isTestPage) {
      const testPage = pageData.getWikiPage()
      const newPageContent = StringBuffer()

      includeSetupPages(testPage, newPageContent, isSuite)
      newPageContent.append(pageData.getContent())

      includeTeardownPages(testPage, newPageContent, isSuite)
      pageData.setContent(newPageContent.toString())
    }
    return pageData.getHtml()
  } catch (err) {
    console.error(err)
  }
}
