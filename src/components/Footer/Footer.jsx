import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import { Footer, FooterText, LogoThumb } from './Footer.styled';

export default function FooterBar() {
  return (
    <Footer>
      <LogoThumb>
        <Link to="/">
          <img src={logo} width={20} alt="logo" />
        </Link>
      </LogoThumb>
      <FooterText> &#169; 2023 SAndy. All Rights Reserved.</FooterText>
    </Footer>
  );
}
