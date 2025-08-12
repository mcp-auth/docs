---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# Función: fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

Obtiene la configuración del servidor desde la URL well-known proporcionada y la valida según la especificación MCP.

Si los metadatos del servidor no se ajustan al esquema esperado, pero estás seguro de que son compatibles, puedes definir una función `transpileData` para transformar los metadatos al formato esperado.

## Parámetros {#parameters}

### wellKnownUrl {#wellknownurl}

La URL well-known desde la que obtener la configuración del servidor. Puede ser una cadena de texto o un objeto URL.

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

El objeto de configuración que contiene el tipo de servidor y una función opcional de transformación.

## Devuelve {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

Una promesa que se resuelve con la configuración del servidor.

## Lanza {#throws}

si la operación de obtención falla.

## Lanza {#throws}

si los metadatos del servidor son inválidos o no coinciden con la especificación MCP.