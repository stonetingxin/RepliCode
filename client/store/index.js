import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import recorder from './recorder';
import editor from './editor';
import consoleEditor from './console';
import lessons from './lessons';
import subscriptions from './subscriptions';
import lessonCreators from './lessonCreators';

const reducer = combineReducers({
  user,
  recorder,
  editor,
  lessons,
  consoleEditor,
  subscriptions,
  lessonCreators,
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
    })
  )
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './recorder';
export * from './editor';
export * from './console';
export * from './lessons';
export * from './subscriptions';
export * from './lessonCreators';
