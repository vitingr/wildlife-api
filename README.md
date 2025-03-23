# Wildlife API

A API de Zoológico foi desenvolvida para fornecer informações sobre animais com base no seu **slug**. Este projeto foi construído como parte do curso de **Tecnologia em Sistemas para Internet** do **IFSP Capivari**. A API é construída com **Fastify** e **TypeScript**.

## Rota

A única rota disponível nesta API é:

### `GET /animals/:slug`

- **Parâmetros de rota**:
  - `slug` (string): O identificador único do animal (geralmente um nome ou alias curto).

- **Resposta de sucesso (200)**:
  - **Código de Status**: 200 OK
  - **Corpo**: Dados detalhados do animal.

  ```json
  {
    "slug": "monkey",
    "name": "Monkey",
    "species": "Primate",
    "habitat": "Tropical forests",
    "diet": "Omnivorous",
    "conservationStatus": "Least Concern"
  }
  ```

- **Resposta de erro (400)**:
  - **Código de Status**: 400 Bad Request
  - **Corpo**: Mensagem de erro, indicando que o formato da requisição não é válido.

  ```json
  {
    "validation": "slug",
    "code": "invalid_string",
    "message": "Invalid slug",
    "path": ["slug"]
  }
  ```

- **Resposta de erro (404)**:
  - **Código de Status**: 404 Not Found
  - **Corpo**: Se o animal com o slug fornecido não for encontrado, a API retornará um erro 404 Not Found. 

  ```json
    {
      "path": ["slug"]
    }
  ```

- **Exemplo de Requisição**:
  ```bash
  GET /animals/monkey

## Como Rodar o Projeto

### 1. Clone o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/zoologico-api.git
cd zoologico-api
```

### 2. Instale as Dependências

Utilize o pnpm para instalar as dependências do projeto:

```bash
pnpm install
```

### 3. Execute a API em Desenvolvimento

Execute a API com o seguinte comando:

```bash
pnpm dev
```

A API estará disponível em http://localhost:8000.