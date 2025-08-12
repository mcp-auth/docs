---
sidebar_label: BearerAuthConfig
---

# Typalias: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer:   | string
     | ValidateIssuerFunction;
  requiredScopes?: string[];
  resource?: string;
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
issuer: 
  | string
  | ValidateIssuerFunction;
```

Ein String, der einen gültigen Aussteller (Issuer) repräsentiert, oder eine Funktion zur Validierung des Ausstellers des Zugangstokens.

Wenn ein String angegeben wird, wird dieser als erwarteter Ausstellerwert für den direkten Vergleich verwendet.

Wenn eine Funktion angegeben wird, sollte sie den Aussteller gemäß den Regeln in
[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) validieren.

#### Siehe {#see}

[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) für weitere Details zur Validierungsfunktion.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

Ein Array der erforderlichen Berechtigungen (Berechtigungen (Scopes)), die das Zugangstoken haben muss. Wenn das Token nicht
alle diese Berechtigungen enthält, wird ein Fehler ausgelöst.

**Hinweis:** Der Handler prüft den `scope`-Anspruch im Token, der je nach Implementierung des Autorisierungsservers entweder ein durch Leerzeichen getrennter String oder ein Array von Strings sein kann. Wenn der `scope`-Anspruch nicht vorhanden ist, prüft der Handler den `scopes`-Anspruch,
sofern verfügbar.

***

### resource? {#resource}

```ts
optional resource: string;
```

Der Bezeichner der geschützten Ressource. Wenn angegeben, verwendet der Handler die
für diese Ressource konfigurierten Autorisierungsserver, um das empfangene Token zu validieren.
Dies ist erforderlich, wenn der Handler mit einer `protectedResources`-Konfiguration verwendet wird.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Ob detaillierte Fehlerinformationen in der Antwort angezeigt werden sollen. Dies ist während der Entwicklung nützlich
zum Debuggen, sollte aber in der Produktion deaktiviert werden, um das Leaken sensibler
Informationen zu vermeiden.

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
