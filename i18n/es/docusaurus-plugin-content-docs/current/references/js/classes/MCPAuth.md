---
sidebar_label: MCPAuth
---

# Clase: MCPAuth

La clase principal de la librería mcp-auth. Actúa como una fábrica y registro para crear políticas de autenticación para tus recursos protegidos.

Se inicializa con las configuraciones de tu servidor y proporciona un método `bearerAuth` para generar middleware de Express para la autenticación basada en tokens.

## Ejemplo {#example}

### Uso en modo `servidor de recursos` {#usage-in-resource-server-mode}

Este es el enfoque recomendado para nuevas aplicaciones.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` puede ser un solo objeto de configuración o un arreglo de ellos.
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

// Monta el router para manejar Metadata de Recursos Protegidos
app.use(mcpAuth.protectedResourceMetadataRouter());

// Protege un endpoint de API para el recurso configurado
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // Especifica a qué recurso pertenece este endpoint
    audience: resourceIdentifier, // Opcionalmente, valida el reclamo 'aud'
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### Uso heredado en modo `servidor de autorización` (Obsoleto) {#legacy-usage-in-authorization-server-mode-deprecated}

Este enfoque se admite por compatibilidad con versiones anteriores.

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

// Monta el router para manejar Metadata heredada del Servidor de Autorización
app.use(mcpAuth.delegatedRouter());

// Protege un endpoint usando la política predeterminada
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Maneja aquí la solicitud MCP
  },
);
```

## Constructores {#constructors}

### Constructor {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

Crea una instancia de MCPAuth.
Valida toda la configuración de antemano para fallar rápidamente en caso de errores.

#### Parámetros {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

La configuración de autenticación.

#### Devuelve {#returns}

`MCPAuth`

## Propiedades {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

La configuración de autenticación.

## Métodos {#methods}

### bearerAuth() {#bearerauth}

#### Firma de llamada {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

Crea un manejador Bearer auth (middleware de Express) que verifica el token de acceso en el encabezado
`Authorization` de la solicitud.

##### Parámetros {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Una función que verifica el token de acceso. Debe aceptar el
token de acceso como una cadena y devolver una promesa (o un valor) que resuelva el
resultado de la verificación.

**Ver**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para la definición de tipo de la función
`verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Configuración opcional para el manejador Bearer auth.

**Ver**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para las opciones de configuración disponibles (excluyendo
`verifyAccessToken` y `issuer`).

##### Devuelve {#returns}

`RequestHandler`

Una función middleware de Express que verifica el token de acceso y añade el
resultado de la verificación al objeto de la solicitud (`req.auth`).

##### Ver {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para los detalles de implementación y los tipos extendidos del
objeto `req.auth` (`AuthInfo`).

#### Firma de llamada {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

Crea un manejador Bearer auth (middleware de Express) que verifica el token de acceso en el
encabezado `Authorization` de la solicitud usando un modo de verificación predefinido.

En el modo `'jwt'`, el manejador creará una función de verificación JWT usando el JWK Set
del JWKS URI del servidor de autorización.

##### Parámetros {#parameters}

###### mode {#mode}

`"jwt"`

El modo de verificación para el token de acceso. Actualmente, solo se admite 'jwt'.

**Ver**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) para los modos disponibles.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Configuración opcional para el manejador Bearer auth, incluyendo opciones de verificación JWT y
opciones remotas de JWK set.

**Ver**

 - VerifyJwtConfig para las opciones de configuración disponibles para la verificación JWT.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para las opciones de configuración disponibles (excluyendo
`verifyAccessToken` y `issuer`).

##### Devuelve {#returns}

`RequestHandler`

Una función middleware de Express que verifica el token de acceso y añade el
resultado de la verificación al objeto de la solicitud (`req.auth`).

##### Ver {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) para los detalles de implementación y los tipos extendidos del
objeto `req.auth` (`AuthInfo`).

##### Lanza {#throws}

si el JWKS URI no se proporciona en los metadatos del servidor al
usar el modo `'jwt'`.

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Crea un router delegado para servir el endpoint heredado de Metadata del Servidor de Autorización OAuth 2.0
(`/.well-known/oauth-authorization-server`) con los metadatos proporcionados a la instancia.

#### Devuelve {#returns}

`Router`

Un router que sirve el endpoint de Metadata del Servidor de Autorización OAuth 2.0 con los
metadatos proporcionados a la instancia.

#### Obsoleto {#deprecated}

Usa [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter) en su lugar.

#### Ejemplo {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Supón que esto está inicializado
app.use(mcpAuth.delegatedRouter());
```

#### Lanza {#throws}

Si se llama en modo `servidor de recursos`.

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

Crea un router que sirve el endpoint de Metadata de Recursos Protegidos OAuth 2.0
para todos los recursos configurados.

Este router crea automáticamente los endpoints `.well-known` correctos para cada
identificador de recurso proporcionado en tu configuración.

#### Devuelve {#returns}

`Router`

Un router que sirve el endpoint de Metadata de Recursos Protegidos OAuth 2.0.

#### Lanza {#throws}

Si se llama en modo `servidor de autorización`.

#### Ejemplo {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// Suponiendo que mcpAuth está inicializado con una o más configuraciones de `protectedResources`
const mcpAuth: MCPAuth;
const app = express();

// Esto servirá metadata en `/.well-known/oauth-protected-resource/...`
// basado en tus identificadores de recursos.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
