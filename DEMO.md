# Live talk: Cloudways Velocity

Repo: [ankitha-p/velocity-art-show](https://github.com/ankitha-p/velocity-art-show)

The site is the vehicle. Velocity is the story.

## 1. First deploy

1. In the Cloudways console, create a Velocity application.
2. Connect GitHub and pick `ankitha-p/velocity-art-show`, branch `main`.
3. Confirm the Next.js preset (Velocity should detect it from `package.json`).
4. Deploy. Open the live URL.
5. RSVP for the event. Open the gallery. Reserve one piece.

Talking point: Git is the source of truth. No SSH, no PM2, no Nginx config.

## 2. Auto-deploy on push

On your laptop, make a visual v2 change and push `main`:

1. In `src/lib/config.ts`, set `APP_VERSION` to `v2.0.0` and `THEME_COLOR` to `#2563eb` (or any other color).
2. Optional: add a seventh piece in `src/data/art.ts` and a matching file under `public/art/`.
3. Commit and push.

Stay on the live URL. When the deploy finishes, reload. The footer badge, accent color, and (if you added one) new work should change without touching the Velocity dashboard.

## 3. Environment variables

1. Velocity, App Settings, Environment Variables.
2. Add `EVENT_NAME` = `Harbor Lights`.
3. Optional: `EVENT_DATE` = `November 2, 2026`.
4. Save and redeploy.

Reload. The header, hero, and footer strip should show the new name.

## 4. Rollback

1. Open the Deployments tab.
2. Roll back to the first deploy (`v1.0.0`).
3. Reload. Accent, version badge, and catalog return to v1.

## If something looks stale

Hard-refresh the live URL. RSVP and reserve data may reset after a deploy; that is the JSON file on disk, not a Velocity bug.
