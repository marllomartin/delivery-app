import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function RegisterAdm() {
  const [invalidRegister, setInvalidRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const Conflict = 409;

  const registerUser = async (data) => fetch('http://localhost:3001/registerAdm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: user.token,
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.status === Conflict) {
      setInvalidRegister(true);
    } else {
      const res = await response.json();
      return res;
    }
  });

  // console.log(errors);

  return (
    <div>
      <form onSubmit={ handleSubmit(registerUser) }>
        <input
          data-testid="admin_manage__input-name"
          type="text"
          placeholder="name"
          { ...register('name', { required: true, minLength: 12 }) }
        />
        <input
          data-testid="admin_manage__input-email"
          type="email"
          placeholder="email"
          { ...register('email', {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
          }) }
        />
        <input
          data-testid="admin_manage__input-password"
          type="password"
          placeholder="password"
          { ...register('password', { required: true, minLength: 6 }) }
        />
        <select
          { ...register('role', { required: true }) }
          data-testid="admin_manage__select-role"
        >
          <option value="customer">customer</option>
          <option value="seller">seller</option>
          <option value="administrator">administrator</option>
        </select>
        {errors.exampleRequired && <span>This field is required</span>}
        {invalidRegister && (
          <span data-testid="admin_manage__input-password">
            Registro invalido
          </span>
        )}
        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ !isDirty || !isValid }
        >
          register
        </button>
      </form>
    </div>
  );
}

export default RegisterAdm;
