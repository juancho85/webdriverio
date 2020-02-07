beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    const selector = '#not-displayed';
    const isExisting = browser.isExisting(selector);
    const isVisible = browser.isVisible(selector);
    console.log(`"${selector}" isExisting value: ${isExisting}`);
    console.log(`"${selector}" isVisible value: ${isVisible}`);
    expect(isExisting).to.equal(true);
    expect(isVisible).to.equal(false);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    const selector = '#visibility-hidden';
    const isExisting = browser.isExisting(selector);
    const isVisible = browser.isVisible(selector);
    console.log(`"${selector}" isExisting value: ${isExisting}`);
    console.log(`"${selector}" isVisible value: ${isVisible}`);
    expect(isExisting).to.equal(true);
    expect(isVisible).to.equal(false);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    const selector = '#zero-opacity';
    const isExisting = browser.isExisting(selector);
    const isVisible = browser.isVisible(selector);
    console.log(`"${selector}" isExisting value: ${isExisting}`);
    console.log(`"${selector}" isVisible value: ${isVisible}`);
    expect(isExisting).to.equal(true);
    expect(isVisible).to.equal(false);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    const selector = 'h1';
    const isExisting = browser.isExisting(selector);
    const isVisible = browser.isVisible(selector);
    console.log(`"${selector}" isExisting value: ${isExisting}`);
    console.log(`"${selector}" isVisible value: ${isVisible}`);
    expect(isExisting).to.equal(true);
    expect(isVisible).to.equal(true);
  });
  
  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    const selector = '#no-such-element';
    const isExisting = browser.isExisting(selector);
    const isVisible = browser.isVisible(selector);
    console.log(`"${selector}" isExisting value: ${isExisting}`);
    console.log(`"${selector}" isVisible value: ${isVisible}`);
    expect(isExisting).to.equal(false);
    expect(isVisible).to.equal(false);
  });
});