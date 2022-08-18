import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('LOGIN', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={ ['/login'] }>
        <App />
      </MemoryRouter>,
    );
  });
  it('Se existe o campo de email e senha', () => {
    const email = screen.getByTestId('common_login__input-email');
    const password = screen.getByTestId('common_login__input-password');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
  it('Se o botão fica habilitado', () => {
    const email = screen.getByTestId('common_login__input-email');
    const password = screen.getByTestId('common_login__input-password');
    const button = screen.getByTestId('common_login__button-login');
    userEvent.type(email, 'zebirita@email.com');
    console.log(email);
    userEvent.type(password, '$#zebirita#$');
    expect(button).not.toBeDisabled();
  });
});
// test('testa', () => {
//   const email = screen.getByTestId('common_login__input-email');
//   const password = screen.getByTestId('common_login__input-password');
//   const button = screen.getByTestId('common_login__button-login');
//   userEvent.type(email, 'zebirita@email.com');
//   console.log(email);
//   userEvent.type(password, '$#zebirita#$');
//   expect(button).toBeDisabled();
// });
