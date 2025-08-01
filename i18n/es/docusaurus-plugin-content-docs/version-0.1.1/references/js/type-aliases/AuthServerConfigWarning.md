---
sidebar_label: AuthServerConfigWarning
---

# Alias de tipo: AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

Representa una advertencia que ocurre durante la validación de los metadatos del servidor de autorización (authorization server).

## Propiedades {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

El código que representa la advertencia de validación específica.

***

### description {#description}

```ts
description: string;
```

Una descripción legible para humanos de la advertencia.