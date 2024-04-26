import React from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';
import User from '../interface/IUser';
import Navbar from '../components/Navbar';
import formas from '../images/formas.png'
import ramo from '../images/ramo.png'
import '../css/ListUsers.css'

const ListUsers: React.FC = () => {
  const { users, error } = useFetchUsers();

  return (
    <main>
      <Navbar />
      <img className='formas-listUsers' src={ formas } alt="" />
      <div className='page-listUsers'>
      <img className='ramo-listUsers' src={ ramo } alt="" />
        <div className='list-container'>
          <h1 className='title-listUsers'>Lista de Usuários</h1>
          <div className='subTitle-listUsers'>
            <h2>nome</h2>
            <h2>email</h2>
            <h2>celular</h2>
            <h2>telefone</h2>
          </div>
          {error && <p>Erro ao buscar usuários: {error}</p>}
          {users.map((user: User) => (
          <div className={`ul-listUsers li-${user.id}`} key={user.id}>
            <p className='li-listUsers'>{user.fullName}</p>
            <p className='li-listUsers'>{user.email}</p>
            <p className='li-listUsers'>{user.cellPhoneNumber}</p>
            <p className='li-listUsers'>{user.phoneNumber}</p>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}
export default ListUsers;

