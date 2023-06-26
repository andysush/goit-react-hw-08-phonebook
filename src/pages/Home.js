import React from 'react';
import { Container } from './Pages.styled';
import { Section } from 'components/Section/Section';
import img from '../images/book.png';

function HomePage() {
  return (
    <Container>
      <Section title="Welcome to your personal phonebook">
        <div>
          <img src={img} width={300} alt="phonebook" />
        </div>
      </Section>
    </Container>
  );
}

export default HomePage;
