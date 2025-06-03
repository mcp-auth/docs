---
sidebar_label: MCPAuth
---

# Classe: MCPAuth

A classe principal da biblioteca mcp-auth, que fornece métodos para criar roteadores e manipuladores úteis para autenticação (Autenticação) e autorização (Autorização) em servidores MCP.

## Veja também {#see}

[MCP Auth](https://mcp-auth.dev) para mais informações sobre a biblioteca e seu uso.

## Exemplo {#example}

Um exemplo integrando com um provedor OIDC remoto:

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();
const mcpAuth = new MCPAuth({
  server: await fetchServerConfig(
    'https://auth.logto.io/oidc',
    { type: 'oidc' }
  ),
});

// Monta o roteador para lidar com o Metadata do Servidor de Autorização OAuth 2.0
app.use(mcpAuth.delegatedRouter());

// Usa o manipulador Bearer auth na rota MCP
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Lide com a requisição MCP aqui
  },
);

// Usa as informações de autenticação no callback MCP
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## Construtores {#constructors}

### Construtor {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### Parâmetros {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### Retorna {#returns}

`MCPAuth`

## Propriedades {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

## Métodos {#methods}

### bearerAuth() {#bearerauth}

#### Assinatura de chamada {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

Cria um manipulador Bearer auth (middleware Express) que verifica o token de acesso (Access token) no cabeçalho `Authorization` da requisição.

##### Parâmetros {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Uma função que verifica o token de acesso (Access token). Deve aceitar o token de acesso como uma string e retornar uma promise (ou um valor) que resolve para o resultado da verificação.

**Veja também**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para a definição do tipo da função `verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Configuração opcional para o manipulador Bearer auth.

**Veja também**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para as opções de configuração disponíveis (excluindo `verifyAccessToken` e `issuer`).

##### Retorna {#returns}

`RequestHandler`

Uma função middleware Express que verifica o token de acesso (Access token) e adiciona o resultado da verificação ao objeto da requisição (`req.auth`).

##### Veja também {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para detalhes da implementação e os tipos estendidos do objeto `req.auth` (`AuthInfo`).

#### Assinatura de chamada {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

Cria um manipulador Bearer auth (middleware Express) que verifica o token de acesso (Access token) no cabeçalho `Authorization` da requisição usando um modo de verificação predefinido.

No modo `'jwt'`, o manipulador criará uma função de verificação de JWT usando o JWK Set do URI JWKS do servidor de autorização (Authorization).

##### Parâmetros {#parameters}

###### mode {#mode}

`"jwt"`

O modo de verificação para o token de acesso (Access token). Atualmente, apenas 'jwt' é suportado.

**Veja também**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) para os modos disponíveis.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

Configuração opcional para o manipulador Bearer auth, incluindo opções de verificação JWT e opções remotas de JWK set.

**Veja também**

 - [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) para as opções de configuração disponíveis para verificação JWT.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para as opções de configuração disponíveis (excluindo `verifyAccessToken` e `issuer`).

##### Retorna {#returns}

`RequestHandler`

Uma função middleware Express que verifica o token de acesso (Access token) e adiciona o resultado da verificação ao objeto da requisição (`req.auth`).

##### Veja também {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para detalhes da implementação e os tipos estendidos do objeto `req.auth` (`AuthInfo`).

##### Lança {#throws}

se o URI JWKS não for fornecido nos metadados do servidor ao usar o modo `'jwt'`.

***

### delegatedRouter() {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Cria um roteador delegado que serve o endpoint Metadata do Servidor de Autorização OAuth 2.0 (`/.well-known/oauth-authorization-server`) com os metadados fornecidos para a instância.

#### Retorna {#returns}

`Router`

Um roteador que serve o endpoint Metadata do Servidor de Autorização OAuth 2.0 com os metadados fornecidos para a instância.

#### Exemplo {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Suponha que já esteja inicializado
app.use(mcpAuth.delegatedRouter());
```