---
sidebar_label: ProtectedResourceMetadata
---

# Alias de Tipo: ProtectedResourceMetadata

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

Esquema para Metadados de Recurso Protegido do OAuth 2.0.

## Declaração do tipo {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

Valores de tipo de detalhes de autorização suportados ao usar o parâmetro de solicitação authorization_details.

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

Lista de identificadores de emissor do servidor de autorização OAuth que podem ser usados com este recurso protegido.

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

Métodos suportados para envio de tokens bearer do OAuth 2.0. Valores: ["header", "body", "query"].

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

Se o recurso protegido sempre exige tokens de acesso vinculados ao DPoP.

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

Algoritmos JWS suportados para validação de provas JWT DPoP.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL do documento JSON Web Key (JWK) Set do recurso protegido. Este documento contém as chaves públicas
que podem ser usadas para verificar assinaturas digitais de respostas ou dados retornados por este recurso protegido.
Isso difere do jwks_uri do servidor de autorização, que é usado para validação de tokens. Quando o recurso protegido
assina suas respostas, os clientes podem buscar essas chaves públicas para verificar a autenticidade e integridade
dos dados recebidos.

### resource {#resource}

```ts
resource: string;
```

O identificador de recurso do recurso protegido.

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

URL contendo a documentação para desenvolvedores sobre o uso do recurso protegido.

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

Nome legível por humanos do recurso protegido para exibição aos usuários finais.

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

URL contendo informações sobre os requisitos de uso de dados do recurso protegido.

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

Algoritmos de assinatura JWS suportados pelo recurso protegido para assinar respostas do recurso.

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

URL contendo os termos de serviço do recurso protegido.

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

Lista de valores de escopo usados em solicitações de autorização para acessar este recurso protegido.

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

Um JWT assinado contendo parâmetros de metadados como reivindicações. O JWT deve ser assinado usando JWS e incluir
uma reivindicação 'iss'. Este campo fornece uma maneira de verificar criptograficamente a autenticidade dos próprios metadados.
A assinatura pode ser verificada usando as chaves públicas disponíveis no endpoint `jwks_uri`.
Quando presente, os valores neste metadado assinado têm precedência sobre os valores JSON simples correspondentes neste documento de metadados. Isso ajuda a evitar adulteração dos metadados do recurso.

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

Se o recurso protegido suporta tokens de acesso vinculados a certificado de cliente mutual-TLS.