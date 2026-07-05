# AGENTS — Assistant instructions for this repository

Purpose: give AI coding agents the minimal, actionable context needed to work productively on this codebase.

1. Quick project summary

- Service: serverless AWS HTTP APIs for reading and writing pookie data (see [serverless.yaml](serverless.yaml#L1-L4)).

2. Key commands

- Install dependencies: `npm install`.
- Run locally (Serverless Offline): see `scripts` in [package.json](package.json#L9-L11).
- Deploy: `npm run deploy` (invokes Serverless deploy via [package.json](package.json#L9-L11)).

3. Architecture & important files

- Entrypoints: handlers defined in [serverless.yaml](serverless.yaml#L29-L42) mapping to `src/read/handler.js` and `src/write/handler.js`.
- Express app factory: [core/create_app.js](core/create_app.js#L1-L8).
- Dynamo helpers: [core/dynamo_client.js](core/dynamo_client.js#L1-L24).
- Validation: request schemas and middleware in [data/validator.js](data/validator.js#L1-L22).
- DB infra: [aws/database.yaml](aws/database.yaml) is referenced by [serverless.yaml](serverless.yaml#L44-L45).

4. Conventions & agent guidance (concise)

- Use ES modules (package.json `type: module`).
- Imports use path aliases: `#core/*` and `#data/*` mapped in `package.json` `imports`.
- Prefer small, focused edits. Link to existing files rather than duplicating documentation.
- When adding runtime console/log messages use the `logger` exported from `core/runtime_logs.js` (used across the codebase).

5. What to check before proposing changes

- Verify handler wiring in [serverless.yaml](serverless.yaml#L29-L42) and corresponding `src/*/handler.js` files.
- Run `npm run dev` to exercise serverless-offline if changing endpoints or routes.

6. Suggested next customizations

- Create a `.github/copilot-instructions.md` with onboarding tips for contributors (if desired).
- Add a small skill that automates common dev tasks: `npm install` + `npm run dev` + health-check the two endpoints.

If you'd like, I can also create `.github/copilot-instructions.md` from this content or add a small skill to automate local dev startup.
