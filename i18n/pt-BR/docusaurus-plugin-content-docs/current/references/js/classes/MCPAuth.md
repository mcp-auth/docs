---
sidebar_label: MCPAuth
---

# Classe: MCPAuth

A classe principal da biblioteca mcp-auth. Atua como uma fábrica e registro para criar
políticas de autenticação para seus recursos protegidos.

Ela é inicializada com as configurações do seu servidor e fornece um método `bearerAuth`
para gerar middleware Express para autenticação baseada em token.

## Exemplo {#example}

### Uso no modo `resource server` {#usage-in-resource-server-mode}

Esta é a abordagem recomendada para novas aplicações.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` pode ser um único objeto de configuração ou um array deles.
  protectedResources: [
    {
      metadata: {
        resource: resourceIdentifier,
        authorizationServers: [authServerConfig],
        scopesSupported: ['read:notes', 'write:notes'],
      },
    },
  ],
});

// Monta o router para lidar com o Metadata de Recurso Protegido
app.use(mcpAuth.protectedResourceMetadataRouter());

// Protege um endpoint de API para o recurso configurado
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // Especifique a qual recurso este endpoint pertence
    audience: resourceIdentifier, // Opcionalmente, valide a reivindicação 'aud'
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### Uso legado no modo `authorization server` (Obsoleto) {#legacy-usage-in-authorization-server-mode-deprecated}

Esta abordagem é suportada para compatibilidade retroativa.

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

// Monta o router para lidar com o Metadata legado do Authorization Server
app.use(mcpAuth.delegatedRouter());

// Protege um endpoint usando a política padrão
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Lide com a requisição MCP aqui
  },
);
```

## Construtores {#constructors}

### Construtor {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

Cria uma instância de MCPAuth.
Valida toda a configuração antecipadamente para falhar rapidamente em caso de erros.

#### Parâmetros {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

A configuração de autenticação.

#### Retorna {#returns}

`MCPAuth`

## Propriedades {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

A configuração de autenticação.

## Métodos {#methods}

### bearerAuth() {#bearerauth}

#### Assinatura de chamada {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

Cria um handler de autenticação Bearer (middleware Express) que verifica o token de acesso no
cabeçalho `Authorization` da requisição.

##### Parâmetros {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Uma função que verifica o token de acesso. Deve aceitar o
token de acesso como uma string e retornar uma promise (ou um valor) que resolve para o
resultado da verificação.

**Veja também**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para a definição do tipo da função
`verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Configuração opcional para o handler de autenticação Bearer.

**Veja também**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para as opções de configuração disponíveis (excluindo
`verifyAccessToken` e `issuer`).

##### Retorna {#returns}

`RequestHandler`

Uma função middleware Express que verifica o token de acesso e adiciona o
resultado da verificação ao objeto da requisição (`req.auth`).

##### Veja também {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para detalhes da implementação e os tipos estendidos do
objeto `req.auth` (`AuthInfo`).

#### Assinatura de chamada {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

Cria um handler de autenticação Bearer (middleware Express) que verifica o token de acesso no
cabeçalho `Authorization` da requisição usando um modo de verificação predefinido.

No modo `'jwt'`, o handler criará uma função de verificação JWT usando o JWK Set
do JWKS URI do servidor de autorização.

##### Parâmetros {#parameters}

###### mode {#mode}

`"jwt"`

O modo de verificação para o token de acesso. Atualmente, apenas 'jwt' é suportado.

**Veja também**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) para os modos disponíveis.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Configuração opcional para o handler de autenticação Bearer, incluindo opções de verificação JWT e
opções remotas de JWK set.

**Veja também**

 - VerifyJwtConfig para as opções de configuração disponíveis para verificação JWT.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para as opções de configuração disponíveis (excluindo
`verifyAccessToken` e `issuer`).

##### Retorna {#returns}

`RequestHandler`

Uma função middleware Express que verifica o token de acesso e adiciona o
resultado da verificação ao objeto da requisição (`req.auth`).

##### Veja também {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para detalhes da implementação e os tipos estendidos do
objeto `req.auth` (`AuthInfo`).

##### Lança exceção {#throws}

se o JWKS URI não for fornecido nos metadados do servidor ao
usar o modo `'jwt'`.

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Cria um router delegado para servir o endpoint legado de Metadata do OAuth 2.0 Authorization Server
(`/.well-known/oauth-authorization-server`) com os metadados fornecidos para a instância.

#### Retorna {#returns}

`Router`

Um router que serve o endpoint de Metadata do OAuth 2.0 Authorization Server com os
metadados fornecidos para a instância.

#### Obsoleto {#deprecated}

Use [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter) em vez disso.

#### Exemplo {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Suponha que está inicializado
app.use(mcpAuth.delegatedRouter());
```

#### Lança exceção {#throws}

Se chamado no modo `resource server`.

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

Cria um router que serve o endpoint de Metadata de Recurso Protegido OAuth 2.0
para todos os recursos configurados.

Este router cria automaticamente os endpoints `.well-known` corretos para cada
identificador de recurso fornecido na sua configuração.

#### Retorna {#returns}

`Router`

Um router que serve o endpoint de Metadata de Recurso Protegido OAuth 2.0.

#### Lança exceção {#throws}

Se chamado no modo `authorization server`.

#### Exemplo {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// Supondo que mcpAuth está inicializado com uma ou mais configs `protectedResources`
const mcpAuth: MCPAuth;
const app = express();

// Isso servirá metadata em `/.well-known/oauth-protected-resource/...`
// com base nos seus identificadores de recurso.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
