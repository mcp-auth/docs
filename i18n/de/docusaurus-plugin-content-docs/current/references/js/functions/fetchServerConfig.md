---
sidebar_label: fetchServerConfig
---

# Funktion: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

Ruft die Serverkonfiguration entsprechend dem Aussteller (Issuer) und dem Typ des Autorisierungsservers ab.

Diese Funktion bestimmt automatisch die Well-Known-URL basierend auf dem Servertyp, da OAuth und OpenID Connect Server unterschiedliche Konventionen für ihre Metadaten-Endpunkte haben.

## Parameter {#parameters}

### issuer {#issuer}

`string`

Die Aussteller-URL (Issuer URL) des Autorisierungsservers.

### config {#config}

`ServerMetadataConfig`

Das Konfigurationsobjekt, das den Servertyp und eine optionale Transpile-Funktion enthält.

## Rückgabewert {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

Ein Promise, das mit der Serverkonfiguration aufgelöst wird.

## Siehe auch {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) für die zugrundeliegende Implementierung.
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) für die OAuth 2.0 Authorization Server Metadata Spezifikation.
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) für die OpenID Connect Discovery Spezifikation.

## Beispiel {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// Abrufen der OAuth-Serverkonfiguration
// Dies ruft die Metadaten von `https://auth.logto.io/.well-known/oauth-authorization-server/oauth` ab
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// Abrufen der OpenID Connect-Serverkonfiguration
// Dies ruft die Metadaten von `https://auth.logto.io/oidc/.well-known/openid-configuration` ab
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## Fehlerfälle {#throws}

wenn der Abrufvorgang fehlschlägt.

## Fehlerfälle {#throws}

wenn die Server-Metadaten ungültig sind oder nicht der MCP-Spezifikation entsprechen.
