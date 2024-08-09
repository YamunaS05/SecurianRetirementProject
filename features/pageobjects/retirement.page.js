const { $ } = require('@wdio/globals')
const basePage = require('../../utils/base.page.js');
const retirementTestData  = require('../testdata/retirementTestData.json');
const commonUtils = require('../../utils/common.utils.js');
const logger = require('../../utils/log.utils')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementPage {
    /**
     * define selectors using getter methods
     */
    get currentAgeInput() {
        return $('#current-age');
    }

    get retirementAgeInput() {
        return $('#retirement-age');
    }

    get yourAnnualIncomeInput() {
        return $('#current-income');
    }

    get spouseAnnualIncomeInput() {
        return $('#spouse-income');
    }

    get currentTotalSavingsInput() {
        return $('#current-total-savings');
    }

    get currentAnnualSavingsInput() {
        return $('#current-annual-savings');
    }

    get savingIncreaseRateInput() {
        return $('#savings-increase-rate');
    }

    get successResultMessage() {
        return $('#result-message');
    }

    get successResultChart() {
        return $('#results-chart');
    }

    get monthlySavingsResultsTable() {
        return $('#monthly-savings-results-table');
    }

    get submitRetirement () {
        return $('//*[@data-tag-id="submit"]');
    }

    get requiredFieldAlert () {
        return $('#calculator-input-alert');
    }

    get invalidCurrentAge () {
        return $('#invalid-current-age-error');
    }

    get invalidRetirementAge () {
        return $('#invalid-retirement-age-error');
    }

    get ageErrorLabel(){
        return $('//*[@for = "current-age"]');
    }

    get retirementAgeErrorLabel(){
        return $('//*[@for = "retirement-age"]');
    }

    get currentIncomeErrorLabel(){
        return $('//*[@for = "current-income"]');
    }

    get currentSavingErrorLabel(){
        return $('//*[@for = "current-total-savings"]');
    }
    
    async getAgeErrorLabel() {
        return await this.ageErrorLabel.getText();
    }

    async getInvalidCurrentAge() {
        return await this.invalidCurrentAge.getText();
    }

    async getInvalidRetirementAge() {
        return await this.invalidRetirementAge.getText();
    }
    
    async getRetirementAgeErrorLabel() {
        return await this.retirementAgeErrorLabel.getText();
    }

    async getCurrentIncomeErrorLabel() {
        return await this.currentIncomeErrorLabel.getText();
    }

    async getCurrentSavingErrorLabel() {
        return await this.currentSavingErrorLabel.getText();
    }

    async getSuccessResultMessage() {
        return await this.successResultMessage.getText();
    }

    async isSuccessResultChartDisplayed(){
        return await this.successResultChart.isDisplayed();
    }

    async isMonthlySavingResultsTableDisplayed(){
        return await this.monthlySavingsResultsTable.isDisplayed();
    }

    /**
     * define selectors using getter methods for social security radio button
     */
    get yesSocialSecurity() {
        return $('#yes-social-benefits');
    }

    get noSocialSecurity() {
        return $('#no-social-benefits');
    }

    get singleMartialStatus() {
        return $('#single');
    }

    get martialStatusToggle() {
        return $('#marital-status-toggle-group');
    }

    get marriedMartialStatus() {
        return $('#married');
    }

    get overrideSocialSecurity() {
        return $('#social-security-override');
    }

    /**
     * define selectors using getter methods for default values calculator
     */

    get adjustDefaultValues() {
        return $('=Adjust default values');
    }

    get inputAdditionalIncome() {
        return $('#additional-income');
    }

    get inputRetirementDuration() {
        return $('#retirement-duration');
    }

    get inputRetirementAnnualIncome() {
        return $('#retirement-annual-income');
    }

    get inputPreRetirementROI() {
        return $('#pre-retirement-roi');
    }
    
    get inputPostRetirementROI() {
        return $('#post-retirement-roi');
    }

    get buttonSaveChanges() {
        return $("//*[text()='Save changes']");
    }
    
    
    

    

    /**
         * method to select marital status option
         */
    async selectMaritalStatusOption(status) {
        try {
        if (status == 'single'){
          await commonUtils.clickJS(this.singleMartialStatus);
        } else if(status == 'married') {
            await commonUtils.clickJS(this.marriedMartialStatus);
        } else {
            throw new Error('Unknown marital status: ${status}');
        }
        logger.info('Selected Marital Status as ' + status);
    } catch (error){
        logger.error('Failed to select marital status' + status);
    }
        
    }

     /**
         * method to select social security options.
         */
    async selectSocialSecurityOption(option) {
        try {
        if (option == 'yes'){
            await commonUtils.clickJS(this.yesSocialSecurity);
        } else if(option == 'no') {
            await commonUtils.clickJS(this.noSocialSecurity);
        }else {
            throw new Error('Unknown social security field ${status}');
        }
        logger.info('Social Security options is selected as ' + option);
    } catch (error){
        logger.error('Failed to select Social Security' + option);
        logger.error(error);
    }
    }

      /**
         * method to enter default calculator values
         */
    async enterDefaultValues(string){
        try {
            console.log("default values")
            console.log(string)
            logger.info('Entering the default calculator values');
        const testDataobject = retirementTestData[string];
        await commonUtils.click(this.adjustDefaultValues);
        await commonUtils.setValue(this.inputRetirementDuration, testDataobject.retirementDuration)
        await commonUtils.setValue(this.inputAdditionalIncome, testDataobject.additionalIncome) 
        await commonUtils.setValue(this.inputRetirementAnnualIncome, testDataobject.retirementAnnualIncome)
        await commonUtils.setValue(this.inputPreRetirementROI, testDataobject.preRetirementROI)  
        await commonUtils.setValue(this.inputPostRetirementROI, testDataobject.postRetirementROI)
        await commonUtils.click(this.buttonSaveChanges);
        logger.info('Successfully entering default calculator values');   
    } catch (error){
        logger.error('Failed to enter default calculator values' + error);
    }
    }

        /**
         * method to enter the user details fields
         */
    async enterUserDetails(string){
        try {
            logger.info('Entering User Details fields');
        const testDataobject = retirementTestData[string];
        await commonUtils.setValue(this.currentAgeInput, testDataobject.currentAge)
        await commonUtils.setValue(this.retirementAgeInput, testDataobject.retirementAge)
        await commonUtils.setValue(this.yourAnnualIncomeInput, testDataobject.yourAnnualIncome)
        await commonUtils.setValue(this.currentTotalSavingsInput, testDataobject.currentTotalSavings)
        await commonUtils.setValue(this.currentAnnualSavingsInput, testDataobject.annualSavings)
        await commonUtils.setValue(this.savingIncreaseRateInput, testDataobject.savingsIncreaseRate)
        logger.info('Successfully entered the user details');
        if (string === "all"){
            await commonUtils.setValue(this.spouseAnnualIncomeInput, testDataobject.spouseIncome)
            this.selectSocialSecurityOption(testDataobject.socialSecurityOption)
            this.selectMaritalStatusOption(testDataobject.maritalStatus)
            logger.info('Successfully entered all user details');
        }
        
    } catch (error){
        logger.error('Failed to enter user details fields ' + error);
    }
    } 
    
    /**
         * method to validate error message on user fields
         */
    async submitValidateErrorMessage(string){
        try {
        await commonUtils.click(this.submitRetirement);  
        const testDataobject = retirementTestData[string];
        if (string === "allEmpty") {
        await expect(this.requiredFieldAlert).toHaveText(testDataobject.errorMessage);
        await expect(this.ageErrorLabel).toHaveText(testDataobject.ageErrorLabel);
        await expect(this.retirementAgeErrorLabel).toHaveText(testDataobject.retireAgeErrorLabel);
        await expect(this.currentIncomeErrorLabel).toHaveText(testDataobject.currentIncomeErrorLabel);
        await expect(this.currentSavingErrorLabel).toHaveText(testDataobject.currentSavingErrorLabel);
        } else if (string === "invalid age") {
            await expect(this.invalidRetirementAge).toHaveText(testDataobject.invalidRetirementAgeErrorMessage);
            await expect(this.invalidCurrentAge).toHaveText(testDataobject.invalidAgeErrorMessage);
            await expect(this.requiredFieldAlert).toHaveText(testDataobject.errorMessage);
        } else if (string === "age greater than retirement age") {
            await expect(this.invalidRetirementAge).toHaveText(testDataobject.invalidRetirementAgeErrorMessage);
            await expect(this.requiredFieldAlert).toHaveText(testDataobject.errorMessage);
        } else if (string === "age greater than 120") {
            await expect(this.invalidCurrentAge).toHaveText(testDataobject.invalidAgeErrorMessage);
            await expect(this.requiredFieldAlert).toHaveText(testDataobject.errorMessage);
        }
        logger.info('Successfully verified the error message');
    } catch (error){
        console.log("Error");
        logger.error('Failed to verify the error message ' + error);
    }
    }

    /**
         * method for open the page url
         */
    async openPageUrl () {
        logger.info('Successfully URL launched');
        basePage.openPage();
        
    }

/**
         * method for assertion of Social Security Yes/No Option 
         */
async assertYesNoSocialSecurity(optionSocialSecurity){
    try {
    if (optionSocialSecurity === "see") {
        await expect(this.martialStatusToggle).toBeDisplayed()
        await expect(this.overrideSocialSecurity).toBeDisplayed()
        logger.info('Marital Status and Override text field is Displayed');
    } else if (optionSocialSecurity === "not see"){
        await expect(this.martialStatusToggle).not.toBeDisplayed()
        await expect(this.overrideSocialSecurity).not.toBeDisplayed()
        logger.info('Marital Status and Override text field should not be Displayed');
    }
} catch (error){
        logger.error('Failed to display the Marital Status and Override ' + error);
    }
}

    /**
         * method for retirement amount assertion.
         */
async assertRetirementAmount(string){
    try {
    await commonUtils.click(this.submitRetirement);
    const testDataobject = retirementTestData[string];
    if (string === "required") {
        await expect(this.successResultMessage).toHaveText(testDataobject.successMessage);
    } else if (string === "all"){
        await expect(this.successResultMessage).toHaveText(testDataobject.successMessage);
    }
    await expect(this.successResultChart).toBeDisplayed()
    await expect(this.monthlySavingsResultsTable).toBeDisplayed()
    logger.info('Successfully verified the retirement saving amount');
} catch (error){
    logger.error('Failed to assert the retirement amount ' + error);
}
} 
}

module.exports = new RetirementPage();
