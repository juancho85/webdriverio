describe('Test webdriver university homepage', function() {
    it('Output the height of the homepage carousel', function(done) {
        browser.url('/');
        browser.pause(2000);
        const divCarrouselHeight =  browser.getCssProperty('#udemy-promo-thumbnail', 'height');
        console.log(`Carrousel height is: ${JSON.stringify(divCarrouselHeight)}`);
    });
});