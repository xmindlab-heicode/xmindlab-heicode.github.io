import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  // Orama has no Chinese stemmer, so zh falls back to Orama's default
  // (unstemmed) tokenization instead of crashing the build.
  language: 'english',
  localeMap: {
    // Must be an object (not `undefined`) — an `undefined` value falls
    // through to Orama's locale->stemmer lookup, which doesn't know "zh"
    // and throws. An empty options object skips the stemmer for zh
    // instead (no stemming, but no crash).
    zh: {},
  },
});
