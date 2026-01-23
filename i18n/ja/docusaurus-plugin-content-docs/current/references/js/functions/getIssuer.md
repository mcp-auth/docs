---
sidebar_label: getIssuer
---

# 関数: getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

認証サーバー設定から発行者 (Issuer) の URL を取得します。

- 解決済み設定: `metadata.issuer` から抽出
- ディスカバリー設定: `issuer` を直接返す

## パラメーター {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## 戻り値 {#returns}

`string`
