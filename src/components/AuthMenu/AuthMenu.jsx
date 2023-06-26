import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to="/register">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};
