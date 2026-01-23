---
sidebar_label: getIssuer
---

# Fonction : getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

Obtenir l’URL de l’émetteur (Issuer) à partir d’une configuration de serveur d’authentification.

- Configuration résolue : extrait depuis `metadata.issuer`
- Configuration de découverte : retourne directement `issuer`

## Paramètres {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## Retourne {#returns}

`string`
