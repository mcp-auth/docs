---
sidebar_label: createVerifyJwt
---

# 関数: createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

指定されたキー取得関数とオプションを使用して、JWT アクセス トークン (Access token) を検証する関数を作成します。

## パラメーター {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

JWT を検証するために使用されるキーを取得する関数です。

**参照**

キー取得関数の型定義については JWTVerifyGetKey を参照してください。

### options? {#options}

`JWTVerifyOptions`

オプションの JWT 検証オプションです。

**参照**

オプションの型定義については JWTVerifyOptions を参照してください。

## 戻り値 {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

JWT アクセス トークン (Access token) を検証し、トークンが有効な場合は AuthInfo オブジェクトを返す関数です。この関数は、JWT のペイロードに `iss`、`client_id`、`sub` フィールドが含まれている必要があり、オプションで `scope` または `scopes` フィールドを含めることができます。内部的には `jose` ライブラリを使用して JWT の検証を行います。

## 参照 {#see}

返される関数の型定義については [VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) を参照してください。
