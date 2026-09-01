---
sidebar_label: MCPAuth
---

# Class: MCPAuth

The main class of the mcp-auth library, providing the two inputs the MCP TypeScript SDK asks
you to bring when protecting an MCP server — one method each:

1. **A token verifier** — the instance itself implements the SDK's `OAuthTokenVerifier`
   interface, and [getBearerAuthOptions](/references/js/classes/MCPAuth.md#getbearerauthoptions) bundles it with the resource metadata URL
   into the SDK's `BearerAuthOptions`, ready to feed to `requireBearerAuth` (fetch-native or
   any of its framework adapters).
2. **Your auth metadata** — [getAuthMetadataOptions](/references/js/classes/MCPAuth.md#getauthmetadataoptions) returns the SDK's
   `AuthMetadataOptions`, ready to feed to `oauthMetadataResponse` (fetch-native) or
   `mcpAuthMetadataRouter` (from `@modelcontextprotocol/express`).

One instance represents one protected resource trusting one authorization server. Create
multiple instances if your deployment serves multiple resources.

## Example

### Fetch-native runtimes (Cloudflare Workers, Deno, Bun, Node.js)

```ts
import { createMcpHandler, McpServer, oauthMetadataResponse, requireBearerAuth } from '@modelcontextprotocol/server';
import { getAuthInfo, MCPAuth } from 'mcp-auth';

const mcpAuth = new MCPAuth({
  protectedResourceMetadata: {
    resource: 'https://api.example.com/mcp',
    authorizationServer: { issuer: 'https://auth.example.com/oidc', type: 'oidc' },
    scopesSupported: ['read:notes'],
  },
});

const createServer = () => {
  const server = new McpServer({ name: 'Notes', version: '1.0.0' });
  server.registerTool('whoami', { description: 'Get the current user' }, (ctx) => {
    const { subject, claims } = getAuthInfo(ctx);
    return { content: [{ type: 'text', text: JSON.stringify({ subject, claims }) }] };
  });
  return server;
};

const handler = createMcpHandler(createServer);
const gate = requireBearerAuth(mcpAuth.getBearerAuthOptions({ requiredScopes: ['read:notes'] }));

export default {
  async fetch(request: Request): Promise<Response> {
    // Serve the OAuth discovery documents; the path guard keeps the (lazily fetched)
    // metadata resolution off the request path of regular MCP traffic
    if (new URL(request.url).pathname.startsWith('/.well-known/')) {
      const metadataResponse = oauthMetadataResponse(request, await mcpAuth.getAuthMetadataOptions());
      if (metadataResponse) {
        return metadataResponse;
      }
    }

    // Require a valid Bearer token for everything else
    const auth = await gate(request);
    if (auth instanceof Response) {
      return auth;
    }

    return handler.fetch(request, { authInfo: auth });
  },
};
```

### Express (via `@modelcontextprotocol/express`)

```ts
import { createMcpExpressApp, mcpAuthMetadataRouter, requireBearerAuth } from '@modelcontextprotocol/express';
import { toNodeHandler } from '@modelcontextprotocol/node';
import { createMcpHandler } from '@modelcontextprotocol/server';
import { MCPAuth } from 'mcp-auth';

const mcpAuth = new MCPAuth({
  protectedResourceMetadata: {
    resource: 'https://api.example.com/mcp',
    authorizationServer: { issuer: 'https://auth.example.com/oidc', type: 'oidc' },
    scopesSupported: ['read:notes'],
  },
});

// Reuses `createServer` from the fetch-native example above
const mcpNodeHandler = toNodeHandler(createMcpHandler(createServer));

const app = createMcpExpressApp();
app.use(mcpAuthMetadataRouter(await mcpAuth.getAuthMetadataOptions()));
app.all(
  '/mcp',
  requireBearerAuth(mcpAuth.getBearerAuthOptions({ requiredScopes: ['read:notes'] })),
  // `createMcpExpressApp` applies `express.json()`, which drains the request stream, so the
  // parsed body is passed along explicitly
  async (request, response) => mcpNodeHandler(request, response, request.body)
);
app.listen(3000);
```

## Implements

- `OAuthTokenVerifier`

## Constructors

### Constructor

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

Creates an instance of MCPAuth and validates the configuration, so misconfigurations fail
fast at startup. For a resolved authorization server config, the metadata is validated
immediately; for a discovery config, the metadata is validated when it is first fetched.

#### Parameters

##### config

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

The authentication configuration.

#### Returns

`MCPAuth`

#### Throws

if the configuration is malformed.

#### Throws

if the provided authorization server metadata is invalid
or does not satisfy the MCP authorization specification.

## Properties

### config

```ts
readonly config: MCPAuthConfig;
```

The authentication configuration.

## Accessors

### resourceMetadataUrl

#### Get Signature

```ts
get resourceMetadataUrl(): string;
```

The RFC 9728 Protected Resource Metadata URL for the configured
[ProtectedResourceMetadataConfig.resource](/references/js/type-aliases/ProtectedResourceMetadataConfig.md#resource), built with the MCP SDK's
`getOAuthProtectedResourceMetadataUrl`.

Pass it as the `resourceMetadataUrl` option of the SDK's `requireBearerAuth` so the
`WWW-Authenticate` challenge on `401` responses points clients at the metadata document.

##### Example

```ts
const mcpAuth = new MCPAuth({
  protectedResourceMetadata: { resource: 'https://api.example.com/mcp', ... },
});
mcpAuth.resourceMetadataUrl
// → 'https://api.example.com/.well-known/oauth-protected-resource/mcp'
```

##### Returns

`string`

## Methods

### getAuthMetadataOptions()

```ts
getAuthMetadataOptions(): Promise<AuthMetadataOptions>;
```

Builds the MCP SDK's `AuthMetadataOptions` from this instance's configuration and the
(possibly lazily fetched) authorization server metadata.

Feed the result to the SDK's `oauthMetadataResponse` (fetch-native) or to
`mcpAuthMetadataRouter` from `@modelcontextprotocol/express` to serve the OAuth discovery
documents (RFC 9728 Protected Resource Metadata and RFC 8414 Authorization Server Metadata).

#### Returns

`Promise`\<`AuthMetadataOptions`\>

A promise that resolves to the SDK's `AuthMetadataOptions`.

#### Throws

if fetching the authorization server metadata fails.

#### Throws

if the fetched metadata is invalid or does not satisfy the
MCP authorization specification.

***

### getBearerAuthOptions()

```ts
getBearerAuthOptions(options?: Pick<BearerAuthOptions, "requiredScopes">): BearerAuthOptions;
```

Builds the MCP SDK's `BearerAuthOptions` from this instance: the instance itself as the
`verifier` and [resourceMetadataUrl](/references/js/classes/MCPAuth.md#resourcemetadataurl) for the `WWW-Authenticate` challenge, plus the
per-endpoint `requiredScopes` you pass in.

Feed the result to `requireBearerAuth` — the fetch-native one from
`@modelcontextprotocol/server` and the Express middleware from
`@modelcontextprotocol/express` accept the same options type. Endpoints with different
scope requirements call this method once each.

#### Parameters

##### options?

`Pick`\<`BearerAuthOptions`, `"requiredScopes"`\>

Per-endpoint bearer-auth requirements.

#### Returns

`BearerAuthOptions`

The SDK's `BearerAuthOptions`, ready to pass to `requireBearerAuth`.

#### Example

```ts
// Fetch-native (Cloudflare Workers, Deno, Bun, Node.js)
const gate = requireBearerAuth(mcpAuth.getBearerAuthOptions({ requiredScopes: ['read:notes'] }));

// Express
app.post('/mcp', requireBearerAuth(mcpAuth.getBearerAuthOptions({ requiredScopes: ['read:notes'] })), ...);
```

***

### verifyAccessToken()

```ts
verifyAccessToken(token: string): Promise<McpAuthInfo>;
```

Verifies a JWT access token issued by the trusted authorization server and returns the
extended auth info ([McpAuthInfo](/references/js/type-aliases/McpAuthInfo.md)).

This method implements the MCP SDK's `OAuthTokenVerifier` interface, so the instance can be
passed directly as the `verifier` to the SDK's `requireBearerAuth` / `verifyBearerToken`
(or their framework adapters).

The verification flow:

1. Decodes the token (without verifying) and rejects it unless its `iss` claim matches the
   trusted issuer — before any metadata or JWKS request is made.
2. Resolves the authorization server metadata and JWK Set (both cached across calls).
3. Verifies the token signature and the `iss` and `aud` claims (the `aud` claim must match
   the [ProtectedResourceMetadataConfig.resource](/references/js/type-aliases/ProtectedResourceMetadataConfig.md#resource) identifier, per the RFC 8707
   audience binding the MCP authorization specification requires), plus standard time
   claims, via `jose.jwtVerify`.
4. Requires a non-empty `sub` claim (per RFC 9068) and maps the payload to
   [McpAuthInfo](/references/js/type-aliases/McpAuthInfo.md): `clientId` from `client_id` (falling back to `azp`), `scopes` from
   `scope` (space-separated) or `scopes` (array), and `expiresAt` from `exp`.

#### Parameters

##### token

`string`

The raw JWT access token.

#### Returns

`Promise`\<[`McpAuthInfo`](/references/js/type-aliases/McpAuthInfo.md)\>

A promise that resolves to the verified auth info.

#### Throws

(from `@modelcontextprotocol/server`, with code `invalid_token`) if the
token is malformed, from an untrusted issuer, or fails verification. The SDK bearer-auth
helpers map this to a `401` response with a `WWW-Authenticate` challenge.

#### Throws

if fetching the authorization server metadata fails; the SDK
bearer-auth helpers map non-`OAuthError` errors to a `500` response.

#### Throws

if the authorization server metadata is invalid or has no
JWKS URI.

#### Implementation of

```ts
OAuthTokenVerifier.verifyAccessToken
```
