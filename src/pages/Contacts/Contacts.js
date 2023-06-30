import { Section } from 'components/Section/Section';
import Form from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/SearchForm/SearchForm';
import { Container, Text } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContact,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { getContactsThunk } from 'redux/contacts/thunks';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactsPage() {
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phone Book">
        <Form></Form>
      </Section>
      <Section title="Contacts">
        {!error && contacts.length === 0 ? (
          <Text>There is no contacts, yet...</Text>
        ) : (
          <>
            {!error && <Filter />}
            <ContactList />
          </>
        )}
        {error && toast.warning('Network Error... Please, try again later...')}
        {isLoading && <Text>Loading...</Text>}
      </Section>
    </Container>
  );
}
