import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function LoginCard() {
  const [invalidLogin, setInvalidLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const history = useNavigate();
  const notFount = 404;

  const login = async (data) => fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.status === notFount) {
      setInvalidLogin(true);
    } else {
      const res = await response.json();
      localStorage.setItem('user', JSON.stringify(res));
      history('/customer/products');
    }
  });
  // console.log(errors);

  return (
    <div className="LoginCard">
      <form onSubmit={ handleSubmit(login) }>
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
        {invalidLogin && (
          <span data-testid="common_login__element-invalid-email">
            Invalid email/password
          </span>
        )}
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !isDirty || !isValid }
        >
          Login
        </button>
        <Link to="/register">
          <button type="button" data-testid="common_login__button-register">
            Ainda nao tenho conta
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LoginCard;
