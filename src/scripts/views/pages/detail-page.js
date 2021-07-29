import DicodingRestaurantSource from '@globals/dicoding-restaurant-source';
import UrlParser from '@routes/url-parser';
import FavoriteButtonInitiator from '@utils/favorite-button-initiator';
import {
  createMovieDetailTemplate,
} from '@views/template/template-creator';

const DetailPage = {
  async render() {
    return `
    <div class="detail" id="detail">
      <div class="detail__favorite-container" id="likeButtonContainer"></div>
    </div>
`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detail(url.id);
    document.getElementById('detail').innerHTML +=
      createMovieDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    FavoriteButtonInitiator.init({
      favoriteButtonContainer: likeButtonContainer,
      restaurant: restaurant,
    });
  },
};

export default DetailPage;
