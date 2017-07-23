import { RudithemerchantPage } from './app.po';

describe('rudithemerchant App', () => {
  let page: RudithemerchantPage;

  beforeEach(() => {
    page = new RudithemerchantPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
