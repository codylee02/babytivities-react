import TokenService from "../services/token-service";
import config from "../config";

const FavoritesApiService = {
  getFavorites() {
    return fetch(`${config.API_BASE_URL}/favorites`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(
      res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
    );
  }
};

export default FavoritesApiService;
