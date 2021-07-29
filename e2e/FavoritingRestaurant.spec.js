Feature('FavoritingRestaurant');

Scenario('Tambah restoran ke daftar favorit', async ({I}) => {
  I.amOnPage('/');
  I.click(locate('.resto-item .resto-item__detail').first());
  I.seeElement('#likeButton[aria-checked=false]');
  const restoName = await I.grabTextFrom('h1.detail__title');

  I.click('#likeButton[aria-checked=false]');
  I.amOnPage('/#/favorite');
  I.see(restoName, 'h2.resto-item__title');
});
