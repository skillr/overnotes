import { OvernotesPage } from './app.po';

describe('overnotes App', () => {
  let page: OvernotesPage;

  beforeEach(() => {
    page = new OvernotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ovn works!');
  });
});
