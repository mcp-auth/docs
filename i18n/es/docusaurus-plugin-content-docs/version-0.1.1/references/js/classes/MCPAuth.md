---
sidebar_label: MCPAuth
---

# Clase: MCPAuth

La clase principal para la librería mcp-auth, que proporciona métodos para crear routers y manejadores útiles para la autenticación (Autenticación) y autorización (Autorización) en servidores MCP.

## Ver también {#see}

[MCP Auth](https://mcp-auth.dev) para más información sobre la librería y su uso.

## Ejemplo {#example}

Un ejemplo integrando con un proveedor OIDC remoto:

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

// Monta el router para manejar el endpoint de metadatos del servidor de autorización OAuth 2.0
app.use(mcpAuth.delegatedRouter());

// Usa el manejador Bearer auth en la ruta MCP
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Maneja aquí la solicitud MCP
  },
);

// Usa la información de autenticación en el callback MCP
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## Constructores {#constructors}

### Constructor {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### Parámetros {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### Devuelve {#returns}

`MCPAuth`

## Propiedades {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

## Métodos {#methods}

### bearerAuth() {#bearerauth}

#### Firma de llamada {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

Crea un manejador Bearer auth (middleware de Express) que verifica el token de acceso (Token de acceso) en el encabezado `Authorization` de la solicitud.

##### Parámetros {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Una función que verifica el token de acceso (Token de acceso). Debe aceptar el token de acceso como una cadena y devolver una promesa (o un valor) que resuelva el resultado de la verificación.

**Ver también**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para la definición de tipo de la función `verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Configuración opcional para el manejador Bearer auth.

**Ver también**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para las opciones de configuración disponibles (excluyendo `verifyAccessToken` y `issuer`).

##### Devuelve {#returns}

`RequestHandler`

Una función middleware de Express que verifica el token de acceso (Token de acceso) y añade el resultado de la verificación al objeto de la solicitud (`req.auth`).

##### Ver también {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para detalles de implementación y los tipos extendidos del objeto `req.auth` (`AuthInfo`).

#### Firma de llamada {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

Crea un manejador Bearer auth (middleware de Express) que verifica el token de acceso (Token de acceso) en el encabezado `Authorization` de la solicitud usando un modo de verificación predefinido.

En el modo `'jwt'`, el manejador creará una función de verificación JWT usando el JWK Set del URI JWKS del servidor de autorización (Autorización).

##### Parámetros {#parameters}

###### mode {#mode}

`"jwt"`

El modo de verificación para el token de acceso (Token de acceso). Actualmente, solo se admite 'jwt'.

**Ver también**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) para los modos disponibles.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

Configuración opcional para el manejador Bearer auth, incluyendo opciones de verificación JWT y opciones remotas de JWK set.

**Ver también**

 - [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) para las opciones de configuración disponibles para la verificación JWT.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para las opciones de configuración disponibles (excluyendo `verifyAccessToken` y `issuer`).

##### Devuelve {#returns}

`RequestHandler`

Una función middleware de Express que verifica el token de acceso (Token de acceso) y añade el resultado de la verificación al objeto de la solicitud (`req.auth`).

##### Ver también {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para detalles de implementación y los tipos extendidos del objeto `req.auth` (`AuthInfo`).

##### Lanza {#throws}

si el URI JWKS no se proporciona en los metadatos del servidor al usar el modo `'jwt'`.

***

### delegatedRouter() {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Crea un router delegado que sirve el endpoint de metadatos del servidor de autorización OAuth 2.0 (`/.well-known/oauth-authorization-server`) con los metadatos proporcionados a la instancia.

#### Devuelve {#returns}

`Router`

Un router que sirve el endpoint de metadatos del servidor de autorización OAuth 2.0 con los metadatos proporcionados a la instancia.

#### Ejemplo {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Se asume que está inicializado
app.use(mcpAuth.delegatedRouter());
```