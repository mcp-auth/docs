---
sidebar_label: BearerAuthConfig
---

# 类型别名：BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## 属性 {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

访问令牌 (Access token)（`aud` 声明）的预期受众 (Audience)。这通常是该令牌所针对的资源服务器（API）。如果未提供，将跳过受众 (Audience) 检查。

**注意：** 如果你的授权 (Authorization) 服务器不支持资源指示器 (Resource Indicators)（RFC 8707），你可以省略此字段，因为受众 (Audience) 可能不相关。

#### 参见 {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

访问令牌 (Access token)（`iss` 声明）的预期发行者 (Issuer)。这应为颁发该令牌的授权 (Authorization) 服务器的 URL。

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

访问令牌 (Access token) 必须包含的权限 (Scopes) 数组。如果令牌未包含所有这些权限 (Scopes)，将抛出错误。

**注意：** 处理器将检查令牌中的 `scope` 声明，该声明可能是以空格分隔的字符串，也可能是字符串数组，具体取决于授权 (Authorization) 服务器的实现。如果 `scope` 声明不存在，处理器将检查 `scopes` 声明（如果可用）。

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

是否在响应中显示详细的错误信息。这对于开发期间调试很有用，但在生产环境中应禁用，以避免泄露敏感信息。

#### 默认值 {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

用于验证访问令牌 (Access token) 的函数类型。

如果令牌无效，此函数应抛出 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)；如果令牌有效，则返回 AuthInfo 对象。

#### 参见 {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 获取更多详情。
