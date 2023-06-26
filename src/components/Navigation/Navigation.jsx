import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { LogoThumb, NavContainer, NavItem, NavList } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <LogoThumb>
        <Link to="/">
          <img src={logo} width={20} alt="logo" />
        </Link>
      </LogoThumb>
      <NavList>
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        {isLoggedIn && (
          <li>
            <NavItem to="/contacts">Contacts</NavItem>
          </li>
        )}
      </NavList>
    </NavContainer>
  );
};
