---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# Funktion: fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<ResolvedAuthServerConfig>;
```

Ruft die Serverkonfiguration von der angegebenen Well-Known-URL ab und validiert sie gegen die
MCP-Spezifikation.

Wenn die Server-Metadaten nicht dem erwarteten Schema entsprechen, du dir aber sicher bist, dass sie
kompatibel sind, kannst du eine `transpileData`-Funktion definieren, um die Metadaten in das
erwartete Format zu transformieren.

## Parameter {#parameters}

### wellKnownUrl {#wellknownurl}

Die Well-Known-URL, von der die Serverkonfiguration abgerufen werden soll. Dies kann ein
String oder ein URL-Objekt sein.

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

Das Konfigurationsobjekt, das den Servertyp und optional eine Transpile-Funktion enthält.

## Rückgabewert {#returns}

`Promise`\<[`ResolvedAuthServerConfig`](/references/js/type-aliases/ResolvedAuthServerConfig.md)\>

Ein Promise, das mit der statischen Serverkonfiguration und den abgerufenen Metadaten aufgelöst wird.

## Löst aus {#throws}

wenn der Abrufvorgang fehlschlägt.

## Löst aus {#throws}

wenn die Server-Metadaten ungültig sind oder nicht der
MCP-Spezifikation entsprechen.
