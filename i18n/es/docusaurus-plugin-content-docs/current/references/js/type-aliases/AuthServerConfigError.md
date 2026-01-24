---
sidebar_label: AuthServerConfigError
---

# Alias de tipo: AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

Representa un error que ocurre durante la validación de los metadatos del servidor de autorización (authorization server).

## Propiedades {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

Una causa opcional del error, típicamente una instancia de `Error` que proporciona más contexto.

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

El código que representa el error de validación específico.

***

### description {#description}

```ts
description: string;
```

Una descripción legible para humanos del error.