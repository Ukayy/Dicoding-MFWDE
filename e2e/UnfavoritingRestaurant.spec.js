Feature('UnFavoritingRestaurant');

Scenario('Hapus restoran dari daftar favorit', async ({I}) => {
  I.amOnPage('/');
  I.click(locate('.resto-item .resto-item__detail').first());
  I.seeElement('#likeButton[aria-checked=false]');
  const restoName = await I.grabTextFrom('h1.detail__title');

  I.click('#likeButton[aria-checked=false]');
  I.amOnPage('/#/favorite');
  I.see(restoName, 'h2.resto-item__title');

  I.seeElement('.resto-item');

  I.click(locate('.resto-item .resto-item__detail').first());
  I.seeElement('#likeButton[aria-checked=true]');

  I.click('#likeButton[aria-checked=true]');
  I.amOnPage('/#/favorite');
  I.dontSeeElement(locate('h2.resto-item__title').withText(restoName));
});
