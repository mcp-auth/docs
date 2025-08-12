---
sidebar_label: MCPAuth
---

# Class: MCPAuth

The main class for the mcp-auth library. It acts as a factory and registry for creating
authentication policies for your protected resources.

It is initialized with your server configurations and provides a `bearerAuth` method
to generate Express middleware for token-based authentication.

## Example {#example}

### Usage in `resource server` mode {#usage-in-resource-server-mode}

This is the recommended approach for new applications.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` can be a single configuration object or an array of them.
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

// Mount the router to handle Protected Resource Metadata
app.use(mcpAuth.protectedResourceMetadataRouter());

// Protect an API endpoint for the configured resource
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // Specify which resource this endpoint belongs to
    audience: resourceIdentifier, // Optionally, validate the 'aud' claim
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### Legacy Usage in `authorization server` mode (Deprecated) {#legacy-usage-in-authorization-server-mode-deprecated}

This approach is supported for backward compatibility.

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

// Mount the router to handle legacy Authorization Server Metadata
app.use(mcpAuth.delegatedRouter());

// Protect an endpoint using the default policy
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Handle the MCP request here
  },
);
```

## Constructors {#constructors}

### Constructor {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

Creates an instance of MCPAuth.
It validates the entire configuration upfront to fail fast on errors.

#### Parameters {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

The authentication configuration.

#### Returns {#returns}

`MCPAuth`

## Properties {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

The authentication configuration.

## Methods {#methods}

### bearerAuth() {#bearerauth}

#### Call Signature {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

Creates a Bearer auth handler (Express middleware) that verifies the access token in the
`Authorization` header of the request.

##### Parameters {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

A function that verifies the access token. It should accept the
access token as a string and return a promise (or a value) that resolves to the
verification result.

**See**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) for the type definition of the
`verifyAccessToken` function.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Optional configuration for the Bearer auth handler.

**See**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) for the available configuration options (excluding
`verifyAccessToken` and `issuer`).

##### Returns {#returns}

`RequestHandler`

An Express middleware function that verifies the access token and adds the
verification result to the request object (`req.auth`).

##### See {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) for the implementation details and the extended types of the
`req.auth` (`AuthInfo`) object.

#### Call Signature {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

Creates a Bearer auth handler (Express middleware) that verifies the access token in the
`Authorization` header of the request using a predefined mode of verification.

In the `'jwt'` mode, the handler will create a JWT verification function using the JWK Set
from the authorization server's JWKS URI.

##### Parameters {#parameters}

###### mode {#mode}

`"jwt"`

The mode of verification for the access token. Currently, only 'jwt' is supported.

**See**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) for the available modes.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Optional configuration for the Bearer auth handler, including JWT verification options and
remote JWK set options.

**See**

 - VerifyJwtConfig for the available configuration options for JWT
verification.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) for the available configuration options (excluding
`verifyAccessToken` and `issuer`).

##### Returns {#returns}

`RequestHandler`

An Express middleware function that verifies the access token and adds the
verification result to the request object (`req.auth`).

##### See {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) for the implementation details and the extended types of the
`req.auth` (`AuthInfo`) object.

##### Throws {#throws}

if the JWKS URI is not provided in the server metadata when
using the `'jwt'` mode.

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Creates a delegated router for serving legacy OAuth 2.0 Authorization Server Metadata endpoint
(`/.well-known/oauth-authorization-server`) with the metadata provided to the instance.

#### Returns {#returns}

`Router`

A router that serves the OAuth 2.0 Authorization Server Metadata endpoint with the
metadata provided to the instance.

#### Deprecated {#deprecated}

Use [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter) instead.

#### Example {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Assume this is initialized
app.use(mcpAuth.delegatedRouter());
```

#### Throws {#throws}

If called in `resource server` mode.

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

Creates a router that serves the OAuth 2.0 Protected Resource Metadata endpoint
for all configured resources.

This router automatically creates the correct `.well-known` endpoints for each
resource identifier provided in your configuration.

#### Returns {#returns}

`Router`

A router that serves the OAuth 2.0 Protected Resource Metadata endpoint.

#### Throws {#throws}

If called in `authorization server` mode.

#### Example {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// Assuming mcpAuth is initialized with one or more `protectedResources` configs
const mcpAuth: MCPAuth;
const app = express();

// This will serve metadata at `/.well-known/oauth-protected-resource/...`
// based on your resource identifiers.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
