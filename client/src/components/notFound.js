import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <h2>
          No match found for <code>{location.pathname}</code>
        </h2>
      </div>
    );
  }
}

export default NotFound;
