---
sidebar_label: fetchServerConfig
---

# Função: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

Busca a configuração do servidor de acordo com o emissor (Issuer) e o tipo de servidor de autorização (Authorization).

Esta função determina automaticamente a URL well-known com base no tipo de servidor, já que servidores OAuth e
OpenID Connect possuem convenções diferentes para seus endpoints de metadados.

## Parâmetros {#parameters}

### issuer {#issuer}

`string`

A URL do emissor (Issuer) do servidor de autorização (Authorization).

### config {#config}

`ServerMetadataConfig`

O objeto de configuração contendo o tipo de servidor e a função de transpile opcional.

## Retorno {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

Uma promise que resolve para a configuração do servidor.

## Veja também {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) para a implementação subjacente.
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) para a especificação de Metadados do Servidor de Autorização OAuth 2.0.
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) para a especificação de Descoberta do OpenID Connect.

## Exemplo {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// Buscando configuração do servidor OAuth
// Isso buscará os metadados de `https://auth.logto.io/.well-known/oauth-authorization-server/oauth`
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// Buscando configuração do servidor OpenID Connect
// Isso buscará os metadados de `https://auth.logto.io/oidc/.well-known/openid-configuration`
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## Lança exceção {#throws}

se a operação de busca falhar.

## Lança exceção {#throws}

se os metadados do servidor forem inválidos ou não corresponderem à
especificação MCP.