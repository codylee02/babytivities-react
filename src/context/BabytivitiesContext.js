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
    error: null
  };

  setActivitiesList = activitiesList => {
    this.setState({ activitiesList });
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
          error: this.state.error,
          setActivitiesList: this.setActivitiesList
        }}
      >
        {this.props.children}
      </BabytivitiesContext.Provider>
    );
  }
}
