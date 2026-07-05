# Pookie Data Service

A small AWS Lambda backend built with Serverless Framework, Express, and DynamoDB. `Pookie Data Service` provides a write-ready API for device status payloads and a read API scaffold for future query support.

## Why this project is useful

- Provides a serverless HTTP API for persisting device status records into DynamoDB
- Uses `Express` with `serverless-http` so local development mirrors AWS Lambda routing
- Includes a reusable DynamoDB client, validation middleware, and structured runtime logging
- Deploys with `serverless deploy` and can run locally with `serverless offline`

## Key features

- `POST /write/data` to store device status payloads in DynamoDB
- `GET /write/health` and `GET /read/health` for quick route health checks
- DynamoDB table defined in `aws/database.yaml`
- Input validation powered by `zod`

## Getting started

### Prerequisites

- Node.js 18+ or compatible with Serverless AWS runtime
- npm
- AWS credentials configured for `serverless deploy`

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

This starts Serverless Offline and exposes the service routes under the local HTTP API.

### Deploy to AWS

```bash
npm run deploy
```

The project deploys the `readApi` and `writeApi` Lambda functions from `serverless.yaml`.

## API overview

### Write service

- `POST /write/data`
  - Body schema:
    - `device` (string)
    - `status` (string)
  - Example request:

```bash
curl --request POST http://localhost:3000/write/data \
  --header "Content-Type: application/json" \
  --data '{"device":"sensor-01","status":"active"}'
```

- `GET /write/health`
  - Returns a simple health check response

### Read service

- `GET /read/data`
  - Currently returns a placeholder response while the read controller is under construction
- `GET /read/health`
  - Returns a simple health check response

## Project structure

- `serverless.yaml` — Serverless service definition and AWS resource config
- `aws/database.yaml` — DynamoDB table definition
- `core/` — shared Express app factory, DynamoDB client, and logging utilities
- `data/validator.js` — request body validation middleware using `zod`
- `src/read/` — read service routes, controller, and Lambda handler
- `src/write/` — write service routes, controller, and Lambda handler

## Configuration

- Environment variables are defined in `serverless.yaml`:
  - `TABLE_NAME`
  - `CURRENT_AWS_REGION`
- DynamoDB table name is `pookie-data-table`

## Help and support

For code questions, inspect `serverless.yaml`, `src/*`, and `aws/database.yaml`.

If you need project support, open an issue or submit a pull request in the repository.

## Contributing

Contributions are welcome through issues and pull requests.

## Maintainers

This repository is maintained by the project owner. See `package.json` for package metadata and project scripts.
