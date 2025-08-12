---
sidebar_label: MCPAuth
---

# Klasse: MCPAuth

Die Hauptklasse für die mcp-auth-Bibliothek. Sie fungiert als Factory und Registry zur Erstellung von Authentifizierungsrichtlinien für deine geschützten Ressourcen.

Sie wird mit deinen Serverkonfigurationen initialisiert und stellt eine `bearerAuth`-Methode bereit, um Express-Middleware für tokenbasierte Authentifizierung zu generieren.

## Beispiel {#example}

### Verwendung im `Resource Server`-Modus {#usage-in-resource-server-mode}

Dies ist der empfohlene Ansatz für neue Anwendungen.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` kann ein einzelnes Konfigurationsobjekt oder ein Array davon sein.
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

// Router für Protected Resource Metadata einbinden
app.use(mcpAuth.protectedResourceMetadataRouter());

// Einen API-Endpunkt für die konfigurierte Ressource schützen
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // Gibt an, zu welcher Ressource dieser Endpunkt gehört
    audience: resourceIdentifier, // Optional: Überprüfe den 'aud'-Anspruch
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### Legacy-Verwendung im `Authorization Server`-Modus (Veraltet) {#legacy-usage-in-authorization-server-mode-deprecated}

Dieser Ansatz wird aus Gründen der Abwärtskompatibilität unterstützt.

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

// Router für Legacy Authorization Server Metadata einbinden
app.use(mcpAuth.delegatedRouter());

// Einen Endpunkt mit der Standardrichtlinie schützen
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Bearbeite hier die MCP-Anfrage
  },
);
```

## Konstruktoren {#constructors}

### Konstruktor {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

Erstellt eine Instanz von MCPAuth.
Die gesamte Konfiguration wird im Voraus validiert, um Fehler frühzeitig zu erkennen.

#### Parameter {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

Die Authentifizierungskonfiguration.

#### Rückgabewert {#returns}

`MCPAuth`

## Eigenschaften {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

Die Authentifizierungskonfiguration.

## Methoden {#methods}

### bearerAuth() {#bearerauth}

#### Aufrufsignatur {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

Erstellt einen Bearer-Auth-Handler (Express-Middleware), der das Zugangstoken (Access token) im
`Authorization`-Header der Anfrage überprüft.

##### Parameter {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Eine Funktion, die das Zugangstoken (Access token) überprüft. Sie sollte das
Zugangstoken als String akzeptieren und ein Promise (oder einen Wert) zurückgeben, das/die das
Überprüfungsergebnis liefert.

**Siehe**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) für die Typdefinition der
`verifyAccessToken`-Funktion.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Optionale Konfiguration für den Bearer-Auth-Handler.

**Siehe**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) für die verfügbaren Konfigurationsoptionen (außer
`verifyAccessToken` und `issuer`).

##### Rückgabewert {#returns}

`RequestHandler`

Eine Express-Middleware-Funktion, die das Zugangstoken (Access token) überprüft und das
Überprüfungsergebnis dem Request-Objekt (`req.auth`) hinzufügt.

##### Siehe {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) für Details zur Implementierung und die erweiterten Typen des
`req.auth` (`AuthInfo`)-Objekts.

#### Aufrufsignatur {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

Erstellt einen Bearer-Auth-Handler (Express-Middleware), der das Zugangstoken (Access token) im
`Authorization`-Header der Anfrage mit einem vordefinierten Verifizierungsmodus überprüft.

Im `'jwt'`-Modus erstellt der Handler eine JWT-Überprüfungsfunktion unter Verwendung des JWK-Sets
von der JWKS-URI des Autorisierungsservers.

##### Parameter {#parameters}

###### mode {#mode}

`"jwt"`

Der Verifizierungsmodus für das Zugangstoken (Access token). Aktuell wird nur 'jwt' unterstützt.

**Siehe**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) für die verfügbaren Modi.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Optionale Konfiguration für den Bearer-Auth-Handler, einschließlich JWT-Überprüfungsoptionen und
Remote-JWK-Set-Optionen.

**Siehe**

 - VerifyJwtConfig für die verfügbaren Konfigurationsoptionen für die JWT-
Überprüfung.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) für die verfügbaren Konfigurationsoptionen (außer
`verifyAccessToken` und `issuer`).

##### Rückgabewert {#returns}

`RequestHandler`

Eine Express-Middleware-Funktion, die das Zugangstoken (Access token) überprüft und das
Überprüfungsergebnis dem Request-Objekt (`req.auth`) hinzufügt.

##### Siehe {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) für Details zur Implementierung und die erweiterten Typen des
`req.auth` (`AuthInfo`)-Objekts.

##### Fehler {#throws}

wenn die JWKS-URI nicht in den Server-Metadaten angegeben ist, wenn
der `'jwt'`-Modus verwendet wird.

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Erstellt einen Delegated Router zum Bereitstellen des veralteten OAuth 2.0 Authorization Server Metadata Endpunkts
(`/.well-known/oauth-authorization-server`) mit den der Instanz bereitgestellten Metadaten.

#### Rückgabewert {#returns}

`Router`

Ein Router, der den OAuth 2.0 Authorization Server Metadata Endpunkt mit den
bereitgestellten Metadaten der Instanz bedient.

#### Veraltet {#deprecated}

Verwende stattdessen [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter).

#### Beispiel {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Angenommen, dies ist initialisiert
app.use(mcpAuth.delegatedRouter());
```

#### Fehler {#throws}

Wenn im `Resource Server`-Modus aufgerufen.

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

Erstellt einen Router, der den OAuth 2.0 Protected Resource Metadata Endpunkt
für alle konfigurierten Ressourcen bereitstellt.

Dieser Router erstellt automatisch die korrekten `.well-known`-Endpunkte für jede
Ressourcenkennung, die in deiner Konfiguration angegeben ist.

#### Rückgabewert {#returns}

`Router`

Ein Router, der den OAuth 2.0 Protected Resource Metadata Endpunkt bereitstellt.

#### Fehler {#throws}

Wenn im `Authorization Server`-Modus aufgerufen.

#### Beispiel {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// Angenommen, mcpAuth ist mit einer oder mehreren `protectedResources`-Konfigurationen initialisiert
const mcpAuth: MCPAuth;
const app = express();

// Dies stellt Metadaten unter `/.well-known/oauth-protected-resource/...` bereit
// basierend auf deinen Ressourcenkennungen.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
