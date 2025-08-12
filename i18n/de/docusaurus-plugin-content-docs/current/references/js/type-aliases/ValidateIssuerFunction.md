---
sidebar_label: ValidateIssuerFunction
---

# Typalias: ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

Funktionstyp zur Validierung des Ausstellers (Issuer) des Zugangstokens (Access token).

Diese Funktion sollte einen [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md) mit dem Code 'invalid_issuer' auslösen, wenn der Aussteller
nicht gültig ist. Der Aussteller sollte anhand folgender Kriterien validiert werden:

1. Die in den Auth-Server-Metadaten von MCP-Auth konfigurierten Autorisierungsserver (Authorization servers)
2. Die in den Metadaten der geschützten Ressource (protected resource) aufgeführten Autorisierungsserver (Authorization servers)

## Parameter {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## Rückgabewert {#returns}

`void`

## Ausnahmen {#throws}

Wenn der Aussteller nicht erkannt oder ungültig ist.