---
sidebar_label: getIssuer
---

# Funktion: getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

Gibt die Aussteller-URL (Issuer URL) aus einer Auth-Server-Konfiguration zurück.

- Aufgelöste Konfiguration: Extrahiert aus `metadata.issuer`
- Discovery-Konfiguration: Gibt `issuer` direkt zurück

## Parameter {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## Rückgabewert {#returns}

`string`
