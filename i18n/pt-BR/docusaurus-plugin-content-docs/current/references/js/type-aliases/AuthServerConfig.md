---
sidebar_label: AuthServerConfig
---

# Alias de Tipo: AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Configuração para o servidor remoto de autorização integrado com o servidor MCP.

## Propriedades {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Os metadados do servidor de autorização (Authorization Server), que devem estar em conformidade com a especificação MCP
(baseada nos Metadados do Servidor de Autorização OAuth 2.0).

Esses metadados normalmente são obtidos a partir do endpoint well-known do servidor (Metadados do Servidor de Autorização OAuth 2.0 ou OpenID Connect Discovery); também podem ser fornecidos
diretamente na configuração caso o servidor não suporte tais endpoints.

**Nota:** Os metadados devem estar no formato camelCase conforme preferido pela biblioteca mcp-auth.

#### Veja também {#see}

 - [Metadados do Servidor de Autorização OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

O tipo do servidor de autorização (Authorization Server).

#### Veja também {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) para os valores possíveis.