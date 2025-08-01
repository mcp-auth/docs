---
sidebar_label: VerifyAccessTokenFunction
---

# Alias de Tipo: VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

Tipo de função para verificar um token de acesso (Access token).

Esta função deve lançar um [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) se o token for inválido,
ou retornar um objeto AuthInfo se o token for válido.

Por exemplo, se você tiver uma função de verificação de JWT, ela deve pelo menos verificar a
assinatura do token, validar sua expiração e extrair as reivindicações (Claims) necessárias para retornar um objeto `AuthInfo`.

**Nota:** Não há necessidade de verificar os seguintes campos no token, pois eles serão verificados
pelo handler:

- `iss` (emissor / issuer)
- `aud` (público / audience)
- `scope` (escopos / scopes)

## Parâmetros {#parameters}

### token {#token}

`string`

A string do token de acesso (Access token) a ser verificada.

## Retorno {#returns}

`MaybePromise`\<`AuthInfo`\>

Uma promise que resolve para um objeto AuthInfo ou um valor síncrono se o
token for válido.