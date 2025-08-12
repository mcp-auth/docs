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

JWTVerifyGetKey für die Typdefinition der Schlüsselabruf-Funktion.

### options? {#options}

`JWTVerifyOptions`

Optionale Optionen zur JWT-Überprüfung.

**Siehe**

JWTVerifyOptions für die Typdefinition der Optionen.

## Rückgabewert {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Eine Funktion, die JWT-Zugangstokens (Access tokens) überprüft und ein AuthInfo-Objekt zurückgibt, wenn das Token gültig ist. Das JWT muss die Felder `iss`, `client_id` und `sub` im Payload enthalten und kann optional die Felder `scope` oder `scopes` enthalten. Die Funktion verwendet intern die `jose`-Bibliothek, um die JWT-Überprüfung durchzuführen.

## Siehe {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) für die Typdefinition der zurückgegebenen Funktion.
