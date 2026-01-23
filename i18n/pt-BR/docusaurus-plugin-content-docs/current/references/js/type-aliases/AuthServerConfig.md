---
sidebar_label: AuthServerConfig
---

# Alias de Tipo: AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

Configuração para o servidor de autorização remoto integrado com o servidor MCP.

Pode ser:
- **Resolvido**: Contém `metadata` - nenhuma requisição de rede necessária
- **Descoberta**: Contém apenas `issuer` e `type` - os metadados são buscados sob demanda via discovery