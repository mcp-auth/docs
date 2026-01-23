---
sidebar_label: createVerifyJwt
---

# Funktion: createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

Erstellt eine Funktion zur Überprüfung von JWT-Zugangstokens (Access tokens), indem die bereitgestellte Schlüsselabruffunktion und Optionen verwendet werden.

## Parameter {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

Die Funktion zum Abrufen des Schlüssels, der zur Überprüfung des JWT verwendet wird.

**Siehe**

JWTVerifyGetKey für die Typdefinition der Schlüsselabruffunktion.

### options? {#options}

`JWTVerifyOptions`

Optionale Optionen zur JWT-Überprüfung.

**Siehe**

JWTVerifyOptions für die Typdefinition der Optionen.

## Rückgabewert {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Eine Funktion, die JWT-Zugangstokens (Access tokens) überprüft und ein AuthInfo-Objekt zurückgibt, wenn das Token gültig ist. Es wird vorausgesetzt, dass das JWT die Felder `iss`, `client_id` und `sub` im Payload enthält; optional können auch die Felder `scope` oder `scopes` enthalten sein. Die Funktion verwendet intern die `jose`-Bibliothek, um die JWT-Überprüfung durchzuführen.

## Siehe {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) für die Typdefinition der zurückgegebenen Funktion.
