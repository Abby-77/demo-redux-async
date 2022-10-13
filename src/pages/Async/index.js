import React from "react";
import { connect } from "react-redux";

class Async extends React.Component {
  delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  asyncIncrease = () => {
    this.delay(1000).then(() => this.props.sendAction());
  };
  render() {
    return <button onClick={this.asyncIncrease}>Increment async</button>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      dispatch({
        type: "async_action"
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Async);
