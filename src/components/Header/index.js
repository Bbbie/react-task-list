import React from 'react';
import {Link, useLocation} from "react-router-dom";

import './Header.scss';

const Header = () => {
  const location = useLocation();
  console.log(location);

  const menuItems = [
    {
      root: '/',
      caption: 'home'
    },
    {
      root: '/hallo',
      caption: 'hallo'
    }
  ]

  return (
    <div>
      {menuItems.map((item) => (
        <Link key={item.caption} className={location.pathname == item.root ? 'is-active' : ''} to={item.root}>{item.caption.toUpperCase()}</Link>
      ))}
    </div>
  )
};

export default Header;