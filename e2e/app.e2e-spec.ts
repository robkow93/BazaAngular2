import { ProjektPage } from './app.po';

describe('projekt App', () => {
  let page: ProjektPage;

  beforeEach(() => {
    page = new ProjektPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
