// "Front Page" — news-image-20261117 entry (Node 22, standard library only).
// The image is assets/entry.png beside this file, a newspaper-front-page
// infographic summing up Tuesday 17 November 2026. The program copies it
// to /output/entry.png, byte for byte, with no network and no randomness,
// so both grader runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./assets/entry.png', import.meta.url), join(outDir, 'entry.png'));
