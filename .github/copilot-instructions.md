# .github/copilot-instructions.md — Quick onboarding for AI coding agents

Purpose: give immediate, minimal instructions so an AI coding agent can be productive without lookup noise.

Keep edits small and focused. Link to docs rather than copying large sections.

1. Quick start (local)

- Install: `npm install`.
- Run locally (Serverless Offline): `npm run dev` (defined in `package.json`).
- Deploy: `npm run deploy` (uses Serverless deploy).

2. Key places to inspect

- Service config: [serverless.yaml](serverless.yaml#L1-L4).
- HTTP entrypoints: [serverless.yaml](serverless.yaml#L29-L42) → `src/read/handler.js`, `src/write/handler.js`.
- Express factory: [core/create_app.js](core/create_app.js#L1-L8).
- Dynamo helpers: [core/dynamo_client.js](core/dynamo_client.js#L1-L24).
- Validation: [data/validator.js](data/validator.js#L1-L22).
- Infra template: [aws/database.yaml](aws/database.yaml) referenced by [serverless.yaml](serverless.yaml#L44-L45).

3. Conventions

- Project uses ES modules (`type: module` in `package.json`).
- Imports use path aliases: `#core/*` and `#data/*` (see `package.json` `imports`).
- Use the shared `logger` from `core/runtime_logs.js` for runtime logs and errors.
- Keep routes and handlers small: `src/*/routes.js`, `src/*/controller.js`, `src/*/handler.js`.

4. Editing guidance

- Verify handler routing in `serverless.yaml` when changing endpoints.
- Run `npm run dev` and exercise endpoints before proposing a PR.
- If changing data contracts, update `data/validator.js` and add clear error handling.

5. PR guidance for agents

- Produce focused changes with tests or manual verification steps.
- Include commands to reproduce locally in the PR description (e.g., `npm install` then `npm run dev`).

6. Where to add more context

- For broader onboarding, update [AGENTS.md](AGENTS.md) or request a project skill that automates `npm install` + `npm run dev` + simple health checks.

If you want, I can also add automated health-check scripts or a small `README.md` with the same quick-start steps.
