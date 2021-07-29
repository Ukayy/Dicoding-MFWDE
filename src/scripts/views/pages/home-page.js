import DicodingRestaurantSource from '@globals/dicoding-restaurant-source';
import {
  createRestaurantListItemTemplate} from '@views/template/template-creator';

const HomePage = {
  async render() {
    return `
    <div class="banner">
      <div class="banner__desc">
        <h1 class="banner__title">Rasakan Makanan Nusantara</h1>
        <p class="banner__subtitle">
          Kunjungi rerstaurant kami di sekitar anda dan rasakan masakan
          nusantara dari berbagai daerah di Indonesia
        </p>
      </div>
    </div>
    <div class="main-content" >
      <div class="main-content__title-wrapper">
        <h1 class="main-content__title">Explore Restaurant</h1>
      </div>
      <div class="resto-list" id="resto-list"></div>
    </div>`;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.list();
    const restoListElement = document.getElementById('resto-list');

    restaurants.forEach((element) => {
      restoListElement.innerHTML += createRestaurantListItemTemplate(element);
    });
  },
};

export default HomePage;
