import React from "react";
import { connect } from "react-redux";

class Odd extends React.Component {
  handleClick = () => {
    this.props.sendAction();
  };
  render() {
    return <button onClick={this.handleClick}>Increment if odd</button>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      dispatch({
        type: "odd_action"
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Odd);
