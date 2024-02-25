// Since we use `characterInfiniteListQueryOptions` in both server and client components,
// we can not colocate it with `CharacterInfiniteList`, because it is a client component.
// So, we created a separate file for the query.
import { API_URL, FIRST_PAGE } from '@/common/common-utils';
import { graphql } from '@/gql';
import type { Maybe } from '@/gql/graphql';
import { infiniteQueryOptions } from '@tanstack/react-query';
import request from 'graphql-request';

const CharacterInfiniteList_Query = graphql(/* GraphQL */ `
  query CharacterInfiniteList_Query($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        next
      }
      results {
        id
        ...CharacterCard_CharacterFragment
      }
    }
  }
`);

// https://tanstack.com/query/v5/docs/react/typescript#typing-query-options
export function characterInfiniteListQueryOptions({
  keyword,
}: {
  keyword: Maybe<string>;
}) {
  return infiniteQueryOptions({
    initialPageParam: FIRST_PAGE,
    queryKey: ['characters', { keyword }],
    queryFn: ({ pageParam }) =>
      request(API_URL, CharacterInfiniteList_Query, {
        page: pageParam,
        name: keyword,
      }),
    getNextPageParam: (lastPage) => lastPage.characters?.info?.next,
  });
}
