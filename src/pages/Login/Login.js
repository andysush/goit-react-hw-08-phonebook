import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from '../Login/Login.styled';
import { Section } from 'components/Section/Section';

export default function LoginPage() {
  return (
    <Container>
      <Section title="Log In">
        <LoginForm />
      </Section>
    </Container>
  );
}
