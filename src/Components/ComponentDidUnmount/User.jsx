import React from "react";
class User extends React.Component {
  state = {
    data: 0,
  };
  componentWillUnmount() {
    console.log("User has been deleted.");
  }
  render() {
    return (
      <div>
        <h1>Name : ShubhamChaurasia</h1>
        <h1>Job : Software Engineer</h1>
      </div>
    );
  }
}
export default User;
