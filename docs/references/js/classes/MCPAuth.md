---
sidebar_label: MCPAuth
---

# Class: MCPAuth

The main class for the mcp-auth library, which provides methods to create routers and useful
handlers for authentication and authorization in MCP servers.

## See

[MCP Auth](https://mcp-auth.dev) for more information about the library and its
usage.

## Example

An example integrating with a remote OIDC provider:

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

// Mount the router to handle OAuth 2.0 Authorization Server Metadata
app.use(mcpAuth.delegatedRouter());

// Use the Bearer auth handler the MCP route
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Handle the MCP request here
  },
);

// Use the auth info in the MCP callback
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## Constructors

### Constructor

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### Parameters

##### config

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### Returns

`MCPAuth`

## Properties

### config

```ts
readonly config: MCPAuthConfig;
```

## Methods

### bearerAuth()

#### Call Signature

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

Creates a Bearer auth handler (Express middleware) that verifies the access token in the
`Authorization` header of the request.

##### Parameters

###### verifyAccessToken

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

A function that verifies the access token. It should accept the
access token as a string and return a promise (or a value) that resolves to the
verification result.

**See**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) for the type definition of the
`verifyAccessToken` function.

###### config?

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Optional configuration for the Bearer auth handler.

**See**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) for the available configuration options (excluding
`verifyAccessToken` and `issuer`).

##### Returns

`RequestHandler`

An Express middleware function that verifies the access token and adds the
verification result to the request object (`req.auth`).

##### See

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) for the implementation details and the extended types of the
`req.auth` (`AuthInfo`) object.

#### Call Signature

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

Creates a Bearer auth handler (Express middleware) that verifies the access token in the
`Authorization` header of the request using a predefined mode of verification.

In the `'jwt'` mode, the handler will create a JWT verification function using the JWK Set
from the authorization server's JWKS URI.

##### Parameters

###### mode

`"jwt"`

The mode of verification for the access token. Currently, only 'jwt' is supported.

**See**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) for the available modes.

###### config?

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

Optional configuration for the Bearer auth handler, including JWT verification options and
remote JWK set options.

**See**

 - [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) for the available configuration options for JWT
verification.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) for the available configuration options (excluding
`verifyAccessToken` and `issuer`).

##### Returns

`RequestHandler`

An Express middleware function that verifies the access token and adds the
verification result to the request object (`req.auth`).

##### See

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) for the implementation details and the extended types of the
`req.auth` (`AuthInfo`) object.

##### Throws

if the JWKS URI is not provided in the server metadata when
using the `'jwt'` mode.

***

### delegatedRouter()

```ts
delegatedRouter(): Router;
```

Creates a delegated router that serves the OAuth 2.0 Authorization Server Metadata endpoint
(`/.well-known/oauth-authorization-server`) with the metadata provided to the instance.

#### Returns

`Router`

A router that serves the OAuth 2.0 Authorization Server Metadata endpoint with the
metadata provided to the instance.

#### Example

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Assume this is initialized
app.use(mcpAuth.delegatedRouter());
```
