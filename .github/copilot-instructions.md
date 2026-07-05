# .github/copilot-instructions.md — Quick onboarding for AI coding agents

Purpose: give immediate, minimal instructions so an AI coding agent can be productive without lookup noise.

1. Quick start

- Install dependencies: `npm install`
- Run locally: `npm run dev` (`serverless offline start --reloadHandler`)
- Deploy: `npm run deploy`

2. Key places to inspect

- Service config: [serverless.yaml](serverless.yaml#L1-L4)
- Handlers: `src/read/handler.js`, `src/write/handler.js`
- Route definitions: `src/read/routes.js`, `src/write/routes.js`
- Controller logic: `src/read/controller.js`, `src/write/controller.js`
- Express app factory: [core/create_app.js](core/create_app.js#L1-L8)
- DynamoDB client: [core/dynamo_client.js](core/dynamo_client.js#L1-L24)
- Validation middleware: [data/validator.js](data/validator.js#L1-L22)
- DynamoDB infra: [aws/database.yaml](aws/database.yaml)

3. Conventions

- Uses ES modules (`type: module` in `package.json`)
- Imports use aliases: `#core/*` and `#data/*`
- Prefer minimal handlers and controllers; keep routing small and focused
- Use the shared `logger` from `core/runtime_logs.js` for logs and errors
- Validate payloads with `data/validator.js` before writing data

4. Editing guidance

- Check `serverless.yaml` handler wiring and `httpApi` catch-all paths when changing endpoints
- Verify local changes by running `npm run dev` and exercising the API routes
- Update `data/validator.js` if API request contracts change

5. Notes for agents

- The write service accepts `POST /write/data` and has a health route at `GET /write/health`
- The read service currently includes `GET /read/data` and `GET /read/health`
- This repo does not include a dedicated test suite, so manual endpoint verification is important
