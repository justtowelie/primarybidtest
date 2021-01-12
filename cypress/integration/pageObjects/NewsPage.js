class NewsPage {
    constructor(){
        this.FEATURED_CONTENT_BODY = '[data-testid=page-body]';
        this.FEATURED_CONTENT_NEWS_ITEMS = ':nth-child(2) > .card-grid > [href]';
        this.ALL_CONTENT_NEWS_ITEMS = '[data-testid=page-body] > :nth-child(4) > div > [href]';
        this.FILTER_CONTENT_BUTTON = '[data-testid=news-filter-button]';
        this.FILTER_BY_WEBINAR = '[data-testid=news-filter-checkbox-Webinar]';
        this.ALL_CONTENT_FILTER_RETURN_VALUE = '#__layout > div > main > div > div:nth-child(4) > div > a:nth-child(1) > div > div.pb_news_item__content_2Grh > p.pb_news_item__category_2vY1'

    }

    featuredContentVerifcation() {
        cy.get(this.FEATURED_CONTENT_NEWS_ITEMS);
    }

    verifyAllContent() {
        cy.get(this.ALL_CONTENT_NEWS_ITEMS);
    }

    clickFilterBy(value) {
        cy.get(this.FILTER_CONTENT_BUTTON).invoke('show')
        cy.contains(value).click({ force : true})
    }

    verifyFilterWorks(value) {
        cy.get(this.ALL_CONTENT_FILTER_RETURN_VALUE).should('have.text' , value)
    }

}

export default NewsPage