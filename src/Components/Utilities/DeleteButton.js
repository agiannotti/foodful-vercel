import React, { Component } from 'react';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';

export default class DeleteButton extends Component {
  static contextType = FoodfulContext;

  handleDelete = (id) => {
    const { removeFromResourceList } = this.context;

    FoodfulApiService.deleteById(id)
      .then((res) => {
        removeFromResourceList(id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { resource } = this.props;
    return (
      <div>
        <button
          className='delete_button'
          onClick={() => this.handleDelete(resource.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
