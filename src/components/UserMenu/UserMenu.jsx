import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/thunks';
import { UserGreeting, UserLogOut, UserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUser());

  const { user } = useAuth();
  return (
    <UserWrapper>
      <UserGreeting>Welcome {user.name}</UserGreeting>
      <UserLogOut type="button" onClick={handleLogout}>
        Logout
      </UserLogOut>
    </UserWrapper>
  );
};
