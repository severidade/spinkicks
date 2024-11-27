# Funções Comuns em jest-dom

## 1. Verificar se o elemento está presente no DOM:

### `toBeInTheDocument()`
Verifica se o elemento está no DOM.

```javascript
expect(element).toBeInTheDocument();
```

## 2. Verificar visibilidade:

### `toBeVisible()`
Verifica se o elemento está visível (não tem estilos como `display: none`, `visibility: hidden` ou `opacity: 0`).

```javascript
expect(element).toBeVisible();
```

### `toBeHidden()`
Verifica se o elemento está oculto (contrário de `toBeVisible()`).

```javascript
expect(element).toBeHidden();
```

## 3. Verificar texto:

### `toHaveTextContent(text)`
Verifica se o elemento contém um texto específico.

```javascript
expect(element).toHaveTextContent('Hello, world!');
expect(element).toHaveTextContent(/hello/i); // Aceita regex
```

## 4. Verificar classes CSS:

### `toHaveClass(...classNames)`
Verifica se o elemento tem uma ou mais classes específicas.

```javascript
expect(element).toHaveClass('my-class');
expect(element).toHaveClass('class1', 'class2');
expect(element).not.toHaveClass('other-class');
```

## 5. Verificar atributos e valores:

### `toHaveAttribute(attr, value?)`
Verifica se o elemento tem um atributo específico com (ou sem) valor.

```javascript
expect(element).toHaveAttribute('type', 'button');
expect(element).toHaveAttribute('aria-label');
```

### `toHaveValue(value)`
Verifica o valor de um campo de formulário (`input`, `textarea`).

```javascript
expect(input).toHaveValue('texto');
expect(checkbox).toHaveValue(true);
```

### `toHaveProperty(property, value?)`
Verifica uma propriedade do elemento.

```javascript
expect(element).toHaveProperty('checked', true);
```

## 6. Verificar estilos:

### `toHaveStyle(style)`
Verifica se o elemento tem um estilo específico.

```javascript
expect(element).toHaveStyle('display: block');
```

## 7. Verificar foco:

### `toHaveFocus()`
Verifica se o elemento tem foco.

```javascript
expect(input).toHaveFocus();
```

## 8. Verificar estado de desabilitação:

### `toBeDisabled()`
Verifica se o elemento está desabilitado.

```javascript
expect(button).toBeDisabled();
```

### `toBeEnabled()`
Verifica se o elemento está habilitado.

```javascript
expect(button).toBeEnabled();
```

## 9. Verificar seleção de opções (em `<select>`):

### `toBeSelected()`
Verifica se uma opção está selecionada.

```javascript
expect(option).toBeSelected();
```

### `toHaveDisplayValue(value)`
Verifica o valor exibido em um campo de entrada ou `select`.

```javascript
expect(input).toHaveDisplayValue('Selecione um valor');
```

## 10. Verificar tabelas:

### `toContainHTML(htmlString)`
Verifica se o elemento contém um HTML específico.

```javascript
expect(element).toContainHTML('<span>Texto</span>');
```

### `toHaveTextContent(text)`
Verifica o conteúdo de texto (como mencionado acima).

## 11. Verificar documentos acessíveis (ARIA):

### `toHaveAccessibleName(name)`
Verifica o nome acessível do elemento (atributo `aria-label`, `aria-labelledby`, ou texto visível).

```javascript
expect(button).toHaveAccessibleName('Enviar');
```

### `toHaveAccessibleDescription(description)`
Verifica a descrição acessível do elemento (`aria-describedby`).

```javascript
expect(input).toHaveAccessibleDescription('Informe seu nome completo');
