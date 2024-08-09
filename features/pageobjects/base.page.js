const { $ } = require('@wdio/globals')
class BasePage {

    /**
    * This method launches browser url.
    */
    async openPage(){
        await browser.maximizeWindow();
        await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
    }
}

module.exports = new BasePage();