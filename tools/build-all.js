/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — run every build tool, in the right order
   ═══════════════════════════════════════════════════════════════════════
   Usage (from apps-site/):

     node tools/build-all.js

   Order matters:
     1. build.js       rebuilds sitemap.xml from scratch (blog + sections)
     2. build-apps.js  injects the <!--APPS--> block
     3. build-langs.js injects <!--LANGS--> and removes the now-duplicated
                       single-language entries for those pages

   build.js also carries over existing <!--APPS--> / <!--LANGS--> blocks,
   so running it alone is safe too — this script just guarantees every
   section is regenerated from its own source of truth.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const { execFileSync } = require('child_process');
const path = require('path');

const TOOLS = __dirname;
const steps = ['build.js', 'build-apps.js', 'build-worksheets.js', 'build-langs.js'];

for (const step of steps) {
  console.log(`\n── ${step} ${'─'.repeat(Math.max(0, 56 - step.length))}`);
  try {
    execFileSync(process.execPath, [path.join(TOOLS, step)], {
      cwd: path.resolve(TOOLS, '..'),
      stdio: 'inherit',
    });
  } catch (e) {
    console.error(`\n✗ ${step} failed — stopping.`);
    process.exit(e.status || 1);
  }
}
console.log('\n✓ all build steps complete');
