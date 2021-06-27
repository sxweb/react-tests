import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  render(){
    const children = this.props.children;
    return (
      React.Children.map(children, (child, i) =>{
        if(i < 1)return;
        return child;
      })
      //React.Children.count(children)
    );
  }
}

