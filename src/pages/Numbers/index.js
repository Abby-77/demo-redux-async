import React from "react";
import { connect } from "react-redux";

class Numbers extends React.Component {
  render() {
    return <div>Clicked:{this.props.count} times</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Numbers);
