import React, { Component } from 'react';
import '../Main/Main.css';
import './LocatePage.css';
import NavBar from '../Nav/NavBar';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';
import ResourceList from './ResourceList';

export default class LocatePage extends Component {
  static contextType = FoodfulContext;

  componentDidMount() {
    this.context.clearError();
    FoodfulApiService.getResources()
      .then((res) => this.context.setResourceList(res))
      .catch(this.context.setError);
  }

  renderResource() {
    const { resourceList = [] } = this.context;
    return resourceList.map((resource) => (
      <ResourceList key={resource.id} resource={resource} />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <div>
        <NavBar />
        <div className='Resource__main'>
          <div className='Resource__header'>
            <div>
              <h2>Available Resources</h2>
            </div>
          </div>
          <div className='List_Container'>
            {error ? <p className='angry'>Error</p> : this.renderResource()}
          </div>
        </div>
      </div>
    );
  }
}
