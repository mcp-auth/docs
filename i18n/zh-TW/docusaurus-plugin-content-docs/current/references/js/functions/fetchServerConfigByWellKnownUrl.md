---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# 函式：fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

從提供的 well-known URL 取得伺服器設定，並依據 MCP 規範進行驗證。

如果伺服器中繼資料不符合預期的結構，但你確定其相容，你可以定義 `transpileData` 函式，將中繼資料轉換為預期格式。

## 參數 {#parameters}

### wellKnownUrl {#wellknownurl}

要從中取得伺服器設定的 well-known URL。可以是字串或 URL 物件。

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

包含伺服器類型與可選轉換函式的設定物件。

## 回傳值 {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

一個 promise，解析後會得到伺服器設定。

## 例外 {#throws}

當取得操作失敗時會丟出例外。

## 例外 {#throws}

當伺服器中繼資料無效或不符合 MCP 規範時會丟出例外。
