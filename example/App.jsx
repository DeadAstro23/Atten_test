import React from 'react';
import { Link } from 'react-router';
import '../css/main.css';
import './main.less';

export default class App extends React.Component {
  render () {
    return (
      <article className="page-container">
        <div className="flex align-center space-between">
          <h1>Attendify Buttons Component Demo</h1>
          <ul className="flex align-center">
            <li className="spacing-right-20">
              <Link to="/buttons">Buttons</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </article>
    );
  }
}