---
sidebar_label: ValidateIssuerFunction
---

# 类型别名：ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

用于验证访问令牌 (Access token) 的发行者 (Issuer) 的函数类型。

如果发行者 (Issuer) 无效，此函数应抛出一个带有代码 'invalid_issuer' 的 [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md)。发行者 (Issuer) 应根据以下内容进行验证：

1. MCP-Auth 的授权服务器 (Authorization server) 元数据中配置的授权服务器 (Authorization server)
2. 受保护资源元数据中列出的授权服务器 (Authorization server)

## 参数 {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## 返回 {#returns}

`void`

## 抛出 {#throws}

当发行者 (Issuer) 未被识别或无效时。
