export class VenaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vena-app h1')).getText();
  }
}
