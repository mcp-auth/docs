---
sidebar_label: BearerAuthConfig
---

# Typalias: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## Eigenschaften {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

Die erwartete Zielgruppe (Audience) des Zugangstokens (Zugangstoken (`aud` Anspruch)). Dies ist typischerweise der Ressourcenserver
(API), für den das Token bestimmt ist. Wenn nicht angegeben, wird die Überprüfung der Zielgruppe übersprungen.

**Hinweis:** Wenn dein Autorisierungsserver keine Ressourcenindikatoren (RFC 8707) unterstützt,
kannst du dieses Feld weglassen, da die Zielgruppe möglicherweise nicht relevant ist.

#### Siehe {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

Der erwartete Aussteller (Issuer) des Zugangstokens (Zugangstoken (`iss` Anspruch)). Dies sollte die URL des
Autorisierungsservers sein, der das Token ausgestellt hat.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

Ein Array der erforderlichen Berechtigungen (Scopes), die das Zugangstoken besitzen muss. Wenn das Token nicht
alle diese Berechtigungen enthält, wird ein Fehler ausgelöst.

**Hinweis:** Der Handler prüft den `scope`-Anspruch im Token, der je nach Implementierung des Autorisierungsservers
eine durch Leerzeichen getrennte Zeichenkette oder ein Array von Zeichenketten sein kann. Wenn der `scope`-Anspruch nicht vorhanden ist,
prüft der Handler den `scopes`-Anspruch, sofern verfügbar.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Ob detaillierte Fehlerinformationen in der Antwort angezeigt werden sollen. Dies ist während der Entwicklung zum Debuggen nützlich,
sollte aber in der Produktion deaktiviert werden, um das Offenlegen sensibler Informationen zu vermeiden.

#### Standardwert {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

Funktionstyp zur Überprüfung eines Zugangstokens.

Diese Funktion sollte einen [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) auslösen, wenn das Token ungültig ist,
oder ein AuthInfo-Objekt zurückgeben, wenn das Token gültig ist.

#### Siehe {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) für weitere Details.
