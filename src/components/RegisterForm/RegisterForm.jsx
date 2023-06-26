import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/thunks';
import {
  RegButton,
  RegForm,
  RegInput,
  RegLabel,
  RegText,
  RegWrapper,
} from './RegisterForm.styled';
import { toast } from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    toast.success('Sign Up is Successfuly)');
    form.reset();
  };

  return (
    <>
      <RegForm onSubmit={handleSubmit}>
        <RegWrapper>
          <RegLabel>
            <RegText>Username</RegText>
            <RegInput type="text" name="name" placeholder="Jonny First" />
          </RegLabel>
        </RegWrapper>
        <RegWrapper>
          <RegLabel>
            <RegText>Email</RegText>
            <RegInput
              type="email"
              name="email"
              placeholder="JonnyFirst@yourmail.com"
            />
          </RegLabel>
        </RegWrapper>
        <RegLabel>
          <RegText>Password</RegText>
          <RegInput type="password" name="password" placeholder="password" />
        </RegLabel>
        <RegButton type="submit">Sign Up</RegButton>
      </RegForm>
    </>
  );
};
