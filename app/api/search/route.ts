import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer as createMandarinTokenizer } from '@orama/tokenizers/mandarin';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
  localeMap: {
    // Chinese needs a segmenting tokenizer. Orama's default tokenizer splits
    // on whitespace/punctuation, and Chinese text has no spaces — so a whole
    // clause ended up as ONE token (e.g. "移除旧版密钥兼容逻辑"), and querying
    // a keyword like "密钥" matched nothing. `@orama/tokenizers/mandarin`
    // segments Chinese into words instead. It also supplies the tokenizer
    // Orama would otherwise look up by language, so there's no "unknown
    // language zh" crash to work around.
    // The client MUST use the same tokenizer to segment the query the same
    // way — see components/search.tsx.
    //
    // `language: undefined` is required, not redundant: fumadocs merges this
    // entry over the top-level options with a spread (`{...options, ...mapped}`,
    // see fumadocs-core/dist/search/server.js), so the outer
    // `language: 'english'` would otherwise survive and Orama rejects a custom
    // tokenizer combined with a language (NO_LANGUAGE_WITH_CUSTOM_TOKENIZER).
    zh: {
      language: undefined,
      tokenizer: createMandarinTokenizer({ language: 'mandarin' }),
    },
  },
});
