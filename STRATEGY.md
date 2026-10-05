# Sole Vault — Studio Strategy

## Brand positioning (8 bullets)

1. **Unique angle:** Authenticated drop culture — ticket-stub typography, brutal borders, heat bars, vault pass identity; light gallery floor not purple streetwear AI.
2. **Customer:** Hype collectors and daily-wear buyers who want deadstock confidence and size clarity without scammy countdown spam.
3. **5-second feel:** Exclusive access — vault pass hero, marquee “Authenticated · Deadstock · Collab drops”, pink accent as signal not gradient wash.
4. **Signature — Drop Board:** Weekly calendar with heat bars + live countdown; `/drops` turntable 3D preview + full heat-sorted catalog.
5. **Journey:** Vault pass hero → drop board teaser → heat tiles → PDP size matrix + auth tab → authenticated checkout copy → success.
6. **Type & color:** Archivo Black display + IBM Plex Sans body; `#ff2d55` accent on `#f5f5f5` / `#0a0a0a` — high contrast, no emoji fire icons.
7. **Motion:** Drop countdown, heat bar fills, chat-style review strip; reduced-motion static drops list still readable.
8. **Conversion hooks:** VAULT15 accessories offer, Vault Pass loyalty, size-finder AI canned answers, newsletter, NYC/LA store list, authentication strip on PDP.

## Pages shipped

`/`, `/shop`, `/drops`, `/product/[id]`, `/cart`, `/checkout`, `/success`, `/wishlist`, `/about`

## Data source

`brands.json` + `premium-meta.mjs` (copied at site root); runtime catalog in `lib/data.ts` with per-SKU `heat` scores.
