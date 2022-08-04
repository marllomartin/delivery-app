import React from 'react';

function LoginCard() {
  return (
    <div className="LoginCard">
      <form>
        <label htmlFor="email">
          Login:
          <input
            type="text"
            name="email"
            data-testid="common_login__input-email"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
          />
        </label>

        <button
          type="button"
          data-testid="common_login__button-login"
        >
          Login
        </button>

        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda nao tenho conta
        </button>
      </form>
    </div>
  );
}

export default LoginCard;
