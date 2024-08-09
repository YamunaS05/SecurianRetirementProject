const { $ } = require('@wdio/globals')
const logger = require('../utils/log.utils')
const TIMEOUTS = require('../utils/timeout.utils')

class PageUtils{
    
    async setValue(element, value) {
        try {
        await element.waitForDisplayed({timeout : TIMEOUTS.MEDIUM});
        await element.waitForClickable({timeout : TIMEOUTS.MEDIUM});
        await element.click();
        await element.setValue(value);
        }
        catch (error){
            logger.error('Failed to set value to the Webelement' + error);
        }
    }

    async click(element){
        try {
        await element.waitForDisplayed({timeout : TIMEOUTS.LONG});
        await element.waitForClickable({timeout: TIMEOUTS.LONG});
        await element.click();
    }
    catch (error){
        logger.error('Failed to click the Webelement' + element);
    }
    }

    async clickJS(element){
        try {
        await element.waitForDisplayed({timeout: TIMEOUTS.MEDIUM });
        await browser.execute((e1) => e1.click(), await element);
    }
    catch (error){
        console.log("Error");
        logger.error('Failed to click the Webelement' + element);
    }
    }

    async getText(element){
        try {
        await element.waitForDisplayed({timeout: TIMEOUTS.MEDIUM});
        return await element.getText();
    }
    catch (error){
        console.log("Error");
        logger.error('Failed to get text for the Webelement' + element);
    }
    }
    
}

module.exports = new PageUtils();