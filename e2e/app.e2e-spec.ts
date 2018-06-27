import { AngularElectronPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular-material-electron App', () => {
  let page: AngularElectronPage;

  beforeEach(() => {
    page = new AngularElectronPage();
  });

  it('should display App title on toolbar', () => {
    page.navigateTo('/');
    expect(element(by.css('.app-title')).getText()).toMatch('PAGES.HOME.TITLE');
  });
});
