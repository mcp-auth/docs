---
sidebar_label: getIssuer
---

# Função: getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

Obtém a URL do emissor (Issuer) a partir de uma configuração de servidor de autenticação.

- Configuração resolvida: extrai de `metadata.issuer`
- Configuração de descoberta: retorna `issuer` diretamente

## Parâmetros {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## Retorna {#returns}

`string`