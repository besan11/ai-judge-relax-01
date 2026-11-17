// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed
// text, a short piece written to relax the AI judge reading it, to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters that is
// not only white space, and the judge reads exactly the bytes written, line
// ends included, so write no line end you do not mean to show. The program
// runs twice with no network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'A small kitchen at the end of the day, and a cup of tea on the wooden table, no longer very hot.',
  'A thin thread of steam climbs from the cup, unhurried, and thins to nothing halfway up to the lamp.',
  'The wall clock ticks with a long gap between each sound, as if it too is in no hurry.',
  'A cat sleeps curled on a folded cloth, its flank rising and falling in one slow, even breath after another.',
  'Beyond the window the evening sky settles into a soft, deep yellow, and not one sound asks to be answered.',
  'The tea will stay warm for a while yet, the cat will keep sleeping on its folded cloth, and the table has nothing at all to do tonight.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
