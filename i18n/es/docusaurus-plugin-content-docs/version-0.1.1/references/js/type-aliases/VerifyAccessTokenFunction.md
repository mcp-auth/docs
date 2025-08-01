---
sidebar_label: VerifyAccessTokenFunction
---

# Alias de tipo: VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

Tipo de función para verificar un token de acceso (Access token).

Esta función debe lanzar un [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) si el token es inválido,
o devolver un objeto AuthInfo si el token es válido.

Por ejemplo, si tienes una función de verificación de JWT, al menos debe comprobar la
firma del token, validar su expiración y extraer los reclamos (Claims) necesarios para devolver un objeto `AuthInfo`.

**Nota:** No es necesario verificar los siguientes campos en el token, ya que serán comprobados
por el manejador:

- `iss` (emisor / issuer)
- `aud` (audiencia / audience)
- `scope` (alcances / scopes)

## Parámetros {#parameters}

### token {#token}

`string`

La cadena del token de acceso (Access token) a verificar.

## Retorna {#returns}

`MaybePromise`\<`AuthInfo`\>

Una promesa que se resuelve en un objeto AuthInfo o un valor sincrónico si el
token es válido.