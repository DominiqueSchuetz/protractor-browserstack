var fs = require('fs');


// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}



describe('search', function() {
  it('should search a keyword on google', function() {
    browser.driver
      .get('https://google.com')
      .then(function() {
        browser.driver
          .findElement(by.name('q'))
          .sendKeys('BrowserStack\n');
        browser.sleep(5000);
        
        //browser.takeScreenshot();
        
		browser.takeScreenshot().then(function (png) {
			writeScreenShot(png, '/Users/dominique/Documents/GitProjetFolder/protractor-browserstack/Live Testing/Screenshots/exception.png');
		});
      });
  });
});
