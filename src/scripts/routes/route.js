import DetailPage from '@views/pages/detail-page';
import FavoritePage from '@views/pages/favorite-page';
import HomePage from '@views/pages/home-page';

const routes = {
  '/': HomePage,
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage,
};

export default routes;
