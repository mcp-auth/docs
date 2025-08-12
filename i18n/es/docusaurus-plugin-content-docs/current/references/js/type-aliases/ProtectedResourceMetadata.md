---
sidebar_label: ProtectedResourceMetadata
---

# Alias de tipo: ProtectedResourceMetadata

```ts
type ProtectedResourceMetadata = {
  authorization_details_types_supported?: string[];
  authorization_servers?: string[];
  bearer_methods_supported?: string[];
  dpop_bound_access_tokens_required?: boolean;
  dpop_signing_alg_values_supported?: string[];
  jwks_uri?: string;
  resource: string;
  resource_documentation?: string;
  resource_name?: string;
  resource_policy_uri?: string;
  resource_signing_alg_values_supported?: string[];
  resource_tos_uri?: string;
  scopes_supported?: string[];
  signed_metadata?: string;
  tls_client_certificate_bound_access_tokens?: boolean;
};
```

Esquema para los metadatos de recursos protegidos de OAuth 2.0.

## Declaración de tipo {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

Valores de tipo de detalles de autorización admitidos al usar el parámetro de solicitud authorization_details.

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

Lista de identificadores de emisor del servidor de autorización OAuth que se pueden usar con este recurso protegido.

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

Métodos admitidos para enviar tokens de portador OAuth 2.0. Valores: ["header", "body", "query"].

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

Indica si el recurso protegido siempre requiere tokens de acceso vinculados a DPoP.

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

Algoritmos JWS admitidos para validar JWTs de prueba DPoP.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL del documento JSON Web Key (JWK) Set del recurso protegido. Este documento contiene las claves públicas
que se pueden usar para verificar firmas digitales de respuestas o datos devueltos por este recurso protegido.
Esto difiere del jwks_uri del servidor de autorización, que se utiliza para la validación de tokens. Cuando el recurso protegido
firma sus respuestas, los clientes pueden obtener estas claves públicas para verificar la autenticidad e integridad
de los datos recibidos.

### resource {#resource}

```ts
resource: string;
```

El identificador de recurso del recurso protegido.

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

URL que contiene la documentación para desarrolladores sobre el uso del recurso protegido.

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

Nombre legible por humanos del recurso protegido para mostrar a los usuarios finales.

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

URL que contiene información sobre los requisitos de uso de datos del recurso protegido.

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

Algoritmos de firma JWS admitidos por el recurso protegido para firmar respuestas del recurso.

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

URL que contiene los términos de servicio del recurso protegido.

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

Lista de valores de alcance (scope) utilizados en solicitudes de autorización para acceder a este recurso protegido.

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

Un JWT firmado que contiene parámetros de metadatos como reclamos. El JWT debe estar firmado usando JWS e incluir
un reclamo 'iss'. Este campo proporciona una forma de verificar criptográficamente la autenticidad de los metadatos
en sí. La firma se puede verificar usando las claves públicas disponibles en el endpoint `jwks_uri`.
Cuando está presente, los valores en estos metadatos firmados tienen prioridad sobre los valores JSON
simples correspondientes en este documento de metadatos. Esto ayuda a prevenir la manipulación de los metadatos del recurso.

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

Indica si el recurso protegido admite tokens de acceso vinculados a certificados de cliente mutual-TLS.