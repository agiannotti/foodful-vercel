import React, { Component } from 'react';
import NavBar from '../../Components/Nav/NavBar';
import './AddResource.css';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';

export default class AddResource extends Component {
  static contextType = FoodfulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/locate');

    FoodfulApiService.postNewResource(
      e.target.title.value,
      e.target.content.value,
      e.target.zipcode.value
    )
      .then((res) => this.context.setResource(res))

      .catch(this.context.setError);
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <h1>Add a Resource</h1>
          <form className='add_resource_form' onSubmit={this.handleSubmit}>
            <div className='add_resource_form_css'>
              <label htmlFor='title'>Title:</label>
              <textarea
                type='text'
                name='title'
                value={this.context.title}
                required
                placeholder='Chicago Food Pantry'
              />
              <label htmlFor='content'>Description:</label>
              <textarea
                type='text'
                name='content'
                value={this.context.content}
                placeholder='Consistent local supplies'
              />
              <label htmlFor='zipcode'>Zipcode:</label>
              <input
                placeholder='60614'
                type='text'
                name='zipcode'
                value={this.context.zipcode}
                required
                maxLength='5'
                pattern='[0-9]{5}'
              />
              <button type='submit' className='Add_Submit_Button'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
