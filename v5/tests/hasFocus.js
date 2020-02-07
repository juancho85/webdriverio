describe('Test Checkbox Buttons Page', function() {
	browser.url("Dropdown-Checkboxes-RadioButtons/index.html");
	browser.setViewportSize({
		width: 1200,
		height: 800
	});

	it('Should be able to focus on checkbox button elements', function(done) {
		browser.pause(2000);
		browser.click('#checkboxes label:nth-of-type(1) [type]');
		const checkboxButtonOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
		console.log('Checkbox button one has a value of: ' + checkboxButtonOne);
		expect(checkboxButtonOne, 'The checkbox (One) should have focus!').to.be.true;

		const checkboxButtonThree = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
		console.log('Checkbox button two has a value of: ' + checkboxButtonThree);
		expect(checkboxButtonThree, 'The checkbox (Three) should NOT have focus!').to.be.false;
	});
});  