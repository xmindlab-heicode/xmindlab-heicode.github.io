import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { stopwords as zhStopwords } from '@orama/stopwords/mandarin';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  // Configured per locale rather than with a top-level `language`: Orama
  // rejects `language` together with a custom tokenizer
  // (NO_LANGUAGE_WITH_CUSTOM_TOKENIZER), and zh needs a custom one.
  localeMap: {
    en: { language: 'english' },
    // Orama has no Chinese stemmer, and its default tokenizer splits on
    // whitespace — which never occurs inside a Chinese sentence, so the
    // whole sentence became one token and only exact-sentence queries
    // matched. The mandarin tokenizer segments Chinese into words so
    // partial queries ("市场") match longer titles ("MAK 市场说明").
    zh: {
      components: {
        tokenizer: createTokenizer({
          language: 'mandarin',
          stopWords: zhStopwords,
        }),
      },
    },
  },
});
