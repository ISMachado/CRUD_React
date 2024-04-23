import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getUserById, deleteUser } from '../services/api';
import { UserDetailContainer, BackButton, Button } from '../styles';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(id);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUser();
  }, [id]);

  const handleDeleteUser = async () => {
    try {
      await deleteUser(id);
      history.push('/users');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <UserDetailContainer>
      <h2>User Detail</h2>
      {user && (
        <div>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <Link to="/users">
            <BackButton>Back to List</BackButton>
          </Link>
          <Button onClick={handleDeleteUser}>Delete User</Button>
        </div>
      )}
    </UserDetailContainer>
  );
};

export default UserDetail;
