import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import '../css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div className='container-navbar'>
        <Link className='link-container' to="/">MENU</Link>
        <Link className='link-container' to="/users">USUÁRIOS</Link>
      </div>
    </>
  );
}

export default Navbar;