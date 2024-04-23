import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../services/api';
import { UserListContainer, UserCard } from '../styles';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UserListContainer>
      <h2>User List</h2>
      {users.map((user) => (
        <UserCard key={user.id}>
          <Link to={`/users/${user.id}`}>
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.email}</p>
          </Link>
        </UserCard>
      ))}
    </UserListContainer>
  );
};

export default UserList;
