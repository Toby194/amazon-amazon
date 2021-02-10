import React from 'react';
import './Header.css';

function Header({ title }) {
  // let {title} = props;
  // console.log(title, 'what is in props');
  return (
    <div className="App-header">
      <h1>{ title }</h1>
    </div>
  )
}

export default Header;
