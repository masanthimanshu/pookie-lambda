# AGENTS — Assistant instructions for this repository

Purpose: give AI coding agents the minimal, actionable context needed to work productively on this codebase.

1. Quick project summary

- Service: Serverless AWS HTTP APIs for reading and writing pookie data, built with Express and DynamoDB.
- Local dev uses `serverless-offline` and mirrors the Lambda route structure.

2. Key commands

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Deploy: `npm run deploy`

3. Architecture & important files

- Service config: [serverless.yaml](serverless.yaml)
- Handlers: `src/read/handler.js`, `src/write/handler.js`
- Routes: `src/read/routes.js`, `src/write/routes.js`
- Controllers: `src/read/controller.js`, `src/write/controller.js`
- Express app factory: [core/create_app.js](core/create_app.js)
- DynamoDB client: [core/dynamo_client.js](core/dynamo_client.js)
- Validation middleware: [data/validator.js](data/validator.js)
- DynamoDB template: [aws/database.yaml](aws/database.yaml)

4. Conventions & agent guidance

- The repo uses ES modules (`type: module` in `package.json`)
- Imports use path aliases: `#core/*` and `#data/*`
- Keep handlers, routes, and controllers small and focused
- Use the shared `logger` from `core/runtime_logs.js` for structured runtime logs and errors
- Validate request bodies in the write flow with `data/validator.js`

5. What to check before proposing changes

- Confirm `serverless.yaml` handler wiring and `httpApi` catch-all path definitions
- Run `npm run dev` and exercise the API routes manually
- If API payload contracts change, update `data/validator.js`

6. Notes for agents

- The write service supports `POST /write/data` and `GET /write/health`
- The read service supports `GET /read/data` and `GET /read/health`
- There is no dedicated test suite, so manual verification is the primary validation step
