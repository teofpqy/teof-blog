import { api } from 'utils';

const { generatorAPIActionTypes, generatorAPIActions } = api;

export const TopStorieActionTypes = generatorAPIActionTypes('TOPSTORIES');
export const fetchNewsActionsTypes = generatorAPIActionTypes('NEW_BY_ID');


export const buildFetchNewURL = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
export function fetchNewById(id) {
  return generatorAPIActions(buildFetchNewURL(id), 'NEW_BY_ID', {
    id
  });
}

export function fetchTopStories() {
  return generatorAPIActions('https://hacker-news.firebaseio.com/v0/topstories.json', 'TOPSTORIES', {
    cached: false,
  });
}
