---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# 関数: fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

指定された well-known URL からサーバー構成を取得し、それを MCP 仕様に照らして検証します。

サーバーメタデータが期待されるスキーマに準拠していない場合でも、互換性があると確信している場合は、`transpileData` 関数を定義してメタデータを期待される形式に変換できます。

## パラメーター {#parameters}

### wellKnownUrl {#wellknownurl}

サーバー構成を取得するための well-known URL。これは文字列または URL オブジェクトで指定できます。

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

サーバータイプおよびオプションのトランスパイル関数を含む構成オブジェクト。

## 戻り値 {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

サーバー構成を解決する Promise。

## 例外 {#throws}

フェッチ操作が失敗した場合にスローされます。

## 例外 {#throws}

サーバーメタデータが無効、または MCP 仕様に一致しない場合にスローされます。
