import React, { Component } from 'react';
import AppActions from '../actions/app-actions';

export default class App extends Component {
  render() {
    return <h1
    onClick={AppActions.addItem.bind(null, 'this is the item')}
    >A Flux App</h1>;
  }
}
