# 📝 Configurando RTL com o Vitest


- [X] Passo 1 - Instale as bibliotecas necessárias;

    ```bash

    npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest
    ```
- [X] Passo 2 - Na raiz do projeto, crie um arquivo chamado setupTests.ts e adicione o seguinte.

    ```bash
    // ./setupTests.ts
    import '@testing-library/jest-dom';
    ```
- [X] Passo 3 - Altere também o arquivo ``src/vite-env.d.ts``, adicionando a importação dos tipos:
    ```bash
    //src/vite-env.d.ts

    /// <reference types="vite/client" />
    /// <reference types="@testing-library/jest-dom" />
    ```

- [X] Passo 4 - No arquivo ``vite.config.ts``, adicione uma nova chave ao objeto que está sendo exportado:

    ```bash
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react-swc'

    export default defineConfig({
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
        css: true,
        reporters: ['verbose'],
        coverage: {
          provider: 'v8',
          reporter: ['text', 'json', 'html', 'lcov'],
          reportsDirectory: './coverage'
        }
      },
    })
    ```



- [X] Passo 5 - No arquivo ``package.json``,  adicione o script de teste e de coverage:

    ```bash
    // package.json

    //...

    "scripts": {
    //   "dev": "vite --open",
    //   "build": "vite build",
    //   "preview": "vite preview",
    "test": "vitest",
    "coverage:html": "vitest run --coverage --reporter=html"
    },

    // ...
    ```

Da primeira vez que você executar o comando ``npm run coverage``, será perguntado se deseja instalar o pacote ``'@vitest/coverage-v8'``. Aperte Y para confirmar.

Excelente! Sua aplicação agora está configurada para usar o RTL com Vitest! Para assegurar que tudo funciona conforme o esperado, verifique se o componente ``App`` renderiza corretamente o texto ``“Vite + React”``, que é exibido por padrão ao criar uma aplicação React com Vite.

- [X] Passo 6 - Crie um arquivo ``/src/App.test.tsx`` e adicione o código:

    ```bash
    // src/App.test.tsx

    import { render, screen } from '@testing-library/react';

    import App from './App';

    it('should show "Vite + React" text', () => {
    render(<App />);
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
    })

    // ...
    ```


## 💡 Ferramentas

- Todos os seletores ``queries`` estão disponíveis [nessa lista](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/a0efa7dc-2028-4f04-9675-23045a4b67f2/day/64db167a-61de-4b3b-bdc7-a2576326656b/lesson/234a11a8-158d-40e7-9361-5935f3525b31) da ``react-testing-library``.

- Aqui está a lista completa das funções de asserção disponíveis no ``@testing-library/jest-dom``, com uma breve descrição de cada uma delas. Essas funções são extensões úteis ao ``expect`` para realizar asserções em testes de DOM. 