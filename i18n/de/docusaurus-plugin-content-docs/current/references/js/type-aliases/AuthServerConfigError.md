---
sidebar_label: AuthServerConfigError
---

# Typalias: AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

Repräsentiert einen Fehler, der während der Validierung der Metadaten des Autorisierungsservers auftritt.

## Eigenschaften {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

Eine optionale Ursache des Fehlers, typischerweise eine Instanz von `Error`, die mehr Kontext liefert.

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

Der Code, der den spezifischen Validierungsfehler repräsentiert.

***

### description {#description}

```ts
description: string;
```

Eine menschenlesbare Beschreibung des Fehlers.
