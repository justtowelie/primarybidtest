class HomePage {

    constructor() {
        // Headers
    this.ABOUT_US_PAGE = '.col-xl-6 > [href="/about"]';
    this.FAQS_PAGE = '.col-xl-6 > [href="/faqs"]';
    this.NEWS_PAGE = '.col-xl-6 > [href="/news"]';
    this.SIGN_UP_BUTTON = '.col-xl-3.d-none > .button--teal';
    }

    selectAboutUsPage() {
        cy.get(this.ABOUT_US_PAGE).click()
    }

    selectHelpPage() {
        cy.get(this.FAQS_PAGE).click()
    }

    selectNewsPage() {
        cy.get(this.NEWS_PAGE).click()
    }

    clickSignUpButton() {
        cy.get(this.SIGN_UP_BUTTON).click()
    }
}

export default HomePage