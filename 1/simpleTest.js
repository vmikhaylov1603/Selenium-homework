var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('простой тест', function() {
    var driver;

    test.before(function() {
        var options = new chrome.Options();


        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('Должна открываться страница', function() {
        driver.get('https://www.yandex.ru/');
    });

    test.after(function() {
        driver.quit();
    });
});