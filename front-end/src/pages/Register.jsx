import React from 'react';
import { useForm } from 'react-hook-form';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="Nome"
          { ...register('Nome', { required: true, minLength: 12 }) }
        />
        <input
          data-testid="common_register__input-email"
          type="email"
          placeholder="email"
          { ...register('email', {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
          }) }
        />
        <input
          data-testid="common_register__input-password"
          type="password"
          placeholder="password"
          { ...register('password', { required: true, minLength: 6 }) }
        />
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ !isDirty || !isValid }
        >
          register

        </button>
      </form>
    </div>
  );
}

export default Register;
