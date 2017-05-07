import { TutorialAngularDeployToNowShPage } from './app.po';

describe('tutorial-angular-deploy-to-now-sh App', () => {
  let page: TutorialAngularDeployToNowShPage;

  beforeEach(() => {
    page = new TutorialAngularDeployToNowShPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
