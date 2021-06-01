import React, { Fragment } from 'react';

class Auth extends React.Component {
  componentDidMount() {
    this.props.authStart();
  }
  render() {
    if (this.props.auth.loading) {
      return <div>loading</div>;
    } else if (this.props.auth.error) {
      return <div>{this.props.auth.error}</div>;
    }

    return (
      <Fragment>
        <div>{this.props.auth.user.name}</div>
        <div>{this.props.auth.user.email}</div>
      </Fragment>
    );
  }
}

export default Auth;
