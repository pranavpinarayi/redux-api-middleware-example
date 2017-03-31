function apiMiddlewareCreator(axios) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, axios);
    }
    const { payload, type, ...rest } = action;

    if (!payload) {
      return next(action);
    }

    next({ ...rest, type: `${type}_PENDING`});
    const actionPromise = payload(axios);
    actionPromise
      .then(result => next({ ...rest, result, type: `${type}_FULFILLED` }))
      .catch(error => next({ ...rest, error, type: `${type}_REJECTED` }));
    return actionPromise;
  };
}

const apiMiddleware = apiMiddlewareCreator();
apiMiddleware.withExtraArgument = apiMiddlewareCreator

export default apiMiddleware;
