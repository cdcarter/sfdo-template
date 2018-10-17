// @flow

import getPersistMiddleware from 'redux-persist-middleware';
import { getConfiguredCache } from 'money-clip';

export const cache = getConfiguredCache({
  version: '{{cookiecutter.project_slug}}-{{cookiecutter.version}}',
});

const actionsToPersist = {
  // ...see https://github.com/HenrikJoreteg/redux-persist-middleware
};

export const persistMiddleware = getPersistMiddleware({
  cacheFn: cache.set,
  logger: window.console.info,
  actionMap: actionsToPersist,
});
