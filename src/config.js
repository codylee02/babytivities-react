module.exports = {
  PORT: process.env.PORT || 8080,
  API_BASE_URL:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_BASE_URL
      : "https://babytivities-api.herokuapp.com/api",
  API_KEY: process.env.REACT_APP_API_KEY
};
