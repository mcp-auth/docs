---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# Fonction : fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<ResolvedAuthServerConfig>;
```

Récupère la configuration du serveur à partir de l’URL bien connue fournie et la valide selon la spécification MCP.

Si les métadonnées du serveur ne sont pas conformes au schéma attendu, mais que vous êtes certain qu’elles sont compatibles, vous pouvez définir une fonction `transpileData` pour transformer les métadonnées dans le format attendu.

## Paramètres {#parameters}

### wellKnownUrl {#wellknownurl}

L’URL bien connue à partir de laquelle récupérer la configuration du serveur. Cela peut être une chaîne de caractères ou un objet URL.

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

L’objet de configuration contenant le type de serveur et éventuellement la fonction de transpilation.

## Retourne {#returns}

`Promise`\<[`ResolvedAuthServerConfig`](/references/js/type-aliases/ResolvedAuthServerConfig.md)\>

Une promesse qui se résout avec la configuration statique du serveur et les métadonnées récupérées.

## Déclenche une exception {#throws}

si l’opération de récupération échoue.

## Déclenche une exception {#throws}

si les métadonnées du serveur sont invalides ou ne correspondent pas à la spécification MCP.
