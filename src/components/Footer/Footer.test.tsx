import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './index';

describe('👢 - Component Footer', () => {
  it('o texto "Tecnologias" deve ser exibido na tela', () => {
    render(<Footer />);
    const text = screen.getByText(/Tecnologias/i);
    expect(text).toBeInTheDocument();
  });
  
  it('Deve conter links externos para o Linkedin, Github e Behance com os atributos corretos', () => {
    render(<Footer />);

    const links = [
      { testId: 'link_linkedin', href: 'https://www.linkedin.com/in/severidade/' },
      { testId: 'link_github', href: 'https://github.com/severidade' },
      { testId: 'link_behance', href: 'https://www.behance.net/severidade' },
    ];

    links.forEach(({ testId, href }) => {
      const link = screen.getByTestId(testId);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
});



