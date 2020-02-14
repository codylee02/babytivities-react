import React from "react";

const BabytivitiesContext = React.createContext({
  activitiesList: [],
  error: null,
  setActivitiesList: () => {}
});

export default BabytivitiesContext;

export class BabytivitiesProvider extends React.Component {
  state = {
    activitiesList: [],
    favoritesList: [],
    error: null
  };

  setActivitiesList = activitiesList => {
    this.setState({ activitiesList });
  };

  setFavoritesList = favoritesList => {
    this.setState({ favoritesList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  render() {
    return (
      <BabytivitiesContext.Provider
        value={{
          activitiesList: this.state.activitiesList,
          favoritesList: this.state.favoritesList,
          error: this.state.error,
          setActivitiesList: this.setActivitiesList,
          setFavoritesList: this.setFavoritesList
        }}
      >
        {this.props.children}
      </BabytivitiesContext.Provider>
    );
  }
}
