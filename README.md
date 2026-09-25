# Atelier Night

A small Next.js art-show site for a Cloudways Velocity hackathon demo.

Visitors can RSVP for a live evening, browse six works, and reserve a piece. Checkout is mocked on purpose so the talk stays on Velocity: Git deploy, auto-redeploy, environment variables, and rollback.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production start (what Velocity runs after a build):

```bash
npm run build
npm start
```

`next start` listens on `0.0.0.0` and honors `PORT`.

## Environment variables

Set these in Cloudways Velocity (App Settings, Environment Variables). The app reads them at request time.

| Name | Fallback | Where it shows |
| --- | --- | --- |
| `EVENT_NAME` | `Atelier Night` | Header, hero, footer strip |
| `EVENT_DATE` | `October 12, 2026` | Home and thanks pages |
| `EVENT_VENUE` | `Studio 4, live and in person` | Home |

The footer also prints `APP_VERSION` from code (`src/lib/config.ts`), the Node version, and process start time so a redeploy or rollback is visible without opening logs.

## Demo notes

RSVPs and reservations write to `data/store.json` on the running process. A fresh deploy may reset that file. That is expected for the live talk.

See [DEMO.md](DEMO.md) for the console click path.
