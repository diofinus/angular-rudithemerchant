import { browser, by, element } from 'protractor';

export class RudithemerchantPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
