---
sidebar_label: AuthServerConfigError
---

# Alias de Tipo: AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

Representa um erro que ocorre durante a validação dos metadados do servidor de autorização (authorization server).

## Propriedades {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

Uma causa opcional do erro, normalmente uma instância de `Error` que fornece mais contexto.

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

O código que representa o erro de validação específico.

***

### description {#description}

```ts
description: string;
```

Uma descrição legível do erro.