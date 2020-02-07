beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
})

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item Java is selected therefore should return true', function(done) {
    const locator = "option[value='java']";
    const isSelected = browser.isSelected(locator);
    console.log(`Locator ${locator} is selected? ${isSelected}`);
    expect(isSelected).to.equal(true);
  });
  
  it('Dropdown item maven is not selected therefore should return false', function(done) {
    const locator = "option[value='maven']";
    const isSelected = browser.isSelected(locator);
    console.log(`Locator ${locator} is selected? ${isSelected}`);
    expect(isSelected).to.equal(false);
  });
  
  it('Option2 is not selected therefore should return false', function(done) {
    const locator = "input[value='option-2']";
    const isSelected = browser.isSelected(locator);
    console.log(`Locator ${locator} is selected? ${isSelected}`);
    expect(isSelected).to.equal(false);
  });
  
  it('Option3 is selected therefore should return true', function(done) {
    const locator = "input[value='option-3']";
    const isSelected = browser.isSelected(locator);
    console.log(`Locator ${locator} is selected? ${isSelected}`);
    expect(isSelected).to.equal(true);
  });
  
  it('Radio button pumpkin is selected therefore should be true', function(done) {
    const locator = "input[value='pumpkin']";
    const isSelected = browser.isSelected(locator);
    console.log(`Locator ${locator} is selected? ${isSelected}`);
    expect(isSelected).to.equal(true);
  });
});