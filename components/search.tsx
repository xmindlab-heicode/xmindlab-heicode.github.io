'use client';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { oramaStaticClient } from 'fumadocs-core/search/client/orama-static';
import { create } from '@orama/orama';
import { createTokenizer as createMandarinTokenizer } from '@orama/tokenizers/mandarin';
import { useI18n } from 'fumadocs-ui/contexts/i18n';

// The query is tokenized client-side, so it must be segmented the SAME way the
// index was (see app/api/search/route.ts). Previously this always used
// `language: 'english'`, whose tokenizer splits on whitespace/punctuation —
// a Chinese query like "密钥" never lined up with anything in the zh index.
function initOrama(locale?: string) {
  if (locale === 'zh') {
    return create({
      schema: { _: 'string' },
      components: {
        tokenizer: createMandarinTokenizer({ language: 'mandarin' }),
      },
    });
  }

  return create({
    schema: { _: 'string' },
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: 'english',
  });
}

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const { search, setSearch, query } = useDocsSearch({
    client: oramaStaticClient({
      initOrama,
      locale,
    }),
  });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
