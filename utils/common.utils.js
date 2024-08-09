const { $ } = require('@wdio/globals')
const logger = require('../utils/log.utils')

class PageUtils{
    
    async setValue(element, value) {
        await element.waitForDisplayed({timeout: 10000});
        await element.waitForClickable({timeout: 10000});
        await element.click();
        await element.setValue(value);
    }

    async click(element){
        await element.waitForDisplayed({timeout: 10000});
        await element.waitForClickable({timeout: 10000});
        await element.click();
    }

    async clickJS(element){
        await element.waitForDisplayed({timeout: 5000 });
        await browser.execute((e1) => e1.click(), await element);
    }

    async getText(element){
        await element.waitForDisplayed({timeout: 5000});
        return await element.getText();
    }
    
}

module.exports = new PageUtils();