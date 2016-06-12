import { VenaPage } from './app.po';

describe('vena App', function() {
  let page: VenaPage;

  beforeEach(() => {
    page = new VenaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vena works!');
  });
});
