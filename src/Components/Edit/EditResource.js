import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import './EditResource.css';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';

export default class EditResource extends Component {
  static contextType = FoodfulContext;

  state = {
    title: '',
    content: '',
    zipcode: '',
    error: false,
  };

  componentDidMount = () => {
    FoodfulApiService.getById(this.props.match.params.id).then((resource) => {
      this.setState({
        title: resource.title,
        content: resource.content,
        zipcode: resource.zipcode,
      });
    });
  };

  handleFormChange = (e) => {
    this.setState({ touched: true });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    const resource = {
      title: this.state.title,
      content: this.state.content,
      zipcode: this.state.zipcode,
    };
    FoodfulApiService.patchResource(resource, this.props.match.params.id)
      .then((res) => {
        return this.props.history.push('/locate');
      })
      .catch((error) => this.context.setError(error));
  };

  render() {
    const { error } = this.context;
    let response;
    if (error) {
      response = <div>Error</div>;
    }
    return (
      <div>
        <NavBar />
        <h1>Edit Resource</h1>
        <div>
          <form
            id='edit_resource_form'
            onSubmit={(e) => this.handleEditSubmit(e)}
          >
            <div className='edit_resource_form_css'>
              <label htmlFor='title'>
                Title:
                <textarea
                  value={this.state.title}
                  type='text'
                  name='title'
                  id='title'
                  onChange={(e) => this.handleFormChange(e)}
                  required
                />
              </label>
              <label htmlFor='content'>
                Content:
                <textarea
                  value={this.state.content}
                  type='text'
                  name='content'
                  id='content'
                  onChange={(e) => this.handleFormChange(e)}
                  required
                />
              </label>
              <label htmlFor='zipcode'>
                Zipcode:
                <input
                  value={this.state.zipcode}
                  type='text'
                  name='zipcode'
                  id='zipcode'
                  onChange={(e) => this.handleFormChange(e)}
                  required
                  placeholder='60614'
                  maxLength='5'
                  pattern='[0-9]{5}'
                />
              </label>
              <div className='editButtons'>
                <button className='Edit_Submit_Button' type='submit'>
                  Save
                </button>
              </div>
              <div className='error_handle'>{response}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
