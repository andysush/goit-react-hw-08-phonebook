import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/thunks';
import {
  LogButton,
  LogForm,
  LogInput,
  LogLabel,
  LogText,
  LogWrapper,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <LogForm onSubmit={handleSubmit}>
      <LogWrapper>
        <LogLabel>
          <LogText>Email</LogText>
          <LogInput
            type="email"
            name="email"
            placeholder="JonnyFirst@yourmail.com"
          />
        </LogLabel>
      </LogWrapper>
      <LogWrapper>
        <LogLabel>
          <LogText>Password</LogText>
          <LogInput type="password" name="password" placeholder="password" />
        </LogLabel>
      </LogWrapper>
      <LogButton type="submit">Log In</LogButton>
    </LogForm>
  );
};
