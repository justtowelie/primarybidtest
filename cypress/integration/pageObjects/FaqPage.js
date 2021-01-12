class FaqPage {

    constructor() {
        this.CONFIRM_FAQ_NAVIGATION = '.col-11 > .margin--l';
    }


    confirmFaqNavigation() {
    cy.get(this.CONFIRM_FAQ_NAVIGATION).should('contain', 'What would you like to know?')
}



}

export default FaqPage