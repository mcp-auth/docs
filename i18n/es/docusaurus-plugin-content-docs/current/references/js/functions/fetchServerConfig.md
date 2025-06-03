---
sidebar_label: fetchServerConfig
---

# Función: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

Obtiene la configuración del servidor según el emisor (Issuer) y el tipo de servidor de autorización (Authorization).

Esta función determina automáticamente la URL well-known en función del tipo de servidor, ya que los servidores OAuth y OpenID Connect tienen convenciones diferentes para sus endpoints de metadatos.

## Parámetros {#parameters}

### issuer {#issuer}

`string`

La URL del emisor (Issuer) del servidor de autorización (Authorization).

### config {#config}

`ServerMetadataConfig`

El objeto de configuración que contiene el tipo de servidor y una función de transpilación opcional.

## Devuelve {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

Una promesa que se resuelve con la configuración del servidor.

## Consulta también {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) para la implementación subyacente.
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) para la especificación de metadatos del servidor de autorización OAuth 2.0 (Authorization).
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) para la especificación de descubrimiento de OpenID Connect.

## Ejemplo {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// Obteniendo la configuración del servidor OAuth
// Esto obtendrá los metadatos desde `https://auth.logto.io/.well-known/oauth-authorization-server/oauth`
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// Obteniendo la configuración del servidor OpenID Connect
// Esto obtendrá los metadatos desde `https://auth.logto.io/oidc/.well-known/openid-configuration`
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## Lanza {#throws}

si la operación de obtención falla.

## Lanza {#throws}

si los metadatos del servidor son inválidos o no coinciden con la especificación MCP.