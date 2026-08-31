---
sidebar_label: ServerMetadataConfig
---

# Type Alias: ServerMetadataConfig

```ts
type ServerMetadataConfig = {
  transpileData?: (data: object) => 
     | Record<string, unknown>
    | Promise<Record<string, unknown>>;
  type: AuthServerType;
};
```

## Properties

### transpileData()?

```ts
optional transpileData: (data: object) => 
  | Record<string, unknown>
| Promise<Record<string, unknown>>;
```

A function to transpile the fetched metadata into the expected format. This is useful if the
server metadata does not conform to the standard schema or if you want to customize the
transformation of the metadata. The function may be synchronous or return a promise.

#### Parameters

##### data

`object`

#### Returns

  \| `Record`\<`string`, `unknown`\>
  \| `Promise`\<`Record`\<`string`, `unknown`\>\>

***

### type

```ts
type: AuthServerType;
```

The type of the remote authorization server.
