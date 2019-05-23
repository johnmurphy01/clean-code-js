// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  class PageCrawler {
    public getFullPath(wikiPage: WikiPage): string {
      return ''
    }
    public static getInheritedPage(name: string, wikiPage: WikiPage): WikiPage {
      return new WikiPage()
    }
  }

  class PathParser {
    public static render(path: string): string {
      return ''
    }
  }

  class SuiteResponder {
    static SUITE_SETUP_NAME: string = 'Setup'
    static SUITE_TEARDOWN_NAME: string = 'Teardown'
  }

  class WikiPage {
    pageCrawler: PageCrawler
  }

  const StringBuffer = (): StringBuffer => {
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

  function testableHtml(pageData, includeSuiteSetup) {
    try {
      const wikiPage = pageData.wikiPage
      const buffer = StringBuffer()
      if (pageData.hasAttribute('Test')) {
        if (includeSuiteSetup) {
          const suiteSetup = PageCrawler.getInheritedPage(SuiteResponder.SUITE_SETUP_NAME, wikiPage)
          if (suiteSetup) {
            const pagePath = suiteSetup.pageCrawler.getFullPath(suiteSetup)
            const pagePathName = PathParser.render(pagePath)
            buffer
              .append('!include -setup .')
              .append(pagePathName)
              .append('\n')
          }
        }
        const setup = PageCrawler.getInheritedPage('SetUp', wikiPage)
        if (setup) {
          const setupPath = wikiPage.pageCrawler.getFullPath(setup)
          const setupPathName = PathParser.render(setupPath)
          buffer
            .append('!include -setup .')
            .append(setupPathName)
            .append('\n')
        }
      }
      buffer.append(pageData.content)
      if (pageData.hasAttribute('Test')) {
        const teardown = PageCrawler.getInheritedPage('TearDown', wikiPage)
        if (teardown) {
          const tearDownPath = wikiPage.pageCrawler.getFullPath(teardown)
          const tearDownPathName = PathParser.render(tearDownPath)
          buffer
            .append('!include -teardown .')
            .append(tearDownPathName)
            .append('\n')
        }
        if (includeSuiteSetup) {
          const suiteTeardown = PageCrawler.getInheritedPage(SuiteResponder.SUITE_TEARDOWN_NAME, wikiPage)
          if (suiteTeardown) {
            const pagePath = suiteTeardown.pageCrawler.getFullPath(suiteTeardown)
            const pathPageName = PathParser.render(pagePath)
            buffer
              .append('!include -teardown .')
              .append(pathPageName)
              .append('\n')
          }
        }
      }
      pageData.setContent(buffer.toString())
      return pageData.getHtml()
    } catch (err) {
      console.error(err)
    }
  }
}
