import React, { Component } from 'react';
import EditResource from '../../Components/Edit/EditResource';

export default class EditPage extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <EditResource {...this.props} />
      </>
    );
  }
}
