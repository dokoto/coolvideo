const { By, until } = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');

const TIMEOUT = 10000;

defineSupportCode(({ Given, When, Then }) => {
  Given(/^Accedo al login en "([^"]*)"$/, function (url) {
    return this.driver.get(url);
  });

  When(/^Estoy en la pantalla de login$/, function () {
    return this.driver
      .wait(until.elementLocated(By.css('.Login')), TIMEOUT)
      .then(function (element) {
        return element.isDisplayed();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Then(/^Escribo el usuario "([^"]*)" con clave "([^"]*)"$/, function (user, pass) {
    this.driver.wait(until.elementLocated(By.css('#username')), TIMEOUT).sendKeys(user);
    this.driver.wait(until.elementLocated(By.css('#password')), TIMEOUT).sendKeys(pass);
  });

  Then(/^Hago click en entrar en su cuenta$/, function () {
    return this.driver
      .wait(until.elementLocated(By.css('button[type="submit"]')), TIMEOUT)
      .then(function (element) {
        element.click();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Given(/^Estando en el dashboard$/, function () {
    return this.driver
      .wait(until.elementLocated(By.css('.dash-container')), TIMEOUT)
      .then(function (element) {
        return element.isDisplayed();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Then(/^Hago click en añadir$/, function () {
    return this.driver
      .wait(until.elementLocated(By.css('#section-top a[data-movie-id="346364"]')), TIMEOUT)
      .then(function (element) {
        element.click();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Then(/^La pelicula aparece en favoritos$/, function () {
    return this.driver
      .wait(until.elementLocated(By.css('#section-favourites a[data-movie-id="346364"]')), TIMEOUT)
      .then(function (element) {
        return element.isDisplayed();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Then(/^Hago click en quitar$/, function () {
    return this.driver
      .wait(until.elementLocated(By.css('#section-favourites a[data-movie-id="346364"]')), TIMEOUT)
      .then(function (element) {
        element.click();
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Then(/^La pelicula desaparece de favoritos$/, function () {
    this.driver
      .findElement(By.id('#section-favourites a[data-movie-id="346364"]'))
      .then(function () {
        return false;
      }, function () {
        return true;
      });
  });
});
