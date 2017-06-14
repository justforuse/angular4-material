import { Angular4MaterialCodogPage } from './app.po';

describe('angular4-material-codog App', () => {
  let page: Angular4MaterialCodogPage;

  beforeEach(() => {
    page = new Angular4MaterialCodogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
