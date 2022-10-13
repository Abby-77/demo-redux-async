import React from "react";
import { connect } from "react-redux";

class Sub extends React.Component {
  handleClick = () => {
    this.props.sendAction();
  };
  render() {
    return <button onClick={this.handleClick}>-</button>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      dispatch({
        type: "sub_action"
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Sub);
