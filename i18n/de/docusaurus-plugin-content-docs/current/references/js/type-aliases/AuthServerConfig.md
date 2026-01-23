---
sidebar_label: AuthServerConfig
---

# Typalias: AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

Konfiguration für den entfernten Autorisierungsserver (Authorization server), der mit dem MCP-Server integriert ist.

Kann entweder sein:
- **Aufgelöst (Resolved)**: Enthält `metadata` – keine Netzwerkabfrage erforderlich
- **Discovery**: Enthält nur `issuer` und `type` – Metadaten werden bei Bedarf per Discovery abgerufen