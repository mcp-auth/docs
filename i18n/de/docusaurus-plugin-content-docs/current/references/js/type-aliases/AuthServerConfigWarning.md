---
sidebar_label: AuthServerConfigWarning
---

# Typalias: AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

Stellt eine Warnung dar, die während der Validierung der Metadaten des Autorisierungsservers (authorization server) auftritt.

## Eigenschaften {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

Der Code, der die spezifische Validierungswarnung darstellt.

***

### description {#description}

```ts
description: string;
```

Eine für Menschen lesbare Beschreibung der Warnung.
