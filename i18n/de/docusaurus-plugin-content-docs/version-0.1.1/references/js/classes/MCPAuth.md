---
sidebar_label: MCPAuth
---

# Klasse: MCPAuth

Die Hauptklasse der mcp-auth-Bibliothek, die Methoden zum Erstellen von Routern und nützlichen Handlern für Authentifizierung (Authentifizierung) und Autorisierung (Autorisierung) in MCP-Servern bereitstellt.

## Siehe {#see}

[MCP Auth](https://mcp-auth.dev) für weitere Informationen über die Bibliothek und deren Verwendung.

## Beispiel {#example}

Ein Beispiel für die Integration mit einem entfernten OIDC-Anbieter:

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

// Router einbinden, um OAuth 2.0 Authorization Server Metadata zu bedienen
app.use(mcpAuth.delegatedRouter());

// Verwende den Bearer-Auth-Handler für die MCP-Route
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Bearbeite hier die MCP-Anfrage
  },
);

// Verwende die Auth-Info im MCP-Callback
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## Konstruktoren {#constructors}

### Konstruktor {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### Parameter {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### Rückgabewert {#returns}

`MCPAuth`

## Eigenschaften {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

## Methoden {#methods}

### bearerAuth() {#bearerauth}

#### Aufruf-Signatur {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

Erstellt einen Bearer-Auth-Handler (Express-Middleware), der das Zugangstoken (Access token) im `Authorization`-Header der Anfrage überprüft.

##### Parameter {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Eine Funktion, die das Zugangstoken (Access token) überprüft. Sie sollte das Zugangstoken als String akzeptieren und ein Promise (oder einen Wert) zurückgeben, das/die das Überprüfungsergebnis liefert.

**Siehe**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) für die Typdefinition der `verifyAccessToken`-Funktion.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Optionale Konfiguration für den Bearer-Auth-Handler.

**Siehe**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) für die verfügbaren Konfigurationsoptionen (ohne `verifyAccessToken` und `issuer`).

##### Rückgabewert {#returns}

`RequestHandler`

Eine Express-Middleware-Funktion, die das Zugangstoken (Access token) überprüft und das Überprüfungsergebnis dem Request-Objekt (`req.auth`) hinzufügt.

##### Siehe {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) für Implementierungsdetails und die erweiterten Typen des `req.auth` (`AuthInfo`) Objekts.

#### Aufruf-Signatur {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

Erstellt einen Bearer-Auth-Handler (Express-Middleware), der das Zugangstoken (Access token) im `Authorization`-Header der Anfrage mit einem vordefinierten Überprüfungsmodus überprüft.

Im `'jwt'`-Modus erstellt der Handler eine JWT-Überprüfungsfunktion unter Verwendung des JWK Sets von der JWKS-URI des Autorisierungsservers.

##### Parameter {#parameters}

###### mode {#mode}

`"jwt"`

Der Überprüfungsmodus für das Zugangstoken (Access token). Derzeit wird nur 'jwt' unterstützt.

**Siehe**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) für die verfügbaren Modi.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

Optionale Konfiguration für den Bearer-Auth-Handler, einschließlich JWT-Überprüfungsoptionen und Remote-JWK-Set-Optionen.

**Siehe**

 - [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) für die verfügbaren Konfigurationsoptionen für die JWT-Überprüfung.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) für die verfügbaren Konfigurationsoptionen (ohne `verifyAccessToken` und `issuer`).

##### Rückgabewert {#returns}

`RequestHandler`

Eine Express-Middleware-Funktion, die das Zugangstoken (Access token) überprüft und das Überprüfungsergebnis dem Request-Objekt (`req.auth`) hinzufügt.

##### Siehe {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) für Implementierungsdetails und die erweiterten Typen des `req.auth` (`AuthInfo`) Objekts.

##### Wirft {#throws}

wenn die JWKS-URI in den Server-Metadaten nicht bereitgestellt wird, wenn der `'jwt'`-Modus verwendet wird.

***

### delegatedRouter() {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Erstellt einen delegierten Router, der den OAuth 2.0 Authorization Server Metadata Endpoint (`/.well-known/oauth-authorization-server`) mit den der Instanz bereitgestellten Metadaten bedient.

#### Rückgabewert {#returns}

`Router`

Ein Router, der den OAuth 2.0 Authorization Server Metadata Endpoint mit den der Instanz bereitgestellten Metadaten bedient.

#### Beispiel {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Angenommen, dies ist initialisiert
app.use(mcpAuth.delegatedRouter());
```