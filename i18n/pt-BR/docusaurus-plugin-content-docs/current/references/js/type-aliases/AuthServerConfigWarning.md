---
sidebar_label: AuthServerConfigWarning
---

# Alias de Tipo: AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

Representa um aviso que ocorre durante a validação dos metadados do servidor de autorização (authorization server).

## Propriedades {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

O código que representa o aviso específico de validação.

***

### description {#description}

```ts
description: string;
```

Uma descrição legível por humanos do aviso.