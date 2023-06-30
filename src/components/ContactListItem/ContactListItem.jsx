import { Item, DeleteBtn } from './ConatactListItem.styled';

export const ContactItem = ({ name, number, onClick }) => {
  return (
    <>
      <Item>
        <p>{name}</p>
        <p>{number}</p>
        <DeleteBtn
          type="button"
          onClick={() => {
            onClick();
          }}
        >
          Delete
        </DeleteBtn>
      </Item>
    </>
  );
};
