import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function LoginCard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="LoginCard">
      <form onSubmit={ handleSubmit(onSubmit) }>
        <input
          type="email"
          data-testid="common_login__input-email"
          placeholder="email"
          { ...register('email', {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }) }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          placeholder="password"
          { ...register('password', { required: true, minLength: 6 }) }
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !isDirty || !isValid }
        >
          Login
        </button>
      </form>
      <Link to="/Register">
        <button type="button" data-testid="common_login__button-register">
          Ainda nao tenho conta
        </button>
      </Link>
    </div>
  );
}

export default LoginCard;
