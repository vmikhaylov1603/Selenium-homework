var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Простой тест для логина и пароля', function() {
    var driver;

    test.before(function() {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('Должен работать вход под админом', function() {
        driver.get('http://localhost/litecart/admin/');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
        driver.wait(until.titleIs('My Store'), 3000);
    });

    test.after(function() {
        driver.quit();
    });
});