import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: #e7ecf2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-top: 1px solid #615b5b;
`;

export const LogoThumb = styled.div`
  margin-right: 15px;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.2;
  }
`;

export const FooterText = styled.p`
  font-size: 10px;
`;
