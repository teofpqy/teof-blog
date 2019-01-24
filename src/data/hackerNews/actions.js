import { api } from 'utils';

const { generatorAPIActionTypes, generatorAPIActions } = api;

export const TopStorieActionTypes = generatorAPIActionTypes('TOPSTORIES');
export const fetchNewsActionsTypes = generatorAPIActionTypes('NEW_BY_ID');


export function fetchNewById(id) {
  return generatorAPIActions(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, 'NEW_BY_ID', {
    id
  });
}

export function fetchTopStories() {
  return generatorAPIActions('https://hacker-news.firebaseio.com/v0/topstories.json', 'TOPSTORIES', {
    cached: false,
  });
}
