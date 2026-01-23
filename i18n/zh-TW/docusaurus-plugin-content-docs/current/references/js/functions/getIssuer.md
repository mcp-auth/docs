---
sidebar_label: getIssuer
---

# 函式：getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

從驗證伺服器設定中取得簽發者 (Issuer) URL。

- 已解析設定：從 `metadata.issuer` 擷取
- 探索設定：直接回傳 `issuer`

## 參數 {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## 回傳值 {#returns}

`string`
