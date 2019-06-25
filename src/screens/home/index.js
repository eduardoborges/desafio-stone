// @flow
import React from "react";
import { connect } from "unistore/react";
import { authActions } from "../../store/actions";
import { State } from "../../store/types";

const mapStateToProps = state => ({ state });

function HomeScreen(props) {
  const state: State = props.state;
  return (
    <div className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Hello World!</h1>
          <h3 className="subtitle">Dado da store: </h3>
          <pre>{JSON.stringify(state)}</pre>
        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  authActions
)(HomeScreen);
