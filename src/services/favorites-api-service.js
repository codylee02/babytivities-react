import TokenService from "../services/token-service";
import config from "../config";

const apiUrl = `${config.API_BASE_URL}/favorites`;
const FavoritesApiService = {
  getFavorites() {
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  addFavorite(activityId) {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ activity_id: activityId })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  removeFavorite(favoriteId) {
    return fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ id: favoriteId })
    });
  }
};

export default FavoritesApiService;
