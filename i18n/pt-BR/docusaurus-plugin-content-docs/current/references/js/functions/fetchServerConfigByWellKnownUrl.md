---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# Função: fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

Busca a configuração do servidor a partir da well-known URL fornecida e a valida conforme a especificação MCP.

Se os metadados do servidor não estiverem em conformidade com o esquema esperado, mas você tiver certeza de que são compatíveis, é possível definir uma função `transpileData` para transformar os metadados no formato esperado.

## Parâmetros {#parameters}

### wellKnownUrl {#wellknownurl}

A well-known URL de onde buscar a configuração do servidor. Pode ser uma string ou um objeto URL.

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

O objeto de configuração contendo o tipo do servidor e, opcionalmente, a função de transpile.

## Retorno {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

Uma promise que resolve para a configuração do servidor.

## Lança exceção {#throws}

se a operação de busca falhar.

## Lança exceção {#throws}

se os metadados do servidor forem inválidos ou não corresponderem à especificação MCP.