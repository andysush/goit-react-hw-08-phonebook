import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthMenuList = styled.ul`
  display: flex;
  *:not(:last-child) {
    margin-right: 5px;
  }
`;

export const AuthMenuItem = styled(NavLink)`
  font-size: 13px;
  padding: 0 5px;
  color: rgb(84, 84, 253);
  border-radius: 5px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: rgb(233, 184, 25);
    box-shadow: 2px 2px 2px rgba(11, 5, 3, 0.32);
  }
`;
