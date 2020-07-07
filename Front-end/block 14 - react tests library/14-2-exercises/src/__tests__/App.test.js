import React from 'react';
import { cleanup, getByText, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

afterEach(cleanup);
describe('testando rotas', () => {
  test('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/i);
    expect(home).toBeInTheDocument();
  });
  test('ao clicar em about me devo ser redirecionado', () => {
    const { getByText } = renderWithRouter(<App />);
    const aboutMe = getByText(/about me/i);
    fireEvent.click(aboutMe);
    expect(getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  });
  test('a partir de aboutme, devo clicar em projects e ser redirecionado', () => {
    const { getByText, queryByText } = renderWithRouter(<App />, {route: '/about'});
    const projects = getByText(/projects/i);
    expect(getByText(/Você está na página Sobre/i)).toBeInTheDocument();
    fireEvent.click(projects);
    expect(getByText(/Página não encontrada/i)).toBeInTheDocument();
    expect(queryByText(/Você está na página Sobre/i)).not.toBeInTheDocument();
  });
});
