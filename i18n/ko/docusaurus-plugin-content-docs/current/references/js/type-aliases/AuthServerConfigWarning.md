---
sidebar_label: AuthServerConfigWarning
---

# 타입 별칭: AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

인가 서버 메타데이터 검증 중에 발생하는 경고를 나타냅니다.

## 속성 {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

특정 검증 경고를 나타내는 코드입니다.

***

### description {#description}

```ts
description: string;
```

경고에 대한 사람이 읽을 수 있는 설명입니다.
