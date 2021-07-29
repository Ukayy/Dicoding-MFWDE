import API_ENDPOINT from '@globals/api-endpoints';

class DicodingRestaurantSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.list);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return await responseJson.restaurant;
  }
}

export default DicodingRestaurantSource;
