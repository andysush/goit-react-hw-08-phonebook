import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from './Pages.styled';
import { Section } from 'components/Section/Section';

export default function RegistrationPage() {
  return (
    <Container>
      <Section title="Sign Up">
        <RegisterForm />
      </Section>
    </Container>
  );
}
