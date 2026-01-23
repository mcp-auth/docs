---
sidebar_label: AuthServerConfig
---

# Alias de type : AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

Configuration pour le serveur d’autorisation distant intégré au serveur MCP.

Peut être soit :
- **Résolu** : Contient `metadata` - aucune requête réseau nécessaire
- **Découverte** : Contient uniquement `issuer` et `type` - les métadonnées sont récupérées à la demande via la découverte