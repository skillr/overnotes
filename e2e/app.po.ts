import { browser, element, by } from 'protractor';

export class OvernotesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ovn-root h1')).getText();
  }
}
