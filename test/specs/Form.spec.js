const homeScreen = require("../screens/home.screen");

describe('Access Form Panel', ()=>{
    it('Should fill form', async() => {
        await homeScreen.goToForms()
        await homeScreen.insertText()
        await homeScreen.selectDropdown()      
        await homeScreen.selectingSwitch() 
        driver.execute('mobile: scroll', { direction: 'down', strategy: 'accessibility id', selector: '~button-Active' })
        await homeScreen.buttonActivate()
    });
})