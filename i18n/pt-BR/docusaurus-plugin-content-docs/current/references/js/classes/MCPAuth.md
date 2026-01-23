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

#### Opção 1: Configuração de descoberta (recomendado para runtimes edge) {#option-1-discovery-config-recommended-for-edge-runtimes}

Use isto quando quiser que os metadados sejam buscados sob demanda. Isso é especialmente útil para
runtimes edge como Cloudflare Workers, onde não é permitido fetch assíncrono no topo do arquivo.

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const resourceIdentifier = 'https://api.example.com/notes';

const mcpAuth = new MCPAuth({
  protectedResources: [
    {
      metadata: {
        resource: resourceIdentifier,
        // Basta passar issuer e type - os metadados serão buscados na primeira requisição
        authorizationServers: [{ issuer: 'https://auth.logto.io/oidc', type: 'oidc' }],
        scopesSupported: ['read:notes', 'write:notes'],
      },
    },
  ],
});
```

#### Opção 2: Configuração resolvida (metadados pré-buscados) {#option-2-resolved-config-pre-fetched-metadata}

Use isto quando quiser buscar e validar os metadados no momento da inicialização.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();
const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
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
```

#### Usando o middleware {#using-the-middleware}

```ts
// Monta o router para lidar com Protected Resource Metadata
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

### Uso legado no modo `authorization server` (Descontinuado) {#legacy-usage-in-authorization-server-mode-deprecated}

Esta abordagem é suportada para compatibilidade retroativa.

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth = new MCPAuth({
  // Configuração de descoberta - metadados buscados sob demanda
  server: { issuer: 'https://auth.logto.io/oidc', type: 'oidc' },
});

// Monta o router para lidar com metadados legados do Authorization Server
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

Cria um handler Bearer auth (middleware Express) que verifica o token de acesso no
cabeçalho `Authorization` da requisição.

##### Parâmetros {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Uma função que verifica o token de acesso. Deve aceitar o
token de acesso como uma string e retornar uma promise (ou valor) que resolve para o
resultado da verificação.

**Veja também**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para a definição do tipo da função
`verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Configuração opcional para o handler Bearer auth.

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

Cria um handler Bearer auth (middleware Express) que verifica o token de acesso no
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

Configuração opcional para o handler Bearer auth, incluindo opções de verificação JWT e
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

Cria um router delegado para servir o endpoint legado OAuth 2.0 Authorization Server Metadata
(`/.well-known/oauth-authorization-server`) com os metadados fornecidos à instância.

#### Retorna {#returns}

`Router`

Um router que serve o endpoint OAuth 2.0 Authorization Server Metadata com os
metadados fornecidos à instância.

#### Descontinuado {#deprecated}

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

Cria um router que serve o endpoint OAuth 2.0 Protected Resource Metadata
para todos os recursos configurados.

Este router cria automaticamente os endpoints `.well-known` corretos para cada
identificador de recurso fornecido na sua configuração.

#### Retorna {#returns}

`Router`

Um router que serve o endpoint OAuth 2.0 Protected Resource Metadata.

#### Lança exceção {#throws}

Se chamado no modo `authorization server`.

#### Exemplo {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// Supondo que mcpAuth foi inicializado com uma ou mais configs `protectedResources`
const mcpAuth: MCPAuth;
const app = express();

// Isso servirá metadados em `/.well-known/oauth-protected-resource/...`
// baseado nos seus identificadores de recurso.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
