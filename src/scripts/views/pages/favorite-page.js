import FavoriteRestaurantIdb from '@data/favorite_restaurant_idb';
import {createRestaurantListItemTemplate} from '@views/template/template-creator';

const FavoritePage = {
  async render() {
    return `
    <div class="main-content favorite" >
      <div class="main-content__title-wrapper">
        <h1 class="main-content__title">Favorite Restaurant</h1>
      </div>
      <div class="resto-list" id="resto-list"></div>
    </div>`;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#resto-list');
    if (restaurant.length > 0) {
      restaurant.forEach((movie) => {
        restaurantContainer.innerHTML +=
          createRestaurantListItemTemplate(movie);
      });
      return;
    }

    restaurantContainer.innerHTML =
      '<h1 class="resto-list__no-item">Tidak Ada Restoran Favorit</h1>';
  },
};

export default FavoritePage;
