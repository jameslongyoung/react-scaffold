/*tslint:disable: no-var-requires */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {IS_DEVELOPMENT} from '../env/index'
let baseMiddleWares = [thunk];
if (IS_DEVELOPMENT) {
    baseMiddleWares = baseMiddleWares.concat([logger]);
}
export function configureStore(initialState, rootReducer, otherMiddlewares?) {
	const buildStore = compose(
		applyMiddleware(...baseMiddleWares, ...(otherMiddlewares || []))
	)(createStore);
	return buildStore(rootReducer, initialState);
}
