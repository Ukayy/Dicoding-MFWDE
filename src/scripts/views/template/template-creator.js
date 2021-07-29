import CONFIG from '@globals/config';
/**
 *
 * @param {Object} param0
 * @param {number} param0.id
 * @param {string} param0.name
 * @param {string} param0.description
 * @param {number} param0.pictureId
 * @param {string} param0.city
 * @param {number} param0.rating
 * @return {string}
 */
const createRestaurantListItemTemplate = ({
  id,
  name,
  description,
  pictureId,
  city,
  rating,
}) => {
  return `<section class="resto-item">
    <div class="resto-item__rating-wrapper">
        <span class="resto-item__rating">${rating.toFixed(1)}</span>
    </div>
    <div class="resto-item__city-wrapper">
        <span class="resto-item__city">${city}</span>
    </div>
    <picture>
  <source data-srcset="${CONFIG.IMAGE_M_URL}${pictureId}" media="(min-width:768px)"/>
  <img
    class="lazyload resto-item__image"
    data-src="${CONFIG.IMAGE_S_URL}${pictureId}"
    alt="${name}"
/></picture>
    <div class="resto-item__title-wrapper">
        <h2 class="resto-item__title">${name}</h2>
    </div>
    <span class="resto-item__desc-text">Description</span>
    <p class="resto-item__desc">
        ${description}
    </p>
    <a href="#/detail/${id}" class="resto-item__detail">
        Read More
    </a>
</section>`;
};

const _createMovieCategoryElement = ({name}) =>
  `<li class="category-item">${name}</li>`;
const _createMenuElement = ({name}) =>
  `<li class="menu-list__item">${name}</li>`;
const _createReviewElement = ({name, review, date}) => `
    <div class="review-item">
      <div class="before-icon review-item__name">${name}</div>
      <div class="review-item__date">${date}</div>
      <div class="review-item__text">${review}</div>
    </div>
`;

const createMovieDetailTemplate = ({
  id,
  name,
  description,
  city,
  address,
  pictureId,
  categories,
  rating,
  menus: {foods, drinks},
  customerReviews,
}) => {
  const categoriesElement = categories
    .map((element) => _createMovieCategoryElement(element))
    .join('');
  const foodsElement = foods
    .map((element) => _createMenuElement(element))
    .join('');
  const drinksElement = drinks
    .map((element) => _createMenuElement(element))
    .join('');
  const reviewElement = customerReviews
    .map((element) => _createReviewElement(element))
    .join('');

  return `
  <picture>
    <source srcset="${CONFIG.IMAGE_L_URL}${pictureId}" media="(min-width:640px)"/>
    <img
      class="detail__img"
      src="${CONFIG.IMAGE_S_URL}${pictureId}"
      alt="Foto ${name}"/>
    </picture>
      <div class="detail__main">
        <h1 class="detail__title">${name}</h1>
        <div class="before-icon detail__address">${address}, ${city}</div>
        <div class="before-icon detail__rating">${rating.toFixed(1)}</div>
        <ul class="before-icon detail__category">
          ${categoriesElement}
        </ul>
        <div class="detail__description">
          <h2 class="description__title">Description</h2>
          <p class="description__text">${description}</p>
        </div>
      </div>
      <div class="detail__separator"></div>
      <div class="detail__menu">
        <h2 class="detail__menu-title">Menu</h2>
        <div class="detail__menu-item">
          <h3 class="menu-item__title">Foods</h3>
          <ul class="menu-item__list">
            ${foodsElement}
          </ul>
        </div>
        <div class="detail__menu-item">
          <h3 class="menu-item__title">Drinks</h3>
          <ul class="menu-item__list">
            ${drinksElement}
          </ul>
        </div>
      </div>
      <div class="detail__review">
        <h2 class="review__title">Reviews</h2>
        <div class="review__list">${reviewElement}</div>
      </div>`;
};

const createLikeButtonTemplate = () => `
  <button 
    aria-label="Tambah restoran dari daftar favorit" 
    id="likeButton" class="favorite-button" 
    role="switch" aria-checked="false">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button 
    aria-label="Hapus restoran dari daftar favorit" 
    role="switch" aria-checked="true"
    id="likeButton"  class="favorite-button">
    <i class="fa fa-heart" aria-hidden="true"></i>
    
  </button>
`;

export {
  createRestaurantListItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
