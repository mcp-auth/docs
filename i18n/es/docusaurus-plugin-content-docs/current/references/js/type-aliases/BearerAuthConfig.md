---
sidebar_label: BearerAuthConfig
---

# Alias de tipo: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer:   | string
     | ValidateIssuerFunction;
  requiredScopes?: string[];
  resource?: string;
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
(API) para el que está destinado el token. Si no se proporciona, se omitirá la comprobación de audiencia.

**Nota:** Si tu servidor de autorización no admite Indicadores de recurso (RFC 8707),
puedes omitir este campo ya que la audiencia puede no ser relevante.

#### Ver {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: 
  | string
  | ValidateIssuerFunction;
```

Una cadena que representa un emisor válido, o una función para validar el emisor del token de acceso.

Si se proporciona una cadena, se usará como el valor de emisor esperado para la comparación directa.

Si se proporciona una función, debe validar el emisor según las reglas en
[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md).

#### Ver {#see}

[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) para más detalles sobre la función de validación.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

Un arreglo de alcances (scopes) requeridos que el token de acceso debe tener. Si el token no contiene
todos estos alcances, se lanzará un error.

**Nota:** El manejador comprobará el reclamo `scope` en el token, que puede ser una cadena separada por espacios
o un arreglo de cadenas, dependiendo de la implementación del servidor de autorización. Si el reclamo `scope` no está presente, el manejador comprobará el reclamo `scopes`
si está disponible.

***

### resource? {#resource}

```ts
optional resource: string;
```

El identificador del recurso protegido. Cuando se proporciona, el manejador usará los
servidores de autorización configurados para este recurso para validar el token recibido.
Es obligatorio cuando se utiliza el manejador con una configuración de `protectedResources`.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Indica si se debe mostrar información detallada de errores en la respuesta. Esto es útil para depuración
durante el desarrollo, pero debe deshabilitarse en producción para evitar la filtración de información sensible.

#### Valor por defecto {#default}

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