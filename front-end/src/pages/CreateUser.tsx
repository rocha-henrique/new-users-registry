import React from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import avatar1 from '../images/avatar1.png';
import formas from '../images/formas.png'
import '../css/CreateUser.css';

const CreateUser: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='container-createUser'>
        <img className='formas-createUser' src={ formas } alt="" />
        <Form />
        <h1 className='title'>Crie um novo usuário</h1>
        <img className='img-logo' src={ avatar1 } alt="" />
      </div>
      <Footer />
    </>
  );
}

export default CreateUser;