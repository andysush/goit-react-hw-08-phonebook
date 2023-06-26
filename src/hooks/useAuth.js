import { useSelector } from 'react-redux';
import {
  selectUser,
  selectisLoggedIn,
  selectisRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);

  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};
