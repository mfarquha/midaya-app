import { MidayaAppPage } from './app.po';

describe('midaya-app App', () => {
  let page: MidayaAppPage;

  beforeEach(() => {
    page = new MidayaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
