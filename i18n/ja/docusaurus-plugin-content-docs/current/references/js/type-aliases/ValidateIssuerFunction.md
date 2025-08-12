---
sidebar_label: ValidateIssuerFunction
---

# 型エイリアス: ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

アクセス トークン (Access token) の発行者 (Issuer) を検証するための関数型です。

この関数は、発行者 (Issuer) が有効でない場合、コード 'invalid_issuer' の [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md) をスローする必要があります。発行者 (Issuer) は以下に対して検証されるべきです：

1. MCP-Auth の認可サーバーメタデータで設定された認可サーバー (Authorization servers)
2. 保護されたリソースのメタデータに記載された認可サーバー (Authorization servers)

## パラメーター {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## 戻り値 {#returns}

`void`

## 例外 {#throws}

発行者 (Issuer) が認識されない、または無効な場合にスローされます。