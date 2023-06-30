import { ContactItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { deleteContactThunk } from 'redux/contacts/thunks';

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onClickHandler = id => dispatch(deleteContactThunk(id));
  return (
    <List>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={() => {
              onClickHandler(id);
            }}
          />
        );
      })}
    </List>
  );
};
