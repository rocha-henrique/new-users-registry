import React from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';
import User from '../interface/IUser';
import Navbar from '../components/Navbar';
import '../css/ListUsers.css'

const ListUsers: React.FC = () => {
  const { users, error } = useFetchUsers();

  return (
    <>
      <Navbar />
      <div className='list-container'>
        <h1 className='title-listUsers'>Lista de Usuários</h1>
        {error && <p>Erro ao buscar usuários: {error}</p>}
          {users.map((user: User) => (
          <div className='ul-listUsers'>
            <li className='li-listUsers' key={user.id}>{user.fullName + ' ----- ' + user.email + ' ----- ' + user.phoneNumber + ' ----- ' + user.cellPhoneNumber}</li>
          </div>  
          ))}
      </div>
    </>
  );
}
export default ListUsers;

