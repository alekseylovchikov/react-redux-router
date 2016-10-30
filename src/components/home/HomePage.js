import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>{'Welcome to my website!'}</h1>
        <p>{'Hi there! This is my awesome web page about my self. My name is Aleksey Lovchikov and i am Front-End Developer (React.JS, Angular.JS and more). This you can see my code'} <a href="https://github.com/alekseylovchikov">github.com/alekseylovchikov</a></p>
      </div>
    );
  }
}

export default HomePage;
