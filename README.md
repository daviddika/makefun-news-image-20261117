# Front Page — 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/daviddika/makefun-news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/daviddika/makefun-news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

A make.fun bounty entry for **news-image-20261117** — "Sum up 17 November's
world news in one image" ($250, top 50 share the prize).

## The entry

**"Front Page"** is a newspaper-front-page-style editorial infographic,
1024×1024, that sums up the real world news of **Tuesday 17 November 2026**
in eight stories, all as reported that day:

1. **Lead story — U.S. strikes Iran.** American fighter jets hit a
   Revolutionary Guard missile launch site on Qeshm Island, in the Strait of
   Hormuz, in retaliation for Iranian attacks on U.S. personnel and assets.
   Iran had fired drones at a U.S. radar facility in Bahrain — its third
   attack there in days — and the USS Theodore Roosevelt carrier strike
   group arrived in the region. Illustrated with a drawn map of the Gulf.
2. **Trump, Xi and Putin meet in Shenzhen** — trilateral summit set as Trump
   and Putin arrive; Xi urges free trade, Putin attacks sanctions, as APEC
   gets under way.
3. **Ukraine hits the Kerch Bridge again** — drones and missiles strike the
   bridge linking Russia to occupied Crimea; the crossing is closed and
   damaged.
4. **U.S. loses measles-free status** — first time since 2000: 5,400+ cases
   in 2026, 10 deaths.
5. **Jensen Huang resigns from NVIDIA** — over an affair with a woman who
   may have been recruited to spy for China; the board will not reinstate
   him, as NVIDIA posts record revenue.
6. **A week of outages** — U.S. airports, major banks, Microsoft, Apple
   services and an NSA classified system hit; the DNI insists it was not a
   cyberattack.
7. **Allies press Israel on Gaza aid** — the UK, Australia, Canada and Italy
   urge Israel to open crossings as winter rains deepen the shelter crisis.
8. **Depardieu pleads guilty** — Gérard Depardieu admits sexual assault in a
   Paris court and drops his appeal.

No quotes, numbers or names are invented: every fact above is one of the
verified facts supplied for this bounty.

## Design

Clean newsprint palette (cream paper, black ink, one red accent), serif
headlines, a dominant hero story with a drawn Gulf map, three secondary
stories in a row, and four shorter stories below. The date
**17 NOVEMBER 2026** is the masthead, so the day the image sums up is
unmistakable at any size.

## Files

- `main.ts` — Node 22 program (standard library only). Copies
  `assets/entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`).
  No network, no randomness: both runs write identical bytes.
- `assets/entry.png` — the image, 1024×1024 PNG, under 1 MiB.
- `design.html` — the HTML+CSS source the image was rendered from
  (headless Chrome screenshot), kept for reference.
- `LICENSE` — MIT.

## Verify

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png   # identical
```

## License

MIT — see `LICENSE`.
