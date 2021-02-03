import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import './EditResource.css';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';
import DeleteButton from '../Utilities/DeleteButton';

export default class EditResource extends Component {
  static contextType = FoodfulContext;

  state = {
    title: '',
    content: '',
    zipcode: '',
    error: false,
  };

  componentDidMount = () => {
    console.log('this', this.props);
    FoodfulApiService.getById(this.props.match.params.id).then((resource) => {
      // console.log('resource', resource);
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
    const id = this.props.match.params.id;
    let response;
    if (error) {
      response = <div>Error</div>;
    }
    // console.log('render context', this.context, this.props);
    return (
      <div>
        <NavBar />
        <div>
          <form
            id='edit_resource_form'
            onSubmit={(e) => this.handleEditSubmit(e)}
          >
            <div className='edit_resource_form_css'>
              <label htmlFor='title'>Title:</label>
              <input
                value={this.state.title}
                type='text'
                name='title'
                id='title'
                onChange={(e) => this.handleFormChange(e)}
                required
              />
              <label htmlFor='content'>Content:</label>
              <input
                value={this.state.content}
                type='text'
                name='content'
                id='content'
                onChange={(e) => this.handleFormChange(e)}
                required
              />
              <label htmlFor='zipcode'>Zipcode:</label>
              <input
                value={this.state.zipcode}
                type='text'
                name='zipcode'
                id='zipcode'
                onChange={(e) => this.handleFormChange(e)}
                required
              />
              <button className='Edit_Submit_Button' type='submit'>
                Save Edit
              </button>
              <div className='error_handle'>{response}</div>
              <div>
                <DeleteButton resource={id} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
