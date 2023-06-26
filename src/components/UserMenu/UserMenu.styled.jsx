import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  *:not(:last-child) {
    margin-right: 15px;
  }
`;
export const UserGreeting = styled.p`
  font-size: 13px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px rgba(1, 1, 6, 0.32);
`;

export const UserLogOut = styled.button`
  border: none;
  background-color: #e7ecf2;
  font-size: 13px;
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
