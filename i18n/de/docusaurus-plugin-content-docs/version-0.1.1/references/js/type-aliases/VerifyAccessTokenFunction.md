---
sidebar_label: VerifyAccessTokenFunction
---

# Typalias: VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

Funktionstyp zur Überprüfung eines Zugangstokens (Access token).

Diese Funktion sollte einen [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) auslösen, wenn das Token ungültig ist,
oder ein AuthInfo-Objekt zurückgeben, wenn das Token gültig ist.

Wenn du zum Beispiel eine JWT-Überprüfungsfunktion hast, sollte sie mindestens die Signatur des Tokens
überprüfen, das Ablaufdatum validieren und die notwendigen Ansprüche (Claims) extrahieren, um ein `AuthInfo`-
Objekt zurückzugeben.

**Hinweis:** Es ist nicht notwendig, die folgenden Felder im Token zu überprüfen, da sie vom Handler geprüft werden:

- `iss` (Aussteller / issuer)
- `aud` (Zielgruppe / audience)
- `scope` (Berechtigungen / scopes)

## Parameter {#parameters}

### token {#token}

`string`

Der zu überprüfende Zugangstoken-String (Access token).

## Rückgabewert {#returns}

`MaybePromise`\<`AuthInfo`\>

Ein Promise, das sich auf ein AuthInfo-Objekt auflöst, oder ein synchroner Wert, wenn das
Token gültig ist.
