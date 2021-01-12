class SignUpPage {
    constructor() {
        this.EMAIL = '[name="email"]';
        this.PASSWORD = '[name="password"]';
        this.RECONFIRM_PASSWORD = '[name="confirmPassword"]';
        this.FIRST_NAME = '[name="firstname"]';
        this.WELCOME_HEADER = '.h1';
        this.ERROR = '.error';
        this.SUBMIT_BUTTON = '.cta-1 > .d-flex';
    }

    setEmail(value){
        cy.get(this.EMAIL).type(value)
    }

    
    setPassword(value){
        cy.get(this.PASSWORD).type(value)
    }

    
    reconfirmPassword(value){
        cy.get(this.RECONFIRM_PASSWORD).type(value)
    }

    submitButton() {
        cy.get(this.SUBMIT_BUTTON).click()
    }

    confirmUserDetailsPage() {
        cy.get(this.FIRST_NAME)
    }   

    passwordsDoNotMatchError() {
        cy.get(this.ERROR).should('have.text', 'Passwords do not match')
    }

    verifyInvalidEmailError() {
        cy.get(this.ERROR).should('have.text', 'The email you have entered is not valid')
    }

}

export default SignUpPage