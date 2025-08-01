---
sidebar_label: BearerAuthConfig
---

# Alias de tipo: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## Propiedades {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

La audiencia esperada del token de acceso (reclamo `aud`). Normalmente, este es el servidor de recursos
(API) para el que está destinado el token. Si no se proporciona, se omitirá la verificación de la audiencia.

**Nota:** Si tu servidor de autorización no admite Indicadores de recurso (RFC 8707),
puedes omitir este campo ya que la audiencia puede no ser relevante.

#### Ver {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

El emisor esperado del token de acceso (reclamo `iss`). Debe ser la URL del
servidor de autorización que emitió el token.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

Un arreglo de alcances requeridos que el token de acceso debe tener. Si el token no contiene
todos estos alcances, se lanzará un error.

**Nota:** El manejador verificará el reclamo `scope` en el token, que puede ser una cadena separada por espacios
o un arreglo de cadenas, dependiendo de la implementación del servidor de autorización. Si el reclamo `scope` no está presente, el manejador verificará el reclamo `scopes`
si está disponible.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Indica si se debe mostrar información detallada de errores en la respuesta. Esto es útil para depuración
durante el desarrollo, pero debe deshabilitarse en producción para evitar la filtración de información sensible.

#### Valor predeterminado {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

Tipo de función para verificar un token de acceso.

Esta función debe lanzar un [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) si el token es inválido,
o devolver un objeto AuthInfo si el token es válido.

#### Ver {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para más detalles.