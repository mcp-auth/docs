---
sidebar_label: ValidateIssuerFunction
---

# Alias de Tipo: ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

Tipo de função para validar o emissor (Issuer) do token de acesso (Access token).

Esta função deve lançar um [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md) com o código 'invalid_issuer' se o emissor não for válido. O emissor deve ser validado em relação a:

1. Os servidores de autorização configurados nos metadados do servidor de autenticação do MCP-Auth
2. Os servidores de autorização listados nos metadados do recurso protegido

## Parâmetros {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## Retorna {#returns}

`void`

## Lança {#throws}

Quando o emissor não é reconhecido ou é inválido.