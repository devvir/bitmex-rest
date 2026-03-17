# @devvir/bitmex-rest

TypeScript types, Zod schemas, and typed API clients for the [BitMEX REST API](https://www.bitmex.com/api/explorer/), auto-generated from the official Swagger spec.

## Install

```bash
npm install @devvir/bitmex-rest
# or
pnpm add @devvir/bitmex-rest
```

**Peer dependencies:** `zod` (for schemas), `axios` (for Axios client only).

## Usage

### TypeScript types

```typescript
import type { paths, operations, components } from '@devvir/bitmex-rest/types';

type Order = components['schemas']['Order'];
type Position = components['schemas']['Position'];
```

### Zod schemas

```typescript
import { OrderGetOrdersQueryParams, OrderGetOrdersResponseItem } from '@devvir/bitmex-rest/schemas';

const params = OrderGetOrdersQueryParams.parse(userInput);
```

### Fetch client (zero runtime deps)

```typescript
import { orderGetOrders, orderNew } from '@devvir/bitmex-rest/client/fetch';

const orders = await orderGetOrders({ symbol: 'XBTUSD', count: 10 });
```

### Axios client

```typescript
import axios from 'axios';
import { getBitMEXAPI } from '@devvir/bitmex-rest/client/axios';

const api = getBitMEXAPI(axios.create({ headers: { 'api-key': '...' } }));
const orders = await api.orderGetOrders({ symbol: 'XBTUSD' });
```

## What's included

| Entry point | Description |
|---|---|
| `@devvir/bitmex-rest/types` | TypeScript interfaces for all schemas and operations |
| `@devvir/bitmex-rest/schemas` | Zod validation schemas |
| `@devvir/bitmex-rest/client/fetch` | Native fetch client |
| `@devvir/bitmex-rest/client/axios` | Axios-based client |

The original `swagger.json` is also included in the package.

## Regenerating

This package uses [@devvir/openapi-ts-client](https://github.com/devvir/openapi-ts-client) (included as a git submodule) to generate all source files from the BitMEX Swagger spec.

```bash
git clone --recurse-submodules https://github.com/devvir/bitmex-rest.git
pnpm install
pnpm generate
pnpm build
```
