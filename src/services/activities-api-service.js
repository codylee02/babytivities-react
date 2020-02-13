import config from "../config";

const ActivitiesApiService = {
  getActivities() {
    return fetch(`${config.API_BASE_URL}/activities`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getActivity(activityId) {
    return fetch(`${config.API_BASE_URL}/activities/${activityId}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ActivitiesApiService;
