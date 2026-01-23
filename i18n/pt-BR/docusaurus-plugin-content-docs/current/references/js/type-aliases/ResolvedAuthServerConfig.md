---
sidebar_label: ResolvedAuthServerConfig
---

# Alias de Tipo: ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Configuração resolvida para o servidor de autorização remoto com metadados.

Use isto quando os metadados já estiverem disponíveis, seja codificados diretamente ou obtidos previamente
via `fetchServerConfig()`.

## Propriedades {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Os metadados do servidor de autorização (Authorization Server), que devem estar em conformidade com a especificação MCP
(baseada nos Metadados do Servidor de Autorização OAuth 2.0).

Esses metadados são normalmente obtidos do endpoint well-known do servidor (Metadados do Servidor de Autorização OAuth 2.0
ou OpenID Connect Discovery); também podem ser fornecidos
diretamente na configuração caso o servidor não suporte tais endpoints.

**Nota:** Os metadados devem estar no formato camelCase conforme preferido pela biblioteca mcp-auth.

#### Veja também {#see}

 - [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

O tipo do servidor de autorização (Authorization Server).

#### Veja também {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) para os valores possíveis.