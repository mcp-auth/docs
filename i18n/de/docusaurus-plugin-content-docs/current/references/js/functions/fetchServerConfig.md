---
sidebar_label: fetchServerConfig
---

# Funktion: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<ResolvedAuthServerConfig>;
```

Ruft die Serverkonfiguration entsprechend dem Aussteller (Issuer) und dem Typ des Autorisierungsservers ab.

Diese Funktion bestimmt automatisch die Well-known-URL basierend auf dem Servertyp, da OAuth 2.0 (OAuth 2.0) und OpenID Connect (OpenID Connect) Server unterschiedliche Konventionen für ihre Metadatenendpunkte haben.

## Parameter {#parameters}

### issuer {#issuer}

`string`

Die Aussteller-URL (Issuer URL) des Autorisierungsservers.

### config {#config}

`ServerMetadataConfig`

Das Konfigurationsobjekt, das den Servertyp und eine optionale Transpilierungsfunktion enthält.

## Rückgabewert {#returns}

`Promise`\<[`ResolvedAuthServerConfig`](/references/js/type-aliases/ResolvedAuthServerConfig.md)\>

Ein Promise, das mit der statischen Serverkonfiguration und den abgerufenen Metadaten aufgelöst wird.

## Siehe auch {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) für die zugrundeliegende Implementierung.
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) für die OAuth 2.0 Authorization Server Metadata Spezifikation.
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) für die OpenID Connect (OpenID Connect) Discovery Spezifikation.

## Beispiel {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// Abrufen der OAuth 2.0 (OAuth 2.0) Serverkonfiguration
// Dies ruft die Metadaten von `https://auth.logto.io/.well-known/oauth-authorization-server/oauth` ab
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// Abrufen der OpenID Connect (OpenID Connect) Serverkonfiguration
// Dies ruft die Metadaten von `https://auth.logto.io/oidc/.well-known/openid-configuration` ab
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## Fehlerauslösung {#throws}

wenn der Abrufvorgang fehlschlägt.

## Fehlerauslösung {#throws}

wenn die Server-Metadaten ungültig sind oder nicht der MCP-Spezifikation entsprechen.
