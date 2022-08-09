import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Register() {
  const [invalidRegister, setInvalidRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const history = useNavigate();
  const Conflict = 409;

  const registerUser = async (data) => fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === Conflict) {
      setInvalidRegister(true);
      return response.json();
    }
  }).then((res) => {
    localStorage.setItem('user', JSON.stringify(res));
    history('/customer/products');
  });

  // console.log(errors);

  return (
    <div>
      <form onSubmit={ handleSubmit(registerUser) }>
        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="name"
          { ...register('name', { required: true, minLength: 12 }) }
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
        {errors.exampleRequired && <span>This field is required</span>}
        {invalidRegister && (
          <span data-testid="common_register__element-invalid_register">
            Registro invalido
          </span>
        )}
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
