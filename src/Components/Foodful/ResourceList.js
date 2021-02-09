import React, { Component } from 'react';
import './ResourceList.css';
import { Link } from 'react-router-dom';
import FoodfulContext from '../../Context/FoodfulContext';
import moment from 'moment';

export default class ResourceList extends Component {
  static contextType = FoodfulContext;

  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { resource } = this.props;
    let time = moment(resource.date_published).subtract(1, 'days').calendar();

    return (
      <div className='Resource__details'>
        <h2 className='Resource__heading'>{resource.title}</h2>
        <div className='Resource__desc'>
          <p className='Resource__item'>{resource.content}</p>
          <p className='Resource__item'>Area Code: {resource.zipcode}</p>
          <p className='Resource__item'>Posted: {time}</p>
        </div>
        <Link to={`/edit/${resource.id}`}>
          <button className='Edit_Details_Button' type='submit'>
            Edit
          </button>
        </Link>
      </div>
    );
  }
}
