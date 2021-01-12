class AboutUsPage 
{

constructor(){
    // About Us Navigation
    this.CONFIRM_ABOUT_US_HEADER = '[data-testid=about-about-title]'

}

    aboutUsPageLoaded() {
        cy.get(this.CONFIRM_ABOUT_US_HEADER).should('contain', 'About Us')
    }

}

export default AboutUsPage