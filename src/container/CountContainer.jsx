import React from "react";
import { connect } from "react-redux";
import Count from "../components/Count";
import { increment } from "../actions/app";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => dispatch(increment()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
