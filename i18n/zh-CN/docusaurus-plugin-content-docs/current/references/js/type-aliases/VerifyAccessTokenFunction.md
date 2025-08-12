---
sidebar_label: VerifyAccessTokenFunction
---

# 类型别名：VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

用于验证访问令牌 (Access token) 的函数类型。

如果令牌无效，此函数应抛出 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)；
如果令牌有效，则返回一个 AuthInfo 对象。

例如，如果你有一个 JWT 验证函数，它至少应检查令牌的签名、验证其过期时间，并提取必要的声明 (Claims) 以返回一个 `AuthInfo` 对象。

**注意：** 无需验证令牌中的以下字段，因为它们会由处理程序进行检查：

- `iss`（发行者 (Issuer)）
- `aud`（受众 (Audience)）
- `scope`（权限 (Scopes)）

## 参数 {#parameters}

### token {#token}

`string`

要验证的访问令牌 (Access token) 字符串。

## 返回值 {#returns}

`MaybePromise`\<`AuthInfo`\>

一个 Promise（或同步值），当令牌有效时解析为 AuthInfo 对象。
