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

1. In `src/lib/config.ts`, set `APP_VERSION` to `v2.0.0` and `THEME_COLOR` to `#0f766e` (peacock green).
2. Optional: add a seventh piece in `src/data/art.ts` and a matching file under `public/art/`.
3. Commit and push.

Stay on the live URL. When the deploy finishes, reload. The footer badge, accent color, and (if you added one) new work should change without touching the Velocity dashboard.

## 3. Environment variables (the live audience beat)

Stay on the home page so When and Where are on screen. Then change config only, no code push.

1. Velocity, App Settings, Environment Variables.
2. Set `EVENT_DATE` = `8 December 2026`.
3. Set `EVENT_VENUE` = `Jawahar Kala Kendra, Jaipur`.
4. Optional: keep `EVENT_NAME` as `The Great Indian Art Show`, or rename it live.
5. Save and redeploy.

Reload. The When / Where cards, RSVP copy, thanks page, and footer strip should show the new date and venue. That is the env-var story: production config, not a new commit.

## 4. Rollback

1. Open the Deployments tab.
2. Roll back to the first deploy (`v1.0.0`).
3. Reload. Accent, version badge, and catalog return to v1.

## If something looks stale

Hard-refresh the live URL. RSVP and reserve data may reset after a deploy; that is the JSON file on disk, not a Velocity bug.
