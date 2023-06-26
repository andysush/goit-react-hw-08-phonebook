import { AuthMenuItem, AuthMenuList } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <AuthMenuList>
      <li>
        <AuthMenuItem to="/register">Sign Up</AuthMenuItem>
      </li>
      <li>
        <AuthMenuItem to="/login">Log In</AuthMenuItem>
      </li>
    </AuthMenuList>
  );
};
