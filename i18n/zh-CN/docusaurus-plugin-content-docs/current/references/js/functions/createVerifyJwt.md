---
sidebar_label: createVerifyJwt
---

# 函数：createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

使用提供的密钥检索函数和选项，创建一个用于验证 JWT 访问令牌 (Access token) 的函数。

## 参数 {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

用于检索验证 JWT 所需密钥的函数。

**参见**

JWTVerifyGetKey 以获取密钥检索函数的类型定义。

### options? {#options}

`JWTVerifyOptions`

可选的 JWT 验证选项。

**参见**

JWTVerifyOptions 以获取选项的类型定义。

## 返回值 {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

一个用于验证 JWT 访问令牌 (Access token) 的函数，如果令牌有效，则返回一个 AuthInfo 对象。该函数要求 JWT 的 payload 中包含 `iss`、`client_id` 和 `sub` 字段，并且可以选择性地包含 `scope` 或 `scopes` 字段。该函数底层使用 `jose` 库来执行 JWT 验证。

## 参见 {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以获取返回函数的类型定义。
