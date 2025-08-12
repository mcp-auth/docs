---
sidebar_label: ValidateIssuerFunction
---

# Alias de tipo: ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

Tipo de función para validar el emisor (Issuer) del token de acceso (Access token).

Esta función debe lanzar un [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md) con el código 'invalid_issuer' si el emisor no es válido. El emisor debe validarse contra:

1. Los servidores de autorización configurados en los metadatos del servidor de autenticación de MCP-Auth
2. Los servidores de autorización listados en los metadatos del recurso protegido

## Parámetros {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## Devuelve {#returns}

`void`

## Lanza {#throws}

Cuando el emisor no es reconocido o es inválido.