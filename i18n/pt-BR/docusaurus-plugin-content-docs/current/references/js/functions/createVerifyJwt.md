---
sidebar_label: createVerifyJwt
---

# Função: createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

Cria uma função para verificar tokens de acesso JWT (Access tokens) usando a função de recuperação de chave fornecida e opções.

## Parâmetros {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

A função para recuperar a chave usada para verificar o JWT.

**Veja também**

JWTVerifyGetKey para a definição do tipo da função de recuperação de chave.

### options? {#options}

`JWTVerifyOptions`

Opções opcionais de verificação do JWT.

**Veja também**

JWTVerifyOptions para a definição do tipo das opções.

## Retorno {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Uma função que verifica tokens de acesso JWT (Access tokens) e retorna um objeto AuthInfo se o token for válido. Ela exige que o JWT contenha os campos `iss`, `client_id` e `sub` em seu payload, e pode opcionalmente conter os campos `scope` ou `scopes`. A função utiliza a biblioteca `jose` internamente para realizar a verificação do JWT.

## Veja também {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para a definição do tipo da função retornada.