import { ExistingAppSolutionsForFemaleRefugeesPage } from './app.po';

describe('existing-app-solutions-for-female-refugees App', () => {
  let page: ExistingAppSolutionsForFemaleRefugeesPage;

  beforeEach(() => {
    page = new ExistingAppSolutionsForFemaleRefugeesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
