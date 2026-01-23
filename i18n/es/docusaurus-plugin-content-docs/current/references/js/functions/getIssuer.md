---
sidebar_label: getIssuer
---

# Función: getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

Obtiene la URL del emisor (Issuer) desde una configuración de servidor de autenticación.

- Configuración resuelta: extrae de `metadata.issuer`
- Configuración de descubrimiento: devuelve `issuer` directamente

## Parámetros {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## Devuelve {#returns}

`string`