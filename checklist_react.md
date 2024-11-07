# 📝 Iniciando um projeto React com Vite
  
<details>
    <summary>Criar e configurar uma aplicação React usando o VITE</summary>

- [x] Criar o diretório do projeto;
- [x] Instalar o react usando o Vite ``npm create vite@latest`` ;
      obs: entrar na pasta mas nao instalar as dependencias. so fazer isso depois de instalr o eslint
- [x] Alterar a chave ``dev`` do arquivo ``package.json``  ;

    ```bash

    "scripts": {
      "dev": "vite --open",
      "build": "vite build",
    },
    ```

</details>

<details>
    <summary>Configurar o ESLint</summary>

- [x] excluir o arquivo de configuração de lint criado pelo vite com o comando:

    ```bash
    rm .eslintrc.cjs
    ```
- [x] Remover as dependências que foram instaladas pelo Vite.

    ```bash
    npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh
    ```
- [x] instalar o pacote de regras de lint com o padrão do Airbnb.

    ```bash
    npx install-peerdeps --dev eslint-config-airbnb
    ```

- [x] Criar o arquivo ``.eslintrc.json`` na raiz do projeto com o seguinte conteúdo.

    ```bash
    {
    "extends": ["airbnb", "airbnb/hooks", "plugin:@typescript-eslint/recommended"],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "env": {
        "browser": true,
        "es2021": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
    }
    }

    ```

- [x] Editar o arquivo ``pakage.json`` adicionando o script para rodar o ESlint.

    ```bash
    //package.json
    ...
      "scripts": {
        ...
        "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
        ...
      },
    ...
    ```

- [x] Criar o arquivo de configuração do VSCode ``.vscode/settings.json`` na raiz do projeto.

    ```bash
    //.vscode/settings.json
    {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.fixAll.stylelint": "explicit"
    },
    "extensions.ignoreRecommendations": false,
    }
    ```

- [x] Rodar o Lint

```bash
npm run lit
```
</details>
