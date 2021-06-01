import React from 'react';

class Auth extends React.Component {
  componentDidMount() {
    this.props.authStart();
  }
  render() {
    console.log(this.props.auth);
    return <div>aaaa</div>;
  }
}

export default Auth;
