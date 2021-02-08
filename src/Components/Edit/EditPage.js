import React, { Component } from 'react';
import EditResource from '../../Components/Edit/EditResource';

export default class EditPage extends Component {
  render() {
    return (
      <>
        <EditResource {...this.props} />
      </>
    );
  }
}
