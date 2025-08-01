---
sidebar_label: AuthorizationServerMetadata
---

# Alias de type : AuthorizationServerMetadata

```ts
type AuthorizationServerMetadata = {
  authorization_endpoint: string;
  code_challenge_methods_supported?: string[];
  grant_types_supported?: string[];
  introspection_endpoint?: string;
  introspection_endpoint_auth_methods_supported?: string[];
  introspection_endpoint_auth_signing_alg_values_supported?: string[];
  issuer: string;
  jwks_uri?: string;
  op_policy_uri?: string;
  op_tos_uri?: string;
  registration_endpoint?: string;
  response_modes_supported?: string[];
  response_types_supported: string[];
  revocation_endpoint?: string;
  revocation_endpoint_auth_methods_supported?: string[];
  revocation_endpoint_auth_signing_alg_values_supported?: string[];
  scope_supported?: string[];
  service_documentation?: string;
  token_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  ui_locales_supported?: string[];
  userinfo_endpoint?: string;
};
```

Schéma pour les métadonnées du serveur d’autorisation OAuth 2.0 tel que défini dans la RFC 8414.

## Déclaration de type {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

URL du point de terminaison d’autorisation du serveur d’autorisation [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Ceci est OBLIGATOIRE sauf si aucun type de flux n’est pris en charge utilisant le point de terminaison d’autorisation.

#### Voir {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

Tableau JSON contenant une liste des méthodes de challenge PKCE (Proof Key for Code Exchange)
[[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] prises en charge par ce serveur d’autorisation.

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

Tableau JSON contenant une liste des valeurs de type de flux OAuth 2.0 que ce serveur d’autorisation prend en charge. Les valeurs du tableau sont les mêmes que celles utilisées avec le paramètre `grant_types` défini par le "Protocole d’enregistrement dynamique des clients OAuth 2.0" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].
Si omis, la valeur par défaut est `["authorization_code", "implicit"]`.

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

URL du point de terminaison d’introspection OAuth 2.0 du serveur d’autorisation
[[RFC7662](https://www.rfc-editor.org/rfc/rfc7662)].

### introspection\_endpoint\_auth\_methods\_supported? {#introspection-endpoint-auth-methods-supported}

```ts
optional introspection_endpoint_auth_methods_supported: string[];
```

### introspection\_endpoint\_auth\_signing\_alg\_values\_supported? {#introspection-endpoint-auth-signing-alg-values-supported}

```ts
optional introspection_endpoint_auth_signing_alg_values_supported: string[];
```

### issuer {#issuer}

```ts
issuer: string;
```

Identifiant de l’émetteur (Issuer) du serveur d’autorisation, qui est une URL utilisant le schéma `https` et ne comportant ni composant de requête ni fragment.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL du document JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)] du serveur d’autorisation. Le document référencé contient la ou les clés de signature que le client utilise pour valider les signatures du serveur d’autorisation. Cette URL DOIT utiliser le schéma `https`.

### op\_policy\_uri? {#op-policy-uri}

```ts
optional op_policy_uri: string;
```

### op\_tos\_uri? {#op-tos-uri}

```ts
optional op_tos_uri: string;
```

### registration\_endpoint? {#registration-endpoint}

```ts
optional registration_endpoint: string;
```

URL du point de terminaison d’enregistrement dynamique des clients OAuth 2.0 du serveur d’autorisation
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

Tableau JSON contenant une liste des valeurs `response_mode` OAuth 2.0 que ce serveur d’autorisation prend en charge, comme spécifié dans "OAuth 2.0 Multiple Response Type Encoding Practices"
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)].

Si omis, la valeur par défaut est `["query", "fragment"]`. La valeur de mode de réponse `"form_post"` est également définie dans "OAuth 2.0 Form Post Response Mode"
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)].

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

Tableau JSON contenant une liste des valeurs `response_type` OAuth 2.0 que ce serveur d’autorisation prend en charge. Les valeurs du tableau sont les mêmes que celles utilisées avec le paramètre `response_types` défini par le "Protocole d’enregistrement dynamique des clients OAuth 2.0"
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

URL du point de terminaison de révocation OAuth 2.0 du serveur d’autorisation
[[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)].

### revocation\_endpoint\_auth\_methods\_supported? {#revocation-endpoint-auth-methods-supported}

```ts
optional revocation_endpoint_auth_methods_supported: string[];
```

### revocation\_endpoint\_auth\_signing\_alg\_values\_supported? {#revocation-endpoint-auth-signing-alg-values-supported}

```ts
optional revocation_endpoint_auth_signing_alg_values_supported: string[];
```

### scope\_supported? {#scope-supported}

```ts
optional scope_supported: string[];
```

### service\_documentation? {#service-documentation}

```ts
optional service_documentation: string;
```

### token\_endpoint {#token-endpoint}

```ts
token_endpoint: string;
```

URL du point de terminaison de jeton du serveur d’autorisation [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Ceci est OBLIGATOIRE sauf si seul le type de flux implicite est pris en charge.

#### Voir {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.2

### token\_endpoint\_auth\_methods\_supported? {#token-endpoint-auth-methods-supported}

```ts
optional token_endpoint_auth_methods_supported: string[];
```

### token\_endpoint\_auth\_signing\_alg\_values\_supported? {#token-endpoint-auth-signing-alg-values-supported}

```ts
optional token_endpoint_auth_signing_alg_values_supported: string[];
```

### ui\_locales\_supported? {#ui-locales-supported}

```ts
optional ui_locales_supported: string[];
```

### userinfo\_endpoint? {#userinfo-endpoint}

```ts
optional userinfo_endpoint: string;
```

URL du [point de terminaison userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) OpenID Connect.
Ce point de terminaison est utilisé pour récupérer des informations sur l’utilisateur authentifié.

## Voir {#see}

https://datatracker.ietf.org/doc/html/rfc8414