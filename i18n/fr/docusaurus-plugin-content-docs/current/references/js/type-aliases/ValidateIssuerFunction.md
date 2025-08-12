---
sidebar_label: ValidateIssuerFunction
---

# Alias de type : ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

Type de fonction pour valider l’émetteur (Issuer) du jeton d’accès (Access token).

Cette fonction doit lever une [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md) avec le code 'invalid_issuer' si l’émetteur
n’est pas valide. L’émetteur doit être validé par rapport à :

1. Les serveurs d’autorisation configurés dans les métadonnées du serveur d’authentification MCP-Auth
2. Les serveurs d’autorisation listés dans les métadonnées de la ressource protégée

## Paramètres {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## Retourne {#returns}

`void`

## Lève une exception {#throws}

Lorsque l’émetteur n’est pas reconnu ou invalide.