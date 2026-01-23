---
sidebar_label: AuthServerConfigWarning
---

# Alias de type : AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

Représente un avertissement qui se produit lors de la validation des métadonnées du serveur d’autorisation.

## Propriétés {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

Le code représentant l’avertissement de validation spécifique.

***

### description {#description}

```ts
description: string;
```

Une description lisible par l’humain de l’avertissement.
