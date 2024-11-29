import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Importa o MemoryRouter
import Navbar from './Navbar';
import styles from './navbar.module.css';

describe('🍔 - Menu testes', () => {

  it('Renderiza container com lista de itens de menu', () => {
    // Envolve o componente Navbar com o MemoryRouter
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const containerNav = screen.getByRole('navigation');

    expect(containerNav).toBeInTheDocument();
    expect(containerNav).toHaveClass(styles.container_nav_link);
  });

  it('Renderiza no mínimo um item de menu', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navLinkElements = screen.getAllByRole('link');
    const navLinkElement = navLinkElements[0];

    expect(navLinkElements.length).toBeGreaterThan(0);

    expect(navLinkElement).toBeInTheDocument();
    expect(navLinkElement).toHaveClass(styles.nav_link);
  });

  it('Inicia com a classe "ativo" na rota principal', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    );

    const homeLink = screen.getByTestId('link-home');
    expect(homeLink).toHaveClass(styles.active);
  });

  it('Verifica se o link "home" esta inativo quando outra rota é acessada', () => {

    render(
      <MemoryRouter initialEntries={['/demo02']}>
        <Routes>
          <Route path="/demo02" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    );


    const navLinkElements = screen.getAllByRole('link');
    const homeLink = navLinkElements[0];

    expect(homeLink).not.toHaveClass(styles.active);
    expect(navLinkElements[1]).toHaveClass(styles.active)
  });
});
