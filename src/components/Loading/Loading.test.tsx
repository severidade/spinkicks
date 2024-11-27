import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loading from './index';

describe('Component Loading', () => {
  it('o texto "Carregando" deve ser exibido na tela', () => {
    render(<Loading />);
    const loadingText = screen.getByText(/Carregando/i);
    expect(loadingText).toBeInTheDocument();
  });

  it('deve renderizar o carregamento do spinner com data-testid "spinner" ', () => {
    render(<Loading data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});