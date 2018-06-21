import { browser, element, by } from 'protractor';

describe('Forms Tests', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should display correct title', function () {
    expect(element.all(by.css('h1')).get(0).getText()).toEqual('Laptop Form');
  });
});

