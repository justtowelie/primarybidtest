/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage';
import FaqPage from '../pageObjects/FaqPage';



describe('Help page verification', function()
{
    beforeEach(function(){
        cy.visit(Cypress.env('url'))
    })

    it('Help button navigates to FAQ page', function(){
        const homePage = new HomePage
        const faqPage = new FaqPage
        homePage.selectHelpPage();
        faqPage.confirmFaqNavigation();
    })
})