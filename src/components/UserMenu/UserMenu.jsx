import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/thunks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUser());

  const { user } = useAuth();
  return (
    <>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
