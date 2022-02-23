describe('DataGrid', () => {
  test.each([
    ['email-cell'],
    ['date-cell'],
    ['html-cell'],
    ['number-cell'],
    ['select-cell'],
    ['text-cell'],
    ['heading'],
    ['hide-extras'],
    ['pagination'],
    ['column-stretch'],
    ['tags-cell'],
    ['telephone-cell'],
    ['selection-export'],
  ])('%p', async (variant) => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-data-grid--${variant}&viewMode=story`
    );
    await page.waitForSelector('html.hydrated');
    const previewHtml = await page.$('body');
    await page.evaluate(() => {
      [
        '--telekom-motion-duration-immediate',
        '--telekom-motion-duration-transition',
        '--telekom-motion-duration-animation',
        '--telekom-motion-duration-animation-deliberate',
      ].forEach((transitionSpeed) => {
        document.body.style.setProperty(transitionSpeed, '0s');
      });
    });

    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
