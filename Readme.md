# Pookie Data — Serverless DynamoDB Lambda

![version](https://img.shields.io/badge/version-1.0.0-blue)

A small Serverless Node.js service that exposes HTTP read and write endpoints backed by a DynamoDB table. It is designed for quick local development with `serverless-offline` and straightforward deployment to AWS via the Serverless Framework.

#

## What the project does

This repository provides two HTTP APIs (read and write) packaged as AWS Lambda functions using the Serverless Framework. Incoming HTTP requests are routed through Express, validated, and persisted to DynamoDB for the write path.

## Why this is useful

- Lightweight serverless microservice pattern using Express + serverless-http
- Local development with `serverless-offline` for fast iteration
- DynamoDB-backed persistence with AWS SDK v3 and DynamoDB Document client
- Input validation via `zod` and consistent runtime JSON logging

## Quick start

Prerequisites

- Node.js (matches runtime in `serverless.yaml`, e.g. Node 22)
- npm
- (Optional) `serverless` CLI globally if you prefer global usage: `npm i -g serverless`

Install dependencies

```bash
npm install
```

Run locally (serverless offline)

```bash
npm run dev
```

By default `serverless-offline` exposes the HTTP API (usually on port 3000). Example requests:

```bash
curl http://localhost:3000/read/health
curl http://localhost:3000/write/health

curl -X POST http://localhost:3000/write/data \
	-H 'Content-Type: application/json' \
	-d '{"device":"device-1","status":"ok"}'
```

Deploy to AWS

```bash
npm run deploy
```

This will use the configuration in [serverless.yaml](serverless.yaml).

## Configuration

- Table name and environment are configured in [serverless.yaml](serverless.yaml). The provider environment key `TABLE_NAME` is set to `pookie-data-table` by default.
- The project uses ES modules (`type: module` in `package.json`).

## Project layout

- `serverless.yaml` — deployment and function definitions
- `src/read/handler.js` — read function entry (wraps Express app)
- `src/write/handler.js` — write function entry (wraps Express app)
- `src/read/routes.js` — read routes (e.g. `/health`)
- `src/write/routes.js` — write routes and validation middleware
- `src/write/controller.js` — write controller (DynamoDB interactions)
- `core/create_app.js` — helper to create an Express app
- `core/dynamo_client.js` — DynamoDB Document client wrapper
- `core/runtime_logs.js` — simple structured logger used across the app
- `data/schema.js` — Zod schemas for request validation
- `data/validator.js` — middleware to validate requests against schemas
- `aws/database.yaml` — CloudFormation resource for the DynamoDB table

Refer directly to these files for implementation details.

## Where to get help

- Open an issue or submit a pull request on the project's GitHub repository.
- For questions about local development, check the `dev` script in `package.json` and `serverless-offline` documentation.
