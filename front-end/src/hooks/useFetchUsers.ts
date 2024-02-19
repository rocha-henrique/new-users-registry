import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import User from '../interface/IUser';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response: AxiosResponse<User[]> = await axios.get<User[]>('http://localhost:3001/user');
        setUsers(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError: AxiosError = error;
          setError(axiosError.message);
        } else {
          setError('Erro desconhecido ao buscar usuários');
        }
      }
    }

    fetchUsers();
  }, []);

  return { users, error };
};