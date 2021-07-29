import FavoriteButtonInitiator from '@utils/favorite-button-initiator';

const favoriteButtonPresenterWithRestaurant = async ({
  containerId,
  restaurant,
}) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.getElementById(containerId),
    restaurant,
  });
};

const getFavoriteButton = () => document.getElementById('likeButton');
const getFavoritedStateButton = () =>
  document.querySelector('#likeButton[aria-checked=true]');
const getUnfavoritedStateButton = () =>
  document.querySelector('#likeButton[aria-checked=false]');

export {
  favoriteButtonPresenterWithRestaurant,
  getFavoriteButton,
  getFavoritedStateButton,
  getUnfavoritedStateButton,
};
