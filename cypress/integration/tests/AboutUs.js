/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage';
import AboutUsPage from '../pageObjects/AboutUsPage';



describe('About us page verification', function()
{
    beforeEach(function(){
        cy.visit(Cypress.env('url'))
    })

    it('About us header navigates to About Us page', function(){
        const homePage = new HomePage
        const aboutUsPage = new AboutUsPage
        homePage.selectAboutUsPage();
        aboutUsPage.aboutUsPageLoaded();
    })
})