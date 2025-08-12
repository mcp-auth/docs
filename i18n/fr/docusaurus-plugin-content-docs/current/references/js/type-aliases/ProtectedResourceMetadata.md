---
sidebar_label: ProtectedResourceMetadata
---

# Alias de type : ProtectedResourceMetadata

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

Schéma pour les métadonnées de ressource protégée OAuth 2.0.

## Déclaration du type {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

Types de détails d'autorisation pris en charge lors de l'utilisation du paramètre de requête authorization_details.

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

Liste des identifiants d'émetteur du serveur d'autorisation OAuth pouvant être utilisés avec cette ressource protégée.

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

Méthodes prises en charge pour l'envoi de jetons porteurs OAuth 2.0. Valeurs : ["header", "body", "query"].

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

Indique si la ressource protégée exige toujours des jetons d’accès liés à DPoP.

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

Algorithmes JWS pris en charge pour la validation des preuves JWT DPoP.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL du document JSON Web Key (JWK) Set de la ressource protégée. Ce document contient les clés publiques
qui peuvent être utilisées pour vérifier les signatures numériques des réponses ou des données renvoyées par cette ressource protégée.
Ceci diffère du jwks_uri du serveur d'autorisation qui est utilisé pour la validation des jetons. Lorsque la ressource protégée
signe ses réponses, les clients peuvent récupérer ces clés publiques pour vérifier l'authenticité et l'intégrité
des données reçues.

### resource {#resource}

```ts
resource: string;
```

Identifiant de la ressource protégée.

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

URL contenant la documentation développeur pour l'utilisation de la ressource protégée.

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

Nom lisible par l'utilisateur de la ressource protégée pour l'affichage aux utilisateurs finaux.

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

URL contenant des informations sur les exigences d'utilisation des données de la ressource protégée.

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

Algorithmes de signature JWS pris en charge par la ressource protégée pour la signature des réponses de ressource.

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

URL contenant les conditions d'utilisation de la ressource protégée.

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

Liste des valeurs de portée utilisées dans les requêtes d'autorisation pour accéder à cette ressource protégée.

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

Un JWT signé contenant les paramètres de métadonnées en tant que revendications (claims). Le JWT doit être signé à l'aide de JWS et inclure
une revendication 'iss'. Ce champ fournit un moyen de vérifier cryptographiquement l'authenticité des métadonnées
elles-mêmes. La signature peut être vérifiée à l'aide des clés publiques disponibles à l'endpoint `jwks_uri`.
Lorsqu'il est présent, les valeurs de ces métadonnées signées prévalent sur les valeurs JSON simples
correspondantes dans ce document de métadonnées. Cela aide à prévenir la falsification des métadonnées de la ressource.

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

Indique si la ressource protégée prend en charge les jetons d’accès liés à un certificat client mutual-TLS.
