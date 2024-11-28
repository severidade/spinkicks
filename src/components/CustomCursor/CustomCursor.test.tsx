import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomCursor from './CustomCursor';
import styles from './CustomCursor.module.css'

console.log(Object.keys(styles)) 

describe('🖱️ - CustomCursor', () => {

  it('Renderiza o cursor na tela', () => {
    render(<CustomCursor />);

    const cursor = screen.getByTestId('custom-cursor');
    expect(cursor).toBeInTheDocument();
  });


  it('Deve atualizar a posição do cursor ao mover o mouse', () => {
    render(<CustomCursor />);
    const cursor = screen.getByTestId('custom-cursor');

    // Simular movimento do mouse
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 200
    })
    document.dispatchEvent(mouseEvent)

    expect(cursor).toHaveStyle(`left: 100px; top: 200px`)
  });

  it('Adiciona a classe ".active" ao elemento cursor quando passar sobre um elemento com a classe ".link"', async () => {
    const user = userEvent.setup()

    render(
      <>
        <div className="link">Link 1</div>
        <div className="link">Link 2</div>
        <CustomCursor />
      </>
    );

    const cursor = screen.getByTestId('custom-cursor');
    const linkElements = document.querySelectorAll('.link');
    const linkElement = linkElements[0]; // Seleciona o primeiro elemento link

    // Verificar que inicialmente a classe active não está presente
    expect(cursor.classList).not.toContain(styles.active);

    // Simular o mouseover no link
    await user.hover(linkElement);

    // Verificar se a classe active foi adicionada
    expect(cursor.classList).toContain(styles.active);

    // Simular o mouseout
    await user.unhover(linkElement);

    // Verificar se a classe active foi removida
    expect(cursor.classList).not.toContain(styles.active);
  });

  it('Adiciona a classe ".active_veja" ao passar sobre um elemento com a classe ".link_img"', async () => {
    const user = userEvent.setup()

    render(
      <>
        <div className="link_img">Link 1</div>
        <div className="link_img">Link 2</div>
        <CustomCursor />
      </>
    );

    const cursor = screen.getByTestId('custom-cursor');
    const linkElements = document.querySelectorAll('.link_img');
    const linkElement = linkElements[0];

    // Verificar que inicialmente a classe active não está presente
    expect(cursor.classList).not.toContain(styles.active_view);

    // Simular o mouseover no link
    await user.hover(linkElement);
    console.log('styles.active:', styles.active_view);

    // Verificar se a classe active foi adicionada
    expect(cursor.classList).toContain(styles.active_view);

    // Simular o mouseout
    await user.unhover(linkElement);

    // Verificar se a classe active foi removida
    expect(cursor.classList).not.toContain(styles.active_view);
  });

});