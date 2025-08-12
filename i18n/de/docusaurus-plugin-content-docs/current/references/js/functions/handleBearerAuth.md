---
sidebar_label: handleBearerAuth
---

# Funktion: handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Erstellt eine Middleware-Funktion zur Behandlung von Bearer-Authentifizierung in einer Express-Anwendung.

Diese Middleware extrahiert das Bearer-Token aus dem `Authorization`-Header, überprüft es mit der bereitgestellten Funktion `verifyAccessToken` und prüft den Aussteller (Issuer), die Zielgruppe (Audience) und die erforderlichen Berechtigungen (Scopes).

- Wenn das Token gültig ist, werden die Authentifizierungsinformationen im Feld `request.auth` hinzugefügt; andernfalls wird mit einer entsprechenden Fehlermeldung geantwortet.
- Wenn die Überprüfung des Zugangstokens (Access token) fehlschlägt, wird mit einem 401 Unauthorized-Fehler geantwortet.
- Wenn das Token nicht über die erforderlichen Berechtigungen (Scopes) verfügt, wird mit einem 403 Forbidden-Fehler geantwortet.
- Wenn unerwartete Fehler während des Authentifizierungsprozesses auftreten, werden diese von der Middleware erneut ausgelöst.

**Hinweis:**  Das Objekt `request.auth` enthält erweiterte Felder im Vergleich zur Standard-AuthInfo-Schnittstelle, die im Modul `@modelcontextprotocol/sdk` definiert ist. Siehe die erweiterte Schnittstelle in dieser Datei für Details.

## Parameter {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Konfiguration für den Bearer-Authentifizierungs-Handler.

## Rückgabewert {#returns}

`RequestHandler`

Eine Middleware-Funktion für Express, die Bearer-Authentifizierung behandelt.

## Siehe auch {#see}

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) für die Konfigurationsoptionen.
