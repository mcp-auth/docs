---
sidebar_label: AuthServerConfigError
---

# Alias de type : AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

Représente une erreur qui se produit lors de la validation des métadonnées du serveur d’autorisation (authorization server).

## Propriétés {#properties}

### cause ? {#cause}

```ts
optional cause: Error;
```

Une cause optionnelle de l’erreur, généralement une instance de `Error` qui fournit plus de contexte.

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

Le code représentant l’erreur de validation spécifique.

***

### description {#description}

```ts
description: string;
```

Une description lisible par l’humain de l’erreur.
