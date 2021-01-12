/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage';
import NewsPage from '../pageObjects/NewsPage';



describe('News Page Verification', function()
{
    beforeEach(function(){
        cy.visit(Cypress.env('url'))
    })

    it('News page contains new items for featured content', function(){
        const homePage = new HomePage
        const newsPage = new NewsPage
        homePage.selectNewsPage();
        newsPage.featuredContentVerifcation();

    })

    it('News page contains new items for all content', function(){
        const homePage = new HomePage
        const newsPage = new NewsPage
        homePage.selectNewsPage();
        newsPage.verifyAllContent();
        
    })

    it('All content section can be filtered to Webinar', function(){
        const homePage = new HomePage
        const newsPage = new NewsPage
        homePage.selectNewsPage();
        newsPage.clickFilterBy('Webinar');
        newsPage.verifyFilterWorks('Webinar')
        
    })
})