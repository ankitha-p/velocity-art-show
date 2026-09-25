# The Great Indian Art Show

A Next.js art-show site for a Cloudways Velocity hackathon demo.

Visitors RSVP for a live hanging of six Indian traditions (Madhubani, Warli, Pichwai, Kerala mural, Gond, Pattachitra), browse the works, and reserve a piece. Checkout is mocked so the talk stays on Velocity: Git deploy, auto-redeploy, environment variables, and rollback.

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
| `EVENT_NAME` | `The Great Indian Art Show` | Header, hero, footer strip |
| `EVENT_DATE` | `15 November 2026` | Home When card, RSVP copy, thanks page, footer |
| `EVENT_VENUE` | `National Gallery of Modern Art, New Delhi` | Home Where card, RSVP copy, thanks page, footer |

Change `EVENT_NAME`, `EVENT_DATE`, and `EVENT_VENUE` in Velocity, redeploy, and reload. No git push. That is the live audience beat.

The footer also prints `APP_VERSION` from code (`src/lib/config.ts`), the Node version, and process start time so a redeploy or rollback is visible without opening logs.

## Demo notes

RSVPs and reservations write to `data/store.json` on the running process. A fresh deploy may reset that file. That is expected for the live talk.

See [DEMO.md](DEMO.md) for the console click path.
