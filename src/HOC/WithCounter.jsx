import React from "react";

const UpdatedComponent = (OriginalComponent, num) => {
  class NewComponent extends React.Component {
    state = { count: 0 };
    increment = () => {
      let s1 = this.state;
      s1.count += num;
      this.setState(s1);
    };
    render() {
      let { count } = this.state;
      return (
        <OriginalComponent
          count={count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdatedComponent;
