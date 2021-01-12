/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage';
import SignUpPage from '../pageObjects/SignUpPage';
import userData from '../../support/data'



describe('Sign up e2e journey', function()
{
    beforeEach(function(){
        cy.visit(Cypress.env('url'))
    })

    it('Upon Signup user is navigated to user details page', function(){
        const homePage = new HomePage
        const signUpPage = new SignUpPage
        homePage.clickSignUpButton();
        signUpPage.setEmail(userData.randomEmail)
        signUpPage.setPassword(userData.password)
        signUpPage.reconfirmPassword(userData.password)
        signUpPage.submitButton()
        signUpPage.confirmUserDetailsPage()
    })

    it('Sign up page validates passwords match', function(){
        const homePage = new HomePage
        const signUpPage = new SignUpPage
        homePage.clickSignUpButton();
        signUpPage.setEmail(userData.randomEmail)
        signUpPage.setPassword(userData.password)
        signUpPage.reconfirmPassword(userData.invalidPassword)
        signUpPage.submitButton()
        signUpPage.passwordsDoNotMatchError()
    })

    it('Sign up requires a valid email', function(){
        const homePage = new HomePage
        const signUpPage = new SignUpPage
        homePage.clickSignUpButton();
        signUpPage.setEmail(userData.invalidEmail)
        signUpPage.setPassword(userData.password)
        signUpPage.reconfirmPassword(userData.password)
        signUpPage.submitButton()
        signUpPage.verifyInvalidEmailError()

    })
})