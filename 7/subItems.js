var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Проверка элементов меню', function() {
    var driver;

    test.before(function() {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    });



    test.it('Проверка элементов', function() {
        driver.get('http://localhost/litecart/admin/');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');

        driver.findElement(By.name('login')).click();
        driver.manage().timeouts().implicitlyWait(10000/*ms*/);


          driver.findElements(By.id('app-')).then(function(items) {

              for (var i = 0; i < items.length; i++) {


                  driver.findElement(By.xpath('//li[' + (i + 1) + ']/a')).click();

                  driver.findElements(By.css('[id*=doc]')).then(function (subItems) {

                      for (var j = 0; j < subItems.length; j++) {
                          console.log(i + " " + j);
                          driver.findElement(By.xpath('//li[' + (i + 1) + ']/ul/li[' + (j + 1) + ']/a')).click();

                      }

                  });
              }

          });

    });



    test.after(function() {
       driver.quit();
    });
});