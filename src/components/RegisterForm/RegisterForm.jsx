import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/thunks';

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
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
