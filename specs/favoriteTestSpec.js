import FavoriteRestaurantIdb from '@data/favorite_restaurant_idb';
import {
  favoriteButtonPresenterWithRestaurant,
  getFavoriteButton,
  getFavoritedStateButton,
  getUnfavoritedStateButton,
} from './utils/favorite-button-factory';

describe('Favorite Restaurant Button Test', function () {
  beforeEach(async function () {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    if (await FavoriteRestaurantIdb.getRestaurant(1)) {
      await FavoriteRestaurantIdb.deleteRestaurant(1);
    }
    await favoriteButtonPresenterWithRestaurant({
      containerId: 'favoriteButtonContainer',
      restaurant: {
        id: 1,
      },
    });
  });

  it('Unfavorite button didnt exists', async function () {
    expect(getFavoritedStateButton()).toBeFalsy();
  });

  it('Favorite button exists', async function () {
    expect(getUnfavoritedStateButton()).toBeTruthy();
  });

  it('Add restaurant to favorite', async function () {
    getFavoriteButton().click();
    expect(await FavoriteRestaurantIdb.getRestaurant(1)).toBeTruthy();
  });

  afterAll(async function () {
    if (await FavoriteRestaurantIdb.getRestaurant(1)) {
      await FavoriteRestaurantIdb.deleteRestaurant(1);
    }
    document.body.innerHTML = '';
  });
});

describe('Unfavorite Restaurant Button Test', function () {
  beforeEach(async function () {
    if (!(await FavoriteRestaurantIdb.getRestaurant(1))) {
      await FavoriteRestaurantIdb.putRestaurant({id: 1});
    }
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await favoriteButtonPresenterWithRestaurant({
      containerId: 'favoriteButtonContainer',
      restaurant: {
        id: 1,
      },
    });
  });

  it('Unfavorite button exists', async function () {
    expect(getFavoritedStateButton()).toBeTruthy();
  });

  it('Favorite button didnt exists', async function () {
    expect(getUnfavoritedStateButton()).toBeFalsy();
  });

  it('Remove restaurant to favorite', async function () {
    getFavoriteButton().click();
    expect(await FavoriteRestaurantIdb.getRestaurant(1)).toBeFalsy();
  });

  afterAll(async function () {
    if (await FavoriteRestaurantIdb.getRestaurant(1)) {
      await FavoriteRestaurantIdb.deleteRestaurant(1);
    }
  });
});
