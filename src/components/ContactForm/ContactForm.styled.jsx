import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 5px solid rgb(84, 84, 253);
  border-radius: 5px;
  padding: 20px 40px;
  background-color: rgb(233, 211, 137);
  margin-bottom: 30px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContactLabel = styled.label`
  font-size: 16px;
`;

export const ContactText = styled.p`
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContactInput = styled.input`
  font-size: 13px;
  margin-bottom: 10px;
  border-color: rgb(233, 184, 25);

  :focus {
    border-color: rgb(84, 84, 253);
    outline: none;
  }
`;

export const AddBtn = styled.button`
  background-color: rgb(84, 84, 253);
  color: #fff;
  outline: none;
  padding: 5px;
  margin: auto;
  border-radius: 5px;
  border-color: rgb(84, 84, 253);
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgb(233, 184, 25);
    color: rgb(84, 84, 253);
    scale: 1.2;
  }
`;
