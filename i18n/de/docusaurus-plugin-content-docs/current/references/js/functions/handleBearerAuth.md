---
sidebar_label: handleBearerAuth
---

# Funktion: handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Erstellt eine Middleware-Funktion zur Behandlung von Bearer-Authentifizierung in einer Express-Anwendung.

Diese Middleware extrahiert das Bearer-Token aus dem `Authorization`-Header, überprüft es mit der bereitgestellten Funktion `verifyAccessToken` und prüft den Aussteller (Issuer), die Zielgruppe (Audience) und die erforderlichen Berechtigungen (Scopes).

- Wenn das Token gültig ist, fügt es die Authentifizierungsinformationen zur Eigenschaft `request.auth` hinzu; andernfalls antwortet es mit einer entsprechenden Fehlermeldung.
- Wenn die Zugangstoken (Access token) Überprüfung fehlschlägt, wird mit einem 401 Unauthorized-Fehler geantwortet.
- Wenn das Token nicht über die erforderlichen Berechtigungen (Scopes) verfügt, wird mit einem 403 Forbidden-Fehler geantwortet.
- Wenn unerwartete Fehler während des Authentifizierungsprozesses auftreten, wirft die Middleware diese erneut.

**Hinweis:** Das Objekt `request.auth` enthält erweiterte Felder im Vergleich zur Standard-AuthInfo-Schnittstelle, die im Modul `@modelcontextprotocol/sdk` definiert ist. Siehe die erweiterte Schnittstelle in dieser Datei für Details.

## Parameter {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Konfiguration für den Bearer-Authentifizierungs-Handler.

## Rückgabe {#returns}

`RequestHandler`

Eine Middleware-Funktion für Express, die Bearer-Authentifizierung behandelt.

## Siehe auch {#see}

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) für die Konfigurationsoptionen.
