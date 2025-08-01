---
sidebar_label: createVerifyJwt
---

# Función: createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

Crea una función para verificar tokens de acceso JWT utilizando la función de recuperación de clave proporcionada y opciones.

## Parámetros {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

La función para recuperar la clave utilizada para verificar el JWT.

**Ver**

JWTVerifyGetKey para la definición de tipo de la función de recuperación de clave.

### options? {#options}

`JWTVerifyOptions`

Opciones opcionales de verificación de JWT.

**Ver**

JWTVerifyOptions para la definición de tipo de las opciones.

## Retorna {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Una función que verifica tokens de acceso JWT (Access tokens) y retorna un objeto AuthInfo si el token es válido. Requiere que el JWT contenga los campos `iss`, `client_id` y `sub` en su payload, y opcionalmente puede contener los campos `scope` o `scopes`. La función utiliza la librería `jose` internamente para realizar la verificación del JWT.

## Ver {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para la definición de tipo de la función retornada.