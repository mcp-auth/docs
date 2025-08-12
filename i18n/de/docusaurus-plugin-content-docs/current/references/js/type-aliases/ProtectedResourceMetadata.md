---
sidebar_label: ProtectedResourceMetadata
---

# Typalias: ProtectedResourceMetadata

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

Schema für OAuth 2.0 Geschützte Ressourcen-Metadaten.

## Typdeklaration {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

Unterstützte Werte für den Typ der Autorisierungsdetails, wenn der Parameter authorization_details in der Anfrage verwendet wird.

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

Liste der OAuth-Autorisierungsserver-Ausstellerkennungen, die mit dieser geschützten Ressource verwendet werden können.

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

Unterstützte Methoden zum Senden von OAuth 2.0 Bearer Tokens. Werte: ["header", "body", "query"].

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

Ob die geschützte Ressource immer DPoP-gebundene Zugangstokens (Zugangstoken) erfordert.

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

Unterstützte JWS-Algorithmen zur Validierung von DPoP-Proof JWTs.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL des JSON Web Key (JWK) Set-Dokuments der geschützten Ressource. Dieses Dokument enthält die öffentlichen Schlüssel,
die zur Überprüfung digitaler Signaturen von Antworten oder Daten verwendet werden können, die von dieser geschützten Ressource zurückgegeben werden.
Dies unterscheidet sich von der jwks_uri des Autorisierungsservers, die für die Token-Validierung verwendet wird. Wenn die geschützte
Ressource ihre Antworten signiert, können Clients diese öffentlichen Schlüssel abrufen, um die Authentizität und Integrität
der empfangenen Daten zu überprüfen.

### resource {#resource}

```ts
resource: string;
```

Der Ressourcenbezeichner der geschützten Ressource.

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

URL mit Entwicklerdokumentation zur Nutzung der geschützten Ressource.

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

Für Endbenutzer lesbarer Name der geschützten Ressource zur Anzeige.

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

URL mit Informationen zu den Anforderungen an die Datennutzung der geschützten Ressource.

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

Von der geschützten Ressource unterstützte JWS-Signaturalgorithmen zum Signieren von Ressourcenantworten.

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

URL mit den Nutzungsbedingungen der geschützten Ressource.

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

Liste der Berechtigungswerte (Scopes), die in Autorisierungsanfragen zum Zugriff auf diese geschützte Ressource verwendet werden.

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

Ein signiertes JWT, das Metadatenparameter als Ansprüche (Claims) enthält. Das JWT muss mit JWS signiert sein und einen 'iss'-Anspruch enthalten.
Dieses Feld bietet eine Möglichkeit, die Authentizität der Metadaten selbst kryptografisch zu überprüfen.
Die Signatur kann mit den öffentlichen Schlüsseln überprüft werden, die am `jwks_uri`-Endpunkt verfügbar sind.
Wenn vorhanden, haben die Werte in diesen signierten Metadaten Vorrang vor den entsprechenden einfachen
JSON-Werten in diesem Metadatendokument. Dies hilft, Manipulationen an den Ressourcenmetadaten zu verhindern.

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

Ob die geschützte Ressource Mutual-TLS-Clientzertifikat-gebundene Zugangstokens unterstützt.
